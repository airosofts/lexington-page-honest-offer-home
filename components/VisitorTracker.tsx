"use client";

import { useEffect } from "react";
import { getOrCreateSessionId } from "@/lib/session";

// Fires once per mount: posts a visit row (IP resolved server-side, geo too).
// The server dedupes "unique" by (session_id + date) when reading analytics.
export default function VisitorTracker() {
  useEffect(() => {
    const sessionId = getOrCreateSessionId();
    const payload = {
      sessionId,
      path: window.location.pathname + window.location.search,
      referrer: document.referrer || null,
    };
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {
      /* ignore */
    });
  }, []);

  return null;
}
