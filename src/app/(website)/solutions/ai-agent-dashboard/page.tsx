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
    title: 'Best AI Agent Dashboard for Smarter Insights | Kogents.ai',
    description:
        'Gain instant insights with our AI agent dashboard that simplifies data and drives smarter actions. Get started today.',
    keywords: [
        // Primary Keyword
        "AI agent dashboard",

        // Variations
        "AI agents dashboard",
        "agentic AI dashboard",
        "AI agent analytics dashboard",
        "real-time AI agent dashboard",
        "AI dashboard for agents",
        "AI agent performance dashboard",
        "AI agent monitoring dashboard",
        "agentic analytics dashboard",

        // LSI Keywords
        "AI agent monitoring",
        "performance metrics",
        "real-time insights",
        "embedded analytics",
        "monitoring dashboard",
        "response times",

        // Query Intent - Informational
        "What is an AI agent dashboard?",
        "How do AI agent dashboards work?",
        "Benefits of using AI agent dashboards",
        "Difference between AI dashboards and static dashboards",

        // Query Intent - Navigational
        "Best AI agent dashboards 2025",
        "AI agent dashboard vs traditional analytics",
        "Top AI agent analytics tools",

        // Query Intent - Transactional
        "AI agent dashboard software pricing",
        "AI agent dashboard demo",
        "AI agent dashboard for businesses",
        "Buy AI agent monitoring dashboard"
    ],

    alternates: {
        canonical: 'https://kogents.ai/solutions/ai-agent-dashboard',
        languages: {
            'en-US': 'https://kogents.ai/solutions/ai-agent-dashboard',
        },
    },

    openGraph: {
        title: 'Best AI Agent Dashboard for Smarter Insights | Kogents.ai',
        description:
            'Gain instant insights with our AI agent dashboard that simplifies data and drives smarter actions. Get started today.',
        url: 'https://www.kogents.ai/solutions/ai-agent-dashboard', 
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
        { label: 'AI Agent Dashboard', active: true }
    ];

    const pageData = {
        banner: {
            tag: "AI Agent Dashboard",
            title: "AI Agent Dashboard Delivering Unified Data and Clear Insights",
            button: {
                text: "Get AI Support Now",
                link: "/request-demo",
                iconSrc: "/assets/img/icons/arrow-right.svg",
                modalTarget: "#welcomeModal",
            },
            description:
                "Too many dashboards slow decisions and bury what matters.\n \n Scattered insights force teams to chase numbers instead of making progress.\n \n The AI agents dashboard from Kogents brings everything into one clear view. It lightens the load, reduces errors, and gives teams the clarity to act with confidence.\n \n Let’s make every report sharper and every choice easier.",
            image: {
                src: "/assets/img/ai-agent-dashboard/banner.webp",
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
                    responseTime: 4,
                    supportTickets: 80,
                    resolutionRate: 2,
                    roi: 65,
                }}
                labels={{
                    responseTime: "Faster customer query resolution",
                    supportTickets: "Automation of repetitive workflows",
                    resolutionRate: "Improvement in customer satisfaction scores",
                    roi: "Reduction in response time",
                }}
                units={{
                    responseTime: "×",
                    supportTickets: "%",
                    resolutionRate: "×",
                    roi: "%",
                }}
                title=""
                subtitle=""
            />
            <CustomerCards
                tag="Benefits"
                colSize="col-lg-6 col-md-6 col-12"
                heading="Why the AI Agent Dashboard Enhances Monitoring and Control"
                description={`The AI agent analytics dashboard transforms raw data into clear insights in seconds, giving businesses a clear view of all the information they need to keep track of to perform and make decisions that influence the results.`}
                showButton={true}
                buttonText="Test It in Class Now"
                benefits={[
                    {
                        id: 1,
                        icon: "/assets/img/ai-agent-dashboard/1.svg",
                        title: "Real-Time Visibility Across Metrics",
                        description:
                            "With powerful AI agent monitoring, you get instant visibility into the metrics that matter most, with no delays or blind spots. Real-time insights allow you to identify problems early, act quickly, and stay ahead of the curve.",
                    },
                    {
                        id: 2,
                        icon: "/assets/img/ai-agent-dashboard/2.svg",
                        title: "Simplify Data Into Clear Insights",
                        description:
                            "The agentic analytics dashboard makes things that are hard to understand clear, giving your team easy-to-understand information they can use right away. No more wasting time looking for numbers; you can get useful information right away.",
                    },
                    {
                        id: 3,
                        icon: "/assets/img/ai-agent-dashboard/3.svg",
                        title: "Accuracy That Builds Confidence",
                        description:
                            "The dashboard agents make sure that every report is accurate, which cuts down on mistakes and increases trust in your decisions. Your team can move forward with confidence, knowing that every decision is based on factual information.",
                    },
                    {
                        id: 4,
                        icon: "/assets/img/ai-agent-dashboard/4.svg",
                        title: "Efficiency Through Smarter Monitoring",
                        description:
                            "The AI agent dashboard guarantees timely updates, streamlines processes, and automates tracking. It ensures that your business runs smoothly daily by eliminating obstacles and optimizing routine monitoring.",
                    },
                ]}
            />
            
            {/* <HealthCareCaseStudySection /> */}

            <CustomerGrowthCards
                tag="Solutions"
                heading="Agentic AI Dashboard Services to Simplify Data and Decisions"
                description=""
                solutions={[
                    {
                        id: 1,
                        iconColor: "bg-pink-500",
                        title: "Dashboards That Show What Matters",
                        description:
                            "Our agentic AI dashboard does all the work by constantly scanning data streams to find trends or irregularities and show only the most important metrics.",
                    },
                    {
                        id: 2,
                        iconColor: "bg-purple-500",
                        title: "Tracking That Ends Reporting Stress",
                        description:
                            "With an AI agent performance dashboard, you can ditch those hours spent on manual reports. The system collects detailed info and shows real-time stats, so you can check out productivity, quality, and performance right away. ",
                    },
                    {
                        id: 3,
                        iconColor: "bg-teal-500",
                        title: "Views That Keep Teams Aligned",
                        description:
                            "Your real-time AI agent dashboard is your go-to spot for all the info you need. It brings together embedded analytics data from different processes, helps everyone stay on the same page, and makes sure decisions are based on the same insights.",
                    },
                    {
                        id: 4,
                        iconColor: "bg-teal-500",
                        title: "Monitoring That Keeps Workflows Smooth",
                        description:
                            "Continuous, detailed monitoring of agent workflows makes it easier to identify issues, analyze performance, and improve procedures, all of which contribute to seamless operations.",
                    },
                ]}
                buttonText="Automate Your Tasks Now"
                buttonLink="#"
            />
            <BrandLogoSlider />
            <CustomerServiceCard
                tag="Why Kogents"
                heading="What Makes The AI Agent Performance Dashboard Deliver Perks"
                description=""
                differentiators={[
                    {
                        id: 1,
                        icon: "/assets/img/ai-agent-dashboard/5.svg",
                        title: "Insights Without The Complexity",
                        description:
                            "Our platform delivers real-time insights without heavy reports. It constantly tracks data and highlights what matters, so you can act quickly with confidence.",
                    },
                    {
                        id: 2,
                        icon: "/assets/img/ai-agent-dashboard/6.svg",
                        title: "Dashboards That Keep Data Aligned",
                        description:
                            "The intelligent AI agent monitoring dashboard unifies performance and workflow data into one view. This way, your teams stay in sync with shared metrics and real-time records.",
                    },
                    {
                        id: 3,
                        icon: "/assets/img/ai-agent-dashboard/7.svg",
                        title: "Accuracy You Can Trust In Every Report",
                        description:
                            "Detailed performance metrics are tracked and evaluated instantly. Live dashboards flag errors and provide pipelines for deeper analysis when needed.",
                    },
                    {
                        id: 4,
                        icon: "/assets/img/ai-agent-dashboard/8.svg",
                        title: "Monitoring That Moves At Your Speed",
                        description:
                            "Our monitoring keeps pace with your business, sending instant alerts and offering real-time oversight so you can respond faster and minimize risks.",
                    },
                    {
                        id: 5,
                        icon: "/assets/img/ai-agent-dashboard/9.svg",
                        title: "Smarter Workflows With Less Manual Effort",
                        description:
                            "The smart agentic AI dashboard automates routine tracking and diagnostics, reducing overhead. Your team can focus on strategy while workflows run smoothly.",
                    },
                ]}
            />
            <AwardSection />
            <FaqWithImage
                tag="Process"
                heading="The Process Behind Our AI Agent Dashboard"
                description=""
                faqItems={[
                    {
                        id: 1,
                        q: "Define Metrics",
                        a: "To begin, the AI agent dashboard assists you in identifying the precise metrics that are most important to your business, including response times, task completion rates, and overall efficiency.",
                        image: "/assets/img/ai-agent-dashboard/define-metrics.webp",
                    },
                    {
                        id: 2,
                        q: "Connect Data",
                        a: "After that, the AI dashboard for agents compiles data from all the sources you use. It gathers all of your data into a single location, saving you the trouble of managing multiple systems and reports. That way, everyone on the team is working from the most current, accurate information.",
                        image: "/assets/img/ai-agent-dashboard/connect-data.webp",
                    },
                    {
                        id: 3,
                        q: "Build Dashboards",
                        a: "Once your data is in sync, the system puts it into dashboards that are designed to be clear and quick. It's easy for teams to find the answers they need right away because each view is customized to show only the important information.",
                        image: "/assets/img/ai-agent-dashboard/build-dashboards.webp",
                    },
                    {
                        id: 4,
                        q: "Automate Monitoring",
                        a: "The intelligent AI dashboard continuously monitors activity, highlights irregularities, and instantly sends out alerts. That way, you'll never be caught off guard and will be able to act when something needs your attention.",
                        image: "/assets/img/ai-agent-dashboard/automate-monitoring.webp",
                    },
                    {
                        id: 5,
                        q: "Optimize Performance",
                        a: "Lastly, the AI agent dashboard closes the loop by turning what it learns into improvements. With the help of tools provided by continuous evaluation, you can improve workflows, enhance decision-making, and drive ongoing performance gains by identifying trends and obstacles.",
                        image: "/assets/img/ai-agent-dashboard/optimize-performance.webp",
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
                buttonText="Get Your Price Now"
                leftColumn={{
                    tag: "Start Free Trial",
                    title: "Get Clarity That Drives Performance with Kogents",
                    subtitle: "Too many tools, too little clarity. The Kogents AI Agent Dashboard cuts through the noise, giving you one real-time view of what matters so decisions are faster and results come quicker.",
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
                        q: "What makes the Kogents AI Agent Dashboard different?",
                        a: "Kogents stands apart from generic dashboards by unifying performance, monitoring, and analytics in real time, providing insights that are not only swift but also customized to meet your business needs."
                    },
                    {
                        q: "How quickly can I get started with Kogents?",
                        a: "Kogents AI Agent Dashboard is made to be easily set up. Many businesses begin to experience real-time insights and tangible improvements within days, rather than months."
                    },
                    {
                        q: "Why do leading teams choose Kogents?",
                        a: "Our dashboard transforms fragmented data into practical insights, enabling teams to operate more efficiently, synchronize swiftly, and expand with assurance."
                    },
                    {
                        q: "What is an AI agent dashboard?",
                        a: "An AI agent dashboard is a single interface that collects data from smart agents and displays it all in one place. It turns hard-to-understand data into easy-to-read visuals that are updated in real time. This makes it easier for teams to keep track of performance, workflows, and results."
                    },
                    {
                        q: "How do AI agent dashboards work?",
                        a: "AI agent dashboards link to many data sources, keep an eye on activity all the time, and use automation to keep an eye on important metrics. The information is shown in easy-to-read dashboards, which often have alerts and suggestions that help you make decisions and take action more quickly."
                    },
                    {
                        q: "What are the benefits of using AI agent dashboards?",
                        a: "An AI agent dashboard provides instant insights instead of static reports. It reduces manual tracking, integrates data, improves accuracy, and lets organisations respond quickly to risks and opportunities."
                    },
                    {
                        q: "What is the difference between AI dashboards and static dashboards?",
                        a: "An AI dashboard updates in real time and adjusts to new data, whereas a static dashboard displays pre-defined, fixed reports that are rarely changed. AI dashboards are much more dynamic and dependable because they also automatically highlight anomalies and produce actionable insights."
                    },
                    {
                        q: "How can AI agent dashboards improve team collaboration?",
                        a: "An intelligent AI agent dashboard centralizes performance and workflow data into one real-time view, keeping everyone aligned, reducing misunderstandings, and enabling faster, unified decision-making."
                    }
                ]}

                buttonText="Connect With AI Agent"
            />
            <BlogList />
        </>
    );
};

export default page;
