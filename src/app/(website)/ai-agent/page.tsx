export const dynamic = "force-static";

import HeroSection from '@/components/ai-agent/HeroSection';
import ProductSection from '@/components/homeCopy/csr/ProductSection';
import AIAgentSection from '@/components/homeCopy/ssr/AIAgentSection';
import BenefitsSection from '@/components/homeCopy/csr/BenefitsSection';
import WorkflowsSection from '@/components/homeCopy/ssr/WorkflowsSection';
import FAQSection from '@/components/solutions/csr/FAQSection';
import AIAgentSlider from '@/components/homeCopy/csr/AIAgentSlider';
import AgentOS from '@/components/homeCopy/ssr/AgentOS';
import KogentBenefits from '@/components/homeCopy/ssr/KogentBenefits';
import type { Metadata } from 'next';
import ScrollLock from '@/components/ai-agent/ScrollLock';

const BASE = "https://kogents.ai";

export const metadata: Metadata = {
  title: 'Kogents Ai Agent | Top Agentic AI Automation & Integration ',
  description:
    'Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows. Email info@kogents.ai,  Phone +12672489454.',
  keywords: [
    'AI Agent',
    'Intelligent Automation',
    'AI Integration',
    'Healthcare AI',
    'Education AI',
    'Enterprise AI',
    'Workflow Automation',
    'AI Solutions'
  ],

  alternates: {
    canonical: "https://kogents.ai/ai-agent",
    languages: {
      "en-US": "https://kogents.ai/ai-agent",
    },
  },

  openGraph: {
    title: 'Kogents Ai Agent | Top Agentic AI Automation & Integration ',
    description:
      'Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows. Email info@kogents.ai,  Phone +12672489454.',
    url: "https://www.kogents.ai/ai-agent",
    type: 'website',
    siteName: 'Kogents AI',
    locale: 'en_US',
    images: [
      {
        url: `${BASE}/assets/img/logo-new.svg`,
        width: 1200,
        height: 630,
        alt: 'Team Kogents AI working together',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kogents Ai Agent | Top Agentic AI Automation & Integration',
    description: 'Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows. Email info@kogents.ai,  Phone +12672489454.',
    images: [`${BASE}/assets/img/logo-new.svg`],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kogents AI",
  "url": BASE,
  "logo": `${BASE}/assets/img/kogents-logo.svg`,
  "description": "Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows.",
  "foundingDate": "2024",
  "sameAs": [
    "https://www.linkedin.com/company/kogents-ai",
    "https://twitter.com/kogentsai"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": `${BASE}/contact-us`,
    "email": "info@kogents.ai",
    "telephone": "+12672489454"
  },
  "offers": {
    "@type": "Offer",
    "name": "AI Agent Solutions",
    "description": "Intelligent AI agents for healthcare, education, and enterprise automation",
    "category": "AI Services"
  }
};

export default function HomePage() {
  const counterData = [
    {
      id: 1,
      target: 93,
      title: "Smart Tools. Smarter Outcomes",
      description: "Kogents AI Agents do more than reply, they act.",
      className: "counter1"
    },
    {
      id: 2,
      target: 100,
      title: "Reliable. Adaptive. Always On",
      description: "All agents are continuously learning from conversations.",
      className: "counter2"
    },
    {
      id: 3,
      target: 85,
      title: "Autonomous Doesn't Mean Isolated",
      description: "Think of it as a mesh network of AI, tailored to your business.",
      className: "counter3"
    }
  ];
  
  return (
    <>
    <ScrollLock />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative w-full min-h-screen">
        {/* Page content */}
        <div className="relative z-10">
          <HeroSection />
          <section className="cv">
            <ProductSection />
          </section>
          <AIAgentSection />
          <div
            className="bg-center bg-no-repeat bg-cover pb-0 newBgTheme"
            id="caseStudySection"
          >
            
            {/* <section className="cv">
              <BenefitsSection counterData={counterData} />
            </section> */}
            <WorkflowsSection />
            <section className="cv">
              <AIAgentSlider />
            </section>
            {/* <AgentOS /> */}
            {/* <KogentBenefits /> */}
            <section className="cv">
              <FAQSection showLoadMore={true} />
            </section>
            {/* <BlogList /> */}
          </div>
        </div>
      </div>
    </>
  );
}
