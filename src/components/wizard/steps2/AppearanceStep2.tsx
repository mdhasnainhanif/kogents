"use client";

import { useState, useEffect, useMemo } from "react";
import { Check } from "lucide-react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate"

interface AppearanceStepProps {
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  footerOptions: FooterOptions;
  onValidationChange?: (isValid: boolean) => void;
  onValidate?: (validateFn: () => boolean) => void;
}

export function AppearanceStep2({
  data,
  onUpdate,
  errors,
  footerOptions,
  onValidationChange,
  onValidate,
}: AppearanceStepProps) {
  // Define types for the component
  type CheckboxOption = string;

  // Define options array first - memoized to prevent recreation on every render
  const options: CheckboxOption[] = useMemo(() => [
    "Handle Customer/IT/HR support tickets",
    // "Improve access to a knowledge base",
    "Help customers track and place orders",
    "Employee onboarding and training",
    "Automate sales inquiries and follow-ups",
    "Improve customer engagement",
    "Other",
  ], []);

  // State to track checked checkboxes (array of indices)
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [validationError, setValidationError] = useState<string>("");
  const [hasAttemptedNext, setHasAttemptedNext] = useState<boolean>(false);

  // Initialize checked items based on existing data
  useEffect(() => {
    if (data.useCases && data.useCases.length > 0) {
      const indices = data.useCases.map(useCase => options.indexOf(useCase)).filter(i => i !== -1);
      setCheckedItems(indices);
    } else if (!data.useCases || data.useCases.length === 0) {
      // Reset checked items if no use cases
      setCheckedItems([]);
    }
  }, [data.useCases]); // Remove options from dependency since it's now memoized

  // Handle checkbox change
  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = checkedItems.includes(index)
      ? checkedItems.filter((item) => item !== index) // Uncheck
      : [...checkedItems, index]; // Check
    
    setCheckedItems(newCheckedItems);
    
    // Clear validation error when user makes a selection (only if they've attempted next before)
    if (newCheckedItems.length > 0 && hasAttemptedNext) {
      setValidationError("");
    }
    
    // Update the wizard data with selected use cases
    const selectedUseCases = newCheckedItems.map(i => options[i]);
    onUpdate({ useCases: selectedUseCases });
  };

  // Validation function - only show error if user has attempted to proceed
  const validateSelection = () => {
    setHasAttemptedNext(true);
    
    if (checkedItems.length === 0) {
      setValidationError("Please select at least one option to continue.");
      return false;
    }
    setValidationError("");
    return true;
  };

  // Notify parent component about validation status (without showing error initially)
  useEffect(() => {
    const isValid = checkedItems.length > 0;
    
    // Only notify parent about validation status, don't show error until user attempts next
    if (onValidationChange) {
      onValidationChange(isValid);
    }
  }, [checkedItems, onValidationChange]);

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
    <div
    //  className="space-y-6"
    >
      <div className="container-fluid">
        <div className="row">
          {/* Left Panel */}
          <div className="col-lg-6 chatbot-left-content-wrapper">
            <InViewAnimate animClass="fade-up-200" className="chatbot-content-wrapper">
                <div className="chatbot-content">
                  <div className="mb-4">
                    <div className="stepText my-2">Step 2 of 5</div>
                    <h2 className="h4 fw-bold">How can Botsonic supercharge your work?</h2>
                    <p className="text-secondary">
                      This will help us drive your success story.
                    </p>
                  </div>

                  <div className="mb-4 bot_options">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => handleCheckboxChange(index)}
                        className={`option_item ${checkedItems.includes(index)
                          ? "selected_item"
                          : "un_selected_item"
                          } `}
                      >
                        <span className="ms-2">
                          {option}
                        </span>

                        <label
                          htmlFor={`option-${index}`}
                          className={`w-6 h-6 rounded-sm position-relative  text-white ml-auto`}
                        >
                          {checkedItems.includes(index) && (
                            <Check
                              size={16}
                              className="position-absolute top-50 start-50 translate-middle"
                            />
                          )}

                          <input
                            id={`option-${index}`}
                            type="checkbox"
                            required
                            hidden
                            checked={checkedItems.includes(index)} // Set checked state
                            onChange={() => handleCheckboxChange(index)} // Update state on change
                          />
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Validation Error Message - only show if user has attempted next */}
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

          {/* Live Preview */}
          <div className="col-lg-6 step2ImgMain d-flex relative align-items-center justify-content-center" style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}>
            <img
              className="img-fluid step2Img"
              src="/assets/img/chat-img-2.svg"
              alt="Preview"
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
