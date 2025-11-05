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

export const metadata: Metadata = { /* ...your same metadata... */ };
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

        {/* Google Tag Manager - Loads 10 seconds after page load */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(){
            function loadGTM() {
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TVPKTNBM');
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

      </body>
    </html>
  );
}
