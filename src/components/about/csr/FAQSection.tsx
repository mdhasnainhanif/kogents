"use client"
import Image from "next/image";
import React, { useMemo, useState } from "react";

type Faq = { q: string; a: string };

const FAQ_ITEMS: Faq[] = [
    {
        q: "What systems does Kogents integrate with?",
        a: "We support major CRMs, helpdesks, e-commerce platforms, and communication channels, including custom setups.",
    },
    {
        q: "Does Kogents learn and adapt over time?",
        a: "Yes. It leverages every interaction to improve accuracy, context recognition, and performance over time.",
    },
    {
        q: "Can Kogents be used across departments?",
        a: "Absolutely. Our AI agents can be deployed independently or as part of a unified system across support, sales, and operations.",
    },
];


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

const FaqSection: React.FC = () => {
    // All items closed by default
    const [openIndex, setOpenIndex] = useState<number>(-1);
    // Load More logic (show N, then add chunks)
    const INITIAL_COUNT = 3;
    const CHUNK = 3;
    const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);

    const visibleFaqs = useMemo(
        () => FAQ_ITEMS.slice(0, visibleCount),
        [visibleCount]
    );

    return (
        <div
            className="lg:py-24 py-8 bg-center bg-no-repeat bg-cover faq-bg"
            id="faqSection"
        >
            <div className="container px-5 mx-auto xl:px-0">
                <div className="flex flex-col items-center justify-center">
                    <span
                        // 
                        className="buttonAnimation purple inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
                    >
                        FAQs
                    </span>
                    <h2
                        // 
                        className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize"
                    >
                        Frequently Asked Questions
                    </h2>
                    {/* <p className="mb-16 w-75 text-center mx-auto mt-2 subHeading paraColor">
                        Learn the answers to common questions about our AI solutions, tools,
                        and services, helping you understand how they can benefit your
                        business and streamline operations.
                    </p> */}

                    <div className="row mt-4">
                        {visibleFaqs.map((item, idx) => {
                            const absoluteIndex = idx; // within current slice, 0-based
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
            </div>
        </div>
    );
};

export default FaqSection;
