"use client";

import React, { ActionDispatch, Dispatch, useState } from "react";
import { useOptimizedWizard } from "@/hooks/useOptimizedWizard3";
import {
  OptimizedBasicInfoStep,
  OptimizedKnowledgeSourcesStep,
  OptimizedAppearanceStep,
  OptimizedWelcomeSetupStep,
} from "./optimized3/LazyWizardSteps";
import { useRouter } from "next/navigation";
import { WizardProgress3 } from "./WizardProgress3";

// Memoized step renderer to prevent unnecessary re-renders

interface FooterOptions {
  currentStep: number;
  totalSteps: number;
  canGoNext: boolean;
  canGoPrev: boolean;
  isLastStep: boolean;
  isDraft: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSaveDraft: () => void;
  onComplete: () => void;
}

const StepRenderer = React.memo<{
  currentStep: number;
  data: any;
  onUpdate: any;
  currentStepErrors: string[];
  footerOptions: FooterOptions;
}>(({ currentStep, data, onUpdate, currentStepErrors, footerOptions }) => {
  switch (currentStep) {
    case 0:
      return (
        <OptimizedBasicInfoStep
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
        />
      );
    case 1:
      return (
        <OptimizedKnowledgeSourcesStep
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
        />
      );
    case 2:
      return (
        <OptimizedAppearanceStep
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
        />
      );
    case 3:
      return (
        <OptimizedWelcomeSetupStep
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
        />
      );
    default:
      return null;
  }
});

StepRenderer.displayName = "StepRenderer";

type GetStartedProps = {
  set: React.Dispatch<React.SetStateAction<boolean>>;
};
const GetStartedComponent: React.FC<GetStartedProps> = ({ set }) => {
  return (
    <div className="welcome_screen">
      <div className="text-center">
        <img
          src="/assets/img/Botsonic.png"
          className="mx-auto rounded-circle"
          alt="Botsonic"
          style={{ maxWidth: '350px', height: 'auto' }}
        />
        <div className="mt-4">
          <h1 className="h2 mb-0 fw-semibold">Welcome to Kogents!</h1>
          <p className="small">
            Let's set up your AI chatbot in just a few minutes.
          </p>
        </div>
        <button
          onClick={() => set((prev) => !prev)}
          className="buttonAnimation2 ms-auto inline-flex gap-2 align-items-center px-5 py-2 mt-3"
        >
          Get started
        </button>
      </div>
    </div>
  );
};

const GetStarted = React.memo(GetStartedComponent);

// Main ChatbotWizard component
function ChatbotWizard3() {
  const router = useRouter();
  const {
    currentStep,
    data,
    steps,
    canGoNext,
    canGoPrev,
    isLastStep,
    isDraft,
    currentStepErrors,
    updateData,
    goToStep,
    nextStep,
    prevStep,
    saveDraft,
    clearDraft,
  } = useOptimizedWizard();

  const [isGetStarted, setIsGetStarted] = useState(false);
  const handleComplete = React.useCallback(async () => {
    try {
      // Here you would typically send the data to your API
      console.log("Creating chatbot with data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear draft and redirect
      setIsGetStarted(true);
    } catch (error) {
      console.error("Failed to create chatbot:", error);
    }
  }, [data, clearDraft, router]);

  return (
    <div className="text-white">
      <WizardProgress3
        steps={steps}
        currentStep={currentStep}
        onStepClick={goToStep}
        hideProgress={isGetStarted}
      />

      <div className="overflow-hidden">
        {isGetStarted ? (
          <GetStarted
            set={() => {
              clearDraft();
              router.push("/chatbot/bot");
            }}
          />
        ) : (
          <StepRenderer
            currentStep={currentStep}
            footerOptions={{
              currentStep: currentStep,
              totalSteps: steps.length,
              canGoNext: canGoNext,
              canGoPrev: canGoPrev,
              isLastStep: isLastStep,
              isDraft: isDraft,
              onPrevious: prevStep,
              onNext: nextStep,
              onSaveDraft: saveDraft,
              onComplete: handleComplete,
            }}
            data={data}
            onUpdate={updateData}
            currentStepErrors={currentStepErrors}
          />
        )}
        {/* 
    <SuccessState
      isVisible={isLastStep && canGoNext}
      botName={data.name || "Untitled Bot"}
    /> 
    */}
      </div>
    </div>

  );
}

// Memoize the main component
const MemoizedChatbotWizard3 = React.memo(ChatbotWizard3);
MemoizedChatbotWizard3.displayName = "ChatbotWizard3";

// Export both named and default exports for compatibility
export { MemoizedChatbotWizard3 as ChatbotWizard3 };
export default MemoizedChatbotWizard3;
