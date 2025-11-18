import Banner from "@/components/ai-whatsapp-agent/Banner";
import AwardSection from "@/components/CustomerServiceAIAgents/AwardSection";
import BrandLogoSlider from "@/components/CustomerServiceAIAgents/BrandLogoSlider";
import ClientTestimonial from "@/components/CustomerServiceAIAgents/ClientTestimonial";
import Counter from "@/components/CustomerServiceAIAgents/Counter";
import CustomerBenefitSection from "@/components/CustomerServiceAIAgents/CustomerBenefitSection";
import CustomerCards from "@/components/CustomerServiceAIAgents/CustomerCards";
import CustomerGrowthCards from "@/components/CustomerServiceAIAgents/CustomerGrowthCards";
import CustomerServiceCard from "@/components/CustomerServiceAIAgents/CustomerServiceCard";
import CustomerServiceFaqSection from "@/components/CustomerServiceAIAgents/CustomerServiceFaqSection";
import FaqWithImage from "@/components/CustomerServiceAIAgents/FaqWithImage";
import TechnologiesSlider from "@/components/CustomerServiceAIAgents/TechnologiesSlider";
import SummarySolution from "@/components/CustomerServiceAIAgents/SummarySolution";
import BLogList from "@/components/blog/BlogList";

import React from "react";
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Genius Customer Service AI Agent to Boost CX | Kogents AI',
  description:
    'Intelligent customer service AI agent boosts efficiency, saves time, and improves support. Start improving today.',
  keywords: [],

  alternates: {
    canonical: 'https://kogents.ai/solutions/customer-service-ai-agent',
    languages: {
      'en-US': 'https://kogents.ai/solutions/customer-service-ai-agent',
    },
  },

  openGraph: {
    title: 'Customer Service AI Agent for Support Teams | Kogents',
    description:
      'Cut response delays and reduce workload. Our customer service AI agent gives companies reliable automation with measurable ROI.',
    url: 'https://www.kogents.ai/solutions/customer-service-ai-agent', 
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
}

