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
import HealthCareCaseStudySection from "@/components/HealthcareAiAgent/HealthCareCaseStudySection";
 
import React from "react";
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Healthcare AI Agent for Smarter Patient Care | Kogents',
  description:
    'Deploy a healthcare AI agent with Kogents. Improve efficiency, ensure compliance, and enhance care outcomes for providers.',
  keywords: [],

  alternates: {
    canonical: 'https://kogents.ai/solutions/healthcare-ai-agent',
    languages: {
      'en-US': 'https://kogents.ai/solutions/healthcare-ai-agent',
    },
  },

  openGraph: {
    title: 'About Us | Kogents AI',
    description:
      'Explore Kogents AI: our values, team, and vision to empower businesses using cutting-edge AI technology.',
    url: 'https://www.kogents.ai/healthcare-ai-agent', // replace with actual page URL
    type: 'website',
    images: [
      {
        url: 'https://www.kogents.ai/assets/img/logo-new.svg', // replace with actual OG image URL
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
  const pageData = {
    banner: {
      tag: "Agent OS",
      title: "Healthcare AI Agent for Smarter Patient Care",
      button: {
        text: "Transform Patient Care Today",
        link: "/request-demo",
        iconSrc: "/assets/img/icons/arrow-right.svg",
        modalTarget: "#welcomeModal",
      },
      description:
        "Reduce administrative burden, improve efficiency, and enhance patient outcomes with a healthcare AI agent designed for modern providers. \n \n Kogents delivers an AI-powered healthcare assistant that integrates with EHR systems, supports clinical decision support, and drives smarter patient care automation to meet the evolving needs of healthcare organizations.",
      image: {
        src: "/assets/img/ai-healthcare/banner.webp",
        alt: "Customer Service AI Agents",
        width: 800,
        height: 681,
        className: "mx-4",
      },
    },
  };
  return (
    <>
      {pageData.banner && <Banner data={pageData.banner} />}
      <Counter
        data={{
          responseTime: 40,
          supportTickets: 60,
          resolutionRate: 95,
          roi: 3,
        }}
        labels={{
          responseTime: "Less admin workload",
          supportTickets: "Faster patient response",
          resolutionRate: "Accuracy with EHR integration",
          roi: "Higher ROI for providers",
        }}
        units={{
          responseTime: "%",
          supportTickets: "%",
          resolutionRate: "%",
          roi: "x",
        }}
        title=""
        subtitle=""
      />
      <CustomerCards
        tag="Healthcare Benefits"
        heading=" Why Providers are Turning to Healthcare AI Agents"
        description="Healthcare providers face rising administrative pressure, growing patient demands, and strict regulatory requirements. A healthcare AI agent helps address these challenges with efficiency, compliance, and improved care delivery. Here’s how they help:"
        benefits={[
          {
            id: 1,
            icon: "/assets/img/icons/13.svg",
            title: "Reduce Administrative Burden",
            description:
              "By enabling administrative tasks automation and improving workflow efficiency, AI streamlines scheduling, claims, and documentation. This form of healthcare automation allows clinicians to focus more on patients, an approach emphasized by the Centers for Medicare & Medicaid Services (CMS) and the American Medical Association.",
          },
          {
            id: 2,
            icon: "/assets/img/icons/13.svg",
            title: "Enhance Patient Experience",
            description:
              "An intelligent virtual health agent or AI patient support agent strengthens patient engagement through guided intake, reminders, and self-service support. Integrated into virtual care and telehealth programs, these solutions improve accessibility and create a more connected care experience.",
          },
          {
            id: 3,
            icon: "/assets/img/icons/13.svg",
            title: "Ensure Compliance & Security",
            description:
              "AI systems built with HIPAA compliance protect sensitive records while meeting developing healthcare regulations. With secure data practices and alignment to HL7 standards, providers can remain confident under oversight from the FDA, HIPAA, and the HITECH Act.",
          },
          {
            id: 4,
            icon: "/assets/img/icons/13.svg",
            title: "Drive Consistent Clinical Outcomes",
            description:
              "Through digital health solutions and clinical decision support, AI reduces errors and supports value-based care, helping providers deliver reliable outcomes and build long-term patient trust.",
          },
        ]}
      />
      <HealthCareCaseStudySection />
      <BrandLogoSlider />
       
      <CustomerGrowthCards
        tag="Healthcare Solutions"
        heading="Our Healthcare AI Agent Solutions That Drive Results"
        description="Every healthcare system operates with unique challenges, but efficiency, patient experience, and compliance remain common priorities. Our services are designed to address these needs with practical, healthcare-ready AI solutions.Here’s what we deliver:"
        solutions={[
          {
            id: 1,
            iconColor: "bg-pink-500",
            title: "AI-powered Patient Support",
            description:
              "Our AI healthcare chatbot and virtual nursing assistant solutions improve how patients interact with care providers. By focusing on patient engagement and seamless telehealth integration, our virtual health assistants provide guided intake, appointment reminders, and 24/7 support. Built on predictive healthcare analytics, these services help organizations anticipate patient needs and deliver consistent, high-quality experiences.",
          },
          {
            id: 2,
            iconColor: "bg-purple-500",
            title: "Workflow Automation for Healthcare Staff",
            description:
              "Healthcare professionals face mounting administrative strain, from documentation to billing and scheduling. Our clinical AI agent tools streamline operations through healthcare AI automation, reducing repetitive tasks and improving staff efficiency. With built-in EHR integration, automated claims processing, and solutions tailored to staff shortages, teams gain time back for direct patient care while maintaining accuracy and compliance.",
          },
          {
            id: 3,
            iconColor: "bg-teal-500",
            title: "Secure Data Processing & Compliance",
            description:
              "Our data solutions are built with HIPAA compliance at their core and align with key healthcare regulations. By incorporating ISO 13485 standards, supporting HL7 interoperability, and following FDA standards, we ensure that every interaction with patient data remains secure, reliable, and compliant.",
          },
        ]}
        buttonText="Deploy AI in Healthcare"
        buttonLink="#"
      />
      <BrandLogoSlider />
      <CustomerServiceCard
        tag="Why Kogents Healthcare"
        heading="Why Kogents Leads in Healthcare AI Agents"
        description="Choosing the right healthcare AI solution means ensuring compliance, adaptability, and trust. Kogents deliver on these priorities with capabilities designed specifically for healthcare providers."
        differentiators={[
          {
            id: 1,
            icon: "/assets/img/icons/17.svg",
            title: "HIPAA & GDPR Compliance",
            description:
              "Our platform is built on HIPAA standards and data privacy in healthcare practices while aligning with GDPR, giving providers confidence that patient data is always protected.",
          },
          {
            id: 2,
            icon: "/assets/img/icons/17.svg",
            title: "Workflow-Ready AI Agents",
            description:
              "We design adaptable solutions with AI-driven healthcare automation that function as a healthcare AI co-pilot, supporting unique workflows across patient support, administration, and clinical tasks.",
          },
          {
            id: 3,
            icon: "/assets/img/icons/17.svg",
            title: "Integration with EHR/EMR Systems",
            description:
              "Kogents integrate smoothly with platforms like Epic Systems and Cerner, ensuring smooth medical data interoperability without disrupting existing processes.",
          },
          {
            id: 4,
            icon: "/assets/img/icons/17.svg",
            title: "Proven Accuracy with Clinical Data",
            description:
              "Our approach is validated by trusted sources, drawing on NIH research and insights from JAMA studies to deliver accuracy clinicians can rely on.",
          },
          {
            id: 5,
            icon: "/assets/img/icons/17.svg",
            title: "Human-in-the-loop Oversight",
            description:
              "Every solution includes human-in-the-loop oversight, ensuring providers retain control and accountability while benefiting from AI-driven efficiency and support.",
          },
        ]}
      />
      <AwardSection />
      <FaqWithImage
        tag="Healthcare Process"
        heading="How Our Healthcare AI Agent Process Works"
        description="Implementing a healthcare AI agent requires precision and alignment with clinical priorities. Our process ensures adoption is smooth, compliant, and outcome-driven."
        faqItems={[
          {
            id: 1,
            q: "Identify Pain Points in Care Delivery",
            a: "We assess challenges such as staffing shortages and rising patient expectations to define where AI can deliver the greatest impact.",
            image: "/assets/img/ai-healthcare/identify-pain-points-in-care-delivery.webp",
          },
          {
            id: 2,
            q: "Deploy AI Agent Tailored to Workflow",
            a: "An AI healthcare assistant or clinical AI agent is deployed to fit existing workflows, supporting both administrative and clinical needs.",
            image: "/assets/img/ai-healthcare/deploy-ai-agent-tailored-to-workflow.webp",
          },
          {
            id: 3,
            q: "Train & Integrate with Existing Systems",
            a: "With EHR integration and workflow automation, staff training ensures AI adoption strengthens care delivery without disruption.",
            image: "/assets/img/ai-healthcare/train-integrate-with-existing-systems.webp",
          },
          {
            id: 4,
            q: "Monitor Performance",
            a: "We measure adoption and system outcomes, ensuring AI agents align with clinical goals while maintaining compliance with FDA guidelines.",
            image: "/assets/img/ai-healthcare/monitor-performance.webp",
          },
          {
            id: 5,
            q: "Optimize Continuously",
            a: "Performance data is reviewed and refined, allowing us to enhance workflows and improve results based on provider and patient feedback.",
            image: "/assets/img/ai-healthcare/optimize-continuously.webp",
          },
          {
            id: 6,
            q: "Scale with Confidence",
            a: "Drawing on best practices and NIH case studies, we expand successful implementations across departments or networks while preserving reliability and trust.",
            image: "/assets/img/ai-healthcare/scale-with-confidence.webp",
          },
        ]}
        rightImage="/assets/img/faq.png"
        rightImageAlt="Healthcare AI Implementation Process"
      />
      <TechnologiesSlider />
      <ClientTestimonial
        tag="Healthcare Reviews"
        heading="Improve Care, Ensure Compliance, and Reduce Burden"
        description="Deploy a healthcare AI agent to improve efficiency, strengthen compliance, and enhance patient care. Whether you need an AI healthcare co-pilot to support workflows or a medical AI assistant to streamline patient interactions, our solutions are designed for measurable results."
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
        showCTA={true}
        ctaText="Get Your AI Healthcare Co-Pilot"
        ctaLink="#contact"
      />
      <CustomerBenefitSection
        tag="Healthcare Benefits"
        heading="Transform Patient Care with AI-Powered Healthcare Solutions"
        description="Healthcare organizations face increasing patient demands and administrative complexity. Our healthcare AI agents streamline clinical workflows, automate routine tasks, and ensure every patient receives timely, accurate care. With AI-powered healthcare support and conversational AI, you enhance patient satisfaction while reducing operational costs and improving clinical outcomes."
        leftColumn={{
          tag: "Trusted by Healthcare Providers",
          title: "Kogents Healthcare AI App",
          subtitle: "Download Our Healthcare AI Solution for Free",
          appStoreImage: "/assets/img/app-section/6.png",
          googlePlayImage: "/assets/img/app-section/7.png",
        }}
        rightColumn={{
          appPreviewImage: "/assets/img/img.webp",
          qrCodeImage: "/assets/img/app-section/5.png",
          qrCodeText: "Scan to Download",
        }}
        backgroundImage="/img/bc/video-bg.webp"
      />
      <CustomerServiceFaqSection
        tag="FAQs"
        heading="Frequently Asked Questions"
        description="Learn the answers to common questions about our AI solutions, tools, and services, helping you understand how they can benefit your business and streamline operations."
        faqItems={[
          {
            q: "What makes Kogents’ healthcare AI agent different?",
            a: "Kogents offers healthcare AI agents built for clinical and administrative workflows with HIPAA compliance, EHR integration, and human-in-the-loop oversight to ensure safety and accuracy.",
          },
          {
            q: "How does Kogents improve efficiency?",
            a: "Our AI healthcare co-pilot automates scheduling, documentation, and claims, using workflow automation and predictive healthcare analytics to free staff for patient care.",
          },
          {
            q: "Can Kogents integrate with Epic or Cerner?",
            a: "Yes. Kogents supports medical data interoperability, integrating with platforms like Epic Systems and Cerner without disrupting existing processes.",
          },
          {
            q: "Why do healthcare providers trust Kogents?",
            a: "Providers trust Kogents for data privacy in healthcare, FDA-aligned processes, and solutions informed by NIH research that ensure compliance and reliability.",
          },
          {
            q: "What is a healthcare AI agent?",
            a: "A healthcare AI agent is a digital solution that automates administrative tasks, supports clinical workflows, and improves patient engagement through data-driven insights and virtual assistance.",
          },
          {
            q: "What are the benefits of AI agents in healthcare?",
            a: "AI agents reduce administrative burden, improve workflow efficiency, strengthen compliance, and enhance patient care through real-time support and data analysis.",
          },
          {
            q: "How do AI agents improve patient care?",
            a: "By acting as a virtual support system, AI agents streamline patient intake, provide reminders, and assist clinicians with clinical decision support, leading to faster and more reliable care delivery.",
          },
          {
            q: "What is the role of AI in hospital management?",
            a: "AI plays a role in optimizing resource allocation, automating billing and claims, reducing paperwork, and supporting compliance with healthcare regulations.",
          },
          {
            q: "What is the best healthcare AI agent software?",
            a: "The best solution depends on specific needs, but leading options come from providers like Microsoft, Google Cloud, and Amazon AWS, all designed to support healthcare-ready AI deployments.",
          },
          {
            q: "How much does it cost to implement a healthcare AI agent?",
            a: "Implementation costs vary based on scale, features, and integration requirements. Pricing typically depends on whether the solution is SaaS-based, custom-built, or enterprise-level.",
          },
          {
            q: "Who are the top healthcare AI agent companies?",
            a: "Top providers include Microsoft, Google Cloud, Amazon AWS, and other SaaS-based healthcare AI vendors that specialize in automation, compliance, and patient support.",
          },
          {
            q: "Should I buy an AI healthcare assistant solution or hire developers to build one?",
            a: "Buying a pre-built solution is faster and ensures compliance, while hiring developers allows for customization. The choice depends on whether speed or flexibility is the priority.",
          },
          {
            q: "How do AI healthcare chatbots compare with human agents?",
            a: "AI chatbots provide 24/7 availability, scalability, and lower cost, but they complement rather than replace human agents by handling repetitive queries and routing complex cases to staff.",
          },
          {
            q: "Are there reviews or case studies of AI healthcare assistants?",
            a: "Yes, case studies from hospitals show reduced wait times, faster claims processing, and improved patient satisfaction after implementing AI healthcare assistants.",
          },
          {
            q: "How do providers measure ROI from healthcare AI agents?",
            a: "ROI is typically measured through reduced administrative hours, lower costs, improved compliance, faster response times, and enhanced patient outcomes.",
          },
        ]}
        buttonText="Connect With AI Agent"
      />
       
    </>
  );
};

export default page;
