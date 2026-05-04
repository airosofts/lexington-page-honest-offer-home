import Link from "next/link";

const PHONE_DISPLAY = "(888) 780-8805";
const PHONE_TEL = "tel:+18887808805";

interface TopBarProps {
  tagline?: string;
  homeHref?: string;
}

export default function TopBar({
  tagline = "Sell Your House Fast · Kentucky",
  homeHref = "/",
}: TopBarProps) {
  return (
    <header className="topbar">
      <div className="container-site topbar-inner">
        <Link href={homeHref} className="brand" aria-label="Honest Offer — We Buy Houses in Kentucky">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path className="mark-house" d="M3 11L12 4l9 7v9H3V11z" />
              <path className="mark-check" d="M8 14.5l2.5 2.5L16 11.5" />
            </svg>
          </span>
          <span className="brand-text">
            <span className="brand-name">Honest Offer <span className="brand-suffix">Inc.</span></span>
            <span className="brand-tagline">{tagline}</span>
          </span>
        </Link>

        <nav className="topbar-nav" aria-label="Site navigation">
          <Link href="/how-it-works" className="topbar-nav-link">How It Works</Link>
          <Link href="/reviews" className="topbar-nav-link">Reviews</Link>
          <Link href="/about" className="topbar-nav-link">About Us</Link>
          <Link href="/contact" className="topbar-nav-link">Contact</Link>
        </nav>

        <a href={PHONE_TEL} aria-label={`Call Honest Offer at ${PHONE_DISPLAY}`} className="topbar-phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 5.91 5.91l1.51-1.51a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}
