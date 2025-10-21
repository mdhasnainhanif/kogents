import { TestimonialBanner, Testimonials } from '@/components/testimonials'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Why Teams Trust Kogents AI | Customer Results & Stories",
    description: "See how Kogents AI Agents help teams automate support, boost sales, and deliver faster results through real client success stories.",
    
    alternates: {
        canonical: 'https://kogents.ai/client-testimonials/',
        languages: {
            'en-US': 'https://kogents.ai/client-testimonials/',
        },
    },

    openGraph: {
        title: "Why Teams Trust Kogents AI | Customer Results & Stories",
        description: "See how Kogents AI Agents help teams automate support, boost sales, and deliver faster results through real client success stories.",
        url: "https://kogents.ai/client-testimonials/",
        siteName: "Kogents",
        type: "website",
        images: [
            {
                url: "https://kogents.ai/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Kogents Testimonials",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Customer Testimonials | See What Teams Are Saying | Kogents AI",
        description: "Discover how teams are transforming their operations with Kogents AI. Read real customer testimonials and success stories from businesses using our intelligent AI agents.",
        images: ["https://kogents.ai/og-image.jpg"],
    },
};

const TestimonialsPage = () => {
    return (
        <>
            <TestimonialBanner />
            <Testimonials />
        </>
    )
}

export default TestimonialsPage