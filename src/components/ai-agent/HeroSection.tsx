"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {ArrowRightIcon2 } from "@/icons";
import Link from "next/link";
import LightRaysWrapper from '@/components/ai-agent/LightRaysWrapper';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Badge {
  text: string;
  icon?: string;
}
 
interface HeroSectionProps {
  className?: string;
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  mainImage?: string;
  mainImageAlt?: string;
  raysColor?: string;
  badges?: Badge[];
}

const HeroSection = ({
  className = "",
  badge = "AI Agent Platform",
  title = "Intelligent AI Agents That Work 24/7. Learn. Adapt. Deliver Results.",
  description = "Transform your business with autonomous AI agents that handle conversations, automate workflows, and integrate seamlessly with your existing systems. Built for scale, designed for efficiency.",
  buttonText = "Create Your ✦AI✦ Agent Now",
  buttonLink = "/chatbot/briefv2",
  mainImage = "/assets/img/ai-agent/erp-ai-agent.svg",
  mainImageAlt = "AI Agent Platform",
  raysColor = "#5D51AF",
  badges = []
}: HeroSectionProps) => {
  const sectionRef = useRef(null);
  const heroItemsRef = useRef(null);
  const imageRef = useRef(null);
  
  // GSAP Animations
  useGSAP(() => {
    // Hero content animation
    gsap.fromTo(
      heroItemsRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      }
    );

    // Image scale animation on scroll
    gsap.fromTo(
      imageRef.current,
      {
        scale: 0.8,
        transformOrigin: "center center",
      },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#sectionTilt",
          start: "top 95%",
          end: "bottom 90%",
          scrub: true,
          markers: false,
        },
      }
    );

    // Badges animation
    if (badges && badges.length > 0) {
      gsap.fromTo(
        ".hero-badge",
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 0.8,
        }
      );
    }

    // Logo animation
    gsap.fromTo(
      ".logo_items",
      {
        x: "100%",
      },
      {
        x: "-100%",
        duration: 20,
        ease: "none",
        repeat: -1,
      }
    );
  }, [badges]);

  // Brand images data for mapping
  const brands = [1, 2, 3, 4, 5];
  // Repeat brands 3 times for infinite scroll animation
  const brandImages = [...brands, ...brands, ...brands];

  return (
    <>
      <div className={`boxesBg ... relative ${className}`}>
        {/* LightRays background effect - only in hero section */}
        <div className="absolute top-0 left-0 right-0 w-full h-full z-0 overflow-hidden hero-light-rays" style={{ background: 'transparent', top: 0 }}>
          <LightRaysWrapper raysColor="#5D51AF" />
        </div>
        <section ref={sectionRef} className="heroSectionPadding pb-0 heroSection relative z-10">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-9 col-sm-12">
                <div ref={heroItemsRef} className="flex flex-col heroItems gap-2">
                  <span className="mx-auto buttonAnimation inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                    {badge}
                  </span>
                  <h2 className="headingSize text-center">
                    {title}
                  </h2>
                  <p className="paraColor text-base md:text-xl text-w-100 text-center mx-auto">
                    {description}
                  </p>
                  <Link
                    href={buttonLink}
                    className="mx-auto mt-2 buttonAnimation2 flex justify-center pink items-center gap-2 lg:mb-14 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900"
                    aria-label={`Request demo for ${badge}`}
                  > 
                    <span dangerouslySetInnerHTML={{ __html: buttonText }} />
                    <ArrowRightIcon2 style={{ height: "24px" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Badges Section - Only show if badges are provided */}
        {badges && badges.length > 0 && (
          <section className="pt0Mobile" style={{ padding: '3rem 0' }}>
            <div className="container">
              <div className="d-flex flex-wrap justify-content-center align-items-center" style={{ gap: '1rem' }}>
                {badges.map((badgeItem, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center text-white hero-badge"
                    style={{
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '50px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <div 
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#28a745',
                        borderRadius: '50%',
                        flexShrink: 0
                      }}
                    >
                      <svg 
                        width="12" 
                        height="12" 
                        fill="none" 
                        stroke="white" 
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>{badgeItem.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section
          className="section_product-image w-layout-blockcontainer1 wrapper"
          id="sectionTilt"
        >
          <div className="container new hideOn768">
            <div className="position-relative">
              <div className="bg_product-bg is_bottom"></div>
              <div
                ref={imageRef}
                className="bg_product-image tilt-card pt-0 visual-tilt-content"
                data-w-id="42972b79-e7c6-eecc-50b0-3013e4dfdf0d"
                style={{ scale: 0.8, transition: "ease-in-out" }}
              >
                <Image
                  src={mainImage}
                  priority
                  alt={mainImageAlt}
                  className="image_product-cards"
                  width={800}
                  height={600}
                />
                <Image
                  priority
                  src="/assets/img/back-img.svg"
                  alt="background"
                  className="image_product-bg"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>

          <section className="newSection new pb-0 logoSlideSection">
            <div className="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[62.5rem] mx-auto">
              <div className="inline-flex logo_items animate-slides">
                {brandImages.map((brandNum, index) => (
                  <Image
                    key={`brand-${brandNum}-${index}`}
                    src={`/assets/img/brand/${brandNum}.svg`}
                    alt={`brand${brandNum}`}
                    className="mx-4 flex-shrink-0"
                    width={150}
                    height={80}
                    style={{ width: "150px", height: "auto" }}
                  />
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default HeroSection;

