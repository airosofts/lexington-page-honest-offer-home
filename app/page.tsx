import LeadForm from "@/components/LeadForm";
import VisitorTracker from "@/components/VisitorTracker";
import FaqLexington from "@/components/FaqLexington";
import Link from "next/link";

const PHONE_DISPLAY = "(888) 780-8805";
const PHONE_TEL = "tel:+18887808805";

export default function LexingtonPage() {
  return (
    <>
      <VisitorTracker />

      {/* ── Header ── */}
      <header className="topbar">
        <div className="container-site topbar-inner">
          <Link
            href="/"
            className="brand"
            aria-label="Honest Offer — We Buy Houses in Lexington, KY"
          >
            <span className="brand-mark" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path className="mark-house" d="M3 11L12 4l9 7v9H3V11z" />
                <path className="mark-check" d="M8 14.5l2.5 2.5L16 11.5" />
              </svg>
            </span>
            <span className="brand-text">
              <span className="brand-name">
                Honest Offer <span className="brand-suffix">Inc.</span>
              </span>
              <span className="brand-tagline">
                Sell Your House Fast · Lexington, KY
              </span>
            </span>
          </Link>

          <nav className="topbar-nav" aria-label="Site navigation">
            <Link href="/how-it-works" className="topbar-nav-link">How It Works</Link>
            <Link href="/reviews" className="topbar-nav-link">Reviews</Link>
            <Link href="/about" className="topbar-nav-link">About Us</Link>
            <Link href="/contact" className="topbar-nav-link">Contact</Link>
          </nav>

          <a
            href={PHONE_TEL}
            aria-label={`Call Honest Offer at ${PHONE_DISPLAY}`}
            className="topbar-phone"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 5.91 5.91l1.51-1.51a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container-site hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              Locally owned · Serving Lexington, KY and Central Kentucky
            </div>
            <h1>
              Sell Your House Fast in <em>Lexington, KY</em> — Fair Cash Offer
              in 24 Hours
            </h1>
            <p className="hero-sub">
              We buy houses across Lexington and Fayette County in any
              condition. Leaking roof, cluttered garage, outdated kitchen, stuff
              the tenants left behind — none of it matters. Get a written cash
              offer within 24 hours and close in as few as 7 days. You pick the
              date.
            </p>

            <div className="hero-trust">
              <div className="trust-item">
                <span className="stars" aria-hidden="true">
                  ★★★★★
                </span>
                <span>
                  <strong>4.9 / 5</strong> on Google
                </span>
              </div>
              <div className="trust-item">
                <strong>200+</strong>
                <span>homes purchased</span>
              </div>
              <span className="trust-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                BBB Accredited A+
              </span>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <div className="trust-strip">
        <div className="container-site trust-strip-inner">
          <div className="trust-stat">
            <div className="num">
              <em>200+</em>
            </div>
            <div className="label">Homes Purchased</div>
          </div>
          <div className="trust-stat">
            <div className="num">24 hrs</div>
            <div className="label">To a Written Offer</div>
          </div>
          <div className="trust-stat">
            <div className="num">7 days</div>
            <div className="label">Fastest Close</div>
          </div>
          <div className="trust-stat">
            <div className="num">$0</div>
            <div className="label">Fees or Commissions</div>
          </div>
        </div>
      </div>

      {/* ── Situations ── */}
      <section className="situations">
        <div className="container-site">
          <div className="section-head">
            <div className="eyebrow">Situations Lexington Homeowners Face</div>
            <h2>We specialize in the complicated ones.</h2>
            <p className="muted" style={{ maxWidth: "58ch" }}>
              Most Lexington homeowners who call us aren&rsquo;t in a
              &ldquo;just moving to a bigger place&rdquo; situation. They have
              something going on — and that&rsquo;s exactly who we built this
              for.
            </p>
          </div>

          <div className="sit-grid">
            <div className="sit">
              <div className="sit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <h4>Inherited a property</h4>
                <p>You live hours away and the last thing you want is to manage a Kentucky probate sale from another state. We handle it.</p>
              </div>
            </div>
            <div className="sit">
              <div className="sit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                </svg>
              </div>
              <div>
                <h4>Going through a divorce</h4>
                <p>You need clarity, privacy, and a clean split. We close quietly and quickly, with neither party needing to manage the sale.</p>
              </div>
            </div>
            <div className="sit">
              <div className="sit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <h4>Behind on payments</h4>
                <p>Kentucky foreclosure timelines are tight. We can close fast enough to stop the process and protect your credit.</p>
              </div>
            </div>
            <div className="sit">
              <div className="sit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" />
                </svg>
              </div>
              <div>
                <h4>Tired of being a landlord</h4>
                <p>Problem tenants, late rent, constant repair calls. Sell the rental as-is — tenant in place or out — and be done with it.</p>
              </div>
            </div>
            <div className="sit">
              <div className="sit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>Relocating from Lexington</h4>
                <p>New job starts in 30 days. You need certainty, not a &ldquo;maybe it sells by then&rdquo; conversation with a Lexington agent.</p>
              </div>
            </div>
            <div className="sit">
              <div className="sit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <h4>House needs major work</h4>
                <p>Roof, foundation, plumbing, mold. If the repair estimate is bigger than the house value, stop estimating and call us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="benefits">
        <div className="container-site">
          <div className="section-head">
            <div className="eyebrow">Why Lexington Sellers Choose Us</div>
            <h2>What you don&rsquo;t have to do.</h2>
          </div>
          <div className="benefit-grid">
            <div className="benefit">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" />
                </svg>
              </div>
              <h4>No cleaning</h4>
              <p>Dirty dishes. Cluttered garage. Stuff the tenants left behind. Leave all of it — we handle the cleanout after we close.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h4>No repairs</h4>
              <p>No painting, no new carpet, no &ldquo;just fix the HVAC and we&rsquo;ll revisit.&rdquo; We buy Lexington homes exactly as they sit and price accordingly.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h4>No commissions</h4>
              <p>Lexington agents take 5–6% on average. On a $250k home that&rsquo;s $15,000 out of your check. We take $0.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /><line x1="3" y1="21" x2="21" y2="3" />
                </svg>
              </div>
              <h4>No showings</h4>
              <p>No strangers walking through your bedroom on a Sunday. One visit from us — if that — and you&rsquo;re done.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h4>No waiting</h4>
              <p>No waiting on buyer financing. No deals falling through at inspection. Close in 7 days or 90 days — you pick.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h4>No surprise costs</h4>
              <p>We pay all Kentucky closing costs. The wire to your account matches the offer, to the dollar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section>
        <div className="container-site">
          <div className="section-head centered">
            <div className="eyebrow" style={{ justifyContent: "center" }}>The Real Math</div>
            <h2>Honest Offer vs. listing with a Lexington agent.</h2>
            <p>Here&rsquo;s what the process actually looks like, side by side — before any of the theater.</p>
          </div>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th></th>
                  <th className="us">Honest Offer</th>
                  <th>Listing with an Agent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label">Commissions</td>
                  <td className="us"><span className="check">✓</span>$0</td>
                  <td className="them"><span className="xmark">✕</span>5–6% of sale price</td>
                </tr>
                <tr>
                  <td className="label">Closing costs</td>
                  <td className="us"><span className="check">✓</span>We cover them</td>
                  <td className="them"><span className="xmark">✕</span>$3,000–$8,000 to seller</td>
                </tr>
                <tr>
                  <td className="label">Repairs required</td>
                  <td className="us"><span className="check">✓</span>None — sell as-is</td>
                  <td className="them"><span className="xmark">✕</span>Often $5,000+ after inspection</td>
                </tr>
                <tr>
                  <td className="label">Time to close</td>
                  <td className="us"><span className="check">✓</span>As fast as 7 days</td>
                  <td className="them"><span className="xmark">✕</span>60–90 days on average</td>
                </tr>
                <tr>
                  <td className="label">Showings</td>
                  <td className="us"><span className="check">✓</span>Zero</td>
                  <td className="them"><span className="xmark">✕</span>10–25+ over weeks</td>
                </tr>
                <tr>
                  <td className="label">Offer certainty</td>
                  <td className="us"><span className="check">✓</span>Guaranteed cash</td>
                  <td className="them"><span className="xmark">✕</span>Conditional on buyer financing</td>
                </tr>
                <tr>
                  <td className="label">Fall-through risk</td>
                  <td className="us"><span className="check">✓</span>Virtually none</td>
                  <td className="them"><span className="xmark">✕</span>1 in 6 deals fall through</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="about">
        <div className="container-site about-grid">
          <div className="about-copy">
            <div className="eyebrow">Your Local Lexington Cash Home Buyer</div>
            <h2>A local Kentucky buyer, not a national call center.</h2>
            <p>
              Honest Offer is a locally owned real estate company serving Lexington, KY and the surrounding Central Kentucky area. We buy houses in every Lexington neighborhood — Chevy Chase, Hamburg, Beaumont, Masterson Station, Gardenside — and in every condition.
            </p>
            <p>
              We&rsquo;re not a national brand farming out your contact info to the highest bidder. We&rsquo;re a small team of local Kentucky investors. The person who answers when you call will be the same person you meet at closing.
            </p>
            <p>
              Our offers aren&rsquo;t always the highest on the block. They&rsquo;re the ones we&rsquo;ll actually honor — in writing, with no surprise re-trades before closing. That&rsquo;s the whole pitch.
            </p>
            <div className="about-signature">
              <div className="sig-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path className="mark-house" d="M3 11L12 4l9 7v9H3V11z" />
                  <path className="mark-check" d="M8 14.5l2.5 2.5L16 11.5" />
                </svg>
              </div>
              <div>
                <div className="sig-name">The Honest Offer team</div>
                <div className="sig-title">Lexington, KY · Licensed &amp; Insured</div>
              </div>
            </div>
          </div>
          <div className="local-card">
            <h3 style={{ marginBottom: 18 }}>Honest Offer by the numbers.</h3>
            <div className="local-stat"><span className="l">Years in business</span><span className="v"><em>7+</em></span></div>
            <div className="local-stat"><span className="l">Homes purchased</span><span className="v">200<em>+</em></span></div>
            <div className="local-stat"><span className="l">Markets served</span><span className="v">Central KY</span></div>
            <div className="local-stat"><span className="l">Avg. days to close</span><span className="v">14</span></div>
            <div className="local-stat"><span className="l">Google rating</span><span className="v">4.9<em>★</em></span></div>
            <div className="local-stat"><span className="l">BBB rating</span><span className="v">A+</span></div>
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section style={{ background: "var(--cream-deep)" }}>
        <div className="container-site">
          <div className="section-head centered">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Where We Buy</div>
            <h2>We buy houses across Lexington, KY and Central Kentucky.</h2>
            <p style={{ maxWidth: "54ch", margin: "0 auto" }}>
              Fayette County is our home base, but we buy houses in every surrounding city too. If you&rsquo;re in Central Kentucky, we can make you an offer.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem", marginTop: "2.5rem" }}>
            {[
              { city: "Lexington", note: "Fayette County — primary market" },
              { city: "Georgetown", note: "Scott County" },
              { city: "Nicholasville", note: "Jessamine County" },
              { city: "Richmond", note: "Madison County" },
              { city: "Winchester", note: "Clark County" },
              { city: "Paris", note: "Bourbon County" },
              { city: "Berea", note: "Madison County" },
              { city: "Versailles", note: "Woodford County" },
            ].map(({ city, note }) => (
              <div key={city} style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "1rem 1.25rem" }}>
                <div style={{ fontWeight: 700, color: "var(--ink)", fontSize: "0.95rem" }}>{city}, KY</div>
                <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "0.15rem" }}>{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section>
        <div className="container-site">
          <div className="section-head centered">
            <div className="eyebrow" style={{ justifyContent: "center" }}>From Real Lexington Sellers</div>
            <h2>What Kentucky homeowners say about us.</h2>
          </div>
          <div className="testis">
            <div className="testi">
              <span className="quote-mark" aria-hidden="true">&ldquo;</span>
              <div className="stars">★★★★★</div>
              <p className="testi-text">After my mother passed, the Lexington house was too much to deal with from out of state. They handled everything, from probate paperwork to clearing out the furniture. Fair offer, no games.</p>
              <div className="testi-foot">
                <div className="avatar">JM</div>
                <div>
                  <div className="testi-name">Janet M.</div>
                  <div className="testi-meta">Verified seller · Lexington, KY · Inherited property</div>
                </div>
              </div>
            </div>
            <div className="testi">
              <span className="quote-mark" aria-hidden="true">&ldquo;</span>
              <div className="stars">★★★★★</div>
              <p className="testi-text">I talked to two other Lexington cash buyers first. Their offers were lowball and they pressured me. Honest Offer&rsquo;s number was higher and they let me take a week to think. That&rsquo;s the difference.</p>
              <div className="testi-foot">
                <div className="avatar a2">MT</div>
                <div>
                  <div className="testi-name">Marcus T.</div>
                  <div className="testi-meta">Verified seller · Lexington, KY · Rental property</div>
                </div>
              </div>
            </div>
            <div className="testi">
              <span className="quote-mark" aria-hidden="true">&ldquo;</span>
              <div className="stars">★★★★★</div>
              <p className="testi-text">They said 14 days to close. It was 14 days, to the hour. We signed, they wired, we handed them the keys, and that was that. No surprises. Exactly what they promised.</p>
              <div className="testi-foot">
                <div className="avatar a3">RK</div>
                <div>
                  <div className="testi-name">Robert &amp; Linda K.</div>
                  <div className="testi-meta">Verified seller · Nicholasville, KY · Relocation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section>
        <div className="container-site">
          <div className="section-head centered">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Common Questions</div>
            <h2>Straight answers for Lexington homeowners.</h2>
          </div>
          <FaqLexington />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="final-cta">
        <div className="container-site final-cta-inner">
          <div className="eyebrow" style={{ color: "var(--gold)", justifyContent: "center" }}>
            Ready when you are
          </div>
          <h2>Get your <em>honest</em> offer in Lexington, KY today.</h2>
          <p>Takes 60 seconds to get started. Written cash offer in 24 hours. You decide what happens from there — no pressure, no hassle, no calls at dinner.</p>
          <div className="final-cta-actions">
            <a href="#offer-form" className="btn btn-primary btn-large">
              Get My Fair Cash Offer
            </a>
            <a
              href={PHONE_TEL}
              className="btn btn-secondary btn-large"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 5.91 5.91l1.51-1.51a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <div className="container-site">
          <div className="foot-grid">
            <div className="foot foot-brand">
              <Link href="/" className="brand" aria-label="Honest Offer — We Buy Houses in Lexington, KY">
                <span className="brand-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path className="mark-house" d="M3 11L12 4l9 7v9H3V11z" />
                    <path className="mark-check" d="M8 14.5l2.5 2.5L16 11.5" />
                  </svg>
                </span>
                <span className="brand-text">
                  <span className="brand-name">Honest Offer <span className="brand-suffix">Inc.</span></span>
                  <span className="brand-tagline">Sell Your House Fast</span>
                </span>
              </Link>
              <p>Straight-talk cash offers on houses in Lexington, KY and Central Kentucky. Locally owned, family-operated, licensed and insured.</p>
              <a
                href={PHONE_TEL}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "var(--barn)", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", marginTop: "0.5rem" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 5.91 5.91l1.51-1.51a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="foot">
              <h5>Situations We Help</h5>
              <ul>
                <li><Link href="/sell-inherited-house-kentucky">Inherited property</Link></li>
                <li><Link href="/sell-house-divorce-kentucky">Divorce</Link></li>
                <li><Link href="/stop-foreclosure-kentucky">Foreclosure</Link></li>
                <li><Link href="/sell-rental-property-kentucky">Tired landlord</Link></li>
                <li><Link href="/sell-house-as-is-kentucky">Any condition / as-is</Link></li>
                <li><Link href="/sell-house-fast-kentucky">Sell fast</Link></li>
              </ul>
            </div>
            <div className="foot">
              <h5>Service Area</h5>
              <ul>
                <li>Lexington / Fayette County</li>
                <li>Georgetown &amp; Nicholasville</li>
                <li>Richmond &amp; Winchester</li>
                <li>Paris, Berea &amp; Versailles</li>
              </ul>
            </div>
            <div className="foot">
              <h5>Company</h5>
              <ul>
                <li><Link href="/how-it-works">How It Works</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/reviews">Reviews</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="foot-legal">
            <div>© {new Date().getFullYear()} Honest Offer Inc. · Lexington, KY · Licensed &amp; insured.</div>
            <div>
              <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
