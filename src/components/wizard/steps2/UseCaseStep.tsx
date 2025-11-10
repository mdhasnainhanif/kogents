"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { Check } from "lucide-react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";
import Image from "next/image";

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

// Map use cases to images (3 images per use case based on main radio button selection)
// Replace these paths with your actual image paths for each use case
const getImagesForUseCase = (useCaseId: string): string[] => {
  const imageMap: Record<string, string[]> = {
    // Customer Support AI Agent (3 images)
    'customer-support': [
      '/assets/img/CustomerSupport/1.jpg',
      '/assets/img/CustomerSupport/2.jpg',
      '/assets/img/CustomerSupport/3.jpg',
      '/assets/img/CustomerSupport/4.jpg',
      '/assets/img/CustomerSupport/5.jpg',
    ],
    // Lead Capture AI Agent (3 images)
    'lead-capture': [
      '/assets/img/LeadCapture/1.jpg',
      '/assets/img/LeadCapture/2.jpg',
      '/assets/img/LeadCapture/3.jpg',
      '/assets/img/LeadCapture/4.jpg',
      '/assets/img/LeadCapture/5.jpg',
    ],
    // Sales AI Agent (3 images)
    'sales': [
      '/assets/img/Sales/1.jpg',
      '/assets/img/Sales/2.jpg',
      '/assets/img/Sales/3.jpg',
      '/assets/img/Sales/4.jpg',
      '/assets/img/Sales/5.jpg',
    ],
  };

  return imageMap[useCaseId] || ['/assets/img/brief/brief-v2-3.webp'];
};

// Image Slider Component
const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Reset to first image when images change
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  // Start/stop slider based on hover state
  useEffect(() => {
    if (images.length <= 1) return;

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Only start auto-slide if not hovered
    if (!isHovered) {
      // Auto-slide every 3 seconds
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [images, isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Reset the interval when manually changing slides (only if not hovered)
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Clear interval on hover
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Resume interval when mouse leaves
    if (images.length > 1 && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
  };

  if (images.length === 0) {
    return (
      <img
        className="img-fluid"
        src="/assets/img/brief/brief-v2-3.webp"
        style={{ maxWidth: "25rem" }}
        alt="Preview"
        width={500}
      />
    );
  }

  return (
    <div 
      style={{ position: 'relative', width: '100%', maxWidth: '25rem', margin: '0 auto' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'hidden', 
        borderRadius: '8px',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          opacity: 1,
          transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width={500}
            height={600}
            className="img-fluid"
            style={{ 
              width: '100%', 
              height: 'auto',
              display: 'block',
              maxWidth: '25rem'
            }}
          />
        </div>
      </div>
      {/* Dots indicator */}
      {images.length > 1 && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '8px', 
          marginTop: '16px' 
        }}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: currentIndex === index ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: currentIndex === index ? '#a855f7' : '#6b7280',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: 0,
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};


export const UseCaseStep = React.memo<UseCaseStepProps>(
  ({ data, onUpdate, errors, footerOptions, onValidationChange, onValidate }) => {
    const [selectedUseCase, setSelectedUseCase] = useState<string>("");
    const [validationError, setValidationError] = useState<string>("");
    const [hasAttemptedNext, setHasAttemptedNext] = useState<boolean>(false);

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
                      const hasSelection = selectedUseCase !== "";
                      const shouldShowFull = !hasSelection || isSelected;
                      return (
                        <div 
                          key={useCase.id} 
                          className={`mb-3 rounded-4 border-2 ${
                            isSelected 
                              ? "border-purple-500 bg-purple-900 pt-3 pb-2 px-3" 
                              : shouldShowFull 
                                ? "border-gray-700 bg-gray-900/30 pt-3 pb-2 px-3" 
                                : "border-gray-700 bg-gray-900/30 py-2 px-3"
                          }`}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleUseCaseSelect(useCase.id)}
                        >
                          <div className={`d-flex align-items-center ${shouldShowFull ? "mb-3" : "mb-0"}`}>
                            <div className="me-3" style={{ marginTop: shouldShowFull ? "4px" : "0" }}>
                              <div
                                className={`rounded-circle d-flex align-items-center justify-content-center ${
                                  isSelected ? "bg-purple-500 border-2 border-purple-500" : "border border-gray-600"
                                }`}
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  minWidth: "24px",
                                  flexShrink: 0,
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
                              <h3 className={`h5 fw-semibold text-white ${shouldShowFull ? "mb-2" : "mb-0"}`}>
                                {index + 1}. {useCase.title}
                              </h3>
                              {shouldShowFull && (
                                <>
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
                                </>
                              )}
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
              {selectedUseCase ? (
                <ImageSlider images={getImagesForUseCase(selectedUseCase)} />
              ) : (
                <img
                  className="img-fluid"
                  src="/assets/img/brief/brief-v2-3.webp"
                  style={{ maxWidth: "25rem" }}
                  alt="Preview"
                  width={500}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

UseCaseStep.displayName = "UseCaseStep";

