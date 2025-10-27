import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";
import dynamic from "next/dynamic";

interface AIAgentCard {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  href: string;
  description: string[];
  buttonColor: string;
  buttonAnimation: string;
  colClass: string;
  isLarge?: boolean;
}

const AIAgentCarousel = dynamic<{ agentCards: AIAgentCard[] }>(
  () => import("./AIAgentCarousel")
);

const AIAgentSection = () => {
  const agentCards: AIAgentCard[] = [
    {
      id: "1",
      image: "/assets/img/home/whatsapp-ai-agent.webp",
      imageAlt: "WhatsApp AI Agent",
      title: "WhatsApp AI Agent",
      href: "/platforms/whatsapp-ai-agent",
      description: [
        "Responds instantly using your live knowledge base, so your team isn't stuck replying to repetitive queries.",
        "Identifies upgrade or cross-sell opportunities from ticket patterns.",
        "Reduces human ticket volume and increases qualified conversions through automated conversations.",
      ],
      buttonColor: "pink",
      buttonAnimation: "buttonAnimation2 pink",
      colClass: "col-xl-4 col-lg-6 col-md-6 col-12",
    },
    {
      id: "2",
      image: "/assets/img/home/phone-ai-agent.webp",
      imageAlt: "Calendly AI Agent",
      title: "Calendly AI Agent",
      href: "/platforms/calendly-ai-integration",
      description: [
        "Embeds Calendly booking Links directly into AI conversations.",
        "Triggers after product inquiries, support needs, or sales interest.",
        "Syncs with CRMs to confirm meetings instantly and reduce friction.",
      ],
      buttonColor: "green",
      buttonAnimation: "buttonAnimation2 green",
      colClass: "col-xl-4 col-lg-6 col-md-6 col-12",
    },
    {
      id: "3",
      image: "/assets/img/home/ai-assistant-app.webp",
      imageAlt: "HubSpot AI Agent",
      title: "HubSpot AI Agent",
      href: "/platforms/hubspot-ai-integration",
      description: [
        "Captures and syncs lead data from chats directly into HubSpot.",
        "Automates follow-ups with workflows for sales and support teams.",
        "Provides real-time insights to boost conversions and customer retention.",
      ],
      buttonColor: "yellow",
      buttonAnimation: "buttonAnimation2 yellow",
      colClass: "col-xl-4 col-lg-6 col-md-6 col-12",
    },
    {
      id: "4",
      image: "/assets/img/home/ai-chatbot-agent.webp",
      imageAlt: "Instagram AI Agent",
      title: "Instagram AI Agent",
      href: "/platforms/instagram-agent-ai",
      description: [
        "Replies instantly to DMs and comments with up-to-date product info.",
        "Qualifies leads and drives sales directly inside Instagram.",
        "Improves engagement while reducing manual social media workload.",
      ],
      buttonColor: "",
      buttonAnimation: "buttonAnimation2",
      colClass: "col-xl-6 col-lg-6 col-md-6 col-12",
    },
    {
      id: "5",
      image: "/assets/img/home/voice-ai-agent.webp",
      imageAlt: "Zendesk AI Agent",
      title: "Zendesk AI Agent",
      href: "/platforms/zendesk-ai-integration",
      description: [
        "Resolves common tickets instantly by pulling answers from Zendesk.",
        "Escalates complex cases with full context for faster resolution.",
        "Reduces support backlog while improving customer satisfaction.",
      ],
      buttonColor: "pink",
      buttonAnimation: "buttonAnimation2 pink",
      colClass: "col-xl-6 col-lg-6 col-md-6 col-12",
    },
    {
      id: "6",
      image: "/assets/img/home/shopify-ai-agent.webp",
      imageAlt: "Shopify AI Agent",
      title: "Shopify AI Agent",
      href: "/platforms/shopify-ai-agent",
      description: [
        "Handles product, order, refund, and shipping queries instantly by pulling live data from your store.",
        "Detects customer drop-offs and friction points in the purchase journey.",
        "Increases checkout completion rates and improves retention through faster, smarter post-sale support.",
      ],
      buttonColor: "green",
      buttonAnimation: "buttonAnimation2 green",
      colClass: "col-lg-12 col-md-6 col-12 card_hide_ipadpro",
      isLarge: true,
    },
    {
      id: "7",
      image: "/assets/img/home/messenger-ai-agent.webp",
      imageAlt: "Messenger AI Agent",
      title: "Messenger AI Agent",
      href: "/platforms/ai-agent-for-messenger",
      description: [
        "Answers Facebook DMs using up-to-date product, policy, and order info.",
        "Flags high-volume support topics and recurring friction in chat patterns.",
        "Boosts customer satisfaction and lead conversion through fast, intelligent engagement.",
      ],
      buttonColor: "yellow",
      buttonAnimation: "buttonAnimation2 yellow",
      colClass: "col-xl-4 col-lg-6 col-md-6 col-12",
    },
    {
      id: "8",
      image: "/assets/img/home/standalone-ai-agent.webp",
      imageAlt: "Slack AI Agent",
      title: "Slack AI Agent",
      href: "/platforms/slack-ai-agent",
      description: [
        "Answer team questions instantly using your internal knowledge.",
        "Automates workflows, reminders, and daily standup updates in Slack.",
        "Reduces response time and boosts team productivity across channels.",
      ],
      buttonColor: "pink",
      buttonAnimation: "buttonAnimation2 pink",
      colClass: "col-xl-4 col-lg-6 col-md-6 col-12",
    },
    {
      id: "9",
      image: "/assets/img/home/kiosk-ai-agent.webp",
      imageAlt: "Jira AI Agent",
      title: "Jira AI Agent",
      href: "/platforms/jira-ai-integration",
      description: [
        "Creates, updates, and assigns Jira tickets automatically from chat.",
        "Summarizes issues and provides instant status updates for teams.",
        "Reduces manual work and keeps projects moving without delays.",
      ],
      buttonColor: "green",
      buttonAnimation: "buttonAnimation2 green",
      colClass: "col-xl-4 col-lg-6 col-md-6 col-12",
    },
    {
      id: "10",
      image: "/assets/img/home/shopify-ai-agent.webp",
      imageAlt: "Shopify AI Agent",
      title: "Shopify AI Agent",
      href: "/platforms/shopify-ai-agent",
      description: [
        "Handles product, order, refund, and shipping queries instantly by pulling live data from your store.",
        "Detects customer drop-offs and friction points in the purchase journey.",
        "Increases checkout completion rates and improves retention through faster, smarter post-sale support.",
      ],
      buttonColor: "green",
      buttonAnimation: "buttonAnimation2 green",
      colClass: "col-lg-12 col-md-6 col-12 card_showhide_desktop",
      isLarge: true,
    },
  ];

  return (
    <>
      <section
        className="sectionPadding bg-center bg-no-repeat bg-cover newBg"
        id="aiAgentSection"
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
          {/* Desktop Grid */}
          <div className="row rowGap justify-content-center mt-4 d-none d-md-flex">
            {agentCards.map((card) => (
              <div key={card.id} className={card.colClass}>
                {card.isLarge ? (
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard newServicesCard1">
                <div className="row rowGap ipad-stack">
                  <div className="col-md-8">
                    <div>
                          <Image
                            loading="lazy"
                            src={card.image}
                            alt={card.imageAlt}
                        className="rounded-lg"
                        width={800}
                        height={600}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <div>
                            <Link href={card.href} className="mt-8 mb-6 text-2xl font-medium text-w-500">
                              {card.title}
                        </Link>
                        <ul className="arrowPointUl">
                              {card.description.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                        </ul>
                        <div className="button-center-ipad">
                          <a
                                className={`w_fit ${card.buttonAnimation} inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo`}
                                href="/chatbot/brief"
                          >
                            Request Access
                            <ArrowRightIcon />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                ) : (
              <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate newServicesCard">
                    <Image
                      loading="lazy"
                      src={card.image}
                      alt={card.imageAlt}
                  className="rounded-lg"
                      width={card.colClass.includes("col-xl-6") ? 600 : 400}
                      height={card.colClass.includes("col-xl-6") ? 500 : 300}
                />
                    <Link href={card.href} className="mt-8 mb-6 text-2xl font-medium text-w-500">
                      {card.title}
                </Link>
                <ul className="arrowPointUl">
                      {card.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                </ul>
                <a
                      className={`w_fit ${card.buttonAnimation} inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo`}
                      href="/chatbot/brief"
                >
                  Request Access
                  <ArrowRightIcon style={{ height: 24 }} />
                </a>
              </div>
                )}
            </div>
            ))}
          </div>

          {/* Mobile Owl Carousel */}
          <AIAgentCarousel agentCards={agentCards} />
        </div>
      </section>
    </>
  );
};

export default AIAgentSection;
