"use client"
import { ArrowRightIcon } from "@/icons";
import { useModalStore } from "@/stores/useModalStore";
import Image from "next/image";
import React, { useState } from "react";

type Faq = { q: string; a: string };

interface CustomerServiceFaqSectionProps {
  tag: string;
  heading: string;
  description: string;
  faqItems: Faq[];
  buttonText?: string;
  backgroundImage?: string;
}

const CustomerServiceFaqSection: React.FC<CustomerServiceFaqSectionProps> = ({
  tag="FAQs",
  heading="Frequently Asked Questions",
  description,
  faqItems,
  buttonText = "Connect With Ai Agent",
  backgroundImage = "img/bc/faq-bg.png"
}) => {
  const { openModal } = useModalStore();
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <div
      className="lg:py-24 py-8 bg-center bg-no-repeat bg-cover faq-bg"
      id="faqSection"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col items-center justify-center">
          <span
            className="buttonAnimation purple inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
          >
            {tag}
          </span>
          <h2
            className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize"
          >
            {heading}
          </h2>
          <p className="mb-16 w-75 text-center mx-auto mt-2 subHeading paraColor">
            {description}
          </p>

          <div className="row mt-4">
            {faqItems.map((item, idx) => {
              const absoluteIndex = idx;
              const isOpen = openIndex === absoluteIndex;
              return (
                <div key={item.q} className="col-md-6 mb-4">
                  <AccordionItem
                    item={item}
                    isOpen={isOpen}
                    onToggle={() =>
                      setOpenIndex((prev) =>
                        prev === absoluteIndex ? -1 : absoluteIndex
                      )
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="row py-4">
          <div className="load-button d-flex  justify-center flex-wrap align-items-center gap-3">
            <button
              className="buttonAnimation2 newOrBtn flex justify-center items-center gap-2 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit open-modal-btn"
              onClick={openModal}
              type="button"
            >
              {buttonText}
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AccordionItem: React.FC<{
  item: Faq;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className={`p-6 border rounded-lg according border-b-600 bg-gd-tertiary content1 ${isOpen ? "active" : ""
        }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex items-start gap-2 text-xl font-medium cursor-pointer according-header text-w-500 w-full text-left"
      >
        <Image width={28} height={28} src="/assets/img/faq-icon.svg" alt="icon" />
        {item.q}
      </button>
      <div
        className="according-content pl-[2.5rem]"
        style={{ maxHeight: isOpen ? "12.5rem" : undefined }}
      >
        <p className="pt-4 text-base text-w-100">{item.a}</p>
      </div>
    </div>
  );
};

export default CustomerServiceFaqSection;
