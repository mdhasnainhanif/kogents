"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface CaseCardItem {
    category: string;
    title: string;
    link: string;
    image: string;
}

interface CaseCardsProps {
    cards: CaseCardItem[];
    cardColClass?: string;
    heading?: string;
    tag?: string;
}

const CaseCards: React.FC<CaseCardsProps> = ({ cards, cardColClass = "col-md-5 col-12", heading, tag }) => {
    const [visibleCount, setVisibleCount] = useState(6); // Show 2 cards initially

    const loadMore = () => {
        setVisibleCount((prev) => prev + 2); // Show 2 more each time
    };

    return (
        <section className="sectionPadding">
            <div className="container">
                {(tag || heading) && (
                    <div className="row justify-content-center mb-4">
                        <div className="col-12 text-center">
                            {tag && (
                                <span className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
                                    {tag}
                                </span>
                            )}
                            {heading && (
                                <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                                    {heading}
                                </h2>
                            )}
                        </div>
                    </div>
                )}
                <div className="row rowGap justify-content-center">
                    {cards.slice(0, visibleCount).map((card, index) => (
                        <div className={cardColClass} key={index}>
                            <div
                                className="caseCards bg-gd-tertiary">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-100"
                                    width={382}
                                    height={182}
                                />
                                <p className="">
                                    {card.category}
                                </p>
                                <h3 className="">
                                    {card.title}
                                </h3>
                                <Link
                                    href={card.link}
                                    className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                                >
                                    Learn more →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < cards.length && (
                    <div className="d-flex align-items-center mt-8">
                        <button
                            onClick={loadMore}
                            className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn mx-auto"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CaseCards;
