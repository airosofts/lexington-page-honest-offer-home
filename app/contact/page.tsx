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

const PHONE_DISPLAY = "(888) 780-8805";
const PHONE_TEL = "tel:+18887808805";

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
