import BlogBanner from '@/components/blog/BlogBanner'
import BlogCard from '@/components/blog/BlogCard'
import React from 'react'
import { Metadata } from "next";

// Server-side data fetching
async function getBlogPosts() {
  try {
    const timestamp = Date.now();
    const response = await fetch(
      `https://kogents.ai/wordpress-blog/wp-json/wp/v2/posts?_embed&per_page=100&_=${timestamp}`,
      { 
        cache: 'no-store',
        next: { revalidate: 0 }
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch blog posts:', response.status);
      return [];
    }

    let data = await response.json();

    // If meta fields are not included, try alternative approach
    if (data.length > 0 && !data[0].meta) {
      const postsWithMeta = await Promise.all(
        data.map(async (post: any) => {
          try {
            const metaResponse = await fetch(
              `https://kogents.ai/wordpress-blog/wp-json/wp/v2/posts/${post.id}?_embed&_=${timestamp}`,
              { 
                cache: 'no-store',
                next: { revalidate: 0 }
              }
            );
            
            if (!metaResponse.ok) {
              return post;
            }
            
            const postWithMeta = await metaResponse.json();
            return postWithMeta;
          } catch (error) {
            console.error(`Error fetching meta for post ${post.id}:`, error);
            return post;
          }
        })
      );

      data = postsWithMeta;
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export const metadata: Metadata = {
    title: "Kogents AI Blog | Insights on Intelligent Agents & AI",
    description: "Explore the Kogents AI Blog for insights, updates, and strategies on intelligent agents, AI solutions, and smarter workflows for business growth.",
    
    alternates: {
        canonical: 'https://kogents.ai/blogs',
        languages: {
          'en-US': 'https://kogents.ai/blogs',
        },
    },
    
    openGraph: {
        title: "Kogents AI Blog | Insights on Intelligent Agents & AI",
        description: "Explore the Kogents AI Blog for insights, updates, and strategies on intelligent agents, AI solutions, and smarter workflows for business growth.",
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
        description: "Explore the Kogents AI Blog for insights, updates, and strategies on intelligent agents, AI solutions, and smarter workflows for business growth.",
        images: ["https://kogents.ai/og-image.jpg"],
    },
};

// Structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Kogents AI Blog",
  "description": "Explore the Kogents AI Blog for insights, updates, and strategies on intelligent agents, AI solutions, and smarter workflows for business growth.",
  "url": "https://kogents.ai/blogs",
  "publisher": {
    "@type": "Organization",
    "name": "Kogents AI",
    "url": "https://kogents.ai"
  }
};

const Blogs = async () => {
    // Server-side data fetching
    const posts = await getBlogPosts();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <BlogBanner />
            <BlogCard posts={posts} />
        </>
    )
}

export default Blogs