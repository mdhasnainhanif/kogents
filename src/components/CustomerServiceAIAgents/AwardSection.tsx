"use client";

import React, { useEffect, useState, useRef } from "react";

const AwardSection = ({ className }: { className?: string }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isTrustpilotLoaded, setIsTrustpilotLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // --- Deferred widget loading with intersection observer ---
  useEffect(() => {
    if (!sectionRef.current) return;

    const loadWidgets = () => {
      // Delay widget loading until after page load + additional delay
      const loadAfterPageLoad = () => {
        if (document.readyState === 'complete') {
          setTimeout(loadWidgetsImmediately, 3000);
        } else {
          window.addEventListener('load', () => {
            setTimeout(loadWidgetsImmediately, 3000);
          }, { once: true });
        }
      };

      const loadWidgetsImmediately = () => {
        // --- Clutch script load ---
        const existingScript = document.querySelector<HTMLScriptElement>(
          'script[data-clutch-script="true"]'
        );

        if (!existingScript) {
          const script = document.createElement("script");
          script.src = "https://widget.clutch.co/static/js/widget.js";
          script.async = true;
          script.type = "text/javascript";
          script.setAttribute("data-clutch-script", "true");

          script.onload = () => {
            setIsScriptLoaded(true);
          };

          document.body.appendChild(script);
        } else {
          setIsScriptLoaded(true);
        }

        // --- Trustpilot script load ---
        const existingTP = document.querySelector<HTMLScriptElement>(
          'script[data-tp-script="true"]'
        );

        if (!existingTP) {
          const tp = document.createElement("script");
          tp.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
          tp.async = true;
          tp.type = "text/javascript";
          tp.setAttribute("data-tp-script", "true");

          tp.onload = () => setIsTrustpilotLoaded(true);
          document.body.appendChild(tp);
        } else {
          setIsTrustpilotLoaded(true);
        }
      };

      // Use Intersection Observer to load when section is near viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadAfterPageLoad();
              observer.disconnect();
            }
          });
        },
        { rootMargin: '200px' } // Start loading 200px before section enters viewport
      );

      observer.observe(sectionRef.current!);

      // Fallback: load after 5 seconds if section never becomes visible
      const fallbackTimer = setTimeout(() => {
        loadAfterPageLoad();
        observer.disconnect();
      }, 5000);

      return () => {
        observer.disconnect();
        clearTimeout(fallbackTimer);
      };
    };

    loadWidgets();
  }, []);

  // --- Init clutch after script load ---
  useEffect(() => {
    if (!isScriptLoaded) return;

    const anyWindow = window as any;
    if (anyWindow.CLUTCHCO && typeof anyWindow.CLUTCHCO.Init === "function") {
      anyWindow.CLUTCHCO.Init();

      // safety: re-init thoda delay se bhi (mobile/layout shift cases)
      setTimeout(() => {
        try {
          anyWindow.CLUTCHCO.Init();
        } catch (e) {}
      }, 1000);
    }
  }, [isScriptLoaded]);

  return (
    <div ref={sectionRef} className={`sectionPadding pt-0 ${className}`}>
      <div className="text-center mb-0">
        <span className="buttonAnimation yellow inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo mb-6">
          Listings
        </span>
      </div>

      <div className="container">
        <div className="row">
          {className === "awardSectionFooter" ? (
            <>
              <div className="col-md-6 flexMobile">

                <div className="clutch-widget-wrapper">
                  <div
                    className="clutch-widget"
                    data-url="https://widget.clutch.co"
                    data-widget-type="1"
                    data-height="40"
                    data-nofollow="false"
                    data-expandifr="true"
                    data-scale="100"
                    data-clutchcompany-id="2569263" style={{ marginTop: "12px", marginBottom: "12px" }}></div>
                </div>

                <img
                  width={140}
                  height={24}
                  src="/assets/img/brand/brand3.svg"
                  alt="brand logo"
                />
              </div>

              <div className="col-md-6 flexMobile">
                <a
                  href="https://www.provenexpert.com/kogents/?utm_source=Widget&amp;utm_medium=Widget&amp;utm_campaign=Widget"
                  title="Customer reviews &amp; experiences for Kogents. Show more information."
                  target="_blank"
                  style={{ textDecoration: "none", transition: "none" }}
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://images.provenexpert.com/35/c7/1d56888440d22f32877ef2908b11/widget_portrait_170_us_1.png"
                    alt="Ratings &amp; reviews for Kogents"
                    width="170"
                    height="204"
                    style={{ border: "0" }}
                  />
                </a>
                 {/* ---- TRUSTPILOT BADGE (Immediately After Clutch) ---- */}
                 <div
                  className="trustpilot-widget"
                  data-locale="en-US"
                  data-template-id="56278e9abfbbba0bdcd568bc"
                  data-businessunit-id="69316dafffffdcbe6fca3b90"
                  data-style-height="52px"
                  data-style-width="100%"
                  data-token="410e4fc3-41bb-4000-8583-55fb7f7613d2"
                  style={{ marginTop: "15px" }}
                >
                  <a
                    href="https://www.trustpilot.com/review/kogents.ai"
                    target="_blank"
                    rel="noopener"
                  >
                    Trustpilot
                  </a>
                </div>


                {/* <img
                  width={140}
                  height={24}
                  src="/assets/img/trustpilot11.png"
                  alt="brand logo"
                /> */}

              </div>
            </>
          ) : (
            <div className="col-lg-12 d-flex gap-12 flex-wrap justify-content-center align-items-center">
              <img
                width={140}
                height={24}
                src="/assets/img/brand/brand1.svg"
                alt="brand logo"
              />
              <img
                width={140}
                height={24}
                src="/assets/img/brand/brand2.svg"
                alt="brand logo"
              />
              <img
                width={140}
                height={24}
                src="/assets/img/brand/brand3.svg"
                alt="brand logo"
              />
              <img
                width={140}
                height={24}
                src="/assets/img/brand/brand4.svg"
                alt="brand logo"
              />
              <img
                width={140}
                height={24}
                src="/assets/img/brand/brand5.svg"
                alt="brand logo"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AwardSection;
