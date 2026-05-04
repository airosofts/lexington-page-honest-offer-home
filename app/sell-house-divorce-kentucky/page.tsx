import type { Metadata } from "next";
import SituationLayout from "@/components/SituationLayout";
import type { FaqItem } from "@/components/CityFaq";

export const metadata: Metadata = {
  title: "Sell House During Divorce in Kentucky | Fast Closing | Honest Offer",
  description:
    "Need to sell a house during a divorce in Kentucky? We close fast, split the proceeds cleanly, and keep the process private. Cash offer in 24 hours. No agents, no delays.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/sell-house-divorce-kentucky" },
  robots: { index: true, follow: true },
};

const FAQ: FaqItem[] = [
  {
    q: "Both spouses have to agree to the sale — what if we can't agree on anything?",
    a: "Both owners of record do need to sign at closing, but that's it. We handle all the negotiations on our end — you don't need to coordinate repair bids, showing schedules, or buyer counter-offers together. We give you one number, both parties decide independently whether to accept, and if you both sign, we close.",
  },
  {
    q: "Can we split the proceeds at closing in different proportions?",
    a: "Yes. Your closing attorney can direct the wire transfer in any proportion the parties agree to or that a court orders. We're not involved in how the proceeds are divided — that's between you, your attorneys, and the title company.",
  },
  {
    q: "We need to close before the divorce is finalized. Is that possible?",
    a: "In most cases, yes. Both spouses have legal authority to sell jointly-owned property before a divorce decree is issued, though some courts issue injunctions — your attorney will know if that applies to your case. We've closed plenty of sales before a divorce was final.",
  },
  {
    q: "Will you keep our situation private?",
    a: "Yes. We don't put a sign in the yard, we don't list the property on MLS, and we don't advertise your home to the public. No parade of strangers through your home. One visit from us, one written offer, and a closing date. That's it.",
  },
];

export default function Page() {
  return (
    <SituationLayout
      brandTagline="Divorce Sales · Kentucky"
      heroEyebrow="Private · Fast · Clean split"
      headline={<>Sell Your House During a <em>Divorce</em> in Kentucky — Fast and Private</>}
      heroIntro="Selling a marital home during a divorce is emotionally exhausting — especially when you have to coordinate showings, repairs, and buyer negotiations while managing everything else. We close fast, keep the sale private, and eliminate the need for both parties to manage anything together."
      detailEyebrow="Selling a house during a Kentucky divorce?"
      detailHeading={<>A fast, private close eliminates months of joint decision-making.</>}
      detailParagraphs={[
        "When both spouses need to agree on every repair, every showing, and every counter-offer, the process drags out and creates more conflict. Our process is different: we make one offer, both parties review it independently, and if you both accept, we close. No ongoing coordination required.",
        "We don't list the house, we don't put a sign in the yard, and we don't bring strangers through your home. The sale stays between you, us, and the title company. For many couples, that privacy alone is worth more than the few extra dollars a public listing might yield.",
        "We've worked with divorce attorneys and mediators across Kentucky and understand what a court-ordered or agreed-upon sale looks like. We can close in as little as 7 days, or schedule out 60–90 days if the proceedings require it.",
      ]}
      faqItems={FAQ}
      ctaHeadline={<>Get a <em>private, fast</em> offer on your Kentucky home today.</>}
    />
  );
}
