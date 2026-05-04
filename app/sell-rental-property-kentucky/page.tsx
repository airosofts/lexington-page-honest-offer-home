import type { Metadata } from "next";
import SituationLayout from "@/components/SituationLayout";
import type { FaqItem } from "@/components/CityFaq";

export const metadata: Metadata = {
  title: "Sell Rental Property Kentucky | Cash Offer Any Condition | Honest Offer",
  description:
    "Tired of being a Kentucky landlord? We buy rental properties as-is — tenant in place or vacant, any condition. Cash offer in 24 hours. No repairs, no agents, no fees.",
  alternates: { canonical: "https://kentucky.honestofferhome.com/sell-rental-property-kentucky" },
  robots: { index: true, follow: true },
};

const FAQ: FaqItem[] = [
  {
    q: "Can you buy the property with a tenant still living there?",
    a: "Yes. We buy tenant-occupied rentals all the time. Depending on the Kentucky lease terms, the tenant may remain — we assume the lease and handle that transition. If the property is month-to-month, we discuss the options. You don't need to evict anyone before selling to us.",
  },
  {
    q: "The property has deferred maintenance and I don't want to do any repairs before selling.",
    a: "That's exactly why landlords call us. We buy rental properties as-is — no painting, no carpet, no HVAC repairs, no catching up on deferred maintenance. We price the work into our offer and our contractors handle it after we close.",
  },
  {
    q: "The tenant hasn't been paying rent. Can I still sell?",
    a: "Yes. A non-paying tenant doesn't prevent a sale. We've purchased properties mid-eviction in Kentucky. We understand the legal posture and factor it into our offer and timeline accordingly.",
  },
  {
    q: "I have multiple rental properties in Kentucky. Can you buy more than one?",
    a: "Yes — we regularly buy portfolios. Whether it's 2 units or 20, we can make an offer on all of them and close on each as the title work is ready. Call us to discuss a bulk acquisition.",
  },
];

export default function Page() {
  return (
    <SituationLayout
      brandTagline="Rental Properties · Kentucky"
      heroEyebrow="Tenant in place or vacant · Any condition · No fees"
      headline={<>Sell Your <em>Kentucky Rental Property</em> — Tenant In Place or Vacant</>}
      heroIntro="Done being a landlord? Problem tenants, late rent, expensive repairs, and 2 a.m. calls — we understand why you're ready to walk away. We buy rental properties throughout Kentucky as-is, whether there's a tenant inside, an eviction in progress, or the house has been sitting vacant for months."
      detailEyebrow="Tired of Kentucky landlord headaches?"
      detailHeading={<>You don&rsquo;t have to manage a single repair or eviction before you sell.</>}
      detailParagraphs={[
        "Most buy-and-hold landlords get to a point where the math no longer makes sense — the repairs are piling up, the tenants are exhausting, and the cash flow isn't worth the hassle anymore. We've bought hundreds of landlord exit properties across Kentucky, and we price them fairly based on actual market data and actual repair costs.",
        "We buy tenant-occupied rentals without requiring you to evict first. If the tenant has a valid lease, we assume it. If it's month-to-month or the tenant is already being evicted, we factor that into our offer and timeline. Either way, you don't need to manage the eviction process to sell.",
        "The property doesn't need to be cleaned out, painted, or repaired. Tenants who left furniture, trash, or damage behind — we handle all of it. You close, you get paid, and you're done with Kentucky landlording forever.",
      ]}
      faqItems={FAQ}
      ctaHeadline={<>Ready to exit your <em>Kentucky rental</em>? Get an offer today.</>}
    />
  );
}
