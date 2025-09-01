// app/about-us/page.tsx
import AboutUsBanner from '@/components/about/ssr/AboutUsBanner'
import AppSection from '@/components/about/ssr/AppSection'
import BenefitsSection from '@/components/about/csr/BenefitsSection'
import BlogSection from '@/components/about/ssr/BlogSection'
import CorePrinciples from '@/components/about/ssr/CorePrinciples'
import CorporateValues from '@/components/about/ssr/CorporateValues'
import FAQSection from '@/components/about/csr/FAQSection'
import OurTeam from '@/components/about/ssr/OurTeam'
import ValueToBusinesses from '@/components/about/ssr/ValueToBusinesses'
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'About Us | Kogents AI',
    description:
      'Learn about Kogents AI, our mission, core values, and how we empower businesses through artificial intelligence. Meet our team and explore our vision.',
    keywords: ['Kogents AI', 'About Kogents', 'AI for business', 'Our Team', 'Company Values', 'Business Intelligence'],
  
    alternates: {
      canonical: 'https://kogents.ai/about',
      languages: {
        'en-US': 'https://kogents.ai/about',
      },
    },

    openGraph: {
      title: 'About Us | Kogents AI',
      description:
        'Explore Kogents AI: our values, team, and vision to empower businesses using cutting-edge AI technology.',
      url: 'https://www.kogents.ai/about-us', // replace with actual page URL
      type: 'website',
      images: [
        {
          url: 'https://www.kogents.ai/assets/img/logo-new.svg', // replace with actual OG image URL
          width: 1200,
          height: 630,
          alt: 'Team Kogents AI working together',
        },
      ],
      siteName: 'Kogents AI',
      locale: 'en_US',
    },
  }

export default function AboutPage() {
  return (
    <>
      <AboutUsBanner />
      <BenefitsSection />
      <CorporateValues />
      <ValueToBusinesses />
      <CorePrinciples />
      <OurTeam />
      <BlogSection />
      <AppSection />
      <FAQSection />
    </>
  )
}
