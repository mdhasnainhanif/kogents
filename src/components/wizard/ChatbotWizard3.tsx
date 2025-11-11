"use client";

import React, { useState } from "react";
import { useOptimizedWizard3 } from "@/hooks/useOptimizedWizard3";
import { createWorkspaceWithFiles } from "@/api/workspace";
import {
  BasicSetupStep,
  UseCaseStep,
  CustomizationStep,
} from "./steps2";
import { GetUserInfo2 } from "./steps2/GetUserInfo2";
import { PersonalInfoStep2 } from "./steps2/PersonalInfoStep2";
import { IntegrationStep } from "./steps2/IntegrationStep";
import { useRouter } from "next/navigation";
import { WizardProgress2 } from "./WizardProgress2";

interface FooterOptions {
  currentStep: number;
  totalSteps: number;
  canGoNext: boolean;
  canGoPrev: boolean;
  isLastStep: boolean;
  isDraft: boolean;
  isLoading?: boolean;
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
  submitError?: string | null;
  onClearSubmitError?: () => void;
}>(({ currentStep, data, onUpdate, currentStepErrors, footerOptions, submitError, onClearSubmitError }) => {
  switch (currentStep) {
    case 0:
      return (
        <CustomizationStep
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
        />
      );
    case 1:
      return (
        <BasicSetupStep
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
        />
      );
    case 2:
      return (
        <UseCaseStep
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
        />
      );
    case 3:
      return (
        <GetUserInfo2
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
        />
      );
    case 4:
      return (
        <PersonalInfoStep2
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
          submitError={submitError}
          onClearSubmitError={onClearSubmitError}
        />
      );
    case 5:
      return (
        <IntegrationStep
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
    resetWizard,
  } = useOptimizedWizard3();

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Clear localStorage on mount if form was submitted
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const wasSubmitted = sessionStorage.getItem('wizard_form_submitted');
      if (wasSubmitted === 'true') {
        try {
          localStorage.removeItem('chatbot-wizard-draft-v3-briefv2');
          localStorage.removeItem('chatbot-wizard-draft');
          localStorage.removeItem('chatbot-wizard-draft-v2');
          sessionStorage.removeItem('wizard_form_submitted');
        } catch (error) {
          console.error('Failed to clear localStorage on mount:', error);
        }
      }
    }
  }, []);

  const handleComplete = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Derive fields for appearance and training data
      const avatar = data.appearance?.avatar || "";
      const avatarIsBase64 = typeof avatar === "string" && avatar.startsWith("data:");
      const avatarName = data.appearance?.avatarName || (avatar ? (avatar.split('/').pop() || "").split('?')[0] : "");

      const defaultAccent = "#3b82f6";
      const primaryColor = data.appearance?.primaryColor;
      const isDefaultAccent = !primaryColor || primaryColor === defaultAccent;
      const accentColorValue = isDefaultAccent ? "" : (primaryColor || "");

      const files = data.knowledgeSources?.files || [];
      const rawUrl = (data.websiteUrl || "").trim();
      const firstUrl = rawUrl ? (/^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`) : "";
      const trainingMethod = firstUrl
        ? "Website URL"
        : files.length > 0
          ? "File Upload"
          : "None";

      // Process use cases
      const useCasesList = data.useCases || [];
      const formattedUseCases = useCasesList.join(", ");

      // ================= Workspace API submission (skip Step 1 and Step 3) =================
      try {
        const wsFiles: File[] = (data.knowledgeSources?.files || []) as File[];
        const d: any = data as any;

        // Build a strict allowlist payload. Do NOT include any fields from
        // step 1 (BasicSetupStep) or step 3 (GetUserInfo2 / personal info).
        // Only include website and company-facing fields and explicitly selected files.
        const workspacePayload = {
          userId: String(d.userId || ""),
          companyName: String(d.companyName || ""),
          industry: String(d.industry || ""),
          companySize: String(d.companySize || ""),
          country: String(d.country || ""),
          // NOTE: intentionally omitted email / personal info to avoid sending step 3 data
          description: String(d.description || ""),
          websiteUrl: firstUrl, // normalized URL only
          // slug removed - backend no longer expects slug from client
          files: wsFiles,
        };

        await createWorkspaceWithFiles(workspacePayload);
        console.log("✅ Workspace created with files");

        // On success, clear drafts and redirect
        if (typeof window !== 'undefined') {
          try {
            localStorage.removeItem('chatbot-wizard-draft-v3-briefv2');
            localStorage.removeItem('chatbot-wizard-draft');
            localStorage.removeItem('chatbot-wizard-draft-v2');
            sessionStorage.setItem('wizard_form_submitted', 'true');
          } catch (error) {
            console.error('Failed to clear localStorage:', error);
          }
        }
        router.push("/thank-you");
        return;
      } catch (wsErr) {
        console.error("❌ Workspace API failed:", wsErr);
        setSubmitError(wsErr instanceof Error ? wsErr.message : "Workspace submission failed");
        setIsSubmitting(false);
        return;
      }

    } catch (error) {
      console.error("❌ Error submitting brief:", error);
      setSubmitError(error instanceof Error ? error.message : "Something went wrong");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-white">
      <WizardProgress2
        steps={steps}
        currentStep={currentStep}
        onStepClick={goToStep}
        hideProgress={false}
      />
      
      <div className="overflow-hidden chatbot-main-content">
        <StepRenderer
          currentStep={currentStep}
          footerOptions={{
            currentStep: currentStep,
            totalSteps: steps.length,
            canGoNext: canGoNext && !isSubmitting,
            canGoPrev: canGoPrev,
            isLastStep: isLastStep,
            isDraft: isDraft,
            isLoading: isSubmitting,
            onPrevious: prevStep,
            onNext: nextStep,
            onSaveDraft: saveDraft,
            onComplete: handleComplete,
          }}
          data={data}
          onUpdate={updateData}
          currentStepErrors={currentStepErrors}
          submitError={submitError}
          onClearSubmitError={() => setSubmitError(null)}
        />
      </div>
    </div>
  );
}

const MemoizedChatbotWizard3 = React.memo(ChatbotWizard3);
MemoizedChatbotWizard3.displayName = "ChatbotWizard3";

export { MemoizedChatbotWizard3 as ChatbotWizard3 };
export default MemoizedChatbotWizard3;

