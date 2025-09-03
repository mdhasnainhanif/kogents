import BlogBanner from '@/components/blog/BlogBanner'
import BlogCard from '@/components/blog/BlogCard'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Explore Kogents Agents | Kogents Blog",
    description: "Discover the latest insights, articles, and updates from Kogents. Explore our engineering approach through our blog.",
    openGraph: {
        title: "Explore Kogents Agents | Kogents Blog",
        description: "Discover the latest insights, articles, and updates from Kogents. Explore our engineering approach through our blog.",
        url: "https://kogents.ai/blogs", // Adjust if needed
        siteName: "Kogents",
        type: "website",
        images: [
            {
                url: "https://kogents.ai/og-image.jpg", // Replace with your image URL
                width: 1200,
                height: 630,
                alt: "Kogents Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Explore Kogents Agents | Kogents Blog",
        description: "Discover the latest insights, articles, and updates from Kogents.",
        images: ["https://kogents.ai/og-image.jpg"], // same image or different
    },
};

const Blogs = () => {
    return (
        <>
            <BlogBanner />
            <BlogCard />
        </>
    )
}

export default Blogs