// Trackable call link used by the welcome email's button.
// Resend click-tracking can only wrap http(s) links (tel: is invisible to
// it), so the email points here. We log the click ourselves, then bounce
// the visitor straight into their phone dialer.

import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseServer";
import { getClientIp } from "@/lib/getClientIp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PHONE_TEL = "tel:+18592014950";
const PHONE_DISPLAY = "(859) 201-4950";

export async function GET(request: NextRequest) {
  // Best-effort log — never block the redirect over analytics.
  try {
    const src = request.nextUrl.searchParams.get("src") || "unknown";
    const sb = getSupabaseAdmin();
    await sb.from("email_events").insert({
      event_type: "call_redirect",
      link_url: PHONE_TEL,
      details: {
        src,
        ip: getClientIp(request),
        user_agent: request.headers.get("user-agent"),
      },
    });
  } catch (err) {
    console.error("call redirect log failed", err);
  }

  // A tiny page that jumps to the dialer immediately, with a visible
  // fallback button (some in-app browsers block automatic tel: redirects).
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="refresh" content="0;url=${PHONE_TEL}" />
  <title>Calling Honest Offer…</title>
</head>
<body style="margin:0; background:#FAF5EB; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif; color:#1F1A15; display:flex; align-items:center; justify-content:center; min-height:100vh; text-align:center;">
  <div style="padding:24px;">
    <p style="font-size:17px; color:#3E362D; margin:0 0 18px;">Connecting you to Honest Offer&hellip;</p>
    <a href="${PHONE_TEL}" style="display:inline-block; padding:16px 28px; background:#B4381F; color:#FAF5EB; font-weight:700; font-size:17px; border-radius:12px; text-decoration:none; box-shadow:0 2px 0 #8C2A14;">
      &#9742;&nbsp; Tap to call ${PHONE_DISPLAY}
    </a>
  </div>
  <script>window.location.href = ${JSON.stringify(PHONE_TEL)};</script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
  });
}
