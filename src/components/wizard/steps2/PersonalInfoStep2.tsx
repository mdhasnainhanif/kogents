"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";

interface PersonalInfoStepProps {
  footerOptions: FooterOptions;
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  onValidationChange?: (isValid: boolean) => void;
  onValidate?: (validateFn: () => boolean) => void;
  submitError?: string | null;
  onClearSubmitError?: () => void;
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

export const PersonalInfoStep2 = React.memo<PersonalInfoStepProps>(
  ({ data, onUpdate, errors = [], footerOptions, onValidationChange, onValidate, submitError, onClearSubmitError }) => {
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
    const [isWidgetLoading, setIsWidgetLoading] = useState<boolean>(true);
    
    // ✅ Get workspace _id from localStorage or data for widget script
    const [workspaceId, setWorkspaceId] = useState<string | null>(null);
    
    useEffect(() => {
      // Try to get from localStorage first (most recent)
      if (typeof window !== 'undefined') {
        const storedId = localStorage.getItem('workspace_id');
        if (storedId) {
          setWorkspaceId(storedId);
          console.log('✅ Loaded workspace ID from localStorage:', storedId);
          return; // Exit early if found in localStorage
        }
      }
      // Fallback to data prop
      if ((data as any).workspaceId) {
        setWorkspaceId((data as any).workspaceId);
        console.log('✅ Loaded workspace ID from data:', (data as any).workspaceId);
      }
    }, [data]);

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
        email: data.email || "dummy@example.com",
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

    // Center chat widget after it loads
    useEffect(() => {
      const centerWidget = () => {
        // Try multiple selectors to find the widget
        const selectors = [
          '#kogents-chat-widget',
          '[id*="kogents"]',
          '[class*="kogents"]',
          '[class*="chat-widget"]',
          '[class*="widget"]'
        ];

        for (const selector of selectors) {
          const widget = document.querySelector(selector) as HTMLElement;
          if (widget) {
            widget.style.position = 'relative';
            widget.style.margin = 'auto';
            widget.style.display = 'flex';
            widget.style.alignItems = 'center';
            widget.style.justifyContent = 'center';
            break;
          }
        }
      };

      // Try to center immediately and also after a delay
      const timer1 = setTimeout(centerWidget, 1000);
      const timer2 = setTimeout(centerWidget, 3000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }, []);

    // Validation function - only show error if user has attempted to proceed
    const validateSelection = () => {
      setHasAttemptedNext(true);
      
      const hasName = data.name && data.name.trim().length > 0;
      const hasEmail = data.email && data.email.trim().length > 0;
      
      console.log("Validation check:", { hasName, hasEmail, name: data.name, email: data.email });
      
      if (!hasName && !hasEmail) {
        setValidationError("Please enter your full name and email address to continue.");
        return false;
      } else if (!hasName) {
        setValidationError("Please enter your full name to continue.");
        return false;
      } else if (!hasEmail) {
        setValidationError("Please enter your email address to continue.");
        return false;
      }
      
      setValidationError("");
      return true;
    };

    // Notify parent component about validation status (always allow clicking Next)
    useEffect(() => {
      const hasName = data.name && data.name.trim().length > 0;
      const hasEmail = data.email && data.email.trim().length > 0;
      const isValid = hasName && hasEmail;
      
      // Always allow clicking Next button, validation will be handled in handleNext
      if (onValidationChange) {
        onValidationChange(true); // Always return true to keep Next button enabled
      }
    }, [data.name, data.email, onValidationChange]);

    // Pass validation function to parent component
    useEffect(() => {
      if (onValidate) {
        onValidate(validateSelection);
      }
    }, [onValidate, validateSelection]);

    // Create custom onNext handler that validates before proceeding
    const handleNext = (e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      
      console.log("handleNext called");
      console.log("Current data:", { name: data.name, email: data.email });
      
      // Set attempted next to true
      setHasAttemptedNext(true);
      
      // Check validation directly
      const hasName = data.name && data.name.trim().length > 0;
      const hasEmail = data.email && data.email.trim().length > 0;
      
      console.log("Direct validation check:", { hasName, hasEmail });
      
      if (!hasName && !hasEmail) {
        setValidationError("Please enter your full name and email address to continue.");
        console.log("Validation failed: both fields empty");
        return false;
      } else if (!hasName) {
        setValidationError("Please enter your full name to continue.");
        console.log("Validation failed: name empty");
        return false;
      } else if (!hasEmail) {
        setValidationError("Please enter your email address to continue.");
        console.log("Validation failed: email empty");
        return false;
      }
      
      console.log("Validation passed, proceeding to next step");
      setValidationError("");
      // If validation passes, call the original onNext
      footerOptions.onNext();
      return true;
    };

    // Create modified footer options with our custom onNext handler
    const modifiedFooterOptions = {
      ...footerOptions,
      onNext: handleNext,
    };

    return (
      <div>
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
              <InViewAnimate animClass="fade-up-200" className="chatbot-content-wrapper">
                  <div className="chatbot-content">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="ps-0 pt-0">
                        <div className="stepText my-2">Step 5 of 6</div>
                        <div className="h4 fw-bold">Personal Information</div>
                        <div className="mb-4">
                          Let's get to know you better to personalize your experience.
                        </div>
                      </div>

                    {/* Full Name */}
                    <div className="mb-3">
                      <label htmlFor="bot-name" className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        id="bot-name"
                        type="text"
                        placeholder="e.g., John Doe"
                        value={data.name || ""}
                        autoComplete="off"
                        onChange={(e) => {
                          onUpdate({ name: e.target.value });
                          
                          // Clear validation error when user types (only if they've attempted next before)
                          if (e.target.value.trim().length > 0 && hasAttemptedNext && data.email && data.email.trim().length > 0) {
                            setValidationError("");
                          }
                          
                          // Clear submit error when user types
                          if (e.target.value.trim().length > 0 && onClearSubmitError) {
                            onClearSubmitError();
                          }
                        }}
                        className="w-full form-control" 
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g., john.doe@company.com"
                        value={data.email || ""}
                        autoComplete="off"
                        onChange={(e) => {
                          onUpdate({ email: e.target.value });
                          
                          // Clear validation error when user types (only if they've attempted next before)
                          if (e.target.value.trim().length > 0 && hasAttemptedNext && data.name && data.name.trim().length > 0) {
                            setValidationError("");
                          }
                          
                          // Clear submit error when user types
                          if (e.target.value.trim().length > 0 && onClearSubmitError) {
                            onClearSubmitError();
                          }
                        }}
                        className="w-full form-control" 
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-3">
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g., +1 (555) 123-4567"
                        value={data.phone || ""}
                        autoComplete="off"
                        onChange={(e) => onUpdate({ phone: e.target.value })}
                        className="w-full form-control" 
                      />
                    </div>

                    {/* Validation Error Message - only show if user has attempted next */}
                    {validationError && hasAttemptedNext && (
                      <div>
                        <p className="text-danger">{validationError}</p>
                      </div>
                    )}

                    {/* CRM Submission Error Message */}
                    {submitError && (
                      <div>
                        <p className="text-danger"><strong>Error:</strong> {submitError}</p>
                      </div>
                    )}

                    {/* {errors.length > 0 && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center gap-2 text-red-800 mb-2">
                          <span>⚠️</span>
                          <div className="font-medium">Please fix the following issues:</div>
                        </div>
                        <ul className="text-sm text-red-700 list-disc list-inside space-y-1">
                          {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )} */}
                    </form>
                  </div>
                </InViewAnimate>

              <div className="chatbot-content-wrapper footer">
                <WizardNavigation2 {...modifiedFooterOptions} />
              </div>
            </div>

            {/* Right Panel */}
            <div
              className="col-lg-6 d-flex align-items-center justify-content-center hideOnMobile"
              style={{ 
                backgroundColor: '#02000e', 
                height: 'calc(100vh - 68px)',
                position: 'relative'
              }}
            >
              {/* Container for chat widget */}
              <div
                id="kogents-chat-widget-container"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Loader while script is loading */}
                {isWidgetLoading && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem'
                  }}>
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        border: '4px solid #6b7280',
                        borderTop: '4px solid #a855f7',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                      }}
                    />
                    <style jsx>{`
                      @keyframes spin {
                        0% {
                          transform: rotate(0deg);
                        }
                        100% {
                          transform: rotate(360deg);
                        }
                      }
                    `}</style>
                    <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                      Loading chat widget...
                    </p>
                  </div>
                )}

                {/* Load chat widget script */}
                <Script
                  key={workspaceId || 'default'} // Force reload when workspaceId changes
                  style={{width:400 }}
                  id="kogents-chat-widget"
                  strategy="afterInteractive"
                  src={workspaceId 
                    ? `https://api-staging.kogents.com/widget/embed.js?key=${workspaceId}`
                    : "https://api-staging.kogents.com/widget/embed.js?key=690e30f9e2abcb2b1219c7b4" // Fallback to default
                  }
                  onLoad={() => {
                    setIsWidgetLoading(false);
                    // Center the widget after it loads
                    const widget = document.getElementById('kogents-chat-widget') || 
                                  document.querySelector('[id*="kogents"]') ||
                                  document.querySelector('[class*="kogents"]');
                    if (widget) {
                      const widgetElement = widget as HTMLElement;
                      widgetElement.style.position = 'relative';
                      widgetElement.style.margin = 'auto';
                    }
                  }}
                  onError={() => {
                    setIsWidgetLoading(false);
                    console.error('Failed to load chat widget script');
                  }}
                />
              </div>
              {/* <img
                className="img-fluid"
                src="/assets/img/step4img.svg"
                alt="Step Image"
                width={500}
                height={500}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PersonalInfoStep2.displayName = "PersonalInfoStep2";
