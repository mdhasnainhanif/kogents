"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { Check } from "lucide-react";
import type { ChatbotWizardData, FooterOptions } from "@/types/wizard";
import { WizardNavigation2 } from "../WizardNavigation2";
import InViewAnimate from "@/components/InViewAnimate";
import Image from "next/image";
import { ChatWidget } from "../ChatWidget";

interface UseCaseStepProps {
  data: ChatbotWizardData;
  onUpdate: (updates: Partial<ChatbotWizardData>) => void;
  errors: string[];
  footerOptions: FooterOptions;
  onValidationChange?: (isValid: boolean) => void;
  onValidate?: (validateFn: () => boolean) => void;
}

interface UseCaseOption {
  id: string;
  title: string;
  goal: string;
  benefits: {
    id: string;
    title: string;
    description: string;
  }[];
}

const USE_CASE_OPTIONS: UseCaseOption[] = [
  {
    id: "customer-support",
    title: "Customer Support AI Agent",
    goal: "Goal: Highlight efficiency, cost savings, and service quality improvements.",
    benefits: [
      { 
        id: "a", 
        title: "Reduce support costs by up to 35%",
        description: "AI agents handle routine inquiries instantly, cutting ticket volume and operational costs."
      },
      { 
        id: "b", 
        title: "Resolve issues 60% faster",
        description: "Smart automation slashes response times while boosting first-contact resolution."
      },
      { 
        id: "c", 
        title: "Maintain or raise CSAT by +10 points",
        description: "Customers get 24/7 support without queue times — satisfaction goes up, not down."
      },
    ],
  },
  {
    id: "lead-capture",
    title: "Lead Capture AI Agent",
    goal: "Goal: Emphasize conversion, qualification speed, and lead pipeline growth.",
    benefits: [
      { 
        id: "a", 
        title: "Increase lead conversion by up to 52%",
        description: "Conversational AI engages visitors in real time, capturing intent before they bounce."
      },
      { 
        id: "b", 
        title: "Qualify leads 3x faster",
        description: "Automated pre-screening routes high-intent leads directly to your CRM or sales team."
      },
      { 
        id: "c", 
        title: "Boost engagement rates by 40%+",
        description: "Personalized AI conversations keep visitors talking longer — and converting more often."
      },
    ],
  },
  {
    id: "sales",
    title: "Sales AI Agent",
    goal: "Goal: Focus on revenue acceleration, efficiency, and buyer experience.",
    benefits: [
      { 
        id: "a", 
        title: "Increase sales productivity by 40–50%",
        description: "AI handles prospecting, follow-ups, and scheduling — reps focus only on closing."
      },
      { 
        id: "b", 
        title: "Deliver 3.5× ROI within the first year",
        description: "Each $1 spent on AI-assisted sales returns over $3.5 in new revenue opportunities."
      },
      { 
        id: "c", 
        title: "Cut response-to-lead time from hours to seconds",
        description: "Engage prospects instantly when they're most interested — before competitors do."
      },
    ],
  },
];

// Map use cases to images (5 images per use case)
const getImagesForUseCase = (useCaseId: string): string[] => {
  const imageMap: Record<string, string[]> = {
    'customer-support': [
      '/assets/img/CustomerSupport/1.jpg',
      '/assets/img/CustomerSupport/2.jpg',
      '/assets/img/CustomerSupport/3.jpg',
      '/assets/img/CustomerSupport/4.jpg',
      '/assets/img/CustomerSupport/5.jpg',
    ],
    'lead-capture': [
      '/assets/img/LeadCapture/1.jpg',
      '/assets/img/LeadCapture/2.jpg',
      '/assets/img/LeadCapture/3.jpg',
      '/assets/img/LeadCapture/4.jpg',
      '/assets/img/LeadCapture/5.jpg',
    ],
    'sales': [
      '/assets/img/Sales/1.jpg',
      '/assets/img/Sales/2.jpg',
      '/assets/img/Sales/3.jpg',
      '/assets/img/Sales/4.jpg',
      '/assets/img/Sales/5.jpg',
    ],
  };

  return imageMap[useCaseId] || ['/assets/img/brief/brief-v2-3.webp'];
};

