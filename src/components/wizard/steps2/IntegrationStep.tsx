"use client";

import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";

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
                          className={`option_item ${
                            isSelected ? "selected_item" : "un_selected_item"
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
                </div>
              </InViewAnimate>

              <div className="chatbot-content-wrapper footer">
                <WizardNavigation2 {...modifiedFooterOptions} />
              </div>
            </div>

            {/* Right Panel (Preview) */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center hideOnMobile" style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}>
              <img
                className="img-fluid"
                src="/assets/img/chat-img-2.svg"
                alt="Preview"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

IntegrationStep.displayName = "IntegrationStep";

