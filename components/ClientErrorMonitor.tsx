"use client";

import { useEffect } from "react";

// Mount once at the root layout. It listens for resource-load failures,
// JS errors, and unhandled promise rejections, and 1.5s after mount it
// also verifies that the brand CSS variable `--barn` resolves — if not,
// the page is rendering without the Next.js CSS chunk applied (the exact
// symptom reported by the marketing team).
//
// Everything POSTs to /api/errors → Supabase `client_errors` table.
// Best-effort. Never throws. Never blocks the page.

const SITE = "lexington"; // overridden per-site copy

export default function ClientErrorMonitor() {
  useEffect(() => {
    let cancelled = false;

    function send(payload: Record<string, unknown>) {
      try {
        fetch("/api/errors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            site: SITE,
            url: window.location.href,
            userAgent: navigator.userAgent,
          }),
          keepalive: true,
        }).catch(() => {});
      } catch {
        /* ignore */
      }
    }

    // Resource failures (CSS / JS / images) — must use capture phase.
    const onResourceError = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t || !t.tagName) return;
      const tag = t.tagName;
      if (tag !== "LINK" && tag !== "SCRIPT" && tag !== "IMG") return;
      const src =
        (t as HTMLLinkElement).href ||
        (t as HTMLScriptElement).src ||
        (t as HTMLImageElement).src ||
        null;
      send({ kind: "resource_error", tag, src });
    };
    window.addEventListener("error", onResourceError, true);

    // JS errors (bubble phase)
    const onJsError = (e: ErrorEvent) => {
      send({
        kind: "js_error",
        message: e.message,
        src: e.filename,
        stack: e.error?.stack || null,
        line: e.lineno,
        column: e.colno,
      });
    };
    window.addEventListener("error", onJsError);

    // Unhandled promise rejections
    const onReject = (e: PromiseRejectionEvent) => {
      const reason = e.reason as { message?: string; stack?: string } | undefined;
      send({
        kind: "promise_rejection",
        message: reason?.message || String(e.reason),
        stack: reason?.stack || null,
      });
    };
    window.addEventListener("unhandledrejection", onReject);

    // After paint settles, verify brand CSS applied. --barn = #B4381F.
    const t = window.setTimeout(() => {
      if (cancelled) return;
      try {
        const barn = getComputedStyle(document.documentElement)
          .getPropertyValue("--barn")
          .trim();
        if (!barn) {
          send({
            kind: "stylesheet_missing",
            message: "--barn CSS variable not set 1.5s after mount",
          });
        }
      } catch {
        /* ignore */
      }
    }, 1500);

    return () => {
      cancelled = true;
      window.removeEventListener("error", onResourceError, true);
      window.removeEventListener("error", onJsError);
      window.removeEventListener("unhandledrejection", onReject);
      window.clearTimeout(t);
    };
  }, []);

  return null;
}
