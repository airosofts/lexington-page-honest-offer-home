import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import VisitorTracker from "@/components/VisitorTracker";
import TopBar from "@/components/TopBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | Sell Your House for Cash in Kentucky | Honest Offer",
  description:
    "See exactly how the Honest Offer process works — from your first call to cash in your account. Three steps, no surprises, close in as little as 7 days.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/how-it-works" },
  robots: { index: true, follow: true },
};

const PHONE_DISPLAY = "(888) 780-8805";
const PHONE_TEL = "tel:+18887808805";

export default function HowItWorksPage() {
  return (
    <>
      <VisitorTracker />

      <TopBar tagline="How It Works" />

      <section className="hero" style={{ paddingBottom: "clamp(40px, 6vw, 80px)" }}>
        <div className="container-site">
          <div className="eyebrow">Simple. Transparent. Fast.</div>
          <h1 style={{ maxWidth: "18ch" }}>
            Here&rsquo;s exactly how selling to <em>Honest Offer</em> works.
          </h1>
          <p className="hero-sub" style={{ maxWidth: "60ch" }}>
            No black boxes. No surprise re-trades. No wondering what happens next. We&rsquo;ve mapped out every step — from your first visit to the wire hitting your account.
          </p>
        </div>
      </section>

      {/* ── Steps ── */}
      <section style={{ background: "var(--cream-deep)", padding: "clamp(48px, 8vw, 96px) 0" }}>
        <div className="container-site">
          {[
            {
              n: "01",
              time: "Day 1 — takes 60 seconds",
              title: "Tell us about your property",
              body: [
                "Fill out the form on this page — just the property address, a brief description of your situation, your phone number, and optionally an email. No photos, no documents, no commitment.",
                "We'll call you within a few hours (or the next business morning if you submit late). That first call is short — maybe 10 minutes. We ask a few questions about the house: age, condition, any known issues, what you're hoping for. You can ask us anything too.",
              ],
            },
            {
              n: "02",
              time: "Within 24 hours of your call",
              title: "Receive a written cash offer",
              body: [
                "After our call, we research comparable sales in your specific neighborhood, build a realistic repair estimate, and calculate our costs. We put together a written offer and send it to you — usually within 24 hours of our first conversation.",
                "We'll walk you through the math on the phone if you want to see it: the after-repair value we used, the repair estimate, what we set aside for holding and closing costs, and our margin. Every number is visible. If you disagree with any of them, tell us — we'll discuss it.",
                "There is no obligation to accept. We don't pressure you, we don't put you on a drip email list, and we don't sell your information. The offer is just a number for you to evaluate.",
              ],
            },
            {
              n: "03",
              time: "If you accept — same day",
              title: "Sign the purchase agreement",
              body: [
                "If you decide to move forward, we send a straightforward purchase and sale agreement — typically 3–4 pages. You can have your attorney review it (we encourage it). Once both parties sign, we open title.",
                "You pick the closing date at this point. We can close in as fast as 7 days or as far out as 90 days, depending on what works for your life.",
              ],
            },
            {
              n: "04",
              time: "Days 3–21 (or your chosen date)",
              title: "Title work and scheduling",
              body: [
                "We hire a Kentucky title company to run the title search. This is where they look for any liens, unpaid taxes, judgments, or ownership questions that need to be resolved before we can close. This usually takes 7–14 days.",
                "If they find something — a lien you weren't aware of, a back tax bill, a question about the estate — we tell you immediately. In most cases, these issues can be resolved at closing using sale proceeds. It rarely kills a deal.",
                "We handle all scheduling coordination with the title company. You don't have to manage any of it.",
              ],
            },
            {
              n: "05",
              time: "Closing day",
              title: "Sign, hand over keys, get paid",
              body: [
                "On closing day, you go to the title company's office (or we can arrange a mail-away closing if you're out of state), sign the deed and closing documents, and hand over the keys.",
                "The title company wires the sale proceeds directly to your bank account — typically the same day or within one business day. The number that hits your account is the offer amount we agreed to. There are no deductions for commissions, closing costs, or anything else. We pay all of that.",
              ],
            },
          ].map((step, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: "1.5rem 2rem",
              paddingBottom: "3rem",
              marginBottom: "3rem",
              borderBottom: i < 4 ? "1px solid var(--line)" : "none",
              alignItems: "start",
            }}>
              <div style={{ fontSize: "3rem", fontWeight: 900, color: "var(--barn)", opacity: 0.18, lineHeight: 1, paddingTop: "0.25rem" }}>{step.n}</div>
              <div>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--barn)", marginBottom: "0.35rem" }}>{step.time}</div>
                <h2 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", marginBottom: "1rem" }}>{step.title}</h2>
                {step.body.map((p, j) => (
                  <p key={j} style={{ lineHeight: 1.75, color: "var(--ink-soft)", marginBottom: "0.85rem" }}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cost Breakdown ── */}
      <section>
        <div className="container-site">
          <div className="section-head centered">
            <div className="eyebrow" style={{ justifyContent: "center" }}>What You Pay</div>
            <h2>Nothing. Here&rsquo;s the full cost breakdown.</h2>
          </div>
          <div style={{ maxWidth: "640px", margin: "2.5rem auto 0" }}>
            {[
              ["Agent commissions", "$0 (we pay no agent)"],
              ["Buyer's agent commission", "$0"],
              ["Closing costs & title fees", "$0 (we cover them)"],
              ["Repair requests after inspection", "$0 (we don't do this)"],
              ["Staging and photography", "$0"],
              ["Holding costs during listing", "$0 (no waiting period)"],
              ["What you actually pay", "$0"],
            ].map(([label, val], i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.85rem 1.25rem",
                background: i === 6 ? "var(--barn)" : i % 2 === 0 ? "var(--cream-deep)" : "var(--paper)",
                borderRadius: i === 6 ? "var(--radius)" : 0,
                marginTop: i === 6 ? "0.75rem" : 0,
                border: "1px solid var(--line)",
              }}>
                <span style={{ fontSize: "0.9rem", color: i === 6 ? "#fff" : "var(--ink-soft)", fontWeight: i === 6 ? 700 : 400 }}>{label}</span>
                <span style={{ fontWeight: 800, color: i === 6 ? "#fff" : "var(--barn)", fontSize: "0.95rem" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline expectations ── */}
      <section>
        <div className="container-site">
          <div className="section-head centered">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Timeline</div>
            <h2>How fast can you actually close?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "2rem", maxWidth: "860px", margin: "2rem auto 0" }}>
            {[
              { label: "Fastest on record", val: "5 business days" },
              { label: "Typical close time", val: "10–21 days" },
              { label: "Extended close (your choice)", val: "30–90 days" },
              { label: "Offer turnaround", val: "Within 24 hours" },
            ].map(({ label, val }) => (
              <div key={label} style={{ background: "var(--cream-deep)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "1.5rem 1.25rem", textAlign: "center" }}>
                <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "var(--barn)", marginBottom: "0.4rem" }}>{val}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get offer ── */}
      <section style={{ background: "var(--cream-deep)", padding: "clamp(48px, 8vw, 96px) 0" }}>
        <div className="container-site hero-grid">
          <div>
            <div className="eyebrow">Start here</div>
            <h2>Ready to see what we&rsquo;d pay for your Kentucky house?</h2>
            <p style={{ color: "var(--ink-soft)", lineHeight: 1.75, marginTop: "1rem", maxWidth: "54ch" }}>
              Fill out the form and we&rsquo;ll call you within a few hours. No commitment, no pressure. Just a number for you to evaluate on your own terms.
            </p>
            <p style={{ marginTop: "1.25rem" }}>
              <a href={PHONE_TEL} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "var(--barn)", fontWeight: 700, textDecoration: "none", fontSize: "1.05rem" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 5.91 5.91l1.51-1.51a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Or call us: {PHONE_DISPLAY}
              </a>
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer>
        <div className="container-site">
          <div className="foot-legal" style={{ paddingTop: "2rem" }}>
            <div>© {new Date().getFullYear()} Honest Offer Inc. · Kentucky · Licensed &amp; insured.</div>
            <div>
              <Link href="/">Home</Link> · <Link href="/about">About</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
