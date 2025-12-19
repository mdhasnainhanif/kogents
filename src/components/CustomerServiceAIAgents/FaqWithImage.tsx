"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface FaqItem {
  id: number;
  q: string;
  a: string;
  image?: string;
}

interface FaqWithImageProps {
  className?: string;
  tag?: string;
  heading?: string;
  description?: string;
  faqItems?: FaqItem[];
  rightImage?: string;
  rightImageAlt?: string;
}

const FaqWithImage: React.FC<FaqWithImageProps> = ({
  className,
  tag = "FAQ",
  heading = "Our Process to Train, Optimize, and Scale AI Service Agents",
  description = "Implementing a customer service AI agent works best when approached as a structured workflow.\nEach step ensures smooth integration, consistent performance, and measurable results for support teams and customers alike.\nHere's how it works:",
  faqItems = [
    {
      id: 1,
      q: "Identify Pain Points in Service Delivery",
      a: "The process begins with analyzing customer interactions. By applying NLP and intent recognition, our AI customer service agents highlight where automation and faster response handling will deliver the greatest impact.",
      image: "/assets/img/faq/step1.png",
    },
    {
      id: 2,
      q: "Deploy AI Agent Tailored to Workflow",
      a: "Next, virtual customer service AI agents are configured for the organization's needs. Direct integration with existing CRM platforms ensures every conversation is informed by accurate customer history.",
      image: "/assets/img/faq/step2.png",
    },
    {
      id: 3,
      q: "Train and Integrate with Existing Systems",
      a: "Agents are connected to existing tools through knowledge base retrieval, sentiment analysis, and escalation pathways. This enables accurate responses and ensures complex cases are escalated to human teams without delay.",
      image: "/assets/img/faq/step3.png",
    },
    {
      id: 4,
      q: "Monitor and Optimize",
      a: "Once live, performance is closely monitored. Data insights, feedback loops, and agentic AI learning cycles ensure the system continues to improve accuracy, consistency, and customer satisfaction.",
      image: "/assets/img/faq/step4.png",
    },
    {
      id: 5,
      q: "Scale with Confidence",
      a: "As adoption grows, AI capabilities expand across teams, channels, and regions. Scaling customer service automation delivers measurable ROI, making it a sustainable long-term investment.",
      image: "/assets/img/faq/step5.png",
    },
  ],
  rightImage = "/assets/img/faq.png",
  rightImageAlt = "AI Service Process",
}) => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [displayIndex, setDisplayIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const imageRefs = useRef<{ [key: string]: HTMLImageElement }>({});

  // Preload all images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = [];
      
      // Preload all FAQ images
      for (const item of faqItems) {
        if (item.image) {
          promises.push(
            new Promise<void>((resolve) => {
              const img = new window.Image();
              img.onload = () => {
                imageRefs.current[item.image!] = img;
                resolve();
              };
              img.onerror = () => resolve(); // Continue even if image fails
              img.src = item.image!;
            })
          );
        }
      }

      // Preload default image
      if (rightImage) {
        promises.push(
          new Promise<void>((resolve) => {
            const img = new window.Image();
            img.onload = () => {
              imageRefs.current[rightImage] = img;
              resolve();
            };
            img.onerror = () => resolve();
            img.src = rightImage;
          })
        );
      }

      await Promise.all(promises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, [faqItems, rightImage]);

  // Get current image
  const getCurrentImage = (index: number) => {
    return faqItems[index]?.image || rightImage;
  };

  // Get current alt text
  const getCurrentImageAlt = (index: number) => {
    const activeItem = faqItems[index];
    return activeItem?.image ? `Step ${activeItem.id}: ${activeItem.q}` : rightImageAlt;
  };

  // Handle FAQ click with proper image transition
  const handleFaqClick = (idx: number) => {
    if (idx === openIndex || isTransitioning || !imagesLoaded) return;

    setIsTransitioning(true);
    setOpenIndex(idx);

    // Wait for fade out, then change image, then fade in
    setTimeout(() => {
      setDisplayIndex(idx);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 200);
  };

  return (
    <div className={`sectionPadding ${className ? className : ""}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            {/* Tag */}
            <span className="buttonAnimation green inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mb-6">
              {tag}
            </span>

            {/* Main Heading */}
            <h2 className="text-center mt-0 maxWidth39 mx-auto tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize text-white mb125 mb-6">
              {heading}
            </h2>

            {/* Description */}
            <div className="w-75 mb-16 text-center subHeading mx-auto mt-2 text-white maxWidth39">
              {description && description.includes('\n') ? (
                description.split('\n').map((line, index) => (
                  <p key={index} className={index > 0 ? "mt-2 paraColor" : "paraColor"}>
                    {line.trim()}
                  </p>
                ))
              ) : (
                <p className="paraColor">{description}</p>
              )}
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-12">
          {/* FAQ Items - Left Side */}
          <div className="col-lg-6 col-md-12 mb-5 ">
            <div className="flex flex-col gap-4">
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.id}
                    className={`p-3 border rounded-lg according border-b-600 bg-gd-tertiary content1 cursor-pointer transition-all duration-300 ${
                      isOpen ? "active border-blue-500" : "hover:border-blue-300"
                    }`}
                    onClick={() => handleFaqClick(idx)}
                  >
                    <button
                      type="button"
                      className="flex items-start gap-2 text-xl font-medium according-header text-w-500 w-full text-left"
                    >
                     
                      <Image
                        width={28}
                        height={28}
                        src="/assets/img/faq-icon.svg"
                        alt="icon"
                      />
                      {item.q}
                    </button>
                    <div
                      className="according-content pl-[2.5rem]"
                      style={{ maxHeight: isOpen ? "12.5rem" : undefined }}
                    >
                      <div className="pt-2 text-base text-w-100">
                        {item.a && item.a.includes('\n') ? (
                          item.a.split('\n').map((line, index) => (
                            <p key={index} className={index > 0 ? "mt-2" : ""}>
                              {line.trim()}
                            </p>
                          ))
                        ) : (
                          <p className="faqAnswer">{item.a}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-lg-6 col-md-12">
            <div className="text-center">
              <div className="image-container">
                {imagesLoaded ? (
                  <img
                    key={displayIndex} // Force re-render with new key
                    src={getCurrentImage(displayIndex)}
                    alt={getCurrentImageAlt(displayIndex)}
                    width={622}
                    height={533}
                    className={`img-fluid rounded-3 shadow-lg image-fade ${
                      isTransitioning ? 'fade-out' : 'fade-in'
                    }`}
                    loading="eager"
                  />
                ) : (
                  <div className="img-fluid rounded-3 shadow-lg bg-gray-200 animate-pulse loading-placeholder">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-gray-500">Loading...</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .image-container {
          position: relative;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .loading-placeholder {
          width: 600px;
          height: 400px;
        }

        .image-fade {
          transition: opacity 0.2s ease-in-out;
        }

        .fade-in {
          opacity: 1;
        }

        .fade-out {
          opacity: 0;
        }

        .according.active {
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1);
        }

        .according-content {
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .according-header {
          transition: color 0.3s ease;
        }

        .according:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default FaqWithImage;
