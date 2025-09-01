import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@/icons';

const HeroSection = () => {
  return (
    <div className="heroSectionPadding bg-center bg-no-repeat bg-cover bg-[url('/img/bc/hero-bg.webp')] pb-0 heroSection">
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex flex-col items-center justify-center">
              <span className="buttonAnimation inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                Deep Dive With AI
              </span>

              <h1 className="mt-2 mb-2 tracking-[-0.02em] text-center text-3xl md:text-5xl font-semibold headingSize">
                Say Hello to Agents That Don’t Just Chat — They Operate
              </h1>

              <p className="mb-1 paraColor text-base text-center md:text-xl text-w-100">
                Deploy AI agents trained on your systems, built for your workflows, and optimized to reduce delays, costs, and inefficiencies.
              </p>

              <p className="mb-8 paraColor text-base text-center md:text-xl text-w-100">
                Plug into Slack, Zendesk, WhatsApp, Voice, and your CRM — and watch your operations scale, not your overhead.
              </p>

              <a
                href="#"
                className="buttonAnimation2 flex justify-center pink items-center gap-2 mb-8 lg:mb-14 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900"
              >
                Request Demo
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
