import { NextRequest, NextResponse } from "next/server";
import { getClientIp } from "@/lib/getClientIp";
import { lookupGeo } from "@/lib/getGeo";
import { getSupabaseAdmin } from "@/lib/supabaseServer";

export const runtime = "nodejs";

type TrackPayload = {
  sessionId: string;
  path?: string;
  referrer?: string;
};

export async function POST(request: NextRequest) {
  let body: TrackPayload;
  try {
    body = (await request.json()) as TrackPayload;
  } catch {
    return NextResponse.json({ success: false, error: "bad_json" }, { status: 400 });
  }

  if (!body.sessionId || typeof body.sessionId !== "string") {
    return NextResponse.json(
      { success: false, error: "sessionId_required" },
      { status: 400 }
    );
  }

  const ip = getClientIp(request);
  const userAgent = request.headers.get("user-agent") || null;
  const geo = await lookupGeo(ip);

  try {
    const sb = getSupabaseAdmin();
    await sb.from("honest_offer_visits").insert({
      session_id: body.sessionId,
      ip_address: ip,
      country: geo.country,
      region: geo.region,
      city: geo.city,
      user_agent: userAgent,
      referrer: body.referrer ?? null,
      path: body.path ?? null,
    });
  } catch (err) {
    console.error("track insert failed", err);
    // Never block the user over analytics.
  }

  return NextResponse.json({ success: true });
}
