// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

import GTMNoScript from "@/components/GTMNoScript";
import CTAModalClient from "@/components/CTAModalClient";
import ResourceErrorHandler from "@/components/ResourceErrorHandler";
import ResourceLoadingTest from "@/components/ResourceLoadingTest";

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

  // Robots
  robots: {
    index: true,
    follow: true,
  },

  // Favicon
  icons: {
    icon: "/assets/img/favicon.svg",
  },

  // Open Graph (ordered like your ✅ example)
  openGraph: {
    title: "Kogents AI",
    description:
      "AI solutions to elevate business intelligence and operations.",
    type: "website",
    url: "https://kogents.ai",
    images: [
      {
        url: "https://www.kogents.ai/images/default-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kogents AI Logo and branding",
      },
    ],
    siteName: "Kogents AI",
    locale: "en_US",
  },

  // Google Verification
  verification: {
    google: "Wn-Z_n5hlzgH--GwnqNaY1i6ShsJnJjli1r34QM2zLw",
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const satoshi = localFont({
  src: [{ path: "../../public/assets/fonts/Satoshi-Variable.ttf", style: "normal" }],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${poppins.variable}`}>
    <head>

      {/* Google Tag Manager - Loads 10 seconds after page load */}
      <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(){
            function loadGTM() {
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TDRT95RZ');
            }
            
            if(document.readyState==='complete'){
              setTimeout(loadGTM,10000);
            } else {
              window.addEventListener('load',function(){
                setTimeout(loadGTM,10000);
              });
            }
          })();`}
        </Script>

        {/* ClickRank AI SEO Script */}
        <Script id="clickrank-ai" strategy="afterInteractive">
          {`
            (function () {
              var clickRankAi = document.createElement("script");
              clickRankAi.src = "https://js.clickrank.ai/seo/f2471eb6-5b04-474d-ad2b-47cf003ec8bb/script?" + new Date().getTime();
              clickRankAi.async = true;
              document.head.appendChild(clickRankAi);
            })();
          `}
        </Script>

        {/* Zopim Chat Widget */}
      <Script id="zopim-chat" strategy="afterInteractive">
        {`
          window.$zopim || (function (d, s) {
            var z = (window.$zopim = function (c) {
              z._.push(c);
            });
            var $ = (z.s = d.createElement(s));
            var e = d.getElementsByTagName(s)[0];

            z.set = function (o) {
              z.set._.push(o);
            };
            z._ = [];
            z.set._ = [];

            $.async = true;
            $.setAttribute("charset", "utf-8");
            $.src = "https://v2.zopim.com/?57jax3RnqduL2zjEGsBWVsnalYJVkElA";
            $.type = "text/javascript";
            z.t = +new Date();

            e.parentNode.insertBefore($, e);
          })(document, "script");
            // === Your extra code added here ===
            window.addEventListener("load", () => {
              const waitForZopim = setInterval(() => {
                if (window.$zopim) {
                  clearInterval(waitForZopim);

                  $zopim(() => {
                    $zopim.livechat.setOnUnreadMsgs((count) => {
                      if (count >= 1) {
                        $zopim.livechat.window.show();
                      }
                    });
                  });
                }
              }, 100);
            });
        `}
      </Script>

    <meta name="trustpilot-one-time-domain-verification-id" content="637d740f-7815-4043-98c0-db6bc4cfc2a0"/>

    <link
      rel="preload"
      href="/assets/fonts/Satoshi-Variable.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />
      {/* 1) Preload -> fetch early */}
      {/* <link rel="preload" as="style" href="/assets/css/bootstrap.css" /> */}

      {/* 2) Blocking apply (keeps layout stable) */}
      <link rel="preload" href="/assets/css/bootstrap.css" as="style" />      
      <link rel="stylesheet" href="/assets/css/bootstrap.css" />

      {/* 3) Your styles */}
      <link rel="stylesheet" href={`/assets/css/styles.css?v=${Date.now()}`} />
      {/* <link rel="stylesheet" href="/assets/css/styles.css" /> */}
      {/* <link rel="stylesheet" href="/assets/css/output.css" as="style" />          
      <link rel="preload" href="/assets/css/output.css" as="style" />           */}
      <link rel="shortcut icon" href="/assets/img/favicon.svg" type="image/x-icon" />
    </head>


      <body className="relative overflow-x-hidden font-normal bg-b-900">
        <GTMNoScript />
        <ResourceErrorHandler />
        {children}
        <CTAModalClient />
        <ResourceLoadingTest />

  
        

      </body>
    </html>
  );
}
