import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import CTAModal from "@/components/popup/CTAModal";
import { Poppins } from "next/font/google";
import Script from "next/script";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: {
    default: "Kogents AI",
    template: "%s",
  },
  description:
    "Kogents AI builds intelligent solutions to empower businesses through artificial intelligence.",
  keywords: [
    "Kogents AI",
    "AI Solutions",
    "Business Automation",
    "AI for Business",
  ],
  icons: {
    icon: "/assets/img/favicon.svg",
  },
  openGraph: {
    title: "Kogents AI",
    description:
      "AI solutions to elevate business intelligence and operations.",
    url: "https://www.kogents.ai",
    type: "website",
    siteName: "Kogents AI",
    locale: "en_US",
    images: [
      {
        url: "https://www.kogents.ai/images/default-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kogents AI Logo and branding",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const satoshi = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Satoshi-Variable.ttf",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap", // Critical for performance
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${poppins.variable}`}>
      <head>
        <meta name="robots" content="noindex, nofollow" />

        {/* Preload critical fonts */}
        {/* <link rel="preload" href="/assets/css/bootstrap.css" as="style" /> */}
        <link rel="preload" href="/assets/css/output.css" as="style" />
        <link rel="preload" href="/assets/css/styles.css" as="style" />

        {/* GTM Head Script */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-56TVKCT7');
          `}
        </Script>

        <meta
          name="google-site-verification"
          content="cEYCDr4BxPj1pOLtmiccT6MWc-aKV5U0EdsQuVha7jQ"
        />

        {/* <link rel="stylesheet" href="/assets/css/bootstrap.css" /> */}
        <link rel="stylesheet" href="/assets/css/output.css" />
        {/* <link rel="stylesheet" href="/assets/css/ipad-style.css" /> */}
        <link rel="stylesheet" href="/assets/css/ipadpro-style.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body className="relative overflow-x-hidden font-normal bg-b-900">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-56TVKCT7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <CTAModal />
      </body>
    </html>
  );
}
