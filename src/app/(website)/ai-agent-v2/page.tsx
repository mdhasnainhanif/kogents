export const dynamic = "force-static";

import HeroSection from "@/components/ai-agent/HeroSection";
import AIAgentSection from "@/components/ai-agent-v2/AIAgentSection";
import BenefitsNewSection from "@/components/ai-agent/BenefitsNewSection";
import WorkflowsSection from "@/components/homeCopy/ssr/WorkflowsSection";
import FAQSection from "@/components/solutions/csr/FAQSection";
import AiAgentSliderV2 from "@/components/ai-agent-v2/AiAgentSliderV2";
import BenefitsSection from "@/components/about/csr/BenefitsSection";

import KogentBenefits from "@/components/homeCopy/ssr/KogentBenefits";
import type { Metadata } from "next";
// import ScrollLock from '@/components/ai-agent/ScrollLock';
import Counter from "@/components/CustomerServiceAIAgents/Counter";
import Product from "@/components/ai-agent-v2/Product";
import FaqWithImage from "@/components/CustomerServiceAIAgents/FaqWithImage";
import BlogList from "@/components/blog/BlogList";
import AwardSection from "@/components/ai-agent-v2/AwardSection";
import CustomerBenefitSection from "@/components/CustomerServiceAIAgents/CustomerBenefitSection";
import ClientTestimonial from "@/components/CustomerServiceAIAgents/ClientTestimonial";
import AgentOSTwo from "@/components/ai-agent-v2/AgentOSTwo";
import AgentCta from "@/components/ai-agent-v2/AgentCta";
const BASE = "https://kogents.ai";