// Add Message interface
interface Message {
  id: number;
  sender: string;
  senderIcon: string;
  text: string;
  time: string;
  isAgent: boolean;
  isUser?: boolean;
  isSystem?: boolean;
  showStatus: boolean;
}

// Create messages for each slide based on images (C1 to C5)
const getCustomerSupportMessages = (slideIndex: number, botName: string): Message[] => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  // C1 Image Conversation - Warranty Check
  const c1Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can I help you today',
      time: '4:18 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'Is my device still under warranty?',
      time: '4:19 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'I can check that for you! What\'s your purchase date or receipt number?',
      time: '4:20 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'I bought it in March',
      time: '4:21 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'Great — your device is covered until next March',
      time: '4:22 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // C2 Image Conversation - Refund Request
  const c2Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can I help you today?',
      time: '3:15 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'I\'d like to request a refund.',
      time: '3:16 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'Of course! Could you please share your order ID?',
      time: '3:17 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: '#7812',
      time: '3:18 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'Got it. I\'ve submitted your refund request — you\'ll receive confirmation within 24 hours',
      time: '3:19 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // C3 Image Conversation - Order Status
  const c3Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can I help you?',
      time: '4:18 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'My order hasn\'t arrived yet.',
      time: '4:20 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'I\'m sorry to hear that! Can you share your order number',
      time: '4:21 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'Yes, it\'s #5421',
      time: '4:22 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'Thanks! Your order is on its way and should arrive by tomorrow',
      time: '4:23 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // C4 Image Conversation - Password Reset
  const c4Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can I help you today?',
      time: '2:30 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'I can\'t log into my account.',
      time: '2:31 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'No worries! Have you tried resetting your password?',
      time: '2:32 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'Not yet.',
      time: '2:33 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'I can send you a reset link right now – should I go ahead?',
      time: '2:34 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // C5 Image Conversation - Shipping Inquiry
  const c5Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can I help you today?',
      time: '1:45 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'How long does shipping take?',
      time: '1:46 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'Standard shipping takes 3–5 business days, and express is 1–2.',
      time: '1:47 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'Can I switch to express?',
      time: '1:48 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'Sure! I can help you upgrade your delivery option.',
      time: '1:49 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // Return messages based on slide index
  const messageSets = [c1Messages, c2Messages, c3Messages, c4Messages, c5Messages];
  return messageSets[slideIndex] || messageSets[0];
};

// Create messages for Lead Capture slides (L1 to L5)
const getLeadCaptureMessages = (slideIndex: number, botName: string): Message[] => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  // L1 Image Conversation - Demo Request
  const l1Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can i help you today?',
      time: '3:15 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'I\'d like to see a demo.',
      time: '3:16 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'Awesome! Can I get your email so our team can share a quick demo link?',
      time: '3:17 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'mark@xyz.com',
      time: '3:18 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'Thanks, Mark! You\'ll get your personalized demo in just a few minutes.',
      time: '3:19 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // L2 Image Conversation - Pricing Inquiry
  const l2Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can I help you today?',
      time: '2:30 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'How much does your software cost',
      time: '2:31 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'Pricing depends on your team size. How many members will use it?',
      time: '2:32 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'Around 10',
      time: '2:33 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'Perfect — that\'s our Starter Plan. Want me to connect you with our pricing specialist?',
      time: '2:34 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // L3 Image Conversation - HubSpot Integration
  const l3Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can I help you today?',
      time: '1:45 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'Do you integrate with HubSpot?',
      time: '1:46 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'Absolutely! We offer native integration. Would you like me to send setup steps or schedule a call?',
      time: '1:47 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'Send setup steps',
      time: '1:48 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'Done! Check your inbox for a quick guide.',
      time: '1:49 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // L4 Image Conversation - Business Automation
  const l4Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can i help you today?',
      time: '4:18 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'I\'m interested in automating my support',
      time: '4:19 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'Great! What kind of business are you running?',
      time: '4:20 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'An online clothing store.',
      time: '4:21 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'Perfect fit — we can automate up to 70% of your support chats. Can I get your email for a free trial?',
      time: '4:22 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // L5 Image Conversation - Newsletter Subscription
  const l5Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can i help you today?',
      time: '5:00 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'I want to stay updated.',
      time: '5:01 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'That\'s great! What\'s your best email for updates and AI tips?',
      time: '5:02 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'hello@brand.com',
      time: '5:03 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'You\'re all set! Expect our first newsletter soon',
      time: '5:04 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // Return messages based on slide index
  const messageSets = [l1Messages, l2Messages, l3Messages, l4Messages, l5Messages];
  return messageSets[slideIndex] || messageSets[0];
};

