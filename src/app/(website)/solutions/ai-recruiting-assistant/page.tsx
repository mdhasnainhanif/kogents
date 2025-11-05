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
    title: 'Find Talent Fast with AI Recruiting Assistant | Kogents AI',
    description: 'Use Kogents AI Recruiting Assistant for smart talent matchmaking, seamless hiring, and better candidate engagement. Get a free trial.',
    keywords: [],
    alternates: {
        canonical: 'https://kogents.ai/solutions/ai-recruiting-assistant/',
        languages: {
            'en-US': 'https://kogents.ai/solutions/ai-recruiting-assistant/',
        },
    },
    openGraph: {
        title: 'Find Talent Fast with AI Recruiting Assistant | Kogents AI',
        description:
            'Use Kogents AI Recruiting Assistant for smart talent matchmaking, seamless hiring, and better candidate engagement. Get a free trial.',
        url: 'https://kogents.ai/solutions/ai-recruiting-assistant/',
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
    robots: {
        index: false,
        follow: false,
    },
}
const page = () => {
    const breadcrumbItems = [
        { label: 'Solutions', href: '/solutions' },
        { label: 'AI Recruiting Assistant', active: true }
    ];
    const pageData = {
        banner: {
            tag: "AI Recruiting Assistant",
            title: "Hire Smarter and Faster with an AI Recruiting Assistant",
            button: {
                text: "Make Hiring Smarter",
                link: "/request-demo",
                iconSrc: "/assets/img/icons/arrow-right.svg",
                modalTarget: "#welcomeModal",
            },
            description:
                "Accelerate talent acquisition with an AI recruiting assistant that automates sourcing, screening, and communication to improve accuracy and speed.\nKogents AI blends artificial intelligence and recruitment automation to simplify hiring workflows and strengthen collaboration.\nThe AI hiring assistant integrates with HR software to enhance the candidate experience and streamline the automated hiring process through compliant, data-driven HR automation.",
            image: {
                src: "/assets/img/ai-recruiting-assistant/banner.webp",
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
                    supportTickets: 85,
                    resolutionRate: 77,
                    roi: 99,
                }}
                labels={{
                    responseTime: "Faster Screening",
                    supportTickets: "Shortlist Accuracy",
                    resolutionRate: "Faster Hiring",
                    roi: "Compliance Rate",
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
                heading="Why Organizations Rely on AI Recruiting Assistants"
                description={`Recruiters face increasing applicant volumes, repetitive screening, and slower decision cycles. AI recruiting assistants address these challenges through recruitment automation and machine learning in recruitment, optimizing key hiring stages and improving precision and speed at scale.`}
                benefits={[
                    {
                        id: 1,
                        icon: "/assets/img/ai-recruiting-assistant/1.svg",
                        title: "Efficiency and Time Savings",
                        description:
                            "With AI in hiring, tasks like resume screening and scheduling are automated, reducing recruiter workload and improving workflow optimization. Using natural language processing and intelligent scheduling, these systems accelerate shortlisting, optimize your talent pool, and achieve measurable time-to-hire reduction, allowing HR teams to focus on strategy and engagement.",
                    },
                    {
                        id: 2,
                        icon: "/assets/img/ai-recruiting-assistant/2.svg",
                        title: "Improved Candidate Quality",
                        description:
                            "AI improves hiring precision through predictive hiring analytics and candidate matching, identifying qualified talent while minimizing bias in hiring. Powered by semantic search and skills taxonomy, it interprets complex profiles to deliver stronger shortlists. This data-driven HR approach enhances talent analytics and supports consistent, fair hiring outcomes.",
                    },
                    {
                        id: 3,
                        icon: "/assets/img/ai-recruiting-assistant/3.svg",
                        title: "Enhanced Candidate Experience",
                        description:
                            "Personalized communication defines modern recruitment. With conversational AI, sentiment analysis, and automated updates, job seekers receive timely responses and transparent feedback. This improves the candidate experience, strengthens employer branding, and builds trust throughout the hiring journey.",
                    },
                    {
                        id: 4,
                        icon: "/assets/img/ai-recruiting-assistant/4.svg",
                        title: "Cost Reduction and Scalability",
                        description:
                            "AI-driven recruitment delivers measurable cost efficiency and scalability. By integrating HR automation tools and predictive pipeline forecasting, organizations lower hiring costs and manage larger applicant pools with the same team. These insights help optimize resources and scale recruitment efficiently across teams.",
                    },
                ]}
            />
            <BrandLogoSlider />
            <CustomerGrowthCards
                tag="Solutions"
                heading="Explore the Capabilities of Kogents AI Recruitment Assistant"
                description={`Kogents AI offers a unified suite of recruiting solutions that simplify sourcing, screening, and coordination. Each tool blends automation, analytics, and compliance to help organizations hire faster and maintain transparency across every stage of recruitment.`}
                solutions={[
                    {
                        id: 1,
                        iconColor: "bg-pink-500",
                        title: "Automated Candidate Sourcing",
                        description: [
                            "The AI recruiting platform identifies and engages qualified candidates through intelligent job matching and hiring process optimization. Integrated HR software and recruiting CRM systems improve collaboration, while ISO 30414 and AIHR standards ensure ethical, transparent sourcing practices."
                        ],
                    },
                    {
                        id: 2,
                        iconColor: "bg-purple-500",
                        title: "Intelligent Resume Screening and Shortlisting",
                        description: [
                            "The AI-powered applicant tracking system enhances screening accuracy by evaluating applicants with automated resume parsing and candidate ranking. Using bias-free algorithms and automation software, it improves shortlist precision and ensures fair, compliant evaluation aligned with EEOC and ISO 30414 standards."
                        ],
                    },
                    {
                        id: 3,
                        iconColor: "bg-teal-500",
                        title: "AI Chatbots and Candidate Engagement",
                        description: [
                            "The virtual recruiting assistant uses conversational AI to automate communication, manage updates, and deliver timely responses. Integrated with HR software and recruiting CRM, it maintains AIHR-certified communication standards that promote fairness and strengthen the candidate experience."
                        ],
                    },
                    {
                        id: 4,
                        iconColor: "bg-teal-500",
                        title: "Automated Interview Scheduling and Coordination",
                        description: [
                            "With automated interview scheduling, the virtual recruiting assistant and candidate hiring assistant align candidate and recruiter availability efficiently. Through HR software integration and calendar coordination, it simplifies logistics and ensures compliance under Gartner HR Technology and ISO 30414 frameworks."
                        ],
                    },
                    {
                        id: 5,
                        iconColor: "bg-teal-500",
                        title: "Integrated Efficiency and Compliance",
                        description: [
                            "Kogents AI solutions work together within one connected hiring ecosystem. From sourcing to scheduling, the automation software enables faster decisions, fair evaluation, and measurable improvement in operational efficiency."
                        ],
                    }
                ]}
                buttonText="Automate Your Recruitment"
                buttonLink="#"
            />
            <CustomerServiceCard
                tag="Why Kogents"
                heading="Why Organizations Trust Kogents AI for Smarter Hiring"
                description={[
                    "Most automation tools focus on speed, but Kogents AI blends intelligence, data, and human oversight to make hiring smarter. Designed for modern HR ecosystems, it offers customizable AI recruiting workflows that adapt to each organization’s structure and compliance goals."
                ]}
                differentiators={[
                    {
                        id: 1,
                        icon: "/assets/img/ai-recruiting-assistant/5.svg",
                        title: "Customizable AI Recruiting Workflows",
                        description: [
                            "Kogents AI enables teams to design recruiting automation that fits their unique process. Its customizable AI recruiting workflows streamline sourcing and shortlisting while maintaining recruiting automation accuracy and full control throughout the hiring cycle."
                        ],
                    },
                    {
                        id: 2,
                        icon: "/assets/img/ai-recruiting-assistant/6.svg",
                        title: "Integration with HR Platforms and ATS Systems",
                        description: [
                            "The platform connects with HR platforms and applicant tracking systems to improve coordination and data flow. This integration reduces manual input, strengthens transparency, and delivers consistent, reliable metrics for better hiring outcomes."
                        ],
                    },
                    {
                        id: 3,
                        icon: "/assets/img/ai-recruiting-assistant/7.svg",
                        title: "Human-in-the-Loop Recruiting Oversight",
                        description: [
                            "Automation works best with human judgment. With human-in-the-loop recruiting oversight, teams can review and approve AI-generated recommendations using explainable AI hiring models that reinforce accountability and control."
                        ],
                    },
                    {
                        id: 4,
                        icon: "/assets/img/ai-recruiting-assistant/8.svg",
                        title: "Predictive Analytics for Smarter Hiring Decisions",
                        description: [
                            "Kogents AI applies predictive analytics for hiring decisions to forecast candidate success and enhance workforce planning. Its transparent AI models turn data into measurable insights that refine selection accuracy and hiring quality."
                        ],
                    },
                    {
                        id: 5,
                        icon: "/assets/img/ai-recruiting-assistant/9.svg",
                        title: "Ethical and Transparent AI",
                        description: [
                            "Ethical design drives every feature. Kogents AI uses bias reduction algorithms and explainable frameworks aligned with Deloitte Human Capital Trends and Josh Bersin’s research on HR technology. Each process remains transparent, measurable, and compliant to ensure responsible automation."
                        ],
                    },
                ]}
            />
            <AwardSection />
            <FaqWithImage
                tag="Process"
                heading="How the AI Recruiting Assistant Works"
                description={`Kogents AI follows a structured, data-driven approach to streamline recruitment. Each step addresses HR challenges while maintaining transparency, fairness, and measurable performance.`}
                faqItems={[
                    {
                        id: 1,
                        q: "Identify Talent Acquisition Pain Points",
                        a: "The process begins by analyzing workflows to identify inefficiencies and bottlenecks. Understanding challenges in sourcing, screening, and engagement enables data-driven hiring and ensures automation focuses on improving pipeline efficiency and shortlist quality.",
                        image: "/assets/img/ai-recruiting-assistant/1.webp",
                    },
                    {
                        id: 2,
                        q: "Deploy AI Recruiting Assistant Tailored to Workflow",
                        a: "After pain points are identified, the AI recruiting assistant is deployed and customized to align with organizational workflows. This ensures AI-assisted interview scheduling and candidate engagement follow internal processes while supporting consistent and accurate hiring decisions.",
                        image: "/assets/img/ai-recruiting-assistant/2.webp",
                    },
                    {
                        id: 3,
                        q: "Integrate with Existing HR Systems",
                        a: "Integration with HR software and applicant tracking systems ensures smooth data flow across the recruitment pipeline. Synchronizing platforms reduces manual work, enhances transparency, and improves reporting accuracy and overall hiring efficiency.",
                        image: "/assets/img/ai-recruiting-assistant/3.webp",
                    },
                    {
                        id: 4,
                        q: "Monitor, Analyze, and Optimize Recruitment Pipeline",
                        a: "Continuous monitoring lets recruiters track performance, analyze trends, and optimize the pipeline. An automation feedback loop supports continuous model improvement and incorporates bias audit checkpoints to maintain fairness, transparency, and measurable outcomes at every stage.",
                        image: "/assets/img/ai-recruiting-assistant/4.webp",
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
                buttonText="Deploy Recruiting AI Now"
                leftColumn={{
                    tag: "Start Now",
                    title: "Get Better Matches and Accelerate Your Talent Pipeline",
                    subtitle: "Stop spending hours on manual screening and administrative tasks. Try the AI recruiting assistant today to automate sourcing, screening, and engagement while improving candidate outcomes.\nLeverage AI for HR innovation with next-gen recruiting tools that streamline workflows and ensure fairness, transparency, and compliance.",
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
                        q: "How does Kogents AI integrate with existing HR systems?",
                        a: "Kogents AI integrates seamlessly with HR platforms and applicant tracking systems, enabling real-time data synchronization, automated workflows, and unified reporting. This allows recruiters to access AI-driven insights and optimize hiring processes without disrupting existing systems.",
                    },
                    {
                        q: "Can Kogents AI support high-volume recruitment efficiently?",
                        a: "Yes, Kogents AI is built for scalable recruitment. It automates sourcing, screening, and interview scheduling, allowing teams to handle large applicant pools efficiently while maintaining fairness, transparency, and compliance at every stage.",
                    },
                    {
                        q: "What is an AI recruiting assistant?",
                        a: "An AI recruiting assistant is software that automates recruitment tasks such as sourcing, screening, candidate engagement, and interview scheduling. It uses artificial intelligence and machine learning to streamline workflows, improve decision accuracy, and reduce administrative workload for hiring teams.",
                    },
                    {
                        q: "How does AI improve recruitment?",
                        a: "AI improves recruitment by analyzing candidate data, predicting job fit, automating repetitive tasks, and delivering actionable insights. It accelerates time-to-hire, ensures consistency, and enables data-driven hiring decisions across the recruitment process.",
                    },
                    {
                        q: "What are the benefits of AI in hiring processes?",
                        a: "The benefits of AI in hiring processes include faster candidate screening, improved shortlist accuracy, bias mitigation, enhanced candidate experience, and measurable improvements in efficiency and cost-effectiveness.",
                    },
                    {
                        q: "What is the difference between AI and human recruiters?",
                        a: "AI handles repetitive, data-driven tasks like resume screening, interview scheduling, and candidate ranking. Human recruiters provide judgment, assess cultural fit, build relationships, and make strategic hiring decisions. Combining both ensures a balanced and efficient recruitment process.",
                    },
                    {
                        q: "What are the ethical concerns about AI in recruitment?",
                        a: "Ethical concerns about AI in recruitment focus on fairness, transparency, and bias. AI systems must include bias mitigation algorithms, continuous auditing, and explainable decision-making to ensure equitable hiring practices while maintaining compliance with industry standards.",
                    },
                    {
                        q: "Is there a free trial for Kogents AI recruiting platform?",
                        a: "Yes, Kogents AI offers a free trial for its AI recruiting platform, allowing organizations to test features such as automated candidate sourcing, screening, and AI-assisted interview scheduling before committing to a subscription.",
                    },
                    {
                        q: "How can I buy an AI-powered applicant tracking system?",
                        a: "You can buy an AI-powered applicant tracking system directly through Kogents AI. The platform integrates with HR software, streamlines workflows, and provides features like resume parsing, candidate ranking, and predictive analytics for smarter hiring decisions.",
                    },
                    {
                        q: "How to compare Kogents AI with top AI hiring assistants?",
                        a: "When comparing Kogents AI with top AI hiring assistants, consider workflow customization, HR system integration, predictive analytics, bias mitigation, and ease of use. Kogents AI stands out for its transparency, EEAT compliance, and measurable ROI.",
                    },
                    {
                        q: "What is the cost of AI hiring platforms?",
                        a: "The cost of AI hiring platforms varies based on features, number of users, and deployment options. Kogents AI offers flexible pricing models designed to scale with organizational size while delivering efficiency gains and measurable return on investment.",
                    },
                    {
                        q: "What is the difference between an AI recruiting assistant and a traditional ATS?",
                        a: "A traditional ATS manages candidate data and workflow tracking, while an AI recruiting assistant adds automation, predictive analytics, intelligent candidate matching, and bias mitigation. This allows faster, smarter, and more data-driven hiring decisions.",
                    },
                    {
                        q: "What is the ROI of using AI in recruitment?",
                        a: "The ROI of using AI in recruitment comes from reduced time-to-hire, lower recruitment costs, higher-quality shortlists, improved candidate experience, and more accurate hiring decisions. Organizations gain measurable efficiency and better alignment between talent and business needs.",
                    },
                ]}
                buttonText="Connect With AI Agent"
            />
            <BlogList />
        </>
    );
};

export default page;
