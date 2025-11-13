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

  console.log("data", data);

  const handleComplete = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const files = data.knowledgeSources?.files || [];
      const rawUrl = (data.websiteUrl || "").trim();
      const firstUrl = rawUrl ? (/^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`) : "";

      // Process Step 3 use cases - check if "customer-support" is selected for business field
      const useCasesList = data.useCases || [];
      // Map use case to business string value
      let businessValue: string | undefined = undefined;
      if (useCasesList.some((uc: string) => uc.startsWith("customer-support"))) {
        businessValue = "customer-support";
      } else if (useCasesList.some((uc: string) => uc.startsWith("lead-capture"))) {
        businessValue = "lead-capture";
      } else if (useCasesList.some((uc: string) => uc.startsWith("sales"))) {
        businessValue = "sales";
      }

      // Process Step 6 integration type - map to info field
      const integrationType = data.integration?.type || "";
      // Map integration type to readable text for info field
      const integrationInfoMap: Record<string, string> = {
        "self-manage": "Do you manage your website yourself?",
        "technical-person": "I have a technical person to do this for me",
        "engineering-team": "Would you like our engineering team to do this for you?",
      };
      const infoValue = integrationType ? (integrationInfoMap[integrationType] || integrationType) : "";

      // ================= Workspace API submission with ALL fields =================
      try {
        const wsFiles: File[] = (data.knowledgeSources?.files || []) as File[];
        const d: any = data as any;

        // Complete payload with all fields from all steps
        const workspacePayload = {
          // Step 2: Company Information (required)
          companyName: String(data.companyName || ""), // maps to "name" (required)
          industry: String(data.industry || ""), // maps to "vertical"
          companySize: String(d.companySize || ""),
          country: String(d.country || ""),
          websiteUrl: firstUrl, // normalized URL from Step 4
          files: wsFiles, // files from Step 4
          
          // Step 1: Bot Customization
          botName: String(data.botname || ""),
          
          // Step 3: Use Cases → business field (now string, not boolean)
          business: businessValue,
          
          // Step 5: Personal Information
          fullName: String(data.name || ""),
          emailAddress: String(data.email || ""), // Preferred over email
          phoneNumber: String(data.phone || ""),
          
          // Step 6: Integration → info field
          info: infoValue, // Step 6 integration option text
          
          // Step 6: Integration checkbox
          infoCheckbox: integrationType === "website" ? true : undefined,
          
          // Bot appearance fields
          colors: String(data.appearance?.primaryColor || "#000"),
          displayTitle: String(data.botname || ""),
          imageUrl: (() => {
            const avatarUrl = String(data.appearance?.avatar || "");
            if (!avatarUrl) return "";
            // If it's a base64 data URL or absolute URL, use as-is
            if (avatarUrl.startsWith('data:') || avatarUrl.startsWith('http://') || avatarUrl.startsWith('https://')) {
              return avatarUrl;
            }
            // For relative paths like /assets/img/brief/avatar3.png, prepend base URL
            return `https://kogents.ai${avatarUrl.startsWith('/') ? avatarUrl : '/' + avatarUrl}`;
          })(),
        };

        const response = await createWorkspaceWithFiles(workspacePayload);
        console.log("✅ Workspace created with kogent-bot API");
        
        // ✅ Store workspace _id for widget script
        const workspaceId = response?.data?._id || response?._id;
        if (workspaceId) {
          // Store in localStorage for widget script
          if (typeof window !== 'undefined') {
            localStorage.setItem('workspace_id', workspaceId);
            console.log('✅ Workspace ID stored:', workspaceId);
          }
          // Update in wizard data
          updateData({
            workspaceId: workspaceId,
          } as any);
        }

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

