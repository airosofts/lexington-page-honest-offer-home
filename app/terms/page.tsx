import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Honest Offer",
  description:
    "The rules for using the Honest Offer website. Straight-talk terms, no fine print traps.",
};

const UPDATED = "April 22, 2026";

export default function TermsPage() {
  return (
    <>

      <main className="container-site legal">
        <div className="eyebrow">Legal</div>
        <h1>
          Terms of <em>Service.</em>
        </h1>
        <p className="updated">Last updated: {UPDATED}</p>

        <p>
          These terms explain the rules for using this website. By visiting
          the site, submitting the offer form, or otherwise interacting with
          any page here, you agree to these terms. If you don&rsquo;t agree,
          please don&rsquo;t use the site.
        </p>

        <h2>1. Who you&rsquo;re dealing with</h2>
        <p>
          This website is operated by <strong>Honest Offer Inc.</strong>, a
          locally-owned real estate company. References to &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; and &ldquo;our&rdquo; mean Honest Offer Inc.
          References to &ldquo;you&rdquo; mean the person using the site.
        </p>

        <h2>2. What the site is (and isn&rsquo;t)</h2>
        <p>
          The site is informational and lets you request a cash offer on a
          property you own or are authorized to sell. Nothing on the site is
          a binding offer to purchase, a listing agreement, a guarantee of a
          specific sale price, a legal opinion, a tax opinion, or financial
          advice.
        </p>
        <p>
          A written offer we send you after reviewing your submission is the
          only document that can create a real-estate purchase commitment,
          and only when it is signed by both parties.
        </p>

        <h2>3. Your submission</h2>
        <p>By submitting information through the offer form you confirm that:</p>
        <ul>
          <li>You are at least 18 years old.</li>
          <li>
            You are the owner of the property, an authorized agent of the
            owner, or have a legitimate interest in selling the property.
          </li>
          <li>
            The information you provide is accurate to the best of your
            knowledge.
          </li>
          <li>
            You consent to being contacted by us by phone, text, or email
            about your submission.
          </li>
        </ul>
        <p>
          If you&rsquo;re not the owner, please make sure you have the
          owner&rsquo;s permission before submitting an address. We rely on
          that representation.
        </p>

        <h2>4. Offers are non-binding and subject to review</h2>
        <p>
          When we send you a cash offer, that offer is based on the
          information you gave us and a reasonable review of public data
          about the property. We may reduce, withdraw, or re-issue an offer
          if we later discover facts that materially change the property&rsquo;s
          value (for example, undisclosed structural damage, open liens, or
          title issues). We do not retrade purely to squeeze margin — we
          retrade only when material facts change.
        </p>
        <p>
          You are under no obligation to accept any offer we send you.
          Likewise, no offer creates a legal commitment on our part until a
          written purchase and sale agreement is signed by both parties.
        </p>

        <h2>5. Acceptable use</h2>
        <p>You agree not to use the site to:</p>
        <ul>
          <li>Submit false, misleading, or fraudulent information.</li>
          <li>Impersonate another person or property owner.</li>
          <li>Scrape, copy, or redistribute content from the site without written permission.</li>
          <li>Interfere with or attempt to compromise the site&rsquo;s security, performance, or availability.</li>
          <li>Use the site in any way that violates applicable law.</li>
        </ul>

        <h2>6. Intellectual property</h2>
        <p>
          The text, design, logos, brand name, and code on this site belong
          to Honest Offer Inc. or its licensors. You may read the site and
          share reasonable quotations with attribution, but you may not
          copy large portions, clone the design system, or use our brand
          marks to promote your own business.
        </p>

        <h2>7. Third-party services</h2>
        <p>
          The site relies on third-party infrastructure providers (including
          our database host and an IP geolocation service) to function. We
          are not responsible for the availability, security, or practices
          of those third parties, but we choose reputable ones and use them
          under their published terms.
        </p>

        <h2>8. Disclaimers</h2>
        <p>
          The site is provided on an <strong>&ldquo;as is&rdquo;</strong> and{" "}
          <strong>&ldquo;as available&rdquo;</strong> basis, without
          warranties of any kind, express or implied, including warranties of
          merchantability, fitness for a particular purpose, or
          non-infringement. We do not warrant that the site will be
          uninterrupted, error-free, or free of harmful components.
        </p>
        <p>
          Nothing in these terms is intended to disclaim any warranty or
          liability that cannot be disclaimed under applicable law.
        </p>

        <h2>9. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Honest Offer Inc. and its
          team will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits,
          revenues, data, or goodwill, arising out of your use of the site,
          even if we have been advised of the possibility of such damages.
          Our total liability for any claim relating to the site, regardless
          of cause, will not exceed one hundred U.S. dollars ($100).
        </p>

        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify and hold Honest Offer Inc. harmless from any
          claims, losses, or expenses (including reasonable attorneys&rsquo;
          fees) arising from your misuse of the site, your violation of
          these terms, or your submission of information you had no right to
          submit.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These terms are governed by the laws of the U.S. state in which
          Honest Offer Inc. is primarily located, without regard to its
          conflict-of-laws rules. Any dispute arising from these terms or
          your use of the site will be brought exclusively in the state or
          federal courts of that state, and you consent to personal
          jurisdiction there.
        </p>

        <h2>12. Changes to these terms</h2>
        <p>
          We may update these terms from time to time. When we do, we will
          update the &ldquo;Last updated&rdquo; date at the top. Continued use
          of the site after the change means you accept the revised terms.
        </p>

        <h2>13. Severability</h2>
        <p>
          If any part of these terms is found unenforceable, the rest stays
          in effect and the unenforceable part will be interpreted as
          narrowly as necessary to be enforceable.
        </p>

        <h2>14. Entire agreement</h2>
        <p>
          These terms, together with our Privacy Policy, make up the entire
          agreement between you and Honest Offer Inc. regarding your use of
          the site, and replace any prior agreement on the same subject.
        </p>

        <div className="legal-nav">
          <Link href="/">← Back to home</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </main>

    </>
  );
}
