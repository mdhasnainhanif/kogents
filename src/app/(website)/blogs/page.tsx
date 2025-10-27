import BlogBanner from '@/components/blog/BlogBanner';
import BlogCard from '@/components/blog/BlogCard';
import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kogents AI Blog | Insights on Intelligent Agents & AI",
  description:
    "Explore the Kogents AI Blog for insights, updates, and strategies on intelligent agents, AI solutions, and smarter workflows for business growth.",
  alternates: {
    canonical: 'https://kogents.ai/blogs',
    languages: { 'en-US': 'https://kogents.ai/blogs' },
  },
  openGraph: {
    title: "Kogents AI Blog | Insights on Intelligent Agents & AI",
    description:
      "Explore the Kogents AI Blog for insights, updates, and strategies on intelligent agents, AI solutions, and smarter workflows for business growth.",
    url: "https://kogents.ai/blogs",
    siteName: "Kogents",
    type: "website",
    images: [
      {
        url: "https://kogents.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kogents Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kogents AI Blog | Insights on Intelligent Agents & AI",
    description:
      "Explore the Kogents AI Blog for insights, updates, and strategies on intelligent agents, AI solutions, and smarter workflows for business growth.",
    images: ["https://kogents.ai/og-image.jpg"],
  },
};

// Structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Kogents AI Blog",
  "description":
    "Explore the Kogents AI Blog for insights, updates, and strategies on intelligent agents, AI solutions, and smarter workflows for business growth.",
  "url": "https://kogents.ai/blogs",
  "publisher": {
    "@type": "Organization",
    "name": "Kogents AI",
    "url": "https://kogents.ai"
  }
};

export default function Blogs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogBanner />
      {/* Pass empty posts so BlogCard fetches client-side and shows skeleton */}
      <BlogCard posts={[]} />
    </>
  );
}
