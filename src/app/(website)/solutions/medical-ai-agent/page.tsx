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
import BlogList from "@/components/blog/BlogList";
import React from "react";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Transform Care Delivery with Medical AI Agent | Kogents ai',
    description: 'Deploy a scalable medical AI agent that integrates with EHR, ensures compliance, and improves clinical performance. Contact Kogents AI today.',
    keywords: [],

    alternates: {
        canonical: 'https://kogents.ai/solutions/medical-ai-agent/',
        languages: {
            'en-US': 'https://kogents.ai/solutions/medical-ai-agent/',
        },
    },

    openGraph: {
        title: 'Transform Care Delivery with Medical AI Agent | Kogents ai',
        description:
            'Deploy a scalable medical AI agent that integrates with EHR, ensures compliance, and improves clinical performance. Contact Kogents AI today.',
        url: 'https://kogents.ai/solutions/medical-ai-agent/',
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
        { label: 'Medical AI Agent', active: true }
    ];

    const pageData = {
        banner: {
            tag: "Medical AI Agent",
            title: "Diagnose Faster & Treat Smarter with Medical AI Agent",
            button: {
                text: "Activate Your Medical AI Agent",
                link: "/request-demo",
                iconSrc: "/assets/img/icons/arrow-right.svg",
                modalTarget: "#welcomeModal",
            },
            description:
                "Improve diagnostic accuracy, reduce clinical workload, and deliver efficient data-driven care with our medical AI agent.\n \n At Kogents AI, our AI-powered medical assistant, a next-generation clinical AI agent, combines deep learning for diagnosis, a clinical decision support system (CDSS), and advanced diagnostic AI tools to help healthcare teams work with greater consistency and confidence\n \n Built on the principles of artificial intelligence in medicine and AI automation in healthcare, it integrates securely into existing systems while ensuring data integrity and trust across diverse clinical environments.\n \n Designed for full compliance with HIPAA, GDPR, and ISO/IEC 27001, it supports reliable clinical workflow optimization and scalable deployment across care operations.",
            image: {
                src: "/assets/img/medical-ai-agent/bannerr.webp",
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
                    responseTime: 93.3,
                    supportTickets: 70,
                    resolutionRate: 100,
                    roi: 45,
                }}
                labels={{
                    responseTime: "Diagnostic Accuracy",
                    supportTickets: "Faster Workflows",
                    resolutionRate: "HIPAA & GDPR Compliance",
                    roi: "ROI Growth",
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
                heading=" What Impact Are Medical AI Agents Creating in Healthcare?"
                colSize="col-lg-6 col-md-6 col-12"
                description={`The importance of a medical AI agent lies in enabling accurate diagnostics, optimizing workflows, and building patient trust through integrated clinical intelligence and ethical automation.`}
                benefits={[
                    {
                        id: 1,
                        icon: "/assets/img/medical-ai-agent/b1.svg",
                        title: "Operational Efficiency & Cost Reduction",
                        description:
                            "Using AI in diagnostic care streamlines processes, supports compliance automation, and enhances medical data management. Through autonomous decision support, healthcare organizations reduce operational costs while improving accuracy and efficiency across clinical workflows.",
                    },
                    {
                        id: 2,
                        icon: "/assets/img/medical-ai-agent/b2.svg",
                        title: "Improved Clinical Decision Support",
                        description:
                            "The impact of AI on clinical accuracy is seen in how radiology AI and explainable AI models improve diagnostic precision and accountability. Integrating ethical AI in medicine with algorithmic transparency ensures clinicians gain reliable insights and confidence in every diagnostic decision.",
                    },
                    {
                        id: 3,
                        icon: "/assets/img/medical-ai-agent/b3.svg",
                        title: "Enhanced Patient Engagement",
                        description:
                            "Built on ethical AI in medicine, these systems strengthen patient trust in AI by prioritizing patient data security and providing transparent, understandable decision support. Ethical frameworks and clinical intelligence help patients feel informed, supported, and involved throughout the care journey.",
                    },
                    {
                        id: 4,
                        icon: "/assets/img/medical-ai-agent/b4.svg",
                        title: "Regulatory Alignment & Data Security",
                        description:
                            "Through compliance automation and secure medical data management, medical AI agents uphold AI ethics in healthcare and algorithmic transparency. Each deployment follows rigorous governance models to maintain privacy, reliability, and accountability within regulated medical environments.",
                    },
                ]}
            />
            <HealthCareCaseStudySection />
            <CustomerGrowthCards
                tag="Solutions"
                heading="Explore Comprehensive Medical AI Solutions by Kogents AI"
                description={`Our medical AI solutions integrate automation, intelligence, and compliance to improve diagnostic accuracy, streamline workflows, and protect healthcare data. Each solution is purpose-built for precision, reliability, and responsible clinical performance.`}
                solutions={[
                    {
                        id: 1,
                        iconColor: "bg-pink-500",
                        title: "Clinical Decision Support & Diagnostic Intelligence",
                        description:
                            "The clinical automation agent enhances diagnostic precision through clinical decision support systems, predictive analytics in healthcare, and medical data interpretation. Ongoing model validation for AI ensures transparency and reliability throughout diagnostic workflows.",
                    },
                    {
                        id: 2,
                        iconColor: "bg-purple-500",
                        title: "Workflow Automation & Operational Optimization",
                        description:
                            "Our AI software for hospitals automates documentation and routine tasks using medical data interpretation and patient monitoring AI. With advanced medical workflow automation, it supports efficient and compliant operations aligned with global healthcare standards.",
                    },
                    {
                        id: 3,
                        iconColor: "bg-teal-500",
                        title: "Predictive & Preventive Care Analytics",
                        description:
                            "These medical AI solutions leverage predictive analytics in healthcare and patient monitoring AI to identify early health risks and guide proactive interventions. Supported by continuous model validation for AI, clinicians gain earlier insights and improved care coordination.",
                    },
                    {
                        id: 4,
                        iconColor: "bg-blue-500",
                        title: "EHR/EMR Integration & Data Interoperability",
                        description:
                            "Through AI integration into EHR, the clinical automation agent enables secure data exchange and improved workflow connectivity. Built on secure cloud healthcare AI and compliant AI deployment, it supports interoperability in line with HIPAA, GDPR, and ISO/IEC 27001 standards.",
                    },
                    {
                        id: 5,
                        iconColor: "bg-green-500",
                        title: "Secure Cloud Infrastructure & Compliance Readiness",
                        description:
                            "Our secure cloud healthcare AI foundation includes built-in compliance automation and continuous model validation for AI. It ensures privacy, scalability, and alignment with recognized regulatory frameworks for ethical and compliant medical AI deployment.",
                    },
                ]}
                buttonText="Get Your AI Agent"
                buttonLink="#"
            />
            <BrandLogoSlider />
            <CustomerServiceCard
                tag="Why Kogents"
                heading="What Makes Kogents AI the Trusted Choice for the Medical Industry"
                description={[
                    "Kogents AI delivers trusted, transparent, and compliant intelligence for modern healthcare. As a clinical-grade AI platform, it unites automation with human oversight to ensure accuracy, security, and ethical performance across diverse clinical settings.",
                ]}
                differentiators={[
                    {
                        id: 1,
                        icon: "/assets/img/medical-ai-agent/w5.svg",
                        title: "Clinical-Grade Accuracy",
                        description:
                            "The clinical-grade AI platform from Kogents AI combines precision algorithms with human-in-the-loop AI oversight. Designed for clinical AI accuracy and ethical AI deployment, it applies bias mitigation strategies validated under FDA and EMA guidance to maintain consistent, evidence-based outcomes.",
                    },
                    {
                        id: 2,
                        icon: "/assets/img/medical-ai-agent/w6.svg",
                        title: "EHR Integration",
                        description:
                            "The HIPAA-compliant medical AI agent integrates securely with existing systems to support interoperability with EHR/EMR. Built on data security in healthcare AI and transparent algorithms, it aligns with ISO/IEC 27001 and recognized regulatory compliance frameworks to ensure efficient, protected data exchange.",
                    },
                    {
                        id: 3,
                        icon: "/assets/img/medical-ai-agent/w7.svg",
                        title: "End-to-End Automation",
                        description:
                            "Kogents AI combines automation with expert supervision through human-in-the-loop AI. Its trustworthy AI system follows ethical AI deployment principles consistent with FDA expectations, improving workflow efficiency while protecting patient data integrity.",
                    },
                    {
                        id: 4,
                        icon: "/assets/img/medical-ai-agent/w8.svg",
                        title: "Explainable & Transparent AI",
                        description:
                            "With explainable AI for medicine, Kogents AI enhances interpretability using transparent algorithms and ongoing bias mitigation strategies. This supports clinician understanding, accountability, and confidence in every AI-assisted decision.",
                    },
                    {
                        id: 5,
                        icon: "/assets/img/medical-ai-agent/w9.svg",
                        title: "Patient-Centric Design",
                        description:
                            "The HIPAA-compliant medical AI agent strengthens patient trust through privacy, fairness, and interoperability. Developed in accordance with EMA guidance and the ISO/IEC 27001 standard, it promotes confidence in ethical, data-driven care delivery.",
                    },
                    {
                        id: 6,
                        icon: "/assets/img/medical-ai-agent/w10.svg",
                        title: "Enterprise-Grade Security & Compliance",
                        description:
                            "Security underpins every component of Kogents AI. As a trustworthy AI system, it ensures data security in healthcare AI and aligns with ISO/IEC 27001, FDA guidance, and CE Mark for AI Devices to uphold rigorous regulatory compliance and governance standards.",
                    },
                    {
                        id: 7,
                        icon: "/assets/img/medical-ai-agent/w11.svg",
                        title: "Scalable & Customizable Platform",
                        description:
                            "The clinical-grade AI platform supports flexible deployment and interoperability with EHR/EMR. Built in alignment with CE Mark for AI Devices requirements, it scales reliably across institutions without compromising performance or compliance.",
                    },
                    {
                        id: 8,
                        icon: "/assets/img/medical-ai-agent/w12.svg",
                        title: "Continuous Learning & Improvement",
                        description:
                            "Through human-in-the-loop AI and explainable AI for medicine, Kogents AI continually refines clinical AI accuracy. Guided by ethical AI deployment and bias mitigation strategies, it drives adaptive learning and sustained reliability across healthcare environments.",
                    },
                ]}
            />
            <AwardSection />
            <FaqWithImage
                tag="Process"
                heading="Our Proven Implementation Process"
                description={`At Kogents AI, every step to implement medical AI agent solutions follows rigorous clinical and regulatory standards, ensuring reliability, compliance, and measurable performance across healthcare settings.`}
                faqItems={[
                    {
                        id: 1,
                        q: "Assessment & Workflow Alignment",
                        a: "We start by aligning AI deployment in clinical workflow with institutional goals. Guided by clinical data governance, this phase defines secure and effective integration strategies.",
                        image: "/assets/img/medical-ai-agent/1.webp",
                    },
                    {
                        id: 2,
                        q: "Integration & Infrastructure",
                        a: "We integrate AI into hospital systems using a scalable AI infrastructure with secure data pipeline integration. Each setup follows the FDA’s Good Machine Learning Practice (GMLP) and NIH AI Research Guidelines for ethical, validated deployment.",
                        image: "/assets/img/medical-ai-agent/2.webp",
                    },
                    {
                        id: 3,
                        q: "Model Training & Validation",
                        a: "Our team conducts training of AI models for medicine under defined validation protocols in healthcare AI. Through structured AI model testing and a human oversight loop, every model achieves consistent accuracy and transparency.",
                        image: "/assets/img/medical-ai-agent/3.webp",
                    },
                    {
                        id: 4,
                        q: "Continuous Optimization",
                        a: "Post-deployment, continuous performance optimization enhances stability and compliance. Each iteration aligns with the Stanford Center for AI Safety in Medicine, maintaining trustworthy clinical intelligence over time.",
                        image: "/assets/img/medical-ai-agent/4.webp",
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
                showCTA={true}
                ctaText="Get Your AI Healthcare Co-Pilot"
                ctaLink="#contact"
            />
            <CustomerBenefitSection
                leftColumn={{
                    tag: "Start Now",
                    title: "Bring Accuracy and Efficiency to Care Delivery",
                    subtitle: "Deploy a trusted, HIPAA-compliant medical AI agent that enhances diagnostic precision, strengthens patient safety, and optimizes clinical performance.Built for measurable outcomes and validated through responsible AI implementation in modern clinical care.",
                    appStoreImage: "/assets/img/app-section/6.png",
                    googlePlayImage: "/assets/img/app-section/7.png",
                }}
                rightColumn={{
                    appPreviewImage: "/assets/img/img-new.webp",
                    qrCodeImage: "/assets/img/app-section/5.png",
                    qrCodeText: "Scan to Download",
                }}
                backgroundImage="/assets/img/bc/video-bg.webp"
                buttonText="Deploy Your Medical AI Agent"
            />
            <CustomerServiceFaqSection
                tag="FAQs"
                heading="Frequently Asked Questions"
                description=""
                faqItems={[
                    {
                        q: "What makes Kogents AI different from other medical AI platforms?",
                        a: "Kogents AI combines clinical-grade accuracy, HIPAA compliance, and explainable AI with human-in-the-loop validation. Every diagnostic insight aligns with FDA and EMA standards, ensuring precision, reliability, and ethical performance in hospital workflows.",
                    },
                    {
                        q: "How does Kogents AI integrate with hospital systems?",
                        a: "Kogents AI connects securely with EHR and EMR systems through API-based integration. Built on ISO/IEC 27001 and HIPAA standards, it supports scalable deployment without disrupting existing clinical operations.",
                    },
                    {
                        q: "Is Kogents AI validated for clinical use?",
                        a: "Yes. Kogents AI follows FDA GMLP and NIH AI Research Guidelines, undergoing continuous testing and compliance audits to ensure safe, transparent, and clinically reliable performance.",
                    },
                    {
                        q: "What is a medical AI agent?",
                        a: "A medical AI agent is an intelligent software system designed to assist clinicians by analyzing patient data, supporting diagnosis, and automating administrative tasks. These agents combine machine learning, clinical reasoning, and data-driven insights to improve decision-making and streamline healthcare delivery.",
                    },
                    {
                        q: "How do AI agents work in medical settings?",
                        a: "AI agents in medical environments use algorithms trained on vast clinical datasets to identify patterns, predict outcomes, and recommend actions. Integrated into hospital systems, they assist in real-time diagnosis, patient monitoring, and administrative automation, ensuring faster and more reliable decisions without replacing human expertise.",
                    },
                    {
                        q: "What are the benefits of AI in medical diagnosis?",
                        a: "The benefits of AI in medical diagnosis include higher accuracy, faster image and report analysis, early disease detection, and reduced diagnostic errors. AI systems also enhance clinician productivity by handling repetitive data tasks, allowing medical professionals to focus on patient care and treatment outcomes.",
                    },
                    {
                        q: "How safe are AI medical assistants?",
                        a: "AI medical assistants are designed under strict safety and compliance frameworks, including HIPAA, FDA, and ISO/IEC 27001 standards. They undergo continuous testing, validation, and ethical review to ensure data integrity, privacy, and reliability in clinical decision-making, making them safe for both patient-facing and institutional use.",
                    },
                    {
                        q: "What is the difference between AI and human doctors when it comes to accuracy comparison?",
                        a: "While human doctors rely on experience and contextual judgment, AI systems excel at data-driven pattern recognition. In many diagnostic areas, AI achieves comparable or even higher accuracy by analyzing large datasets without fatigue or bias. However, human doctors remain essential for interpretation, empathy, and ethical oversight, which makes the best results come from human-AI collaboration.",
                    },
                    {
                        q: "What are the best medical AI agents for hospitals?",
                        a: "The best medical AI agents for hospitals are those that combine clinical-grade accuracy, interoperability with EHR systems, and proven compliance with healthcare regulations. Platforms like Kogents AI deliver end-to-end automation, explainable AI models, and scalable deployment frameworks tailored to hospital operations.",
                    },
                    {
                        q: "Can I buy an AI medical chatbot in the US?",
                        a: "Yes, you can buy AI medical chatbot solutions in the US that comply with HIPAA and FDA standards. Kogents AI offers customizable AI medical assistants and chatbots for hospitals, clinics, and telemedicine providers, ensuring both regulatory compliance and real-world clinical reliability.",
                    },
                    {
                        q: "What is AI agent software for medical practice?",
                        a: "AI agent software for medical practice automates workflows such as appointment scheduling, data analysis, and clinical documentation. These tools support diagnostic accuracy, reduce administrative overhead, and integrate securely into existing EHR systems to enhance overall practice efficiency.",
                    },
                    {
                        q: "How does AI assistant integration with EHR systems work?",
                        a: "AI assistant integration with EHR systems involves secure data exchange between the AI platform and electronic health records. This allows real-time access to patient histories, diagnostic data, and lab results, enabling AI agents to provide accurate clinical support while maintaining full compliance with healthcare data standards.",
                    },
                    {
                        q: "What is the pricing for medical AI solutions?",
                        a: "Pricing for medical AI solutions varies depending on deployment scale, integration complexity, and customization needs. Most enterprise-grade systems, like Kogents AI, offer flexible subscription or licensing models that align with hospital budgets and ROI objectives.",
                    },
                    {
                        q: "How accurate are AI agents in clinical trials?",
                        a: "AI agent accuracy in clinical trials depends on data quality, algorithm design, and validation rigor. Recent studies show that well-trained AI models can match or surpass human performance in specific diagnostic domains, provided they undergo proper regulatory testing and continuous performance optimization.",
                    },
                    {
                        q: "What is the ROI of AI agents in hospitals?",
                        a: "The ROI of AI agents in hospitals comes from reduced diagnostic delays, improved resource allocation, fewer administrative errors, and enhanced patient satisfaction. Hospitals adopting compliant AI systems typically see faster decision cycles, lower operational costs, and measurable improvements in care quality and throughput.",
                    },
                ]}
                buttonText="Connect With AI Agent"
            />
            <BlogList />
        </>
    );
};

export default page;