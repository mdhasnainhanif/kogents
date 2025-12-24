"use client";
import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    breakpoints: {
      0: { slidesToScroll: 1 },
      768: { slidesToScroll: 2 },
      1024: { slidesToScroll: 3 },
    },
  });

  // Dots state
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const slideCount = agentCards.length;

  const scrollTo = useCallback(
    (idx: number) => (emblaApi ? emblaApi.scrollTo(idx) : undefined),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="d-block d-md-none mt-4">
      <div
        className="owl-carousel owl-theme"
        ref={emblaRef}
        style={{ overflow: "hidden" }}
      >
        <div className="embla__container" style={{ display: "flex" }}>
          {agentCards.map((card) => (
            <div
              className="item embla__slide"
              key={card.id}
              style={{ minWidth: 0, flex: "0 0 100%" }}
            >
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                <Image
                  loading="lazy"
                  src={card.image}
                  alt={card.imageAlt}
                  className="rounded-lg"
                  width={500}
                  height={384}
                  style={{ aspectRatio: "1.30" }}
                />
                <Link
                  href={card.href}
                  className="mt-8 mb-6 text-2xl font-medium text-w-500"
                >
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
      {/* Carousel dots */}
      <div className="embla__dots text-center mt-2" style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        {Array.from({ length: slideCount }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={
              "owl-dot embla__dot" +
              (selectedIndex === idx ? " active" : "")
            }
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => scrollTo(idx)}
            style={{ width: 12, height: 12, borderRadius: "50%", border: 0, background: selectedIndex === idx ? "#766bc5" : "#fff", margin: "0 2px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default AIAgentCarousel;
