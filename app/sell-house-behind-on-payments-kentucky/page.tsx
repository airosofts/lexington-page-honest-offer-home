import type { Metadata } from "next";
import SituationLayout from "@/components/SituationLayout";
import type { FaqItem } from "@/components/CityFaq";

export const metadata: Metadata = {
  title: "Behind on Mortgage Payments Kentucky | Sell Before Foreclosure | Honest Offer",
  description:
    "Behind on your Kentucky mortgage? Selling before foreclosure protects your credit and recovers your equity. Fast cash offer, close in as little as 7 days.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/sell-house-behind-on-payments-kentucky" },
  robots: { index: true, follow: true },
};

const FAQ: FaqItem[] = [
  {
    q: "I'm only 1–2 months behind. Do I need to act now?",
    a: "You have more time than you think, but acting earlier gives you more options. The sooner you sell, the more equity you protect and the easier the lender payoff process is. Once a foreclosure complaint is filed, the process gets more complicated and you start accumulating attorney fees that eat into your proceeds.",
  },
  {
    q: "Will the lender accept the sale payoff even though I'm behind?",
    a: "Yes. At closing, the title company requests a payoff statement directly from your lender that includes all arrears, fees, and accrued interest. Your lender gets paid in full and the loan is satisfied — your delinquency history closes with it.",
  },
  {
    q: "What if I owe more than the house is worth?",
    a: "If you're underwater, a traditional payoff sale may not work. In that case, a short sale — where the lender agrees to accept less than what's owed — may be an option. We can discuss whether that path makes sense for your situation. We'll be honest if it doesn't.",
  },
  {
    q: "I'm embarrassed and don't want my neighbors to know. Will you put a sign in my yard?",
    a: "Never. We don't put a sign in the yard, we don't list the property publicly, and the sale stays between you, us, and the title company. No open houses, no strangers walking through.",
  },
];

export default function Page() {
  return (
    <SituationLayout
      brandTagline="Mortgage Relief · Kentucky"
      heroEyebrow="Protect your credit · Recover your equity · Close fast"
      headline={<>Behind on Payments in <em>Kentucky</em>? Sell Before the Damage Gets Worse</>}
      heroIntro="Missing mortgage payments in Kentucky is stressful — and every month you wait, the situation gets harder to reverse. Selling your house fast is often the best way to pay off the lender, protect your credit score, and walk away with equity instead of nothing. We close in as little as 7 days."
      detailEyebrow="Behind on your Kentucky mortgage?"
      detailHeading={<>A fast sale is almost always better than waiting for foreclosure to proceed.</>}
      detailParagraphs={[
        "A formal foreclosure judgment in Kentucky can stay on your credit report for up to seven years. It affects your ability to rent an apartment, finance a car, buy again, or even pass certain employer background checks. Selling your house before the auction eliminates the judgment entirely and gives you a clean financial restart.",
        "If you have equity in the property — even just a little — a fast sale can put money in your pocket. At closing, your mortgage lender is paid off using the proceeds, including any late fees and arrears. Whatever is left comes to you. Even in a distressed situation, that's almost always a better outcome than foreclosure.",
        "We can close in as little as 7 days, which is often fast enough to stop a foreclosure sale even if it's already been scheduled. Call us as soon as possible and we'll tell you exactly where you stand.",
      ]}
      faqItems={FAQ}
      ctaHeadline={<>Sell your Kentucky house fast and <em>protect your credit</em>.</>}
    />
  );
}
