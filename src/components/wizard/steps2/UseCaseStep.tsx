"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Check } from "lucide-react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";

interface UseCaseStepProps {
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  footerOptions: FooterOptions;
  onValidationChange?: (isValid: boolean) => void;
  onValidate?: (validateFn: () => boolean) => void;
}

interface UseCaseOption {
  id: string;
  title: string;
  goal: string;
  benefits: {
    id: string;
    title: string;
    description: string;
  }[];
}

const USE_CASE_OPTIONS: UseCaseOption[] = [
  {
    id: "customer-support",
    title: "Customer Support AI Agent",
    goal: "Goal: Highlight efficiency, cost savings, and service quality improvements.",
    benefits: [
      { 
        id: "a", 
        title: "Reduce support costs by up to 35%",
        description: "AI agents handle routine inquiries instantly, cutting ticket volume and operational costs."
      },
      { 
        id: "b", 
        title: "Resolve issues 60% faster",
        description: "Smart automation slashes response times while boosting first-contact resolution."
      },
      { 
        id: "c", 
        title: "Maintain or raise CSAT by +10 points",
        description: "Customers get 24/7 support without queue times — satisfaction goes up, not down."
      },
    ],
  },
  {
    id: "lead-capture",
    title: "Lead Capture AI Agent",
    goal: "Goal: Emphasize conversion, qualification speed, and lead pipeline growth.",
    benefits: [
      { 
        id: "a", 
        title: "Increase lead conversion by up to 52%",
        description: "Conversational AI engages visitors in real time, capturing intent before they bounce."
      },
      { 
        id: "b", 
        title: "Qualify leads 3x faster",
        description: "Automated pre-screening routes high-intent leads directly to your CRM or sales team."
      },
      { 
        id: "c", 
        title: "Boost engagement rates by 40%+",
        description: "Personalized AI conversations keep visitors talking longer — and converting more often."
      },
    ],
  },
  {
    id: "sales",
    title: "Sales AI Agent",
    goal: "Goal: Focus on revenue acceleration, efficiency, and buyer experience.",
    benefits: [
      { 
        id: "a", 
        title: "Increase sales productivity by 40–50%",
        description: "AI handles prospecting, follow-ups, and scheduling — reps focus only on closing."
      },
      { 
        id: "b", 
        title: "Deliver 3.5× ROI within the first year",
        description: "Each $1 spent on AI-assisted sales returns over $3.5 in new revenue opportunities."
      },
      { 
        id: "c", 
        title: "Cut response-to-lead time from hours to seconds",
        description: "Engage prospects instantly when they're most interested — before competitors do."
      },
    ],
  },
];

export const UseCaseStep = React.memo<UseCaseStepProps>(
  ({ data, onUpdate, errors, footerOptions, onValidationChange, onValidate }) => {
    const [selectedUseCase, setSelectedUseCase] = useState<string>("");
    const [validationError, setValidationError] = useState<string>("");
    const [hasAttemptedNext, setHasAttemptedNext] = useState<boolean>(false);

    // Initialize selected use case from data
    useEffect(() => {
      if (data.useCases && data.useCases.length > 0) {
        // Check if any use case is selected
        const useCaseId = data.useCases[0]?.split(":")[0] || "";
        if (useCaseId && (useCaseId === "customer-support" || useCaseId === "lead-capture" || useCaseId === "sales")) {
          setSelectedUseCase(useCaseId);
        }
      }
    }, []);

    const handleUseCaseSelect = (useCaseId: string) => {
      setSelectedUseCase(useCaseId);
      
      // Update wizard data with all benefits of selected use case
      const selectedOption = USE_CASE_OPTIONS.find(opt => opt.id === useCaseId);
      if (selectedOption) {
        const useCases = selectedOption.benefits.map(benefit => `${useCaseId}:${benefit.id}`);
        onUpdate({ useCases });
      }

      // Clear validation error when user makes a selection
      if (hasAttemptedNext) {
        setValidationError("");
      }
    };

    // Validation function
    const validateSelection = () => {
      setHasAttemptedNext(true);
      
      if (!selectedUseCase || selectedUseCase.trim().length === 0) {
        setValidationError("Please select a use case to continue.");
        return false;
      }
      
      setValidationError("");
      return true;
    };

    // Notify parent component about validation status
    useEffect(() => {
      const isValid = selectedUseCase && selectedUseCase.trim().length > 0;
      if (onValidationChange) {
        onValidationChange(true); // Always allow clicking Next
      }
    }, [selectedUseCase, onValidationChange]);

    // Pass validation function to parent component
    useEffect(() => {
      if (onValidate) {
        onValidate(validateSelection);
      }
    }, [onValidate, selectedUseCase]);

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
            <div className="col-lg-6 chatbot-left-content-wrapper">
              <InViewAnimate animClass="fade-up-200" className="chatbot-content-wrapper pt-5" style={{ paddingBottom: '6rem' }}>
                <div className="chatbot-content">
                  <div className="mb-4">
                    <div className="stepText my-2">Step 3 of 6</div>
                    <h2 className="h4 fw-bold text-white">
                      How should your "{data.botname || "AI Agent"}" supercharge your business?
                    </h2>
                  </div>

                  <div className="mb-4">
                    {USE_CASE_OPTIONS.map((useCase, index) => {
                      const isSelected = selectedUseCase === useCase.id;
                      return (
                        <div 
                          key={useCase.id} 
                          className={`mb-3 pt-3 pb-2 px-3 rounded-4 border-2 ${
                            isSelected ? "border-purple-500 bg-purple-900" : "border-gray-700 bg-gray-900/30"
                          }`}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleUseCaseSelect(useCase.id)}
                        >
                          <div className="d-flex align-items-center mb-3">
                            <div className="me-3 mt-1">
                              <div
                                className={`rounded-circle d-flex align-items-center justify-content-center ${
                                  isSelected ? "bg-purple-500 border-2" : "border border-gray-600"
                                }`}
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  minWidth: "24px",
                                }}
                              >
                                {isSelected && (
                                  <Check
                                    size={16}
                                    className="text-white"
                                  />
                                )}
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h3 className="h5 fw-semibold text-white mb-2">
                                {index + 1}. {useCase.title}
                              </h3>
                              <p className="mb-2 greenNeon">{useCase.goal}</p>
                              
                              <div>
                                {useCase.benefits.map((benefit) => (
                                  <div key={benefit.id} className="mb-2">
                                    <div className="fw-semibold mb-1 text_primary">
                                      {benefit.id.toUpperCase()}. {benefit.title}
                                    </div>
                                    <div className="text-white small">
                                      {benefit.description}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
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
                </div>
              </InViewAnimate>

              <div className="chatbot-content-wrapper footer">
                <WizardNavigation2 {...modifiedFooterOptions} />
              </div>
            </div>

            {/* Right Panel (Preview) */}
            <div className="col-lg-6 step2ImgMain d-flex relative align-items-center justify-content-center" style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}>
              <img
                className="img-fluid"
                src="/assets/img/brief/brief-v2-3.webp"
                style={{ maxWidth: "25rem" }}
                alt="Preview"
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

UseCaseStep.displayName = "UseCaseStep";

