// Heuristic US phone validation — reused from the Ableman signup flow
// (ablemanfrontend/app/api/auth/verify-phone/route.js).
//
// Pure, no network. Catches obvious garbage before spending a paid carrier
// lookup. Roland's example "1601..." is rejected here: a US area code can
// never start with 0 or 1 (NANP rule).

export type PhoneCheck =
  | { ok: true; digits: string } // digits = clean 10-digit local number
  | { ok: false; message: string };

export function checkUsPhoneHeuristics(raw: string): PhoneCheck {
  const allDigits = (raw || "").replace(/\D/g, "");

  // Accept an optional leading US country code (1) and strip it.
  const local =
    allDigits.length === 11 && allDigits.startsWith("1")
      ? allDigits.slice(1)
      : allDigits;

  if (local.length === 0) {
    return { ok: false, message: "Phone number is required." };
  }
  if (local.length < 10) {
    return {
      ok: false,
      message: "Phone number is incomplete — enter all 10 digits.",
    };
  }
  if (local.length > 10) {
    return { ok: false, message: "Phone number has too many digits." };
  }

  const areaCode = local.slice(0, 3);
  const exchange = local.slice(3, 6);

  // All-same-digit (0000000000, 1111111111, …)
  if (/^(\d)\1{9}$/.test(local)) {
    return { ok: false, message: "Please enter a real phone number." };
  }

  // Obvious sequential filler
  if (local === "1234567890" || local === "0123456789") {
    return { ok: false, message: "Please enter a real phone number." };
  }

  // US area code cannot start with 0 or 1  → rejects "1601…", "0…", etc.
  if (areaCode.startsWith("0") || areaCode.startsWith("1")) {
    return {
      ok: false,
      message: "Invalid area code — US area codes can't start with 0 or 1.",
    };
  }

  // N11 codes (211, 311, 411, 511, 611, 711, 811, 911) are service codes,
  // never assignable as area codes.
  if (areaCode[1] === "1" && areaCode[2] === "1") {
    return { ok: false, message: "Invalid area code." };
  }

  // Exchange (next 3 digits) cannot start with 0 or 1.
  if (exchange.startsWith("0") || exchange.startsWith("1")) {
    return {
      ok: false,
      message:
        "Invalid phone number — check the digits after the area code.",
    };
  }

  // 555-01XX is the fictional/reserved range (movies, examples).
  if (exchange === "555" && local.slice(6, 8) === "01") {
    return { ok: false, message: "Please enter a real phone number." };
  }

  return { ok: true, digits: local };
}
