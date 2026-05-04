import Link from "next/link";

export default function ThankYouContent() {
  return (
    <div
      className="form-card"
      style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}
    >
      <div className="form-success" style={{ padding: "8px 0" }}>
        <div className="form-success-icon">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div
          className="eyebrow"
          style={{ justifyContent: "center", marginBottom: 10 }}
        >
          Offer request confirmed
        </div>
        <h1
          style={{
            fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
            marginBottom: 10,
          }}
        >
          We&rsquo;ve got it.{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--barn-deep)",
              fontWeight: 700,
            }}
          >
            Thank you.
          </em>
        </h1>
        <p
          className="muted"
          style={{
            fontSize: "1.05rem",
            margin: "0 auto 22px",
            maxWidth: "50ch",
          }}
        >
          A real person from our local office is reviewing your property
          today. You&rsquo;ll receive a written cash offer within 24 hours —
          no back-and-forth, no pressure calls at dinner.
        </p>

        <div
          style={{
            display: "grid",
            gap: 12,
            textAlign: "left",
            background: "var(--cream)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius)",
            padding: "18px 20px",
            margin: "4px auto 26px",
            maxWidth: 480,
          }}
        >
          <WhatHappensNext
            step="1"
            title="Quick review"
            body="We look at comps, public records, and the condition you told us about."
          />
          <WhatHappensNext
            step="2"
            title="Written offer within 24 hours"
            body="Sent by text. Fair number, no retrades, no hidden fees."
          />
          <WhatHappensNext
            step="3"
            title="You decide"
            body="Accept, counter, or walk. No obligation either way."
          />
        </div>

        <Link
          href="/"
          className="btn btn-primary"
          style={{
            textDecoration: "none",
            width: "auto",
            display: "inline-flex",
          }}
        >
          Return to home
        </Link>
      </div>
    </div>
  );
}

function WhatHappensNext({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span
        style={{
          flex: "0 0 auto",
          width: 24,
          height: 24,
          borderRadius: 999,
          background: "var(--barn)",
          color: "var(--cream)",
          fontFamily: "var(--font-display)",
          fontSize: "0.78rem",
          fontWeight: 700,
          display: "grid",
          placeItems: "center",
          marginTop: 2,
        }}
      >
        {step}
      </span>
      <div>
        <div
          style={{ fontWeight: 600, color: "var(--ink)", marginBottom: 2 }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "0.92rem",
            color: "var(--ink-soft)",
            lineHeight: 1.5,
          }}
        >
          {body}
        </div>
      </div>
    </div>
  );
}