export const metadata: Metadata = {
  title: "Kogents Ai Agent | Top Agentic AI Automation & Integration ",
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
    canonical: "https://kogents.ai/ai-agent",
    languages: {
      "en-US": "https://kogents.ai/ai-agent",
    },
  },

  openGraph: {
    title: "Kogents Ai Agent | Top Agentic AI Automation & Integration ",
    description:
      "Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows. Email info@kogents.ai,  Phone +12672489454.",
    url: "https://www.kogents.ai/ai-agent",
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
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative w-full min-h-screen">
        {/* Page content */}
        <div className="relative z-10">
          <HeroSection
            badge="Meta Business Partner"
            title="Engage, Converse and Convert your visitors using AI Chatbot Agent"
            description="kogent's Chatbot Maker & Live Chat for Website, WhatsApp, Facebook, Instagram & Telegram"
            buttonText="Get Started with <span class='star'>✦</span><span class='ai fw-bold'>AI</span><span class='star'>✦</span> Now"
            buttonLink="/chatbot/briefv2"
            mainImage="/assets/img/ai-agent/erp-ai-agent.svg"
            mainImageAlt="AI Agent Platform"
            raysColor="#5D51AF"
            badges={[
              { text: "Generate 10x more leads" },
              { text: "Solve 80% more queries" },
              { text: "Engage 70% more visitors" },
              { text: "Earn 90% more revenue" },
            ]}
          />
          <Counter
            data={{
              responseTime: 193,
              supportTickets: 60,
              resolutionRate: 230,
              roi: 150,
            }}
            labels={{
              responseTime: "Countries Served",
              supportTickets: "Total Customers",
              resolutionRate: "Messages Consumed",
              roi: "Partners",
            }}
            units={{
              responseTime: "+",
              supportTickets: "k+",
              resolutionRate: "Mn+",
              roi: "+",
            }}
            title="Powerful AI Agent Performance"
            subtitle=""
            showHeading={true}
            isShowBadges={true}
          />
          {/* <section className="cv">
            <Product />
          </section> */}
          <AIAgentSection />
          <section className="cv">
            <BenefitsNewSection />
          </section>
          <FaqWithImage
            tag="One Platform"
            heading="One platform with all the features you want from your Chatbot Maker"
            description={`From customer support to AI conversations, Kogents covers every possible
aspect of being the most ‘complete’ chatbot platform.`}
            faqItems={[
              {
                id: 1,
                q: "Omnichannel Customer Support",
                a: "Connect with your customers on every platform they reach out to you on.",
                image:
                  "/assets/img/ai-agent-v2/faq1/omnichannel-customer-support.webp",
              },
              {
                id: 2,
                q: "Marketing Automations",
                a: "Broadcast messages or schedule drip campaigns with a single click.",
                image:
                  "/assets/img/ai-agent-v2/faq1/marketing-automations.webp",
              },
              {
                id: 3,
                q: "Generate More Sales",
                a: "Engage a wider audience with instant communication to convert leads easily.",
                image:
                  "/assets/img/ai-agent-v2/faq1/generate-more-sales.webp",
              },
              {
                id: 4,
                q: "Better E-Commerce",
                a: "Send brochures, catalogs, and discount offers directly to your customers through WhatsApp chatbot.",
                image:
                  "/assets/img/ai-agent-v2/faq1/better-ecommerce.webp",
              },
              {
                id: 5,
                q: "Live Chat",
                a: "Ensure your services are available to your customers 24x7 through Live Chat integration.",
                image:
                  "/assets/img/ai-agent-v2/faq1/live-chat.webp",
              },
              {
                id: 6,
                q: "Unified Inbox",
                a: "Receive messages and queries all in one smart inbox for better lead tracking.",
                image:
                  "/assets/img/ai-agent-v2/faq1/unified-inbox.webp",
              },
              {
                id: 7,
                q: "Endless Integrations",
                a: "Streamline data through your desired CRMs, Payment Gateways, or other software.",
                image:
                  "/assets/img/ai-agent-v2/faq1/endless-integrations.webp",
              },
            ]}
            rightImage="/assets/img/faq.png"
            rightImageAlt="Healthcare AI Implementation Process"
          />
          <AgentCta />
          <FaqWithImage
            tag="One Platform"
            heading="One platform with all the features you want from your Chatbot Maker"
            description={`From customer support to AI conversations, Kogents covers every possible
aspect of being the most ‘complete’ chatbot platform.`}
            faqItems={[
              {
                id: 1,
                q: "Onboarding Support and Guidance",
                a: "From the moment you contact us, you will get a dedicated support agent to help you throughout your chatbot journey.",
                image:
                  "/assets/img/ai-agent-v2/faq2/onboarding-support-and-guidance.webp",
              },
              {
                id: 2,
                q: "No-code Chatflow Builder",
                a: "Easily build your own chatflow without any coding requirements.",
                image:
                  "/assets/img/ai-agent-v2/faq2/no-code-chatflow-builder.webp",
              },
              {
                id: 3,
                q: "Zero Setup Fee",
                a: "Start creating your own chatbot with zero setup fee and test it with a free forever plan.",
                image:
                  "/assets/img/ai-agent-v2/faq2/zero-setup-fee.webp",
              },
              {
                id: 4,
                q: "Multilingual Chatbot",
                a: "Reach a global audience and talk to them in their native language with multilingual support.",
                image:
                  "/assets/img/ai-agent-v2/faq2/multilingual-chatbot.webp",
              },
              {
                id: 5,
                q: "Thorough AI Capabilities",
                a: "Add custom LLMs, create desired AI persona, and much more with BotPenguin’s AI chatbot.",
                image:
                  "/assets/img/ai-agent-v2/faq2/thorough-ai-capabilities.webp",
              },
              {
                id: 6,
                q: "Advanced Analytics",
                a: "Ensure you keep track of all the leads and business value generated with an advanced analytical dashboard.",
                image:
                  "/assets/img/ai-agent-v2/faq2/advanced-analytics.webp",
              },
            ]}
            rightImage="/assets/img/faq.png"
            rightImageAlt="Healthcare AI Implementation Process"
          />
          <AwardSection />
          <div className="mb-16 mt-5">
            <CustomerBenefitSection
              buttonText="Plan with AI Now"
              leftColumn={{
                tag: "100% Data Security",
                title: "Your Privacy, Our Priority",
                subtitle:
                  "At BotPenguin, our highest priority is to provide maximum data security. We do not store any of your information ensuring all your data remains secure at all times.",
                appStoreImage: "/assets/img/app-section/6.png",
                googlePlayImage: "/assets/img/app-section/7.png",
              }}
              rightColumn={{
                appPreviewImage: "/assets/img/img-new.webp",
                qrCodeImage: "/assets/img/app-section/5.png",
                qrCodeText: "Scan to Download",
              }}
              backgroundImage="/assets/img/bc/video-bg.webp"
              className="privacySection"
            />
          </div>

          <div
            className="bg-center bg-no-repeat bg-cover pb-0 newBgTheme"
            id="caseStudySection"
          >
            <WorkflowsSection />
            <section className="cv">
              <AiAgentSliderV2 className="AiAgentNewSlider" />
            </section>
            <BenefitsSection
              className="benefitSectionNew"
              tag="Solutions"
              title="Customize your AI Chatbot with Generative AI and Custom LLMs"
              description="Infuse ChatGPT4o’s LLM-powered magic to craft AI Chatbot Avatars that match your brand identity."
              imageSrc="/assets/img/members.png"
              imageAlt="Custom alt text"
              cards={[
                {
                  title:
                    "Give chatbot your desired personality by adding brand tone, voice, and answer length",
                  description: "",
                },
                {
                  title: "Offer multi-language support for global reach",
                  description: "",
                },
                {
                  title:
                    "Engage users with contextual conversations based on user interactions",
                  description: "",
                },
                {
                  title:
                    "Train AI chatbot on multiple data sources - Docs, PDFs, Google Sheets, PPTs, Excel, and many more",
                  description: "",
                },
              ]}
            />
            <AgentOSTwo />
            {/* <KogentBenefits /> */}
            <section className="cv">
              <FAQSection showLoadMore={true} />
            </section>
            <ClientTestimonial />
            <BlogList />
          </div>
        </div>
      </div>
    </>
  );
}
