"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { FaqItem, FaqSectionData } from "../../types";

const AccordionItem: React.FC<{
  item: FaqItem;
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
        <Image loading="lazy" width={28} height={28} src="/assets/img/faq-icon.svg" alt="icon" />
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

const FaqSection: React.FC<{ data: FaqSectionData }> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const INITIAL_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);

  const visibleFaqs = useMemo(() => data.items.slice(0, visibleCount), [data.items, visibleCount]);

  return (
    <div
      className="lg:py-24 py-8 bg-center bg-no-repeat bg-cover bg-[url('img/bc/faq-bg.png')] faq-bg"
      id="faqSection"
    >
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col items-center justify-center">
          {data.tag && (
            <span className="buttonAnimation purple inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
              {data.tag}
            </span>
          )}

          {data.heading && (
            <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
              {data.heading}
            </h2>
          )}

          {data.description && (
            <p className="mb-16 w-75 text-center mx-auto mt-2 subHeading paraColor">
              {data.description}
            </p>
          )}

          <div className="row mt-5">
            {visibleFaqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.q} className="col-md-6 mb-4">
                  <AccordionItem
                    item={item}
                    isOpen={isOpen}
                    onToggle={() =>
                      setOpenIndex((prev) => (prev === idx ? -1 : idx))
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
