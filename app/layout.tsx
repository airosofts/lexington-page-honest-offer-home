import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

// ─── Tracking IDs — set in .env.local, never hardcode here ───────────────────
// GTM_ID           → NEXT_PUBLIC_GTM_ID                       (e.g. GTM-XXXXXXX)
// GA4_ID           → NEXT_PUBLIC_GA4_ID                       (e.g. G-XXXXXXXXXX)
// CLARITY_ID       → NEXT_PUBLIC_CLARITY_ID                   (e.g. xxxxxxxxxx)
// GOOGLE_ADS_ID    → NEXT_PUBLIC_GOOGLE_ADS_ID                (e.g. AW-XXXXXXXXX)
// GADS_CONV_LABEL  → NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL  (e.g. AbCdEfGhIjK)
//                    Tahir provides both AW-XXXXXXXXX and the conversion label
// ─────────────────────────────────────────────────────────────────────────────
const GTM_ID           = process.env.NEXT_PUBLIC_GTM_ID;
const GA4_ID           = process.env.NEXT_PUBLIC_GA4_ID;
const CLARITY_ID       = process.env.NEXT_PUBLIC_CLARITY_ID;
const GOOGLE_ADS_ID    = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GADS_CONV_LABEL  = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Honest Offer Inc.",
  url: "https://kentucky.honestofferhome.com",
  telephone: "+18887808805",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lexington",
    addressRegion: "KY",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.0406,
    longitude: -84.5037,
  },
  areaServed: [
    "Lexington, KY",
    "Louisville, KY",
    "Bowling Green, KY",
    "Georgetown, KY",
    "Nicholasville, KY",
    "Richmond, KY",
    "Winchester, KY",
    "Paris, KY",
    "Berea, KY",
    "Fayette County, KY",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "87",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  description:
    "Locally owned cash home buyer serving Lexington, Louisville, Bowling Green, and all of Kentucky. Fair cash offers in 24 hours. No repairs, no agents, no fees. A+ BBB rated.",
  sameAs: ["https://honestofferhome.com"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you calculate your cash offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We look at what comparable renovated homes in your neighborhood are selling for, subtract a realistic estimate of work needed, subtract our holding and selling costs, and keep a modest margin. We walk you through the math on the phone. No black box.",
      },
    },
    {
      "@type": "Question",
      name: "Is there really no obligation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Correct. You get a written offer and decide. If the number doesn't work, tell us and we're done. We don't hassle, we don't drip-campaign you, and we don't sell your info.",
      },
    },
    {
      "@type": "Question",
      name: "What if my house needs a lot of work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's our specialty. Foundation cracks, leaking roofs, fire damage, hoarder situations — we've bought all of it across Kentucky. Don't clean, don't repair. Our contractors handle it after we close.",
      },
    },
    {
      "@type": "Question",
      name: "Who pays closing costs when selling in Kentucky?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do. Title fees, recording fees, prorated Kentucky property taxes — all of it. The offer amount we send you is what wires to your account. No deductions.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you close?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our fastest close on record is 5 business days. Most deals close in 10–21 days. If you need longer — 60 or 90 days — we can schedule that too.",
      },
    },
    {
      "@type": "Question",
      name: "How is Honest Offer different from Opendoor or national buyers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iBuyers charge 5–8% service fees and renegotiate after inspection. We don't charge a service fee, we don't renegotiate, and we buy homes they won't touch. We're locally owned in Kentucky.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "We Buy Houses Kentucky | Cash Offer in 24 Hours | Honest Offer",
  description:
    "Get a fair cash offer for your Kentucky home in 24 hours. No repairs, no agents, no fees. Serving Lexington, Louisville, Bowling Green and all of Central KY. A+ BBB rated.",
  openGraph: {
    title: "We Buy Houses Kentucky | Cash Offer in 24 Hours | Honest Offer",
    description:
      "Get a fair cash offer for your Kentucky home in 24 hours. No repairs, no agents, no fees. Local buyer, A+ BBB rated.",
    url: "https://kentucky.honestofferhome.com",
    siteName: "Honest Offer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Buy Houses Kentucky | Cash Offer in 24 Hours",
    description:
      "Get a fair cash offer for your Kentucky home in 24 hours. No repairs, no fees.",
  },
  alternates: {
    canonical: "https://kentucky.honestofferhome.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF5EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Google Tag Manager <head> snippet — loads when GTM_ID is set */}
        {GTM_ID && (
          <Script id="gtm-head" strategy="beforeInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body>
        {/* Google Tag Manager <body> noscript fallback */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <div className="grain" aria-hidden="true" />
        {children}

        {/* ── Phone-click conversion tracking — event delegation on all tel: links */}
        <Script id="phone-click-tracking" strategy="afterInteractive">
          {`document.addEventListener('click',function(e){
  var a=e.target.closest('a[href^="tel:"]');
  if(!a||typeof gtag!=='function')return;
  gtag('event','phone_call_click',{event_category:'engagement',event_label:a.getAttribute('href')});${
    GOOGLE_ADS_ID && GADS_CONV_LABEL
      ? `\n  gtag('event','conversion',{send_to:'${GOOGLE_ADS_ID}/${GADS_CONV_LABEL}'});`
      : ""
  }
});`}
        </Script>

        {/* ── GA4 + Google Ads — single gtag.js load, both configured ─── */}
        {(GA4_ID || GOOGLE_ADS_ID) && (
          <>
            <Script
              id="gtag-src"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID ?? GOOGLE_ADS_ID}`}
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${GA4_ID ? `gtag('config','${GA4_ID}');` : ""}${GOOGLE_ADS_ID ? `gtag('config','${GOOGLE_ADS_ID}');` : ""}`}
            </Script>
          </>
        )}

        {/* ── Microsoft Clarity — loads when NEXT_PUBLIC_CLARITY_ID is set */}
        {CLARITY_ID && (
          <Script id="clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
          </Script>
        )}
      </body>
    </html>
  );
}
