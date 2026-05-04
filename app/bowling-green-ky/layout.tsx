import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "We Buy Houses Bowling Green KY | Cash Offer in 24 Hours | Honest Offer",
  description:
    "Get a fair cash offer for your Bowling Green, KY home in 24 hours. No repairs, no agents, no fees. Serving Warren County, Franklin, Glasgow, Elizabethtown, and all of South Central Kentucky. A+ BBB rated.",
  openGraph: {
    title:
      "We Buy Houses Bowling Green KY | Cash Offer in 24 Hours | Honest Offer",
    description:
      "Get a fair cash offer for your Bowling Green, KY home in 24 hours. No repairs, no agents, no fees. Local buyer, A+ BBB rated.",
    url: "https://kentucky.honestofferhome.com/bowling-green-ky",
    siteName: "Honest Offer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Buy Houses Bowling Green KY | Cash Offer in 24 Hours",
    description:
      "Get a fair cash offer for your Bowling Green, KY home in 24 hours. No repairs, no fees.",
  },
  alternates: {
    canonical: "https://kentucky.honestofferhome.com/bowling-green-ky",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BowlingGreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
