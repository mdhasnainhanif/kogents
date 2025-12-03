// app/blog/[slug]/page.tsx

import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { decode } from "html-entities";
import { FaXTwitter } from "react-icons/fa6";
import { MetaDataType } from "../../../../types";
import Script from "next/script";
import BlogFAQSection from "../../../../components/blog/BlogFAQSection";
import { notFound } from "next/navigation";

// ---- Types ----
interface FAQ {
  question: string;
  answer: string;
}

// Rank Math shape (kept minimal to what we need)
interface RankMathSEO {
  title?: string;
  description?: string;
  keywords?: string; // Rank Math often stores as comma-separated string
}

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
  // Rank Math sometimes appears on the root or under meta; we’ll check both
  rank_math_seo?: RankMathSEO;
  meta?: {
    _kogents_summary?: string;
    _kogents_reading_time?: string;
    _blogpost_faqs?: FAQ[];
    rank_math_seo?: RankMathSEO;
  };
}

type Params = { slug: string };

// Change from static to dynamic for frequent updates
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

// Helpers
const stripHTML = (s?: string) => (s ? s.replace(/<[^>]+>/g, "") : "");
const clean = (s?: string) => decode(stripHTML(s || "").trim());
const asKeywordsArray = (kw?: string | string[]) => {
  if (!kw) return [];
  if (Array.isArray(kw)) return kw;
  return kw
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
};

