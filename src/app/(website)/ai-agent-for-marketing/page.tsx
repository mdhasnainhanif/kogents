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
import HealthCareCaseStudySection from "@/components/HealthcareAiAgent/HealthCareCaseStudySection";
import React from "react";

const page = () => {
  const pageData = {
    banner: {
      tag: "Agent OS",
      title: "AI Agent for Marketing Win More Leads With Less Effort",
      button: {
        text: "Get AI Support Now",
        link: "/request-demo",
        iconSrc: "/assets/img/icons/arrow-right.svg",
        modalTarget: "#welcomeModal",
      },
      description:
        "Marketing campaigns often fall short of expectations and cause valuable opportunities to slip away. \n Kogents ensures your team captures every opportunity by automating execution and maximizing reach. \n Our AI marketing agent is designed to help your team work smarter and achieve consistent results. It streamlines multi-channel management, maintains steady engagement across initiatives, and eliminates repetitive workflows. \n This opens up a new level of performance that your marketing has been longing for.",
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
        tag="HR Agent"
        heading="Why Every Growth-Focused Team Needs an AI Marketing Assistant"
        description="An AI marketing assistant directly addresses challenges like manual tasks, disorganized data, and rising costs and provides teams with the necessary tools to remain productive and efficient. Here’s why every growth-focused team needs an AI agent for marketing:"
        benefits={[
          {
            id: 1,
            icon: "/assets/img/icons/13.svg",
            title: "More Impact From Every Campaign",
            description:
              "A generative AI marketing agent makes pitches better, adjusts the schedule, and improves content in real time to make sure that campaigns reach the right people at the right time and get better results.",
          },
          {
            id: 2,
            icon: "/assets/img/icons/13.svg",
            title: "Data That Drives Smarter Decisions",
            description:
              "A marketing AI agent helps teams find what works, quickly adjust strategies, and confidently make better decisions by converting complex data into clear insights.",
          },
          {
            id: 3,
            icon: "/assets/img/icons/13.svg",
            title: "Faster Results With Greater Accuracy",
            description:
              "A digital marketing AI agent automates routine tasks and regulates processes, which allows campaigns to get going more rapidly and deliver results more efficiently, all while ensuring accuracy across all channels.",
          },
          {
            id: 4,
            icon: "/assets/img/icons/13.svg",
            title: "Expand Reach Without Expanding Costs",
            description:
              "An AI marketing assistant helps you get more out of your campaigns without breaking the bank. The agent boosts engagement and impact across channels, making campaigns successful without extra expenses.",
          },
        ]}
      />
      <HealthCareCaseStudySection />
      <BrandLogoSlider />
      <CustomerGrowthCards
        tag="Healthcare Solutions"
        heading="AI-Driven Marketing Assistant Services to Grow Marketing Impact"
        description=""
        solutions={[
          {
            id: 1,
            iconColor: "bg-pink-500",
            title: "Customer Journeys Designed With Intelligence",
            description:
              "Our AI marketing assistance analyzes customer behaviors and interests to create journeys that are personalized, timely, and meaningful. \n This way, your campaigns guarantee stronger engagement, better retention, and long-lasting loyalty by seamlessly guiding customers from the initial touchpoint to the conversion.",
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
            title: "Always-On Insights for Market Shifts",
            description:
              "Markets change rapidly, and keeping a competitive edge demands more than just monthly reports. \n Our AI agents for marketing give you real-time insights into market trends, campaign performance, and consumer behavior so you can take action quickly.",
          },
          {
            id: 4,
            iconColor: "bg-teal-500",
            title: "Seamless Integration With Existing Marketing Tools",
            description:
              "Our AI digital marketing agent works seamlessly with your existing CRM, analytics, and advertising tools, bringing them all together into a single ecosystem. \n This integration breaks down data silos, enhances collaboration among departments, and guarantees that every campaign is driven by a comprehensive, precise understanding of your marketing conditions.",
          },
        ]}
        buttonText="Request Demo"
        buttonLink="#"
      />
      <BrandLogoSlider />
      <CustomerServiceCard
        tag="Why Kogents"
        heading="What Makes Our AI Marketing Agent Power Wins in Your Campaigns"
        description=""
        differentiators={[
          {
            id: 1,
            icon: "/assets/img/icons/17.svg",
            title: "Smarter Campaigns. Stronger Outcomes.",
            description:
              "Our autonomous marketing assistants aren’t just automated scripts; they’re like dedicated virtual team members backed by advanced data analysis. \n They go beyond basic automation by learning from every campaign, managing complex multi-step tasks, and adjusting strategies as things change. \n This smart adaptability keeps your marketing in sync with what really works, leading to better results.",
          },
          {
            id: 2,
            icon: "/assets/img/icons/17.svg",
            title: "Workflows That Free Your Team to Create",
            description:
              "Managing marketing operations doesn't have to be a never-ending grind. Our AI marketing agent takes care of those time-consuming tasks for you, like putting together reports, scheduling content, and keeping spreadsheets up to date. \n When you hand off these tasks, your team can really plunge into creativity and strategy, all while keeping things running smoothly and accurately.",
          },
          {
            id: 3,
            icon: "/assets/img/icons/17.svg",
            title: "Personalized Messaging That Truly Connects",
            description:
              "We use generative AI to create messages that are super relevant, tailored with a unique tone, imagery, and copy for every segment. \n This means you engage with customers in a way that feels genuine and personal.",
          },
          {
            id: 4,
            icon: "/assets/img/icons/17.svg",
            title: "Quick Launches, Real-Time Adjustments",
            description:
              "Rapid response is essential in today's market. \n Our AI-powered marketing agent keeps an eye on real-time data streams across various channels and adjusts campaigns in real-time. \n Think of it as your go-to analyst that’s always on the job, bringing you insights and opportunities in real-time. \n This way, you can start and improve your campaigns without having to wait for next week’s report.",
          },
          {
            id: 5,
            icon: "/assets/img/icons/17.svg",
            title: "Clear Analytics for Smarter Decisions",
            description:
              "Let data help you make decisions, but don’t let it stress you out. \n Our analytics engine takes complicated data and turns it into straightforward, useful insights. \n It helps your team quickly spot the best creatives, segments, and channels, so they can make smart, confident choices that lead to growth.",
          },
        ]}
      />
      <AwardSection />
      <FaqWithImage
        tag="Healthcare Process"
        heading="Inside the Process of Our AI Agent for Marketing"
        description="A structured approach ensures that organizations integrate an AI-powered HR workflow effectively and with lasting impact. The process includes:"
        faqItems={[
          {
            id: 1,
            q: "Understand Your Goals",
            a: "It all begins with getting on the same page with your company's goals, be they increasing brand recognition, generating more qualified leads, or enhancing customer retention. Every action is purposeful because the agent connects your objectives to quantifiable results.",
            image: "/assets/img/faq/marketing-step1.png",
          },
          {
            id: 2,
            q: "Collect and Unify Data",
            a: "All of your customer and campaign data, including CRM, social channels, websites, and ads, is brought together into a single, clear view. This provides an AI agent with a complete picture of your audience's behavior.",
            image: "/assets/img/faq/marketing-step2.png",
          },
          {
            id: 3,
            q: "Identify Audience Segments",
            a: "The agent uncovers insights in your data, categorizing customers into valuable segments. By focusing on precise segments rather than broad targeting, it helps you in create campaigns that are more relevant and effective.",
            image: "/assets/img/faq/marketing-step3.png",
          },
          {
            id: 4,
            q: "Build Tailored Campaign Strategies",
            a: "The agent assists in creating tailored messaging, channel strategies, and timing for each segment, guaranteeing that each campaign feels impactful and relevant to the right audience at the right time.",
            image: "/assets/img/faq/marketing-step4.png",
          },
          {
            id: 5,
            q: "Execute and Optimize in Real Time",
            a: "The agent keeps real-time tabs on campaign performance, unlike conventional methods, while campaigns are launched across channels. When something falls short, it adapts immediately, enhancing effectiveness even as campaigns continue to unfold.",
            image: "/assets/img/faq/marketing-step5.png",
          },
          {
            id: 6,
            q: "Deliver Clear Insights and Next Steps",
            a: "At last, you receive clear reports that highlight what succeeded, what fell short, and where the next opportunities lie. This transforms every campaign into a continuous learning experience, enhancing your marketing strategies with every iteration.",
            image: "/assets/img/faq/marketing-step6.png",
          },
        ]}
        rightImage="/assets/img/faq.png"
        rightImageAlt="Healthcare AI Implementation Process"
      />
      <TechnologiesSlider />
      <ClientTestimonial />
      <CustomerServiceFaqSection
        tag="FAQs"
        heading="Frequently Asked Questions"
        description="Learn the answers to common questions about our AI solutions, tools, and services, helping you understand how they can benefit your business and streamline operations."
        faqItems={[
          {
            q: "What is an AI agent for marketing?",
            a: "A marketing AI agent serves as a digital assistant, expertly managing and optimizing campaigns across various channels. It examines customer data, categorizes audiences, tailors messaging, and adapts based on interactions to help businesses make quicker, more informed decisions.",
          },
          {
            q: "How does an AI agent for marketing work?",
            a: "It gathers information from CRM systems, websites, advertisements, and social media, then analyzes customer behaviors to design and execute personalized campaigns. The agent tracks results in real time and quickly adapts strategies to ensure campaigns remain impactful.",
          },
          {
            q: "What are the benefits of using an AI marketing agent?",
            a: "An AI marketing agent automates tasks, delivers personalized experiences at scale, and optimizes campaigns as they run. This guarantees a more efficient utilization of budgets, smoother scaling, and a more robust return on investment without the need to hire additional staff.",
          },
          {
            q: "Can you give examples of an AI agent for marketing?",
            a: "Agents that nurture leads with automated follow-ups, personalize website content, and optimize ad spend in real time are some examples. Platforms such as Salesforce, HubSpot, and Kogents show how these agents improve marketing and customer engagement.",
          },
          {
            q: "How does an AI marketing agent compare to traditional automation?",
            a: "A traditional robot follows set rules, but an AI agent changes all the time. It manages multiple channels at the same time, predicts trends, and makes changes to campaigns before they happen. This makes it much more flexible and effective than static automation tools.",
          },
        ]}
        buttonText="Connect With AI Agent"
      />
    </>
  );
};

export default page;