const page = () => {
  const breadcrumbItems = [
    { label: 'Solutions', href: '/solutions' },
    { label: 'Customer Service AI Agent', active: true }
  ];

  const pageData = {
    banner: {
      tag: "Customer Service AI Agent",
      title: "Customer Service AI Agent for Smarter 24/7 Support",
      button: {
        text: "Get AI Support Now",
        link: "/request-demo",
        iconSrc: "/assets/img/icons/arrow-right.svg",
        modalTarget: "#welcomeModal",
      },
      description:
        "Long wait times and inconsistent service frustrate customers and drain support teams. \n At Kogents, our customer service AI agent is designed to address these challenges with precision and scalability. By combining natural language processing (NLP) and conversational AI, it delivers accurate answers and personalized support across channels. \n Smooth CRM integration ensures that every interaction is informed by customer history, reducing response times and increasing satisfaction. The result is a system that works around the clock, improving service efficiency while allowing human agents to focus on more complex issues.",
      image: {
        src: "/assets/img/customer-service-ai-agents/banner.webp",
        alt: "Customer Service AI Agents",
        width: 800,
        height: 681,
        className: "mx-4",
      },
    },
    summary: {
      tag: "Summary",
      text: "Kogents AI empowers businesses with intelligent automation that transforms customer service into scalable, secure, and data-driven experiences."
  }
  };
  return (
    <div>
      {pageData.banner && <Banner data={pageData.banner} breadcrumbItems={breadcrumbItems} />}
      <Counter
        data={{
          responseTime: 40,
          supportTickets: 65,
          resolutionRate: 92,
          roi: 3.5,
        }}
        labels={{
          responseTime: "Faster response time",
          supportTickets: "Fewer support tickets",
          resolutionRate: "Higher resolution rate",
          roi: "ROI Verified industry results",
        }}
        units={{
          responseTime: "%",
          supportTickets: "%",
          resolutionRate: "%",
          roi: "x",
        }}
        title="Healthcare AI Agent Results"
        subtitle="Transform your healthcare practice with intelligent automation"
      />
      <CustomerCards />
      
      <CustomerGrowthCards />
      <BrandLogoSlider />
      <CustomerServiceCard />
      <AwardSection />
      <FaqWithImage
        tag="Process"
        heading="Our Process to Train, Optimize, and Scale AI Service Agents"
        description="Implementing a customer service AI agent works best when approached as a structured workflow.Each step ensures smooth integration, consistent performance, and measurable results for support teams and customers a like."
        faqItems={[
          {
            id: 1,
            q: "Identify Pain Points in Service Delivery",
            a: "The process begins with analyzing customer interactions. By applying NLP and intent recognition, our AI customer service agents highlight where automation and faster response handling will deliver the greatest impact.",
          image: "/assets/img/customer-service-ai-agents/identify-pain-points-in-service-delivery.webp",
          },
          {
            id: 2,
            q: "Deploy AI Agent Tailored to Workflow",
            a: "Next, virtual customer service AI agents are configured for the organization's needs. Direct integration with existing CRM platforms ensures every conversation is informed by accurate customer history.",
            image: "/assets/img/customer-service-ai-agents/deploy-ai-agent-tailored-to-workflow.webp",
          },
          {
            id: 3,
            q: "Train and Integrate with Existing Systems",
            a: "Agents are connected to existing tools through knowledge base retrieval, sentiment analysis, and escalation pathways. This enables accurate responses and ensures complex cases are escalated to human teams without delay.",
            image: "/assets/img/customer-service-ai-agents/train-and-integrate-with-existing-systems.webp",
          },
          {
            id: 4,
            q: "Monitor and Optimize",
            a: "Once live, performance is closely monitored. Data insights, feedback loops, and agentic AI learning cycles ensure the system continues to improve accuracy, consistency, and customer satisfaction.",
            image: "/assets/img/customer-service-ai-agents/monitor-and-optimize.webp",
          },
          {
            id: 5,
            q: "Scale with Confidence",
            a: "As adoption grows, AI capabilities expand across teams, channels, and regions. Scaling customer service automation delivers measurable ROI, making it a sustainable long-term investment.",
            image: "/assets/img/customer-service-ai-agents/scale-with-confidence.webp",
          },
        ]}
        rightImage="/assets/img/faq.png"
        rightImageAlt="Customer Service AI Implementation Process"
      />
      <TechnologiesSlider />
      <ClientTestimonial />
      <CustomerBenefitSection
        leftColumn={{
          tag: "Start Now",
          title: "Scale Support, Control Costs, and Keep Customers Happy",
          subtitle: "Rising support volumes and high operational costs strain customer service teams. A customer service AI agent streamlines workflows, automates repetitive tasks, and ensures every customer gets timely, accurate help. With AI-powered support and conversational AI, you strengthen satisfaction while reducing overhead.",
          appStoreImage: "/assets/img/app-section/6.png",
          googlePlayImage: "/assets/img/app-section/7.png",
        }}
        rightColumn={{
          appPreviewImage: "/assets/img/img-new.webp",
          qrCodeImage: "/assets/img/app-section/5.png",
          qrCodeText: "Scan Now",
        }}
      />

      {/* Add SummarySolution component here */}
      {pageData.summary && <SummarySolution data={pageData.summary} />}

      <CustomerServiceFaqSection
        tag="FAQs"
        heading="Frequently Asked Questions"
        description=""
        faqItems={[
          {
            q: "What makes Kogents customer service AI agents different from others?",
            a: "Kogents combines conversational AI, NLP, and agentic AI with deep CRM integrations. This ensures faster, more accurate responses and a hybrid model where AI and human agents work together seamlessly.",
          },
          {
            q: "Can Kogents customer service AI agents integrate with our existing systems?",
            a: "Yes. Kogents AI agents are designed for easy integration with leading CRMs, ticketing platforms, and knowledge bases. This allows teams to deploy AI without disrupting existing workflows.",
          },
          {
            q: "How do Kogents customer service AI agents support compliance and security?",
            a: "Kogents follow strict compliance standards to ensure every interaction meets regulatory requirements. Our customer service AI agents are built with data security at the core, safeguarding sensitive information while maintaining accuracy and trust.",
          },
          {
            q: "Is Kogents customer service AI agent suitable for small businesses?",
            a: "Absolutely. Kogents offers scalable solutions that fit the needs of startups, SMBs, and enterprises alike, helping reduce costs, improve resolution rates, and deliver consistent 24/7 support.",
          },
          {
            q: "What is a customer service AI agent?",
            a: "A customer service AI agent is a virtual support solution that uses conversational AI and natural language processing (NLP) to handle customer queries. Unlike basic chatbots, it can understand context, personalize responses, and manage tasks like ticketing and escalation.",
          },
          {
            q: "How do AI customer service agents work?",
            a: "They analyze queries using NLP and intent recognition to determine the best response or action. AI agents can pull information from knowledge bases, update CRMs, and escalate complex issues to human agents when needed.",
          },
          {
            q: "What are the benefits of AI agents in customer support?",
            a: "Key benefits include faster response times, consistent answers, reduced workload for human agents, cost savings, and better customer satisfaction. They also provide data-driven insights through sentiment analysis and interaction analytics.",
          },
          {
            q: "What is Agentic AI in customer service?",
            a: "Agentic AI refers to AI systems capable of making context-driven decisions. In customer service, it means the AI agent can adapt responses dynamically, optimize workflows, and continuously learn from new interactions.",
          },
          {
            q: "What’s the difference between an AI chatbot and an AI agent?",
            a: "An AI chatbot handles scripted conversations with limited logic. A customer service AI agent, powered by conversational AI, can manage complex queries, integrate with CRMs, provide personalized responses, and escalate when needed.",
          },
          {
            q: "How much does an AI customer service agent cost?",
            a: "Pricing depends on features, deployment scale, and integrations. Costs may be calculated per user, per interaction, or through subscription-based models. Evaluating options based on functionality and business needs helps identify the best fit.",
          },
          {
            q: "Are AI customer service agents suitable for small businesses?",
            a: "Yes. Many providers offer scalable solutions tailored for startups and SMBs. AI service agents can reduce staffing costs and improve customer response times without heavy infrastructure investments.",
          },
          {
            q: "What is the ROI of Agentic AI in customer support?",
            a: "Reports from Gartner and IDC show measurable ROI from Agentic AI, including reduced support costs, improved accuracy, and stronger customer satisfaction scores.",
          },
          {
            q: "What are the pros and cons of AI customer support agents?",
            a: "AI customer support agents offer clear advantages, including efficiency, scalability, 24/7 availability, and actionable data insights that improve service quality. However, there are also limitations. Effective deployment requires integration with existing systems, regular training updates, and human oversight to manage complex or sensitive cases.",
          },
        ]}
        buttonText="Connect With AI Agent"
      />
      <BLogList />
    </div>
  );
};

export default page;
