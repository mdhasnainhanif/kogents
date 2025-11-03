"use client";

import React, { useState } from "react";
import { useOptimizedWizard } from "@/hooks/useOptimizedWizard2";
import { sendLeadToCRM } from "@/api/wizard";
import {
  OptimizedBasicInfoStep,
  OptimizedKnowledgeSourcesStep,
  OptimizedAppearanceStep,
  OptimizedGetUserInfo2,
  OptimizedPersonalInfoStep,
} from "./optimized2/LazyWizardSteps";
import { useRouter } from "next/navigation";
import { WizardProgress2 } from "./WizardProgress2";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/icons";


// Memoized step renderer to prevent unnecessary re-renders

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
        <OptimizedBasicInfoStep
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
        />
      );
    case 1:
      return (
        <OptimizedAppearanceStep
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
        />
      );
    case 2:
      return (
        <OptimizedKnowledgeSourcesStep
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
        />
      );
    case 3:
      return (
        <OptimizedGetUserInfo2
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
        />
      );
    case 4:
      return (
        <OptimizedPersonalInfoStep
          data={data}
          onUpdate={onUpdate}
          errors={currentStepErrors}
          footerOptions={footerOptions}
          submitError={submitError}
          onClearSubmitError={onClearSubmitError}
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
    // <div className="welcome_screen">
    //   <div className="text-center">
    //     <img
    //       src="/assets/img/Botsonic.png"
    //       className="mx-auto rounded-circle"
    //       alt="Botsonic"
    //       style={{ maxWidth: '350px', height: 'auto' }}
    //     />
    //     <div className="mt-4">
    //       <h1 className="h2 mb-0 fw-semibold">Welcome to Kogents!</h1>
    //       <p className="small">
    //         Let's set up your AI chatbot in just a few minutes.
    //       </p>
    //     </div>
    //     <button
    //       onClick={() => set((prev) => !prev)}
    //       className="buttonAnimation2 ms-auto inline-flex gap-2 align-items-center px-5 py-2 mt-3"
    //     >
    //       Get started
    //     </button>
    //   </div>
    // </div>
    <section
      className="py-3 bg-center bg-no-repeat bg-cover newBg desktop-section-show "
      id="aiAgentSection"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            {/* <span className="buttonAnimation yellow mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
              Thank You
            </span> */}
            <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
              How Would You Like To Proceed?
            </h2>
          </div>
        </div>
        <div className="row rowGap justify-content-center mt-5">
          {/* Card 1 */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
              <Image
                src="/assets/img/steps/live_chat.webp"
                alt="Live Chat"
                className="rounded-lg"
                width={800}
                height={600}
              />
              <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">Live Chat</h3>
              <p>
                Let's Talk! Share your design requirements with one of our designers to
                get a perfect logo that you envisioned for
              </p>
              <Link
                href="/" aria-label="KOGENTS - Go to homepage"
                className="w_fit buttonAnimation2 pink mt-3 d-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
              >
                Request Access
                <ArrowRightIcon style={{ height: 24 }} />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
              <Image
                src="/assets/img/steps/about_us.webp"
                alt="About Us"
                className="rounded-lg"
                width={800}
                height={600}
              />
              <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">About Us</h3>
              <p>
                Let's Talk! Share your design requirements with one of our designers to
                get a perfect logo that you envisioned for
              </p>
              <Link
                href="/about"
                className="w_fit buttonAnimation2 green mt-3 d-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
              >
                Request Access
                <ArrowRightIcon style={{ height: 24 }} />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
              <Image
                src="/assets/img/steps/solutions.webp"
                alt="Solutions"
                className="rounded-lg"
                width={800}
                height={600}
              />
              <h3 className="mt-8 mb-6 text-2xl font-medium text-w-500">Solutions</h3>
              <p>
                Let's Talk! Share your design requirements with one of our designers to
                get a perfect logo that you envisioned for
              </p>
              <Link
                href="/solutions"
                className="w_fit buttonAnimation2 yellow mt-3 d-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
              >
                Request Access
                <ArrowRightIcon style={{ height: 24 }} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>

  );
};

