"use client";

import React, { Suspense } from "react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
// import { GetUserInfo2 } from "../steps2/GetUserInfo2";

// Lazy load wizard steps
const LazyBasicInfoStep = React.lazy(() =>
  import("../steps2/BasicInfoStep2").then((module) => ({
    default: module.BasicInfoStep2,
  }))
);

const LazyKnowledgeSourcesStep = React.lazy(() =>
  import("../steps2/KnowledgeSourcesStep2").then((module) => ({
    default: module.KnowledgeSourcesStep2,
  }))
);

const LazyAppearanceStep = React.lazy(() =>
  import("../steps2/AppearanceStep2").then((module) => ({
    default: module.AppearanceStep2,
  }))
);

const LazyGetUserInfo2SetupStep = React.lazy(() =>
  import("../steps2/GetUserInfo2").then((module) => ({
    default: module.GetUserInfo2,
  }))
);

const LazyPersonalInfoStep = React.lazy(() =>
  import("../steps2/PersonalInfoStep2").then((module) => ({
    default: module.PersonalInfoStep2,
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

const PersonalInfoSkeleton = React.memo(() => (
  <div className="space-y-6">
    <div className="space-y-2">
      <div className="h-8 w-48 bg-muted rounded animate-pulse" />
      <div className="h-4 w-96 bg-muted rounded animate-pulse" />
    </div>
    <div className="space-y-4">
      <div className="h-12 bg-muted rounded animate-pulse" />
      <div className="h-12 bg-muted rounded animate-pulse" />
      <div className="h-12 bg-muted rounded animate-pulse" />
    </div>
  </div>
));

// Skeleton components with display names
BasicInfoSkeleton.displayName = "BasicInfoSkeleton";
KnowledgeSourcesSkeleton.displayName = "KnowledgeSourcesSkeleton";
AppearanceSkeleton.displayName = "AppearanceSkeleton";
WelcomeSetupSkeleton.displayName = "WelcomeSetupSkeleton";
IntegrationSkeleton.displayName = "IntegrationSkeleton";
PersonalInfoSkeleton.displayName = "PersonalInfoSkeleton";


// Wrapper components with error boundaries
interface StepWrapperProps {
  footerOptions: FooterOptions;
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  submitError?: string | null;
  onClearSubmitError?: () => void;
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


export const OptimizedGetUserInfo2 = React.memo<StepWrapperProps>(
  (props) => (
    // <Suspense fallback>
      <LazyGetUserInfo2SetupStep {...props} />
    // </Suspense>
  )
);

export const OptimizedPersonalInfoStep = React.memo<StepWrapperProps>(
  (props) => (
    // <Suspense fallback>
      <LazyPersonalInfoStep {...props} />
    // </Suspense>
  )
);




// Display names for debugging
OptimizedBasicInfoStep.displayName = "OptimizedBasicInfoStep";
OptimizedKnowledgeSourcesStep.displayName = "OptimizedKnowledgeSourcesStep";
OptimizedAppearanceStep.displayName = "OptimizedAppearanceStep";
OptimizedGetUserInfo2.displayName = "OptimizedGetUserInfo2";
OptimizedPersonalInfoStep.displayName = "OptimizedPersonalInfoStep";