// Create messages for Sales slides (S1 to S5)
const getSalesMessages = (slideIndex: number, botName: string): Message[] => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  // S1 Image Conversation - Boost Team Sales
  const s1Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can i help you today?',
      time: '3:15 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'I\'m looking for something to boost team sales',
      time: '3:16 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'Try our AI Sales Agent – it automates outreach and follow-ups.',
      time: '3:17 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'Sounds good!',
      time: '3:18 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'I can book a quick 10-minute call to show you how – want me to schedule it?',
      time: '3:19 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // S2 Image Conversation - CRM Plan Upgrade
  const s2Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can I help you today',
      time: '2:30 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'I\'m already using your CRM plan',
      time: '2:31 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'Nice! You can add the AI Sales Assistant to increase conversions by 40%',
      time: '2:32 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'Really? How does it work?',
      time: '2:33 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'It identifies warm leads and automates follow-ups — no manual work',
      time: '2:34 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // S3 Image Conversation - Quote Request
  const s3Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can i help you today?',
      time: '1:45 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'Can I get a quote for 20 users?',
      time: '1:46 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'Sure! Could you share your company name?',
      time: '1:47 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'Nova Labs.',
      time: '1:48 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    // {
    //   id: 6,
    //   sender: botName,
    //   senderIcon: '👤',
    //   text: 'Thanks, Nova Labs! You\'ll receive your custom quote shortly.',
    //   time: '1:49 PM',
    //   isAgent: false,
    //   isUser: false,
    //   showStatus: false,
    // },
  ];

  // S4 Image Conversation - Trial Upgrade
  const s4Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can i help you today?',
      time: '4:18 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'My trial just ended',
      time: '4:19 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'Glad you liked it! Would you like to upgrade to unlock analytics and integrations?',
      time: '4:20 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'Yes, please.',
      time: '4:21 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'Great — I\'ll guide you through the upgrade steps.',
      time: '4:22 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // S5 Image Conversation - Sales Team Help
  const s5Messages: Message[] = [
    {
      id: 1,
      sender: 'System',
      senderIcon: 'outlet',
      text: 'Connected to AI Agent',
      time: '',
      isAgent: false,
      isSystem: true,
      showStatus: false,
    },
    {
      id: 2,
      sender: botName,
      senderIcon: '👤',
      text: 'Hey there, how can I help you today?',
      time: '5:00 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 3,
      sender: 'You',
      senderIcon: '👤',
      text: 'How can your AI help my sales team?',
      time: '5:01 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 4,
      sender: botName,
      senderIcon: '👤',
      text: 'On average, teams using our AI close deals 50% faster.',
      time: '5:02 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
    {
      id: 5,
      sender: 'You',
      senderIcon: '👤',
      text: 'That\'s impressive.',
      time: '5:03 PM',
      isAgent: false,
      isUser: true,
      showStatus: false,
    },
    {
      id: 6,
      sender: botName,
      senderIcon: '👤',
      text: 'Want a quick case study showing how it works in your industry?',
      time: '5:04 PM',
      isAgent: false,
      isUser: false,
      showStatus: false,
    },
  ];

  // Return messages based on slide index
  const messageSets = [s1Messages, s2Messages, s3Messages, s4Messages, s5Messages];
  return messageSets[slideIndex] || messageSets[0];
};

