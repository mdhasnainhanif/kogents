"use client";
import Image from "next/image";
import { useState, useMemo } from "react";

export default function AiAgentSection() {
    const [activeTab, setActiveTab] = useState("industries"); // 'industries' | 'profession' | 'type'

    const isActive = (key: any) => activeTab === key;

    // tiny helper to join classes
    const cx = (...cls: any) => cls.filter(Boolean).join(" ");

    const TabCard = ({ img, title, points = [] }: any) => (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="p-6 md:p-12 border rounded-lg border-b-600 bg-gd-tertiary cardFull">
                <Image className="w-full" height={500} width={500} src={img} alt="media image" />
                <div className="p-3 pt-0 cardFullContent">
                    <a
                        href="javascript:void(0);"
                        className="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
                    >
                        {title}
                    </a>
                    <div className="flex flex-wrap gap-2 cardPoints">
                        {points.map((p: any, i: any) => (
                            <a
                                key={i}
                                href="#" className="inline-block px-4 py-2 text-sm border rounded-full border-blue-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                            >
                                {p}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const industriesCards = useMemo(
        () => [
            {
                img: "https://Kogents.ai/assets/img/team-slider/customer-complaint-ai-agent.webp",
                title: "Visualize KPIs in real-time across departments",
                points: [
                    "Detects complaint tone and urgency.",
                    "Generates empathy-driven replies.",
                    "Escalates unresolved issues fast.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/client-call-log-ai-agent.webp",
                title: "Auto-refresh data from multiple sources",
                points: [
                    "Logs every client interaction securely.",
                    "Helps analyze call performance & issues.",
                    "Enables quick call recall for reference.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/support-satisfaction-ai-agent.webp",
                title: "Send periodic summaries to team leads",
                points: [
                    "Collects feedback instantly post-support.",
                    "Identifies satisfaction trends.",
                    "Optimizes future support experiences.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/support-request-ai-agent.webp",
                title: "Generate alert-based reports for anomalies",
                points: [
                    "Handles support queries efficiently.",
                    "Routes requests to the right department.",
                    "Reduces response time significantly.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/customer-support-ai-agent.webp",
                title: "Integrate with CRM/ERP systems",
                points: [
                    "Resolves common issues instantly.",
                    "Available 24/7 across channels.",
                    "Improves customer satisfaction rate.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/customer-service-ai-agent.webp",
                title: "Embed predictive insights for decision-making",
                points: [
                    "Manages inquiries across platforms.",
                    "Boosts team productivity.",
                    "Ensures consistent messaging.",
                ],
            },
        ],
        []
    );

    const professionCards = useMemo(
        () => [
            {
                img: "https://Kogents.ai/assets/img/team-slider/support-request-ai-agent.webp",
                title: "Summarize meeting notes & action items",
                points: [
                    "Handles support queries efficiently.",
                    "Routes requests to the right department.",
                    "Reduces response time significantly.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/customer-support-ai-agent.webp",
                title: "Track project KPIs & milestones",
                points: [
                    "Resolves common issues instantly.",
                    "Available 24/7 across channels.",
                    "Improves customer satisfaction rate.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/customer-service-ai-agent.webp",
                title: "Generate task lists & reminders from chats/emails",
                points: [
                    "Manages inquiries across platforms.",
                    "Boosts team productivity.",
                    "Ensures consistent messaging.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/customer-complaint-ai-agent.webp",
                title: "Manage team requests & approvals",
                points: [
                    "Detects complaint tone and urgency.",
                    "Generates empathy-driven replies.",
                    "Escalates unresolved issues fast.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/client-call-log-ai-agent.webp",
                title: "Provide real-time performance dashboards",
                points: [
                    "Logs every client interaction securely.",
                    "Helps analyze call performance & issues.",
                    "Enables quick call recall for reference.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/support-satisfaction-ai-agent.webp",
                title: "Analyze employee engagement & productivity trends",
                points: [
                    "Collects feedback instantly post-support.",
                    "Identifies satisfaction trends.",
                    "Optimizes future support experiences.",
                ],
            },
        ],
        []
    );

    const typeCards = useMemo(
        () => [
            {
                img: "https://Kogents.ai/assets/img/team-slider/customer-complaint-ai-agent.webp",
                title: "Visualize KPIs in real-time across departments",
                points: [
                    "Detects complaint tone and urgency.",
                    "Generates empathy-driven replies.",
                    "Escalates unresolved issues fast.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/client-call-log-ai-agent.webp",
                title: "Auto-refresh data from multiple sources",
                points: [
                    "Logs every client interaction securely.",
                    "Helps analyze call performance & issues.",
                    "Enables quick call recall for reference.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/support-satisfaction-ai-agent.webp",
                title: "Send periodic summaries to team leads",
                points: [
                    "Collects feedback instantly post-support.",
                    "Identifies satisfaction trends.",
                    "Optimizes future support experiences.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/support-request-ai-agent.webp",
                title: "Generate alert-based reports for anomalies",
                points: [
                    "Handles support queries efficiently.",
                    "Routes requests to the right department.",
                    "Reduces response time significantly.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/customer-support-ai-agent.webp",
                title: "Integrate with CRM/ERP systems",
                points: [
                    "Resolves common issues instantly.",
                    "Available 24/7 across channels.",
                    "Improves customer satisfaction rate.",
                ],
            },
            {
                img: "https://Kogents.ai/assets/img/team-slider/customer-service-ai-agent.webp",
                title: "Embed predictive insights for decision-making",
                points: [
                    "Manages inquiries across platforms.",
                    "Boosts team productivity.",
                    "Ensures consistent messaging.",
                ],
            },
        ],
        []
    );

    return (
        <section
            className="sectionPadding bg-center lg:py-24 py-8 bg-center bg-no-repeat bg-cover bg-[url('img/bc/FAQ-bg.png')] faq-bg"
            id="aiAgentSection"
        >
            <div className="container">
                {/* Heading */}
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <span
                            // 
                            className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto"
                        >
                            Find By Industry
                        </span>
                        <h2
                            // 
                            className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize"
                        >
                            Discover AI Agents by Business
                            <span className="inline-block lg:block"> Use Case</span>
                        </h2>
                        <p
                            // 
                            className="mb-8 paraColor text-base md:text-xl text-w-100 text-center"
                        >
                            Filter and deploy AI agents designed for your industry and
                            workflows. Our library supports a variety of professional
                            functions—from healthcare coordination to logistics inquiries.
                        </p>
                    </div>
                </div>

                <div className="row rowGap justify-content-center mt-4">
                    {/* LEFT: Custom tabs (no Bootstrap JS) */}
                    <div className="col-lg-3 col-md-4">
                        <div className="solutionFaq">
                            <ul
                                className="faqUl nav nav-pills custom-tabs"
                                id="industries-tabs"
                                role="tablist"
                            >
                                <li
                                    className={cx(
                                        "nav-item custom-nav1 tab-div",
                                        isActive("industries") && "active1"
                                    )}
                                    role="presentation"
                                >
                                    <button
                                        type="button"
                                        className={cx(
                                            "nav-link custom-tab-link",
                                            isActive("industries") && "active"
                                        )}
                                        id="industries-tab1-tab"
                                        aria-controls="industries-tab1"
                                        aria-selected={isActive("industries")}
                                        onClick={() => setActiveTab("industries")}
                                    >
                                        Industry type
                                    </button>

                                    <ul className="list01">
                                        <li>Healthcare AI Agents</li>
                                        <li>Customer Service AI Agents</li>
                                        <li>Education AI Agents</li>
                                        <li>HR AI Agents</li>
                                    </ul>
                                    <div id="imageCounter"></div>
                                </li>

                                <li
                                    className={cx(
                                        "nav-item custom-nav1 tab-div",
                                        isActive("profession") && "active1"
                                    )}
                                    role="presentation"
                                >
                                    <button
                                        type="button"
                                        className={cx(
                                            "nav-link custom-tab-link",
                                            isActive("profession") && "active"
                                        )}
                                        id="industries-tab2-tab"
                                        aria-controls="industries-tab2"
                                        aria-selected={isActive("profession")}
                                        onClick={() => setActiveTab("profession")}
                                    >
                                        Profession
                                    </button>
                                    <ul className="list01">
                                        <li>Manager AI Agents</li>
                                        <li>Event Planner AI Agents</li>
                                        <li>Marketer AI Agents</li>
                                        <li>Teacher AI Agents</li>
                                    </ul>
                                    <div id="imageCounter2"></div>
                                </li>

                                <li
                                    className={cx(
                                        "nav-item custom-nav1 tab-div",
                                        isActive("type") && "active1"
                                    )}
                                    role="presentation"
                                >
                                    <button
                                        type="button"
                                        className={cx(
                                            "nav-link custom-tab-link",
                                            isActive("type") && "active"
                                        )}
                                        id="industries-tab3-tab"
                                        aria-controls="industries-tab3"
                                        aria-selected={isActive("type")}
                                        onClick={() => setActiveTab("type")}
                                    >
                                        Agent type
                                    </button>
                                    <ul className="list01">
                                        <li>AI Dashboard Templates</li>
                                        <li>Survey AI Agents</li>
                                        <li>Feedback AI Agents</li>
                                        <li>Application AI Agents</li>
                                    </ul>
                                    <div id="imageCounter3"></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT: Panels rendered by React state */}
                    <div className="col-lg-9 col-md-8">
                        <div className="tab-content" id="v-pills-tabContent">
                            {/* INDUSTRIES */}
                            <div
                                className={cx(
                                    "tab-pane fade",
                                    isActive("industries") && "show active"
                                )}
                                id="industries-tab1"
                                role="tabpanel"
                                aria-labelledby="industries-tab1-tab"
                            >
                                <div className="row rowGap paddingX0 image-wrapper1">
                                    {industriesCards.map((c, i) => (
                                        <TabCard key={i} {...c} />
                                    ))}
                                </div>
                            </div>

                            {/* PROFESSION */}
                            <div
                                className={cx(
                                    "tab-pane fade",
                                    isActive("profession") && "show active"
                                )}
                                id="industries-tab2"
                                role="tabpanel"
                                aria-labelledby="industries-tab2-tab"
                            >
                                <div className="row rowGap paddingX0 image-wrapper2">
                                    {professionCards.map((c, i) => (
                                        <TabCard key={i} {...c} />
                                    ))}
                                </div>
                            </div>

                            {/* TYPE */}
                            <div
                                className={cx("tab-pane fade", isActive("type") && "show active")}
                                id="industries-tab3"
                                role="tabpanel"
                                aria-labelledby="industries-tab3-tab"
                            >
                                <div className="row rowGap paddingX0 image-wrapper3">
                                    {typeCards.map((c, i) => (
                                        <TabCard key={i} {...c} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /RIGHT */}
                </div>
            </div>
        </section>
    );
}
