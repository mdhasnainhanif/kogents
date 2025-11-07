import Banner from "@/components/ai-whatsapp-agent/Banner";
import AwardSection from "@/components/CustomerServiceAIAgents/AwardSection";
import BrandLogoSlider from "@/components/CustomerServiceAIAgents/BrandLogoSlider";
import ClientTestimonial from "@/components/CustomerServiceAIAgents/ClientTestimonial";
import Counter from "@/components/CustomerServiceAIAgents/Counter";
import CustomerCards from "@/components/CustomerServiceAIAgents/CustomerCards";
import CustomerGrowthCards from "@/components/CustomerServiceAIAgents/CustomerGrowthCards";
import CustomerServiceCard from "@/components/CustomerServiceAIAgents/CustomerServiceCard";
import CustomerServiceFaqSection from "@/components/CustomerServiceAIAgents/CustomerServiceFaqSection";
import FaqWithImage from "@/components/CustomerServiceAIAgents/FaqWithImage";
import TechnologiesSlider from "@/components/CustomerServiceAIAgents/TechnologiesSlider";
import BLogList from "@/components/blog/BlogList";
import React from "react";
import type { Metadata } from 'next'
import CustomerBenefitSection from "@/components/CustomerServiceAIAgents/CustomerBenefitSection";


