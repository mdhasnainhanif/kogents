export const dynamic = "force-static";

import HeroSection from '@/components/whatsapp-v2/HeroSection';
import Counter from '@/components/whatsapp-v2/Counter'
import Engagement from '@/components/whatsapp-v2/Engagement';
import FAQSection from '@/components/solutions/csr/FAQSection';
import type { Metadata } from 'next';
import WhatsappAgentSection from '@/components/whatsapp-v2/WhatsappAgentSection';
import CustomerBenefitSection from '@/components/CustomerServiceAIAgents/CustomerBenefitSection';
import ClientTestimonial from '@/components/CustomerServiceAIAgents/ClientTestimonial';
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <div className="relative w-full min-h-screen">
                <div className="relative z-10">
                    <HeroSection />
                    <Counter className='pb-0' />
                    <WhatsappAgentSection />
                    <Engagement />
                    <ClientTestimonial
                    className='pt-0'
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
                    <div className='mb-8'>
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
                    </div>
                    <FAQSection showLoadMore={true} />
                </div>
            </div>
        </>
    );
}
