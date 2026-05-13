import type { Metadata } from "next";
import VisitorTracker from "@/components/VisitorTracker";
import TopBar from "@/components/TopBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Reviews | Kentucky Cash Home Buyer | Honest Offer",
  description:
    "Read verified Google reviews from homeowners who sold to Honest Offer. 5.0 stars on Google. A+ BBB rated. See what real sellers say about the experience.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/reviews" },
  robots: { index: true, follow: true },
};

const PHONE_DISPLAY = "(888) 780-8805";
const PHONE_TEL = "tel:+18887808805";
const GOOGLE_REVIEW_URL = "https://www.google.com/maps/place/?cid=2962018254832420882";

const REVIEWS = [
  {
    initials: "ML",
    name: "Maria Lujan Medina",
    meta: "★★★★★ · Verified Google review",
    stars: 5,
    text: "Honest Offer Home was a great company to work with during a very difficult time in my life. I was dealing with a lot personally and needed a simple, fair way to sell the house without going through the stress of repairs, showings, or a long listing process.\n\nFrom the beginning, their team was professional, respectful, and easy to communicate with. They explained everything clearly, answered my questions, and never made me feel pressured. The offer was fair, the process was straightforward, and they did exactly what they said they would do.\n\nI really appreciated how smooth they made everything during a time when I needed things to be as easy as possible. I would definitely recommend Honest Offer to anyone looking for a reliable and honest house buying company.",
  },
  {
    initials: "YG",
    name: "Ysis Gonzalez",
    meta: "★★★★★ · Verified Google review",
    stars: 5,
    text: "I had a great experience selling my house to Honest Offer Home. I needed to sell quickly and didn't want to deal with repairs, listings, or months of waiting. They made me a cash offer, bought the house completely as-is, and the whole process was smooth from start to finish. Communication was clear, they were professional, and there were no surprises at closing.",
  },
  {
    initials: "SR",
    name: "Sunrise Recycling",
    meta: "★★★★★ · Verified Google review",
    stars: 5,
    text: "I inherited a property that had become overwhelming to deal with and honestly didn't know where to start. The team at Honest Offer Home made the entire process feel straightforward and low stress from the first conversation. They were responsive, professional, and transparent about how everything worked.\n\nWhat stood out most was that there was no pressure and no unrealistic promises. They gave me a fair offer quickly, worked around my timeline, and handled everything exactly as discussed. Being able to sell the house as-is without worrying about repairs or cleanup was a huge relief.\n\nIf you're in a difficult situation and need a simple, honest way to sell a property, I'd definitely recommend reaching out to them.",
  },
  {
    initials: "DV",
    name: "Dan Vienna",
    meta: "★★★★★ · Verified Google review",
    stars: 5,
    text: "Spoke to them about selling my house because I need to sell it fast due to personal circumstance. They provided an offer quickly and it was relatively fair. I am still considering the offer, but my instinct is to move forward. Overall they live up to the name \"honest offer\"!",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <VisitorTracker />

      <TopBar tagline="Reviews" />

      <section className="hero" style={{ paddingBottom: "clamp(40px, 5vw, 72px)" }}>
        <div className="container-site">
          <div className="eyebrow">Verified Google Reviews</div>
          <h1 style={{ maxWidth: "22ch" }}>
            What homeowners say about selling to <em>Honest Offer.</em>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#f59e0b", fontSize: "1.3rem" }}>★★★★★</span>
              <strong style={{ fontSize: "1.1rem" }}>5.0 / 5</strong>
              <span style={{ color: "var(--muted)" }}>on Google</span>
            </div>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--muted)", fontSize: "0.9rem", textDecoration: "underline" }}
            >
              View on Google →
            </a>
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
                <p className="testi-text" style={{ whiteSpace: "pre-line" }}>{r.text}</p>
                <div className="testi-foot">
                  <div className={`avatar${i % 3 === 1 ? " a2" : i % 3 === 2 ? " a3" : ""}`}>{r.initials}</div>
                  <div>
                    <div className="testi-name">{r.name}</div>
                    <div className="testi-meta">{r.meta}</div>
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
            If you sold your home to Honest Offer and had a good experience, please consider leaving us a Google review. It helps other homeowners in similar situations find us.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: "0.5rem" }}
          >
            Leave a Google review
          </a>
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
          <div className="foot-visit-row">
            <div className="visit-meta">
              <h5>Visit Us</h5>
              <address>
                257 Elmwood Dr<br />
                Lexington, KY 40505
              </address>
              <a
                href="https://www.google.com/maps/place/?cid=2962018254832420882"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="visit-map">
              <iframe
                title="Honest Offer office location on Google Maps"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBRMxUxsq4taEGbcelOv-IvlJk6R36IbLA&q=place_id:ChIJrY2gIe5FQogREkiCyegzGyk&zoom=15"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          <div className="foot-legal">
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
