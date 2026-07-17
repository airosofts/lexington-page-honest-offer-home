import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import VisitorTracker from "@/components/VisitorTracker";
import TopBar from "@/components/TopBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Honest Offer Kentucky Cash Home Buyer",
  description:
    "Call or submit your address to get a cash offer on your Kentucky house. We respond within a few hours. Serving Lexington, Louisville, Bowling Green, and all of Kentucky.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/contact" },
  robots: { index: true, follow: true },
};

const PHONE_DISPLAY = "(859) 201-4950";
const PHONE_TEL = "tel:+18592014950";

export default function ContactPage() {
  return (
    <>
      <VisitorTracker />

      <TopBar tagline="Contact Us" />

      <section style={{ padding: "clamp(48px, 8vw, 100px) 0" }}>
        <div className="container-site hero-grid">
          <div>
            <div className="eyebrow">Reach us directly</div>
            <h1 style={{ maxWidth: "18ch" }}>
              The fastest way to get an offer is to <em>call or submit the form.</em>
            </h1>

            {/* ── Phone ── */}
            <div style={{ marginTop: "2.5rem" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem" }}>Call or text us</div>
              <a href={PHONE_TEL} style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 900, color: "var(--barn)", textDecoration: "none", display: "block" }}>
                {PHONE_DISPLAY}
              </a>
            </div>


            {/* ── What to expect ── */}
            <div style={{ marginTop: "2rem", borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.75rem" }}>What happens when you call</div>
              <ol style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  "A team member picks up — not a call center or a bot.",
                  "We ask a few quick questions about the property: location, condition, your situation.",
                  "We explain roughly what we can offer and why.",
                  "If it makes sense, we follow up with a formal written offer within 24 hours.",
                ].map((step, i) => (
                  <li key={i} style={{ fontSize: "0.9rem", color: "var(--ink-soft)", lineHeight: 1.65 }}>{step}</li>
                ))}
              </ol>
            </div>

            {/* ── Service Area ── */}
            <div style={{ marginTop: "2rem", borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem" }}>Service Area</div>
              <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)", lineHeight: 1.65 }}>
                We buy houses throughout Kentucky — Lexington, Louisville, Bowling Green, and everywhere in between, including smaller towns and rural counties.
              </p>
            </div>
          </div>

          <div>
            <div style={{ marginBottom: "1rem" }}>
              <div className="eyebrow">Or submit your address</div>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: "0.35rem" }}>
                Takes 60 seconds. We&rsquo;ll call you within a few hours.
              </p>
            </div>
            <LeadForm />
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
