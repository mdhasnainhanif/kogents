"use client";
import React, { useRef } from "react";
import { useModalStore } from "@/stores/useModalStore";
import Image from "next/image";
// import { Container } from "react-bootstrap";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";
import { BrowserView } from "react-device-detect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => { 

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
  const openModal = useModalStore((state) => state.openModal);

  return (
    <>
    <div className="boxesBg">
    <section className="heroSectionPadding bg-center bg-no-repeat bg-cover bg-[url('/img/bc/hero-bg.webp')] pb-0 heroSection">
      <div className="px-5 mx-auto xl:px-0 container">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex flex-col items-center justify-center">
              <span className="buttonAnimation inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                Deep Dive With AI
              </span>

              <h1 className="mt-2 mb-2 tracking-[-0.02em] text-center text-3xl md:text-5xl font-semibold headingSize">
                Automate Every Conversation. Close Every Loop. Scale Without
                Hiring.
              </h1>

              <p className="mb-1 paraColor text-base text-center md:text-xl text-w-100">
                Kogents AI Agents handle customer support, calls, sales, and
                queries — across WhatsApp, phone, web, and more — without adding
                headcount.
              </p>

              <p className="mb-8 paraColor text-base text-center md:text-xl text-w-100">
                Your customers expect speed. Your team needs relief. Your ops
                crave efficiency. We deliver all three.
              </p>

              <Link
                href="/chatbot/create"
                // onClick={openModal}
                className="buttonAnimation2 flex justify-center pink items-center gap-2 mb-8 lg:mb-14 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900"
                aria-label="Request demo for Kogents AI"
              >
                Request Demo
                <ArrowRightIcon style={{ height: "24px" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
    ref={sectionRef}
    className="section_product-image w-layout-blockcontainer1 wrapper"
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
              src="/assets/img/back-img.svg"
              loading="lazy"
              alt="background"
              className="image_product-bg"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </BrowserView>

    <section className="newSection pb-0 logoSlideSection">
      <div className="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[62.5rem] mx-auto">
        <div className="inline-flex logo_items animate-slides">
          <Image
            src="/assets/img/brand/1.svg"
            alt="brand1"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/2.svg"
            alt="brand2"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/3.svg"
            alt="brand3"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/4.svg"
            alt="brand4"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/5.svg"
            alt="brand5"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/1.svg"
            alt="brand1"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/2.svg"
            alt="brand2"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/3.svg"
            alt="brand3"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/4.svg"
            alt="brand4"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/5.svg"
            alt="brand5"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/1.svg"
            alt="brand1"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/2.svg"
            alt="brand2"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/3.svg"
            alt="brand3"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/4.svg"
            alt="brand4"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/5.svg"
            alt="brand5"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/1.svg"
            alt="brand1"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/2.svg"
            alt="brand2"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/3.svg"
            alt="brand3"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/4.svg"
            alt="brand4"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
          <Image
            src="/assets/img/brand/5.svg"
            alt="brand5"
            className="mx-4 flex-shrink-0"
            width={150}
            height={80}
          />
        </div>
      </div>
    </section>
  </section>
  </div>
  </>
  );
};

export default HeroSection;
