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
import BlogList from "@/components/blog/BlogList";
import React from "react";
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Hire AI Agents to Simplify, Scale, and Succeed | Kogents AI',
    description:
        'Get your AI assistant to manage workflows and data effortlessly. Automate tasks and focus on growth with Kogents AI today and start faster.',
    keywords: [],
    alternates: {
        canonical: 'https://kogents.ai/solutions/hire-ai-agent',
        languages: {
            'en-US': 'https://kogents.ai/solutions/hire-ai-agent',
        },
    },
    openGraph: {
        title: 'Hire AI Agents to Simplify, Scale, and Succeed | Kogents AI',
        description:
            'Get your AI assistant to manage workflows and data effortlessly. Automate tasks and focus on growth with Kogents AI today and start faster.',
        url: 'https://www.kogents.ai/solutions/hire-ai-agent/',
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
        { label: 'Hire AI Agent', active: true }
    ];
    const pageData = {
        banner: {
            tag: "AI Agent",
            title: "Hire AI Agents That Execute Work, Not Just Automate It",
            button: {
                text: "Get Your AI Agent Now",
                link: "/request-demo",
                iconSrc: "/assets/img/icons/arrow-right.svg",
                modalTarget: "#welcomeModal",
            },
            description:
                "Every repetitive task you delegate to an AI agent creates more time for focus and growth.\nKogents AI helps organizations, entrepreneurs, and professionals hire AI agent solutions that manage daily operations, handle communication, and improve workflow accuracy.\nOur AI automation for everyone framework combines smart AI agents for daily tasks, AI personal assistant features, and GPT-powered automation to create an intelligent AI workforce built around your workflows.\nFrom AI for small business to enterprise-level adoption, each agent adapts to your processes by reducing manual effort, improving accuracy, and maintaining consistency.",
            image: {
                src: "/assets/img/hire-ai-agent/banner.webp",
                alt: "Customer Service AI Agents",
                width: 800,
                height: 681,
                className: "mx-4",
            },
        },
    };
    return (
        <>
            {pageData.banner && <Banner data={pageData.banner} breadcrumbItems={breadcrumbItems} />}
            <Counter
                data={{
                    responseTime: 95,
                    supportTickets: 90,
                    resolutionRate: 98,
                    roi: 85,
                }}
                labels={{
                    responseTime: "Faster Workflow Execution",
                    supportTickets: "Reduction in Manual Tasks",
                    resolutionRate: "Accuracy Across Operations",
                    roi: "Increase in Productivity",
                }}
                units={{
                    responseTime: "%",
                    supportTickets: "%",
                    resolutionRate: "%",
                    roi: "%",
                }}
                title=""
                subtitle=""
            />
            <CustomerCards
                tag="Benefits"
                heading="Why Businesses and Individuals Need AI Agents"
                description={`Businesses, creators, and individuals are redefining how work gets done. The decision to hire an AI agent is not about replacing people but about multiplying capability, consistency, and speed. AI agents bring structure to processes and enable people to focus on meaningful, higher-value work.`}
                benefits={[
                    {
                        id: 1,
                        icon: "/assets/img/survey-ai-agent/1.svg",
                        title: "Drive Growth Through Automation",
                        description:
                            "Companies use AI automation for business growth to maintain efficiency and deliver consistent results across operations. AI agents manage repetitive workflows, data handling, and communication to reduce costs and improve accuracy at scale. This approach enhances productivity, strengthens team performance, and drives measurable operational progress.",
                    },
                    {
                        id: 2,
                        icon: "/assets/img/survey-ai-agent/2.svg",
                        title: "Delegate With Confidence",
                        description:
                            "For founders and independent professionals, AI for creators and entrepreneurs delivers flexibility and control. Using AI delegation and workflow automation, daily tasks like scheduling, client communication, and reporting run efficiently in the background. This allows solopreneurs to save time, stay organized, and focus on strategy without sacrificing quality.",
                    },
                    {
                        id: 3,
                        icon: "/assets/img/survey-ai-agent/3.svg",
                        title: "Simplify Everyday Productivity",
                        description:
                            "A personal AI assistant helps organize tasks, priorities, and communication throughout the day. The personal AI assistant benefits include smart scheduling, reminders, and structured updates that support focus and reduce cognitive load. Integrated digital assistant tools make productivity simpler, consistent, and easy to maintain over time.",
                    },
                    {
                        id: 4,
                        icon: "/assets/img/survey-ai-agent/4.svg",
                        title: "Optimize Accuracy and Efficiency",
                        description:
                            "Institutions and teams adopt AI productivity solutions and task management AI to maintain precision and deliver timely outcomes. Conversational assistant systems streamline responses, enhance coordination, and improve information accuracy. With the support of intelligent automation, every workflow gains speed, reliability, and accountability.",
                    },
                    {
                        id: 5,
                        icon: "/assets/img/survey-ai-agent/5.svg",
                        title: "Reduce Manual Workload and Increase Results",
                        description:
                            "Across all sectors, AI agents reduce manual workload and convert repetitive effort into measurable productivity. They adapt to different workflows, maintain accuracy across functions, and sustain progress through consistent automation. This balance of human direction and structured support creates lasting performance efficiency.",
                    },
                ]}
            />
            <CustomerGrowthCards
                tag="Solutions"
                heading="What You Can Achieve with Kogents AI Agent Solutions"
                description={`Kogents AI Agents bring adaptable automation to real operations. Each AI agent for business or personal use applies intelligent systems that manage tasks, process data, and improve productivity. From operations to content creation, every solution delivers efficiency, accuracy, and measurable impact through focused automation.`}
                solutions={[
                    {
                        id: 1,
                        iconColor: "bg-pink-500",
                        title: "Automate Business Operations",
                        description: [
                            "Kogents offers AI productivity automation to manage requests, workflows, and communication efficiently. These agents improve data accuracy and team coordination. With autonomous AI solutions and scalable AI integration, businesses achieve consistent performance and lasting operational reliability without extra overhead.",
                        ],
                    },
                    {
                        id: 2,
                        iconColor: "bg-purple-500",
                        title: "Streamline Sales and Research",
                        description: [
                            "Entrepreneurs rely on task-specific automation to simplify research, lead tracking, and client outreach. An adaptive AI model works as a virtual assistant, collecting insights and managing responses. It reduces manual work, enhances decisions, and keeps focus on strategic growth.",
                        ],
                    },
                    {
                        id: 3,
                        iconColor: "bg-teal-500",
                        title: "Accelerate Creative Production",
                        description: [
                            "Creators use the AI chatbot for creators and AI content generation assistant to plan, write, and engage audiences. Each generative AI agent adapts to brand tone and platform, helping maintain content quality, faster output, and consistent engagement.",
                        ],
                    },
                    {
                        id: 4,
                        iconColor: "bg-teal-500",
                        title: "Simplify Personal Workflows",
                        description: [
                            "Individuals can hire personal AI assistant tools to manage schedules, reminders, and daily organization. Using NLP automation and intelligent systems, tasks stay on track and updated in real time, improving focus and freeing time for meaningful work.",
                        ],
                    },
                    {
                        id: 5,
                        iconColor: "bg-teal-500",
                        title: "Enhance Institutional Efficiency",
                        description: [
                            "Institutions depend on AI productivity automation and autonomous AI solutions for data validation, service requests, and compliance. These agents process information accurately and reduce turnaround time, ensuring reliable, transparent operations across large-scale environments.",
                        ],
                    },
                    {
                        id: 6,
                        iconColor: "bg-teal-500",
                        title: "Adaptive Solutions for Every Goal",
                        description: [
                            "Every Kogents AI Agent combines intelligent automation and scalable design to meet unique needs. From individuals to enterprises, each solution integrates smoothly, improves consistency, and enhances productivity with security and compliance at its core.",
                        ],
                    },
                ]}
                buttonText="Get Your Perfect Workflow"
                buttonLink="#"
            />
            <BrandLogoSlider />
            <CustomerServiceCard
                tag="Why Kogents"
                heading="Why Kogents AI Is the Smarter Choice for Automation"
                description={[
                    "We build AI agents designed for trust, adaptability, and measurable results. Each solution delivers secure, transparent, and compliant automation that enhances reliability, accountability, and long-term efficiency for both personal and enterprise needs."
                ]}
                differentiators={[
                    {
                        id: 1,
                        icon: "/assets/img/survey-ai-agent/7.svg",
                        title: "Customizable and Personalizable Automation",
                        description: [
                            "We develop customizable AI agents built for personalizable automation that adapts to unique workflows and goals. Each agent aligns with data, structure, and daily operations to improve accuracy and productivity. This flexibility ensures automation enhances performance at both individual and organizational levels."
                        ],
                    },
                    {
                        id: 2,
                        icon: "/assets/img/survey-ai-agent/8.svg",
                        title: "Secure and Ethical by Design",
                        description: [
                            "Our secure and ethical AI solutions follow global standards including the EU AI Act, GDPR, and ISO/IEC 42001. Guided by research from MIT CSAIL and the Stanford AI Index, our systems promote AI transparency and protect user information through responsible and auditable automation."
                        ],
                    },
                    {
                        id: 3,
                        icon: "/assets/img/survey-ai-agent/9.svg",
                        title: "Compliance Ready for Every Industry",
                        description: [
                            "We deliver compliance ready AI with certified data security that meets governance and auditing requirements. Every deployment adapts to evolving industry regulations, ensuring reliability, accountability, and protection for sensitive data across all operational environments."
                        ],
                    },
                    {
                        id: 4,
                        icon: "/assets/img/survey-ai-agent/10.svg",
                        title: "Human AI Collaboration That Builds Trust",
                        description: [
                            "We prioritize human AI collaboration to maintain control and confidence in automation. Human oversight supports informed decisions and transparent results. This balanced design reinforces accountability and coordination across personal workflows and enterprise operations."
                        ],
                    },
                    {
                        id: 5,
                        icon: "/assets/img/survey-ai-agent/10.svg",
                        title: "Ethics and Insight at the Core",
                        description: [
                            "Our development approach draws on insights from the McKinsey AI Impact Report, Deloitte Automation Study, and IEEE AI Standards. Through an adaptive AI framework, we merge ethical governance with performance analysis to ensure transparency, sustainability, and consistent progress."
                        ],
                    },
                ]}
            />
            <AwardSection />
            <FaqWithImage
                tag="Process"
                heading="How It Works"
                description={`Our AI setup process is designed to make automation adoption simple, structured, and scalable. From defining objectives to full deployment, each stage ensures adaptability, accountability, and consistent improvement through every phase of the AI integration workflow.`}
                faqItems={[
                    {
                        id: 1,
                        q: "Define Goals",
                        a: "The process begins by identifying what you want to automate, such as communication, scheduling, data handling, or reporting. Setting clear objectives establishes the framework for intelligent automation that improves focus, resource management, and efficiency throughout your automation lifecycle.",
                        image: "/assets/img/hire-ai-agent/1.webp",
                    },
                    {
                        id: 2,
                        q: "Customize Your AI Agent",
                        a: "Once goals are defined, you can build your own AI agent suited to specific needs. Each configuration includes the right features, workflows, and data preferences to ensure accuracy and productivity. This stage ensures automation fits real operations and supports meaningful, measurable outcomes.",
                        image: "/assets/img/hire-ai-agent/2.webp",
                    },
                    {
                        id: 3,
                        q: "Integrate with Your Systems",
                        a: "After configuration, your agent enters the AI integration workflow stage. Through guided AI onboarding, the system connects with your tools, platforms, and daily routines. Integration includes review checkpoints for human oversight, ensuring collaboration between automation and users remains consistent and transparent.",
                        image: "/assets/img/hire-ai-agent/3.webp",
                    },
                    {
                        id: 4,
                        q: "Optimize and Scale Over Time",
                        a: "Each deployment is designed for continuous growth. Through training and optimization, your AI agent adapts based on performance insights and user feedback. This process supports scalable AI deployment that enhances responsiveness, accuracy, and consistency while maintaining reliability over time.",
                        image: "/assets/img/hire-ai-agent/4.webp",
                    },
                ]}
                rightImage="/assets/img/faq.png"
                rightImageAlt="Healthcare AI Implementation Process"
            />
            <TechnologiesSlider />
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
            <CustomerBenefitSection
                buttonText="Get Your AI Agent Now"
                leftColumn={{
                    tag: "Start Now",
                    title: "Create, Automate, and Grow with Kogents AI Agent",
                    subtitle: "Turn everyday work into consistent progress. Hire your AI agent today to manage operations, communication, and tasks with smart automation that saves time and boosts results.\nStart using your AI assistant in minutes and experience productivity built around your goals.",
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
            <CustomerServiceFaqSection
                tag="FAQs"
                heading="Frequently Asked Questions"
                description=""
                faqItems={[
                    {
                        q: "What is Kogents AI?",
                        a: "Kogents AI provides intelligent automation through customizable agents built to handle daily operations, client communication, and data workflows. Our AI agents adapt to individual and business needs, improving productivity with measurable accuracy.",
                    },
                    {
                        q: "How does Kogents AI work?",
                        a: "Kogents AI agents analyze data, automate tasks, and integrate with existing tools. Each setup includes configuration, integration, and optimization to ensure automation aligns with user goals and maintains transparency in performance.",
                    },
                    {
                        q: "What is an AI agent?",
                        a: "An AI agent is a digital system that performs tasks autonomously. It analyzes input, learns from interactions, and manages workflows using logic and data, helping users simplify repetitive or time-based work.",
                    },
                    {
                        q: "What's the difference between an AI agent and chatbot?",
                        a: "An AI agent performs context-based actions, while a chatbot only answers questions or follows scripts. Agents automate tasks across workflows; chatbots are limited to basic interactions.",
                    },
                    {
                        q: "What is the difference between AI agents and human virtual assistants?",
                        a: "AI agents automate tasks continuously, while human virtual assistants focus on communication and creative input. Many organizations combine both for improved consistency and flexibility.",
                    },
                    {
                        q: "How do AI agents help businesses?",
                        a: "AI agents help businesses by automating operations, managing communication, and improving reporting accuracy. They reduce manual work and enhance efficiency across AI in business operations.",
                    },
                    {
                        q: "What are the benefits of hiring an AI agent?",
                        a: "The benefits of hiring an AI agent include time savings, cost reduction, and improved accuracy. They enable 24/7 performance and consistent results for business and personal tasks.",
                    },
                    {
                        q: "What industries use AI agents?",
                        a: "AI agents are used in sectors such as healthcare, finance, retail, logistics, and education. They streamline processes, improve compliance, and deliver consistent results across large-scale workflows.",
                    },
                    {
                        q: "How much does it cost to hire an AI agent?",
                        a: "Pricing depends on automation scope, customization, and integration level. Reviewing AI agent service pricing and AI cost comparison helps determine an option that matches your goals and budget.",
                    },
                    {
                        q: "How to hire an AI agent online?",
                        a: "Define your automation goals, explore AI agency or AI automation consultant services, and choose a provider that offers setup support. You can get an AI automation assistant now through Kogents AI for quick and scalable deployment.",
                    },
                    {
                        q: "What is AI agent service pricing based on?",
                        a: "Service pricing is based on complexity, training needs, and system integration. Reviewing AI developer pricing and AI assistant service options ensures transparency before deployment.",
                    },
                    {
                        q: "Are there affordable AI chatbot developers available?",
                        a: "Yes. Kogents AI offers affordable chatbot development that automates communication and integrates easily with your workflows, delivering reliable and cost-effective results.",
                    },
                    {
                        q: "What are the best AI agents for small businesses?",
                        a: "The best AI agents for small businesses combine adaptability, simplicity, and affordability. Use AI vendor comparison and AI platform review insights to find solutions designed for long-term growth.",
                    }
                ]}
                buttonText="Connect With AI Agent"
            />
            <BlogList />
        </>
    );
};

export default page;
