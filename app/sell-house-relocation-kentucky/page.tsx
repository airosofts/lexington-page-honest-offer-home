import type { Metadata } from "next";
import SituationLayout from "@/components/SituationLayout";
import type { FaqItem } from "@/components/CityFaq";

export const metadata: Metadata = {
  title: "Sell House Fast When Relocating Kentucky | Certain Close Date | Honest Offer",
  description:
    "Relocating from Kentucky and need a guaranteed close date? We buy houses fast — close in as little as 7 days or on the exact date you need. Cash offer in 24 hours.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/sell-house-relocation-kentucky" },
  robots: { index: true, follow: true },
};

const FAQ: FaqItem[] = [
  {
    q: "Can you guarantee the closing date you set?",
    a: "Yes. Once we have a signed contract and clear title, we close on the date we agreed to. We pay cash — there's no lender, no appraisal, no financing contingency that can push the date back. Roughly 1 in 6 traditional real estate deals falls through entirely. Ours essentially don't.",
  },
  {
    q: "I need to stay in the house for 60 days after closing. Can I do that?",
    a: "Yes — we can do a lease-back after closing so you have time to move without paying two housing costs at once. We close, you get your money, and you stay as a short-term renter until your move date. Terms are negotiated upfront.",
  },
  {
    q: "What if my new employer is covering relocation costs? Does that affect the sale?",
    a: "No — the sale to us is a standard real estate transaction that works with any relocation package. If your employer's relocation program requires a buyout offer from a third-party buyer first, we can typically participate in that process. Call us and we'll sort it out.",
  },
  {
    q: "I'm already in my new city and the Kentucky house is vacant. Can we close remotely?",
    a: "Yes. Most of our process can be handled remotely — we can do a video walkthrough if needed, and closings can be done through mail-away or remote notarization. You don't need to fly back to Kentucky just to sign.",
  },
];

export default function Page() {
  return (
    <SituationLayout
      brandTagline="Relocation Sales · Kentucky"
      heroEyebrow="Guaranteed close date · Any timeline · No financing risk"
      headline={<>Sell Your Kentucky House Fast When <em>Relocating</em> — Pick Your Exact Date</>}
      heroIntro="When you're relocating, a 'maybe it sells in time' situation isn't acceptable. New jobs don't wait, and managing a sale from another city is exhausting. We give you a certain close date — as fast as 7 days, or scheduled out to match your move — with no financing contingencies that can blow up at the last minute."
      detailEyebrow="Relocating from Kentucky?"
      detailHeading={<>Certainty is worth more than squeezing the last dollar out of a traditional listing.</>}
      detailParagraphs={[
        "With a traditional listing, you're negotiating on the buyer's timeline. Their lender might push the closing back. Their inspection might uncover something that starts a new round of negotiations. Their financing might fall through entirely. Roughly 1 in 6 traditional real estate deals doesn't close at all. That's a risk you can't afford when you have a start date in another state.",
        "We pay cash, we don't have a lender, and we set a closing date and keep it. You can tell your employer, your moving company, and your new landlord exactly when you'll be done. No contingencies, no surprises.",
        "We can also do a post-closing lease-back if you need to stay in the house for a few weeks after closing while you finish the move. You get your equity now, and you stay as a short-term renter until your moving truck is packed. It's a common arrangement that many relocating homeowners find useful.",
      ]}
      faqItems={FAQ}
      ctaHeadline={<>Get a <em>certain close date</em> on your Kentucky home today.</>}
    />
  );
}
