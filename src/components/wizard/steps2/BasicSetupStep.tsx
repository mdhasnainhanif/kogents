"use client";

import React, { useEffect, useState } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";
import { ChatWidget } from "../ChatWidget";

interface BasicSetupStepProps {
  footerOptions: FooterOptions;
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  onValidationChange?: (isValid: boolean) => void;
  onValidate?: (validateFn: () => boolean) => void;
}

interface Vertical {
  name: string;
  full_name: string;
  initial_greeting: string;
  reminders_enabled: boolean;
  supports_reminders: boolean;
  attorney_yaml_path: string | null;
  created_at: string;
  is_public: boolean;
}

interface VerticalsResponse {
  tableName: string;
  exists: boolean;
  sampleData: Vertical[];
  columnCount: number;
}

export const BasicSetupStep = React.memo<BasicSetupStepProps>(
  ({
    data,
    onUpdate,
    errors = [],
    footerOptions,
    onValidationChange,
    onValidate,
  }) => {
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>(
      {}
    );
    const [hasAttemptedNext, setHasAttemptedNext] = useState<boolean>(false);
    const [verticals, setVerticals] = useState<Vertical[]>([]);
    const [isLoadingVerticals, setIsLoadingVerticals] = useState<boolean>(true);

    // Fetch verticals from API
    useEffect(() => {
      const fetchVerticals = async () => {
        try {
          setIsLoadingVerticals(true);

          const baseUrl =
            process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:7001";
          const response = await fetch(
            `${baseUrl}/debug/supabase/table-info/verticals`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch verticals");
          }
          const data: VerticalsResponse = await response.json();
          // Filter to only show public verticals
          const publicVerticals = data.sampleData.filter(
            (vertical) => vertical.is_public
          );
          setVerticals(publicVerticals);
        } catch (error) {
          console.error("Error fetching verticals:", error);
          // Fallback to empty array on error
          setVerticals([]);
        } finally {
          setIsLoadingVerticals(false);
        }
      };

      fetchVerticals();
    }, []);

    // Validation function
    const validateSelection = () => {
      setHasAttemptedNext(true);
      const errors: { [key: string]: string } = {};

      // Validate company name
      const hasCompanyName =
        data.companyName && data.companyName.trim().length > 0;
      if (!hasCompanyName) {
        errors.companyName = "Please enter your company name to continue.";
      }

      // Validate industry
      const hasIndustry = data.industry && data.industry.trim().length > 0;
      if (!hasIndustry) {
        errors.industry = "Please select your industry to continue.";
      }

      setFieldErrors(errors);
      return Object.keys(errors).length === 0;
    };

    // Notify parent component about validation status
    useEffect(() => {
      const hasCompanyName =
        data.companyName && data.companyName.trim().length > 0;
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
              <InViewAnimate
                animClass="fade-up-200"
                className="chatbot-content-wrapper"
              >
                <div className="chatbot-content">
                  <div className="mb-4">
                    <div className="stepText my-2">Step 2 of 6</div>
                    <h2 className="h4 fw-bold text-white">Basic Setup</h2>
                    <p className="text-secondary">
                      Let's start with some basic information about your
                      company.
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
                        if (
                          e.target.value.trim().length > 0 &&
                          hasAttemptedNext
                        ) {
                          setFieldErrors((prev) => {
                            const newErrors = { ...prev };
                            delete newErrors.companyName;
                            return newErrors;
                          });
                        }
                      }}
                      placeholder="Enter Your Company Name.."
                      className={`form-control mt-2 ${
                        fieldErrors.companyName && hasAttemptedNext
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    {fieldErrors.companyName && hasAttemptedNext && (
                      <div className="text-danger mt-1 small">
                        {fieldErrors.companyName}
                      </div>
                    )}
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
                        style={{
                          background: "#050315",
                        }}
                        onChange={(e) => {
                          onUpdate({ industry: e.target.value });
                          if (
                            e.target.value.trim().length > 0 &&
                            hasAttemptedNext
                          ) {
                            setFieldErrors((prev) => {
                              const newErrors = { ...prev };
                              delete newErrors.industry;
                              return newErrors;
                            });
                          }
                        }}
                        className={`form-control mt-2 ${
                          fieldErrors.industry && hasAttemptedNext
                            ? "is-invalid"
                            : ""
                        }`}
                        disabled={isLoadingVerticals}
                      >
                        <option value="" disabled selected>
                          Select Your Industry Verticals
                        </option>
                        {verticals.map((vertical) => (
                          <option key={vertical.name} value={vertical.name}>
                            {vertical.full_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {fieldErrors.industry && hasAttemptedNext && (
                      <div className="text-danger mt-1 small">
                        {fieldErrors.industry}
                      </div>
                    )}
                  </div>
                </div>
              </InViewAnimate>

              <div className="chatbot-content-wrapper footer">
                <WizardNavigation2 {...modifiedFooterOptions} />
              </div>
            </div>

            {/* Right Panel (Preview) */}
            <div
              className="col-lg-6 d-flex align-items-center justify-content-center hideOnMobile"
              style={{
                backgroundColor: "#02000e",
                height: "calc(100vh - 68px)",
              }}
            >
              <ChatWidget
                botName={data.botname || "Sarah"}
                avatar={data.appearance?.avatar || undefined}
                primaryColor={data.appearance?.primaryColor || "#4a90e2"}
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
