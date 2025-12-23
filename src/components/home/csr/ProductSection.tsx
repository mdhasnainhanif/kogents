"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProductSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Prevent GSAP from iterating window.frames (can throw SecurityError on mobile)
    const scroller =
      (typeof document !== "undefined" && document.scrollingElement) ||
      (typeof document !== "undefined" ? document.documentElement : null);

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
          scroller: scroller as any,
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
      {/* Desktop View */}
      <div className="hidden md:block">
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
                src="/assets/img/back-img.svg"
                alt="background"
                className="image_product-bg"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="newSection pb-0 mask">
        <div className="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[62.5rem] mx-auto">
          <div className="inline-flex logo_items animate-slides">
            <Image
              src="/assets/img/brand/1.svg"
              alt="brand1"
              className="mx-4"
              width={800}
              height={600}
            />
            <Image
              src="/assets/img/brand/2.svg"
              alt="brand2"
              className="mx-4"
              width={800}
              height={600}
            />
            <Image
              src="/assets/img/brand/3.svg"
              alt="brand3"
              className="mx-4"
              width={800}
              height={600}
            />
            <Image
              src="/assets/img/brand/4.svg"
              alt="brand4"
              className="mx-4"
              width={800}
              height={600}
            />
            <Image
              src="/assets/img/brand/5.svg"
              alt="brand5"
              className="mx-4"
              width={800}
              height={600}
            />
            <Image
              src="/assets/img/brand/1.svg"
              alt="brand1"
              className="mx-4"
              width={800}
              height={600}
            />
            <Image
              src="/assets/img/brand/2.svg"
              alt="brand2"
              className="mx-4"
              width={800}
              height={600}
            />
            <Image
              src="/assets/img/brand/3.svg"
              alt="brand3"
              className="mx-4"
              width={800}
              height={600}
            />
            <Image
              src="/assets/img/brand/4.svg"
              alt="brand4"
              className="mx-4"
              width={800}
              height={600}
            />
            <Image
              src="/assets/img/brand/5.svg"
              alt="brand5"
              className="mx-4"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductSection;
