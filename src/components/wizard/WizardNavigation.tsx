"use client"

import React from "react"
// import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Save, Rocket } from "lucide-react"

interface WizardNavigationProps {
  currentStep: number
  totalSteps: number
  canGoNext: boolean
  canGoPrev: boolean
  isLastStep: boolean
  isDraft: boolean
  onPrevious: () => void
  onNext: () => void
  onSaveDraft: () => void
  onComplete: () => void
}


// Memoized action buttons
const ActionButtons = React.memo<{
  canGoPrev: boolean
  canGoNext: boolean
  isLastStep: boolean
  onPrevious: () => void
  onNext: () => void
  onSaveDraft: () => void
  onComplete: () => void
}>(({ canGoPrev, canGoNext, isLastStep, onPrevious, onNext, onSaveDraft, onComplete }) => (
  <div className="flex items-center justify-between gap-3 w-100">
    {/* <button onClick={onSaveDraft} className="gap-2 text-black">
      <Save className="w-4 h-4" />
      Save Draft
    </button> */}

    <button onClick={onPrevious} disabled={!canGoPrev} className="buttonAnimation2 inline-block px-4 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary 
        hover:bg-transparent text-w-900 open-modal-btn">
      <ChevronLeft className="w-4 h-4" />
      Previous
    </button>

    {isLastStep ? (
      <button onClick={onComplete} disabled={!canGoNext} className="buttonAnimation2 inline-block px-4 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary 
        hover:bg-transparent text-w-900 open-modal-btn">
        <Rocket className="w-4 h-4" />
        Create Chatbot
      </button>
    ) : (
      <button onClick={onNext} disabled={!canGoNext} className="buttonAnimation2 inline-block px-4 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary 
        hover:bg-transparent text-w-900 open-modal-btn">
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    )}
  </div>
))

ActionButtons.displayName = "ActionButtons"

export const WizardNavigation = React.memo<WizardNavigationProps>(
  ({
    currentStep,
    totalSteps,
    canGoNext,
    canGoPrev,
    isLastStep,
    isDraft,
    onPrevious,
    onNext,
    onSaveDraft,
    onComplete,
  }) => {
    return (
      <div className="sticky bottom-0 bg-slate-950 border-gray-600 border-t">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="w-100">
            {/* <StepIndicator currentStep={currentStep} totalSteps={totalSteps} isDraft={isDraft} /> */}

            <ActionButtons
              canGoPrev={canGoPrev}
              canGoNext={canGoNext}
              isLastStep={isLastStep}
              onPrevious={onPrevious}
              onNext={onNext}
              onSaveDraft={onSaveDraft}
              onComplete={onComplete}
            />
          </div>
        </div>
      </div>
    )
  },
)

WizardNavigation.displayName = "WizardNavigation"
