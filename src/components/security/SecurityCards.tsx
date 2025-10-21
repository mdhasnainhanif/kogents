"use client";

import { div } from "motion/react-client";
import React from "react";

interface CardItem {
    title: string;
    description: string;
}

interface SecurityCardsProps {
    cards: CardItem[];
}

const SecurityCards: React.FC<SecurityCardsProps> = ({ cards }) => {
    return (
        <section>
            <div className="container">
                <div className="row rowGap">
                    {cards.map((card, index) => (
                        <div className="col-md-3 col-sm-6" key={index}>
                            <div
                                className="securityCards bg-gd-tertiary"
                            >
                                <h3 className="text-w-500">
                                    {card.title}
                                </h3>
                                <p className=".paraColor">{card.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecurityCards;
