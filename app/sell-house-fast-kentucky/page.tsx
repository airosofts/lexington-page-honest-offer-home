import type { Metadata } from "next";
import SituationLayout from "@/components/SituationLayout";
import type { FaqItem } from "@/components/CityFaq";

export const metadata: Metadata = {
  title: "Sell Your House Fast in Kentucky | Cash Offer in 24 Hours | Honest Offer",
  description:
    "Need to sell your Kentucky house fast? We buy houses statewide and close in as little as 7 days. No repairs, no agents, no fees. Fair written cash offer in 24 hours.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/sell-house-fast-kentucky" },
  robots: { index: true, follow: true },
};

const FAQ: FaqItem[] = [
  {
    q: "How fast can you actually close on a Kentucky house?",
    a: "Our fastest on record is 5 business days. Most deals close in 10–21 days depending on how quickly the title search comes back. If there are title issues (liens, unpaid taxes, estate complications), it takes longer — but we stay in it and work through them. If you need 60 or 90 days, we can schedule that too.",
  },
  {
    q: "What does the process look like from start to finish?",
    a: "You submit the form (60 seconds). We review your property and comparable sales, then call you within 24 hours with a written offer. If you accept, we open title, order a search, and schedule a closing date. On closing day you sign, and we wire the funds. That's it.",
  },
  {
    q: "How do I know your offer is fair?",
    a: "We walk you through the math on the phone. We show you the comparable sales we used, our repair estimate, and our holding/selling cost assumptions. You should be able to verify every number independently. We don't make lowball offers and pressure you to take them — the business only works if sellers think the process was fair.",
  },
  {
    q: "Do you buy in rural parts of Kentucky, not just cities?",
    a: "Yes. We buy throughout Kentucky — not just Lexington, Louisville, and Bowling Green. Rural counties, smaller towns, properties on large parcels. Call us with the address and we'll tell you quickly if it's in our buying range.",
  },
];

export default function Page() {
  return (
    <SituationLayout
      brandTagline="Sell Fast · All of Kentucky"
      heroEyebrow="Locally owned · Close in 7–21 days · $0 fees"
      headline={<>Sell Your House Fast in <em>Kentucky</em> — Written Offer in 24 Hours</>}
      heroIntro="Whether you need to close in 7 days or simply want certainty that the sale will happen, we're the fastest path to a clean, hassle-free close in Kentucky. We buy houses statewide — any condition, any situation, any timeline. No repairs, no agents, no fees."
      detailEyebrow="Why sell to us instead of listing?"
      detailHeading={<>Speed and certainty are worth more than most sellers realize — until they need them.</>}
      detailParagraphs={[
        "The average time to close a traditional home sale in Kentucky is 60–90 days from listing to funding. That's assuming the buyer's financing holds, the appraisal comes in, and the inspection doesn't uncover anything that restarts negotiations. About 1 in 6 traditional deals falls through entirely. For sellers who need to move their lives forward, that's not a gamble worth taking.",
        "We eliminate all of that. We pay cash — no lender, no appraisal, no financing contingency. We don't renegotiate after inspection. We set a closing date and keep it. The trade-off is that our offer will be less than a fully renovated top-of-market listing price — but once you account for agent commissions (5–6%), closing costs ($3k–$8k), repair requests, and carrying costs during the listing period, the gap is often smaller than people expect.",
        "We're locally owned in Kentucky. We buy throughout the state — Lexington, Louisville, Bowling Green, and everywhere in between, including smaller towns and rural counties. If you're in Kentucky and need to sell, we can usually make you an offer.",
      ]}
      faqItems={FAQ}
      ctaHeadline={<>Get a written cash offer on your <em>Kentucky house</em> today.</>}
    />
  );
}