const GetStarted = React.memo(GetStartedComponent);

// Main ChatbotWizard component
function ChatbotWizard2() {
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
  } = useOptimizedWizard();

  const [isGetStarted, setIsGetStarted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Clear localStorage on mount if form was submitted - RUNS BEFORE HOOK LOAD
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const wasSubmitted = sessionStorage.getItem('wizard_form_submitted');
      if (wasSubmitted === 'true') {
        // FORCE clear localStorage immediately on mount - BEFORE hook loads
        try {
          localStorage.removeItem('chatbot-wizard-draft-v3');
          localStorage.removeItem('chatbot-wizard-draft');
          localStorage.removeItem('chatbot-wizard-draft-v2');
          // Verify and clear again if needed
          if (localStorage.getItem('chatbot-wizard-draft-v3')) {
            localStorage.removeItem('chatbot-wizard-draft-v3');
          }
        } catch (error) {
          console.error('Failed to clear localStorage on mount:', error);
        }
        // Remove flag so user can start fresh
        sessionStorage.removeItem('wizard_form_submitted');
      }
    }
  }, []);

  // minimal debug only

  

  const handleComplete = async () => {
    // Set loading state at start
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Remove the setTimeout redirect from here - we'll redirect only on success
      
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
              // title: "Bot Name",
              fields: [
                {
                  q: "Bot Name",
                  a: data.botname || "N/A"
                }
              ]
            },
            {
              // title: "How can Botsonic supercharge your work?",
              fields: [
                {
                  q: "Selected Options",
                  a: data.useCases ? data.useCases.join(", ") : "N/A"
                }
              ],
              selected_options: data.useCases || [
                "N/A"
              ]
            },
            {
              // title: "Customize Your Bot's Appearance",
              fields: [
                {
                  q: "Bot Image",
                  a: avatarIsBase64 ? (avatarName || "") : avatar
                },
                {
                  q: "Selected Accent Color",
                  a: isDefaultAccent ? "N/A" : (primaryColor || "N/A")
                }
              ],

              // Always include a bot_image object for visibility
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
              // title: "Provide Information to Train Your Bot",
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
      
      // Send to CRM using the API helper
      const result = await sendLeadToCRM(structuredData);
      
      console.log("🔍 ===== BRIEF SUBMISSION RESULT =====");
      
      if (result.success) {
        console.log("✅ Brief submitted to CRM");
        
        // Clear localStorage and set flag
        if (typeof window !== 'undefined') {
          try {
            localStorage.removeItem('chatbot-wizard-draft-v3');
            localStorage.removeItem('chatbot-wizard-draft');
            localStorage.removeItem('chatbot-wizard-draft-v2');
            sessionStorage.setItem('wizard_form_submitted', 'true');
          } catch (error) {
            console.error('Failed to clear localStorage:', error);
          }
        }
        
        // Redirect IMMEDIATELY - no reset needed as user is leaving the page
        router.push("/thank-you");
      } else {
        console.error("❌ Brief submission failed:", result.error);
        setSubmitError(result.error || "Form submission failed");
        setIsSubmitting(false); // Stop loading on error
      }

    } catch (error) {
      console.error("❌ Error submitting brief:", error);
      setSubmitError(error instanceof Error ? error.message : "Something went wrong");
      setIsSubmitting(false); // Stop loading on error
    }
  };


  return (
    <div className="text-white">
      <WizardProgress2
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
              canGoNext: canGoNext && !isSubmitting,  // Disable when submitting
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
        )}
      </div>


      {/* 
        <SuccessState
          isVisible={isLastStep && canGoNext}
          botName={data.name || "Untitled Bot"}
        /> */}
    </div>
  );
}

// Memoize the main component
const MemoizedChatbotWizard2 = React.memo(ChatbotWizard2);
MemoizedChatbotWizard2.displayName = "ChatbotWizard2";

// Export both named and default exports for compatibility
export { MemoizedChatbotWizard2 as ChatbotWizard2 };
export default MemoizedChatbotWizard2;
