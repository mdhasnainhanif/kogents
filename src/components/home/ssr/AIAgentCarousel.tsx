"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";

interface AIAgentCard {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  href: string;
  description: string[];
  buttonColor: string;
  buttonAnimation: string;
  colClass: string;
  isLarge?: boolean;
}

interface AIAgentCarouselProps {
  agentCards: AIAgentCard[];
}

const AIAgentCarousel: React.FC<AIAgentCarouselProps> = ({ agentCards }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCarousel = async () => {
      if (typeof window === "undefined" || !carouselRef.current) return;

      try {
        // Dynamically import jQuery and Owl Carousel
        const jQuery = (await import("jquery")).default as any;
        (window as any).$ = jQuery;
        (window as any).jQuery = jQuery;

        // Import Owl Carousel
        // @ts-expect-error: plugin no types
        await import("owl.carousel");

        // Inject Owl CSS if not already present
        if (!document.querySelector('link[href*="owl.carousel.min.css"]')) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href =
            "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
          document.head.appendChild(link);
        }

        // Initialize Owl Carousel
        if (carouselRef.current && jQuery && jQuery.fn.owlCarousel) {
          jQuery(carouselRef.current).owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
              0: {
                items: 1,
                nav: false,
                dots: true,
              },
              768: {
                items: 2,
                nav: false,
                dots: true,
              },
              1024: {
                items: 3,
                nav: true,
                dots: false,
              },
            },
          });
        }
      } catch (error) {
        console.error("Error loading carousel:", error);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      loadCarousel();
    }, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup carousel on unmount
      if (carouselRef.current && (window as any).jQuery) {
        try {
          (window as any).jQuery(carouselRef.current).trigger("destroy.owl.carousel");
        } catch (error) {
          console.error("Error destroying carousel:", error);
        }
      }
    };
  }, [agentCards]);

  return (
    <div className="d-block d-md-none mt-4">
      <div ref={carouselRef} className="owl-carousel owl-theme">
        {agentCards.map((card) => (
          <div key={card.id} className="item">
            <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
              <Image
                loading="lazy"
                src={card.image}
                alt={card.imageAlt}
                className="rounded-lg"
                width={400}
                height={300}
              />
              <Link href={card.href} className="mt-8 mb-6 text-2xl font-medium text-w-500">
                {card.title}
              </Link>
              <ul className="arrowPointUl">
                {card.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <a
                className={`w_fit ${card.buttonAnimation} inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo`}
                href="/chatbot/brief"
              >
                Request Access
                <ArrowRightIcon style={{ height: 24 }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIAgentCarousel;

