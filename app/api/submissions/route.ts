import { NextRequest, NextResponse } from "next/server";
import { getClientIp } from "@/lib/getClientIp";
import { lookupGeo } from "@/lib/getGeo";
import { getSupabaseAdmin } from "@/lib/supabaseServer";

export const runtime = "nodejs";

type Step = 1 | 2 | 3;

type SubmissionPayload = {
  sessionId: string;
  step: Step;
  mondayItemId?: string;

  // Step 1
  address?: string;
  phone?: string;

  // Step 2
  condition?: string;
  timeline?: string;

  // Step 3
  name?: string;
  email?: string;
  propertyType?: string;
};

type Row = {
  session_id: string;
  last_step: number;
  completed: boolean;
  completed_at: string | null;
  address?: string | null;
  property_type?: string | null;
  phone?: string | null;
  condition?: string | null;
  timeline?: string | null;
  name?: string | null;
  email?: string | null;
  ip_address: string | null;
  country: string | null;
  region: string | null;
  city: string | null;
  user_agent: string | null;
  referrer: string | null;
};

// ── Monday.com helpers ───────────────────────────────────────────────────────

const MONDAY_API = "https://api.monday.com/v2";

const PROPERTY_TYPE_LABELS: Record<string, string> = {
  "Single-family home":       "Single Family Home",
  "Townhouse / condo":        "Condo / Townhouse",
  "Multi-family (2-4 units)": "Multi-Family (2-4 Units)",
  "Mobile / manufactured":    "Mobile Home / Manifactured",
  "Vacant land":              "Vacant Land",
};

const CONDITION_LABELS: Record<string, string> = {
  "move-in":   "Move-in Ready",
  "minor":     "Minor Repairs",
  "major":     "Needs Major Work",
  "tear-down": "Tear Down",
};

const TIMELINE_LABELS: Record<string, string> = {
  "asap":      "ASAP",
  "30":        "Within 30 Days",
  "90":        "1-3 Months",
  "exploring": "Just Exploring",
};

function mondayHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: process.env.MONDAY_API_KEY ?? "",
  };
}

function clean(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== null && v !== undefined && v !== "")
  );
}

async function mondayCreate(opts: {
  boardId: string; groupId: string; address: string;
  phone?: string | null; sessionId: string;
  ip?: string | null; city?: string | null; region?: string | null; country?: string | null;
}): Promise<string | null> {
  const rawPhone = (opts.phone ?? "").replace(/\D/g, "");
  const cols: Record<string, unknown> = {
    text_mm1jpyqy: opts.address,
    text_mm2qjgz3: opts.sessionId,
    text_mm2qxwj9: opts.ip ?? "",
    text_mm2q29sv: opts.city ?? "",
    text_mm2qmvzf: opts.region ?? "",
    text_mm2qes8n: opts.country ?? "",
  };
  if (rawPhone.length >= 10) cols["phone_mm1jmnd8"] = { phone: `+1${rawPhone}`, countryShortName: "US" };

  const mutation = `mutation {
    create_item(
      board_id: ${opts.boardId}
      group_id: "${opts.groupId}"
      item_name: ${JSON.stringify(opts.address || "New Lead")}
      column_values: ${JSON.stringify(JSON.stringify(clean(cols)))}
    ) { id }
  }`;

  const res = await fetch(MONDAY_API, { method: "POST", headers: mondayHeaders(), body: JSON.stringify({ query: mutation }) });
  if (!res.ok) { console.error("monday create failed", res.status, await res.text()); return null; }
  const json = await res.json() as { data?: { create_item?: { id: string } }; errors?: unknown[] };
  if (json.errors?.length) { console.error("monday create errors", JSON.stringify(json.errors)); return null; }
  return json.data?.create_item?.id ?? null;
}

async function mondayUpdate(opts: { boardId: string; itemId: string; columns: Record<string, unknown> }) {
  const cleaned = clean(opts.columns);
  if (!Object.keys(cleaned).length) return;
  const mutation = `mutation {
    change_multiple_column_values(
      board_id: ${opts.boardId}
      item_id: ${opts.itemId}
      column_values: ${JSON.stringify(JSON.stringify(cleaned))}
    ) { id }
  }`;
  const res = await fetch(MONDAY_API, { method: "POST", headers: mondayHeaders(), body: JSON.stringify({ query: mutation }) });
  if (!res.ok) console.error("monday update failed", res.status, await res.text());
}

async function mondayRename(opts: { boardId: string; itemId: string; name: string }) {
  const mutation = `mutation {
    change_column_value(
      board_id: ${opts.boardId}
      item_id: ${opts.itemId}
      column_id: "name"
      value: ${JSON.stringify(JSON.stringify(opts.name))}
    ) { id }
  }`;
  const res = await fetch(MONDAY_API, { method: "POST", headers: mondayHeaders(), body: JSON.stringify({ query: mutation }) });
  if (!res.ok) console.error("monday rename failed", res.status, await res.text());
}

