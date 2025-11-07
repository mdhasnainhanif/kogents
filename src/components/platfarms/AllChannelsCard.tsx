"use client";

import { ArrowRightIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState, useEffect, useRef } from "react";
// import { useSearchParams } from "next/navigation";

type Filter = "Platforms" | "Integrations" | "LLM";
type Card = {
  id: string;
  title: string;
  icon: string;
  desc: string;
  link?: string;
  tags: Filter[];
};

const FILTERS: Filter[] = ["Platforms", "Integrations"];

const CARDS: Card[] = [
  // Channel
  {
    id: "whatsapp",
    title: "Whatsapp",
    icon: "/assets/img/icons/whatsapp.svg",
    desc: "Our WhatsApp AI Agent is available 24/7 to help with product questions, booking requests, and support issues.",
    tags: ["Platforms"],
    link: "/platforms/whatsapp-ai-agent",
  },
  {
    id: "instagram",
    title: "Instagram Agent",
    icon: "/assets/img/icons/instagram1.svg",
    desc: "With the Instagram AI Agent, you can engage followers, answer product questions, capture leads, and create content more quickly than ever.",
    tags: ["Platforms"],
    link: "/platforms/instagram-ai-agent",
  },
  {
    id: "messenger",
    title: "Messenger Agent",
    icon: "/assets/img/icons/messenger.svg",
    desc: "Qualify leads in real time, schedule appointments easily, and engage customers with personalized conversations directly in Messenger.",
    tags: ["Platforms"],
    link: "/platforms/ai-agent-for-messenger",
  },

  // Integrations (Shopify shows in both)
  {
    id: "shopify",
    title: "Shopify Agent",
    icon: "/assets/img/icons/shopify.svg",
    desc: "Auto-create, update, or complete Asana tasks from customer requests or internal triggers handled by AI agents.",
    tags: ["Integrations"],
    link: "/platforms/shopify-ai-agent",
  },
  {
    id: "hubspot",
    title: "Hubspot",
    icon: "/assets/img/icons/hubspot.svg",
    desc: "Create contacts, update records, and initiate workflows from AI agent interactions across platforms by automatically syncing conversations to HubSpot CRM.",
    tags: ["Integrations"],
    link: "/platforms/hubspot-ai-integration",
  },
  {
    id: "jira",
    title: "Jira",
    icon: "/assets/img/icons/jira.svg",
    desc: "AI agents can handle creating, updating, and assigning tasks, helping your product and engineering teams stay on the same page and making sure nothing gets overlooked.",
    tags: ["Integrations"],
    link: "/platforms/jira-ai-integration",
  },
  {
    id: "calendly",
    title: "Calendly",
    icon: "/assets/img/icons/calendly.png",
    desc: "Allow AI agents to handle scheduling by connecting directly to Calendly. They make it easier to coordinate and keep calendars in order, from scheduling meetings to updating availability.",
    tags: ["Integrations"],
    link: "/platforms/calendly-ai-integration",
  },
  {
    id: "slack",
    title: "Slack",
    icon: "/assets/img/icons/slack.svg",
    desc: "Work as your personal Slack assistant by handling incoming messages, answering frequently asked questions (FAQs), and sending more complicated requests to the right channels.",
    tags: ["Platforms"],
    link: "/platforms/slack-ai-agent",
  },
  {
    id: "sunshine",
    title: "Sunshine Conversations AI Agent",
    icon: "/assets/img/icons/sunshine.svg",
    desc: "This integration enables your bot to seamlessly interact with Instagram, allowing you to harness the power of social media in your conversational AI experiences.",
    tags: ["Platforms"],
    link: "/platforms/sunshine-conversation-ai-agent",
  },
  {
    id: "intercom",
    title: "AI Intercom Agent",
    icon: "/assets/img/icons/intercom.svg",
    desc: "This integration enables your bot to seamlessly interact with Instagram, allowing you to harness the power of social media in your conversational AI experiences.",
    tags: ["Integrations"],
    link: "/platforms/intercom-ai-agent",
  },
  {
    id: "line",
    title: "AI Line Agent",
    icon: "/assets/img/icons/line.svg",
    desc: "Conversational AI drives customer engagement and loyalty on Line. From service inquiries to promotion sharing and automated responses.",
    tags: ["Platforms"],
    link: "/platforms/line-ai-agent",
  },
  {
    id: "microsoft",
    title: "Microsoft Teams AI Agents",
    icon: "/assets/img/icons/microsoft.svg",
    desc: "Automate responses, organize inquiries, and deliver critical updates to your staff to simplify customer communication inside Microsoft Teams.",
    tags: ["Platforms"],
    link: "/platforms/microsoft-teams-agents",
  },
  {
    id: "Viber",
    title: "Viber AI Agents",
    icon: "/assets/img/icons/viber.svg",
    desc: "Help you in connecting with your customers on Viber through tailored conversations, immediate assistance, and proactive promotional offers.",
    tags: ["Platforms"],
    link: "/platforms/viber-ai-agent",
  },
  {
    id: "Zendesk",
    title: "Zendesk AI Agents",
    icon: "/assets/img/icons/zendesk.svg",
    desc: "Turn customer chats into Zendesk tickets without any hassle. Our AI agents can handle creating, updating, and even sorting out tickets from customer chats.",
    tags: ["Integrations"],
    link: "/platforms/zendesk-ai-integration",
  },
  {
    id: "Telegram",
    title: "Telegram AI Agents",
    icon: "/assets/img/icons/telegram.svg",
    desc: "Chat with customers worldwide on Telegram 24/7 in multiple languages. From inquiries to orders to real-time updates.",
    tags: ["Platforms"],
    link: "/platforms/ai-telegram-agent",
  },
  {
    id: "Voice",
    title: "AI Voice Agent",
    icon: "/assets/img/icons/ai-voice-agent.svg",
    desc: "Chat with customers worldwide on Telegram 24/7 in multiple languages. From inquiries to orders to real-time updates.",
    tags: ["Platforms"],
    link: "/platforms/ai-voice-agent",
  },
];

