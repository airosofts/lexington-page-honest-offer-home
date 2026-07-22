// Welcome / lead-confirmation email — sent right after step 3 of the form.
// Template mirrors emails/lexington-welcome.html in the parent repo (the
// Roland-approved preview). Keep the two in sync if copy changes.

const PHONE_DISPLAY = "(859) 201-4950";
// The call button uses an https link (not tel:) so Resend click-tracking can
// wrap it — tel: links are invisible to click tracking. /call logs the click
// and forwards to the dialer.
const CALL_URL = "https://kentucky.honestofferhome.com/call?src=welcome_email";

// Call-back coverage window, Eastern time. Confirm with Jeff if hours change.
const HOURS = { start: 8, end: 20, days: [1, 2, 3, 4, 5, 6] }; // Mon–Sat 8am–8pm ET

function isWithinCallHours(now = new Date()): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    hour12: false,
    weekday: "short",
  }).formatToParts(now);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const dayNum = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
  return HOURS.days.includes(dayNum) && hour >= HOURS.start && hour < HOURS.end;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function buildWelcomeEmail(input: {
  firstName: string; // kept for API compatibility — no longer used in copy
  address: string;
  now?: Date;
}): { subject: string; html: string } {
  // Per Roland's review: no recipient name, no named sender — acquisitions
  // people change often, so the email stays person-neutral.
  const address = esc(input.address.trim());
  const inHours = isWithinCallHours(input.now);

  const subject = inHours
    ? `Got it — expect our call within the hour`
    : `Got it — you're our first call tomorrow`;

  const callTiming = inHours
    ? `within the hour, you&rsquo;ll get a call from <strong style="color:#1F1A15;">(859)&nbsp;201-4950</strong>. That&rsquo;s us &mdash; save the number so you know it&rsquo;s not spam.`
    : `you caught us outside office hours &mdash; you&rsquo;ll be the <strong style="color:#1F1A15;">first call tomorrow morning</strong> from <strong style="color:#1F1A15;">(859)&nbsp;201-4950</strong>. Save the number so you know it&rsquo;s us, not spam.`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>We got your request — Honest Offer</title>
  <style>
    @media only screen and (max-width: 600px) {
      .card { padding: 28px 22px !important; }
      .h1 { font-size: 24px !important; }
      .btn a { font-size: 15px !important; padding: 14px 20px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#FAF5EB; font-family: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color:#1F1A15; -webkit-font-smoothing: antialiased;">
  <div style="display:none; font-size:1px; color:#FAF5EB; max-height:0; overflow:hidden;">
    Your request is with our local Kentucky team — here&rsquo;s exactly what happens next.
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAF5EB;">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px; width:100%;">
          <tr>
            <td style="padding: 0 0 22px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align: middle; padding-right: 10px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 11L12 4l9 7v9H3V11z" stroke="#1F1A15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                      <path d="M8 14.5l2.5 2.5L16 11.5" stroke="#B4381F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    </svg>
                  </td>
                  <td style="vertical-align: middle;">
                    <div style="font-weight:700; font-size:19px; letter-spacing:-0.01em; color:#1F1A15;">
                      Honest Offer <span style="font-weight:500;">Inc.</span>
                    </div>
                    <div style="font-size:12px; color:#7A6F61; margin-top:2px;">
                      Lexington, KY &middot; Locally owned
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="card" style="background-color:#FFFCF5; border:1px solid #E5D9C2; border-radius:16px; padding: 36px 40px 32px;">
              <div style="font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.14em; color:#8C2A14; margin-bottom: 10px;">
                Request received
              </div>
              <h1 class="h1" style="margin:0 0 16px; font-size:28px; line-height:1.2; letter-spacing:-0.02em; font-weight:800; color:#1F1A15;">
                Hi! <em style="font-style:italic; color:#8C2A14; font-weight:800;">You&rsquo;re all set.</em>
              </h1>
              <p style="margin:0 0 14px; font-size:16px; line-height:1.6; color:#3E362D;">
                Your request for <strong style="color:#1F1A15;">${address}</strong> just landed with our local Kentucky team — a real person, not an autoresponder.
              </p>
              <p style="margin:0 0 14px; font-size:16px; line-height:1.6; color:#3E362D;">
                <strong style="color:#1F1A15;">Here&rsquo;s exactly what happens next:</strong> ${callTiming}
              </p>
              <p style="margin:0 0 22px; font-size:16px; line-height:1.6; color:#3E362D;">
                No repairs, no fees, and no obligation — if the number we offer doesn&rsquo;t work for you, that&rsquo;s completely fine.
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="btn" style="margin: 4px 0 8px;">
                <tr>
                  <td align="center" style="background-color:#B4381F; border-radius:12px; box-shadow: 0 2px 0 #8C2A14;">
                    <a href="${CALL_URL}" style="display:inline-block; padding:15px 26px; font-family: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-weight:700; font-size:16px; color:#FAF5EB; text-decoration:none; letter-spacing:-0.005em;">
                      &#9742;&nbsp; Can&rsquo;t wait, call now: ${PHONE_DISPLAY}
                    </a>
                  </td>
                </tr>
              </table>
              <div style="font-size:14px; color:#3E362D; margin-bottom: 22px;">
                Questions before we call? <strong style="color:#1F1A15;">Just hit reply</strong> — a real person reads it.
              </div>
              <div style="border-top:1px dashed #E5D9C2; padding-top:18px; margin-top: 4px;">
                <div style="font-weight:600; font-size:15px; color:#1F1A15;">Talk soon!</div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 22px 6px 0; font-size:12px; color:#7A6F61; line-height:1.55; text-align:center;">
              Honest Offer Inc. &middot; 257 Elmwood Dr, Lexington, KY 40505<br />
              You&rsquo;re getting this because you submitted a request on
              <a href="https://kentucky.honestofferhome.com" style="color:#8C2A14; text-decoration:none;">kentucky.honestofferhome.com</a>.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}

// Best-effort send via Resend. Never throws — a failed email must never fail
// the form submission.
export async function sendWelcomeEmail(input: {
  to: string;
  firstName: string;
  address: string;
  sessionId: string;
}): Promise<{ sent: boolean; id?: string; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { sent: false, error: "RESEND_API_KEY not set" };

  const { subject, html } = buildWelcomeEmail(input);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Honest Offer <info@honestofferhome.com>",
        to: [input.to],
        reply_to: "jeff@ableman.co",
        subject,
        html,
        // Tags flow through to webhook events so we can attribute
        // opens/clicks back to this campaign + lead session.
        tags: [
          { name: "campaign", value: "lexington-welcome" },
          { name: "session_id", value: input.sessionId.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 50) },
        ],
      }),
    });
    const json = (await res.json()) as { id?: string; message?: string };
    if (!res.ok) {
      console.error("resend send failed", res.status, JSON.stringify(json));
      return { sent: false, error: json.message || `http_${res.status}` };
    }
    return { sent: true, id: json.id };
  } catch (err) {
    console.error("resend send threw", err);
    return { sent: false, error: err instanceof Error ? err.message : String(err) };
  }
}
