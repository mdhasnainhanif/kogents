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
    title: 'Boost Speed & Accuracy With Workflow Automation | Kogents AI',
    description:
        'Save hours daily with Kogents AI workflow automation that removes manual work, speeds up delivery, and drives measurable results.',
    keywords: [],
    alternates: {
        canonical: 'https://kogents.ai/solutions/workflow-automation/',
        languages: {
            'en-US': 'https://kogents.ai/solutions/workflow-automation/',
        },
    },
    openGraph: {
        title: 'Boost Speed & Accuracy With Workflow Automation | Kogents AI',
        description:
            'Save hours daily with Kogents AI workflow automation that removes manual work, speeds up delivery, and drives measurable results.',
        url: 'https://www.kogents.ai/solutions/workflow-automation/',
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
        { label: 'Workflow Automation', active: true }
    ];
    const pageData = {
        banner: {
            tag: "Workflow Automation",
            title: "Workflow Automation That Drives Real Efficiency",
            button: {
                text: "Start Automating Workflows",
                link: "/request-demo",
                iconSrc: "/assets/img/icons/arrow-right.svg",
                modalTarget: "#welcomeModal",
            },
            description:
                "Every manual workflow slows growth but automation accelerates it.\nKogents AI helps organizations automate business processes and streamline operations with automation, reducing delays and improving accuracy across teams.\nOur business workflow automation and AI-powered workflow automation approach uses digital workflow systems and intelligent task automation to bring structure and clarity to complex work, supporting long-term efficiency and consistent execution.\nBuilt on ISO 9001 practices, Lean Six Sigma principles, and PMI-aligned standards to deliver reliable, scalable enterprise workflow automation solutions and automated task workflows without operational disruption.",
            image: {
                src: "/assets/img/workflow-automation/banner.webp",
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
                    responseTime: 92,
                    supportTickets: 78,
                    resolutionRate: 65,
                    roi: 84,
                }}
                labels={{
                    responseTime: "Fewer Manual Tasks",
                    supportTickets: "Faster Turnaround",
                    resolutionRate: "Higher Accuracy",
                    roi: "Better Visibility",
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
                heading="What Makes Workflow Automation Valuable"
                description={``}
                benefits={[
                    {
                        id: 1,
                        icon: "/assets/img/workflow-automation/benefits/faster-turnaround-responsiveness.svg",
                        title: "Faster Turnaround & Responsiveness",
                        description:
                            "Workflow automation reduces manual tasks and eliminates repetitive work, helping teams act faster, achieve better collaboration, and complete work sooner. With automation triggers and business rule automation, approvals move instantly and decisions progress without delays. This delivers workflow bottleneck reduction and real-time operational visibility.",
                    },
                    {
                        id: 2,
                        icon: "/assets/img/workflow-automation/benefits/higher-accuracy-consistency.svg",
                        title: "Higher Accuracy & Consistency",
                        description:
                            "Automated workflows standardize processes and follow predefined rules, minimizing errors and improving reliability across operations. Consistent logic and workflow optimization ensure cleaner handoffs, aligned outcomes, and dependable performance every time.",
                    },
                    {
                        id: 3,
                        icon: "/assets/img/workflow-automation/benefits/cost-efficiency.svg",
                        title: "Cost Efficiency",
                        description:
                            "Automation reduces operational effort and improves process standardization, lowering labor costs tied to routine tasks. Teams focus on higher-value work, driving measurable business productivity automation and reducing waste while maintaining output quality.",
                    },
                    {
                        id: 4,
                        icon: "/assets/img/workflow-automation/benefits/transparency-control.svg",
                        title: "Transparency & Control",
                        description:
                            "Structured automation increases real-time tracking, audit-ready clarity, and accountability at each step. With defined business rule automation and clear process logic, leaders gain stronger oversight and governance, supported by insights from McKinsey, Harvard Business Review, and the NIST digital innovation framework.",
                    }
                ]}
            />
            <CustomerGrowthCards
                tag="Solutions"
                heading="What Kogents AI Delivers in Workflow Automation"
                description={`Kogents AI delivers structured workflow automation services that help organizations build digital operations with clarity, control, and measurable performance. Each solution adapts to real processes, reduces manual effort, and supports teams in high-value execution.`}
                solutions={[
                    {
                        id: 1,
                        iconColor: "bg-pink-500",
                        title: "AI-Driven Process Automation",
                        description: [
                            "We design and implement AI-driven process automation systems for routine tasks and decision-based workflows. This includes end-to-end process automation for approvals, handoffs, and cross-team activities to ensure work follows defined rules and moves reliably through each stage.",
                        ],
                    },
                    {
                        id: 2,
                        iconColor: "bg-purple-500",
                        title: "Digital Workflow Optimization",
                        description: [
                            "Our digital workflow optimization practice improves operational flow across functions. Through process mapping and automation, we remove friction points, simplify sequences, and strengthen accountability for consistent, on-time outcomes.",
                        ],
                    },
                    {
                        id: 3,
                        iconColor: "bg-teal-500",
                        title: "Custom Workflow Architecture",
                        description: [
                            "We build custom workflow architecture aligned to governance requirements and organizational structure. This includes workflow orchestration engine configuration, task orchestration, and enterprise automation system setup, supported by integration automation to connect systems and streamline execution.",
                        ],
                    },
                    {
                        id: 4,
                        iconColor: "bg-teal-500",
                        title: "Low-Code and No-Code Workflow Build Support",
                        description: [
                            "For teams requiring faster deployment without extensive engineering, we provide low-code and no-code workflow build support to structure automated tasks, reusable rules, and unified process logic across business functions.",
                        ],
                    },
                    {
                        id: 5,
                        iconColor: "bg-teal-500",
                        title: "Process Intelligence & Automation",
                        description: [
                            "We apply process intelligence & automation practices to monitor execution quality, enhance smarter decision analytics, and improve operational performance. By refining workflows based on data insights, organizations maintain consistent output and long-term process efficiency.",
                        ],
                    },
                    {
                        id: 6,
                        iconColor: "bg-teal-500",
                        title: "Technical Foundation & Governance",
                        description: [
                            "All solutions follow industry standards such as BPMN 2.0 workflow modeling, ITIL aligned operational flows, and continuous improvement frameworks to support scalable, compliant, and dependable automation programs.",
                        ],
                    },
                ]}
                buttonText="Get Your Perfect Workflow"
                buttonLink="#"
            />
            <BrandLogoSlider />
            <CustomerServiceCard
                tag="Why Kogents"
                heading="What Makes Kogents AI the Right Automation Partner"
                description={[
                    "Kogents AI delivers secure workflow automation designed for accuracy, trust, and operational control. Each deployment supports compliance-ready automation processes that meet governance requirements while maintaining clarity and efficiency."
                ]}
                differentiators={[
                    {
                        id: 1,
                        icon: "/assets/img/workflow-automation/why-kogents/human-guided-automation-control.svg", 
                        title: "Human-Guided Automation Control",
                        description: [
                            "We build automation with human-in-the-loop workflow control so teams remain in command of decisions, exceptions, and approvals. With role-based workflow rules in place, accountability and operational authority are preserved where judgment matters most."
                        ],
                    },
                    {
                        id: 2,
                        icon: "/assets/img/workflow-automation/why-kogents/custom-ai-workflows-built-for-your-operations.svg",
                        title: "Custom AI Workflows Built for Your Operations",
                        description: [
                            "Our team supports custom AI workflow deployment aligned to existing systems and operational standards. A modular workflow design approach ensures flexibility and low-risk automation rollouts. This controlled rollout model protects operational stability while introducing scalable automation programs."
                        ],
                    },
                    {
                        id: 3,
                        icon: "/assets/img/workflow-automation/why-kogents/operational-visibility-and-security.svg",
                        title: "Operational Visibility and Security",
                        description: [
                            "Operational visibility is standard. With real-time insights and reporting, leaders monitor performance and maintain traceability across activity. Supported by enterprise-grade automation security practices, every workflow operates with structured protection and oversight."
                        ],
                    },
                    {
                        id: 4,
                        icon: "/assets/img/workflow-automation/why-kogents/governance-built-into-every-layer.svg",
                        title: "Governance Built Into Every Layer",
                        description: [
                            "We implement automation aligned with ethical automation & audit standards, industry operational best practices bodies, and defined process governance frameworks. The result is automation that remains accountable, transparent, and rooted in long-term operational integrity."
                        ],
                    },
                ]}
            />
            <AwardSection />
            <FaqWithImage
                tag="Process"
                heading="How We Build Reliable Automated Workflows"
                description={`Kogents AI applies a defined automation lifecycle to build structured and scalable workflows grounded in real operational environments. Each phase reflects established transformation and governance practices to ensure clarity, adoption, and long-term value.`}
                faqItems={[
                    {
                        id: 1,
                        q: "Workflow Discovery and Analysis",
                        a: "We begin with workflow discovery and analysis to understand current processes, decision paths, and execution patterns. Guided by operational transformation principles, we use detailed process blueprinting to remove ambiguity and establish a clear foundation for automation.",
                        image: "/assets/img/workflow-automation/process/workflow-discovery-and-analysis.webp", 
                    },
                    {
                        id: 2,
                        q: "Automated Process Design",
                        a: "We conduct automated process design to configure logic flows, handoffs, and exception handling. Aligned with Prosci/ADKAR principles, this phase strengthens adoption readiness and ensures controlled decision pathways before execution begins.",
                        image: "/assets/img/workflow-automation/process/automated-process-design.webp",
                    },
                    {
                        id: 3,
                        q: "Modeling & Testing Workflows",
                        a: "We perform modeling and testing workflows in structured workflow testing environments to validate logic and data flow. This confirms readiness and aligns automation with enterprise governance models to maintain reliability and safeguard operational continuity.",
                        image: "/assets/img/workflow-automation/process/modeling-testing-workflows.webp",
                    },
                    {
                        id: 4,
                        q: "Deploy Automation Systems",
                        a: "Once validated, we deploy automation systems using a measured rollout approach aligned with internal controls. This maintains accountability and stable delivery across teams and systems.",
                        image: "/assets/img/workflow-automation/process/deploy-automation-systems.webp",
                    },
                    {
                        id: 5,
                        q: "Monitor, Refine, and Scale",
                        a: "After launch, we monitor, refine, and scale workflows through continuous optimization, ensuring ongoing performance and alignment with growing business needs.",
                        image: "/assets/img/workflow-automation/process/monitor-refine-and-scale.webp",
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
                buttonText="Get Your Automation Plan"
                leftColumn={{
                    tag: "Start Now",
                    title: "Get Freedom From Manual Routine Tasks",
                    subtitle: "Stop losing hours to repetitive work.Start your workflow automation journey and transform your business workflows so your time goes to clients, strategy, and revenue instead of admin cycles.\nWe help you build automated digital processes that boost productivity with workflow automation and support future-ready business automation as you scale.",
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
                        q: "Who does Kogents AI serve?",
                        a: "Kogents AI supports solo operators, fast-growing teams, and enterprise organizations. Whether you need one automated workflow or a structured automation program, we build systems that match your scale and operations.",
                    },
                    {
                        q: "How does Kogents AI customize automation for different industries?",
                        a: "Kogents AI analyzes your existing processes, rules, and systems, then builds workflows that match your operations and compliance needs. Every automation is tailored to your structure, not pushed from templates.",
                    },
                    {
                        q: "Do I need technical experience to use Kogents AI’s workflow solutions?",
                        a: "No. We support both technical and non-technical teams, offering guided process mapping and low-code or no-code workflow setup so you can automate without engineering expertise.",
                    },
                    {
                        q: "What platforms and systems does Kogents AI integrate with?",
                        a: "We connect workflows with CRMs, project management tools, communication platforms, databases, accounting systems, and custom internal tools. We work with API-enabled systems and modern automation stacks to ensure clean, stable integrations.",
                    },
                    {
                        q: "How much does workflow automation cost with Kogents AI?",
                        a: "Pricing depends on workflow volume, complexity, AI components, and integration needs. We scope clearly before starting so you know project cost, timeline, and deliverables with no surprises.",
                    },
                    {
                        q: "How long does it take to deploy workflows?",
                        a: "Simple automations can be launched in days. Cross-system workflows and enterprise workflows typically deploy in phases over several weeks to ensure stability, testing, and adoption.",
                    },
                    {
                        q: "How does Kogents AI keep data secure?",
                        a: "We follow structured governance principles and industry-aligned security standards, applying access controls, audit visibility, and secure system connections. Data handling and workflow design follow privacy protection requirements.",
                    },
                    {
                        q: "What support do you provide after launch?",
                        a: "We offer ongoing optimization, monitoring, and refinement to keep workflows aligned with your business. As your needs evolve, we help scale automation and introduce new workflow capabilities.",
                    },
                    {
                        q: "Does automation with Kogents AI replace jobs?",
                        a: "No. Our workflows are designed to reduce repetitive workload and support teams, not remove them. Automation improves execution and frees people to focus on strategic and creative work.",
                    },
                    {
                        q: "What is workflow automation and how does it work?",
                        a: "Workflow automation uses rules, triggers, and system-driven actions to complete tasks that would normally require manual effort. It works by mapping business steps, defining decision logic, and using software or AI to move work forward automatically so tasks, approvals, and handoffs happen without manual follow-ups.",
                    },
                    {
                        q: "What are examples of workflow automation in business?",
                        a: "Common examples include automated onboarding, invoice routing and approvals, CRM lead handoffs, marketing qualification flows, support ticket routing, procurement approvals, and compliance documentation workflows.",
                    },
                    {
                        q: "What is the difference between workflow automation vs business process automation?",
                        a: "Workflow automation handles task-level execution, such as approvals, routing, or notifications. Business process automation is broader and focuses on end-to-end process transformation across departments. Workflow automation is one part of a BPA strategy.",
                    },
                    {
                        q: "How do you automate manual business processes?",
                        a: "Start by documenting steps and decision points, identifying repetitive tasks, and choosing tools that support structured workflows. Then configure logic rules, triggers, and integrations, test, and roll out in phases. Many teams use a workflow mapping and automation guide for structure.",
                    },
                    {
                        q: "What are the benefits of workflow automation systems?",
                        a: "Benefits include faster task completion, reduced administrative effort, higher accuracy, improved accountability, real-time tracking, and allowing teams to focus on strategic work instead of routine tasks.",
                    },
                    {
                        q: "How does AI improve workflow automation?",
                        a: "AI improves workflow automation by making decisions based on data, predicting delays, routing tasks intelligently, extracting information from documents, and adapting workflows dynamically so processes move intelligently instead of just programmatically.",
                    },
                    {
                        q: "Is there a workflow mapping and automation guide I should follow?",
                        a: "Yes. A structured workflow mapping and automation guide typically includes process discovery, logic design, exception handling, testing, and rollout. Frameworks like BPMN support clarity and consistency.",
                    },
                    {
                        q: "What does workflow automation pricing comparison typically include?",
                        a: "It usually compares software subscription cost, implementation scope, user seats, AI add-ons, support tiers, and integration needs. Pricing ranges from low-code tools for simple workflows to enterprise workflow automation solutions with governance and advanced orchestration.",
                    },
                    {
                        q: "Does Kogents AI provide enterprise workflow automation solutions?",
                        a: "Yes. Kogents AI delivers enterprise workflow automation solutions designed for scalable execution, structured governance, and secure automation across departments and systems.",
                    },
                    {
                        q: "What is the difference between traditional automation and AI automation?",
                        a: "Traditional automation follows fixed rules and predefined logic to execute repetitive tasks. AI automation adapts to data and context, learning from patterns to make smarter decisions, predict outcomes, and handle variability without manual intervention.",
                    },
                ]}
                buttonText="Connect With AI Agent"
            />
            <BlogList />
        </>
    );
};

export default page;
