import type { MetadataRoute } from "next";

const BASE = "https://kentucky.honestofferhome.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── City pages ───────────────────────────────────────────────────────────
    { url: BASE,                             lastModified: new Date(), changeFrequency: "monthly", priority: 1    },
    { url: `${BASE}/louisville-ky`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9  },
    { url: `${BASE}/bowling-green-ky`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.9  },

    // ── Situation pages ──────────────────────────────────────────────────────
    { url: `${BASE}/sell-inherited-house-kentucky`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sell-house-divorce-kentucky`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/stop-foreclosure-kentucky`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sell-rental-property-kentucky`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sell-house-as-is-kentucky`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sell-house-relocation-kentucky`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sell-house-behind-on-payments-kentucky`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sell-fire-damaged-house-kentucky`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sell-hoarder-house-kentucky`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sell-house-fast-kentucky`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // ── Content pages ────────────────────────────────────────────────────────
    { url: `${BASE}/how-it-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`,        lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/reviews`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`,      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },

    // ── Legal ────────────────────────────────────────────────────────────────
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`,   lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
