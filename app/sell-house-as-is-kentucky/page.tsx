import type { Metadata } from "next";
import SituationLayout from "@/components/SituationLayout";
import type { FaqItem } from "@/components/CityFaq";

export const metadata: Metadata = {
  title: "Sell House As-Is in Kentucky | No Repairs Needed | Honest Offer",
  description:
    "Sell your Kentucky house as-is — no repairs, no cleaning, no staging. We buy homes in any condition across Kentucky. Fair cash offer in 24 hours. A+ BBB rated.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/sell-house-as-is-kentucky" },
  robots: { index: true, follow: true },
};

const FAQ: FaqItem[] = [
  {
    q: "What does 'as-is' actually mean? Will you ask for repairs after you see the house?",
    a: "As-is means exactly that. We don't re-negotiate after our walkthrough. If we find something we didn't expect, we'll tell you — but if we sent you a written offer, we honor it. We don't use inspections as a tool to squeeze the price down after you've committed.",
  },
  {
    q: "My house is in really rough shape. Will you still make an offer?",
    a: "Very likely yes. We've bought houses with roof collapses, fire damage, foundation cracks, severe water damage, full gut-renovation needs, and years of deferred maintenance. Call us and describe what you're dealing with. We'll be honest if it's something we can't make work.",
  },
  {
    q: "Do I need to do anything to prepare the house before you see it?",
    a: "Nothing. Don't clean, don't stage, don't haul anything out. We evaluate the house in its current state. If there's clutter, furniture, or debris — leave it. We price it accordingly.",
  },
  {
    q: "How do you calculate what you'll pay for an as-is property?",
    a: "We look at what renovated comparable homes are selling for in your area (the after-repair value), then subtract an honest estimate of what the work would cost, our carrying costs while we renovate, and a fair margin. We'll walk you through the math on the phone if you want to see it.",
  },
];

export default function Page() {
  return (
    <SituationLayout
      brandTagline="As-Is Home Sales · Kentucky"
      heroEyebrow="Any condition · No repairs · No staging"
      headline={<>Sell Your Kentucky House <em>As-Is</em> — No Repairs, No Cleaning</>}
      heroIntro="You shouldn't have to spend $20,000 fixing up a house just to sell it. We buy Kentucky homes in any condition — leaking roofs, outdated kitchens, foundation issues, fire or water damage, years of deferred maintenance. Get a fair written offer in 24 hours without touching a thing."
      detailEyebrow="Selling as-is in Kentucky?"
      detailHeading={<>We buy the house exactly the way it is — and we mean it.</>}
      detailParagraphs={[
        "Most traditional buyers and many other cash buyers will make you an offer and then renegotiate after the inspection — using every issue they find as leverage to cut the price. We don't do that. When we send you a written offer, it's the number we intend to pay. The only thing that changes it is something that materially affects ownership (like an undisclosed lien), not normal condition issues.",
        "We've bought houses with roofs that were letting in water, kitchens from the 1960s, plumbing that needed full replacement, fire-damaged rooms, and properties that hadn't been touched in 20 years. Our contractors have seen it all. We price the work accurately and honestly — no guessing, no padding.",
        "You don't need to clean up, haul anything out, or do a single thing to prepare. Leave furniture, junk, and anything you don't want. We handle the entire cleanout after closing. Your only job is to show up and sign.",
      ]}
      faqItems={FAQ}
      ctaHeadline={<>Sell your Kentucky house <em>as-is</em> — get a fair offer today.</>}
    />
  );
}
