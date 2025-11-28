"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";


type CardData = {
  title: string;
  description: string;
};

interface BenefitsSectionProps {
  className?: string;
  tag?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  cards?: CardData[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  className,
  tag = "Benefits",
  title = "Kogents AI agents Come",
  description = "Deploy AI agents to streamline operations and amplify your business's efficiency. These agents optimize processes, reduce delays, and enhance output, ensuring you gain a competitive edge with speed and precision.",
  imageSrc = "assets/img/members.png",
  imageAlt = "video image demo",
  cards = [
    {
      title: "Beat the Clock!",
      description: "Less waiting, more doing! Speed up tasks and watch your efficiency soar.",
    },
    {
      title: "Bye-Bye, Boring Tasks!",
      description: "Automate repetitive tasks so your team can focus on exciting work",
    },
    {
      title: "Data, All in One Place!",
      description: "Gather insights from everywhere and make smarter, quicker decisions.",
    },
    {
      title: "Data, All in One Place!",
      description: "Gather insights from everywhere and make smarter, quicker decisions.",
    },
  ],
}) => {
  return (
    <div
      className={`sectionPadding bg-center bg-no-repeat bg-cover bg-b-900 bg-[url('img/bc/faq-bg.png')] custom-padding ${className}`}
      id="benefitsSection"
    >
      <div className="container px-5 mx-auto p-md-0">
        <div className="flex flex-col items-center justify-center">
          <span className="buttonAnimation green inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
            {tag}
          </span>
          <h2 className="maxWidth39 mt-0 text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
            {title}
          </h2>
          <p className="maxWidth39 mb-16 text-center paraColor subHeading">
            {description}
          </p>

          <div className="row rowGap w-100 mt-5">
            <div className="col-xl-7">
              <div className="chartMain">
                <h2 className="d-none d-md-block">
                  Integerate AI Agents Into Your Organization Structure
                </h2>
                <Image
                  height={500}
                  width={500}
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-100"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-xl-5 gap-4">
              <div className="counterMain">
                {cards.map((card, idx) => (
                  <div className={`counter counter${idx + 1}`} key={idx}>
                    <div className="counterNumber1">
                      <h3 className="heading-4">{card.title}</h3>
                      <p className="text-white small-text1">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
