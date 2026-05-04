import type { Metadata } from "next";
import SituationLayout from "@/components/SituationLayout";
import type { FaqItem } from "@/components/CityFaq";

export const metadata: Metadata = {
  title: "Sell an Inherited House in Kentucky | Fast Cash Offer | Honest Offer",
  description:
    "Inherited a house in Kentucky? We buy inherited properties as-is, regardless of condition or estate status. Fair cash offer in 24 hours. No repairs, no probate hassle.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/sell-inherited-house-kentucky" },
  robots: { index: true, follow: true },
};

const FAQ: FaqItem[] = [
  {
    q: "Can you buy the house before probate is complete in Kentucky?",
    a: "It depends on the estate's status. In many cases we can proceed once the executor or administrator has been appointed by the court. We work with Kentucky probate attorneys regularly and can often move faster than a traditional listing once the legal authority is established. Call us and we'll tell you exactly where things stand.",
  },
  {
    q: "What if there are multiple heirs who need to agree?",
    a: "That's common. We need all owners of record to sign — but we've closed deals with 4, 5, even 7 heirs spread across multiple states. We'll work around everyone's schedules and can coordinate remote notarizations or mail-away closings.",
  },
  {
    q: "The house is full of belongings from the estate. Do we need to clear it out?",
    a: "No. Leave everything. We price the cleanout into our offer. Whether it's furniture, tools, decades of accumulation, or items you want to keep — just tell us what you're taking and leave the rest.",
  },
  {
    q: "What if the house has deferred maintenance or hasn't been updated in years?",
    a: "That's the norm for inherited properties — and exactly what we specialize in. Old roofs, outdated electrical, overgrown yards, musty interiors. We price it accurately and buy it exactly as-is. Our contractors handle the renovation after we close.",
  },
];

export default function Page() {
  return (
    <SituationLayout
      brandTagline="Inherited Properties · Kentucky"
      heroEyebrow="No repairs · No probate headaches · No fees"
      headline={<>Sell an Inherited House in <em>Kentucky</em> Without the Hassle</>}
      heroIntro="Inheriting a Kentucky property is stressful — especially when you don't live nearby, the house needs work, or the estate is still being sorted. We buy inherited homes throughout Kentucky as-is, at any stage of probate, with no repairs required. Fair written offer in 24 hours."
      detailEyebrow="Inherited a property in Kentucky?"
      detailHeading={<>We&rsquo;ve helped hundreds of Kentucky heirs sell inherited homes — without the drama.</>}
      detailParagraphs={[
        "Most heirs we work with are dealing with a house they didn't expect to own. It may have been sitting vacant for months, the utilities may be off, and there may be years of deferred maintenance. Traditional buyers won't touch it in that condition. We buy it exactly as it sits.",
        "If the probate is still open, we can often move once the executor is appointed by a Kentucky court. If the estate is already settled, we can close in as little as 7 days. Either way, we handle all the title coordination — you just need to show up at closing with the authority to sign.",
        "You don't need to clean out the house, fix anything, or hire a single contractor. Whatever is inside — furniture, tools, personal belongings, decades of accumulation — leave it all. We price the cleanout into our offer and handle it after we close.",
      ]}
      faqItems={FAQ}
      ctaHeadline={<>Ready to sell the <em>inherited</em> house in Kentucky?</>}
    />
  );
}
