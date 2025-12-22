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
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${poppins.variable}`}>
    <head>

      {/* Critical resource hints - fonts first for LCP */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Preload critical CSS early */}
      <link rel="preload" href="/assets/css/bootstrap.css" as="style" />
      <link rel="preload" href="/assets/css/styles.css" as="style" />
      {/* Non-critical third-party domains - dns-prefetch only */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://js.clickrank.ai" />
      <link rel="dns-prefetch" href="https://v2.zopim.com" />
      <link rel="dns-prefetch" href="https://widget.trustpilot.com" />
      <link rel="dns-prefetch" href="https://widget.clutch.co" />
      <link rel="dns-prefetch" href="https://images.provenexpert.com" />
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

      {/* Google Tag Manager - Loads 15 seconds after page load with lazyOnload */}
      <Script id="google-tag-manager" strategy="lazyOnload">
          {`(function(){
            function loadGTM() {
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TDRT95RZ');
            }
            
            if(document.readyState==='complete'){
              setTimeout(loadGTM,15000);
            } else {
              window.addEventListener('load',function(){
                setTimeout(loadGTM,15000);
              });
            }
          })();`}
        </Script>

        {/* ClickRank AI SEO Script - Delayed loading */}
        <Script id="clickrank-ai" strategy="lazyOnload">
          {`
            (function () {
              function loadClickRank() {
                var clickRankAi = document.createElement("script");
                clickRankAi.src = "https://js.clickrank.ai/seo/f2471eb6-5b04-474d-ad2b-47cf003ec8bb/script?" + new Date().getTime();
                clickRankAi.async = true;
                document.head.appendChild(clickRankAi);
              }
              
              if(document.readyState==='complete'){
                setTimeout(loadClickRank,20000);
              } else {
                window.addEventListener('load',function(){
                  setTimeout(loadClickRank,20000);
                });
              }
            })();
          `}
        </Script>

        {/* Zopim Chat Widget - Delayed loading */}
      <Script id="zopim-chat" strategy="lazyOnload">
        {`
          (function() {
            function loadZopim() {
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
            }
            
            if(document.readyState==='complete'){
              setTimeout(loadZopim,25000);
            } else {
              window.addEventListener('load',function(){
                setTimeout(loadZopim,25000);
              });
            }
          })();
        `}
      </Script>

    <meta name="trustpilot-one-time-domain-verification-id" content="637d740f-7815-4043-98c0-db6bc4cfc2a0"/>

    {/* Preload fonts for LCP optimization - CRITICAL for LCP element */}
    <link
      rel="preload"
      href="/assets/fonts/Satoshi-Variable.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      fetchPriority="high"
    />
    {/* Poppins font is handled automatically by next/font/google with preconnect */}
      {/* Preload LCP resources - hero section heading is LCP, not images */}
      {/* Images are below fold, so lower priority */}
      <link rel="preload" href="/assets/img/erp-011.svg" as="image" />
      <link rel="preload" href="/assets/img/back-img.svg" as="image" />
      {/* Inline critical CSS for hero section (LCP element) - ensures immediate render */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Critical: LCP element styles - must render immediately */
          .heroSectionPadding { padding: 100px 0 70px; min-height: 400px; contain: layout style; }
          .headingSize { 
            font-size: 3.33rem; 
            color: #fff; 
            font-weight: 500; 
            line-height: 1.1; 
            margin: 0; 
            font-family: var(--font-poppins), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-display: swap;
          }
          .heroSectionPadding h2.headingSize { 
            font-size: 3.6rem; 
            font-display: swap; 
            min-height: 4.5rem; 
            contain: layout style;
          }
          .heroSection a, .heroSection h1, .heroSection h2, .heroSection p, .heroSection span, .modalBookFree, body, html { 
            font-display: swap; 
          }
          .bookConsultation { 
            color: #fff !important; 
            position: relative; 
            font-weight: 800; 
            font-size: 2rem; 
            margin: 0; 
            font-family: var(--font-poppins), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }
          .heroItems { 
            min-height: 300px; 
            contain: layout style;
          }
          @media (max-width: 768px) {
            .heroSectionPadding { 
              padding: 5.9375rem 0 2.3125rem !important; 
              min-height: 350px; 
            }
            .heroSectionPadding h2.headingSize { 
              font-size: 2.6rem !important; 
              min-height: 3.5rem; 
            }
            .headingSize { 
              font-size: 2.225rem !important; 
            }
            .heroItems { 
              min-height: 250px; 
            }
          }
        `
      }} />
      {/* Load CSS synchronously to prevent FOUC and hydration mismatch */}
      <link rel="stylesheet" href="/assets/css/bootstrap.css" />
      <link rel="stylesheet" href="/assets/css/styles.css" />
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
