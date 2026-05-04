import type { Metadata } from "next";
import VisitorTracker from "@/components/VisitorTracker";
import TopBar from "@/components/TopBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Honest Offer | Locally Owned Kentucky Cash Home Buyer",
  description:
    "Honest Offer is a locally owned Kentucky real estate company. We buy houses for cash across Lexington, Louisville, Bowling Green, and all of Kentucky. A+ BBB rated.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/about" },
  robots: { index: true, follow: true },
};

const PHONE_DISPLAY = "(888) 780-8805";
const PHONE_TEL = "tel:+18887808805";

export default function AboutPage() {
  return (
    <>
      <VisitorTracker />

      <TopBar tagline="About Us" />

      <section className="hero" style={{ paddingBottom: "clamp(40px, 6vw, 80px)" }}>
        <div className="container-site">
          <div className="eyebrow">Locally owned · Kentucky</div>
          <h1 style={{ maxWidth: "20ch" }}>
            We&rsquo;re not a national brand. We&rsquo;re a <em>Kentucky team.</em>
          </h1>
          <p className="hero-sub" style={{ maxWidth: "62ch" }}>
            Honest Offer is a locally owned real estate company that buys houses for cash across Kentucky. We&rsquo;ve been doing this for over seven years, and we&rsquo;ve bought more than 200 homes — mostly the ones that traditional buyers won&rsquo;t touch.
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section>
        <div className="container-site about-grid">
          <div className="about-copy">
            <div className="eyebrow">Our Story</div>
            <h2>We started because we saw how badly sellers were being treated.</h2>
            <p>
              Real estate has no shortage of buyers willing to make lowball offers, renegotiate after inspection, and string sellers along for weeks before walking away. We built Honest Offer to be the opposite of that.
            </p>
            <p>
              When we send you a written offer, we mean it. We don&rsquo;t use your acceptance as the starting point for a negotiation. We don&rsquo;t come back after seeing the house and cut the price. The number we give you is the number that wires to your account at closing.
            </p>
            <p>
              That&rsquo;s not a marketing line — it&rsquo;s the only way the business works long-term. We&rsquo;re a small team, and our reputation in Kentucky is what keeps the phone ringing. We can&rsquo;t afford to be the kind of buyer who makes sellers regret picking up the phone.
            </p>
          </div>
          <div className="local-card">
            <h3 style={{ marginBottom: 18 }}>By the numbers.</h3>
            <div className="local-stat"><span className="l">Years in business</span><span className="v"><em>7+</em></span></div>
            <div className="local-stat"><span className="l">Homes purchased</span><span className="v">200<em>+</em></span></div>
            <div className="local-stat"><span className="l">States we operate in</span><span className="v">Kentucky</span></div>
            <div className="local-stat"><span className="l">Avg. days to close</span><span className="v">14</span></div>
            <div className="local-stat"><span className="l">Google rating</span><span className="v">4.9<em>★</em></span></div>
            <div className="local-stat"><span className="l">BBB rating</span><span className="v">A+</span></div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ background: "var(--cream-deep)" }}>
        <div className="container-site">
          <div className="section-head">
            <div className="eyebrow">How We Operate</div>
            <h2>Four things we&rsquo;ll never do.</h2>
          </div>
          <div className="sit-grid">
            {[
              {
                title: "We won't renegotiate after you accept.",
                body: "Some buyers make a good offer, get you to accept, and then use the inspection as a tool to cut the price. We don't do that. The only thing that changes our offer is something that materially affects ownership — like a lien we didn't know about.",
              },
              {
                title: "We won't pressure you.",
                body: "If we send you an offer and you need a week to think, take it. If you decide to list with an agent instead, we won't follow up ten times. We give you the number and let you decide on your own terms.",
              },
              {
                title: "We won't sell your information.",
                body: "We don't share, rent, or sell your contact info or property address to other buyers, agents, or data brokers. What you tell us stays with our team.",
              },
              {
                title: "We won't hide costs.",
                body: "We pay all Kentucky closing costs. We charge no service fee. The written offer is the wire amount — no deductions at the title company, no surprise line items.",
              },
            ].map((v, i) => (
              <div key={i} className="sit">
                <div className="sit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section>
        <div className="container-site">
          <div className="section-head">
            <div className="eyebrow">Where We Buy</div>
            <h2>We buy throughout Kentucky — not just the big cities.</h2>
            <p className="muted" style={{ maxWidth: "60ch" }}>
              Our core markets are Lexington, Louisville, and Bowling Green, but we buy houses in every corner of the state — rural counties, small towns, large parcels. If you&rsquo;re in Kentucky, give us a call.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem", marginTop: "2rem" }}>
            {["Lexington", "Louisville", "Bowling Green", "Georgetown", "Nicholasville", "Richmond", "Winchester", "Elizabethtown", "Frankfort", "Owensboro", "Covington", "Florence"].map(city => (
              <div key={city} style={{ background: "var(--cream-deep)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "0.9rem 1.1rem", fontWeight: 600, color: "var(--ink)", fontSize: "0.9rem" }}>
                {city}, KY
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="final-cta">
        <div className="container-site final-cta-inner">
          <div className="eyebrow" style={{ color: "var(--gold)", justifyContent: "center" }}>Let&rsquo;s talk</div>
          <h2>Ready to see what we&rsquo;d pay for your <em>Kentucky home?</em></h2>
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
              <Link href="/">Home</Link> · <Link href="/how-it-works">How It Works</Link> · <Link href="/reviews">Reviews</Link> · <Link href="/privacy">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