// ---- Metadata ----
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<MetaDataType> {
  try {
    const { slug } = await params;

    const timestamp = Date.now();
    const res = await fetch(
      `https://kogents.ai/wordpress/wp-json/wp/v2/posts?slug=${encodeURIComponent(
        slug
      )}&_embed&_=${timestamp}`,
      {
        cache: "no-store",
        next: { revalidate: 0 },
      }
    );

    if (!res.ok) {
      return {
        title: "Post not found | Kogents Blog",
        description: "We couldn't find the blog post you're looking for.",
      };
    }

    const posts: BlogPost[] = await res.json();
    const post = posts?.[0];
    console.log({post: post});

    if (!post) {
      return {
        title: "Post not found | Kogents Blog",
        description: "We couldn't find the blog post you're looking for.",
      };
    }

    // Prefer Rank Math -> fallback to WP fields
    const rm: RankMathSEO | undefined =
      post.rank_math_seo || post.meta?.rank_math_seo;

    const rmTitle = clean(rm?.title);
    const rmDesc = clean(rm?.description);
    const rmKeywords = asKeywordsArray(rm?.keywords);

    const wpTitle = clean(post.title?.rendered) || "Kogents Blog";
    const wpDesc =
      clean(post.excerpt?.rendered)?.slice(0, 160) ||
      "Stay updated with the latest articles and insights from Kogents.";

    const ogImage =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/default-og.jpg";

    // Canonical (ensure consistent /blog/ not /blogs/)
    const canonicalUrl = `https://www.kogents.ai/blogs/${encodeURIComponent(slug)}`;

    // Final picks (Rank Math first, fall back to WP)
    const finalTitle = rmTitle || `${wpTitle} | Kogents Blog`;
    const finalDescription = rmDesc || wpDesc;
    const finalKeywords = rmKeywords.length ? rmKeywords : undefined;

    return {
      title: finalTitle,
      description: finalDescription,
      // add keywords at the page level if Rank Math provides them
      keywords: finalKeywords,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: rmTitle || wpTitle,
        description: finalDescription,
        type: "article",
        url: canonicalUrl,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: rmTitle || wpTitle,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: rmTitle || wpTitle,
        description: finalDescription,
        images: [ogImage],
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

// Extract headings from HTML - exclude headings with media tags
function extractHeadingsFromHTML(html: string) {
  const headingMatches = [...html.matchAll(/<h([23]) id="(.*?)">(.*?)<\/h\1>/g)];

  return headingMatches
    .map(([_, level, id, text]) => {
      const plainText = decode(text.replace(/<[^>]+>/g, "").trim());
      return {
        id,
        text: plainText,
        tag: `H${level}`,
        originalText: text, // Keep original to check for media tags
      };
    })
    .filter((heading) => {
      // Filter out headings that contain img, audio, or video tags
      const hasMediaTags = /(<img|<audio|<video)/i.test(heading.originalText);
      const hasValidText = heading.text.length > 0; // Also filter empty headings

      return !hasMediaTags && hasValidText;
    })
    .map(({ id, text, tag }) => ({ id, text, tag })); // Return clean object without originalText
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  // Use consistent URL base (/blog) everywhere
  const postUrl = `https://www.kogents.ai/blogs/${encodeURIComponent(slug)}`;

  // Force fresh data with timestamp - NO caching
  const timestamp = Date.now();

  const res = await fetch(
    `https://kogents.ai/wordpress/wp-json/wp/v2/posts?slug=${encodeURIComponent(
      slug
    )}&_embed&_=${timestamp}`,
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );

  if (!res.ok) notFound();
  const posts: BlogPost[] = await res.json();
  if (!posts || posts.length === 0) notFound();

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
  const encodedUrl = postUrl;
  const encodedTitle = encodeURIComponent(decodedTitle);

  // Social share links (fixed to /blog and www)
  const shareLinks = [
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FaFacebookF />,
      label: "Facebook",
    },
    {
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <FaXTwitter />,
      label: "×",
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

  const faqs = post.meta?._blogpost_faqs || [];

  return (
    <section>
      <div className="py-24 bg-no-repeat bg-cover bg-[url('../img/bc/blog-single-bg.png')]">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex items-start gap-[30px] relative blogdivforotherscreen">
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
              {/* Summary */}
              <div className="summarydiv">
                <h2>Summary:</h2>
                {post.meta?._kogents_summary && (
                  <div
                    data-aos="fade-up"
                    className="aos-init aos-animate blogsummary"
                    dangerouslySetInnerHTML={{
                      __html: post.meta._kogents_summary,
                    }}
                  />
                )}
              </div>

              <div className="tableofcontentinner">
                <h3 data-aos="fade-up" className="aos-init aos-animate mb-4">
                  Table of Content
                </h3>
                <ul className="space-y-2 text-[#9b98ae] list-none pl-0 table-list">
                  {headings.map((heading, index) => (
                    <li
                      key={index}
                      className={heading.tag === "H3" ? "ml-4 text-sm" : ""}
                    >
                      <a href={`#${heading.id}`} className="hover:text-blue-600">
                        {index + 1}. {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Blog Content */}
            <div className="blog-content lg:pe-[30px] w-full md:max-w-[850px] lg:border-r lg:border-r-border-r">
              {/* Title */}
              <h1
                data-aos="fade-up title"
                className="text-4xl mb-4 font-medium text-w-500 aos-init aos-animate"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              {/* Reading Time */}
              {post.meta?._kogents_reading_time && (
                <div className="flex items-center gap-2 mb-6 text-w-100 text-white">
                  <FaClock className="text-md" />
                  <span className="text-md">
                    {post.meta._kogents_reading_time}
                  </span>
                </div>
              )}

              {/* Featured Image */}
              {featuredImage && (
                <img
                  data-aos="fade-up"
                  src={featuredImage}
                  alt={altText}
                  className="featured-images rounded-lg aos-init aos-animate w-100 single-blog-img"
                />
              )}

              {/* Summary (mobile) */}
              <div className="summarydivmobile">
                <h2>Summary:</h2>
                {post.meta?._kogents_summary && (
                  <div
                    data-aos="fade-up"
                    className="aos-init aos-animate blogsummary"
                    dangerouslySetInnerHTML={{
                      __html: post.meta._kogents_summary,
                    }}
                  />
                )}
              </div>

              {/* Blog Content */}
              <div>
                <div
                  data-aos="fade-up"
                  className="mt-12 mb-4 text-base text-w-100 aos-init aos-animate"
                  dangerouslySetInnerHTML={{ __html: contentWithIds }}
                />

                {/* Hide .blogpost-faqs-block */}
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                    .blogpost-faqs-block {
                      display: none !important;
                    }
                  `,
                  }}
                />

                {/* Audio enhancement */}
                <Script id="player-style" strategy="afterInteractive">
                  {`
                    (async () => {
                      const module = await import('https://cdn.jsdelivr.net/npm/player.style/tailwind-audio/+esm');
                      document.querySelectorAll('.blog-content audio').forEach((audio) => {
                        const parent = audio.parentElement;
                        if (parent?.tagName.toLowerCase() !== 'media-theme-tailwind-audio') {
                          const wrapper = document.createElement('media-theme-tailwind-audio');
                          audio.setAttribute('slot', 'media');
                          audio.replaceWith(wrapper);
                          wrapper.appendChild(audio);
                        }
                      });
                    })();
                  `}
                </Script>

                {/* Modal bootstrapping */}
                <Script id="wp-modal-own" strategy="afterInteractive">
                  {`
                  (function () {
                    if (!document.getElementById('welcomeModal')) {
                      var html =
                        '<div class="modalforblog fixed top-0 left-0 z-[9999] w-full h-full flex items-center justify-center bg-black transition-all duration-700 ease-in-out bg-opacity-0 backdrop-blur-none opacity-0 pointer-events-none" style="display:none;">' +
                          '<div id="welcomeModal" class="custom_modal contactSection p-0 bg-white rounded-xl shadow-2xl overflow-hidden relative max-w-5xl w-full transform transition-all duration-700 ease-in-out opacity-0 scale-90 translate-y-6">' +
                            '<button class="btn_primary_modal custom_modal_close_btn" id="closeModal" type="button">' +
                              '<i class="h5 d-flex align-items-center fa-solid fa-xmark">' +
                                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                                  '<path d="M18 6 6 18"></path>' +
                                  '<path d="m6 6 12 12"></path>' +
                                '</svg>' +
                              '</i>' +
                            '</button>' +
                            '<div class="row position-relative">' +
                              '<div class="col-md-6 p-md-0">' +
                                '<div class="home_modal_bg">' +
                                  '<div class="section-heading mt-2">' +
                                    '<h6 class="text-light">Smart and custom AI Agents that help <br> you build a secure and reliable future.</h6>' +
                                    '<h3 class="text-light modalHeading"><span>Unlock</span> the Power of AI</h3>' +
                                    '<img class="modalPhoneImg" src="/assets/img/robo.webp" alt="Robot" />' +
                                  '</div>' +
                                '</div>' +
                              '</div>' +
                              '<div class="col-md-6 p-md-0">' +
                                '<div class="modal_form py-4 px-md-3 mx-auto">' +
                                  '<div class="form2">' +
                                    '<form id="contact_form" action="#" method="post">' +
                                      '<h2 class="bookConsultation modalBookFree"><span class="textGray">Book Your</span> Free<br> Consultation</h2>' +
                                      '<div class="form-group"><input type="text" id="name" name="name" placeholder="Your Name Here" class="form-control" required /></div>' +
                                      '<div class="form-group"><input type="tel" id="phone" name="phone" placeholder="Phone Number" class="form-control" required /></div>' +
                                      '<div class="form-group"><input type="email" id="email" name="email" placeholder="Your Email" class="form-control" required /></div>' +
                                      '<div class="form-group"><textarea rows="3" id="project_need" name="project_need" placeholder="Describe Your Project Need" class="form-control" required></textarea></div>' +
                                      '<input type="hidden" name="gclid" id="gclid" />' +
                                      '<input type="hidden" name="fbclid" id="fbclid" />' +
                                      '<input type="hidden" name="igclid" id="igclid" />' +
                                      '<input type="hidden" name="ttclid" id="ttclid" />' +
                                      '<input type="hidden" name="fingerprint" id="fingerprint" />' +
                                      '<input type="hidden" name="chat" id="chat" />' +
                                      '<input type="hidden" name="stable_session_id" id="stable_session_id" />' +
                                      '<input type="hidden" name="fingerprintdata" id="fingerprintdata" />' +
                                      '<div class="border-button">' +
                                        '<button type="submit" class="buttonAnimation2 poppupBtn w-100 flex mt-3 justify-center items-center gap-2 px-6 py-[14px] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900">' +
                                          '<span>Submit</span>' +
                                          '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" style="vertical-align:middle;">' +
                                            '<path d="M5 12h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
                                            '<path d="M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
                                          '</svg>' +
                                        '</button>' +
                                      '</div>' +
                                    '</form>' +
                                  '</div>' +
                                '</div>' +
                              '</div>' +
                            '</div>' +
                          '</div>' +
                        '</div>';

                      document.body.insertAdjacentHTML('beforeend', html);
                    }

                    function ov(){ return document.querySelector('.modalforblog'); }
                    function md(){ return document.getElementById('welcomeModal'); }

                    function openModal(){
                      var o = ov(), m = md(); if(!o || !m) return;
                      o.style.display = 'flex';
                      m.style.display = 'block';
                      o.classList.remove('bg-opacity-0','backdrop-blur-none','opacity-0','pointer-events-none');
                      o.classList.add('bg-opacity-50','backdrop-blur-sm','opacity-100','pointer-events-auto');
                      m.classList.remove('opacity-0','scale-90','translate-y-6');
                      m.classList.add('opacity-100','scale-100','translate-y-0');
                    }
                    function closeModal(){
                      var o = ov(), m = md(); if(!o || !m) return;
                      o.classList.add('bg-opacity-0','backdrop-blur-none','opacity-0','pointer-events-none');
                      o.classList.remove('bg-opacity-50','backdrop-blur-sm','opacity-100','pointer-events-auto');
                      m.classList.add('opacity-0','scale-90','translate-y-6');
                      m.classList.remove('opacity-100','scale-100','translate-y-0');
                      setTimeout(function(){
                        m.style.display = 'none';
                        o.style.display = 'none';
                      }, 300);
                    }

                    document.addEventListener('click', function(e){
                      var t = e.target;
                      if (!t || !t.closest) return;
                      var opener = t.closest('.open-modal-btn');
                      if (opener){ e.preventDefault(); openModal(); return; }
                      if (t.closest('#closeModal')) { e.preventDefault(); closeModal(); return; }
                      var onOverlay = t.closest('.modalforblog');
                      var inside = t.closest('#welcomeModal');
                      if (onOverlay && !inside) { closeModal(); }
                    });

                    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeModal(); });

                    // expose for debugging
                    // @ts-ignore
                    window.blogModal = { open: openModal, close: closeModal };
                  })();
                  `}
                </Script>
              </div>

              {/* FAQ Section - Now using client component */}
              <BlogFAQSection faqs={faqs} />

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
                    Kogents AI builds intelligent agents for healthcare,
                    education, and enterprises, delivering secure, scalable
                    solutions that streamline workflows and boost efficiency.
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
