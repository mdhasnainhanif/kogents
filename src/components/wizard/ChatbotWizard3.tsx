"use client";

import React, { useState } from "react";
import { useOptimizedWizard3 } from "@/hooks/useOptimizedWizard3";
import { sendLeadToCRM } from "@/api/wizard";
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

      const urls = data.knowledgeSources?.urls || [];
      const files = data.knowledgeSources?.files || [];
      const textContent = data.knowledgeSources?.textContent || "";
      const rawUrl = (data.websiteUrl || urls[0] || "").trim();
      const firstUrl = rawUrl ? (/^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`) : "";
      const trainingMethod = firstUrl
        ? "Website URL"
        : files.length > 0
          ? "File Upload"
          : textContent
            ? "Text Content"
            : "None";

      // Process use cases
      const useCasesList = data.useCases || [];
      const formattedUseCases = useCasesList.join(", ");

      const structuredData = {
        name: data.name || "",
        email: data.email || "",
        phone_number: data.phone || "",
        message: data.description || "Looking for AI chatbot integration",
        company_name: data.companyName || "",
        service_id: 2,
        metadata: {
          brand: "kogents.ai",
          gclid: data.gclid || null,
          fbclid: data.fbclid || null,
          igclid: data.igclid || null,
          ttclid: data.ttclid || null,
          fingerprint: data.fingerprint || null,
          stable_session_id: data.stableSessionId || null,
          fingerprintdata: data.fingerprintData || null,
          form_steps: [
            {
              fields: [
                { q: "Bot Name", a: data.botname || "N/A" },
                { q: "Bot Image", a: avatarIsBase64 ? (avatarName || "") : avatar },
                { q: "Selected Accent Color", a: isDefaultAccent ? "N/A" : (primaryColor || "N/A") }
              ],
              bot_image: {
                name: avatarName,
                size: data.appearance?.avatarBlob?.size || 0,
                type: data.appearance?.avatarBlob?.type || "image/png",
                url: avatarIsBase64 ? "" : avatar,
                blob: data.appearance?.avatarBlob?.blob || ""
              },
              accent_color: accentColorValue
            },
            {
              fields: [
                { q: "Company Name", a: data.companyName || "N/A" },
                { q: "Industry", a: data.industry || "N/A" }
              ]
            },
            {
              fields: [
                { q: "Selected Use Cases", a: formattedUseCases || "N/A" }
              ],
              selected_options: useCasesList.length > 0 ? useCasesList : ["N/A"]
            },
            {
              fields: [
                { q: "Training Method", a: trainingMethod },
                { q: "Website URL", a: firstUrl || "N/A" },
                { q: "Files Uploaded", a: files.length > 0 ? `${files.length} file(s)` : "None" },
                { q: "Text Content", a: textContent ? `${textContent.length} characters` : "None" }
              ],
              training_method: trainingMethod,
              website_url: firstUrl,
              files: files.map((file, index) => ({
                name: file.name,
                size: file.size,
                type: file.type,
                blob: data.blobData?.trainingFiles?.[index]?.blob || ""
              }))
            },
            {
              fields: [
                { q: "Full Name", a: data.name || "N/A" },
                { q: "Email", a: data.email || "N/A" },
                { q: "Phone", a: data.phone || "N/A" }
              ]
            },
            {
              fields: [
                { q: "Integration Option", a: data.integration?.type || "N/A" }
              ]
            }
          ]
        },
        fingerprint: data.fingerprint || "fp-test-67890-xyz",
        client_ip: data.client_ip || "127.0.0.1",
        user_agent: navigator.userAgent,
        session_id: data.stableSessionId || "sess-67890-abc",
        link: "https://kogents.ai/"
      };

      console.log("🚀 ===== STARTING BRIEF SUBMISSION =====");
      
      const result = await sendLeadToCRM(structuredData);
      
      console.log("🔍 ===== BRIEF SUBMISSION RESULT =====");
      
      if (result.success) {
        console.log("✅ Brief submitted to CRM");
        
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
      } else {
        console.error("❌ Brief submission failed:", result.error);
        setSubmitError(result.error || "Form submission failed");
        setIsSubmitting(false);
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

