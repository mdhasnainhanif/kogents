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
      {/* 1) Preload -> fetch early */}
      <link  as="style" href="/assets/css/bootstrap.css" />

      {/* 2) Blocking apply (keeps layout stable) */}
      <link rel="stylesheet" href="/assets/css/bootstrap.css" as="style"/>

      {/* 3) Your styles */}
      <link rel="stylesheet" href="/assets/css/styles.css" as="style" />
      <link rel="stylesheet" href="/assets/css/output.css" as="style" />
      <link rel="shortcut icon" href="/assets/img/favicon.svg" type="image/x-icon" />
    </head>


      <body className="relative overflow-x-hidden font-normal bg-b-900">
        <GTMNoScript />
        <ResourceErrorHandler />
        {children}
        <CTAModalClient />
        <ResourceLoadingTest />

        {/* GTM (delayed) */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(){function l(){(function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TDRT95RZ');}
            if(document.readyState==='complete'){setTimeout(l,25000);}
            else{window.addEventListener('load',function(){setTimeout(l,25000);});}})();`}
        </Script>
      </body>
    </html>
  );
}
