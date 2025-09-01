"use client";

import React, { useEffect, useState } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import { AnimatePresence, motion } from "motion/react";

interface BasicInfoStepProps {
  footerOptions: FooterOptions;
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
}

// Session storage utility functions
const setSessionStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(key, value);
  }
};

const getSessionStorage = (key: string): string | null => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
};

const removeSessionStorage = (keys: string[]) => {
  if (typeof window !== 'undefined') {
    keys.forEach(key => sessionStorage.removeItem(key));
  }
};

// Generate stable session ID
const generateStableSessionId = (): string => {
  if (typeof window !== 'undefined') {
    let stableSessionId = localStorage.getItem('stable_session_id');
    if (!stableSessionId) {
      stableSessionId = 'sid_' + Math.random().toString(36).substr(2, 9) + Date.now();
      localStorage.setItem('stable_session_id', stableSessionId);
    }
    return stableSessionId;
  }
  return '';
};

export const GetUserInfo2 = React.memo<BasicInfoStepProps>(
  ({ data, onUpdate, errors = [], footerOptions }) => {
    const [trackingData, setTrackingData] = useState({
      gclid: '',
      fbclid: '',
      igclid: '',
      ttclid: '',
      fingerprint: '',
      stableSessionId: '',
      fingerprintData: null as string | null
    });

    // console.log(onUpdate);

    // Initialize tracking parameters
    useEffect(() => {
      const initializeTracking = () => {
        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const gclid = urlParams.get('gclid') || '';
        const fbclid = urlParams.get('fbclid') || '';
        const igclid = urlParams.get('igclid') || '';
        const ttclid = urlParams.get('ttclid') || '';
        const fingerprint = urlParams.get('fingerprint') || '';

        // Handle GCLID
        if (gclid !== "") {
          setSessionStorage('gclid', gclid);
          console.log('GCLID stored:', getSessionStorage('gclid'));
          removeSessionStorage(['fbclid', 'igclid', 'ttclid']);
        }

        // Handle FBCLID
        if (fbclid !== "") {
          setSessionStorage('fbclid', fbclid);
          console.log('FBCLID stored:', getSessionStorage('fbclid'));
          removeSessionStorage(['gclid', 'igclid', 'ttclid']);
        }

        // Handle IGCLID
        if (igclid !== "") {
          setSessionStorage('igclid', igclid);
          console.log('IGCLID stored:', getSessionStorage('igclid'));
          removeSessionStorage(['gclid', 'fbclid', 'ttclid']);
        }

        // Handle TTCLID
        if (ttclid !== "") {
          setSessionStorage('ttclid', ttclid);
          console.log('TTCLID stored:', getSessionStorage('ttclid'));
          removeSessionStorage(['gclid', 'fbclid', 'igclid']);
        }

        // Set values from session storage
        const sessionGclid = getSessionStorage('gclid') || '';
        const sessionFbclid = getSessionStorage('fbclid') || '';
        const sessionIgclid = getSessionStorage('igclid') || '';
        const sessionTtclid = getSessionStorage('ttclid') || '';
        const stableSessionId = generateStableSessionId();

        setTrackingData({
          gclid: sessionGclid,
          fbclid: sessionFbclid,
          igclid: sessionIgclid,
          ttclid: sessionTtclid,
          fingerprint: fingerprint,
          stableSessionId: stableSessionId,
          fingerprintData: null
        });
      };

      initializeTracking();
    }, []);

    // Initialize FingerprintJS
    useEffect(() => {
      const initializeFingerprint = async () => {
        try {
          // Load FingerprintJS script
          const script = document.createElement("script");
          script.src = "https://www.tailoredlogo.com/assets/js/fp.min.js";
          script.async = true;

          script.onload = async function () {
            // console.log("FingerprintJS script loaded successfully");

            if ((window as any).FingerprintJS) {
              console.log("FingerprintJS is available");

              try {
                // Initialize FingerprintJS
                const fpPromise = (window as any).FingerprintJS.load();
                console.log("FingerprintJS instance loading...");

                const fp = await fpPromise;
                const result = await fp.get();
                const visitorId = result.visitorId;

                const components = result.components || {};

                const fingerprintData = {
                  fingerprint: visitorId,
                  device: components.platform?.value || "Unknown",
                  timezone: components.timezone?.value || "Unknown",
                };

                const fingerprintJson = JSON.stringify(fingerprintData);

                setTrackingData(prev => ({
                  ...prev,
                  fingerprint: visitorId,
                  fingerprintData: fingerprintJson
                }));

                (window as any).fingerprint = visitorId;

                console.log("Visitor ID:", visitorId);
              } catch (error) {
                console.error("Error generating fingerprint:", error);
              }
            } else {
              console.error("FingerprintJS is still not available.");
            }
          };

          script.onerror = function () {
            console.error("Error loading FingerprintJS script");
          };

          document.head.appendChild(script);
        } catch (error) {
          console.error("Error initializing fingerprint:", error);
        }
      };

      initializeFingerprint();
    }, []);



    // Function to capture and console log form data
    const captureFormData = () => {
      const formData = {
        name: data.name || "",
        email: data.email || "dummy@example.com", // Use dummy email if not provided
        description: data.description || "",
        phone: data.phone || "",
        role: data.role || "",
        heardAboutUs: data.heardAboutUs || "",
        deploymentTimeline: data.deploymentTimeline || ""
      };

      console.log("Form Data Captured:", formData);
      return formData;
    };

    // Update wizard data with tracking information
    useEffect(() => {
      onUpdate({
        gclid: trackingData.gclid,
        fbclid: trackingData.fbclid,
        igclid: trackingData.igclid,
        ttclid: trackingData.ttclid,
        fingerprint: trackingData.fingerprint,
        stableSessionId: trackingData.stableSessionId,
        fingerprintData: trackingData.fingerprintData || ""
      });
    }, [trackingData, onUpdate]);

    // Console log data whenever form fields change
    useEffect(() => {
      if (data.name || data.email || data.description || data.phone) {
        captureFormData();
      }
    }, [data.name, data.email, data.description, data.phone]);

    return (
      <div // Adjusts the duration of the animation
      // className="space-y-6"
      >
        {/* Hidden tracking fields */}
        <input name="gclid" id="gclid" type="hidden" value={trackingData.gclid} readOnly />
        <input name="fbclid" id="fbclid" type="hidden" value={trackingData.fbclid} readOnly />
        <input name="igclid" id="igclid" type="hidden" value={trackingData.igclid} readOnly />
        <input name="ttclid" id="ttclid" type="hidden" value={trackingData.ttclid} readOnly />
        <input name="fingerprint" id="fingerprint" type="hidden" value={trackingData.fingerprint} readOnly />
        <input name="chat" id="chat" type="hidden" value="" readOnly />
        <input name="stable_session_id" type="hidden" value={trackingData.stableSessionId} readOnly />
        {trackingData.fingerprintData && (
          <input name="fingerprintdata" type="hidden" value={trackingData.fingerprintData} readOnly />
        )}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 chatbot-left-content-wrapper">
              <AnimatePresence>
                <motion.div
                  initial={{ y: 200, opacity: 0 }} // Start from -y (up from the viewport)
                  animate={{ y: 0, opacity: 1 }} // Animate to the normal position (y = 0)
                  exit={{ y: -200, opacity: 0 }} // Exit to +y (down out of the viewport)
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut", // Smooth easing effect
                  }}
                  className="chatbot-content-wrapper"
                >
                  <div className="chatbot-content">
                    <div className="ps-0 pt-0">
                      <div>Step 1 of 4</div>
                      <div className="h4">Personal Information</div>
                      <div>Let's get to know you better to personalize your experience.</div>
                    </div>

                    {/* Full Name */}
                    <div className="mb-3">
                      <label htmlFor="bot-name">Full Name *</label>
                      <input
                        id="bot-name"
                        placeholder="e.g., John Doe"
                        value={data.name || ""}
                        onChange={(e) => onUpdate({ name: e.target.value })}
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g., john.doe@company.com"
                        value={data.email || ""}
                        onChange={(e) => onUpdate({ email: e.target.value })}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-3">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g., +1 (555) 123-4567"
                        value={data.phone || ""}
                        onChange={(e) => onUpdate({ phone: e.target.value })}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>


              <div className="chatbot-content-wrapper footer">
                <WizardNavigation2 {...footerOptions} />
              </div>
            </div>

            {/* Live Preview */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}>              <img
              className="img-fluid"
              style={{ maxWidth: "500px", height: "auto" }}
              src="/assets/img/step4img.svg"
              alt="Preview"
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

GetUserInfo2.displayName = "GetUserInfo2";
