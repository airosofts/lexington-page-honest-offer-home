// Lightweight client-error sink. Receives resource-load failures, JS
// errors, promise rejections, and "stylesheet missing" reports from the
// ClientErrorMonitor component running in users' browsers.
//
// Best-effort: never throws back at the client. If Supabase is down or
// the row fails to insert, we still return ok.

import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseServer";
import { getClientIp } from "@/lib/getClientIp";

export const runtime = "nodejs";

type Payload = {
  site?: string;
  kind?: string;
  message?: string;
  stack?: string;
  tag?: string;
  src?: string;
  url?: string;
  userAgent?: string;
  [k: string]: unknown;
};

export async function POST(request: NextRequest) {
  let body: Payload = {};
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  try {
    const sb = getSupabaseAdmin();
    await sb.from("client_errors").insert({
      site: body.site || "main",
      kind: body.kind || "unknown",
      message: body.message ?? null,
      stack: body.stack ?? null,
      tag: body.tag ?? null,
      src: body.src ?? null,
      url: body.url ?? null,
      user_agent: body.userAgent ?? request.headers.get("user-agent") ?? null,
      ip_address: getClientIp(request),
      details: body,
    });
  } catch (err) {
    console.error("client_errors insert failed", err);
  }

  return NextResponse.json({ ok: true });
}
