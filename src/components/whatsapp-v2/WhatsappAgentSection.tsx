import React from "react";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";
const WhatsappAgentSection = () => {
    return (
        <>
            <section
                className="sectionPadding bg-center bg-no-repeat bg-cover newBgTwo"
                id="WhatsappAgentSection"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <span className="buttonAnimation yellow mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
                                What Kogents AI Does
                            </span>
                            <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                                AI That's Actually Operational
                            </h2>
                            <p className="maxWidth39 mb-16 text-center paraColor subHeading mx-auto aos-init aos-animate">
                                Kogents AI plugs directly into your business, no-code, real-time, and trained on your systems. From handling 1,000+ tickets a day to qualifying leads or syncing bookings, our AI agents act like full-time staff across.
                            </p>
                        </div>
                    </div>
                    <div className="row rowGap justify-content-center mt-4">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                            <div className="whatsappNewServicesCard">
                                <Link href="/platforms/whatsapp-ai-agent" className="whatsappNewServicesCardHeading">
                                    Acquire
                                </Link>
                                <p>
                                    Send personalized messages,
                                    include promotional broadcasts,
                                    and run targeted ad campaigns to
                                    acquire and engage users.
                                </p>
                                <Link
                                    href="/chatbot/briefv2"
                                    className="w_fit buttonAnimation2 pink inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
                                >
                                    Start Free Trail
                                    <ArrowRightIcon style={{ height: 24 }} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                            <div className="whatsappNewServicesCard">
                                <Link href="/platforms/calendly-ai-integration" className="whatsappNewServicesCardHeading">
                                    Contvert
                                </Link>
                                <p>
                                    Send personalized messages,
                                    include promotional broadcasts,
                                    and run targeted ad campaigns to
                                    acquire and engage users.
                                </p>
                                <Link
                                    className="w_fit buttonAnimation2 green inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo "
                                    href="/chatbot/briefv2"
                                >
                                    Start Free Trail
                                    <ArrowRightIcon style={{ height: 24 }} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                            <div className="whatsappNewServicesCard">
                                <Link href="/platforms/hubspot-ai-integration" className="whatsappNewServicesCardHeading">
                                    Support
                                </Link>
                                <p>
                                    Send personalized messages,
                                    include promotional broadcasts,
                                    and run targeted ad campaigns to
                                    acquire and engage users.
                                </p>
                                <Link

                                    className="w_fit buttonAnimation2 yellow inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo "
                                    href="/chatbot/briefv2"
                                >
                                    Start Free Trail
                                    <ArrowRightIcon style={{ height: 24 }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhatsappAgentSection;
