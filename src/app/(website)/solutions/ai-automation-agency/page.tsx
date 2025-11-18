import Banner from "@/components/ai-whatsapp-agent/Banner";
import AwardSection from "@/components/CustomerServiceAIAgents/AwardSection";
import BrandLogoSlider from "@/components/CustomerServiceAIAgents/BrandLogoSlider";
import ClientTestimonial from "@/components/CustomerServiceAIAgents/ClientTestimonial";
import Counter from "@/components/CustomerServiceAIAgents/Counter";
import CustomerBenefitSection from "@/components/CustomerServiceAIAgents/CustomerBenefitSection";
import CustomerCards from "@/components/CustomerServiceAIAgents/CustomerCards";
import CustomerGrowthCards from "@/components/CustomerServiceAIAgents/CustomerGrowthCards";
import CustomerServiceFaqSection from "@/components/CustomerServiceAIAgents/CustomerServiceFaqSection";
import FaqWithImage from "@/components/CustomerServiceAIAgents/FaqWithImage";
import TechnologiesSlider from "@/components/CustomerServiceAIAgents/TechnologiesSlider";
import SummarySolution from "@/components/CustomerServiceAIAgents/SummarySolution";
import BLogList from "@/components/blog/BlogList";
import React from "react";
import type { Metadata } from "next";
import CustomerServiceCard from "@/components/CustomerServiceAIAgents/CustomerServiceCard";
export const metadata: Metadata = {
  title: "AI Automation Agency for Growth & Efficiency | Kogents AI",
  description:
    "Automate digital workflows, simplify daily tasks, and boost efficiency with personalized AI automation solutions from Kogents AI.",
  keywords: [
    "AI automation agency",
    "AI automation",
    "business automation",
    "workflow automation",
    "AI consulting services",
    "process automation",
    "AI integration",
  ],

  alternates: {
    canonical: "https://kogents.ai/solutions/ai-automation-agency",
    languages: {
      "en-US": "https://kogents.ai/solutions/ai-automation-agency",
    },
  },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AI Automation Agency for Growth & Efficiency | Kogents AI",
    description:
      "Automate digital workflows, simplify daily tasks, and boost efficiency with personalized AI automation solutions from Kogents AI.",
    url: "https://www.kogents.ai/solutions/ai-automation-agency",
    type: "website",
    images: [
      {
        url: "https://www.kogents.ai/assets/img/logo-new.svg",
        width: 1200,
        height: 630,
        alt: "AI Automation Agency - Kogents AI",
      },
    ],
    siteName: "Kogents AI",
    locale: "en_US",
  },
};

