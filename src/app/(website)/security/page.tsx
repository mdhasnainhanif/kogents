import SecurityBanner from '@/components/security/SecurityBanner'
import React from 'react'
import SecurityCards from '@/components/security/SecurityCards'
import SecurityBanner1 from '@/components/security/SecurityBanner1';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security | Kogents AI',
    description:
      'Kogents AI ensures a fully secure user experience, powered by advanced enterprise-grade guardrails and the latest industry standards',
    keywords: ['Kogents AI', 'About Kogents', 'AI for business', 'Our Team', 'Company Values', 'Business Intelligence'],
  
    alternates: {
      canonical: 'https://kogents.ai/security',
      languages: {
        'en-US': 'https://kogents.ai/security',
      },
    },
  
    openGraph: {
      title: 'Security | Kogents AI',
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
  }

const page = () => {
    

    const complianceData = [
        {
            title: "SOC 2 Compliant",
            description:
                "kogents is an SOC 2 Type II compliant company. Enquire about our certification by emailing us at support@kogents.ai.",
        },
        {
            title: "GDPR Compliant",
            description:
                "kogents abides by the General Data Protection Regulations. Enquire about our certification at support@kogents.ai.",
        },
        {
            title: "HIPAA Compliant",
            description:
                "Automating in healthcare requires us to be on top of the latest regulations and patient protection.",
        },
        {
            title: "Training Employees",
            description:
                "All existing and new employees must go through security training. There are also refresher sessions once a year.",
        },
        {
            title: "Backs up Automatically",
            description:
                "All the data that users agree to share is backed up automatically and maintained for a 30-day period.",
        },
        {
            title: "Breach Handling",
            description:
                "In the event of a security breach or incident, we have the necessary protocols in place to safeguard data.",
        },
        {
            title: "Data Encryption",
            description:
                "With AES-256 and TLS standards, sensitive data is encrypted, especially chats between users and the platform.",
        },
        {
            title: "Security Tests",
            description:
                "We consult the best in the industry when testing our security protocols, from penetration tests to scanning vulnerabilities.",
        },
        {
            title: "Service Level Agreements",
            description:
                "kogents is quick to communicate the status of its service in the event of downtimes, we also boast 99% server uptime.",
        },
    ];
    return (
        <div>
            
            <SecurityBanner
                tag="Security"
                heading="Agentic Automation with the Best-in-Class Security Protocols"
                description="The world is new to agentic automation; hence, we have left no stone unturned in our quest to provide the safest experience possible."
                buttonText="Go to Trust Center"
                imageSrc="/assets/img/badegs.webp"
            />
                <SecurityCards cards={complianceData} />
            <SecurityBanner1
                tag="Contact Us"
                heading="AI Automation for those who value privacy over everything else"
                description="Have questions about our security protocols? Speak to our team."
                buttonText="Speak to us"
                noBgImage={false}
            />

        </div>
    )
}

export default page
