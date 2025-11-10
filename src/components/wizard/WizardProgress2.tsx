"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WizardStep } from "@/types/wizard";
import Link from "next/link";

interface WizardProgressProps {
  steps: WizardStep[];
  currentStep: number;
  hideProgress: boolean;
  onStepClick: (stepIndex: number) => void;
}

// Memoized step circle component
const StepCircle = React.memo<{
  step: WizardStep;
  index: number;
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}>(({ step, index, currentStep, onStepClick }) => {
  const handleClick = React.useCallback(() => {
    onStepClick(index);
  }, [onStepClick, index]);

  const isCompleted = index < currentStep;
  const isCurrent = index === currentStep;
  const isDisabled = index > currentStep;

  return (
    <div
      className={`header_point ${
        isCompleted ? "bg_complete" : isCurrent ? "bg_current" : "bg_incomplete"
      }
    `}
    >
      {/* Step Circle */}
      <button onClick={handleClick} disabled={isDisabled}>
        {isCompleted ? (
          <Check size={15} />
        ) : (
          <span className="fw-medium">{index + 1}</span>
        )}
      </button>
      {/* Step Label */}
      <div className="ms-3 d-none d-sm-block">
        <div
          className={`step_title ${
            index <= currentStep ? "text-white" : "incomplete_title"
          }
      `}
        >
          {step.title}
        </div>
        {/* <div className="fs-7 text-muted">
          {step.description}
        </div> */}
      </div>
    </div>
  );
});

StepCircle.displayName = "StepCircle";

// Memoized connector line component
const ConnectorLine = React.memo<{
  isCompleted: boolean;
}>(({ isCompleted }) => <div className="step_line"></div>);

ConnectorLine.displayName = "ConnectorLine";

// Memoized mobile step info component
const MobileStepInfo = React.memo<{
  currentStep: WizardStep;
}>(({ currentStep }) => (
  <div className="sm:hidden mt-3 text-center">
    <div className="text-sm font-medium">{currentStep.title}</div>
    {/* <div className="text-xs text-muted-foreground">{currentStep.description}</div> */}
  </div>
));

MobileStepInfo.displayName = "MobileStepInfo";

export const WizardProgress2 = React.memo<WizardProgressProps>(
  ({ steps, currentStep, onStepClick, hideProgress }) => {
    const currentStepData = React.useMemo(
      () => steps[currentStep],
      [steps, currentStep]
    );

    return (
      <div className="chat_header_container">
        <div className="container chatbot_header px-lg-0">
          <div>
            <Link href="/ai-agent">
              <img width={150} src="/assets/img/kogents-logo.svg" alt="logo" />
            </Link>
          </div>
          {!hideProgress && (
            <div className="header_pogress_points">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <StepCircle
                    step={step}
                    index={index}
                    currentStep={currentStep}
                    onStepClick={onStepClick}
                  />

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <ConnectorLine isCompleted={index < currentStep} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
          {/* Mobile Step Info */}
          {/* <MobileStepInfo currentStep={currentStepData} /> */}
        </div>
      </div>
    );
  }
);

WizardProgress2.displayName = "WizardProgress2";
