"use client";
import React from "react";
import { useModalStore } from "@/stores/useModalStore";
import Image from "next/image";
// import { Container } from "react-bootstrap";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";

const HeroSection = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
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
  );
};

export default HeroSection;
