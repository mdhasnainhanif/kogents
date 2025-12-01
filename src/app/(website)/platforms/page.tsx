import AllChannelsCard from '@/components/platfarms/AllChannelsCard'
import Banner from '@/components/platfarms/Banner'
import React from 'react'
import Counter from '@/components/CustomerServiceAIAgents/Counter'
import CaseCards from '@/components/cases/CasesCards'
import CustomerBenefitSection from '@/components/CustomerServiceAIAgents/CustomerBenefitSection'
import ClientTestimonial from '@/components/CustomerServiceAIAgents/ClientTestimonial'
import CustomerServiceCard from '@/components/CustomerServiceAIAgents/CustomerServiceCard'
import dynamic from 'next/dynamic'
import { Metadata } from "next";
import Summary from '@/components/ai-whatsapp-agent/Summary'

export const metadata: Metadata = {
    title: "Innovative AI Integrations for Every Industry | Kogents.ai",
    description: "Discover AI-driven integrations from Kogents that connect systems, boost efficiency, and scale with your business. Get started today.",
    alternates: {
    canonical: 'https://kogents.ai/platforms',
    languages: {
      'en-US': 'https://kogents.ai/platforms',
    },
  },
    openGraph: {
        title: "Innovative AI Integrations for Every Industry | Kogents.ai",
        description: "Discover AI-driven integrations from Kogents that connect systems, boost efficiency, and scale with your business. Get started today.",
        url: "https://kogents.ai/platforms/",
        siteName: "Kogents",
        type: "website",
        images: [
            {
                url: "https://kogents.ai/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Kogents Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Innovative AI Integrations for Every Industry | Kogents.ai",
        description: "Discover AI-driven integrations from Kogents that connect systems, boost efficiency, and scale with your business. Get started today.",
        images: ["https://kogents.ai/og-image.jpg"],
    },
};
const PlatformsPageClient = dynamic(() => import('./PlatformsPageClient'))

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
      
      <PlatformsPageClient />
      <Banner />
      <Counter
        data={{
          responseTime: 10,
          supportTickets: 24,
          resolutionRate: 10,
          roi: 90,
        }}
        labels={{
          responseTime: "Leading Platforms Supported",
          supportTickets: "Availability",
          resolutionRate: "Deployment",
          roi: "Uptime Reliability",
        }}
        units={{
          responseTime: "+",
          supportTickets: "hrs",
          resolutionRate: "×",
          roi: "%",
        }}
        title=""
        subtitle=""
      />
      <AllChannelsCard />
      <CaseCards
        tag="Case Studies"
        heading="Case Studies"
        cardColClass="col-md-4 col-12"
        cards={cardsData} />
      <CustomerServiceCard
        tag="Why Kogents"
        className="platformsPageCustomerServiceCard"
        heading="Why Choose Kogents Over Generic Chatbots"
        description=""
        differentiators={[
          {
            id: 1,
            icon: "/assets/img/ai-agent-dashboard/5.svg",
            title: "Platform-Specific Training",
            description:
              "Our AI agents are tailored to each platform's specific features, limitations, and user behaviors, unlike generic solutions. That way, the conversations will sound natural and fit in with the vibe of each channel.",
          },
          {
            id: 2,
            icon: "/assets/img/ai-agent-dashboard/6.svg",
            title: "No-Code Customization",
            description:
              "Set up responses, workflows, and integrations without having to write a single line of code. Kogents lets your team make AI agents that work with your processes, so you stay in charge even as engagement grows.",
          },
          {
            id: 3,
            icon: "/assets/img/ai-agent-dashboard/7.svg",
            title: "Enterprise-Grade Security",
            description:
              "It is important to keep your data and customers' trust safe. Kogents was made with enterprise-level security in mind, so every conversation and integration is encrypted, safe, and follows the rules.",
          },
          {
            id: 4,
            icon: "/assets/img/ai-agent-dashboard/8.svg",
            title: "Human-Like Conversations",
            description:
              "Kogents' AI agents can understand tone, context, and intent, so they can have natural, human-like conversations with customers that keep the conversation going smoothly.",
          },
        ]}
      />
      <ClientTestimonial
        tag="Reviews"
        className="platformsPageClientTestimonial"
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
          buttonText="Automate Engagement Today"
          leftColumn={{
            tag: "Start Now",
            title: "See How AI Agents Automate Engagement Everywhere",
            subtitle: "Get AI agents up and running in minutes and start giving your customers instant, human-like support on all of their favorite platforms. ",
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
      <Summary data={{
        tag: "Summary",
        text: "Kogents AI provides platform-adapted customer engagement agents that use automation and conversational intelligence to streamline support across channels."
      }} />
    </>
  )
}

export default Page