import type { Metadata } from "next";
import SituationLayout from "@/components/SituationLayout";
import type { FaqItem } from "@/components/CityFaq";

export const metadata: Metadata = {
  title: "Sell Hoarder House Kentucky | We Buy Any Condition | Honest Offer",
  description:
    "Selling a hoarder house in Kentucky? We buy severely cluttered homes as-is — no judgment, no cleanup required. Fair cash offer in 24 hours. Locally owned.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/sell-hoarder-house-kentucky" },
  robots: { index: true, follow: true },
};

const FAQ: FaqItem[] = [
  {
    q: "Do we have to clean anything out before you can buy the house?",
    a: "Nothing. Not a box, not a bag, not a piece of furniture. The only things you need to take are items you personally want to keep. Everything else — every item in the house — can stay exactly where it is. We handle all cleanout after closing.",
  },
  {
    q: "Will you judge us or treat the situation unkindly?",
    a: "No. We've bought dozens of severely cluttered homes across Kentucky. Our team is professional and discreet. We understand that hoarding is a health condition, not a character flaw, and we treat every person we work with accordingly.",
  },
  {
    q: "We can't even access all the rooms. Does that affect your offer?",
    a: "Not significantly. When access is limited, we make reasonable assumptions about the areas we can't see and build a conservative buffer into our offer. This is standard for the types of properties we buy. We'd rather be transparent about that than pretend we can perfectly assess a fully blocked room.",
  },
  {
    q: "There may be pests, mold, or structural issues we're not sure about.",
    a: "That's common in these situations and it doesn't disqualify the sale. We buy properties with pest infestations, mold remediation needs, and deferred structural maintenance. Our contractors handle all of it. We won't hold any of that against you at closing.",
  },
];

export default function Page() {
  return (
    <SituationLayout
      brandTagline="Distressed Properties · Kentucky"
      heroEyebrow="No judgment · No cleanup · No repairs"
      headline={<>Sell a <em>Severely Cluttered</em> or Hoarder House in Kentucky — Leave Everything</>}
      heroIntro="Heavily cluttered homes are nearly impossible to sell through traditional channels — buyers won't make offers, agents won't list them, and the cleanup cost can be overwhelming. We buy heavily cluttered and hoarder properties throughout Kentucky exactly as they are, with no cleanup required and no judgment from our team."
      detailEyebrow="Overwhelmed by the property condition?"
      detailHeading={<>You don&rsquo;t have to tackle the cleanup to sell — that&rsquo;s our job, not yours.</>}
      detailParagraphs={[
        "Properties with severe clutter are one of the situations where traditional real estate simply doesn't work. Most buyers need a mortgage, and most lenders require the property to be in habitable condition. Even cash buyers often back out when they see what's involved. We specialize in exactly this — we've bought Kentucky properties with floor-to-ceiling clutter in every room, unusable kitchens, and blocked stairways.",
        "Our offer accounts for the full cleanout cost, any repairs that become visible after the cleanout, and a realistic renovation estimate. We don't come back after we see the interior and cut the price — what we offer is what we pay.",
        "Everything inside the house is yours to take or leave. If there are items of value you'd like to keep — furniture, tools, family belongings — we'll work around your ability to retrieve them. Anything you don't want stays. Our crew handles all removal and disposal after closing.",
      ]}
      faqItems={FAQ}
      ctaHeadline={<>Sell your Kentucky property <em>as-is</em> — leave everything behind.</>}
    />
  );
}
