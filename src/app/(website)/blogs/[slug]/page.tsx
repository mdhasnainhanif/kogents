// app/blog/[slug]/page.tsx

import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { decode } from 'html-entities';
import { FaXTwitter } from "react-icons/fa6";
import { MetaDataType } from "../../../../types";

interface BlogPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  excerpt?: { rendered?: string };
  _embedded?: {
    "wp:featuredmedia"?: [
      {
        source_url: string;
        alt_text: string;
      }
    ];
  };
}

type Params = { slug: string };

// ---- Metadata ----
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<MetaDataType> { // or Promise<MetaDataType> if you insist on your custom type
  try {
    const { slug } = await params;

    const res = await fetch(
      `https://kogents.ai/wordpress-blog/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return {
        title: "Post not found | Kogents Blog",
        description: "We couldn't find the blog post you're looking for.",
      };
    }

    const posts: BlogPost[] = await res.json();
    const post = posts[0];

    if (!post) {
      return {
        title: "Post not found | Kogents Blog",
        description: "We couldn't find the blog post you're looking for.",
      };
    }

    const rawTitle = post.title?.rendered?.replace(/<[^>]+>/g, "") || "Kogents Blog";
    const title = decode(rawTitle);
    const rawDescription =
      post.excerpt?.rendered?.replace(/<[^>]+>/g, "")?.slice(0, 160) || "";
    const description = decode(rawDescription);

    const image =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/default-og.jpg";

    return {
      title: `${title} | Kogents Blog`,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url: `https://kogents.ai/blog/${slug}`, // your route says /blog/[slug]
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {
      title: "Kogents Blog",
      description:
        "Stay updated with the latest articles and insights from Kogents.",
    };
  }
}


// Generate static params
export async function generateStaticParams() {
  try {
    const res = await fetch(
      'https://kogents.ai/wordpress-blog/wp-json/wp/v2/posts?per_page=100&_fields=slug',
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const posts = await res.json();

    // Return array of params for static generation
    return posts.map((post: { slug: string }) => ({ slug: post.slug }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Extract headings from HTML
function extractHeadingsFromHTML(html: string) {
  const headingMatches = [...html.matchAll(/<h([23]) id="(.*?)">(.*?)<\/h\1>/g)];
  return headingMatches.map(([_, level, id, text]) => ({
    id,
    text,
    tag: `H${level}`,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const postUrl = `https://kogents.ai/blog/${slug}`; // Replace with your domain

  const res = await fetch(
    `https://kogents.ai/wordpress-blog/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return <p>Failed to load post.</p>;
  const posts = await res.json();
  if (!posts || posts.length === 0) return <p>Post not found.</p>;

  const post: BlogPost = posts[0];
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  const altText =
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || "Featured image";

  // Add IDs to headings in content
  const contentWithIds = post.content.rendered.replace(
    /<h([23])>(.*?)<\/h\1>/g,
    (_match, level, text) => {
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "");
      return `<h${level} id="${id}">${text}</h${level}>`;
    }
  );

  const headings = extractHeadingsFromHTML(contentWithIds);

  const decodedTitle = decode(post.title.rendered);
  const encodedUrl = `https://kogents.ai/blog/${slug}`; // No encodeURIComponent here
  const encodedTitle = encodeURIComponent(decodedTitle);

  // Social share links
  const shareLinks = [
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FaFacebookF />,
      label: "Facebook",
    },
    {
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <FaXTwitter />,
      label: "X",
    },
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
    },
    {
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: <FaWhatsapp />,
      label: "WhatsApp",
    },
    {
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: <FaEnvelope />,
      label: "Email",
    },
  ];

  return (
    <section>
      <div className="py-24 bg-no-repeat bg-cover bg-[url('../img/bc/blog-single-bg.png')]">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-wrap items-start gap-[30px] relative">

            {/* Social Share - Left Side Grid */}
            <div className="hidden lg:flex flex-col gap-4 fixed top-1/3 left-4 z-10">
              {shareLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Share on ${item.label}`}
                  className="text-[#9b98ae] hover:text-blue-600 text-xl transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Table of Contents */}
            <div className="w-full md:max-w-[380px] single-blog-left-side">
              <h3
                data-aos="fade-up"
                className="mt-12 mb-6 text-xl font-medium text-w-500 aos-init aos-animate"
              >
                Table of Content
              </h3>

              <ul className="space-y-2 text-[#9b98ae] list-none pl-0 table-list">
                {headings.map((heading, index) => (
                  <li
                    key={index}
                    className={heading.tag === "H3" ? "ml-4 text-sm" : ""}
                  >
                    <a
                      href={`#${heading.id}`}
                      className="hover:text-blue-600"
                    >
                      {index + 1}. {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Blog Content */}
            <div className="blog-content lg:pe-[30px] w-full md:max-w-[850px] lg:border-r lg:border-r-border-r">
              {/* Title */}
              <h1
                data-aos="fade-up title"
                className="text-4xl mb-4 font-medium text-w-500 aos-init aos-animate"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              {/* Featured Image */}
              {featuredImage && (
                <img
                  data-aos="fade-up"
                  src={featuredImage}
                  alt={altText}
                  className="featured-images rounded-lg aos-init aos-animate w-100 single-blog-img"
                />
              )}

              {/* Blog Content */}
              <div>
                <div
                  data-aos="fade-up"
                  className="mt-12 mb-4 text-base text-w-100 aos-init aos-animate"
                  dangerouslySetInnerHTML={{ __html: contentWithIds }}
                />
              </div>

              {/* Footer */}
              <div className="row my-5 align-items-center">
                <div className="col-md-3">
                  <Image
                    width={150}
                    height={50}
                    src="/assets/img/kogents-logo.svg"
                    className="logo1"
                    alt="logo"
                  />
                </div>
                <div className="col-md-9 text-w-100">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua...
                  </p>
                </div>
              </div>

              {/* Social Share Icons - Bottom */}
              <div className="socialshare-div lg:flex flex-col gap-3 fixed left-6 top-1/3 z-50">
                {shareLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Share on ${item.label}`}
                    className="text-[#9b98ae] hover:text-blue-600 text-xl transition"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>



            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
