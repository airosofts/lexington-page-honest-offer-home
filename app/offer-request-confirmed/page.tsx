import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import ThankYouContent from "@/components/ThankYouContent";
import ConversionPixel from "@/components/ConversionPixel";
import { getSupabaseAdmin } from "@/lib/supabaseServer";
import { getClientIp } from "@/lib/getClientIp";
import { lookupGeo } from "@/lib/getGeo";

// Google Ads conversion URL. Rules:
//   1. Only reachable after a real Step-3 submission (cookie gate below).
//   2. Not linked from nav/footer/sitemap and noindex'd.
//   3. Stable path — changing it breaks the Google Ads conversion action.
export const metadata: Metadata = {
  title: "Offer request confirmed — Honest Offer",
  description:
    "Your offer request has been received. A written cash offer is on its way within 24 hours.",
  robots: { index: false, follow: false, nocache: true },
};

// Never cache — we need the cookie read and insert to run per request.
export const dynamic = "force-dynamic";

export default async function OfferRequestConfirmedPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("ho_submitted")?.value;

  // Gate: no cookie = no real submission happened in this browser recently.
  // Redirect home so this page never renders for direct-URL or shared-link visits.
  if (!sessionId) {
    redirect("/");
  }

  // Log a conversion-page view. We dedupe per session at read time on the
  // admin side (Set of session_id filtered to this path), so a refresh
  // within the cookie window doesn't inflate the metric.
  try {
    const hdrs = await headers();
    const ip = getClientIp(hdrs);
    const userAgent = hdrs.get("user-agent") || null;
    const referrer = hdrs.get("referer") || null;

    // Geo in parallel with the insert — best-effort, never block rendering.
    const [geo] = await Promise.all([lookupGeo(ip)]);

    const sb = getSupabaseAdmin();
    await sb.from("honest_offer_visits").insert({
      session_id: sessionId,
      ip_address: ip,
      country: geo.country,
      region: geo.region,
      city: geo.city,
      user_agent: userAgent,
      referrer,
      path: "/offer-request-confirmed",
    });
  } catch (err) {
    // Never block the thank-you page over analytics.
    console.error("conversion log failed", err);
  }

  return (
    <>
      <ConversionPixel />

      <main
        className="container-site"
        style={{ padding: "clamp(60px, 8vw, 120px) 0" }}
      >
        <ThankYouContent />
      </main>

    </>
  );
}
