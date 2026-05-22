// Phone validation endpoint — reuses the Ableman signup approach:
//   1. Heuristic checks (lib/phoneValidation.ts) — instant, catches garbage.
//   2. Numverify carrier lookup — confirms the number is a real, working
//      US line. Keys rotate (each free key allows 100 lookups/month).
//
// NUMVERIFY_API_KEYS — comma-separated list of apilayer.net access keys.
// If unset or all keys are exhausted, validation degrades gracefully to
// heuristics-only so a real seller is never hard-blocked by an outage.

import { NextRequest, NextResponse } from "next/server";
import { checkUsPhoneHeuristics } from "@/lib/phoneValidation";

export const runtime = "nodejs";

// Best-effort rotation pointer. Resets on cold start — fine, it just
// means we re-scan from key 0 occasionally.
let keyCursor = 0;

function getKeys(): string[] {
  return (process.env.NUMVERIFY_API_KEYS || "")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
}

type NumverifyResult = "valid" | "invalid" | "unavailable";

async function numverifyLookup(phoneWithCc: string): Promise<NumverifyResult> {
  const keys = getKeys();
  if (keys.length === 0) return "unavailable";

  for (let attempt = 0; attempt < keys.length; attempt++) {
    const idx = (keyCursor + attempt) % keys.length;
    const key = keys[idx];
    const url = `http://apilayer.net/api/validate?access_key=${key}&number=${phoneWithCc}&country_code=US&format=1`;

    try {
      const res = await fetch(url, { cache: "no-store" });
      const data = (await res.json()) as {
        valid?: boolean;
        country_code?: string;
        error?: { code?: number; info?: string };
      };

      // Key out of monthly credits → roll to the next key.
      if (
        data.error &&
        (data.error.code === 104 ||
          (data.error.info || "").toLowerCase().includes("monthly"))
      ) {
        continue;
      }

      // Any other API error → don't block the lead, degrade to heuristics.
      if (data.error) return "unavailable";

      // Got a usable answer — remember this key for next time.
      keyCursor = idx;
      return data.valid && data.country_code === "US" ? "valid" : "invalid";
    } catch {
      // Network error on this key → try the next one.
      continue;
    }
  }

  return "unavailable";
}

export async function POST(request: NextRequest) {
  let body: { phone?: string };
  try {
    body = (await request.json()) as { phone?: string };
  } catch {
    return NextResponse.json(
      { valid: false, message: "Bad request." },
      { status: 400 }
    );
  }

  // Step 1 — heuristics
  const heuristic = checkUsPhoneHeuristics(body.phone || "");
  if (!heuristic.ok) {
    return NextResponse.json({ valid: false, message: heuristic.message });
  }

  // Step 2 — real carrier lookup
  const result = await numverifyLookup(`1${heuristic.digits}`);
  if (result === "invalid") {
    return NextResponse.json({
      valid: false,
      message:
        "This number doesn't appear to be a working US phone number.",
    });
  }

  // "valid" or "unavailable" → accept (heuristics already passed).
  return NextResponse.json({
    valid: true,
    degraded: result === "unavailable",
  });
}
