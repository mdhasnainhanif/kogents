"use client";

import React, { useEffect, useState } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";
import zopimEvents from "@/utils/zopim-events";

// Declare $zopim as a global variable
declare var $zopim: any;

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
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
    const [hasAttemptedNext, setHasAttemptedNext] = useState<boolean>(false);
    const [isWidgetLoading, setIsWidgetLoading] = useState<boolean>(true);
    
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

                // console.log("Visitor ID:", visitorId);
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

    // Load Kogents Chat Widget script with dynamic key
    useEffect(() => {
      if (typeof window === 'undefined') return;

      // Get dynamic key from localStorage (stored after API response) or use default
      const getWidgetKey = (): string => {
        // Try localStorage first (most recent workspace_id)
        if (typeof window !== 'undefined') {
          const storedId = localStorage.getItem('workspace_id');
          if (storedId) {
            console.log('✅ Using workspace ID from localStorage:', storedId);
            return storedId;
          }
        }
        // Fallback to data prop
        if ((data as any).workspaceId) {
          console.log('✅ Using workspace ID from data:', (data as any).workspaceId);
          return (data as any).workspaceId;
        }
        // Default fallback
        return "690356bd59e93d9080d14de0";
      };

      const dynamicKey = getWidgetKey();
      const w = window as any;
      const CURRENT_KEY_STORAGE = '__kogents_current_key__';

      // Load widget function
      const loadWidget = (key: string) => {
        console.log('🔵 Loading widget with key:', key);

        // Clean up previous instance if key changed
        const previousKey = w[CURRENT_KEY_STORAGE];
        if (previousKey && previousKey !== key) {
          console.log('🔄 Key changed, cleaning up previous widget');
          
          // Remove old script
          const existingScript = document.getElementById('kogents-chat-widget');
          if (existingScript) {
            existingScript.remove();
          }

          // Reset global object
          if (w.KogentsChat) {
            delete w.KogentsChat;
          }

          // Remove old widget elements
          const oldWidgets = document.querySelectorAll('[class*="kogents"], [id*="kogents-widget"], iframe[src*="kogents"]');
          oldWidgets.forEach((widget) => {
            if (widget.id !== 'kogents-chat-widget-container') {
              widget.remove();
            }
          });
        }

        // Check if already loaded with same key
        if (w[CURRENT_KEY_STORAGE] === key && w.KogentsChat) {
          console.log('ℹ️ Widget already loaded with same key');
          setIsWidgetLoading(false);
          return;
        }

        // Check if script already exists
        const existingScript = document.getElementById('kogents-chat-widget');
        if (existingScript && w[CURRENT_KEY_STORAGE] === key) {
          console.log('ℹ️ Script already exists with same key');
          setIsWidgetLoading(false);
          return;
        }

        // Store current key
        w[CURRENT_KEY_STORAGE] = key;

        // Load new widget
        (function (d: Document, s: string, id: string, widgetKey: string) {
          const kogentsChat = ((window as any).KogentsChat = function (c: any) {
            (kogentsChat as any)._ = (kogentsChat as any)._ || [];
            (kogentsChat as any)._!.push(c);
          }) as any;
          (kogentsChat as any)._ = [];

          const e = d.createElement(s);
          if (e instanceof HTMLScriptElement) {
            e.async = true;
            e.id = id;
            e.src = `https://api-staging.kogents.com/widget/embed.js?key=${widgetKey}&mode=testing`;
          }
          
          e.onload = () => {
            console.log('✅ Widget loaded successfully with key:', widgetKey);
            setIsWidgetLoading(false);
            
            // Configure widget with bot name immediately after load
            const botName = data.botname || '';
            if (botName && w.KogentsChat) {
              try {
                w.KogentsChat({
                  config: {
                    displayTitle: botName,
                  }
                });
                console.log('✅ Widget configured with bot name:', botName);
              } catch (error) {
                console.warn('⚠️ KogentsChat config failed:', error);
              }
            }
            
            // Cleanup duplicates after load
            setTimeout(() => {
              const widgets = document.querySelectorAll('[class*="kogents"], iframe[src*="kogents"]');
              const container = document.getElementById('kogents-chat-widget-container');
              
              if (widgets.length > 1 && container) {
                console.log('🧹 Cleaning up duplicate widgets');
                let foundFirst = false;
                widgets.forEach((widget) => {
                  if (container.contains(widget)) {
                    if (!foundFirst) {
                      foundFirst = true;
                    } else {
                      widget.remove();
                    }
                  } else if (!foundFirst) {
                    container.appendChild(widget as Node);
                    foundFirst = true;
                  } else {
                    widget.remove();
                  }
                });
              }
            }, 2000);
          };
          
          e.onerror = () => {
            console.error('❌ Failed to load widget with key:', widgetKey);
            (window as any)[CURRENT_KEY_STORAGE] = null; // Allow retry
            setIsWidgetLoading(false);
          };

          const t = d.getElementsByTagName(s)[0];
          if (t && t.parentNode) {
            t.parentNode.insertBefore(e, t);
          }
        })(document, "script", "kogents-chat-widget", key);
      };

      loadWidget(dynamicKey);
    }, [(data as any).workspaceId]); // Only re-run when workspaceId changes, not all data changes

    // Continuous monitoring to keep bot name updated (even after AI replies)
    useEffect(() => {
      const botName = data.botname || '';
      if (!botName) return;

      // Function to update bot name in widget
      const updateBotName = () => {
        // Method 1: Try KogentsChat config API
        const w = window as any;
        if (w.KogentsChat) {
          try {
            w.KogentsChat({
              config: {
                displayTitle: botName,
              }
            });
          } catch (error) {
            // Silent fail
          }
        }

        // Method 2: DOM manipulation - find and replace "Sarah" with botName
        const widgetSelectors = [
          '[class*="kogents"]',
          '[id*="kogents"]',
          'iframe[src*="kogents"]',
        ];

        widgetSelectors.forEach((selector) => {
          const widgets = document.querySelectorAll(selector);
          widgets.forEach((widget) => {
            // Search in all text nodes and elements
            const walker = document.createTreeWalker(
              widget,
              NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
              null
            );

            let node;
            while ((node = walker.nextNode())) {
              if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent || '';
                if (text.includes('Sarah') && text.trim() !== botName) {
                  node.textContent = text.replace(/Sarah/g, botName);
                }
              } else if (node.nodeType === Node.ELEMENT_NODE) {
                const el = node as HTMLElement;
                // Check text content
                if (el.textContent && el.textContent.includes('Sarah') && el.textContent.trim() !== botName) {
                  el.textContent = el.textContent.replace(/Sarah/g, botName);
                }
                // Check title attribute
                if (el.title && el.title.includes('Sarah')) {
                  el.title = el.title.replace(/Sarah/g, botName);
                }
                // Check aria-label
                const ariaLabel = el.getAttribute('aria-label');
                if (ariaLabel && ariaLabel.includes('Sarah')) {
                  el.setAttribute('aria-label', ariaLabel.replace(/Sarah/g, botName));
                }
              }
            }
          });
        });
      };

      // Initial update
      updateBotName();

      // Set up MutationObserver to watch for DOM changes (when AI replies)
      const observer = new MutationObserver((mutations) => {
        let shouldUpdate = false;
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' || mutation.type === 'characterData') {
            // Check if new nodes contain "Sarah"
            if (mutation.addedNodes.length > 0) {
              mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                  if ((node.textContent || '').includes('Sarah')) {
                    shouldUpdate = true;
                  }
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                  const el = node as HTMLElement;
                  if (el.textContent && el.textContent.includes('Sarah')) {
                    shouldUpdate = true;
                  }
                }
              });
            }
            // Check if text content changed
            if (mutation.type === 'characterData' && mutation.target.textContent?.includes('Sarah')) {
              shouldUpdate = true;
            }
          }
        });
        if (shouldUpdate) {
          // Debounce updates
          setTimeout(updateBotName, 100);
        }
      });

      // Observe widget containers
      const widgetContainers = document.querySelectorAll('[class*="kogents"], [id*="kogents"]');
      widgetContainers.forEach((container) => {
        observer.observe(container, {
          childList: true,
          subtree: true,
          characterData: true,
        });
      });

      // Also set up interval as backup (every 2 seconds)
      const intervalId = setInterval(updateBotName, 2000);

      // Cleanup
      return () => {
        observer.disconnect();
        clearInterval(intervalId);
      };
    }, [data.botname]); // Only depend on botname, not all data

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

    // Email validation helper function
    const validateEmailFormat = (email: string): boolean => {
      if (!email || email.trim().length === 0) return false;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.trim());
    };

    // Validation function - only show error if user has attempted to proceed
    const validateSelection = () => {
      setHasAttemptedNext(true);
      const errors: { [key: string]: string } = {};
      
      const hasName = data.name && data.name.trim().length > 0;
      const hasEmail = data.email && data.email.trim().length > 0;
      
      console.log("Validation check:", { hasName, hasEmail, name: data.name, email: data.email });
      
      // Validate name
      if (!hasName) {
        errors.name = "Please enter your full name to continue.";
      }
      
      // Validate email
      if (!hasEmail) {
        errors.email = "Please enter your email address to continue.";
      } else if (!validateEmailFormat(data.email)) {
        errors.email = "Please enter a valid email address (e.g., john.doe@company.com).";
      }
      
      setFieldErrors(errors);
      return Object.keys(errors).length === 0;
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
    }, [onValidate, data.name, data.email]);

    // Create custom onNext handler that validates before proceeding
    const handleNext = (e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      
      console.log("handleNext called");
      console.log("Current data:", { name: data.name, email: data.email });
      
      // Validate using the validation function
      if (!validateSelection()) {
        console.log("Validation failed");
        return false;
      }
      
      console.log("Validation passed, proceeding to next step");
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
                          
                          // Clear validation error when user types
                          if (e.target.value.trim().length > 0 && hasAttemptedNext) {
                            setFieldErrors((prev) => {
                              const newErrors = { ...prev };
                              delete newErrors.name;
                              return newErrors;
                            });
                          }
                          
                          // Clear submit error when user types
                          if (e.target.value.trim().length > 0 && onClearSubmitError) {
                            onClearSubmitError();
                          }
                        }}
                        onBlur={(e) => {
                          // Set name in Zopim on blur
                          const name = e.target.value.trim();
                          if (name && typeof window !== "undefined" && $zopim) {
                            zopimEvents.setName(name);
                          }
                        }}
                        className={`w-full form-control ${
                          fieldErrors.name && hasAttemptedNext ? "is-invalid" : ""
                        }`}
                      />
                      {fieldErrors.name && hasAttemptedNext && (
                        <div className="text-danger mt-1 small">
                          {fieldErrors.name}
                        </div>
                      )}
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
                          
                          // Clear validation error when user types (if email format is valid)
                          if (e.target.value.trim().length > 0 && hasAttemptedNext) {
                            if (validateEmailFormat(e.target.value)) {
                              setFieldErrors((prev) => {
                                const newErrors = { ...prev };
                                delete newErrors.email;
                                return newErrors;
                              });
                            }
                          }
                          
                          // Clear submit error when user types
                          if (e.target.value.trim().length > 0 && onClearSubmitError) {
                            onClearSubmitError();
                          }
                        }}
                        onBlur={(e) => {
                          const email = e.target.value.trim();
                          
                          // Validate email format on blur if user has attempted next
                          if (hasAttemptedNext && email.length > 0) {
                            if (!validateEmailFormat(email)) {
                              setFieldErrors((prev) => ({
                                ...prev,
                                email: "Please enter a valid email address (e.g., john.doe@company.com).",
                              }));
                            }
                          }
                          
                          // Set email in Zopim on blur (only if valid format)
                          if (email && validateEmailFormat(email) && typeof window !== "undefined" && $zopim) {
                            zopimEvents.setEmail(email);
                          }
                        }}
                        className={`w-full form-control ${
                          fieldErrors.email && hasAttemptedNext ? "is-invalid" : ""
                        }`}
                      />
                      {fieldErrors.email && hasAttemptedNext && (
                        <div className="text-danger mt-1 small">
                          {fieldErrors.email}
                        </div>
                      )}
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
                        onBlur={(e) => {
                          // Set phone in Zopim on blur
                          const phone = e.target.value.trim();
                          if (phone && typeof window !== "undefined" && $zopim) {
                            zopimEvents.setPhone(phone);
                          }
                        }}
                        className="w-full form-control" 
                      />
                    </div>


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

                {/* Widget script loaded by useEffect above */}
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
