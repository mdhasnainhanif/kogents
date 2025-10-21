"use client";
import Image from "next/image";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

type Faq = { q: string; a: string };

const AccordionItem: React.FC<{
  item: Faq;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className={`p-6 border rounded-lg according border-b-600 bg-gd-tertiary content1 ${
        isOpen ? "active" : ""
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex items-start gap-2 text-xl font-medium cursor-pointer according-header text-w-500 w-full text-left"
      >
        <Image width={28} height={28} loading="lazy" src="/assets/img/faq-icon.svg" alt="icon" />
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

interface BlogFAQSectionProps {
  faqs: FAQ[];
}

const BlogFAQSection: React.FC<BlogFAQSectionProps> = ({ faqs }) => {
  // Convert API format to component format
  const convertedFaqs: Faq[] = faqs.map(faq => ({
    q: faq.question,
    a: faq.answer
  }));

  // Open the first item by default
  const [openIndex, setOpenIndex] = useState<number>(0);

  if (faqs.length === 0) return null;

  return (
    <div className="">
      <div className="flex flex-col mb-3">
        <h2 className="text-start tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
          FAQs
        </h2>
      </div>
      
      <div className="flex flex-col gap-4 w-full lg:max-w-[850px]">
        {convertedFaqs.map((item, idx) => {
          const absoluteIndex = idx;
          const isOpen = openIndex === absoluteIndex;
          return (
            <AccordionItem
              key={item.q}
              item={item}
              isOpen={isOpen}
              onToggle={() =>
                setOpenIndex((prev) =>
                  prev === absoluteIndex ? -1 : absoluteIndex
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogFAQSection;
