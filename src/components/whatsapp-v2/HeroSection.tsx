"use client";
import React from "react";
import Image from "next/image";
import { ArrowRightIcon2 } from "@/icons";
import Link from "next/link";
import LightRaysWrapper from '@/components/ai-agent/LightRaysWrapper';
const HeroSection = () => {
    const brands = [1, 2, 3, 4, 5];
    const brandImages = [...brands, ...brands, ...brands];
    return (
        <>
            <div className="boxesBg ... relative">
                <div className="absolute top-0 left-0 right-0 w-full h-full z-0 overflow-hidden hero-light-rays" style={{ background: 'transparent', top: 0 }}>
                    <LightRaysWrapper raysColor="#5D51AF" />
                </div>
                <section className="heroSectionPadding pb-0 heroSection relative z-10">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-9 col-sm-12">
                                <div className="flex flex-col heroItems gap-2">
                                    <span className="mx-auto buttonAnimation inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
                                        Whatsapp Ai Agent
                                    </span>
                                    <h2 className="headingSize text-center">
                                        Intelligent AI Agents That Work 24/7. Learn. Adapt. Deliver Results.
                                    </h2>
                                    <p className="paraColor text-base md:text-xl text-w-100 text-center">
                                        Transform your business with autonomous AI agents that handle conversations, automate workflows, and integrate seamlessly with your existing systems. Built for scale, designed for efficiency.
                                    </p>
                                    <Link
                                        href="/chatbot/briefv2"
                                        className="mx-auto mt-2 buttonAnimation2 flex justify-center pink items-center gap-2 lg:mb-14 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900"
                                        aria-label="Request demo for AI Agent Platform"
                                    >
                                        <span>Create Your <span className="star">✦</span><span className="ai fw-bold">AI</span><span className="star">✦</span> Agent Now</span>
                                        <ArrowRightIcon2 style={{ height: "24px" }} />
                                    </Link>
                                </div>
                                <div className="marginTop">
                                    <Image
                                        src={`/assets/img/whatsapp-v2/banner.webp`}
                                        alt={`Banner`}
                                        className="mx-4"
                                        width={930}
                                        height={350}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className=""
                    id=""
                >
                    {/* <div className="container new hideOn768">
                        <div className="position-relative">
                            <div className="bg_product-bg is_bottom"></div>
                            <div
                                className="bg_product-image tilt-card pt-0 visual-tilt-content"
                                data-w-id="42972b79-e7c6-eecc-50b0-3013e4dfdf0d"
                                style={{ scale: 0.6, transition: "ease-in-out" }}
                            >
                                <Image
                                    src="/assets/img/ai-agent/erp-ai-agent.svg"
                                    priority
                                    alt="AI Agent Platform"
                                    className="image_product-cards"
                                    width={800}
                                    height={600}
                                />
                                <Image
                                    priority
                                    src="/assets/img/back-img.svg"
                                    alt="background"
                                    className="image_product-bg"
                                    width={800}
                                    height={600}
                                />
                            </div>
                        </div>
                    </div> */}
                    <section className="newSectionSlider new pb-0 logoSlideSection">
                        <div className="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[62.5rem] mx-auto">
                            <div className="inline-flex logo_items animate-slides">
                                {brandImages.map((brandNum, index) => (
                                    <Image
                                        key={`brand-${brandNum}-${index}`}
                                        src={`/assets/img/brand/${brandNum}.svg`}
                                        alt={`brand${brandNum}`}
                                        className="mx-4 flex-shrink-0"
                                        width={150}
                                        height={80}
                                        style={{ width: "150px", height: "auto" }}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </>
    );
};

export default HeroSection;