// ChatWidget Slider Component - Updated to use custom messages based on use case
const ChatWidgetSlider: React.FC<{
  botName: string;
  avatar?: string | null;
  primaryColor: string;
  useCaseId: string;
}> = ({ botName, avatar, primaryColor, useCaseId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = 5;
  
  // Mouse drag/swipe states
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number>(0);
  const dragStartY = useRef<number>(0);

  // Reset to first slide on mount
  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Mouse drag handlers - Global event listeners for better capture
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      // Only start drag if clicking on slider container or its children
      const target = e.target as HTMLElement;
      const container = containerRef.current;
      
      if (!container || !container.contains(target)) {
        return;
      }

      // Don't start drag if clicking on buttons or interactive elements
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        return;
      }

      setIsDragging(true);
      dragStartX.current = e.clientX;
      dragStartY.current = e.clientY;
      
      // Prevent text selection
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const diffX = e.clientX - dragStartX.current;
      const diffY = e.clientY - dragStartY.current;
      
      // Only process horizontal drags (ignore vertical scrolling)
      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Dragging...
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!isDragging) return;
      
      setIsDragging(false);
      const dragDistance = e.clientX - dragStartX.current;
      const dragDistanceY = Math.abs(e.clientY - dragStartY.current);
      const threshold = 50; // Minimum drag distance
      
      // Only trigger if horizontal drag is significant and more than vertical
      if (Math.abs(dragDistance) > threshold && Math.abs(dragDistance) > dragDistanceY) {
        if (dragDistance > 0) {
          // Dragged right - go to previous slide
          const prevIndex = currentIndex <= 0 ? totalSlides - 1 : currentIndex - 1;
          goToSlide(prevIndex);
        } else {
          // Dragged left - go to next slide
          const nextIndex = currentIndex >= totalSlides - 1 ? 0 : currentIndex + 1;
          goToSlide(nextIndex);
        }
      }
    };

    // Attach global listeners for better capture
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, currentIndex, totalSlides]);

  // REMOVED: Mouse wheel handler - disabled as per user request

  const goToSlide = (index: number) => {
    const validIndex = Math.max(0, Math.min(index, totalSlides - 1));
    
    setCurrentIndex(validIndex);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
  };

  // Get messages for current slide based on use case
  const currentMessages = useCaseId === 'lead-capture' 
    ? getLeadCaptureMessages(currentIndex, botName)
    : useCaseId === 'sales'
    ? getSalesMessages(currentIndex, botName)
    : getCustomerSupportMessages(currentIndex, botName);

  return (
    <div 
      ref={containerRef}
      style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '25rem', 
        margin: '0 auto',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'pan-y'
      }}
    >
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'hidden', 
        borderRadius: '8px',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: isDragging ? 'none' : 'auto' // Disable interactions while dragging
      }}>
        <div 
          key={`chatwidget-container-${currentIndex}`}
          style={{
            position: 'relative',
            width: '100%',
            opacity: 1,
            transition: isDragging ? 'none' : 'opacity 0.5s ease-in-out',
            animation: isDragging ? 'none' : 'fadeIn 0.5s ease-in-out'
          }}
        >
          <ChatWidget 
            key={`widget-${currentIndex}`}
            botName={botName}
            avatar={avatar || undefined}
            primaryColor={primaryColor}
            customMessages={currentMessages}
          />
        </div>
      </div>
      
      {/* Dots indicator */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '8px', 
        marginTop: '16px' 
      }}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToSlide(index);
            }}
            style={{
              width: currentIndex === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: currentIndex === index ? '#a855f7' : '#6b7280',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
              outline: 'none',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Image Slider Component (keep existing)
const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Reset to first image when images change
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  // Start/stop slider based on hover state
  useEffect(() => {
    if (images.length <= 1) return;

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Only start auto-slide if not hovered
    if (!isHovered) {
      // Auto-slide every 3 seconds
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [images, isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Reset the interval when manually changing slides (only if not hovered)
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Clear interval on hover
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Resume interval when mouse leaves
    if (images.length > 1 && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
  };

  if (images.length === 0) {
    return (
      <img
        className="img-fluid"
        src="/assets/img/brief/brief-v2-3.webp"
        style={{ maxWidth: "25rem" }}
        alt="Preview"
        width={500}
      />
    );
  }

  return (
    <div 
      style={{ position: 'relative', width: '100%', maxWidth: '25rem', margin: '0 auto' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'hidden', 
        borderRadius: '8px',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          opacity: 1,
          transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width={500}
            height={600}
            className="img-fluid"
            style={{ 
              width: '100%', 
              height: 'auto',
              display: 'block',
              maxWidth: '25rem'
            }}
          />
        </div>
      </div>
      {/* Dots indicator */}
      {images.length > 1 && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '8px', 
          marginTop: '16px' 
        }}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: currentIndex === index ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: currentIndex === index ? '#a855f7' : '#6b7280',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: 0,
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};


export const UseCaseStep = React.memo<UseCaseStepProps>(
  ({ data, onUpdate, errors, footerOptions, onValidationChange, onValidate }) => {
    const [selectedUseCase, setSelectedUseCase] = useState<string>("");
    const [validationError, setValidationError] = useState<string>("");
    const [hasAttemptedNext, setHasAttemptedNext] = useState<boolean>(false);

    const handleUseCaseSelect = (useCaseId: string) => {
      setSelectedUseCase(useCaseId);
      
      // Update wizard data with all benefits of selected use case
      const selectedOption = USE_CASE_OPTIONS.find(opt => opt.id === useCaseId);
      if (selectedOption) {
        const useCases = selectedOption.benefits.map(benefit => `${useCaseId}:${benefit.id}`);
        onUpdate({ useCases });
      }

      // Clear validation error when user makes a selection
      if (hasAttemptedNext) {
        setValidationError("");
      }
    };

    // Validation function
    const validateSelection = () => {
      setHasAttemptedNext(true);
      
      if (!selectedUseCase || selectedUseCase.trim().length === 0) {
        setValidationError("Please select a use case to continue.");
        return false;
      }
      
      setValidationError("");
      return true;
    };

    // Notify parent component about validation status
    useEffect(() => {
      const isValid = selectedUseCase && selectedUseCase.trim().length > 0;
      if (onValidationChange) {
        onValidationChange(true); // Always allow clicking Next
      }
    }, [selectedUseCase, onValidationChange]);

    // Pass validation function to parent component
    useEffect(() => {
      if (onValidate) {
        onValidate(validateSelection);
      }
    }, [onValidate, selectedUseCase]);

    // Create custom onNext handler
    const handleNext = () => {
      if (!validateSelection()) {
        return;
      }
      footerOptions.onNext();
    };

    const modifiedFooterOptions = {
      ...footerOptions,
      onNext: handleNext,
    };

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* Left Panel */}
            <div className="col-lg-6 chatbot-left-content-wrapper">
              <InViewAnimate animClass="fade-up-200" className="chatbot-content-wrapper pt-5" style={{ paddingBottom: '6rem' }}>
                <div className="chatbot-content">
                  <div className="mb-4">
                    <div className="stepText my-2">Step 3 of 6</div>
                    <h2 className="h4 fw-bold text-white">
                      How should your "{data.botname || "AI Agent"}" supercharge your business?
                    </h2>
                  </div>

                  <div className="mb-4">
                    {USE_CASE_OPTIONS.map((useCase, index) => {
                      const isSelected = selectedUseCase === useCase.id;
                      const hasSelection = selectedUseCase !== "";
                      const shouldShowFull = !hasSelection || isSelected;
                      return (
                        <div 
                          key={useCase.id} 
                          className={`mb-3 pt-3 pb-2 px-3 rounded-4    ${
                            isSelected ? "border-purple-500  border-2" : "border-gray-700 bg-gray-900/30"
                          }`}
                          style={{ cursor: "pointer",border:"1px solid #221f33", 
                            backgroundColor: isSelected ? "#7a64ea21" : "transparent",
                            borderColor: isSelected ? "#7a64ea" : "#221f33"
                            
                          }}
                          onClick={() => handleUseCaseSelect(useCase.id)}
                        >
                          <div className={`d-flex align-items-center ${shouldShowFull ? "mb-3" : "mb-0"}`}>
                            <div className="me-3" style={{ marginTop: shouldShowFull ? "4px" : "0" }}>
                              <div
                                className={`rounded-circle d-flex align-items-center justify-content-center ${
                                  isSelected ? "bg-purple-500 border-2 border-white" : "border border-gray-600"
                                }`}
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  minWidth: "16px",
                                }}
                              >
                                {isSelected && (
                                  <Check
                                    size={16}
                                    className="text-white"
                                  />
                                )}
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h3 className={`h5 fw-semibold text-white ${shouldShowFull ? "mb-2" : "mb-0"}`}>
                                {index + 1}. {useCase.title}
                              </h3>
                              {shouldShowFull && (
                                <>
                                  <p className="mb-2 greenNeon">{useCase.goal}</p>
                                  
                                  <div>
                                    {useCase.benefits.map((benefit) => (
                                      <div key={benefit.id} className="mb-2">
                                        <div className="fw-semibold mb-1 text_primary">
                                          {benefit.id.toUpperCase()}. {benefit.title}
                                        </div>
                                        <div className="text-white small">
                                          {benefit.description}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Validation Error Message */}
                  {validationError && hasAttemptedNext && (
                    <div>
                      <p className="text-danger">{validationError}</p>
                    </div>
                  )}
                </div>
              </InViewAnimate>

              <div className="chatbot-content-wrapper footer">
                <WizardNavigation2 {...modifiedFooterOptions} />
              </div>
            </div>

            {/* Right Panel (Preview) */}
            <div className="col-lg-6 step2ImgMain d-flex relative align-items-center justify-content-center" style={{ backgroundColor: '#02000e', height: 'calc(100vh - 68px)' }}>
              {selectedUseCase === "customer-support" ? (
                <ChatWidgetSlider 
                  botName={data.botname || 'Sarah'}
                  avatar={data.appearance?.avatar || null}
                  primaryColor={data.appearance?.primaryColor || '#4a90e2'}
                  useCaseId="customer-support"
                />
              ) : selectedUseCase === "lead-capture" ? (
                <ChatWidgetSlider 
                  botName={data.botname || 'Sarah'}
                  avatar={data.appearance?.avatar || null}
                  primaryColor={data.appearance?.primaryColor || '#4a90e2'}
                  useCaseId="lead-capture"
                />
              ) : selectedUseCase === "sales" ? (
                <ChatWidgetSlider 
                  botName={data.botname || 'Sarah'}
                  avatar={data.appearance?.avatar || null}
                  primaryColor={data.appearance?.primaryColor || '#4a90e2'}
                  useCaseId="sales"
                />
              ) : selectedUseCase ? (
                <ImageSlider images={getImagesForUseCase(selectedUseCase)} />
              ) : (
                <img
                  className="img-fluid"
                  src="/assets/img/brief/brief-v2-3.webp"
                  style={{ maxWidth: "25rem" }}
                  alt="Preview"
                  width={500}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

UseCaseStep.displayName = "UseCaseStep";

