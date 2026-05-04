import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Honest Offer",
  description:
    "What we collect, why we collect it, and how we keep it private. Plain-spoken privacy policy for Honest Offer Inc.",
};

const UPDATED = "April 22, 2026";

export default function PrivacyPage() {
  return (
    <>

      <main className="container-site legal">
        <div className="eyebrow">Legal</div>
        <h1>
          Privacy <em>matters.</em> Here&rsquo;s exactly what we do with your
          information.
        </h1>
        <p className="updated">Last updated: {UPDATED}</p>

        <p>
          This policy explains what information Honest Offer Inc.
          (&ldquo;Honest Offer,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
          collects when you use our website, why we collect it, and what we
          will and won&rsquo;t do with it. We wrote this in plain English on
          purpose. If something here is unclear, assume the plain-reading
          interpretation is what we meant.
        </p>

        <h2>1. What we collect</h2>

        <h3>Information you give us</h3>
        <p>
          When you fill out the offer form, we collect the information you
          submit — at each step, not only when you finish. Specifically:
        </p>
        <ul>
          <li>
            <strong>Step 1:</strong> property address, property type, and phone
            number.
          </li>
          <li>
            <strong>Step 2:</strong> a self-described condition of the property
            and your preferred selling timeline.
          </li>
          <li>
            <strong>Step 3:</strong> your name and (optionally) an email
            address.
          </li>
        </ul>
        <p>
          We save each step as you progress. If you abandon the form after Step
          1, we will still have the information you entered up to that point,
          because a real person may want to follow up with an offer.
        </p>

        <h3>Information collected automatically</h3>
        <p>
          Like most websites, we collect a small amount of technical
          information automatically when you visit:
        </p>
        <ul>
          <li>
            Your <strong>IP address</strong> (so we can estimate your general
            location and detect abuse).
          </li>
          <li>
            The <strong>country, state/region, and city</strong> derived from
            that IP address (not a precise GPS location).
          </li>
          <li>
            A <strong>session identifier</strong> stored in your browser&rsquo;s
            local storage so we can tell repeat visits from first visits without
            identifying you personally.
          </li>
          <li>
            Your <strong>user agent</strong> (browser and operating system) and
            the page that <strong>referred</strong> you, if any.
          </li>
          <li>
            The page paths you viewed on our site and the timestamp of each
            visit.
          </li>
        </ul>
        <p>
          We do not use third-party advertising pixels, we do not sell your
          information to data brokers, and we do not run cross-site tracking.
        </p>

        <h2>2. Why we collect it</h2>
        <ul>
          <li>
            <strong>To evaluate your property and send you a written cash
            offer.</strong> That&rsquo;s the core purpose of the form.
          </li>
          <li>
            <strong>To follow up if you start the form but don&rsquo;t
            finish.</strong> If you entered an address and phone in Step 1, a
            local team member may reach out so we can still send you a number.
          </li>
          <li>
            <strong>To understand traffic</strong> — how many unique visitors
            reach the site, roughly where they are, and which pages perform.
          </li>
          <li>
            <strong>To prevent abuse</strong> — spam submissions, repeated
            fake addresses, and similar nuisance traffic.
          </li>
        </ul>

        <h2>3. Who we share it with</h2>
        <p>
          We share your information only with the minimum set of service
          providers required to run the website and our business:
        </p>
        <ul>
          <li>
            <strong>Our database host</strong> (Supabase), where your
            submission is stored securely.
          </li>
          <li>
            <strong>An IP geolocation provider</strong> (ip-api.com) that
            translates your IP address into a general country, region, and city
            label. We do not send them your name, address, or phone.
          </li>
          <li>
            <strong>Our hosting provider</strong> for the website itself.
          </li>
        </ul>
        <p>
          We do not sell your personal information. We do not rent it. We do
          not share it with advertisers. If we are ever required by valid legal
          process to disclose information, we will disclose only the minimum
          the law requires.
        </p>

        <h2>4. How long we keep it</h2>
        <p>
          We keep submission data for as long as we may reasonably need it to
          evaluate offers, close transactions, maintain business records, and
          meet legal obligations. Traffic analytics data (IP, session,
          timestamps) is retained on a rolling window typically measured in
          months, not years.
        </p>
        <p>
          You may ask us to delete your submission data at any time; see
          Section 6.
        </p>

        <h2>5. Security</h2>
        <p>
          Data is transmitted over HTTPS and stored in an access-controlled
          database. Only authorized team members can read it, and those reads
          are logged. We use industry-standard safeguards, but no system is
          perfectly secure and we do not claim otherwise.
        </p>

        <h2>6. Your rights</h2>
        <p>
          Depending on where you live, you may have the right to ask us to:
        </p>
        <ul>
          <li>Tell you what information we have about you.</li>
          <li>Correct information we have about you.</li>
          <li>Delete information we have about you.</li>
          <li>Stop using your information for follow-up outreach.</li>
        </ul>
        <p>
          To exercise any of these rights, start a new submission on the
          homepage and include your request in the address or name field, and a
          team member will follow up through the same phone number or email you
          provide. We will verify the request before acting on it so we do not
          delete someone else&rsquo;s data by mistake.
        </p>

        <h2>7. Children</h2>
        <p>
          Our services are intended for adults selling real property. We do
          not knowingly collect information from children under 13.
        </p>

        <h2>8. Do Not Track &amp; cookies</h2>
        <p>
          We do not use advertising cookies. The only persistent identifier
          we set is a random session ID in your browser&rsquo;s local storage,
          which exists solely so we can distinguish a first-time visitor from a
          returning one. You can clear it at any time through your
          browser&rsquo;s site-data controls.
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          If we update this policy in a way that materially expands how we use
          your information, we will update the &ldquo;Last updated&rdquo; date
          at the top and, where appropriate, post a notice on the homepage.
          Continued use of the site after the update means you accept the
          revised policy.
        </p>

        <div className="legal-nav">
          <Link href="/">← Back to home</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </main>

    </>
  );
}
