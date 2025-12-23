// export const dynamic = "force-dynamic";

import HeroSection from "../../components/home/ssr/HeroSection";
import AIAgentSection from "../../components/home/ssr/AIAgentSection";
import BenefitsSection from "../../components/home/ssr/BenefitsSection";
import WorkflowsSection from "../../components/home/ssr/WorkflowsSection";
import AgentOS from "@/components/home/ssr/AgentOS";
import KogentBenefits from "@/components/home/ssr/KogentBenefits";
import type { Metadata } from "next";
import DeferredAfterLoad from "@/components/client-only/DeferredAfterLoad";
import DeferredOnVisible from "@/components/client-only/DeferredOnVisible";
import AIAgentSliderClient from "@/components/client-only/AIAgentSliderClient";
import BlogListClient from "@/components/client-only/BlogListClient";
import FAQSectionClient from "@/components/client-only/FAQSectionClient";
import PerformanceOptimizerClient from "@/components/client-only/PerformanceOptimizerClient";
import ProductSectionClient from "@/components/client-only/ProductSectionClient";
import SummaryClient from "@/components/client-only/SummaryClient";
import TechnologiesSliderClient from "@/components/client-only/TechnologiesSliderClient";

const BASE = "https://kogents.ai";

export const metadata: Metadata = {
  title: "Kogents AI Agent | Top Agentic AI Automation & Integration",
  description:
    "Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows. Email info@kogents.ai,  Phone +12672489454.",
  keywords: [
    "AI Agent",
    "Intelligent Automation",
    "AI Integration",
    "Healthcare AI",
    "Education AI",
    "Enterprise AI",
    "Workflow Automation",
    "AI Solutions",
  ],

  alternates: {
    canonical: BASE,
    languages: {
      "en-US": BASE,
    },
  },

  openGraph: {
    title: "Kogents Ai Agent | Top Agentic AI Automation & Integration ",
    description:
      "Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows. Email info@kogents.ai,  Phone +12672489454.",
    url: "https://www.kogents.ai",
    type: "website",
    siteName: "Kogents AI",
    locale: "en_US",
    images: [
      {
        url: `${BASE}/assets/img/logo-new.svg`,
        width: 1200,
        height: 630,
        alt: "Team Kogents AI working together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kogents Ai Agent | Top Agentic AI Automation & Integration",
    description:
      "Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows. Email info@kogents.ai,  Phone +12672489454.",
    images: [`${BASE}/assets/img/logo-new.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kogents AI",
  url: BASE,
  logo: `${BASE}/assets/img/kogents-logo.svg`,
  description:
    "Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows.",
  foundingDate: "2024",
  sameAs: [
    "https://www.linkedin.com/company/kogents-ai",
    "https://twitter.com/kogentsai",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: `${BASE}/contact-us`,
    email: "info@kogents.ai",
    telephone: "+12672489454",
  },
  offers: {
    "@type": "Offer",
    name: "AI Agent Solutions",
    description:
      "Intelligent AI agents for healthcare, education, and enterprise automation",
    category: "AI Services",
  },
};

export default function HomePage() {
  console.log("This pages is Rendered on Server Side...");

  const counterData = [
    {
      id: 1, 
      target: 93,
      title: "Smart Tools. Smarter Outcomes",
      description: "Kogents AI Agents do more than reply, they act.",
      className: "counter1",
    },
    {
      id: 2,
      target: 100,
      title: "Reliable. Adaptive. Always On",
      description: "All agents are continuously learning from conversations.",
      className: "counter2",
    },
    {
      id: 3,
      target: 85,
      title: "Autonomous Doesn't Mean Isolated",
      description:
        "Think of it as a mesh network of AI, tailored to your business.",
      className: "counter3",
    },
  ];

  const summaryData = {
    tag: "Summary",
    text: "Kogents AI is an automation platform that deploys intelligent agents to handle operations and workflows with human-level precision."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Defer non-critical client work for mobile */} 
      <DeferredAfterLoad delayMs={1500}>
        <PerformanceOptimizerClient />
      </DeferredAfterLoad>
      <HeroSection />
      <section className="cv">
        <DeferredOnVisible>
          <ProductSectionClient />
        </DeferredOnVisible>
      </section>
      <AIAgentSection />
      <div
        className="bg-center bg-no-repeat bg-cover pb-0 newBgTheme"
        id="caseStudySection"
      >
        <section className="cv">
          <BenefitsSection counterData={counterData} />
        </section>
        <section className="cv">
          <WorkflowsSection />
        </section>
        <section className="cv">
          <DeferredOnVisible>
            <AIAgentSliderClient />
          </DeferredOnVisible>
        </section>
        <section className="cv">
          <AgentOS />
        </section>
        <section className="cv">
          <DeferredOnVisible>
            <TechnologiesSliderClient />
          </DeferredOnVisible>
        </section>
        <section className="cv">
          <KogentBenefits />
        </section>
        <section className="cv">
          <DeferredOnVisible>
            <SummaryClient data={summaryData} />
          </DeferredOnVisible>
        </section>
        <section className="cv">
          <DeferredOnVisible>
            <FAQSectionClient showLoadMore={true} />
          </DeferredOnVisible>
        </section>
        <section className="cv">
          <DeferredOnVisible>
            <BlogListClient />
          </DeferredOnVisible>
        </section>
      </div>
    </>
  );
}
