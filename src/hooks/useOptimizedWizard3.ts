"use client"

import { useState, useCallback, useEffect, useMemo, useRef } from "react"
import { useMemoryManagement } from "./useMemoryManagement"
import type { ChatbotWizardData, WizardStep, ValidationErrors } from "@/types/wizard"

const STORAGE_KEY = "chatbot-wizard-draft-v3-briefv2"
const AUTO_SAVE_DELAY = 2000 // 2 seconds

const INITIAL_DATA: ChatbotWizardData = {
  botname: "",
  name: "",
  email: "",
  description: "",
  phone: "", 
  role: "Kogents",
  heardAboutUs: "search-engine",
  deploymentTimeline: "immediately",
  companyName: "",
  industry: "",
  // Tracking fields
  gclid: "",
  fbclid: "",
  igclid: "",
  ttclid: "",
  fingerprint: "",
  stableSessionId: "",
  fingerprintData: "",
  knowledgeSources: {
    files: [],
    urls: [],
    textContent: "",
  },
  appearance: {
    avatar: null,
    primaryColor: "#BE9FE8",
    secondaryColor: "#f1f5f9",
    chatBubbleStyle: "rounded",
    fontFamily: "system",
  },
  getUserInfo: {
    message: "Hello! How can I help you today?",
    initialPrompts: [
      "How can I get started?",
      "Tell me about your services",
      "I need help with...",
    ],
  },
  welcome: {
    message: "Hello! How can I help you today?",
    initialPrompts: ["How can I get started?", "Tell me about your services", "I need help with..."],
  },
  integration: {
    type: "website",
    settings: {},
  },
  useCases: [],
}

const WIZARD_STEPS: WizardStep[] = [
  {
    id: "customization",
    title: "Customization",
    description: "",
    isComplete: false,
    isValid: false,
  },
  {
    id: "basic-setup",
    title: "Basic Setup",
    description: "",
    isComplete: false,
    isValid: false,
  },
  {
    id: "use-case",
    title: "Use Case",
    description: "",
    isComplete: false,
    isValid: false,
  },
  {
    id: "training-data",
    title: "Training Data",
    description: "",
    isComplete: false,
    isValid: false,
  },
  {
    id: "about-you",
    title: "About You",
    description: "",
    isComplete: false,
    isValid: false,
  },
  {
    id: "integration",
    title: "Integration",
    description: "",
    isComplete: false,
    isValid: false,
  },
]

interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export function useOptimizedWizard3() {
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<ChatbotWizardData>(INITIAL_DATA)
  const [steps, setSteps] = useState<WizardStep[]>(WIZARD_STEPS)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isDraft, setIsDraft] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const memoryManager = useMemoryManagement()
  const autoSaveTimeoutRef = useRef<NodeJS.Timeout>(null)
  const dataRef = useRef(data)

  // Update ref when data changes
  useEffect(() => {
    dataRef.current = data
  }, [data])

  // Load draft from localStorage on mount
  useEffect(() => {
    const loadDraft = async () => {
      try {
        const wasSubmitted = typeof window !== 'undefined' 
          ? sessionStorage.getItem('wizard_form_submitted')
          : null;
        
        if (wasSubmitted === 'true') {
          if (typeof window !== 'undefined') {
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem('chatbot-wizard-draft');
            localStorage.removeItem('chatbot-wizard-draft-v2');
            sessionStorage.removeItem('wizard_form_submitted');
          }
          setData(INITIAL_DATA);
          setIsDraft(false);
          setIsLoading(false);
          return;
        }
        
        const oldKeys = [
          "chatbot-wizard-draft",
          "chatbot-wizard-draft-v2"
        ];
        oldKeys.forEach(key => localStorage.removeItem(key));
        
        const savedDraft = localStorage.getItem(STORAGE_KEY)
        if (savedDraft && savedDraft.trim() !== '') {
          try {
            const parsedData = JSON.parse(savedDraft)
            if (parsedData && typeof parsedData === "object") {
              setData({ ...INITIAL_DATA, ...parsedData })
              setIsDraft(true)
            } else {
              localStorage.removeItem(STORAGE_KEY);
              setData(INITIAL_DATA);
            }
          } catch (error) {
            console.error("Invalid draft data, clearing:", error);
            localStorage.removeItem(STORAGE_KEY);
            setData(INITIAL_DATA);
          }
        } else {
          setData(INITIAL_DATA)
        }
      } catch (error) {
        console.error("Failed to load draft:", error)
        localStorage.removeItem(STORAGE_KEY)
        setData(INITIAL_DATA)
      } finally {
        setIsLoading(false)
      }
    }

    loadDraft()
  }, [])

  // Auto-save functionality
  const scheduleAutoSave = useCallback(() => {
    if (typeof window !== 'undefined') {
      const wasSubmitted = sessionStorage.getItem('wizard_form_submitted');
      if (wasSubmitted === 'true') {
        if (autoSaveTimeoutRef.current) {
          clearTimeout(autoSaveTimeoutRef.current);
          autoSaveTimeoutRef.current = null;
        }
        return;
      }
    }
    
    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current)
    }

    autoSaveTimeoutRef.current = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const wasSubmitted = sessionStorage.getItem('wizard_form_submitted');
        if (wasSubmitted === 'true') {
          return;
        }
      }
      
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataRef.current))
        setIsDraft(true)
      } catch (error) {
        console.warn("Failed to auto-save draft:", error)
      }
    }, AUTO_SAVE_DELAY)
  }, [])

  // Cleanup auto-save timeout
  useEffect(() => {
    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current)
      }
    }
  }, [])

  // Validation functions
  const validateCustomization = useCallback((data: ChatbotWizardData): ValidationResult => {
    const errors: string[] = []
    return { isValid: true, errors }
  }, [])

  const validateBasicSetup = useCallback((data: ChatbotWizardData): ValidationResult => {
    const errors: string[] = []
    return { isValid: true, errors }
  }, [])

  const validateUseCase = useCallback((data: ChatbotWizardData): ValidationResult => {
    const errors: string[] = []
    return { isValid: true, errors }
  }, [])

  const validateTrainingData = useCallback((data: ChatbotWizardData): ValidationResult => {
    const errors: string[] = []
    return { isValid: true, errors }
  }, [])

  const validateAboutYou = useCallback((data: ChatbotWizardData): ValidationResult => {
    const errors: string[] = []
    
    // Check if name is filled
    if (!data.name || data.name.trim().length === 0) {
      errors.push("Full name is required")
    }
    
    // Check if email is filled
    if (!data.email || data.email.trim().length === 0) {
      errors.push("Email address is required")
    }
    
    // Also validate email format
    if (data.email && data.email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email.trim())) {
        errors.push("Please enter a valid email address")
      }
    }
    
    return { isValid: errors.length === 0, errors }
  }, [])

  const validateIntegration = useCallback((data: ChatbotWizardData): ValidationResult => {
    const errors: string[] = []
    return { isValid: true, errors }
  }, [])

  // Main validation function
  const validateStep = useCallback(
    (stepIndex: number, dataToValidate: ChatbotWizardData): ValidationResult => {
      switch (stepIndex) {
        case 0:
          return validateCustomization(dataToValidate)
        case 1:
          return validateBasicSetup(dataToValidate)
        case 2:
          return validateUseCase(dataToValidate)
        case 3:
          return validateTrainingData(dataToValidate)
        case 4:
          return validateAboutYou(dataToValidate)
        case 5:
          return validateIntegration(dataToValidate)
        default:
          return { isValid: true, errors: [] }
      }
    },
    [validateCustomization, validateBasicSetup, validateUseCase, validateTrainingData, validateAboutYou, validateIntegration],
  )

  // Memoized step validations
  const stepValidations = useMemo(() => {
    return WIZARD_STEPS.map((_, index) => validateStep(index, data))
  }, [data, validateStep])

  // Update errors when validations change
  useEffect(() => {
    const newErrors: ValidationErrors = {}
    stepValidations.forEach((validation, index) => {
      const stepId = WIZARD_STEPS[index].id
      newErrors[stepId] = validation.errors
    })
    setErrors(newErrors)
  }, [stepValidations])

  // Update steps with completion status
  useEffect(() => {
    setSteps((prev) =>
      prev.map((step, index) => ({
        ...step,
        isValid: stepValidations[index].isValid,
        isComplete: index < currentStep || (index === currentStep && stepValidations[index].isValid),
      })),
    )
  }, [currentStep, stepValidations])

  // Data update function with auto-save
  const updateData = useCallback(
    (updates: Partial<ChatbotWizardData>) => {
      setData((prev) => {
        const newData = { ...prev, ...updates }

        // Deep merge for nested objects
        if (updates.knowledgeSources) {
          newData.knowledgeSources = { ...prev.knowledgeSources, ...updates.knowledgeSources }
        }
        if (updates.appearance) {
          newData.appearance = { ...prev.appearance, ...updates.appearance }
        }
        if (updates.welcome) {
          newData.welcome = { ...prev.welcome, ...updates.welcome }
        }
        if (updates.integration) {
          newData.integration = { ...prev.integration, ...updates.integration }
        }

        return newData
      })

      scheduleAutoSave()
    },
    [scheduleAutoSave],
  )

  // Navigation functions
  const goToStep = useCallback(
    (stepIndex: number) => {
      if (stepIndex >= 0 && stepIndex < steps.length) {
        setCurrentStep(stepIndex)
      }
    },
    [steps.length],
  )

  const nextStep = useCallback(() => {
    const isCurrentStepValid = stepValidations[currentStep]?.isValid
    if (isCurrentStepValid && currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }, [currentStep, steps.length, stepValidations])

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }, [currentStep])

  // Draft management
  const saveDraft = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      setIsDraft(true)
    } catch (error) {
      console.error("Failed to save draft:", error)
    }
  }, [data])

  const clearDraft = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY)
        localStorage.removeItem('chatbot-wizard-draft')
        localStorage.removeItem('chatbot-wizard-draft-v2')
        sessionStorage.removeItem('wizard_form_submitted')
      }
      setIsDraft(false)
      setData(INITIAL_DATA)
      setCurrentStep(0)
    } catch (error) {
      console.warn("Failed to clear draft:", error)
    }
  }, [])

  // Reset wizard
  const resetWizard = useCallback(() => {
    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
      autoSaveTimeoutRef.current = null;
    }
    
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem('chatbot-wizard-draft');
        localStorage.removeItem('chatbot-wizard-draft-v2');
      }
      setIsDraft(false);
      setData(INITIAL_DATA);
      setCurrentStep(0);
    } catch (error) {
      console.warn("Failed to clear draft in resetWizard:", error);
    }
  }, [])

  // Computed values
  const canGoNext = stepValidations[currentStep]?.isValid ?? false
  const canGoPrev = currentStep > 0
  const isLastStep = currentStep === steps.length - 1
  const currentStepData = steps[currentStep]
  const currentStepErrors = errors[steps[currentStep]?.id] || []
  const completionPercentage = Math.round((steps.filter((step) => step.isComplete).length / steps.length) * 100)

  return {
    // State
    currentStep,
    data,
    steps,
    errors,
    isDraft,
    isLoading,

    // Computed
    canGoNext,
    canGoPrev,
    isLastStep,
    currentStepData,
    currentStepErrors,
    completionPercentage,

    // Actions
    updateData,
    goToStep,
    nextStep,
    prevStep,
    validateStep: (stepIndex: number) => validateStep(stepIndex, data),
    saveDraft,
    clearDraft,
    resetWizard,
  }
}
