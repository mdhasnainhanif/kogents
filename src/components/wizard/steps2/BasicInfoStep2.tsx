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
  onValidationChange?: (isValid: boolean) => void;
  onValidate?: (validateFn: () => boolean) => void;
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

export const BasicInfoStep2 = React.memo<BasicInfoStepProps>(
  ({ data, onUpdate, errors = [], footerOptions, onValidationChange, onValidate }) => {
    // console.log("BasicInfoStep2 data.role:", data.role);
    const [trackingData, setTrackingData] = useState({
      gclid: '',
      fbclid: '',
      igclid: '',
      ttclid: '',
      fingerprint: '',
      stableSessionId: '',
      fingerprintData: null as string | null
    });
    const [validationError, setValidationError] = useState<string>("");
    const [hasAttemptedNext, setHasAttemptedNext] = useState<boolean>(false);

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
          script.src = "/assets/js/fp.min.js";
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

    // Validation function - only show error if user has attempted to proceed
    const validateSelection = () => {
      setHasAttemptedNext(true);
      
      const hasBotName = data.botname && data.botname.trim().length > 0;
      if (!hasBotName) {
        setValidationError("Please enter a bot name to continue.");
        return false;
      }
      setValidationError("");
      return true;
    };

    // Notify parent component about validation status (always allow clicking Next)
    useEffect(() => {
      const hasBotName = data.botname && data.botname.trim().length > 0;
      const isValid = !!hasBotName;
      
      // Always allow clicking Next button, validation will be handled in handleNext
      if (onValidationChange) {
        onValidationChange(true); // Always return true to keep Next button enabled
      }
    }, [data.botname, onValidationChange]);

    // Pass validation function to parent component
    useEffect(() => {
      if (onValidate) {
        onValidate(validateSelection);
      }
    }, [onValidate, validateSelection]);

    // Create custom onNext handler that validates before proceeding
    const handleNext = () => {
      if (!validateSelection()) {
        return; // Don't proceed if validation fails
      }
      // If validation passes, call the original onNext
      footerOptions.onNext();
    };

    // Create modified footer options with our custom onNext handler
    const modifiedFooterOptions = {
      ...footerOptions,
      onNext: handleNext,
    };

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
            {/* Left Panel */}
            <div className="col-lg-6 chatbot-left-content-wrapper">
              <AnimatePresence>
                <motion.div
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -200, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="chatbot-content-wrapper"
                >
                  <div className="chatbot-content">
                    <div className="mb-4">
                      <div className="stepText">Step 1 of 5</div>
                      <h3 className="text-white h3 my-2">What would you like to name your bot? *</h3>
                      <p className="text-white-50">
                        You can always change this later.
                      </p>
                    </div>

                    {/* Bot Name */}
                    <div className="mb-3">
                      <label htmlFor="botname">Bot Name *</label>
                      <input
                        type="text"
                        id="botname"
                        value={data.botname || ""}
                        onChange={(e) => {
                          console.log("Bot name changed to:", e.target.value);
                          onUpdate({ botname: e.target.value });
                          
                          // Clear validation error when user types (only if they've attempted next before)
                          if (e.target.value.trim().length > 0 && hasAttemptedNext) {
                            setValidationError("");
                          }
                        }}
                        placeholder="Enter Your Bot Name"
                        className="form-control mt-2"
                      /> 
                    </div>

                    {/* Validation Error Message - only show if user has attempted next */}
                    {validationError && hasAttemptedNext && (
                      <div>
                        <p className="text-danger">{validationError}</p>
                      </div>
                    )}

                    {/* Heard about us */}
                    {/* <div className="mb-3">
                      <label htmlFor="heardAboutUs">How did you hear about us?</label>
                      <div className="custom_select">
                        <select
                          id="heardAboutUs"
                          value={data.heardAboutUs || ""}
                          onChange={(e) =>
                            onUpdate({ heardAboutUs: e.target.value as ChatbotWizardData['heardAboutUs'] })
                          }
                        >
                          <option value="">Select one</option>
                          <option value="search-engine">Search Engine</option>
                          <option value="social-media">Social Media</option>
                          <option value="youtube">YouTube</option>
                          <option value="blogs-articles">Blogs & Articles</option>
                          <option value="email-newsletter">Email Newsletter</option>
                          <option value="review-comparison-site">Review/Comparison Site</option>
                          <option value="referred-by-colleague">Referred by Colleague</option>
                          <option value="redirected-from-chatsonic">Redirected from Chatsonic</option>
                          <option value="online-ads">Online Ads</option>
                          <option value="conference-event">Conference/Event</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div> */}

                    {/* Deployment Timeline */}
                    {/* <div className="mb-3">
                      <label htmlFor="deploymentTimeline">
                        How soon do you plan to deploy your Bot?
                      </label>
                      <div className="custom_select">
                        <select
                          id="deploymentTimeline"
                          value={data.deploymentTimeline || ""}
                          onChange={(e) =>
                            onUpdate({ deploymentTimeline: e.target.value as ChatbotWizardData['deploymentTimeline'] })
                          }
                        >
                          <option value="">Select one</option>
                          <option value="immediately">Immediately</option>
                          <option value="within-1-month">Within 1 month</option>
                          <option value="within-3-months">Within 3 months</option>
                          <option value="within-6-months">Within 6 months</option>
                          <option value="not-sure">Not sure</option>
                        </select>
                      </div>
                    </div> */}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="chatbot-content-wrapper footer">
                <WizardNavigation2 {...modifiedFooterOptions} />
              </div>
            </div>

            {/* Right Panel (Image) */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center hideOnMobile" style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}>
              <img
                className="img-fluid"
                src="/assets/img/step4img.svg"
                alt="Preview"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

      </div >
    );
  }
);

BasicInfoStep2.displayName = "BasicInfoStep2";
