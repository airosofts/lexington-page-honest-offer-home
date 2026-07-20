// Resend webhook receiver — records email lifecycle events (delivered,
// opened, clicked, bounced, complained …) into the email_events table so
// we can see whether the welcome email was opened and whether the call
// button was clicked.
//
// Configure in the Resend dashboard (Webhooks → Add endpoint):
//   URL:    https://kentucky.honestofferhome.com/api/resend-webhook
//   Events: at minimum email.delivered, email.opened, email.clicked,
//           email.bounced, email.complained
// Then paste the signing secret (whsec_…) into RESEND_WEBHOOK_SECRET.
//
// Signature scheme is Svix: HMAC-SHA256 over "{id}.{timestamp}.{body}"
// keyed with the base64-decoded part of the whsec_ secret. If the secret
// env var is unset we accept unverified (and log a warning) so the
// integration still works before the secret is configured — set it ASAP.

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getSupabaseAdmin } from "@/lib/supabaseServer";

export const runtime = "nodejs";

function verifySvixSignature(
  secret: string,
  id: string,
  timestamp: string,
  body: string,
  signatureHeader: string
): boolean {
  try {
    const key = Buffer.from(secret.replace(/^whsec_/, ""), "base64");
    const signedContent = `${id}.${timestamp}.${body}`;
    const expected = crypto.createHmac("sha256", key).update(signedContent).digest("base64");
    // Header can contain several space-separated "v1,<sig>" entries.
    return signatureHeader.split(" ").some((part) => {
      const sig = part.split(",")[1];
      if (!sig) return false;
      const a = Buffer.from(sig);
      const b = Buffer.from(expected);
      return a.length === b.length && crypto.timingSafeEqual(a, b);
    });
  } catch {
    return false;
  }
}

type ResendEvent = {
  type?: string;
  created_at?: string;
  data?: {
    email_id?: string;
    from?: string;
    to?: string[] | string;
    subject?: string;
    tags?: Array<{ name: string; value: string }> | Record<string, string>;
    click?: { link?: string };
    link?: string;
  };
};

export async function POST(request: NextRequest) {
  const body = await request.text();

  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (secret) {
    const id = request.headers.get("svix-id") || "";
    const ts = request.headers.get("svix-timestamp") || "";
    const sig = request.headers.get("svix-signature") || "";
    if (!verifySvixSignature(secret, id, ts, body, sig)) {
      return NextResponse.json({ error: "invalid_signature" }, { status: 401 });
    }
  } else {
    console.warn("resend-webhook: RESEND_WEBHOOK_SECRET not set — accepting unverified");
  }

  let event: ResendEvent;
  try {
    event = JSON.parse(body) as ResendEvent;
  } catch {
    return NextResponse.json({ error: "bad_json" }, { status: 400 });
  }

  const to = Array.isArray(event.data?.to) ? event.data?.to[0] : event.data?.to;
  const link = event.data?.click?.link ?? event.data?.link ?? null;

  try {
    const sb = getSupabaseAdmin();
    await sb.from("email_events").insert({
      email_id: event.data?.email_id ?? null,
      event_type: event.type ?? "unknown",
      recipient: to ?? null,
      subject: event.data?.subject ?? null,
      link_url: link,
      details: event as unknown as Record<string, unknown>,
    });
  } catch (err) {
    console.error("email_events insert failed", err);
    // Return 200 anyway — Resend retries on non-2xx and we don't want
    // storms over a transient DB issue.
  }

  return NextResponse.json({ received: true });
}
