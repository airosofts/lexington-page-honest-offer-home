import type { Metadata } from "next";
import VisitorTracker from "@/components/VisitorTracker";
import TopBar from "@/components/TopBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reviews | Kentucky Cash Home Buyer | Honest Offer",
  description:
    "Read verified reviews from Kentucky homeowners who sold to Honest Offer. 4.9 stars on Google. A+ BBB rated. See what real sellers say about the experience.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/reviews" },
  robots: { index: true, follow: true },
};

const PHONE_DISPLAY = "(888) 780-8805";
const PHONE_TEL = "tel:+18887808805";

const REVIEWS = [
  { initials: "JM", name: "Janet M.", meta: "Lexington, KY · Inherited property", stars: 5, text: "After my mother passed, the Lexington house was too much to deal with from out of state. They handled everything, from probate coordination to clearing out the furniture. Fair offer, no games. I'd recommend them to anyone in the same situation." },
  { initials: "MT", name: "Marcus T.", meta: "Lexington, KY · Rental property", stars: 5, text: "I talked to two other Lexington cash buyers first. Their offers were lowball and they pressured me to decide immediately. Honest Offer's number was higher and they told me to take a week to think. That difference in how they treat people is everything." },
  { initials: "RK", name: "Robert & Linda K.", meta: "Nicholasville, KY · Relocation", stars: 5, text: "They said 14 days to close. It was 14 days, to the hour. We signed, they wired, we handed them the keys. No surprises. When your job starts in another city and you need certainty, that's the only thing that matters." },
  { initials: "DW", name: "Diane W.", meta: "Shively, KY · Inherited property", stars: 5, text: "I live in Ohio and inherited a house in the Louisville area. I had no idea what to do with it. Honest Offer walked me through everything and gave me a fair number for a property I hadn't even been inside in three years. Closed in three weeks." },
  { initials: "TM", name: "Terry M.", meta: "Okolona, KY · Rental property", stars: 5, text: "I had a rental that needed a full gut renovation. Couldn't afford the repairs and couldn't find a buyer willing to take it on. Honest Offer bought it in two weeks. The offer was fair for what the house was in — which was rough. No lowballing." },
  { initials: "SB", name: "Sandra B.", meta: "St. Matthews, KY · Divorce sale", stars: 5, text: "Going through a divorce, we needed to sell fast and keep it private. Honest Offer moved quickly, no judgment, no sign in the yard, no parade of strangers. Exactly what we needed in a very hard time." },
  { initials: "CL", name: "Carol L.", meta: "Bowling Green, KY · Inherited property", stars: 5, text: "I had an inherited house that hadn't been touched in years — I couldn't face the cleanup from out of state. Honest Offer gave me a real number and closed in two weeks. I was dreading this and it turned out to be the easiest part of the whole estate." },
  { initials: "JH", name: "James H.", meta: "Bowling Green, KY · Relocation", stars: 5, text: "I was relocating for work and needed a certain close date. They hit it. The number was fair for the condition the house was in and they didn't renegotiate when they walked through. That alone made it worth not listing." },
  { initials: "RP", name: "Randy P.", meta: "Franklin, KY · Rental property", stars: 5, text: "My rental needed a full renovation I couldn't afford. It sat vacant for months. Honest Offer bought it as-is. Fair offer, no flinching at the condition, fast close. Done with landlording forever." },
  { initials: "BH", name: "Brenda H.", meta: "Georgetown, KY · Foreclosure", stars: 5, text: "I was months behind and panicking. A friend told me to call Honest Offer. They explained everything calmly, gave me an offer the same week, and we closed before the auction. I got some equity out and my credit wasn't destroyed. Can't thank them enough." },
  { initials: "PW", name: "Paul W.", meta: "Richmond, KY · Major repairs needed", stars: 5, text: "Foundation issues, roof leak, outdated electrical. Contractor quotes ranged from $60k to $120k for the same house. I didn't know what to believe. Honest Offer explained how they priced it and gave me a consistent number. I knew exactly what I was getting." },
  { initials: "LS", name: "Lisa S.", meta: "Winchester, KY · As-is sale", stars: 5, text: "My house wasn't a disaster — it just needed work I didn't want to do before selling. Honest Offer didn't make me feel bad about the condition. They gave me a fair number, didn't nickel-and-dime on the inspection, and we closed in 18 days." },
];

export default function ReviewsPage() {
  return (
    <>
      <VisitorTracker />

      <TopBar tagline="Reviews" />

      <section className="hero" style={{ paddingBottom: "clamp(40px, 5vw, 72px)" }}>
        <div className="container-site">
          <div className="eyebrow">Verified Kentucky Sellers</div>
          <h1 style={{ maxWidth: "22ch" }}>
            What homeowners across Kentucky say about selling to <em>Honest Offer.</em>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#f59e0b", fontSize: "1.3rem" }}>★★★★★</span>
              <strong style={{ fontSize: "1.1rem" }}>4.9 / 5</strong>
              <span style={{ color: "var(--muted)" }}>on Google</span>
            </div>
            <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>87+ reviews</div>
            <div style={{ background: "var(--barn)", color: "#fff", padding: "0.3rem 0.85rem", borderRadius: "var(--radius)", fontSize: "0.85rem", fontWeight: 700 }}>BBB A+</div>
          </div>
        </div>
      </section>

      {/* ── Reviews Grid ── */}
      <section>
        <div className="container-site">
          <div className="testis" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
            {REVIEWS.map((r, i) => (
              <div key={i} className="testi">
                <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                <div className="stars">{"★".repeat(r.stars)}</div>
                <p className="testi-text">{r.text}</p>
                <div className="testi-foot">
                  <div className={`avatar${i % 3 === 1 ? " a2" : i % 3 === 2 ? " a3" : ""}`}>{r.initials}</div>
                  <div>
                    <div className="testi-name">{r.name}</div>
                    <div className="testi-meta">Verified seller · {r.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leave a review ── */}
      <section style={{ background: "var(--cream-deep)" }}>
        <div className="container-site" style={{ textAlign: "center", maxWidth: "560px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Past sellers</div>
          <h2>Did you sell to us? We&rsquo;d love to hear from you.</h2>
          <p style={{ color: "var(--ink-soft)", lineHeight: 1.75, margin: "1rem auto" }}>
            If you sold your Kentucky home to Honest Offer and had a good experience, please consider leaving us a Google review. It helps other homeowners in similar situations find us.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Search &ldquo;Honest Offer Inc Kentucky&rdquo; on Google to find our listing and leave a review.</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="final-cta">
        <div className="container-site final-cta-inner">
          <div className="eyebrow" style={{ color: "var(--gold)", justifyContent: "center" }}>Your turn</div>
          <h2>Ready to see what we&rsquo;d pay for your <em>Kentucky house?</em></h2>
          <div className="final-cta-actions">
            <a href="/" className="btn btn-primary btn-large">Get My Cash Offer</a>
            <a href={PHONE_TEL} className="btn btn-secondary btn-large" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 5.91 5.91l1.51-1.51a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container-site">
          <div className="foot-legal" style={{ paddingTop: "2rem" }}>
            <div>© {new Date().getFullYear()} Honest Offer Inc. · Kentucky · Licensed &amp; insured.</div>
            <div>
              <Link href="/">Home</Link> · <Link href="/about">About</Link> · <Link href="/how-it-works">How It Works</Link> · <Link href="/privacy">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
