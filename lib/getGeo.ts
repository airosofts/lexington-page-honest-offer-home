// Resolves a single IP to { country, region, city } using ip-api.com
// (same service ablemanadmin uses in /api/users/geo-lookup).
// Free, no key required. Returns nulls on failure.

export type Geo = {
  country: string | null;
  region: string | null;
  city: string | null;
};

export async function lookupGeo(ip: string | null | undefined): Promise<Geo> {
  const empty: Geo = { country: null, region: null, city: null };
  if (!ip) return empty;

  // Skip private / local IPs that ip-api can't resolve anyway.
  if (
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("172.16.") ||
    ip.startsWith("172.17.") ||
    ip.startsWith("172.18.") ||
    ip.startsWith("172.19.") ||
    ip.startsWith("172.2") ||
    ip.startsWith("172.30.") ||
    ip.startsWith("172.31.")
  ) {
    return empty;
  }

  try {
    const res = await fetch(
      `http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,country,regionName,city`,
      { cache: "no-store" }
    );
    if (!res.ok) return empty;
    const data = (await res.json()) as {
      status?: string;
      country?: string;
      regionName?: string;
      city?: string;
    };
    if (data.status !== "success") return empty;
    return {
      country: data.country ?? null,
      region: data.regionName ?? null,
      city: data.city ?? null,
    };
  } catch {
    return empty;
  }
}
