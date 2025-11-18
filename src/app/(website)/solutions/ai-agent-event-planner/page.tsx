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
import BlogList from "@/components/blog/BlogList";
import React from "react";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Smart AI Agent Event Planner for Perfect Planning | Kogents',
    description:
        'Save time and cut stress using our top AI agent event planner built for smarter vendor and guest coordination. Try it now.',
    keywords: [],

    alternates: {
        canonical: 'https://kogents.ai/solutions/ai-agent-event-planner',
        languages: {
            'en-US': 'https://kogents.ai/solutions/ai-agent-event-planner',
        },
    },

    openGraph: {
        title: 'Smart AI Agent Event Planner for Perfect Planning | Kogents',
        description:
            'Save time and cut stress using our top AI agent event planner built for smarter vendor and guest coordination. Try it now.',
        url: 'https://www.kogents.ai/solutions/ai-agent-event-planner', 
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
        { label: 'AI Agent Event Planner', active: true }
    ];

    const pageData = {
        banner: {
            tag: "Event Planner AI Agent",
            title: "AI Agent Event Planner for Smarter Event",
            button: {
                text: "Automate Your Event Today",
                link: "/request-demo",
                iconSrc: "/assets/img/icons/arrow-right.svg",
                modalTarget: "#welcomeModal",
            },
            description:
                "Event organizers lose valuable time on manual tasks instead of focusing on experiences.\n Kogents delivers an AI agent event planner that reduces admin work, personalizes attendee journeys, and streamlines vendor coordination. \n With our AI event planning assistant, organizations can depend on an intelligent event planner agent and corporate event AI assistant that combine automation, scheduling, and guest management to make planning faster, accurate, and cost-efficient.",
            image: {
                src: "/assets/img/ai-agent-event-planner/banner.webp",
                alt: "Customer Service AI Agents",
                width: 800,
                height: 681,
                className: "mx-4",
            },
        },
        summary: {
            tag: "Summary",
            text: "Kogents AI simplifies complex event planning through automation and intelligence, saving time while ensuring accuracy and personalized guest experiences."
        }
    };
    return (
        <>
            {pageData.banner && <Banner data={pageData.banner} breadcrumbItems={breadcrumbItems} />}
            <Counter
                data={{
                    responseTime: 95,
                    supportTickets: 3,
                    resolutionRate: 80,
                    roi: 100,
                }}
                labels={{
                    responseTime: "Less manual work",
                    supportTickets: "Faster scheduling",
                    resolutionRate: "Cost savings",
                    roi: "Events optimized",
                }}
                units={{
                    responseTime: "%",
                    supportTickets: "×",
                    resolutionRate: "%",
                    roi: "+",
                }}
                title=""
                subtitle=""
            />
            <CustomerCards
                tag="Benefits"
                heading="How AI Agents Benefit Event Planners"
                description={`Traditional event planning drains time, budgets, and focus through repetitive tasks and manual oversight. By introducing automation and intelligence, an AI agent event planner allows organizers to shift attention from operations to strategy.`}
                benefits={[
                    {
                        id: 1,
                        icon: "/assets/img/ai-agent-event-planner/1.svg",
                        title: "Time Efficiency",
                        description:
                            "An AI event planning assistant and intelligent event planner agent reduce hours of work by automating RSVP tracking and AI-driven event logistics. Research from ThirdRock TechKno confirms automation cuts the bulk of manual workload in event management.",
                    },
                    {
                        id: 2,
                        icon: "/assets/img/ai-agent-event-planner/2.svg",
                        title: "Cost Savings",
                        description:
                            "As an AI event coordinator or AI-powered event planner agent, these systems use budget monitoring AI and predictive analytics for event costs to optimize vendor negotiations and control spending. M&IW insights show AI partnerships lower overhead in corporate events.",
                    },
                    {
                        id: 3,
                        icon: "/assets/img/ai-agent-event-planner/3.svg",
                        title: "Error-Free Planning",
                        description:
                            "An intelligent event planning AI assistant improves accuracy with secure planning AI tools and AI event compliance monitoring, minimizing risks and missed tasks. The MPI AI Enhanced Event Professional certification validates AI’s structured role in error reduction.",
                    },
                    {
                        id: 4,
                        icon: "/assets/img/ai-agent-event-planner/4.svg",
                        title: "24/7 Support",
                        description:
                            "A virtual event planner agent and AI event planning assistant provide always-on support through chatbots for event guests and AI-powered guest management. PCMA’s Enhancing Events with AI program recognizes AI’s value for global and round-the-clock event needs.",
                    },
                    {
                        id: 5,
                        icon: "/assets/img/ai-agent-event-planner/5.svg",
                        title: "Stress-Free Events",
                        description:
                            "An AI event planning assistant or AI agent event coordinator handles logistics while offering personalized event recommendations, theme suggestion AI, and guest experience personalization. Following CMP standards, these systems ensure professional-grade outcomes.",
                    },
                ]}
            />
            
            <CustomerGrowthCards
                tag="Solutions"
                heading="What Our AI Agent Event Planner Solutions Include"
                description={[
                    "Event planning requires more than coordination. It needs accuracy, adaptability, and personalization at every step. Our AI agent event planner delivers solutions designed to simplify complex workflows and support organizers with intelligent automation.",
                ]}
                solutions={[
                    {
                        id: 1,
                        iconColor: "bg-pink-500",
                        title: "Event Coordinator Agent",
                        description:
                            "The event coordinator agent keeps event operations aligned by managing timelines, assigning tasks, and monitoring progress. It ensures vendors, staff, and attendees stay on schedule while reducing risks of delays or miscommunication.",
                    },
                    {
                        id: 2,
                        iconColor: "bg-purple-500",
                        title: "Smart Scheduling",
                        description:
                            "Our AI event organizer tool works alongside a virtual event planner agent to automate scheduling tasks. With event planning workflow automation and AI-driven scheduling optimization, schedules are built without overlaps and can quickly adapt to last-minute changes, ensuring events stay on track.",
                    },
                    {
                        id: 3,
                        iconColor: "bg-teal-500",
                        title: "Guest & RSVP Management",
                        description:
                            "A virtual event planner agent supported by an AI event planning assistant manages invitations, attendance lists, and confirmations. Features such as guest management AI and automated RSVP tracking reduce manual effort while creating a smooth experience for attendees from the moment they register.",
                    },
                    {
                        id: 4,
                        iconColor: "bg-teal-500",
                        title: "Automated Reminders & Updates",
                        description:
                            "An AI event planning assistant paired with an intelligent event planner agent keeps communication consistent. With real-time event dashboards and automated notifications, attendees, staff, and vendors receive timely updates across multiple channels, minimizing confusion and last-minute miscommunication.",
                    },
                    {
                        id: 5,
                        iconColor: "bg-teal-500",
                        title: "Personalized Event Experiences",
                        description:
                            "Our AI-powered event planner agent enhances engagement through personalization. With personalized event recommendations and theme suggestion AI, agendas and experiences adapt to guest preferences. In line with CMP and CSEP standards, personalization stays professional and reliable.",
                    },
                ]}
                buttonText="Simplify Your Event Planning"
                buttonLink="#"
            />
            <BrandLogoSlider />
            <CustomerServiceCard
                tag="Why Kogents"
                heading="Why Kogents AI Agent Event Planner Stands Out"
                description={[
                    "Our AI agent event planner is designed to deliver reliability, adaptability, and professional-grade results across every stage of event management.",
                ]}
                differentiators={[
                    {
                        id: 1,
                        icon: "/assets/img/ai-agent-event-planner/6.svg",
                        title: "Customization",
                        description:
                            "With customizable AI event planner workflows, planners can adapt processes for weddings, conferences, or corporate functions, ensuring each event follows its unique requirements.",
                    },
                    {
                        id: 2,
                        icon: "/assets/img/ai-agent-event-planner/7.svg",
                        title: "Integration",
                        description:
                            "Through integration with event management software, data flows easily across scheduling, RSVPs, and logistics without disrupting existing systems.",
                    },
                    {
                        id: 3,
                        icon: "/assets/img/ai-agent-event-planner/8.svg",
                        title: "Accuracy",
                        description:
                            "An AI-driven dashboard for event logistics provides real-time visibility, reduces scheduling conflicts, and keeps planning details consistent.",
                    },
                    {
                        id: 4,
                        icon: "/assets/img/ai-agent-event-planner/9.svg",
                        title: "Human Oversight",
                        description:
                            "Our approach balances automation with expertise. Human-in-the-loop AI event planning ensures professional judgment remains central, reinforced by certifications such as CMP, CSEP, and recognition from MPI.",
                    },
                    {
                        id: 5,
                        icon: "/assets/img/ai-agent-event-planner/10.svg",
                        title: "Proven Experience",
                        description:
                            "Our solutions are informed by industry best practices and global standards, bringing practical insights that align technology with the expectations of professional event planners.",
                    },
                    {
                        id: 6,
                        icon: "/assets/img/ai-agent-event-planner/11.svg",
                        title: "Smooth Coordination",
                        description:
                            "By connecting guests, vendors, and organizers through automated workflows, coordination becomes faster and more reliable, reducing delays and bottlenecks.",
                    },
                    {
                        id: 7,
                        icon: "/assets/img/ai-agent-event-planner/12.svg",
                        title: "Scalable for Any Event",
                        description:
                            "Workflows remain consistent whether managing a private gathering or an international conference. Scaling does not affect accuracy, guest experience, or vendor coordination.",
                    },
                ]}
            />
            <AwardSection />
            <FaqWithImage
                tag="Process"
                heading="How We Manage Every Stage"
                description={`Event planning demands structure and reliability at every stage. Our process ensures that each step is clear, consistent, and backed by intelligent automation.`}
                faqItems={[
                    {
                        id: 1,
                        q: "Identify Pain Points",
                        a: "The process begins by assessing areas where planners face challenges such as high admin workload in event planning and manual RSVP tracking. Understanding these bottlenecks allows us to target the tasks that consume the most time and resources.",
                        image: "/assets/img/ai-agent-event-planner/identify-pain-points.webp",
                    },
                    {
                        id: 2,
                        q: "Deploy AI Agent",
                        a: "Once priorities are clear, we deploy an AI event planning assistant to automate repetitive work, streamline scheduling, and handle guest communication. This immediate deployment reduces manual tasks while improving accuracy across early planning stages.",
                        image: "/assets/img/ai-agent-event-planner/deploy-ai-agent.webp",
                    },
                    {
                        id: 3,
                        q: "Train & Integrate",
                        a: "Next, the system is connected through event management software integration, ensuring compatibility with existing workflows. Features such as AI-powered event dashboards give planners real-time visibility into schedules, guest lists, and vendor updates.",
                        image: "/assets/img/ai-agent-event-planner/train-and-integrate.webp",
                    },
                    {
                        id: 4,
                        q: "Optimize & Scale",
                        a: "Finally, the system is refined to adapt over time. With scalable event planning automation and AI-enhanced attendee engagement, organizers can manage events of any size while continuously improving guest experiences and operational efficiency.",
                        image: "/assets/img/ai-agent-event-planner/optimize-and-scale.webp",
                    }
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
                buttonText="Plan with AI Now"
                leftColumn={{
                    tag: "Start Now",
                    title: "Don’t Let Events Slow You Down",
                    subtitle: "Manual planning drains time and increases errors. Now is the moment to hire an AI event planner that saves hours and simplifies execution. With the best AI event planning software, you can manage logistics and guests in real time without delays. For weddings, conferences, or corporate events, book an AI agent for event planning today and keep everything on schedule.",
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

           {/* Add SummarySolution component here */}
           {pageData.summary && <SummarySolution data={pageData.summary} />}

            <CustomerServiceFaqSection
                tag="FAQs"
                heading="Frequently Asked Questions"
                description=""
                faqItems={[
                    {
                        q: "What makes Kogents different from other providers?",
                        a: "Kogents offers an AI agent event planner built for professionals, combining automation with human oversight and aligning with CMP and CSEP standards."
                    },
                    {
                        q: "How do Kogents support corporate events?",
                        a: "Our AI event planning assistant manages schedules, guest lists, vendors, and compliance in real time to reduce admin work and improve accuracy."
                    },
                    {
                        q: "Can Kogents integrate with our existing tools?",
                        a: "Yes. Kogents enables smooth event management software integration, connecting with existing systems without workflow disruption."
                    },
                    {
                        q: "Does Kogents work for all event sizes?",
                        a: "Yes. Our AI event planner agent scales from small gatherings to large conferences while ensuring accuracy and cost control."
                    },
                    {
                        q: "What is an AI agent event planner?",
                        a: "An AI agent event planner is an intelligent assistant that automates event logistics, scheduling, guest management, and vendor coordination. It reduces manual workload while improving accuracy and efficiency."
                    },
                    {
                        q: "How do AI agents help event planning?",
                        a: "AI agents support planners by automating repetitive tasks like RSVP tracking, budgeting, and vendor communication. They also personalize attendee experiences and provide real-time updates to keep events on track."
                    },
                    {
                        q: "What are the benefits of AI event planning assistants?",
                        a: "The main benefits include time savings, cost control, error reduction, 24/7 support, and enhanced personalization for attendees. These advantages make AI assistants valuable for both small and large-scale events."
                    },
                    {
                        q: "Can I see case studies of AI event planners in action?",
                        a: "Yes. Case studies demonstrate how organizations have used AI event planning assistants to cut costs, improve guest experiences, and streamline operations. These real-world examples highlight measurable results across different event types."
                    },
                    {
                        q: "How can I hire an AI event planner agent?",
                        a: "You can hire an AI event planner agent through platforms that specialize in event technology solutions. The process usually involves defining your event needs, integrating the software, and customizing workflows."
                    },
                    {
                        q: "What is the best AI event planner service available?",
                        a: "The best AI event planner service is one that combines automation, real-time dashboards, vendor coordination, and guest management while aligning with industry standards like CMP and CSEP certifications."
                    },
                    {
                        q: "Can I buy AI event planning software?",
                        a: "Yes. Many providers offer AI event planning software as a subscription-based solution. Pricing depends on event size, required features, and the level of customization."
                    },
                    {
                        q: "Can I book an AI agent for wedding planning?",
                        a: "Absolutely. An AI agent for wedding planning can manage guest lists, automate RSVPs, suggest themes, and handle vendor coordination, giving couples more time to focus on personal details."
                    },
                    {
                        q: "How much does an AI event planning assistant cost?",
                        a: "AI event planning assistant pricing varies based on scale, integrations, and features. Entry-level packages suit smaller events, while enterprise-level solutions include advanced dashboards and integrations for larger conferences."
                    },
                    {
                        q: "What is the top AI event planner software right now?",
                        a: "The top AI event planner software is defined by its ability to automate logistics, personalize experiences, and scale for any event size while being trusted by professional planners. Reviews and certifications can guide the right choice."
                    },
                    {
                        q: "How do AI event planners compare to human event planners?",
                        a: "An AI event agent vs. human event planner comparison shows that AI handles repetitive and data-driven tasks faster, while humans bring creativity, negotiation, and relationship management. The best approach is often a hybrid of both."
                    },
                    {
                        q: "Are there reviews of AI event planning assistants I can check?",
                        a: "Yes. Independent reviews highlight user experiences, reliability, and results delivered by different platforms. These insights help planners choose a solution that matches their event needs."
                    },
                    {
                        q: "Does AI event planning cost less than traditional planning?",
                        a: "In most cases, yes. AI event agent vs. traditional planning costs show lower overhead due to automation, fewer errors, and better budget monitoring, making AI a cost-effective solution."
                    }
                ]}


                buttonText="Connect With AI Agent"
            />
            <BlogList />
        </>
    );
};

export default page;
