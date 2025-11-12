export const dynamic = "force-static";

import HeroSection from '@/components/whatsapp-v2/HeroSection';
import Counter from '@/components/whatsapp-v2/Counter'
import ProductSection from '@/components/homeCopy/csr/ProductSection';
import BenefitsNewSection from '@/components/ai-agent/BenefitsNewSection';
import WorkflowsSection from '@/components/homeCopy/ssr/WorkflowsSection';
import FAQSection from '@/components/solutions/csr/FAQSection';
import AIAgentSlider from '@/components/homeCopy/csr/AIAgentSlider';
import AgentOS from '@/components/homeCopy/ssr/AgentOS';
import type { Metadata } from 'next';
import ScrollLock from '@/components/ai-agent/ScrollLock';
import WhatsappAgentSection from '@/components/whatsapp-v2/WhatsappAgentSection';
const BASE = "https://kogents.ai/whatsapp-v2";
export const metadata: Metadata = {
    title: 'Kogents Ai Agent | Top Agentic AI Automation & Integration ',
    description:
        'Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows. Email info@kogents.ai,  Phone +12672489454.',
    keywords: [
        'AI Agent',
        'Intelligent Automation',
        'AI Integration',
        'Healthcare AI',
        'Education AI',
        'Enterprise AI',
        'Workflow Automation',
        'AI Solutions'
    ],
    alternates: {
        canonical: "https://kogents.ai/whatsapp-v2",
        languages: {
            "en-US": "https://kogents.ai/whatsapp-v2",
        },
    },
    openGraph: {
        title: 'Kogents Ai Agent | Top Agentic AI Automation & Integration ',
        description:
            'Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows. Email info@kogents.ai,  Phone +12672489454.',
        url: "https://www.kogents.ai/whatsapp-v2",
        type: 'website',
        siteName: 'Kogents AI',
        locale: 'en_US',
        images: [
            {
                url: `${BASE}/assets/img/logo-new.svg`,
                width: 1200,
                height: 630,
                alt: 'Team Kogents AI working together',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kogents Ai Agent | Top Agentic AI Automation & Integration',
        description: 'Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows. Email info@kogents.ai,  Phone +12672489454.',
        images: [`${BASE}/assets/img/logo-new.svg`],
    },
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kogents AI",
    "url": BASE,
    "logo": `${BASE}/assets/img/kogents-logo.svg`,
    "description": "Discover Kogents AI Agent for agentic automation and easy integrations built for your workflows.",
    "foundingDate": "2024",
    "sameAs": [
        "https://www.linkedin.com/company/kogents-ai",
        "https://twitter.com/kogentsai"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": `${BASE}/contact-us`,
        "email": "info@kogents.ai",
        "telephone": "+12672489454"
    },
    "offers": {
        "@type": "Offer",
        "name": "AI Agent Solutions",
        "description": "Intelligent AI agents for healthcare, education, and enterprise automation",
        "category": "AI Services"
    }
};
export default function HomePage() {
    return (
        <>
            <ScrollLock />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <div className="relative w-full min-h-screen">
                <div className="relative z-10">
                    <HeroSection />
                    <Counter />
                    {/* <section className="cv">
                        <ProductSection />
                    </section> */}
                    <WhatsappAgentSection />
                    <div
                        className="bg-center bg-no-repeat bg-cover pb-0 newBgTheme"
                        id="caseStudySection"
                    >
                        <section className="cv">
                            <BenefitsNewSection />
                        </section>
                        <WorkflowsSection />
                        <section className="cv">
                            <AIAgentSlider />
                        </section>
                        <AgentOS />
                        <section className="cv">
                            <FAQSection showLoadMore={true} />
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