// ────────────────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  let body: SubmissionPayload;
  try {
    body = (await request.json()) as SubmissionPayload;
  } catch {
    return NextResponse.json({ success: false, error: "bad_json" }, { status: 400 });
  }

  if (!body.sessionId || ![1, 2, 3].includes(body.step)) {
    return NextResponse.json({ success: false, error: "sessionId_and_step_required" }, { status: 400 });
  }

  const ip = getClientIp(request);
  const userAgent = request.headers.get("user-agent") || null;
  const referrer = request.headers.get("referer") || null;
  const sb = getSupabaseAdmin();

  const { data: existing } = await sb
    .from("honest_offer_submissions")
    .select("id, address, property_type, phone, condition, timeline, name, email, country, region, city, ip_address, last_step, completed")
    .eq("session_id", body.sessionId)
    .maybeSingle();

  let geo = { country: existing?.country ?? null, region: existing?.region ?? null, city: existing?.city ?? null };
  if (!existing || (!geo.country && !geo.region && !geo.city)) {
    geo = await lookupGeo(ip);
  }

  const row: Partial<Row> = {
    session_id: body.sessionId,
    last_step: Math.max(body.step, existing?.last_step ?? body.step),
    completed: body.step === 3 ? true : existing?.completed ?? false,
    completed_at: body.step === 3 ? new Date().toISOString() : null,
    ip_address: ip ?? existing?.ip_address ?? null,
    country: geo.country,
    region: geo.region,
    city: geo.city,
    user_agent: userAgent,
    referrer: referrer,
  };

  if (body.step === 1) {
    if (body.address !== undefined) row.address = body.address;
    if (body.phone !== undefined) row.phone = body.phone;
  } else if (body.step === 2) {
    if (body.condition !== undefined) row.condition = body.condition;
    if (body.timeline !== undefined) row.timeline = body.timeline;
  } else if (body.step === 3) {
    if (body.name !== undefined) row.name = body.name;
    if (body.email !== undefined) row.email = body.email;
    if (body.propertyType !== undefined) row.property_type = body.propertyType;
  }

  const { error } = await sb.from("honest_offer_submissions").upsert(row, { onConflict: "session_id" });
  if (error) {
    console.error("submission upsert failed", error);
    return NextResponse.json({ success: false, error: "db_error" }, { status: 500 });
  }

  // ── Monday.com — per-step sync ─────────────────────────────────────────────
  const boardId = process.env.MONDAY_BOARD_ID;
  const groupId = process.env.MONDAY_GROUP_ID ?? "topics";
  const apiKey  = process.env.MONDAY_API_KEY;
  let mondayItemId: string | null = null;

  if (apiKey && boardId) {
    if (body.step === 1) {
      mondayItemId = await mondayCreate({
        boardId, groupId,
        address: body.address ?? "",
        phone: body.phone,
        sessionId: body.sessionId,
        ip, city: geo.city, region: geo.region, country: geo.country,
      }).catch((err) => { console.error("monday create threw", err); return null; });

    } else if (body.step === 2 && body.mondayItemId) {
      const condLabel = CONDITION_LABELS[body.condition ?? ""];
      const timeLabel = TIMELINE_LABELS[body.timeline ?? ""];
      const cols: Record<string, unknown> = {};
      if (condLabel) cols["color_mm2q39x3"] = { label: condLabel };
      if (timeLabel) cols["color_mm2qyjt4"] = { label: timeLabel };
      await mondayUpdate({ boardId, itemId: body.mondayItemId, columns: cols })
        .catch((err) => console.error("monday step2 update threw", err));

    } else if (body.step === 3 && body.mondayItemId) {
      const fullName  = body.name?.trim() ?? "";
      const nameParts = fullName.split(" ");
      const firstName = nameParts[0] ?? "";
      const lastName  = nameParts.slice(1).join(" ");
      const cols: Record<string, unknown> = { text_mm2qmj12: firstName, text_mm2qxxea: lastName };
      if (body.email) cols["email_mm2qysja"] = { email: body.email, text: body.email };
      const propLabel = PROPERTY_TYPE_LABELS[body.propertyType ?? ""];
      if (propLabel) cols["color_mm1jcpen"] = { label: propLabel };
      await Promise.all([
        mondayUpdate({ boardId, itemId: body.mondayItemId, columns: cols })
          .catch((err) => console.error("monday step3 update threw", err)),
        fullName
          ? mondayRename({ boardId, itemId: body.mondayItemId, name: fullName })
              .catch((err) => console.error("monday rename threw", err))
          : Promise.resolve(),
      ]);
    }
  }
  // ──────────────────────────────────────────────────────────────────────────

  const res = NextResponse.json({
    success: true,
    ...(mondayItemId ? { mondayItemId } : {}),
  });

  if (body.step === 3) {
    res.cookies.set("ho_submitted", body.sessionId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60,
    });
  }

  return res;
}
