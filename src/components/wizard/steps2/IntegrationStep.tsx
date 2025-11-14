"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";
import { ArrowRightIcon2 } from "@/icons";
import CrawlModal from "../CrawlModal";
import { createWorkspaceWithFiles } from "@/api/workspace";
import { io, Socket } from "socket.io-client";

interface IntegrationStepProps {
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  footerOptions: FooterOptions;
  onValidationChange?: (isValid: boolean) => void;
  onValidate?: (validateFn: () => boolean) => void;
}

const INTEGRATION_OPTIONS = [
  {
    id: "self-manage",
    label: "Do you manage your website yourself?",
  },
  {
    id: "technical-person",
    label: "I have a technical person to do this for me",
  },
  {
    id: "engineering-team",
    label: "Would you like our engineering team to do this for you?",
  },
];

export const IntegrationStep = React.memo<IntegrationStepProps>(
  ({ data, onUpdate, errors, footerOptions, onValidationChange, onValidate }) => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [validationError, setValidationError] = useState<string>("");
    const [hasAttemptedNext, setHasAttemptedNext] = useState<boolean>(false);

    // Crawl API states
    const [showCrawlModal, setShowCrawlModal] = useState<boolean>(false);
    const [isCrawling, setIsCrawling] = useState<boolean>(false);
    const [crawlProgress, setCrawlProgress] = useState<number>(0);
    const [crawlError, setCrawlError] = useState<string | null>(null);
    const [crawlComplete, setCrawlComplete] = useState<boolean>(false);
    const [socketInfo, setSocketInfo] = useState<any>(null);
    const socketRef = useRef<Socket | null>(null);

    console.log("data", data);

    // Initialize from data
    useEffect(() => {
      if (data.integration?.type) {
        setSelectedOption(data.integration.type);
      }
    }, []);

    const handleOptionSelect = (optionId: string) => {
      setSelectedOption(optionId);
      onUpdate({
        integration: {
          type: optionId as any,
          settings: {},
        },
      });

      if (hasAttemptedNext) {
        setValidationError("");
      }
    };

    // Validation function
    const validateSelection = () => {
      setHasAttemptedNext(true);

      if (!selectedOption || selectedOption.trim().length === 0) {
        setValidationError("Please select an integration option to continue.");
        return false;
      }

      setValidationError("");
      return true;
    };

    // Notify parent component about validation status
    useEffect(() => {
      const isValid = selectedOption && selectedOption.trim().length > 0;
      if (onValidationChange) {
        onValidationChange(true); // Always allow clicking Next
      }
    }, [selectedOption, onValidationChange]);

    // Pass validation function to parent component
    useEffect(() => {
      if (onValidate) {
        onValidate(validateSelection);
      }
    }, [onValidate, selectedOption]);

    // Submit to user-provided workspace API with WebSocket support (same as GetUserInfo2)
    const crawlWebsite = async (url?: string) => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:7001";
      const apiEndpoint = `${baseUrl}/workspace/kogent-bot`;

      const files = data.knowledgeSources?.files || [];
      const websiteUrl = (url && url.trim()) || data.websiteUrl || data.knowledgeSources?.urls?.[0] || "";

      const companyName = data.companyName || "";
      const industry = data.industry || "";

      if (!websiteUrl && files.length === 0) {
        footerOptions.onComplete?.();
        return;
      }

      setIsCrawling(true);
      setCrawlError(null);
      setCrawlProgress(0);
      setCrawlComplete(false);

      // Show initial message
      setCrawlProgress(5); // Initial progress

      const progressInterval: NodeJS.Timeout | null = null;
      let socket: Socket | null = null;
      let userId: string | null = null;

      try {
        // Build multipart form data with all fields
        const form = new FormData();
        if (websiteUrl) form.append("websiteUrl", websiteUrl);

        // Required fields
        form.append("name", String(companyName || ""));
        const slug = (companyName || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
        form.append("slug", slug || "workspace");
        form.append("vertical", String(industry || ""));

        // New kogent-bot fields
        const d: any = data as any;
        const useCasesList = data.useCases || [];
        let businessValue: string | undefined = undefined;
        if (useCasesList.some((uc: string) => uc.startsWith("customer-support"))) {
          businessValue = "customer-support";
        } else if (useCasesList.some((uc: string) => uc.startsWith("lead-capture"))) {
          businessValue = "lead-capture";
        } else if (useCasesList.some((uc: string) => uc.startsWith("sales"))) {
          businessValue = "sales";
        }

        // Map Step 6 integration type to info field
        const integrationType = data.integration?.type || selectedOption;
        const integrationInfoMap: Record<string, string> = {
          "self-manage": "Do you manage your website yourself?",
          "technical-person": "I have a technical person to do this for me",
          "engineering-team": "Would you like our engineering team to do this for you?",
        };
        const infoValue = integrationType ? (integrationInfoMap[integrationType] || integrationType) : "";

        // Generate random brandId
        const generateBrandId = () => {
          const randomStr = Math.random().toString(36).substring(2, 15);
          const timestamp = Date.now().toString(36);
          return `brand-${randomStr}-${timestamp}`;
        };
        const brandId = generateBrandId();

        if (data.botname) form.append("botName", String(data.botname));
        if (businessValue) form.append("business", String(businessValue));
        if (data.name) form.append("fullName", String(data.name));
        if (data.email) form.append("emailAddress", String(data.email));
        if (data.phone) form.append("phoneNumber", String(data.phone));
        form.append("info", infoValue);
        form.append("brandId", brandId);
        if (d.infoCheckbox !== undefined) form.append("infoCheckbox", String(d.infoCheckbox));

        // Bot appearance fields
        if (data.appearance?.primaryColor) form.append("colors", String(data.appearance.primaryColor));
        if (data.botname) form.append("displayTitle", String(data.botname));
        if (data.appearance?.avatar) {
          const avatarUrl = String(data.appearance.avatar);
          // If it's a base64 data URL or absolute URL, use as-is
          // Otherwise, prepend base URL for relative paths
          if (avatarUrl.startsWith('data:') || avatarUrl.startsWith('http://') || avatarUrl.startsWith('https://')) {
            form.append("imageUrl", avatarUrl);
          } else {
            // Use https://kogents.ai as base URL for relative paths
            form.append("imageUrl", `https://kogents.ai${avatarUrl.startsWith('/') ? avatarUrl : '/' + avatarUrl}`);
          }
        }

        // Append uploaded files - filter to ensure they are File instances
        if (files && files.length > 0) {
          files.forEach((f: File) => {
            if (f instanceof File) {
              form.append("files", f, f.name);
            }
          });
        }

        // ✅ Step 1: Connect to socket IMMEDIATELY (before API call completes)
        const defaultSocketUrl = baseUrl;
        const defaultSocketPort = 3001;

        console.log('🔌 Connecting to socket (before API response)...');

        try {
          socket = io(defaultSocketUrl, {
            transports: ['websocket', 'polling'],
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionAttempts: 5,
            timeout: 20000,
          });

          socketRef.current = socket;

          // ✅ Show socket info immediately in modal
          setSocketInfo({
            connected: false,
            socketUrl: defaultSocketUrl,
            socketPort: defaultSocketPort,
            socketEvent: 'workspace:crawl-progress',
            userId: undefined,
            socketId: undefined,
          });

          socket.on('connect', () => {
            console.log('✅ Socket connected (before API response):', socket?.id);
            setSocketInfo((prev: any) => ({
              ...prev,
              connected: true,
              socketId: socket?.id || undefined,
            }));
            // Update progress to show socket is connected
            setCrawlProgress(20); // Show some progress
          });

          socket.on('connect_error', (error) => {
            console.warn('Socket connection error:', error);
            setSocketInfo((prev: any) => ({
              ...prev,
              connected: false,
            }));
          });

          socket.on('disconnect', () => {
            console.log('❌ Socket disconnected');
            setSocketInfo((prev: any) => ({
              ...prev,
              connected: false,
            }));
          });
        } catch (socketError) {
          console.warn('Socket connection failed:', socketError);
        }

        // ✅ Step 2: Make API call (while socket is connecting)
        const response = await fetch(apiEndpoint, {
          method: "POST",
          body: form,
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok || (result && result.error)) {
          const errorMessage = (result && (result.error || result.message)) || `HTTP error! status: ${response.status}`;
          throw new Error(errorMessage);
        }

        // ✅ Step 3: Update socket info with actual values from API response
        userId = result.userId || result.data?.userId || d.userId || null;
        const socketEvent = result.socketEvent || 'workspace:crawl-progress';
        const socketUrl = result.socketUrl || baseUrl;
        const socketPort = result.socketPort || defaultSocketPort;

        console.log('✅ API Response received:', result);
        console.log('✅ Updating socket info with API response values');

        // Update socket info with actual values
        setSocketInfo((prev: any) => ({
          ...prev,
          socketUrl: socketUrl,
          socketPort: socketPort,
          socketEvent: socketEvent,
          userId: userId || undefined,
        }));

        // ✅ Step 4: API Response aaya - Show success message and close modal
        console.log('✅ API Response received:', result);
        console.log('✅ Workspace created successfully:', result.data?._id);

        // ✅ Store workspace _id for widget script
        const workspaceId = result.data?._id;
        if (workspaceId) {
          // Store in localStorage for widget script
          if (typeof window !== 'undefined') {
            localStorage.setItem('workspace_id', workspaceId);
            console.log('✅ Workspace ID stored:', workspaceId);
          }
          // Also update in wizard data
          onUpdate({
            workspaceId: workspaceId,
          } as any);
        }

        // Clean up any progress intervals
        if (progressInterval) {
          clearInterval(progressInterval);
        }

        // Show success message - keep isLoading true to show the message
        setCrawlProgress(100);
        setCrawlComplete(true);
        // Don't set isLoading to false yet - keep it true to show "Crawling is completed" message

        // ✅ Show "Crawling is completed" message for 2 seconds, then close modal
        setTimeout(() => {
          setIsCrawling(false); // Stop loading spinner
          setShowCrawlModal(false);

          // Disconnect socket
          if (socket) {
            if (userId) {
              socket.emit('crawl-progress', {
                userId: userId,
                action: 'unsubscribe'
              });
            }
            socket.disconnect();
          }
          if (socketRef.current) {
            socketRef.current.disconnect();
            socketRef.current = null;
          }

          // Proceed to complete
          footerOptions.onComplete?.();
        }, 2000); // 2 seconds delay to show success message

        return;

      } catch (error) {
        if (progressInterval) {
          clearInterval(progressInterval);
        }
        if (socket) {
          if (userId) {
            socket.emit('crawl-progress', {
              userId: userId,
              action: 'unsubscribe'
            });
          }
          socket.disconnect();
        }
        setIsCrawling(false);
        setCrawlError(
          error instanceof Error ? error.message : "Failed to submit. Please try again."
        );
      }
    };

    // Handle "Activate Agent Now" button click
    const handleActivateAgent = async () => {
      if (!validateSelection()) {
        return;
      }

      console.log('🔵 Step 6: handleActivateAgent called');

      // Show modal immediately (same as GetUserInfo2)
      setShowCrawlModal(true);

      // Call crawlWebsite (same as GetUserInfo2)
      await crawlWebsite();
    };

    // Cleanup socket on unmount
    useEffect(() => {
      return () => {
        if (socketRef.current) {
          socketRef.current.disconnect();
          socketRef.current = null;
        }
      };
    }, []);

    // Create custom onNext handler
    const handleNext = () => {
      if (!validateSelection()) {
        return;
      }
      footerOptions.onNext();
    };

    const modifiedFooterOptions = {
      ...footerOptions,
      onNext: handleNext,
    };

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* Left Panel */}
            <div className="col-lg-12 chatbot-left-content-wrapper">
              <InViewAnimate animClass="fade-up-200" className="chatbot-content-wrapper">
                <div className="chatbot-content">
                  <div className="mb-4">
                    <div className="stepText my-2">Step 6 of 6</div>
                    <h2 className="h4 fw-bold text-white">
                      How would you like to integrate "{data.botname || "agent name"}" on website?
                    </h2>
                  </div>

                  <div className="mb-4 bot_options">
                    {INTEGRATION_OPTIONS.map((option) => {
                      const isSelected = selectedOption === option.id;
                      return (
                        <div
                          key={option.id}
                          onClick={() => handleOptionSelect(option.id)}
                          className={`option_item ${isSelected ? "selected_item" : "un_selected_item"
                            }`}
                        >
                          <span className="ms-2">{option.label}</span>
                          <label
                            htmlFor={`integration-${option.id}`}
                            className={`w-6 h-6 rounded-sm position-relative text-white ml-auto`}
                          >
                            {isSelected && (
                              <Check
                                size={16}
                                className="position-absolute top-50 start-50 translate-middle"
                              />
                            )}
                            <input
                              id={`integration-${option.id}`}
                              type="radio"
                              name="integration"
                              hidden
                              checked={isSelected}
                              onChange={() => handleOptionSelect(option.id)}
                            />
                          </label>
                        </div>
                      );
                    })}
                  </div>

                  {/* Validation Error Message */}
                  {validationError && hasAttemptedNext && (
                    <div>
                      <p className="text-danger">{validationError}</p>
                    </div>
                  )}

                  {/* Activate Agent Now Button */}
                  {/* <div className="mt-3">
                    <button
                      onClick={handleActivateAgent}
                      disabled={isCrawling || !selectedOption}
                      className="buttonAnimation2 flex justify-center items-center gap-2 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      type="button"
                    >
                      <span>{isCrawling ? "Crawling..." : "Activate Agent Now"}</span>
                      {!isCrawling && <ArrowRightIcon2 style={{ height: "24px" }} />}
                    </button>
                  </div> */}
                </div>
              </InViewAnimate>

              <div className="chatbot-content-wrapper footer flex items-center justify-between gap-3 w-100">
                <WizardNavigation2 {...modifiedFooterOptions} />
              </div>
            </div>

            {/* Right Panel (Preview) */}
            {/* <div className="col-lg-6 d-flex align-items-center justify-content-center hideOnMobile" style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}>
              <img
                className="img-fluid"
                src="/assets/img/chat-img-2.svg"
                alt="Preview"
                width={500}
                height={500}
              />
            </div> */}
          </div>
        </div>

        {/* Crawl Modal */}
        <CrawlModal
          isOpen={showCrawlModal}
          isLoading={isCrawling}
          progress={crawlProgress}
          message={crawlComplete ? "Crawling is completed" : "Website pages is crawling......"}
          error={crawlError}
          socketInfo={socketInfo || undefined}
          onClose={() => {
            if (!isCrawling) {
              setShowCrawlModal(false);
              setCrawlError(null);
              setSocketInfo(null);
            }
          }}
        />
      </div>
    );
  }
);

IntegrationStep.displayName = "IntegrationStep";

