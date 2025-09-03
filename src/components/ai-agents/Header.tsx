"use client";

import { useModalStore } from "@/stores/useModalStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  // Toggle for mobile menu
  const openModal = useModalStore((state) => state.openModal);

  const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-[9999] border-b border-w-900 border-opacity-[8%] bg-opacity-5 backdrop-blur-lg bg-w-900 sticky-header oldHeader">
      {/* Desktop Header */}
      <div className="container px-5 mx-auto xl:px-0 desk">
        <div className="items-center justify-between hidden md:flex">
          <Link href="/" aria-label="KOGENTS - Go to homepage" className="flex items-center justify-start gap-2">
            <Image
            loading="lazy"
              width={150}
              height={50}
              src="/assets/img/kogents-logo.svg"
              className="logo1"
              alt="logo"
            />
          </Link>
          <nav>
            <ul className="flex items-center justify-center md:gap-4 lg:gap-8 relative">
              {[
                { href: "/", label: "home" },
                { href: "#aiAgents", label: "Ai Agents" },
                { href: "#caseStudySection", label: "Case Studies" },
                { href: "#benefitsSection", label: "Benefits" },
                { href: "#aiTemplateSection", label: "Ai Template" },
                { href: "#blogSection", label: "Blogs" },
                { href: "#faqSection", label: "Faq" },
              ].map(({ href, label }, i) => (
                <li key={i} className="relative group">
                  <Link
                    href={href}
                    className="inline-block text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-end gap-2 header_button">
            <Link
              href="#"
              onClick={openModal}
              className="buttonAnimation2 inline-block px-4 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary hover:bg-transparent text-w-900 open-modal-btn"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="overflow-hidden mobileHeader">
        <div className="container flex items-center justify-between px-5 mx-auto xl:px-0">
          <Link href="/" aria-label="KOGENTS - Go to homepage" className="flex gap-2">
            <Image
            loading="lazy"
              width="120"
              height="50"
              src="/assets/img/kogents-logo.svg"
              alt="logo"
            />
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleMenu}
            className="inline-block w-6 h-6 cursor-pointer text-w-900"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>

        <div
          id="mobile-menu"
          className="fixed z-[999999] top-0 left-0 flex-col justify-start items-start w-full h-screen p-5 bg-b-600 transition-all duration-300 hidden"
        >
          <nav>
            <ul className="flex flex-col items-start justify-start gap-4">
              {[
                { href: "/", label: "Home" },
                { href: "/ai-agents", label: "Ai Agents" },
                { href: "#caseStudySection", label: "Case Studies" },
                { href: "#benefitsSection", label: "Benefits" },
                { href: "#aiTemplateSection", label: "Ai Template" },
                { href: "#blogSection", label: "Blogs" },
                { href: "#faqSection", label: "Faq" },
              ].map(({ href, label }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="inline-block text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className="flex items-center gap-2 mt-8"
            style={{ marginLeft: "2.125rem" }}
          >
            <Link
              href="#"
              onClick={openModal}
              className="inline-block px-4 py-2 rounded-full border border-tropical-indigo hover:border-transparent border-opacity-[8%] capitalize text-sm font-medium bg-gd-secondary hover:bg-transparent text-w-900 transition-all duration-300 open-modal-btn"
            >
              Request Demo
            </Link>
          </div>
          <svg
            onClick={toggleMenu}
            className="absolute cursor-pointer top-5 right-5 text-w-100"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
