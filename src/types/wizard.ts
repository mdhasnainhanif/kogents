// Import BlobFileData type
import type { BlobFileData } from '@/utils/fileUtils';

export interface ChatbotWizardData {
  // Step 1: Basic Info
  name: string
  email: string
  description: string
  phone: string
  botname: string
  botImage?: string
  accentColor?: string
  trainingMethod?: string
  websiteUrl?: string
  files?: File[]
  client_ip?: string
  role:
  | "customer-support-manager"
  | "product-manager"
  | "Kogents"
  | "sales-manager"
  | "human-resource-manager"
  | "ecommerce-category-manager"
  | "itsm-manager"
  | "head-of-it"
  | "marketing-manager"
  | "operations-manager"
  | "other"
  heardAboutUs:
  | "search-engine"
  | "social-media"
  | "youtube"
  | "blogs-articles"
  | "email-newsletter"
  | "review-comparison-site"
  | "referred-by-colleague"
  | "redirected-from-chatsonic"
  | "online-ads"
  | "conference-event"
  | "other"
  deploymentTimeline:
  | "immediately"
  | "within-1-month"
  | "within-3-months"
  | "within-6-months"
  | "not-sure";

  // Tracking fields for lead capture
  gclid?: string
  fbclid?: string
  igclid?: string
  ttclid?: string
  fingerprint?: string
  stableSessionId?: string
  fingerprintData?: string

  // Step 2: Knowledge Sources
  knowledgeSources: {
    files: File[]
    urls: string[]
    textContent: string
  }
  
  // Blob data for CRM submission
  blobData?: {
    avatar?: BlobFileData
    trainingFiles?: BlobFileData[]
  }

  // Step 2: Company Information
  companyName?: string
  employeeCount?: string
  industry?: string
  department?: string

  // Step 3: Use Cases
  useCases?: string[]

  // Step 3: Appearance
  appearance: {
    avatar: string | null
    avatarName?: string
    avatarBlob?: BlobFileData  // Add blob data for avatar
    primaryColor: string
    secondaryColor: string
    chatBubbleStyle: "rounded" | "square" | "minimal"
    fontFamily: "system" | "modern" | "classic"
  }

  // Step 4: Welcome & Prompts
  getUserInfo: {
    message: string
    initialPrompts: string[]
  }
  // Step 4: 
  welcome: {
    message: string
    initialPrompts: string[]
  }

  // Step 5: Integration
  integration: {
    type: "website" | "whatsapp" | "slack" | "api"
    settings: Record<string, any>
  }
}

export interface WizardStep {
  id: string
  title: string
  description: string
  isComplete: boolean
  isValid: boolean
}

export interface ValidationErrors {
  [key: string]: string[]
}

export interface FooterOptions {
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
