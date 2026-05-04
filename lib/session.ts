// Client-side session id: stable per browser, used to join visits with submissions.
// Also used server-side as the unique-traffic key (session + date).

export const SESSION_KEY = "ho_session_id";

export function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    const existing = window.localStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const next = cryptoRandomId();
    window.localStorage.setItem(SESSION_KEY, next);
    return next;
  } catch {
    return cryptoRandomId();
  }
}

function cryptoRandomId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `ho_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}
