import LeadForm from "@/components/LeadForm";
import CityFaq from "@/components/CityFaq";
import type { FaqItem } from "@/components/CityFaq";
import VisitorTracker from "@/components/VisitorTracker";
import Link from "next/link";
import type { ReactNode } from "react";

const PHONE_DISPLAY = "(888) 780-8805";
const PHONE_TEL = "tel:+18887808805";

export interface SituationLayoutProps {
  brandTagline: string;
  heroEyebrow: string;
  headline: ReactNode;
  heroIntro: string;
  detailEyebrow: string;
  detailHeading: ReactNode;
  detailParagraphs: string[];
  faqItems: FaqItem[];
  ctaHeadline: ReactNode;
}

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 5.91 5.91l1.51-1.51a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const HouseLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path className="mark-house" d="M3 11L12 4l9 7v9H3V11z" />
    <path className="mark-check" d="M8 14.5l2.5 2.5L16 11.5" />
  </svg>
);

export default function SituationLayout({
  brandTagline,
  heroEyebrow,
  headline,
  heroIntro,
  detailEyebrow,
  detailHeading,
  detailParagraphs,
  faqItems,
  ctaHeadline,
}: SituationLayoutProps) {
  return (
    <>
      <VisitorTracker />

      {/* ── Header ── */}
      <header className="topbar">
        <div className="container-site topbar-inner">
          <Link href="/" className="brand" aria-label="Honest Offer — We Buy Houses in Kentucky">
            <span className="brand-mark" aria-hidden="true"><HouseLogo /></span>
            <span className="brand-text">
              <span className="brand-name">Honest Offer <span className="brand-suffix">Inc.</span></span>
              <span className="brand-tagline">{brandTagline}</span>
            </span>
          </Link>
          <nav className="topbar-nav" aria-label="Site navigation">
            <Link href="/how-it-works" className="topbar-nav-link">How It Works</Link>
            <Link href="/reviews" className="topbar-nav-link">Reviews</Link>
            <Link href="/about" className="topbar-nav-link">About Us</Link>
            <Link href="/contact" className="topbar-nav-link">Contact</Link>
          </nav>
          <a href={PHONE_TEL} aria-label={`Call Honest Offer at ${PHONE_DISPLAY}`} className="topbar-phone">
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container-site hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">{heroEyebrow}</div>
            <h1>{headline}</h1>
            <p className="hero-sub">{heroIntro}</p>
            <div className="hero-trust">
              <div className="trust-item">
                <span className="stars" aria-hidden="true">★★★★★</span>
                <span><strong>4.9 / 5</strong> on Google</span>
              </div>
              <div className="trust-item">
                <strong>200+</strong>
                <span>homes purchased</span>
              </div>
              <span className="trust-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="trust-stat"><div className="num"><em>200+</em></div><div className="label">Homes Purchased</div></div>
          <div className="trust-stat"><div className="num">24 hrs</div><div className="label">To a Written Offer</div></div>
          <div className="trust-stat"><div className="num">7 days</div><div className="label">Fastest Close</div></div>
          <div className="trust-stat"><div className="num">$0</div><div className="label">Fees or Commissions</div></div>
        </div>
      </div>

      {/* ── Detail Section ── */}
      <section>
        <div className="container-site">
          <div className="section-head">
            <div className="eyebrow">{detailEyebrow}</div>
            <h2>{detailHeading}</h2>
          </div>
          <div style={{ maxWidth: "68ch", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {detailParagraphs.map((p, i) => (
              <p key={i} style={{ lineHeight: 1.75, color: "var(--ink-soft)" }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ background: "var(--cream-deep)" }}>
        <div className="container-site">
          <div className="section-head centered">
            <div className="eyebrow" style={{ justifyContent: "center" }}>The Process</div>
            <h2>Three steps. No surprises.</h2>
            <p style={{ maxWidth: "50ch", margin: "0 auto" }}>
              We&rsquo;ve made this as simple as possible — because you probably have enough to deal with already.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "2.5rem" }}>
            {[
              {
                n: "01",
                title: "Tell us about your property",
                body: "Fill out the form in 60 seconds — just the address, your situation, and a way to reach you. No photos, no paperwork, no commitment.",
              },
              {
                n: "02",
                title: "Get a written cash offer",
                body: "We review comparable sales, estimate any work needed, and send you a written offer within 24 hours. We walk you through the math. No black box.",
              },
              {
                n: "03",
                title: "Close on your schedule",
                body: "You pick a date — as fast as 7 days or as far out as 90 days. We handle all the title work and closing paperwork. You show up and sign.",
              },
            ].map((step) => (
              <div key={step.n} style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "1.75rem" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--barn)", opacity: 0.2, lineHeight: 1, marginBottom: "0.75rem" }}>{step.n}</div>
                <h4 style={{ marginBottom: "0.5rem" }}>{step.title}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.65 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Keep ── */}
      <section>
        <div className="container-site">
          <div className="section-head centered">
            <div className="eyebrow" style={{ justifyContent: "center" }}>No Hidden Costs</div>
            <h2>The offer we send is what you walk away with.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "2rem", maxWidth: "860px", margin: "2rem auto 0" }}>
            {[
              { label: "Agent commissions", val: "$0" },
              { label: "Closing costs", val: "$0 (we pay)" },
              { label: "Repair costs", val: "$0" },
              { label: "Inspection fees", val: "$0" },
              { label: "Staging & cleaning", val: "$0" },
              { label: "Holding costs while waiting", val: "$0" },
            ].map(({ label, val }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--cream-deep)", borderRadius: "var(--radius)", padding: "0.85rem 1.25rem", border: "1px solid var(--line)" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--ink-soft)" }}>{label}</span>
                <span style={{ fontWeight: 800, color: "var(--barn)", fontSize: "0.95rem" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section>
        <div className="container-site">
          <div className="section-head centered">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Common Questions</div>
            <h2>Straight answers for Kentucky homeowners.</h2>
          </div>
          <CityFaq items={faqItems} />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="final-cta">
        <div className="container-site final-cta-inner">
          <div className="eyebrow" style={{ color: "var(--gold)", justifyContent: "center" }}>Ready when you are</div>
          <h2>{ctaHeadline}</h2>
          <p>Takes 60 seconds to get started. Written cash offer in 24 hours. You decide what happens next — no pressure, no calls at dinner.</p>
          <div className="final-cta-actions">
            <a href="#offer-form" className="btn btn-primary btn-large">Get My Fair Cash Offer</a>
            <a href={PHONE_TEL} className="btn btn-secondary btn-large" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <PhoneIcon />
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
              <Link href="/" className="brand" aria-label="Honest Offer — We Buy Houses in Kentucky">
                <span className="brand-mark" aria-hidden="true"><HouseLogo /></span>
                <span className="brand-text">
                  <span className="brand-name">Honest Offer <span className="brand-suffix">Inc.</span></span>
                  <span className="brand-tagline">Sell Your House Fast</span>
                </span>
              </Link>
              <p>Straight-talk cash offers on houses across Kentucky. Locally owned, family-operated, licensed and insured.</p>
              <a href={PHONE_TEL} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "var(--barn)", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", marginTop: "0.5rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 5.91 5.91l1.51-1.51a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="foot">
              <h5>We Buy Houses</h5>
              <ul>
                <li><Link href="/">Lexington, KY</Link></li>
                <li><Link href="/louisville-ky">Louisville, KY</Link></li>
                <li><Link href="/bowling-green-ky">Bowling Green, KY</Link></li>
                <li>All of Kentucky</li>
              </ul>
            </div>
            <div className="foot">
              <h5>Situations We Handle</h5>
              <ul>
                <li><Link href="/sell-inherited-house-kentucky">Inherited property</Link></li>
                <li><Link href="/sell-house-divorce-kentucky">Divorce</Link></li>
                <li><Link href="/stop-foreclosure-kentucky">Foreclosure</Link></li>
                <li><Link href="/sell-rental-property-kentucky">Tired landlord</Link></li>
                <li><Link href="/sell-house-as-is-kentucky">Any condition</Link></li>
              </ul>
            </div>
            <div className="foot">
              <h5>About</h5>
              <ul>
                <li><Link href="/how-it-works">How It Works</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/reviews">Reviews</Link></li>
                <li>Locally owned in Kentucky</li>
                <li>BBB Accredited A+</li>
              </ul>
            </div>
          </div>
          <div className="foot-legal">
            <div>© {new Date().getFullYear()} Honest Offer Inc. · Kentucky · Licensed &amp; insured.</div>
            <div>
              <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
