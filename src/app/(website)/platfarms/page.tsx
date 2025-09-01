import AllChannelsCard from '@/components/platfarms/AllChannelsCard'
import AppSection from '@/components/platfarms/AppSection'
import Banner from '@/components/platfarms/Banner'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Platform | Kogents AI',
    description:
      'Learn about Kogents AI, our mission, core values, and how we empower businesses through artificial intelligence. Meet our team and explore our vision.',
    keywords: ['Kogents AI', 'About Kogents', 'AI for business', 'Our Team', 'Company Values', 'Business Intelligence'],
  
    alternates: {
      canonical: 'https://kogents.ai/platfarms',
      languages: {
        'en-US': 'https://kogents.ai/platfarms',
      },
    },

    openGraph: {
      title: 'Platform | Kogents AI',
      description:
        'Explore Kogents AI: our values, team, and vision to empower businesses using cutting-edge AI technology.',
      url: 'https://www.kogents.ai/platforms', // replace with actual page URL
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

const page = () => {
  return (
    <>
        <Banner/>
        <AllChannelsCard/>
        <AppSection/>
    </>
  )
}

export default page