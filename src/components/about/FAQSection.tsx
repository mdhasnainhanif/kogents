"use client"
import Image from "next/image";
import React, { useState, useCallback } from "react";

const FAQSection = () => {
    const [open, setOpen] = useState([true, false, false]);

    const toggleAccordion = useCallback(
        (i: any) => {
            setOpen((prev) => {
                const next = [...prev];
                next[i] = !next[i];
                return next;
            });
        },
        [setOpen]
    );

    return (
        <div
            className="lg:py-24 py-8 bg-center bg-no-repeat bg-cover bg-[url('img/bc/FAQ-bg.png')] faq-bg"
            id="faqSection"
        >
            <div className="container px-5 mx-auto xl:px-0">
                <div className="flex flex-col items-center justify-center">
                    <span
                        // data-aos="fade-up"
                        className="buttonAnimation purple inline-block px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo"
                    >
                        FAQs
                    </span>
                    <h2
                        // data-aos="fade-down"
                        className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize"
                    >
                        Frequently Asked
                        <span className="inline-block lg:block"></span>Questions
                    </h2>
                    <p className="mb-16 w-75 text-center mx-auto mt-2 subHeading paraColor">
                        Learn the answers to common questions about our AI solutions&#44; tools&#44;
                        and services&#44; helping you understand how they can benefit your
                        business and streamline operations.
                    </p>

                    <div
                        // data-aos="fade-up"
                        className="flex flex-col gap-4 w-full lg:max-w-[850px] mt-4"
                    >
                        {/* Item 1 */}
                        <div
                            className={`p-6 border rounded-lg according border-b-600 bg-gd-tertiary content1 ${open[0] ? "active" : ""
                                }`}
                        >
                            <div
                                className="flex items-start gap-2 text-xl font-medium cursor-pointer according-header text-w-500"
                                onClick={() => toggleAccordion(0)}
                            >
                                <Image height={100} width={100} src="/assets/img/faq-icon.svg" alt="icon" />
                                What systems does Kogents integrate with?
                            </div>
                            <div
                                className="according-content pl-[40px]"
                                style={{ maxHeight: open[0] ? 200 : 0, overflow: "hidden" }}
                            >
                                <p className="pt-4 text-base text-w-100">
                                    We support major CRMs&#44; helpdesks&#44; e-commerce platforms&#44; and
                                    communication channels&#44; including custom setups.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div
                            className={`p-6 border rounded-lg according border-b-600 bg-gd-tertiary content1 ${open[1] ? "active" : ""
                                }`}
                        >
                            <div
                                className="flex items-start gap-2 text-xl font-medium cursor-pointer according-header text-w-500"
                                onClick={() => toggleAccordion(1)}
                            >
                                <Image width={100} height={100} src="/assets/img/faq-icon.svg" alt="icon" />
                                Does Kogents learn and adapt over time?
                            </div>
                            <div
                                className="according-content pl-[40px]"
                                style={{ maxHeight: open[1] ? 200 : 0, overflow: "hidden" }}
                            >
                                <p className="pt-4 text-base text-w-100">
                                    Yes. It leverages every interaction to improve accuracy,
                                    context recognition, and performance over time.
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div
                            className={`p-6 border rounded-lg according border-b-600 bg-gd-tertiary content1 ${open[2] ? "active" : ""
                                }`}
                        >
                            <div
                                className="flex items-start gap-2 text-xl font-medium cursor-pointer according-header text-w-500"
                                onClick={() => toggleAccordion(2)}
                            >
                                <Image width={100} height={100} src="/assets/img/faq-icon.svg" alt="icon" />
                                Can Kogents be used across departments?
                            </div>
                            <div
                                className="according-content pl-[40px]"
                                style={{ maxHeight: open[2] ? 200 : 0, overflow: "hidden" }}
                            >
                                <p className="pt-4 text-base text-w-100">
                                    Absolutely. Our AI agents can be deployed independently or as
                                    part of a unified system across support&#44; sales&#44; and
                                    operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-4">
                    <div className="load-button d-flex justify-center flex-wrap align-items-center gap-3">
                        <button
                            //   href="#"
                            className="buttonAnimation2 newOrBtn flex justify-center items-center gap-2 px-6 py-[14px] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit open-modal-btn"
                            data-modal-target="#welcomeModal"
                        >
                            Connect With Ai Agent
                            <Image width={25} height={25} src="/assets/img/icons/arrow-right.svg" alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
