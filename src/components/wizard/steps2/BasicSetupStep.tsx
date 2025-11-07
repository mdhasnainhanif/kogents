"use client";

import React, { useEffect, useState } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";
import SamplePage from "@/app/sample/page";

interface BasicSetupStepProps {
  footerOptions: FooterOptions;
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  onValidationChange?: (isValid: boolean) => void;
  onValidate?: (validateFn: () => boolean) => void;
}

const INDUSTRIES = [
  "Technology",
  "Healthcare",
  "Finance",
  "Retail",
  "Education",
  "Manufacturing",
  "Real Estate",
  "Hospitality",
  "Other"
];

export const BasicSetupStep = React.memo<BasicSetupStepProps>(
  ({ data, onUpdate, errors = [], footerOptions, onValidationChange, onValidate }) => {
    const [validationError, setValidationError] = useState<string>("");
    const [hasAttemptedNext, setHasAttemptedNext] = useState<boolean>(false);

    // Validation function
    const validateSelection = () => {
      setHasAttemptedNext(true);
      
      const hasCompanyName = data.companyName && data.companyName.trim().length > 0;
      const hasIndustry = data.industry && data.industry.trim().length > 0;
      
      if (!hasCompanyName) {
        setValidationError("Please enter your company name to continue.");
        return false;
      }
      
      if (!hasIndustry) {
        setValidationError("Please select your industry to continue.");
        return false;
      }
      
      setValidationError("");
      return true;
    };

    // Notify parent component about validation status
    useEffect(() => {
      const hasCompanyName = data.companyName && data.companyName.trim().length > 0;
      const hasIndustry = data.industry && data.industry.trim().length > 0;
      const isValid = hasCompanyName && hasIndustry;
      
      if (onValidationChange) {
        onValidationChange(true); // Always allow clicking Next
      }
    }, [data.companyName, data.industry, onValidationChange]);

    // Pass validation function to parent component
    useEffect(() => {
      if (onValidate) {
        onValidate(validateSelection);
      }
    }, [onValidate, data.companyName, data.industry]);

    // Create custom onNext handler that validates before proceeding
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
                    <div className="stepText my-2">Step 2 of 6</div>
                    <h2 className="h4 fw-bold text-white">Basic Setup</h2>
                    <p className="text-secondary">
                      Let's start with some basic information about your company.
                    </p>
                  </div>

                  {/* Company Name */}
                  <div className="mb-4">
                    <label htmlFor="companyName" className="form-label">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      value={data.companyName || ""}
                      autoComplete="off"
                      onChange={(e) => {
                        onUpdate({ companyName: e.target.value });
                        if (e.target.value.trim().length > 0 && hasAttemptedNext) {
                          setValidationError("");
                        }
                      }}
                      placeholder="Enter Your Company Name.."
                      className="form-control mt-2"
                    />
                  </div>

                  {/* Industry */}
                  <div className="mb-4">
                    <label htmlFor="industry" className="form-label">
                      Industry *
                    </label>
                    <div className="custom_select">
                      <select
                        id="industry"
                        value={data.industry || ""}
                        onChange={(e) => {
                          onUpdate({ industry: e.target.value });
                          if (e.target.value.trim().length > 0 && hasAttemptedNext) {
                            setValidationError("");
                          }
                        }}
                        className="form-control mt-2"
                      >
                        <option value="">Select Your Industry..</option>
                        {INDUSTRIES.map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                    </div>
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
              <SamplePage 
                botName={data.botname || 'Sarah'}
                avatar={data.appearance?.avatar || undefined}
                primaryColor={data.appearance?.primaryColor || '#4a90e2'}
                companyName={data.companyName}
                step={2}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

BasicSetupStep.displayName = "BasicSetupStep";

