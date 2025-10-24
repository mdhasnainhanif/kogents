"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { BrowserView } from "react-device-detect";

gsap.registerPlugin(ScrollTrigger);

// Brand logos data array
const brandLogos = [
  {
    id: 1,
    src: "/assets/img/brand/1.svg",
    alt: "Brand Logo 1"
  },
  {
    id: 2,
    src: "/assets/img/brand/2.svg",
    alt: "Brand Logo 2"
  },
  {
    id: 3,
    src: "/assets/img/brand/3.svg",
    alt: "Brand Logo 3"
  },
  {
    id: 4,
    src: "/assets/img/brand/4.svg",
    alt: "Brand Logo 4"
  },
  {
    id: 5,
    src: "/assets/img/brand/5.svg",
    alt: "Brand Logo 5"
  }
];

const ProductSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".visual-tilt-content",
      {
        scale: 0.6,
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section_product-image w-layout-blockcontainer1 wrapper d-none"
      id="sectionTilt"
    >
      <BrowserView>
        <div className="container">
          <div className="position-relative">
            <div className="bg_product-bg is_bottom"></div>
            <div
              className="bg_product-image tilt-card pt-0 visual-tilt-content"
              data-w-id="42972b79-e7c6-eecc-50b0-3013e4dfdf0d"
              style={{ scale: 0.6, transition: "ease-in-out" }}
            >
              <Image
                src="/assets/img/erp-011.svg"
                loading="lazy"
                alt="erp"
                className="image_product-cards"
                width={800}
                height={600}
              />
              <Image
                loading="lazy"
                src="/assets/img/back-img.svg"
                alt="background"
                className="image_product-bg"
                width={800}
                height={600}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </BrowserView>

      <section className="newSection pb-0 mask">
        <div className="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[62.5rem] mx-auto">
          <div className="inline-flex logo_items animate-slides">
            {/* First set of logos */}
            {brandLogos.map((logo) => (
              <Image
                key={`first-${logo.id}`}
                src={logo.src}
                alt={logo.alt}
                className="mx-4"
                width={800}
                height={600}
                priority
                style={{ width: 'auto', height: 'auto' }}
              />
            ))}
            {/* Duplicate logos for seamless loop */}
            {brandLogos.map((logo) => (
              <Image
                key={`duplicate-${logo.id}`}
                src={logo.src}
                alt={logo.alt}
                className="mx-4"
                width={800}
                height={600}
                style={{ width: 'auto', height: 'auto' }}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductSection;
