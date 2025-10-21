import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kogents | AI Agentic Solutions for Growth and Efficiency',
  description:
    'Kogents delivers AI Agentic Solutions adapted to your workflows, integrating with your systems to drive productivity, efficiency, and measurable success.',
  keywords: [],

  alternates: {
    canonical: 'https://kogents.ai/solutions',
    languages: {
      'en-US': 'https://kogents.ai/solutions',
    },
  },

  openGraph: {
    title: 'Kogents | AI Agentic Solutions for Growth and Efficiency',
    description:
      'Kogents delivers AI Agentic Solutions adapted to your workflows, integrating with your systems to drive productivity, efficiency, and measurable success.',
    url: 'https://www.kogents.ai/solutions', 
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

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
