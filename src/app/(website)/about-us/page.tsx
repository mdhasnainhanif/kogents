import AboutUsBanner from '@/components/about/ssr/AboutUsBanner'
import BenefitsSection from '@/components/about/csr/BenefitsSection'
import CorporateValues from '@/components/about/ssr/CorporateValues'
import FAQSection from '@/components/about/csr/FAQSection'
import OurTeam from '@/components/about/ssr/OurTeam'
import type { Metadata } from 'next'
import CustomerBenefitSection from '@/components/CustomerServiceAIAgents/CustomerBenefitSection'
import AboutUsBanner1 from '@/components/about/ssr/AboutUsBanner1'
export const metadata: Metadata = {
  title: 'About Kogents AI | Building Intelligent Agents for Business',
  description:
    'Learn about Kogents AI, a team creating intelligent agents that help businesses work smarter, streamline workflows, and improve experiences.',
  keywords: ['Kogents AI', 'About Kogents', 'AI for business', 'Our Team', 'Company Values', 'Business Intelligence'],

  alternates: {
    canonical: 'https://kogents.ai/about-us',
    languages: {
      'en-US': 'https://kogents.ai/about-us',
    },
  },
  openGraph: {
    title: 'About Kogents AI | Building Intelligent Agents for Business',
    description:
      'Learn about Kogents AI, a team creating intelligent agents that help businesses work smarter, streamline workflows, and improve experiences.',
    url: 'https://www.kogents.ai/about-us',
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
  twitter: {
    card: 'summary_large_image',
    title: 'About Kogents AI | Building Intelligent Agents for Business',
    description: 'Learn about Kogents AI, a team creating intelligent agents that help businesses work smarter, streamline workflows, and improve experiences.',
    images: ['https://www.kogents.ai/assets/img/logo-new.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Kogents AI",
  "description": "Learn about Kogents AI, a team creating intelligent agents that help businesses work smarter, streamline workflows, and improve experiences.",
  "url": "https://kogents.ai/about-us",
  "mainEntity": {
    "@type": "Organization",
    "name": "Kogents AI",
    "description": "We design and deploy AI agents that integrate directly into your operations, across industries and functions. From customer support and sales to HR and ecommerce.",
    "foundingDate": "2024",
    "url": "https://kogents.ai",
    "logo": "https://kogents.ai/assets/img/kogents-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@kogents.ai",
      "telephone": "+12672489454"
    },
    "sameAs": [
      "https://www.linkedin.com/company/kogents-ai",
      "https://twitter.com/kogentsai"
    ]
  }
};
export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AboutUsBanner showSlider />
      <BenefitsSection
        tag="Solutions"
        title="What We Do"
        description="We design and deploy AI agents that integrate directly into your operations, across industries and functions. From customer support and sales to HR and ecommerce."
        imageSrc="/assets/img/members.png"
        imageAlt="Custom alt text"
        cards={[
          { title: "Streamline Operations", description: "Automate repetitive tasks and reduce bottlenecks." },
          { title: "Improve Efficiency", description: "Deliver faster, more accurate responses and workflows." },
          { title: "Centralize Knowledge", description: "Organize data into actionable insights." },
          { title: "Enhance Customer Experience", description: "Provide consistent, human-like interactions across all channels." },
        ]}
      />
      <AboutUsBanner1
        tag="Process"
        heading="How We Work"
        description={`Kogents.ai integrates smoothly with the platforms and tools you already use. From CRMs and helpdesks to ecommerce platforms and messaging apps, our agents connect to your workflows with minimal disruption. As your business grows, our agents adapt by learning from every interaction and scaling to meet new demands.`}
        showSlider={false}
      />
      <AboutUsBanner1
        tag="Vision"
        heading="Our Vision"
        description={`We believe the future of work is built on human AI collaboration. By removing friction from everyday operations and empowering people with intelligent agents, Kogents.ai helps organizations focus on what truly matters: innovation, growth, and meaningful human connection.`}
        showSlider={false}
        className="sectionPadding"
      />
      <CorporateValues />
      <OurTeam />
      <div className='sectionPadding pt-0'>
        <CustomerBenefitSection
          buttonText="Get Started with Kogents"
          leftColumn={{
            tag: "Start Now",
            title: "Build a Better Future",
            subtitle: "We're not just building automation but redefining how modern businesses communicate, where AI meets execution and every workflow becomes smarter.",
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
      <FAQSection />
    </>
  )
}
