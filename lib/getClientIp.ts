// Mirrors the priority order used in ablemanfrontend:
// cf-connecting-ip → x-forwarded-for → x-real-ip → x-vercel-forwarded-for
//
// Accepts anything with a `.headers: Headers` (NextRequest) or a raw Headers
// object (server components via `next/headers`).
export function getClientIp(
  source: { headers: Headers } | Headers
): string | null {
  const h: Headers =
    source instanceof Headers ? source : (source as { headers: Headers }).headers;

  const cf = h.get("cf-connecting-ip");
  if (cf) return cf.trim();

  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || null;

  const real = h.get("x-real-ip");
  if (real) return real.trim();

  const vercel = h.get("x-vercel-forwarded-for");
  if (vercel) return vercel.split(",")[0]?.trim() || null;

  return null;
}
