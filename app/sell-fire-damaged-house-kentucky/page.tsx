import type { Metadata } from "next";
import SituationLayout from "@/components/SituationLayout";
import type { FaqItem } from "@/components/CityFaq";

export const metadata: Metadata = {
  title: "Sell Fire Damaged House Kentucky | Cash Offer As-Is | Honest Offer",
  description:
    "Sell a fire damaged house in Kentucky as-is. We buy fire-damaged properties in any condition — no repairs, no clean-up required. Cash offer in 24 hours.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/sell-fire-damaged-house-kentucky" },
  robots: { index: true, follow: true },
};

const FAQ: FaqItem[] = [
  {
    q: "Do I need to do any cleanup or demolition before you can buy the house?",
    a: "No. We've purchased houses with full-room fire damage, smoke damage throughout, collapsed ceilings, and fire department water damage on top of everything else. Don't spend a dollar on cleanup. We assess the property as-is and price accordingly.",
  },
  {
    q: "I have an insurance settlement offer. Should I take it before selling to you?",
    a: "That depends on your situation. If the insurance settlement is fair and the proceeds will be released to you (and not to a mortgage lender first), it may make sense to take it. Some homeowners find it easier to sell the damaged property and settle separately with the insurer. Call us and we'll talk through the specifics.",
  },
  {
    q: "The fire happened months ago and the house has been sitting. Is mold or further deterioration a problem?",
    a: "Not a problem for us. Secondary damage from water and exposure after a fire is common, and we factor it into our assessment. A house sitting vacant for months after fire damage is a scenario we've bought before.",
  },
  {
    q: "Can you buy the house if the mortgage lender is involved in the insurance claim?",
    a: "Yes. When there's a mortgage, the lender is typically a co-payee on the insurance check and must approve major repairs. This adds paperwork but doesn't prevent a sale. We coordinate directly with your lender through the title company at closing.",
  },
];

export default function Page() {
  return (
    <SituationLayout
      brandTagline="Fire-Damaged Properties · Kentucky"
      heroEyebrow="Any damage · No cleanup needed · Cash offer"
      headline={<>Sell a <em>Fire-Damaged</em> House in Kentucky — As-Is, No Cleanup</>}
      heroIntro="Selling a fire-damaged property is complicated — the house may be uninhabitable, insurance claims can drag on, and traditional buyers won't touch it. We buy fire-damaged homes throughout Kentucky exactly as they are. No repairs, no cleanup, no waiting for insurance to settle. Fair written offer in 24 hours."
      detailEyebrow="Fire-damaged property in Kentucky?"
      detailHeading={<>We buy fire-damaged homes that other buyers won&rsquo;t touch — and we price them fairly.</>}
      detailParagraphs={[
        "Fire-damaged properties are one of the hardest types to sell through traditional channels. Lenders won't finance them, buyers won't buy them without insurance, and repair estimates can be wild — from a conservative contractor saying $40k to a pessimistic one saying $150k for the same house. We know how to accurately assess fire damage because we've repaired hundreds of properties like it.",
        "You don't need to do anything to the property before we buy it. Don't remove debris, don't start any demolition, and don't spend money on board-ups or tarps beyond what's needed for safety. We'll assess it as it stands and give you a number based on real contractor experience — not a guess.",
        "Whether the fire happened last week or two years ago and the property has been sitting since, we can make you an offer. Secondary damage, structural instability, partial demolition that was started and stopped — we've seen all of it and bought it.",
      ]}
      faqItems={FAQ}
      ctaHeadline={<>Get a cash offer on your <em>fire-damaged</em> Kentucky property.</>}
    />
  );
}
