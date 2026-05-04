"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Fires on mount — only place this on pages that are gated behind a real action
// (e.g. /offer-request-confirmed, which requires the ho_submitted cookie).
export default function ConversionPixel() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;

    const gads = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    const convLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

    // GA4 generate_lead event
    window.gtag("event", "generate_lead", {
      event_category: "form",
      event_label: "offer_request_confirmed",
    });

    // Google Ads conversion — requires AW-XXXXXXXXX/label format
    if (gads && convLabel) {
      window.gtag("event", "conversion", {
        send_to: `${gads}/${convLabel}`,
      });
    }
  }, []);

  return null;
}
