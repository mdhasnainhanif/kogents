import CasesBanner from '@/components/cases/CasesBanner'
import CaseCards from '@/components/cases/CasesCards'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kogents AI Case Studies | Success with Intelligent Agents",
    description: "Discover Kogents AI case studies showing how intelligent agents streamline workflows, boost efficiency, and transform industries worldwide.",
    alternates: {
        canonical: 'https://kogents.ai/case-studies',
        languages: {
          'en-US': 'https://kogents.ai/case-studies',
        },
      },
    openGraph: {
        title: "Kogents AI Case Studies | Success with Intelligent Agents",
        description: "Discover Kogents AI case studies showing how intelligent agents streamline workflows, boost efficiency, and transform industries worldwide.",
        url: "https://kogents.ai/case-studies",
        siteName: "Kogents",
        type: "website",
        images: [
            {
                url: "https://kogents.ai/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Kogents Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Kogents AI Case Studies | Success with Intelligent Agents",
        description: "Discover Kogents AI case studies showing how intelligent agents streamline workflows, boost efficiency, and transform industries worldwide.",
        images: ["https://kogents.ai/og-image.jpg"],
    },
};

const Page = () => {
    const cardsData = [
        {
            category: "Financial Services & Banking",
            title: "How AI Is Making Banking in Saudi Arabia Faster, Smarter & Safer",
            link: "",
            image: "/assets/img/rfp-ai-agent.webp",
        },
        {
            category: "General Problem Solvers",
            title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
            link: "",
            image: "/assets/img/rfp-ai-agent.webp",
        },
        {
            category: "General Problem Solvers",
            title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
            link: "",
            image: "/assets/img/rfp-ai-agent.webp",
        },
        {
            category: "General Problem Solvers",
            title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
            link: "",
            image: "/assets/img/rfp-ai-agent.webp",
        },
        {
            category: "General Problem Solvers",
            title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
            link: "",
            image: "/assets/img/rfp-ai-agent.webp",
        },
        {
            category: "General Problem Solvers",
            title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
            link: "",
            image: "/assets/img/rfp-ai-agent.webp",
        },
        {
            category: "General Problem Solvers",
            title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
            link: "",
            image: "/assets/img/rfp-ai-agent.webp",
        },
        {
            category: "General Problem Solvers",
            title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
            link: "",
            image: "/assets/img/rfp-ai-agent.webp",
        },
        {
            category: "General Problem Solvers",
            title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
            link: "",
            image: "/assets/img/rfp-ai-agent.webp",
        },
        {
            category: "General Problem Solvers",
            title: "AI Agents in Saudi Arabia: Driving Enterprise Transformation",
            link: "",
            image: "/assets/img/rfp-ai-agent.webp",
        },
    ];

    return (
        <div>
            <CasesBanner
                tag="Use Case"
                heading="Success Stories From Our Partners"
                description={`See how organizations around the world use Kogents AI agents to streamline workflows, boost efficiency, and deliver better customer experiences. Real stories, real impact.`}
                buttonColor="green"
                buttonText="Get Qoute"
            />
            <CaseCards cardColClass="col-md-6 col-12" cards={cardsData} />
        </div>
    )
}

export default Page
