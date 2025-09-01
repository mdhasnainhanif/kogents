import Banner from "@/components/ai-whatsapp-agent/Banner";
import AwardSection from "@/components/CustomerServiceAIAgents/AwardSection";
import BrandLogoSlider from "@/components/CustomerServiceAIAgents/BrandLogoSlider";
import ClientTestimonial from "@/components/CustomerServiceAIAgents/ClientTestimonial";
import Counter from "@/components/CustomerServiceAIAgents/Counter";
import CustomerBenefitSection from "@/components/CustomerServiceAIAgents/CustomerBenefitSection";
import CustomerCards from "@/components/CustomerServiceAIAgents/CustomerCards";
import CustomerGrowthCards from "@/components/CustomerServiceAIAgents/CustomerGrowthCards";
import CustomerServiceCard from "@/components/CustomerServiceAIAgents/CustomerServiceCard";
import CustomerServiceCaseStudy from "@/components/CustomerServiceAIAgents/CustomerServiceCaseStudy";
import CustomerServiceFaqSection from "@/components/CustomerServiceAIAgents/CustomerServiceFaqSection";
import FaqWithImage from "@/components/CustomerServiceAIAgents/FaqWithImage";
import TechnologiesSlider from "@/components/CustomerServiceAIAgents/TechnologiesSlider";
import React from "react";

const page = () => {
  const pageData = {
    banner: {
      tag: "Agent OS",
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
        src: "/assets/img/ai-whatsapp/whatsapp-banner.webp",
        alt: "Customer Service AI Agents",
        width: 800,
        height: 681,
        className: "mx-4",
      },
    },
  };
  return (
    <div>
      {pageData.banner && <Banner data={pageData.banner} />}
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
          roi: "Verified industry results",
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
      <CustomerServiceCaseStudy />
      <BrandLogoSlider />
      <CustomerGrowthCards />
      <BrandLogoSlider />
      <CustomerServiceCard />
      <AwardSection />
      <FaqWithImage 
        tag="Customer Service Process"
        heading="Our Process to Train, Optimize, and Scale AI Service Agents"
        description="Implementing a customer service AI agent works best when approached as a structured workflow. Each step ensures smooth integration, consistent performance, and measurable results for support teams and customers alike. Here's how it works:"
        faqItems={[
          {
            id: 1,
            q: "Identify Pain Points in Service Delivery",
            a: "The process begins with analyzing customer interactions. By applying NLP and intent recognition, our AI customer service agents highlight where automation and faster response handling will deliver the greatest impact.",
            image: "/assets/img/faq/customer-service-step1.png",
          },
          {
            id: 2,
            q: "Deploy AI Agent Tailored to Workflow",
            a: "Next, virtual customer service AI agents are configured for the organization's needs. Direct integration with existing CRM platforms ensures every conversation is informed by accurate customer history.",
            image: "/assets/img/faq/customer-service-step2.png",
          },
          {
            id: 3,
            q: "Train and Integrate with Existing Systems",
            a: "Agents are connected to existing tools through knowledge base retrieval, sentiment analysis, and escalation pathways. This enables accurate responses and ensures complex cases are escalated to human teams without delay.",
            image: "/assets/img/faq/customer-service-step3.png",
          },
          {
            id: 4,
            q: "Monitor and Optimize",
            a: "Once live, performance is closely monitored. Data insights, feedback loops, and agentic AI learning cycles ensure the system continues to improve accuracy, consistency, and customer satisfaction.",
            image: "/assets/img/faq/customer-service-step4.png",
          },
          {
            id: 5,
            q: "Scale with Confidence",
            a: "As adoption grows, AI capabilities expand across teams, channels, and regions. Scaling customer service automation delivers measurable ROI, making it a sustainable long-term investment.",
            image: "/assets/img/faq/customer-service-step5.png",
          },
        ]}
        rightImage="/assets/img/faq.png"
        rightImageAlt="Customer Service AI Implementation Process"
      />
      <TechnologiesSlider />
      <ClientTestimonial />
      <CustomerBenefitSection
        tag="Customer Service Benefits"
        heading="Scale Support, Control Costs, and Keep Customers Happy"
        description="Rising support volumes and high operational costs strain customer service teams. A customer service AI agent streamlines workflows, automates repetitive tasks, and ensures every customer gets timely, accurate help. With AI-powered support and conversational AI, you strengthen satisfaction while reducing overhead."
        leftColumn={{
          tag: "Trusted By Many Clients",
          title: "Kogents AI Agent App",
          subtitle: "Scan or Visit To Download App Now For Free",
          appStoreImage: "/assets/img/app-section/6.png",
          googlePlayImage: "/assets/img/app-section/7.png",
        }}
        rightColumn={{
          appPreviewImage: "/assets/img/img.webp",
          qrCodeImage: "/assets/img/app-section/5.png",
          qrCodeText: "Scan Now",
        }}
      />
      <CustomerServiceFaqSection
        tag="FAQs"
        heading="Frequently Asked Questions"
        description="Learn the answers to common questions about our AI solutions, tools, and services, helping you understand how they can benefit your business and streamline operations."
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
    </div>
  );
};

export default page;
