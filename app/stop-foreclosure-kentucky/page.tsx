import type { Metadata } from "next";
import SituationLayout from "@/components/SituationLayout";
import type { FaqItem } from "@/components/CityFaq";

export const metadata: Metadata = {
  title: "Stop Foreclosure in Kentucky | Sell Your House Fast | Honest Offer",
  description:
    "Facing foreclosure in Kentucky? Selling before the auction can protect your credit and recover your equity. We close fast — sometimes in 7 days. Cash offer in 24 hours.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/stop-foreclosure-kentucky" },
  robots: { index: true, follow: true },
};

const FAQ: FaqItem[] = [
  {
    q: "How much time do I have before foreclosure in Kentucky?",
    a: "Kentucky is a judicial foreclosure state, meaning the lender must go through the courts. The process typically takes 150–450 days from the first missed payment to the auction, though this varies. If you've received a Notice of Default or been served with a foreclosure complaint, time is still on your side — but it's running out. The sooner we talk, the more options you have.",
  },
  {
    q: "Will selling pay off the mortgage balance?",
    a: "That depends on what you owe versus what the house is worth. If you have equity, we pay off your mortgage at closing and wire you the difference. If you owe more than the house is worth (underwater), we can discuss a short sale process — but we'll be honest with you upfront about whether that's a realistic path.",
  },
  {
    q: "Will a sale stop the foreclosure process?",
    a: "Yes. Once we close, the proceeds pay off your mortgage lender and the foreclosure case is dismissed. A completed sale is the most effective way to stop a foreclosure and protect your credit from the far worse impact of an actual foreclosure judgment.",
  },
  {
    q: "I'm embarrassed about the situation. Will this be discreet?",
    a: "Completely. We don't advertise your home, we don't put a sign in the yard, and the sale stays off the MLS. The only people who know about it are you, us, and the title company.",
  },
];

export default function Page() {
  return (
    <SituationLayout
      brandTagline="Foreclosure Prevention · Kentucky"
      heroEyebrow="Protect your credit · Keep your equity · Close fast"
      headline={<>Stop Foreclosure in <em>Kentucky</em> — Sell Before the Auction</>}
      heroIntro="If you're behind on mortgage payments in Kentucky, selling your house is almost always better than letting foreclosure proceed. A sale pays off the lender, stops the case, and protects your credit from a judgment that can follow you for years. We close fast — sometimes in 7 days."
      detailEyebrow="Behind on payments in Kentucky?"
      detailHeading={<>Selling before foreclosure is the most powerful thing you can do to protect yourself.</>}
      detailParagraphs={[
        "A foreclosure judgment in Kentucky stays on your credit report for up to seven years and can make renting, buying again, or even getting certain jobs much harder. Selling before the auction eliminates the judgment — and if you have equity in the home, you walk away with money in your pocket instead of nothing.",
        "Kentucky is a judicial foreclosure state, which means the process moves through the courts and typically takes months. That time is on your side if you use it. Even if you've already been served a foreclosure complaint, a fast sale can stop the process before it reaches auction.",
        "We can close in as little as 7 days once paperwork is signed. We work directly with your lender's payoff department to ensure the mortgage is satisfied at closing. You don't need to handle any of that coordination yourself.",
      ]}
      faqItems={FAQ}
      ctaHeadline={<>Get a cash offer and <em>stop foreclosure</em> in Kentucky today.</>}
    />
  );
}
