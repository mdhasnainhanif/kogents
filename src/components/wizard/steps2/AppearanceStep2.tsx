"use client";

import { useState, useEffect, useMemo } from "react";
import { Check } from "lucide-react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import { AnimatePresence, motion } from "motion/react"

interface AppearanceStepProps {
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  footerOptions: FooterOptions;
}

export function AppearanceStep2({
  data,
  onUpdate,
  errors,
  footerOptions,
}: AppearanceStepProps) {
  // Define types for the component
  type CheckboxOption = string;

  // Define options array first - memoized to prevent recreation on every render
  const options: CheckboxOption[] = useMemo(() => [
    "Handle Customer/IT/HR support tickets",
    "Improve access to a knowledge base",
    "Help customers track and place orders",
    "Employee onboarding and training",
    "Automate sales inquiries and follow-ups",
    "Improve customer engagement",
    "Other",
  ], []);

  // State to track checked checkboxes (array of indices)
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

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
    
    // Update the wizard data with selected use cases
    const selectedUseCases = newCheckedItems.map(i => options[i]);
    onUpdate({ useCases: selectedUseCases });
  };

  return (
    <div
    //  className="space-y-6"
    >
      <div className="container-fluid">
        <div className="row">
          {/* Left Panel */}
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
                  <div className="mb-4">
                    <div>Step 3 of 4</div>
                    <h2 className="h3 font-weight-bold">How can Botsonic supercharge your work?</h2>
                    <p>
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
                            hidden
                            checked={checkedItems.includes(index)} // Set checked state
                            onChange={() => handleCheckboxChange(index)} // Update state on change
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="chatbot-content-wrapper footer">
              <WizardNavigation2 {...footerOptions} />
            </div>
          </div>

          {/* Live Preview */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}>
            <img
              className="img-fluid"
              style={{ maxWidth: "600px", height: "auto" }}
              src="/assets/img/step3img.svg"
              alt="Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
