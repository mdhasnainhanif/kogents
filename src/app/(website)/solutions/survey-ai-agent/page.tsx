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
    title: 'Expert Survey AI Agent for Smarter Analytics | Kogents.ai',
    description:
        'Improve decision-making by using our survey AI agent that captures opinions, detects patterns, and generates instant reports. Learn more today.',
    keywords: [],
    alternates: {
        canonical: 'https://kogents.ai/solutions/survey-ai-agent',
        languages: {
            'en-US': 'https://kogents.ai/solutions/survey-ai-agent',
        },
    },
    openGraph: {
        title: 'Expert Survey AI Agent for Smarter Analytics | Kogents.ai',
        description:
            'Improve decision-making by using our survey AI agent that captures opinions, detects patterns, and generates instant reports. Learn more today.',
        url: 'https://www.kogents.ai/solutions/survey-ai-agent',
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
        { label: 'Survey AI Agent', active: true }
    ];
    const pageData = {
        banner: {
            tag: "Survey AI Agent",
            title: "Engage, Automate, and Improve with Kogents Survey AI Agent",
            button: {
                text: "Get Smarter Survey Insights",
                link: "/request-demo",
                iconSrc: "/assets/img/icons/arrow-right.svg",
                modalTarget: "#welcomeModal",
            },
            description:
                "Traditional surveys face low response rates and delayed feedback.\n At Kogents, our Survey AI Agent uses AI chatbot surveys, automated questionnaires, and machine learning surveys to increase engagement and capture accurate results. \n With AI-driven data collection, stronger respondent engagement, and advanced sentiment analysis, you get insights that are immediate and reliable.",
            image: {
                src: "/assets/img/survey-ai-agent/banner.webp",
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
                    responseTime: 85,
                    supportTickets: 60,
                    resolutionRate: 40,
                    roi: 100,
                }}
                labels={{
                    responseTime: "Higher response rates",
                    supportTickets: "Less admin time",
                    resolutionRate: "Enterprise clients",
                    roi: "Data compliance",
                }}
                units={{
                    responseTime: "%",
                    supportTickets: "%",
                    resolutionRate: "+",
                    roi: "%",
                }}
                title=""
                subtitle=""
            />
            <CustomerCards
                tag="Benefits"
                heading="Why Survey AI Agents Lead to Smarter Decisions"
                description={`Surveys are often slowed by low responses and manual processes. A survey AI solution addresses these challenges with faster collection, smarter engagement, and reliable results.`}
                benefits={[
                    {
                        id: 1,
                        icon: "/assets/img/survey-ai-agent/1.svg",
                        title: "Saves Time",
                        description:
                            "With automated survey collection and a survey bot, teams cut manual effort and achieve faster data collection. Built-in automation and AI-powered workflows streamline operations, supported by standards such as ISO 27001 and the NIST AI RMF for secure automation.",
                    },
                    {
                        id: 2,
                        icon: "/assets/img/survey-ai-agent/2.svg",
                        title: "Asks Smarter Questions",
                        description:
                            "AI-enabled survey tools adapt in real time. An intelligent survey assistant powered by natural language processing acts as a conversational survey agent, enabling adaptive questioning and dynamic branching logic for more relevant and personalized feedback.",
                    },
                    {
                        id: 3,
                        icon: "/assets/img/survey-ai-agent/3.svg",
                        title: "Understands Opinions",
                        description:
                            "An AI chatbot survey and other digital feedback tools apply sentiment analysis, text response classification, and opinion mining to reveal deeper respondent engagement and response quality. Research from the Pew Research Center and the Journal of Survey Statistics and Methodology supports these methods.",
                    },
                    {
                        id: 4,
                        icon: "/assets/img/survey-ai-agent/4.svg",
                        title: " Instant Results",
                        description:
                            "AI-driven analytics deliver real-time survey insights and automated reporting. With predictive analytics and machine learning models, teams gain instant dashboards and continuous response tracking.",
                    },
                    {
                        id: 5,
                        icon: "/assets/img/survey-ai-agent/5.svg",
                        title: "Works at Any Scale",
                        description:
                            "A scalable survey AI supports enterprise survey automation and a multi-channel survey agent for web, mobile, and social distribution. Features like big data survey processing and cross-platform integration enable accurate analysis from small to large sample studies.",
                    },
                    {
                        id: 6,
                        icon: "/assets/img/survey-ai-agent/6.svg",
                        title: "Cuts Costs",
                        description:
                            "A cost-effective survey AI agent lowers expenses through workflow automation and efficiency optimization. By reducing manual workload and improving ROI, organizations achieve savings while staying compliant with CCPA, GDPR, and HIPAA.",
                    },
                ]}
            />

            <BrandLogoSlider />
            <CustomerGrowthCards
                tag="Solutions"
                heading="Our End-to-End Survey AI Solutions for Modern Organizations"
                description={`We provide survey solutions designed to improve every stage of the process, from creating questions to analyzing results. Each capability focuses on making surveys more accurate, engaging, and efficient.`}
                solutions={[
                    {
                        id: 1,
                        iconColor: "bg-pink-500",
                        title: "Question Design & Generation",
                        description: [
                            "Our survey AI agent works as an intelligent survey assistant to build context-aware questionnaires. By applying NLP-powered surveys and natural language processing, we enable dynamic question generation and automated questionnaire creation for smarter survey design."
                        ],
                    },
                    {
                        id: 2,
                        iconColor: "bg-purple-500",
                        title: "Survey Personalization",
                        description: [
                            "With an AI survey chatbot guided by an intelligent survey agent, we create conversational survey agents that adjust to each respondent. Using user profiling and adaptive branching logic, surveys provide personalized feedback that strengthens respondent engagement."
                        ],
                    },
                    {
                        id: 3,
                        iconColor: "bg-teal-500",
                        title: "Multi-Channel Distribution",
                        description: [
                            "Our automated survey agent within a survey AI platform ensures reach across channels. We deliver web surveys, mobile surveys, social media integrations, and email distribution through cross-platform delivery and omni-channel survey distribution."
                        ],
                    },
                    {
                        id: 4,
                        iconColor: "bg-teal-500",
                        title: "Response Processing & Sentiment Analysis",
                        description: [
                            "We use NLP-powered surveys and AI-driven analytics to interpret feedback through text analysis, sentiment analysis, and response classification. This process captures respondent opinions and qualitative insights, supported by findings from the Pew Research Center and the Journal of Survey Statistics and Methodology."
                        ],
                    },
                    {
                        id: 5,
                        iconColor: "bg-teal-500",
                        title: "Data Visualization & Reporting",
                        description: [
                            "With AI-driven survey insights and secure survey automation, results are converted into real-time dashboards and automated reporting. Supported by predictive analytics and machine learning models, we provide instant results with accurate response tracking."
                        ],
                    },
                    {
                        id: 6,
                        iconColor: "bg-teal-500",
                        title: "Integration & Automation",
                        description: [
                            "We connect surveys with existing systems through an automated survey agent and privacy-compliant survey AI. Using workflow automation, enterprise integration, and API connectivity, our approach supports CRM and ERP workflows while meeting HIPAA, CCPA, and IEEE Ethical AI standards."
                        ],
                    },
                ]}
                buttonText="Get Your Survey AI Agent"
                buttonLink="#"
            />
            <BrandLogoSlider />
            <CustomerServiceCard
                tag="Why Kogents"
                heading="What Sets Our Survey AI Agent Apart from Others"
                description={[
                    "We design survey intelligence with a focus on accuracy, adaptability, and engagement. Each strength reflects how our approach makes data collection smarter, more reliable, and ready for real-world use."
                ]}
                differentiators={[
                    {
                        id: 1,
                        icon: "/assets/img/survey-ai-agent/7.svg",
                        title: "Human-Like Understanding",
                        description: [
                            "Our customizable AI survey agents interpret responses with natural language interpretation and contextual understanding. By using conversational AI, we capture intent more effectively, ensuring surveys feel natural while delivering accurate insights."
                        ],
                    },
                    {
                        id: 2,
                        icon: "/assets/img/survey-ai-agent/8.svg",
                        title: "Adaptive Learning",
                        description: [
                            "Through integration with CRM and analytics platforms, our surveys adjust over time to reflect changing data. With adaptive workflows and self-improving surveys, every interaction supports data-driven refinement and smarter outcomes."
                        ],
                    },
                    {
                        id: 3,
                        icon: "/assets/img/survey-ai-agent/9.svg",
                        title: "Bias-Free Feedback Collection",
                        description: [
                            "We prioritize fairness by designing processes that ensure proven accuracy in respondent sentiment analysis. Using methods that reduce bias and deliver reliable results, feedback is captured with consistency and unbiased data collection."
                        ],
                    },
                    {
                        id: 4,
                        icon: "/assets/img/survey-ai-agent/10.svg",
                        title: "End-to-End Automation",
                        description: [
                            "Our system supports automated survey workflows that manage everything from design to reporting. With process efficiency, compliance-ready automation, and workflow integration, surveys run smoothly while reducing manual effort."
                        ],
                    },
                    {
                        id: 5,
                        icon: "/assets/img/survey-ai-agent/11.svg",
                        title: "Predictive Insights",
                        description: [
                            "We go beyond reporting by delivering predictive insights that guide decisions before trends take shape. Using analytics-driven outcomes, forecasting, and advanced modeling, we turn survey results into forward-looking strategies."
                        ],
                    },
                    {
                        id: 6,
                        icon: "/assets/img/survey-ai-agent/12.svg",
                        title: "Engagement-First Design",
                        description: [
                            "Every interaction is shaped around participation. With engagement-first design and a conversational survey agent, we create surveys that adapt to each respondent, improving respondent experience through tailored interactions and dynamic flows."
                        ],
                    },
                ]}
            />
            <AwardSection />
            <FaqWithImage
                tag="Process"
                heading="Our Proven Process for Smarter Surveys"
                description={`We follow a structured process to ensure surveys are efficient, accurate, and aligned with your goals. Each step focuses on improving feedback collection and delivering actionable.`}
                faqItems={[
                    {
                        id: 1,
                        q: "Identify Survey Needs",
                        a: "We begin by analyzing feedback collection challenges to understand the scope and objectives. This stage shapes the foundation for survey automation, helping define the right questions, channels, and workflows to achieve reliable results.",
                        image: "/assets/img/survey-ai-agent/1.webp",
                    },
                    {
                        id: 2,
                        q: "Deploy AI Survey Agent",
                        a: "Once the framework is set, we introduce the AI survey chatbot as part of an automated survey agent deployment. This step ensures participants engage in natural, conversational interactions while surveys are delivered consistently across channels.",
                        image: "/assets/img/survey-ai-agent/2.webp",
                    },
                    {
                        id: 3,
                        q: "Train & Integrate",
                        a: "We refine accuracy by applying a machine learning model for survey data and enabling NLP survey analysis. This integration allows the system to process open-ended responses, identify themes, and connect seamlessly with existing business tools.",
                        image: "/assets/img/survey-ai-agent/3.webp",
                    },
                    {
                        id: 4,
                        q: "Monitor & Optimize",
                        a: "The process continues with ongoing tracking through AI-driven analytics. By focusing on response quality improvement and respondent engagement, we continuously optimize surveys, ensuring they stay relevant and deliver meaningful insights.",
                        image: "/assets/img/survey-ai-agent/4.webp",
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
                buttonText="Automate Feedback Now"
                leftColumn={{
                    tag: "Start Now",
                    title: "Design, Automate, and Optimize Your Surveys",
                    subtitle: "Overcome slow response rates and inconsistent feedback. With a survey AI agent, you eliminate manual effort through an intelligent survey assistant that drives higher engagement and faster insights. Our AI-powered survey tool automates collection, enhances accuracy, and delivers results you can act on in real time.",
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
                        q: "What makes Kogents Survey AI Agent different?",
                        a: "The Kogents Survey AI Agent offers customizable AI survey agents, seamless CRM and analytics integration, and proven sentiment analysis accuracy, all backed by strict data privacy and compliance standards."
                    },
                    {
                        q: "Does Kogents integrate with existing systems?",
                        a: "Yes, Kogents connects with major CRM, ERP, and analytics platforms, enabling real-time insights and automated feedback loops."
                    },
                    {
                        q: "How does Kogents ensure survey security and compliance?",
                        a: "We follow ISO 27001, NIST AI RMF, and IEEE Ethical AI guidelines, with full compliance to HIPAA, CCPA, and GDPR."
                    },
                    {
                        q: "Who should use Kogents Survey AI Agent?",
                        a: "Kogents is ideal for organizations seeking to cut manual survey work, improve response rates, and scale feedback collection with accuracy."
                    },
                    {
                        q: "What is a Survey AI Agent?",
                        a: "It is an intelligent survey assistant that automates feedback collection. It uses natural language processing and machine learning to engage respondents in conversational surveys, improving both participation rates and data accuracy."
                    },
                    {
                        q: "How does a Survey AI Agent work?",
                        a: "It works by automating question delivery, analyzing responses in real time, and adapting follow-up questions using contextual AI. It eliminates manual survey management and ensures feedback is captured efficiently across channels."
                    },
                    {
                        q: "What are the benefits of using AI for surveys?",
                        a: "The benefits of using AI for surveys include reduced administrative workload, higher respondent engagement, and faster insights. It also improves response quality through adaptive questioning and delivers accurate sentiment analysis at scale."
                    },
                    {
                        q: "How does a Survey Bot compare to human-led surveys?",
                        a: "It offers faster data collection and scalability compared to human-led surveys. While humans bring complexity, an AI-driven survey bot ensures consistency, reduces bias, and processes large volumes of feedback more efficiently."
                    },
                    {
                        q: "Can I buy Survey AI Agent software?",
                        a: "Yes, you can buy Survey AI Agent software and deploy it as part of your feedback collection system. It integrates with CRM platforms and analytics tools to streamline data processing."
                    },
                    {
                        q: "How much does a Survey AI Agent cost?",
                        a: "Survey AI Agent pricing depends on factors such as the number of respondents, features required, and integration level. Flexible subscription models are available to suit both small teams and enterprise organizations."
                    },
                    {
                        q: "Can I subscribe to a Survey AI Agent service?",
                        a: "Yes, you can subscribe to a Survey AI Agent service. A subscription model allows you to use the tool without upfront infrastructure costs while receiving regular updates and ongoing support."
                    },
                    {
                        q: "How does a Survey AI Agent compare to manual survey tools?",
                        a: "Compared to manual survey tools, a Survey AI Agent automates repetitive tasks, adapts questions based on context, and delivers real-time analytics. This reduces time-to-insight and ensures more reliable data quality."
                    }
                ]}
                buttonText="Connect With AI Agent"
            />
            <BlogList />
        </>
    );
};

export default page;
