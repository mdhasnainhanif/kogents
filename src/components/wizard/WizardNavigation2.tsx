"use client";

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/icons";

interface WizardNavigationProps {
  currentStep: number;
  totalSteps: number;
  canGoNext: boolean; 
  canGoPrev: boolean;
  isLastStep: boolean;
  isDraft: boolean;
  isLoading?: boolean;  // ADD THIS
  onPrevious: () => void;
  onNext: () => void;
  onSaveDraft: () => void;
  onComplete: () => void;
}
// Memoized action buttons
const ActionButtons = React.memo<{
  canGoPrev: boolean;
  canGoNext: boolean;
  isLastStep: boolean;
  isLoading?: boolean;  // ADD THIS
  onPrevious: () => void;
  onNext: () => void;
  onSaveDraft: () => void;
  onComplete: () => void;
}>(
  ({
    canGoPrev,
    canGoNext,
    isLastStep,
    isLoading = false,  // ADD THIS
    onPrevious,
    onNext,
    onSaveDraft,
    onComplete,
  }) => (
    <div className="flex items-center justify-between gap-3 w-100">
      {canGoPrev && (
        <button
          onClick={onPrevious}
          disabled={!canGoPrev || isLoading}  // ADD isLoading check
          className="buttonAnimation inline-flex gap-2 items-center px-5 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary 
        hover:bg-transparent text-w-900 open-modal-btn"
        >
          <ChevronLeftIcon />
          Previous
        </button>
      )}

      {isLastStep ? (
        <button
          onClick={onComplete}
          disabled={!canGoNext || isLoading}  // ADD isLoading check
          className="buttonAnimation2 inline-flex gap-2 items-center px-5 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary 
        hover:bg-transparent text-w-900 open-modal-btn disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (  // ADD LOADING STATE
            <>
              Submitting...
            </>
          ) : (
            <>
              Next
              &#10093;
            </>
          )}
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!canGoNext || isLoading}  // ADD isLoading check
          className="buttonAnimation2 ms-auto inline-flex gap-2 align-items-center px-5 py-2"
        >
          Next
          <ChevronRightIcon/>
        </button>
      )}
    </div>
  )
);

ActionButtons.displayName = "ActionButtons";

export const WizardNavigation2 = React.memo<WizardNavigationProps>(
  ({
    currentStep,
    totalSteps,
    canGoNext,
    canGoPrev,
    isLastStep,
    isDraft,
    isLoading = false,  // ADD THIS
    onPrevious,
    onNext,
    onSaveDraft,
    onComplete,
  }) => {
    return (
      <div className="chatbot_footer">
        <ActionButtons
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
          isLastStep={isLastStep}
          isLoading={isLoading}  // ADD THIS
          onPrevious={onPrevious}
          onNext={onNext}
          onSaveDraft={onSaveDraft}
          onComplete={onComplete}
        />
      </div>
    );
  }
);

WizardNavigation2.displayName = "WizardNavigation2";
