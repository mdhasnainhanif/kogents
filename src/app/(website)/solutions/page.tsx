import AiAgentSection from "@/components/solutions/csr/AiAgentSection"
import AiBanner from "@/components/solutions/ssr/AiBanner"
import React from 'react'
import Counter from "@/components/CustomerServiceAIAgents/Counter"
import CaseCards from "@/components/cases/CasesCards"
import CustomerServiceCard from "@/components/CustomerServiceAIAgents/CustomerServiceCard"
import ClientTestimonial from "@/components/CustomerServiceAIAgents/ClientTestimonial"
import CustomerBenefitSection from "@/components/CustomerServiceAIAgents/CustomerBenefitSection"
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart AI Agentic Solutions for Faster Growth | Kogents.ai',
  description:'Start powering your business with Kogents Agentic AI Solutions. Designed to drive productivity, & sustainable growth. Start Transforming Today.',
  keywords: [
    'AI Solutions',
    'AI Agents',
    'Business Automation',
    'Enterprise AI',
    'AI Integration',
    'Workflow Automation',
    'AI Services'
  ],

  alternates: {
    canonical: 'https://kogents.ai/solutions/',
    languages: {
      'en-US': 'https://kogents.ai/solutions/',
    },
  },

  openGraph: {
    title: 'Smart AI Agentic Solutions for Faster Growth | Kogents.ai',
    description:
      'Start powering your business with Kogents Agentic AI Solutions. Designed to drive productivity, & sustainable growth. Start Transforming Today.',
    url: 'https://kogents.ai/solutions/', 
    type: 'website',
    images: [
      {
        url: 'https://www.kogents.ai/assets/img/logo-new.svg', 
        width: 1200,
        height: 630,
        alt: 'Team Kogents AI working together',
      },
    ],
    siteName: 'Kogents AI',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart AI Agentic Solutions for Faster Growth | Kogents.ai',
    description: 'Start powering your business with Kogents Agentic AI Solutions. Designed to drive productivity, & sustainable growth. Start Transforming Today.',
    images: ['https://www.kogents.ai/assets/img/logo-new.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Structured data for solutions page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Agentic Solutions",
  "description": "Start powering your business with Kogents Agentic AI Solutions. Designed to drive productivity, & sustainable growth. Start Transforming Today.",
  "url": "https://kogents.ai/solutions/",
  "provider": {
    "@type": "Organization",
    "name": "Kogents AI",
    "url": "https://kogents.ai"
  },
  "serviceType": "AI Solutions",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Agent Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Customer Service AI Agent"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Healthcare AI Agent"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Education AI Agent"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HR AI Agent"
        }
      }
    ]
  }
};

const SolutionsPageClient = dynamic(() => import('./SolutionsPageClient'))

