"use client";

import React, { Suspense } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";

// Lazy load wizard steps
const LazyBasicInfoStep = React.lazy(() =>
  import("../steps3/BasicInfoStep3").then((module) => ({
    default: module.BasicInfoStep3,
  }))
);

const LazyKnowledgeSourcesStep = React.lazy(() =>
  import("../steps3/KnowledgeSourcesStep3").then((module) => ({
    default: module.KnowledgeSourcesStep3,
  }))
);

const LazyAppearanceStep = React.lazy(() =>
  import("../steps3/AppearanceStep3").then((module) => ({
    default: module.AppearanceStep3,
  }))
);

const LazyWelcomeSetupStep = React.lazy(() =>
  import("../steps3/WelcomeSetupStep3").then((module) => ({
    default: module.WelcomeSetupStep3,
  }))
);



// Optimized loading skeletons for each step
const BasicInfoSkeleton = React.memo(() => (
  <div className="space-y-6">
    <div className="space-y-2">
      <div className="h-8 w-48 bg-muted rounded animate-pulse" />
      <div className="h-4 w-96 bg-muted rounded animate-pulse" />
    </div>
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="h-32 bg-muted rounded animate-pulse" />
        <div className="h-48 bg-muted rounded animate-pulse" />
      </div>
      <div className="h-80 bg-muted rounded animate-pulse" />
    </div>
  </div>
));

const KnowledgeSourcesSkeleton = React.memo(() => (
  <div className="space-y-6">
    <div className="space-y-2">
      <div className="h-8 w-48 bg-muted rounded animate-pulse" />
      <div className="h-4 w-96 bg-muted rounded animate-pulse" />
    </div>
    <div className="h-12 bg-muted rounded animate-pulse" />
    <div className="h-64 bg-muted rounded animate-pulse" />
  </div>
));

const AppearanceSkeleton = React.memo(() => (
  <div className="space-y-6">
    <div className="space-y-2">
      <div className="h-8 w-48 bg-muted rounded animate-pulse" />
      <div className="h-4 w-96 bg-muted rounded animate-pulse" />
    </div>
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="h-32 bg-muted rounded animate-pulse" />
        <div className="h-48 bg-muted rounded animate-pulse" />
        <div className="h-32 bg-muted rounded animate-pulse" />
      </div>
      <div className="h-96 bg-muted rounded animate-pulse" />
    </div>
  </div>
));

const WelcomeSetupSkeleton = React.memo(() => (
  <div className="space-y-6">
    <div className="space-y-2">
      <div className="h-8 w-48 bg-muted rounded animate-pulse" />
      <div className="h-4 w-96 bg-muted rounded animate-pulse" />
    </div>
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="h-48 bg-muted rounded animate-pulse" />
        <div className="h-64 bg-muted rounded animate-pulse" />
      </div>
      <div className="h-96 bg-muted rounded animate-pulse" />
    </div>
  </div>
));

const IntegrationSkeleton = React.memo(() => (
  <div className="space-y-6">
    <div className="space-y-2">
      <div className="h-8 w-48 bg-muted rounded animate-pulse" />
      <div className="h-4 w-96 bg-muted rounded animate-pulse" />
    </div>
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="h-64 bg-muted rounded animate-pulse" />
        <div className="h-48 bg-muted rounded animate-pulse" />
      </div>
      <div className="h-80 bg-muted rounded animate-pulse" />
    </div>
  </div>
));

// Skeleton components with display names
BasicInfoSkeleton.displayName = "BasicInfoSkeleton";
KnowledgeSourcesSkeleton.displayName = "KnowledgeSourcesSkeleton";
AppearanceSkeleton.displayName = "AppearanceSkeleton";
WelcomeSetupSkeleton.displayName = "WelcomeSetupSkeleton";
IntegrationSkeleton.displayName = "IntegrationSkeleton";


// Wrapper components with error boundaries
interface StepWrapperProps {
  footerOptions: FooterOptions;
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
}

export const OptimizedBasicInfoStep = React.memo<StepWrapperProps>((props) => (
  // <Suspense fallback>
    <LazyBasicInfoStep {...props} />
  // </Suspense>
));

export const OptimizedKnowledgeSourcesStep = React.memo<StepWrapperProps>(
  (props) => (
    // <Suspense fallback>
      <LazyKnowledgeSourcesStep {...props} />
    // </Suspense>
  )
);

export const OptimizedAppearanceStep = React.memo<StepWrapperProps>((props) => (
  // <Suspense fallback>
    <LazyAppearanceStep {...props} />
  // </Suspense>
));

export const OptimizedWelcomeSetupStep = React.memo<StepWrapperProps>(
  (props) => (
    // <Suspense fallback>
      <LazyWelcomeSetupStep {...props} />
    // </Suspense>
  )
);


// Display names for debugging
OptimizedBasicInfoStep.displayName = "OptimizedBasicInfoStep";
OptimizedKnowledgeSourcesStep.displayName = "OptimizedKnowledgeSourcesStep";
OptimizedAppearanceStep.displayName = "OptimizedAppearanceStep";
OptimizedWelcomeSetupStep.displayName = "OptimizedWelcomeSetupStep";
