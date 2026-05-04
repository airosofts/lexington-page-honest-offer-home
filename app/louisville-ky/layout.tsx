import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "We Buy Houses Louisville KY | Cash Offer in 24 Hours | Honest Offer",
  description:
    "Get a fair cash offer for your Louisville, KY home in 24 hours. No repairs, no agents, no fees. Serving Jefferson County, Shively, St. Matthews, Middletown, and all of Greater Louisville. A+ BBB rated.",
  openGraph: {
    title: "We Buy Houses Louisville KY | Cash Offer in 24 Hours | Honest Offer",
    description:
      "Get a fair cash offer for your Louisville, KY home in 24 hours. No repairs, no agents, no fees. Local buyer, A+ BBB rated.",
    url: "https://kentucky.honestofferhome.com/louisville-ky",
    siteName: "Honest Offer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Buy Houses Louisville KY | Cash Offer in 24 Hours",
    description:
      "Get a fair cash offer for your Louisville, KY home in 24 hours. No repairs, no fees.",
  },
  alternates: {
    canonical: "https://kentucky.honestofferhome.com/louisville-ky",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LouisvilleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
