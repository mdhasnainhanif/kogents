import ContactBanner from '@/components/contact/ContactBanner'
import ContactSection from '@/components/contact/ContactSection'
import CustomerBenefitSection from '@/components/CustomerServiceAIAgents/CustomerBenefitSection'
import FaqSection from '@/components/solutions/csr/FAQSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Kogents AI | Enterprise AI Solutions & Support',
  description:
    'Get in touch with Kogents AI for enterprise AI-agent solutions, free consultation, and expert support to drive business growth worldwide.',
  keywords: ['Kogents AI', 'About Kogents', 'AI for business', 'Our Team', 'Company Values', 'Business Intelligence'],

  alternates: {
    canonical: 'https://kogents.ai/contact-us',
    languages: {
      'en-US': 'https://kogents.ai/contact-us',
    },
  },

  openGraph: {
    title: 'Contact Kogents AI | Enterprise AI Solutions & Support',
    description:
      'Get in touch with Kogents AI for enterprise AI-agent solutions, free consultation, and expert support to drive business growth worldwide.',
    url: 'https://www.kogents.ai/contact-us', 
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
    title: 'Contact Kogents AI | Enterprise AI Solutions & Support',
    description: 'Get in touch with Kogents AI for enterprise AI-agent solutions, free consultation, and expert support to drive business growth worldwide.',
    images: ['https://www.kogents.ai/assets/img/logo-new.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Structured data for contact page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Kogents AI",
  "description": "Get in touch with Kogents AI for enterprise AI-agent solutions, free consultation, and expert support to drive business growth worldwide.",
  "url": "https://kogents.ai/contact-us",
  "mainEntity": {
    "@type": "Organization",
    "name": "Kogents AI",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@kogents.ai",
      "telephone": "+12672489454",
      "availableLanguage": "English"
    }
  }
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ContactBanner />
      <ContactSection />
      <div className='sectionPadding pt-0'>
        <CustomerBenefitSection
          buttonText="Get Now"
          leftColumn={{
            tag: "Start Now",
            title: "Let’s Build Smarter Connections",
            subtitle: "Whether you have questions, fresh ideas, or bold ambitions, we’re here to listen. Our team is only a message away and always ready to help you take the next step.",
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
      <FaqSection showLoadMore={true} />
    </>
  )
}

export default page