const page = () => {
  const breadcrumbItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "AI Automation Agency", active: true },
  ];

  const pageData = {
    banner: {
      tag: "AI Automation",
      title: "Streamline, Accelerate, and Grow with AI Automation Agency",
      button: {
        text: "Start Automation Today",
        link: "/request-demo",
        iconSrc: "/assets/img/icons/arrow-right.svg",
        modalTarget: "#welcomeModal",
      },
      description:
        "Individuals and businesses alike struggle with repetitive tasks, fragmented systems, and increasing operational complexity.\nAt Kogents AI, we combine strategy, design, and technology to deliver AI-powered business automation that streamlines workflows and enhances productivity.\nAs a trusted AI automation agency, we help people and organizations achieve measurable AI-driven business growth through smarter process automation, effective workflow optimization, and advanced machine learning integration.",
      image: {
        src: "/assets/img/ai-automation-agency/banner.webp",
        alt: "AI Automation Agency",
        width: 800,
        height: 681,
        className: "mx-4",
      },
    },
    summary: {
      tag: "Summary",
      text: "Kogents AI provides end-to-end AI automation solutions that streamline workflows, enhance decision-making, and drive measurable business growth and profitability."
  }
  };

  return (
    <div>
      {pageData.banner && (
        <Banner data={pageData.banner} breadcrumbItems={breadcrumbItems} />
      )}

      {/* Section 2: Stats Counter */}
      <Counter
        data={{
          responseTime: 10,
          supportTickets: 40,
          resolutionRate: 98,
          roi: 30,
        }}
        labels={{
          responseTime: "10+ Years of Experience",
          supportTickets: "40% Cost Reduction",
          resolutionRate: "98% Client Retention",
          roi: "30+ Industries Served",
        }}
        units={{
          responseTime: "+",
          supportTickets: "%",
          resolutionRate: "%",
          roi: "+",
        }}
        title="AI Automation Agency Results"
        subtitle="Transform your operations with intelligent automation"
      />

      {/* Section 3: Benefits */}
      <CustomerCards
        tag="Benefits"
        heading="How AI Automation Agencies Drive Efficiency"
        description="Automation supports both individuals and organizations in managing repetitive tasks and improving daily productivity. An AI automation agency helps connect systems, reduce manual effort, improve accuracy, and bring structure to personal and professional workflows through reliable technology."
        benefits={[
          {
            id: 1,
            icon: "/assets/img/ai-automation-agency/1.svg",
            title: "Efficiency and Cost Savings",
            description:
              "AI automation for businesses and workflow automation support clear efficiency improvement by reducing repetitive activity. With business process optimization and intelligent systems, individuals and teams complete tasks with greater accuracy and speed while reducing time spent on routine work.",
          },
          {
            id: 2,
            icon: "/assets/img/ai-automation-agency/2.svg",
            title: "Scalability and Growth",
            description:
              "Through digital transformation and intelligent workflow solutions, work scales more easily as needs increase. Machine learning automation supports operational excellence by maintaining performance through structured processes and predictable task handling.",
          },
          {
            id: 3,
            icon: "/assets/img/ai-automation-agency/3.svg",
            title: "Data Driven Decision Making",
            description:
              "By using robotic process automation (RPA) and machine learning automation, information is processed faster and with more clarity. Better insights improve planning and support a stronger AI business impact, helping users make informed decisions with more consistency.",
          },
          {
            id: 4,
            icon: "/assets/img/ai-automation-agency/4.svg",
            title: "Enhanced Customer Experience",
            description:
              "With intelligent workflow solutions, workflow automation, and business process optimization, communication and service become clearer and more accurate. These automation benefits help deliver timely responses and consistent support that build trust and improve user satisfaction.",
          },
        ]}
      />

      {/* Section 5: Solutions */}
      <CustomerGrowthCards
        tag="Solutions"
        heading="End-to-End Kogents AI Automation Solutions"
        description={[
          "Every individual and organization has specific tasks that benefit from well-planned automation. We combine AI consulting services, custom AI automation solutions, and AI integration for enterprises to support accuracy, scalability, and performance through structured and data-driven design.",
        ]}
        solutions={[
          {
            id: 1,
            iconColor: "bg-pink-500",
            title: "Customer Support Automation",
            description: [
              "With AI process automation and custom AI automation solutions, support operations become more efficient in email inboxes and customer service systems. Through AI consulting services, we create clear response flows. Our digital workflow solutions and AI-driven processes help improve consistency and response quality.",
            ],
          },
          {
            id: 2,
            iconColor: "bg-purple-500",
            title: "Sales Funnel Optimization",
            description: [
              "A focused business automation strategy supported by AI consulting services helps organize leads, follow ups and conversions for solo professionals and sales teams. AI system integration and smooth AI implementation improve data flow and streamline sales activity.",
            ],
          },
          {
            id: 3,
            iconColor: "bg-teal-500",
            title: "Ecommerce Automation",
            description: [
              "Through custom AI automation solutions and AI integration for enterprises, ecommerce operations improve inventory management, personalization, and order handling. With automation consulting and AI-driven processes, online stores manage tasks with clearer workflows and better accuracy.",
            ],
          },
          {
            id: 4,
            iconColor: "bg-yellow-500",
            title: "Operations Efficiency",
            description: [
              "With intelligent automation consultancy and AI process automation, daily operations function more consistently for individuals and companies. Supported by AI system integration and structured automation design, work routines become more organized and reliable.",
            ],
          },
          {
            id: 5,
            iconColor: "bg-blue-500",
            title: "Marketing Intelligence",
            description: [
              "Using AI consulting services and a planned business automation strategy, marketing work gains better insights and clearer campaign execution. Through AI implementation and digital workflow solutions, targeting and analytics improve practically and measurably.",
            ],
          },
          {
            id: 6,
            iconColor: "bg-green-500",
            title: "Employee Productivity",
            description: [
              "Through AI integration for enterprises and intelligent automation consultancy, routine tasks are reduced, and time is used more effectively. With custom AI automation solutions and AI-driven processes, individuals and teams remain focused on higher-value responsibilities.",
            ],
          },
        ]}
        buttonText="Automate Your Operations"
      />

      {/* Section 6: Customer Logos */}
      <BrandLogoSlider />

      <CustomerServiceCard
        tag="Why Kogents"
        heading="Why Choose Kogents AI Automation Agency?"
        description="Reliable and scalable AI automation supports both individual workflows and organizational systems. Our approach focuses on accuracy, security, and long-term performance while maintaining trust and data protection at every stage."
        differentiators={[
          {
            id: 1,
            icon: "/assets/img/ai-automation-agency/1.svg",
            title: "Tailored Automation Frameworks",
            description:
              "Each project begins with a custom AI workflow design based on specific goals. We plan systems carefully to support structure, accuracy, and measurable improvement without interrupting ongoing activity.",
          },
          {
            id: 2,
            icon: "/assets/img/ai-automation-agency/2.svg",
            title: "Human and AI Collaboration",
            description:
              "We apply human-in-the-loop AI automation to keep expertise in control and technology working in support. This balance strengthens quality, reduces errors, and maintains clear accountability across automated tasks.",
          },
          {
            id: 3,
            icon: "/assets/img/ai-automation-agency/3.svg",
            title: "Data Safe and Compliant Solutions",
            description:
              "We build secure automation systems designed around strong data privacy and compliance requirements. With consistent data governance, we protect information, maintain system health, and support trusted automation practices.",
          },
          {
            id: 4,
            icon: "/assets/img/ai-automation-agency/4.svg",
            title: "Scalability and Reliability",
            description:
              "Our solutions use scalable AI automation that adapts as needs change. Through transparent planning and continuous refinement, we support steady performance and reliable operations for individuals and large teams.",
          },
          {
            id: 5,
            icon: "/assets/img/ai-automation-agency/5.svg",
            title: "Precision and Trust at Every Stage",
            description:
              "We focus on precision, clarity, and dependable automation from planning to completion. This ensures consistent results and supports sustainable improvements in how work is organized and completed.",
          },
          {
            id: 6,
            icon: "/assets/img/ai-automation-agency/6.svg",
            title: "Industries We Support With AI Automation",
            description:
              "We assist many environments, including financial services, insurance, real estate, property management, healthcare, e-commerce, customer support, HR, recruitment, and BPO operations. Our systems help with compliance checks, onboarding, claims processing, tenant communication, patient scheduling, order management, support workflow, and hiring processes, along with personal and custom workflows that require organized and repeatable automation.",
          },
        ]}
      />

      {/* Section 8: Trusted Listings */}
      <AwardSection />

      {/* Section 9: Process */}
      <FaqWithImage
        tag="Process"
        heading="How We Work"
        description="Our AI deployment process supports individuals and organizations in improving daily tasks and structured operations. Through clear workflow analysis, careful planning, and continuous refinement, we help users scale with AI automation practically and sustainably."
        faqItems={[
          {
            id: 1,
            q: "1. Identify Pain Points",
            a: "We begin with workflow analysis to understand routines, repetitive tasks, and areas that benefit from automation. This helps define practical improvements for personal workflows and business operations.",
            image: "/assets/img/ai-automation-agency/1.webp",
          },
          {
            id: 2,
            q: "2. Develop Custom Automation",
            a: "We design solutions with a focus on automation integration that fits current tools and processes. Each setup is planned to improve clarity, accuracy, and consistency without disrupting existing work.",
            image: "/assets/img/ai-automation-agency/2.webp",
          },
          {
            id: 3,
            q: "3. Integrate AI Systems",
            a: "We manage the full integration process, including setup, model training and optimization, and alignment with tools and data. This supports ongoing decisions and maintains structure through each stage of the AI lifecycle.",
            image: "/assets/img/ai-automation-agency/3.webp",
          },
          {
            id: 4,
            q: "4. Monitor and Optimize",
            a: "After deployment, we apply data-driven improvement and iterative optimization to strengthen performance. This ongoing automation setup refinement supports steady results and long-term business transformation, and personal workflow enhancement.",
            image: "/assets/img/ai-automation-agency/4.webp",
          },
        ]}
        rightImage="/assets/img/faq.png"
        rightImageAlt="AI Automation Implementation Process"
      />

      {/* Section 10: Technologies */}
      <TechnologiesSlider />

      {/* Section 11: Client Testimonials */}
      <ClientTestimonial />

      {/* Section 12: CTA Section */}
      <CustomerBenefitSection
        leftColumn={{
          tag: "Start Now",
          title: "Design, Deploy, and Excel with AI-Driven Efficiency Today",
          subtitle:
            "Reclaim time, cut manual effort, and scale operations through a focused AI automation consultation. Start an AI transformation that delivers measurable results and long-term efficiency.",
          appStoreImage: "/assets/img/app-section/6.png",
          googlePlayImage: "/assets/img/app-section/7.png",
        }}
        rightColumn={{
          appPreviewImage: "/assets/img/img-new.webp",
          qrCodeImage: "/assets/img/app-section/5.png",
          qrCodeText: "Scan Now",
        }}
        buttonText="Build Your Automation Plan"
      />

      {/* Add SummarySolution component here */}
      {pageData.summary && <SummarySolution data={pageData.summary} />}

      {/* Section 13: FAQs */}
      <CustomerServiceFaqSection
        tag="FAQs"
        heading="Frequently Asked Questions"
        description=""
        faqItems={[
          {
            q: "Why should I choose Kogents AI as my AI automation agency?",
            a: "Kogents AI combines consulting expertise with custom automation design to deliver scalable, accurate, and compliant solutions. Each project focuses on measurable outcomes that enhance efficiency and business performance.",
          },
          {
            q: "What industries does Kogents AI specialize in for automation solutions?",
            a: "Kogents AI serves e-commerce, finance, healthcare, manufacturing, logistics, and professional services. Each solution is tailored to industry workflows, improving efficiency, reducing costs, and supporting data-driven decisions.",
          },
          {
            q: "What does an AI automation agency do?",
            a: "An AI automation agency designs and implements intelligent systems that help individuals and businesses automate repetitive processes, improve decision-making, and optimize workflows. These agencies combine machine learning, data analytics, and workflow automation to enhance efficiency, accuracy, and scalability across operations.",
          },
          {
            q: "How does AI automation improve business efficiency?",
            a: "AI automation improves business efficiency by reducing manual workload, eliminating errors, and enabling faster data-driven decisions. Automated systems streamline workflows, boost productivity, and help individuals/teams focus on strategic tasks that drive measurable growth and long-term operational excellence.",
          },
          {
            q: "What is the difference between AI automation and RPA?",
            a: "While both streamline processes, AI automation uses machine learning and data intelligence to make adaptive decisions, whereas robotic process automation (RPA) focuses on rule-based tasks. RPA executes predefined actions, while AI automation learns from data, identifies patterns, and optimizes outcomes over time.",
          },
          {
            q: "How to start using AI automation tools?",
            a: "To start using AI automation tools, begin by identifying repetitive or data-heavy tasks within your operations. Then, consult an AI automation agency to assess workflow automation potential and design a tailored implementation roadmap that aligns with your business goals.",
          },
          {
            q: "How is AI automation priced?",
            a: "AI automation services pricing depends on factors like project complexity, integration level, data volume, and required custom development. Most agencies offer flexible pricing models based on consultation, development scope, and ongoing support needs.",
          },
          {
            q: "Is AI automation better than human automation?",
            a: "AI automation is not a replacement for human work but an enhancement to it. While humans provide strategic thinking and creativity, AI handles repetitive and data-intensive tasks more efficiently, allowing teams to focus on innovation and customer engagement.",
          },
          {
            q: "Can I hire an AI automation agency for small projects?",
            a: "Yes, you can hire an AI automation agency for projects of any scale. Many firms offer tailored solutions and AI automation for small businesses that focus on specific goals like marketing automation, sales optimization, or customer support enhancement.",
          },
          {
            q: "How do I get a quote for AI automation?",
            a: "To get a quote for AI automation, schedule a consultation with an experienced agency. During this session, they'll review your workflow, goals, and system requirements to provide an accurate estimate based on your business needs and implementation timeline.",
          },
          {
            q: "How can I schedule an AI automation consultation?",
            a: "You can schedule an AI automation consultation by contacting a certified automation agency directly. A consultation typically includes workflow evaluation, technology recommendations, and a customized roadmap for adopting AI automation solutions effectively.",
          },
          {
            q: "Do you offer custom AI automation development?",
            a: "Yes, many agencies provide custom AI automation development to build solutions tailored to your infrastructure, data systems, and business goals. Custom development ensures flexibility, scalability, and full alignment with your long-term automation strategy.",
          },
        ]}
        buttonText="Connect With AI Agent"
      />

      {/* Section 14: Related Blogs */}
      <BLogList />
    </div>
  );
};

export default page;
