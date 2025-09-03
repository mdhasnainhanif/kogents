"use client";

import React, { useState } from "react";
import { useOptimizedWizard } from "@/hooks/useOptimizedWizard2";
import {
  OptimizedBasicInfoStep,
  OptimizedKnowledgeSourcesStep,
  OptimizedAppearanceStep,
  OptimizedGetUserInfo2,
} from "./optimized2/LazyWizardSteps";
import { useRouter } from "next/navigation";
import { WizardProgress2 } from "./WizardProgress2";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sendLeadToCRM } from "@/api/wizard";

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
        <OptimizedGetUserInfo2
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
    // <div className="welcome_screen">
    //   <div className="text-center">
    //     <img
    //       src="/assets/img/botsonic.png"
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
      className="sectionPadding bg-center bg-no-repeat bg-cover newBg desktop-section-show vh-100"
      id="aiAgentSection"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <span className="buttonAnimation yellow mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
              Thank You
            </span>
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
  } = useOptimizedWizard();

  const [isGetStarted, setIsGetStarted] = useState(false)

  const handleComplete = React.useCallback(async () => {
    try {
      console.log("Creating chatbot with data:", data);

      // Build form data
      const formDataArray = {
        name: data.name || "",
        email: data.email || "dummy@example.com",
        description: data.description || "",
        phone: data.phone || "",
        gclid: data.gclid || "",
        fbclid: data.fbclid || "",
        igclid: data.igclid || "",
        ttclid: data.ttclid || "",
        fingerprint: data.fingerprint || "",
        stableSessionId: data.stableSessionId || "",
        fingerprintData: data.fingerprintData || "",
      };
      console.log("Final Form Data Array Object:", formDataArray);

      // Prepare contactData in Laravel format
      const contactData = {
        name: formDataArray.name || "",
        email: formDataArray.email || "",
        phone: formDataArray.phone || "",         // used by backend
        message: formDataArray.description || "",
        service_id: 2,
      
        // Tracking (go to dedicated columns)
        gclid: formDataArray.gclid || "",
        fbclid: formDataArray.fbclid || "",
        igclid: formDataArray.igclid || "",
        ttclid: formDataArray.ttclid || "",
      
        // Device/session
        fingerprint: formDataArray.fingerprint || "",
        session_id: formDataArray.stableSessionId || "",
        user_agent: navigator.userAgent,
        client_ip: "", // optional; backend can resolve
      
        // Optional; not needed for metadata anymore
        link: "https://kogents.ai/",
        chat: "",
      
        // Structured Meta Data (shown in detail page)
        metadata: {
          brand: "kogents.ai",
          form_steps: [
            {
              title: "Welcome to Kogents",
              fields: [
                { q: "What best describes your role?", a: data.role || "" },
                { q: "How did you hear about us?", a: data.heardAboutUs || "" },
                { q: "How soon do you plan to deploy your Bot?", a: data.deploymentTimeline || "" }
              ]
            },
            {
              title: "Tell Us About Your Company",
              fields: [
                { q: "Company Name", a: data.companyName || "" },
                { q: "Select the number of employees", a: data.employeeCount || "" },
                { q: "What industry does your company operate in?", a: data.industry || "" },
                { q: "What department are you in?", a: data.department || "" }
              ]
            },
            {
              title: "How can Botsonic supercharge your work?",
              fields: [
                { q: "Selected use cases", a: data.useCases ? data.useCases.join(", ") : "" }
              ]
            },
            {
              title: "Personal Information",
              fields: [
                { q: "Full Name", a: data.name || "" },
                { q: "Email Address", a: data.email || "" },
                { q: "Phone Number", a: data.phone || "" },
                { q: "Description/Message", a: data.description || "" }
              ]
            }
          ]
        }
      };

      console.log("📋 Preparing contact data for CRM:", contactData);
      console.log("📊 MetaData structure:", contactData.metadata);
      console.log("🔍 Complete form data:", formDataArray);

      // 🚀 Send to CRM via helper
      const result = await sendLeadToCRM(contactData);

      if (result.success) {
        console.log("✅ Lead successfully sent to CRM:", result);
      } else {
        console.error("❌ Failed to send lead to CRM:", result.error, result.details);
      }

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear draft and redirect
      setIsGetStarted(true);
    } catch (error) {
      console.error("Failed to create chatbot:", error);
    }
  }, [data, clearDraft, router]);




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