export default function AllChannelsCard() {
  const [selectedFilters, setSelectedFilters] = useState<Filter[]>([]);
  const [isClient, setIsClient] = useState(false);
  const lastUrlRef = useRef<string>("");

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // URL State Management - Read query parameters and listen for changes
  useEffect(() => {
    if (!isClient) return;

    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get("filter");
    console.log("URL filter:", filterParam);

    if (
      filterParam &&
      (filterParam === "Platforms" || filterParam === "Integrations")
    ) {
      setSelectedFilters([filterParam]);
    } else {
      setSelectedFilters([]);
    }
  }, [isClient]);

  // Single effect to handle all URL changes and clicks
  useEffect(() => {
    if (!isClient) return;

    const checkAndSetFilter = () => {
      const currentUrl = window.location.search;
      const urlParams = new URLSearchParams(currentUrl);
      const filterParam = urlParams.get("filter");

      if (
        filterParam &&
        (filterParam === "Platforms" || filterParam === "Integrations")
      ) {
        setSelectedFilters([filterParam]);
      } else {
        setSelectedFilters([]);
      }
    };

    // Check immediately on mount
    checkAndSetFilter();

    // Listen for clicks on dropdown links
    const handleLinkClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href && link.href.includes('platforms?filter=')) {
        // Extract filter from href
        const url = new URL(link.href);
        const filterParam = url.searchParams.get('filter');

        if (filterParam && (filterParam === "Platforms" || filterParam === "Integrations")) {
          setSelectedFilters([filterParam]);
        }
      }
    };

    // Listen for URL changes
    const handleUrlChange = () => {
      checkAndSetFilter();
    };

    // Add event listeners
    document.addEventListener('click', handleLinkClick, true);
    document.addEventListener('mousedown', handleLinkClick, true);
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      document.removeEventListener('click', handleLinkClick, true);
      document.removeEventListener('mousedown', handleLinkClick, true);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, [isClient]);

  const filteredCards = useMemo(() => {
    if (selectedFilters.length === 0) return CARDS;
    return CARDS.filter((card) =>
      selectedFilters.some((filter) => card.tags.includes(filter))
    );
  }, [selectedFilters]);

  const handleFilterChange = (filter: Filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div id="all-channels-card" className="container mt-5">
      <div className="row">
        <div className="col-lg-3">
          <div className="solutionFaq">
            <ul
              className="faqUl line nav-pills custom-tabs"
              id="industries-tabs"
              role="tablist"
            >
              {FILTERS.map((filter, index) => (
                <li className="nav-item" role="presentation" key={index}>
                  <div key={filter} className="form-check">
                    <input
                      className="form-check-input w_fit"
                      type="checkbox"
                      id={`check-${filter}`}
                      checked={selectedFilters.includes(filter)}
                      onChange={() => handleFilterChange(filter)}
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor={`check-${filter}`}
                    >
                      {filter}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {filteredCards.map((card) => (
              <div key={card.id} className="col-md-4 mb-4">
                <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light h-100 d-flex flex-column">
                  <div className="card-body">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="me-3"
                      width="40"
                      height="40"
                    />
                    {card.link ? (
                      <Link href={card.link} legacyBehavior>
                        <a className="mt-2 mb-2 text-2xl font-medium text-w-500 d-block" style={{ cursor: 'pointer' }}>
                          {card.title}
                        </a>
                      </Link>
                    ) : (
                      <h5 className="mt-2 mb-2 text-2xl font-medium text-w-500">
                        {card.title}
                      </h5>
                    )}
                    <p className="card-text">{card.desc}</p>
                    {/* {card.link && (
                      <Link
                        href={card.link}
                        className="w_fit mt-3 buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                      >
                        Learn More <ArrowRightIcon />
                      </Link>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