const Page = () => {
  const cardsData = [
    {
      category: "Financial Services & Banking",
      title: "How AI Is Making Banking in Saudi Arabia Faster, Smarter & Safer",
      link: "",
      image: "/assets/img/rfp-ai-agent.webp",
    },
    {
      category: "General Problem Solvers",
      title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
      link: "",
      image: "/assets/img/rfp-ai-agent.webp",
    },
    {
      category: "General Problem Solvers",
      title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
      link: "",
      image: "/assets/img/rfp-ai-agent.webp",
    },
    {
      category: "General Problem Solvers",
      title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
      link: "",
      image: "/assets/img/rfp-ai-agent.webp",
    },
    {
      category: "General Problem Solvers",
      title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
      link: "",
      image: "/assets/img/rfp-ai-agent.webp",
    },
    {
      category: "General Problem Solvers",
      title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
      link: "",
      image: "/assets/img/rfp-ai-agent.webp",
    },
    {
      category: "General Problem Solvers",
      title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
      link: "",
      image: "/assets/img/rfp-ai-agent.webp",
    },
    {
      category: "General Problem Solvers",
      title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
      link: "",
      image: "/assets/img/rfp-ai-agent.webp",
    },
    {
      category: "General Problem Solvers",
      title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
      link: "",
      image: "/assets/img/rfp-ai-agent.webp",
    },
  ];

  return (
    <>
      <SolutionsPageClient />
      <AiBanner />
      <Counter
        data={{
          responseTime: 85,
          supportTickets: 49,
          resolutionRate: 73,
          roi: 51,
        }}
        labels={{
          responseTime: "Hours Saved Weekly",
          supportTickets: "Faster Decision Cycles",
          resolutionRate: "Increase in Team Productivity",
          roi: "Improved Operational Scalability",
        }}
        units={{
          responseTime: "+",
          supportTickets: "%",
          resolutionRate: "%",
          roi: "%",
        }}
        title=""
        subtitle=""
      />
      <AiAgentSection />
      <CaseCards
        tag="Case Studies"
        heading="Case Studies"
        cardColClass="col-md-4 col-12"
        cards={cardsData}
      />
      <CustomerServiceCard
        tag="Why Kogents"
        heading="Why Enterprises Choose Kogents for Trusted AI Solutions"
        description=""
        differentiators={[
          {
            id: 1,
            icon: "/assets/img/ai-agent-dashboard/5.svg",
            title: "Seamless Integration ",
            description:
              "You can easily integrate Kogents AI agents with your current technology stack. Our solutions work with your CRM, helpdesk, ERP, and custom systems without disrupting your workflows.",
          },
          {
            id: 2,
            icon: "/assets/img/ai-agent-dashboard/6.svg",
            title: "Enterprise-Grade Security",
            description:
              "Our AI agent solutions are built with security at their core. All data is encrypted in transit and at rest, with comprehensive access controls and audit logs.",
          },
          {
            id: 3,
            icon: "/assets/img/ai-agent-dashboard/7.svg",
            title: "Continuous Learning",
            description:
              "Our AI agents learn and get better with each chat. They’re always leveling up their responses with smart machine learning algorithms, spotting new trends, and adjusting to what businesses need on the fly.",
          },
          {
            id: 4,
            icon: "/assets/img/ai-agent-dashboard/8.svg",
            title: "Rapid Deployment",
            description:
              "Start seeing results in days rather than months. Our team handles everything from setup and integration to employee training, allowing you to focus on the important work.",
          },
        ]}
      />
      <ClientTestimonial
        tag="Reviews"
        heading="Client Testimonails"
        description=""
        testimonials={[
          {
            id: 1,
            quote:
              "We've been using the healthcare AI agent for about four months now, and the results are incredible. Our patient response times have dropped dramatically, and patients actually appreciate how fast and accurate the medical information is. The system also frees up our medical staff to focus on complex patient care instead of answering the same appointment and billing questions over and over again. It feels like we added an extra team member without the cost, and the HIPAA compliance gives us peace of mind.",
            avatar: "DR",
            name: "Dr. Sarah Mitchell",
            title: "Medical Director, City General Hospital",
            rating: 5,
          },
          {
            id: 2,
            quote:
              "I was skeptical at first, but the personalized patient support feature blew me away. It remembers past interactions and makes every conversation feel seamless while maintaining complete patient privacy.",
            avatar: "JR",
            name: "Jennifer Rodriguez",
            title: "Practice Manager, Family Care Clinic",
            rating: 5,
          },
          {
            id: 3,
            quote:
              "The physician-in-the-loop escalation is a lifesaver. Our patients never feel stuck talking to a bot — the system knows exactly when to bring in a real healthcare provider for medical decisions.",
            avatar: "AH",
            name: "Dr. Amir Hassan",
            title: "Cardiologist, Heart & Vascular Center",
            rating: 5,
          },
          {
            id: 4,
            quote:
              "What stood out for me was how simple the setup was with our existing EHR system. Within just a few days, the AI agent was already live and integrated with Epic. Our staff no longer waste time on routine administrative tasks because everything is automated. After a month of using it, I could already see a 60% improvement in patient satisfaction, and the cost savings compared to hiring additional administrative staff are significant.",
            avatar: "SL",
            name: "Dr. Sophia Lee",
            title: "Chief Medical Officer, Regional Medical Center",
            rating: 5,
          },
        ]}
        statistics={[
          {
            id: 1,
            icon: "⭐⭐⭐",
            value: "85%",
            label: "Increase in Patient Satisfaction",
          },
          {
            id: 2,
            icon: "⚙️⏰",
            value: "65%",
            label: "Reduction in Administrative Workload",
          },
        ]}
      />
      <div style={{ marginBottom: "80px" }}>
        <CustomerBenefitSection
          buttonText="Find Your AI Solution"
          leftColumn={{
            tag: "Start Now",
            title: "See AI Agent Solutions in Action",
            subtitle: "Experience how our AI agents can transform your specific business processes with a personalized demonstration.",
            appStoreImage: "/assets/img/app-section/6.png",
            googlePlayImage: "/assets/img/app-section/7.png",
          }}
          rightColumn={{
            appPreviewImage: "/assets/img/img-new.webp",
            qrCodeImage: "/assets/img/app-section/5.png",
            qrCodeText: "Scan to Download",
          }}
          backgroundImage="/assets/img/bc/video-bg.webp"
        />
      </div >
    </>
  )
}
export default Page
