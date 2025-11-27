"use client";
import Image from "next/image";
import { useState, useMemo, useEffect, useRef } from "react";
// import { useSearchParams } from "next/navigation";

type TabType = "industries" | "profession" | "type";

interface TabCardProps {
    img: string;
    title: string;
    points: string[];
    href?: string;
}

export default function AiAgentSection() {
    const [activeTab, setActiveTab] = useState<TabType | null>(null);
    const [isClient, setIsClient] = useState(false);
    const lastUrlRef = useRef<string>("");

    // Handle client-side hydration
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Single effect to handle all URL changes
    useEffect(() => {
        if (!isClient) return;

        const checkAndSetTab = () => {
            const currentUrl = window.location.search;
            console.log("Current URL:", currentUrl);

            const urlParams = new URLSearchParams(currentUrl);
            const filterParam = urlParams.get("filter");
            console.log("Filter param:", filterParam);

            if (filterParam && (filterParam === "industries" || filterParam === "profession" || filterParam === "type")) {
                console.log("Setting active tab:", filterParam);
                setActiveTab(filterParam as TabType);
            } else {
                console.log("Clearing active tab");
                setActiveTab(null);
            }
        };

        // Check immediately on mount
        checkAndSetTab();

        // Listen for URL changes
        const handleUrlChange = () => {
            console.log("URL change detected");
            checkAndSetTab();
        };

        window.addEventListener('popstate', handleUrlChange);

        return () => {
            window.removeEventListener('popstate', handleUrlChange);
        };
    }, [isClient]);

    const isActive = (key: TabType) => {
        return activeTab === key;
    };

    // tiny helper to join classes
    const cx = (...cls: (string | boolean | undefined)[]) => cls.filter(Boolean).join(" ");

    const TabCard = ({ img, title, points = [], href }: TabCardProps) => (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="border rounded-lg border-b-600 bg-gd-tertiary cardFull">
                <Image className="w-full" height={500} width={500} src={img} alt="media image" />
                <div className="cardFullContent">
                    <a
                        href={href || "#"}
                        className="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
                    >
                        {title}
                    </a>
                    <div className="flex flex-wrap gap-2 cardPoints">
                        {points.map((p: string, i: number) => (
                            <p
                                key={i}
                                className="text-w-100"
                            >
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const industriesCards = useMemo(
        () => [
            {
                img: "/assets/img/team-slider/customer-complaint-ai-agent.webp",
                title: "Healthcare AI Agent",
                href: "/solutions/healthcare-ai-agent",
                points: [
                    "Automate patient support 24/7 with intelligent workflows that handle scheduling, insurance checks, and follow-ups.",
                ],
            },
            {
                img: "/assets/img/team-slider/client-call-log-ai-agent.webp",
                title: "Customer Service AI Agent",
                href: "/solutions/customer-service-ai-agent",
                points: [
                    "Manages inquiries through various channels, handles complex issues, and consistently learns from interactions to improve response quality.",
                ],
            },
            {
                img: "/assets/img/team-slider/support-satisfaction-ai-agent.webp",
                title: "AI Agent for Education",
                href: "/solutions/ai-agent-for-education",
                points: [
                    "Support with administrative duties, offer 24/7 assistance to students, and create customized learning materials according to specific requirements.",
                ],
            },
            {
                img: "/assets/img/team-slider/support-request-ai-agent.webp",
                title: "AI Agent for HR",
                href: "/solutions/ai-agent-for-hr",
                points: [
                    "Automates candidate screening and onboarding. Simplifies benefits administration. Handles everyday HR inquiries with a personal touch.",
                ],
            },
            {
                img: "/assets/img/team-slider/medical-ai-agent.webp",
                title: "Medical AI Agent",
                href: "/solutions/medical-ai-agent",
                points: [
                    "Enhance medical diagnostic accuracy, streamline patient data, and assist healthcare professionals with real-time insights for improved outcomes.",
                ],
            },
        ],
        []
    );

    const professionCards = useMemo(
        () => [
            {
                img: "/assets/img/team-slider/customer-support-ai-agent.webp",
                title: "AI Agent Event Planner",
                href: "/solutions/ai-agent-event-planner",
                points: [
                    "Manages invitations and registrations. Coordinates venue logistics and communications. Adapts quickly to last-minute changes.",
                ],
            },
            {
                img: "/assets/img/team-slider/customer-service-ai-agent.webp",
                title: "AI Agent for Marketing",
                href: "/solutions/ai-agent-for-marketing",
                points: [
                    "Expands content distribution efficiently. Evaluates campaign performance in real time. Provides customized advertising across channels.",
                ],
            },
            {
                img: "/assets/img/team-slider/customer-complaint-ai-agent.webp",
                title: "AI Teacher Assistant",
                href: "/solutions/ai-teacher-assistant",
                points: [
                    "Assists with grading assignments. Tracks student engagement and progress. Recommends personalized learning resources.",
                ],
            },


            {
                img: "/assets/img/team-slider/ai-recruiting-assistant.webp",
                title: "AI Recruiting Assistant",
                href: "/solutions/ai-recruiting-assistant",
                points: [
                    "Identify top talent faster, automate interview coordination, and maintain personalized candidate engagement throughout the hiring process.",
                ],
            },
            {
                img: "/assets/img/team-slider/hire-ai-agent.webp",
                title: "Hire AI Agent",
                href: "/solutions/hire-ai-agent",
                points: [
                    "Automate daily tasks, manage workflows, and handle communication to boost productivity and streamline operations.",
                ],
            },
        ],
        []
    );

    const typeCards = useMemo(
        () => [
            {
                img: "/assets/img/team-slider/customer-complaint-ai-agent.webp",
                title: "AI Agent Dashboard",
                href: "/solutions/ai-agent-dashboard",
                points: [
                    "Provides up-to-date information on system integrations. Delivers conversation analytics in real time. Simplifies monitoring across connected platforms.",
                ],
            },
            {
                img: "/assets/img/team-slider/client-call-log-ai-agent.webp",
                title: "Survey AI Agent",
                href: "/solutions/survey-ai-agent",
                points: [
                    "Creates insightful surveys quickly. Evaluates responses with AI-powered analysis. Generates actionable insights for business growth.",
                ],
            },
            {
                img: "/assets/img/team-slider/ai-recruiting-assistant.webp",
                title: "AI Recruiting Assistant ",
                href: "/solutions/ai-recruiting-assistant",
                points: [
                    "Identify top talent faster, automate interview coordination, and maintain personalized candidate engagement throughout the hiring process.",
                ],
            },
            {
                img: "/assets/img/team-slider/ai-automation-agency.webp",
                title: "AI Automation Agency",
                href: "/solutions/ai-automation-agency",
                points: [
                    "Deliver end-to-end automation strategies, integrating intelligent workflows and scalable AI solutions tailored to your business operations.",
                ],
            },


            {
                img: "/assets/img/team-slider/workflow-automation.webp",
                title: "Workflow Automation",
                href: "/solutions/workflow-automation",
                points: [
                    "Optimize complex business processes by connecting systems, eliminating redundancies, and boosting efficiency through adaptive AI workflows.",
                ],
            },
        ],
        []
    );

    return (
        <section
            className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('img/bc/faq-bg.png')] faq-bg"
            id="aiAgentSection"
        >
            <div className="container">
                {/* Heading */}
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <span className="buttonAnimation width_fit d-block px-4 py-2 mb-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
                            Overview
                        </span>
                        <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                            Explore Kogents AI Agents Across Roles, Industries, and Functions
                        </h2>
                    </div>
                </div>
                <div className="row rowGap justify-content-center mt-4">
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
                                        role="tab"
                                        aria-selected={isActive("industries")}
                                        onClick={() => setActiveTab("industries")}
                                    >
                                        By Industry
                                    </button>

                                    <ul className="list01">
                                        <li>Healthcare AI Agent</li>
                                        <li>Customer Service AI Agent</li>
                                        <li>AI Agent for Education</li>
                                        <li>AI Agent for HR</li>
                                        <li>Medical AI Agent</li>
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
                                        role="tab"
                                        aria-selected={isActive("profession")}
                                        onClick={() => setActiveTab("profession")}
                                    >
                                        By Profession
                                    </button>
                                    <ul className="list01">
                                        <li>AI Agent Event Planner</li>
                                        <li>AI Agent for Marketing</li>
                                        <li>AI Teacher Assistant</li>
                                        <li>AI Recruiting Assistant</li>
                                        <li>Hire ai agent</li>
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
                                        role="tab"
                                        aria-selected={isActive("type")}
                                        onClick={() => setActiveTab("type")}
                                    >
                                        By Type
                                    </button>
                                    <ul className="list01">
                                        <li>AI Agent Dashboard</li>
                                        <li>Survey AI Agent</li>
                                        <li>AI Automation Agency</li>
                                        <li>Workflow Automation</li>
                                    </ul>
                                    <div id="imageCounter3"></div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT: Panels rendered by React state */}
                    <div className="col-lg-9 col-md-8">
                        <div className="tab-content" id="v-pills-tabContent">
                            {activeTab === null && (
                                <div className="tab-pane fade show active" id="all-cards" role="tabpanel">
                                    <div className="row rowGap paddingX0 image-wrapper-all">
                                        {industriesCards.concat(professionCards, typeCards).map((c, i) => (
                                            <TabCard key={i} {...c} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            {activeTab === "industries" && (
                                <div className="tab-pane fade show active" id="industries-tab1" role="tabpanel" aria-labelledby="industries-tab1-tab">
                                    <div className="row rowGap paddingX0 image-wrapper1">
                                        {industriesCards.map((c, i) => (
                                            <TabCard key={i} {...c} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            {activeTab === "profession" && (
                                <div className="tab-pane fade show active" id="industries-tab2" role="tabpanel" aria-labelledby="industries-tab2-tab">
                                    <div className="row rowGap paddingX0 image-wrapper2">
                                        {professionCards.map((c, i) => (
                                            <TabCard key={i} {...c} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            {activeTab === "type" && (
                                <div className="tab-pane fade show active" id="industries-tab3" role="tabpanel" aria-labelledby="industries-tab3-tab">
                                    <div className="row rowGap paddingX0 image-wrapper3">
                                        {typeCards.map((c, i) => (
                                            <TabCard key={i} {...c} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
