"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Fires on mount — only place this on pages gated behind a real action
// (e.g. /offer-request-confirmed, which requires the ho_submitted cookie).
//
// Why this file is more elaborate than a one-liner gtag call:
//
//   1. DE-DUP. Refresh, back button, or reopening the thank-you page inside
//      the cookie window used to fire the pixel again, inflating GA4 and
//      Google Ads counts. We now guard with sessionStorage so it only
//      fires once per browser session.
//
//   2. GTAG READINESS. gtag.js loads afterInteractive, so on slow
//      connections the pixel used to fire before gtag existed and
//      silently drop the conversion. We now poll up to 5 s.
//
//   3. META PIXEL LEAD. We now fire fbq('track','Lead') so Facebook Ads
//      can attribute conversions. Previously only sitewide PageView fired.

const SESSION_KEY = "ho_conv_fired";
const MAX_WAIT_MS = 5000;
const POLL_MS = 200;

export default function ConversionPixel() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") return;
    } catch {
      /* private modes can throw — proceed anyway */
    }

    const gads = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    const convLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

    let elapsed = 0;
    let stopped = false;

    const fire = () => {
      const hasGtag = typeof window.gtag === "function";
      const hasFbq = typeof window.fbq === "function";
      if (!hasGtag && !hasFbq) return false;

      try {
        if (hasGtag) {
          window.gtag!("event", "generate_lead", {
            event_category: "form",
            event_label: "offer_request_confirmed",
          });
          if (gads && convLabel) {
            window.gtag!("event", "conversion", {
              send_to: `${gads}/${convLabel}`,
            });
          }
        }
        if (hasFbq) {
          window.fbq!("track", "Lead");
        }
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          /* ignore */
        }
      } catch (err) {
        console.error("conversion pixel firing failed", err);
      }
      return true;
    };

    const tick = () => {
      if (stopped) return;
      if (fire()) return;
      elapsed += POLL_MS;
      if (elapsed >= MAX_WAIT_MS) return;
      window.setTimeout(tick, POLL_MS);
    };
    tick();

    return () => {
      stopped = true;
    };
  }, []);

  return null;
}