export const metadata: Metadata = {
  title: 'Kogents AI Agent for Marketing | Lead Every Campaign',
  description:
    'Maximize the effectiveness of each marketing dollar with our AI Agent for Marketing. Kogents uses automation to improve decision-making and growth.',
  keywords: [
    "AI agent for marketing",
    "AI marketing agent",
    "AI marketing assistant",
    "Marketing AI agent",
    "AI-powered marketing agent",
    "Generative AI marketing agent",
    "Intelligent marketing agent",
    "AI-driven marketing assistant",
    "AI digital marketing agent",
    "AI agent for digital marketing",
    "Autonomous marketing assistants",
    "Marketing automation tools",
    "Campaign optimization",
    "SEO content creation",
    "Competitor analysis",
    "Customer engagement AI",
    "Personalized marketing with AI",
    "Predictive analytics for marketing",
    "AI-powered ad targeting",
    "Marketing workflows automation",
    "Best AI agent for marketing campaigns",
    "AI agent for social media marketing",
    "AI content marketing automation",
    "AI tools for email marketing",
    "AI-powered customer journey mapping",
    "AI chatbot for marketing automation",
    "AI for lead generation and nurturing",
    "AI for digital advertising campaigns",
    "AI-driven brand strategy optimization",
    "AI in performance marketing"
  ],
  alternates: {
    canonical: 'https://kogents.ai/solutions/ai-agent-for-marketing',
    languages: {
      'en-US': 'https://kogents.ai/solutions/ai-agent-for-marketing',
    },
  },

  openGraph: {
    title: 'Kogents AI Agent for Marketing | Lead Every Campaign',
    description:
      'Maximize the effectiveness of each marketing dollar with our AI Agent for Marketing. Kogents uses automation to improve decision-making and growth.',
    url: 'https://www.kogents.ai/solutions/ai-agent-for-marketing', // replace with actual page URL
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
      tag: "Marketing AI Agent",
      title: "AI Agent for Marketing Win More Leads With Less Effort",
      button: {
        text: "Get AI Support Now",
        link: "/request-demo",
        iconSrc: "/assets/img/icons/arrow-right.svg",
        modalTarget: "#welcomeModal",
      },
      description:
        "Marketing campaigns often fall short of expectations and cause valuable opportunities to slip away. \n Kogents ensure your team captures every opportunity by automating execution and maximizing reach. \n Our AI marketing agent is designed to help your team work smarter and achieve consistent results. It streamlines multi-channel management, maintains steady engagement across initiatives, and eliminates repetitive marketing workflows. \n This opens up a new level of performance that your marketing has been longing for.",
      image: {
        src: "/assets/img/ai-agent-for-marketing/banner.webp",
        alt: "Customer Service AI Agents",
        width: 800,
        height: 681,
        className: "mx-4",
      },
    },
  };
  return (
    <>
      <Banner data={pageData.banner} />
      <Counter
        data={{
          responseTime: 3,
          supportTickets: 85,
          resolutionRate: 2,
          roi: 75,
        }}
        labels={{
          responseTime: "Faster Content Creation",
          supportTickets: "Automation of Manual Tasks",
          resolutionRate: "Increase in Newsletter Open Rates",
          roi: "Drop in Time-to-Publish",
        }}
        units={{
          responseTime: "x",
          supportTickets: "%",
          resolutionRate: "x",
          roi: "%",
        }}
        title=""
        subtitle=""
      />
      <CustomerCards
        tag="Benefits"
        heading="Why Every Growth-Focused Team Needs an AI Marketing Assistant"
        colSize="col-lg-6 col-md-6 col-12"
        description={`An AI marketing assistant directly addresses challenges like manual tasks, disorganized data, and rising costs and provides teams with the necessary tools to remain productive and efficient. \n \n Here's why every growth-focused team needs an AI agent for marketing:`}
        showButton={true}
        buttonText="Get Marketing Intelligence"
        benefits={[
          {
            id: 1,
            icon: "/assets/img/ai-agent-for-marketing/1.svg",
            title: "More Impact From Every Campaign",
            description:
              "A generative AI marketing agent makes pitches better, adjusts the schedule, and improves SEO content creation in real time to make sure that campaigns reach the right people at the right time and get better results.",
          },
          {
            id: 2,
            icon: "/assets/img/ai-agent-for-marketing/2.svg",
            title: "Data That Drives Smarter Decisions",
            description:
              "A marketing AI agent helps teams find what works, quickly adjust strategies, and confidently make better decisions by converting complex data into clear insights.This data-driven approach leads to more effective campaigns and higher ROI.",
          },
          {
            id: 3,
            icon: "/assets/img/ai-agent-for-marketing/3.svg",
            title: "Faster Results With Greater Accuracy",
            description:
              "A digital marketing AI agent automates routine tasks and regulates processes, which allows campaigns to get going more rapidly and deliver results more efficiently, all while ensuring accuracy across all channels.This automation saves time and reduces human error in campaign execution.",
          },
          {
            id: 4,
            icon: "/assets/img/ai-agent-for-marketing/4.svg",
            title: "Expand Reach Without Expanding Costs",
            description:
              "An AI marketing assistant helps you get more out of your campaigns without breaking the bank.The agent boosts engagement and impact across channels, making campaign optimization successful without extra expenses.",
          },
        ]}
      />
      <CustomerGrowthCards
        tag="Solutions"
        heading="AI-Driven Marketing Assistant Services to Grow Marketing Impact"
        description=""
        solutions={[
          {
            id: 1,
            iconColor: "bg-pink-500",
            title: "Customer Journeys Designed With Intelligence",
            description: "Our AI agent for digital marketing analyzes customer behaviors and interests to create journeys that are personalized, timely, and meaningful as well as competitor analysis. \n \n This way, your campaigns guarantee stronger engagement, better retention, and long-lasting loyalty by seamlessly guiding customers from the initial touchpoint to the conversion."
          },
          {
            id: 2,
            iconColor: "bg-purple-500",
            title: "Marketing Operations That Scale Effortlessly",
            description:
              "Our intelligent marketing agent speeds up the execution of campaigns by streamlining repetitive tasks and automating workflows. \n This means that your team can run five campaigns with the same amount of work that it used to take to run one. This gives them more time to focus on strategy, creativity, and growth.",
          },
          {
            id: 3,
            iconColor: "bg-teal-500",
            title: "Marketing Operations That Scale Effortlessly",
            description:
              "Markets change rapidly, and keeping a competitive edge demands more than just monthly reports. \n Our AI agents for marketing give you real-time insights into market trends, campaign performance, and consumer behavior so you can take action quickly.",
          },
          {
            id: 4,
            iconColor: "bg-teal-500",
            title: "Always-On Insights for Market Shifts",
            description:
              "Markets change rapidly, and keeping a competitive edge demands more than just monthly reports. \n \n Our AI agents for marketing give you real-time insights into market trends, campaign performance, and consumer behavior so you can take action quickly.",
          },
          {
            id: 5,
            iconColor: "bg-teal-500",
            title: "Seamless Integration With Existing Marketing Tools",
            description:
              "Our AI digital marketing agent works seamlessly with your existing CRM, analytics, and advertising tools, bringing them all together into a single ecosystem. \n This integration breaks down data silos, enhances collaboration among departments, and guarantees that every campaign is driven by a comprehensive, precise understanding of your marketing conditions.",
          },
        ]}
        buttonText="Request Demo"
        buttonLink="#"
      />
      <div className="pt-5">
        <BrandLogoSlider />
      </div>
      <CustomerServiceCard
        tag="Why Kogents"
        heading="What Makes Our AI Marketing Agent Power Wins in Your Campaigns"
        description=""
        differentiators={[
          {
            id: 1,
            icon: "/assets/img/ai-agent-for-marketing/5.svg",
            title: "Smarter Campaigns. Stronger Outcomes.",
            description: ["Our autonomous marketing assistants aren’t just automated scripts; they’re like dedicated virtual team members backed by advanced data analysis.They go beyond basic content marketing automation by learning from every campaign, managing complex multi-step tasks, and adjusting strategies as things change.This smart adaptability keeps your marketing in sync with what really works, leading to better results."],
          },
          {
            id: 2,
            icon: "/assets/img/ai-agent-for-marketing/6.svg",
            title: "Workflows That Free Your Team to Create",
            description: ["Managing marketing operations doesn't have to be a never-ending grind.Our AI marketing agent takes care of those time-consuming tasks for you, like putting together reports, scheduling content, and keeping spreadsheets up to date.When you hand off these tasks, your team can really plunge into creativity and strategy, all while keeping things running smoothly and accurately."],
          },
          {
            id: 3,
            icon: "/assets/img/ai-agent-for-marketing/7.svg",
            title: "Personalized Messaging That Truly Connects",
            description: [
              "We use generative AI to create messages that are super relevant, tailored with a unique tone, imagery, and copy for every segment.This means you engage with customers in a way that feels genuine and personal."
            ],
          },
          {
            id: 4,
            icon: "/assets/img/ai-agent-for-marketing/8.svg",
            title: "Quick Launches, Real-Time Adjustments",
            description: [
              "Rapid response is essential in today's market.Our AI-powered marketing agent keeps an eye on real-time data streams across various channels and adjusts campaigns in real-time.Think of it as your go-to analyst that’s always on the job, bringing you insights and opportunities in real-time.This way, you can start and improve your campaigns without having to wait for next week’s report."
            ],
          },
          {
            id: 5,
            icon: "/assets/img/ai-agent-for-marketing/9.svg",
            title: "Clear Analytics for Smarter Decisions",
            description: [
              "Let data help you make decisions, but don’t let it stress you out.Our analytics engine takes complicated data and turns it into straightforward, useful insights.It helps your team quickly spot the best creatives, segments, and channels, so they can make smart, confident choices that lead to growth."
            ],
          },
        ]}
      />
      <AwardSection />
      <FaqWithImage
        tag="Process"
        heading="Inside the Process of Our AI Agent for Marketing"
        description=""
        faqItems={[
          {
            id: 1,
            q: "Understand Your Goals",
            a: "It all begins with getting on the same page with your company's goals, be they increasing brand recognition, generating more qualified leads, or enhancing customer retention.\n \n Every action is purposeful because the agent connects your objectives to quantifiable results.",
            image: "/assets/img/ai-agent-for-marketing/understand-your-goals.webp",
          },
          {
            id: 2,
            q: "Collect and Unify Data",
            a: "All of your customer and campaign data, including CRM, social channels, websites, and ads, is brought together into a single, clear view.\n \nThis provides an AI agent with a complete picture of your audience's behavior.",
            image: "/assets/img/ai-agent-for-marketing/collect-and-unify-data.webp",
          },
          {
            id: 3,
            q: "Identify Audience Segments",
            a: "The agent uncovers insights in your data, categorizing customers into valuable segments.\n \n By focusing on precise segments rather than broad targeting, it helps you in create campaigns that are more relevant and effective.",
            image: "/assets/img/ai-agent-for-marketing/identify-audience-segments.webp",
          },
          {
            id: 4,
            q: "Build Tailored Campaign Strategies",
            a: "The agent assists in creating tailored messaging, channel strategies, and timing for each segment, guaranteeing that each campaign feels impactful and relevant to the right audience at the right time.",
            image: "/assets/img/ai-agent-for-marketing/build-tailored-campaign-strategies.webp",
          },
          {
            id: 5,
            q: "Execute and Optimize in Real Time",
            a: "The agent keeps real-time tabs on campaign performance, unlike conventional methods, while campaigns are launched across channels. \n \nWhen something falls short, it adapts immediately, enhancing effectiveness even as campaigns continue to unfold.",
            image: "/assets/img/ai-agent-for-marketing/execute-and-optimize-in-real-time.webp",
          },
          {
            id: 6,
            q: "Deliver Clear Insights and Next Steps",
            a: "At last, you receive clear reports that highlight what succeeded, what fell short, and where the next opportunities lie. \n \nThis transforms every campaign into a continuous learning experience, enhancing your marketing strategies with every iteration.",
            image: "/assets/img/ai-agent-for-marketing/deliver-clear-insights-and-next-steps.webp",
          },
        ]}
        rightImage="/assets/img/faq.png"
        rightImageAlt="Healthcare AI Implementation Process"
      />
      <TechnologiesSlider />
      <ClientTestimonial />
      <CustomerBenefitSection
        buttonText="Get The AI Support Now!"
        leftColumn={{
          tag: "Start Now",
          title: "Kogents Healthcare AI App",
          subtitle: "Description: Explore the possibilities of cost-effective growth. Get a customized quote for Kogents AI Agent for Marketing and discover how to enhance your impact while staying within budget.",
          appStoreImage: "/assets/img/app-section/6.png",
          googlePlayImage: "/assets/img/app-section/7.png",
        }}
        rightColumn={{
          appPreviewImage: "/assets/img/img-new.webp",
          qrCodeImage: "/assets/img/app-section/5.png",
          qrCodeText: "Scan to Download",
        }}
        backgroundImage="/img/bc/video-bg.webp"
      />
      <CustomerServiceFaqSection
        tag="FAQs"
        heading="Frequently Asked Questions"
        description=""
        faqItems={[
          {
            q: "How is Kogents different from other AI marketing solutions?",
            a: "Kogents has an intelligent marketing agent that changes in real time, which is more than what most automation tools do. Unlike traditional platforms that need you to enter data all the time, our AI agent learns from every campaign, works well with the tools you already have, and keeps making things better without charging you more.",
          },
          {
            q: "Can Kogents AI Agent integrate with my existing marketing tools and CRM?",
            a: "Yes. Kogents AI Agent for marketing is meant to work with the systems you already use, like CRM platforms, analytics tools, and advertising channels. This makes sure that all of your systems work together and that data flows smoothly, which helps your team work together better and make better decisions.",
          },
          {
            q: "What type of businesses see the best results with Kogents?",
            a: "Our AI marketing agent is made for businesses of all sizes that want to grow, from startups that want to make the most of their small budgets to established companies that want to run campaigns more efficiently. Kogents can help any team that wants to get more qualified leads, improve engagement, and cut down on manual work.",
          },
          {
            q: "What is an AI agent for marketing?",
            a: "A marketing AI agent serves as a digital assistant, expertly managing and optimizing campaigns across various channels. It examines customer data, categorizes audiences, tailors messaging, and adapts based on interactions to help businesses make quicker, more informed decisions.",
          },
          {
            q: "How does an AI agent for marketing work?",
            a: "It gathers information from CRM systems, websites, advertisements, and social media, then analyzes customer behaviors to design and execute personalized campaigns. The agent tracks results in real time and quickly adapts strategies to ensure campaigns remain impactful.",
          },
          {
            q: "What are the benefits of using Kogents AI marketing agent?",
            a: "Kogents AI marketing agent automates tasks, delivers personalized experiences at scale, and optimizes campaigns as they run. This guarantees a more efficient utilization of budgets, smoother scaling, and a more robust return on investment without the need to hire additional staff.",
          },
          {
            q: "Can you give examples of an AI agent for marketing?",
            a: "AI marketing agents that nurture leads with automated follow-ups, personalize website content, and optimize ad spend in real time are some examples. Platforms such as Salesforce, HubSpot, and Kogents show how these agents improve marketing and customer engagement.",
          },
          {
            q: "How does an AI marketing agent compare to traditional automation?",
            a: "A traditional robot follows set rules, but an AI agent changes all the time. It manages multiple channels at the same time, predicts trends, and makes changes to campaigns before they happen. This makes it much more flexible and effective than static automation tools.",
          },
        ]}

        buttonText="Connect With AI Agent"
      />
      <BLogList />
    </>
  );
};

export default page;
