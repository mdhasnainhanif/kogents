'use client';

import Image from 'next/image';
import React, { useMemo, useState } from 'react';

type Filter = 'Channel' | 'Integrations' | 'LLM';
type Card = {
  id: string;
  title: string;
  icon: string;
  desc: string;
  tags: Filter[];
};

const FILTERS: Filter[] = ['Channel', 'Integrations', 'LLM'];

const CARDS: Card[] = [
  // Channel
  {
    id: 'whatsapp',
    title: 'Whatsapp',
    icon: '/assets/img/icons/whatsapp.svg',
    desc:
      'Trigger backend workflows or business logic instantly from AI conversations using event-driven Lambda functions — no servers needed.',
    tags: ['Channel'],
  },
  {
    id: 'instagram',
    title: 'Instagram Agent',
    icon: '/assets/img/icons/instagram1.svg',
    desc:
      'Store, retrieve, or serve media and data assets like documents, receipts, or reports during AI-powered interactions, securely from S3 buckets.',
    tags: ['Channel'],
  },
  {
    id: 'messenger',
    title: 'Messenger Agent',
    icon: '/assets/img/icons/messenger.svg',
    desc:
      'Provide real-time shipment tracking updates and logistics status to customers directly within your agent chat flow.',
    tags: ['Channel'],
  },

  // Integrations (Shopify shows in both)
  {
    id: 'shopify',
    title: 'Shopify Agent',
    icon: '/assets/img/icons/shopify.svg',
    desc:
      'Auto-create, update, or complete Asana tasks from customer requests or internal triggers handled by AI agents.',
    tags: ['Integrations', 'Channel'],
  },
  {
    id: 'hubspot',
    title: 'Hubspot',
    icon: '/assets/img/icons/hubspot.svg',
    desc:
      'This integration enables your bot to seamlessly interact with Instagram, allowing you to harness the power of social media in your conversational AI experiences.',
    tags: ['Integrations'],
  },
  {
    id: 'zendesk',
    title: 'Zendesk',
    icon: '/assets/img/icons/zdesk-icon2.webp',
    desc:
      'This integration enables your bot to seamlessly interact with Instagram, allowing you to harness the power of social media in your conversational AI experiences.',
    tags: ['Integrations'],
  },
  {
    id: 'jira',
    title: 'Jira',
    icon: '/assets/img/icons/jira.svg',
    desc:
      'This integration enables your bot to seamlessly interact with Instagram, allowing you to harness the power of social media in your conversational AI experiences.',
    tags: ['Integrations'],
  },
  {
    id: 'calendly',
    title: 'Calendly',
    icon: '/assets/img/icons/calendly.png',
    desc:
      'This integration enables your bot to seamlessly interact with Instagram, allowing you to harness the power of social media in your conversational AI experiences.',
    tags: ['Integrations'],
  },

  // LLMs
  {
    id: 'openai',
    title: 'OpenAI',
    icon: '/assets/img/icons/openai.png',
    desc:
      'This integration enables your bot to seamlessly interact with Instagram, allowing you to harness the power of social media in your conversational AI experiences.',
    tags: ['LLM'],
  },
  {
    id: 'anthropic',
    title: 'Anthropic',
    icon: '/assets/img/icons/anthropic.png',
    desc:
      'This integration enables your bot to seamlessly interact with Instagram, allowing you to harness the power of social media in your conversational AI experiences.',
    tags: ['LLM'],
  },
  {
    id: 'groq',
    title: 'Groq',
    icon: '/assets/img/icons/groq.png',
    desc:
      'This integration enables your bot to seamlessly interact with Instagram, allowing you to harness the power of social media in your conversational AI experiences.',
    tags: ['LLM'],
  },
  {
    id: 'hf',
    title: 'Hugging face',
    icon: '/assets/img/icons/hugging-face.svg',
    desc:
      'This integration enables your bot to seamlessly interact with Instagram, allowing you to harness the power of social media in your conversational AI experiences.',
    tags: ['LLM'],
  },
];

const AllChannelsCard: React.FC = () => {
  const [selected, setSelected] = useState<Filter[]>([]);

  const onToggle = (name: Filter) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  };

  const visibleCards = useMemo(() => {
    if (selected.length === 0) return CARDS;
    return CARDS.filter((c) => c.tags.some((t) => selected.includes(t)));
  }, [selected]);

  return (
    <section className="sectionPadding bg-center lg:py-24 py-8 bg-center bg-no-repeat bg-cover bg-[url('img/bc/FAQ-bg.png')] faq-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <span className="buttonAnimation width_fit d-block green px-4 py-2 mb-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo mx-auto">
              Find By Industry
            </span>
            <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
              Find An Agent According To The Industry You Work In
            </h2>
            <p className="mb-8 paraColor text-base md:text-xl text-w-100 text-center">
              Whether insurance, property management or a broad BPO requirement, find the agent you need
              according to the work your business does.
            </p>
          </div>
        </div>

        <div className="row rowGap justify-content-center mt-4" id="channels">
          {/* Filter sidebar */}
          <div className="col-md-3">
            <div className="solutionFaq">
              <ul className="faqUl line nav-pills custom-tabs" id="industries-tabs" role="tablist">
                {FILTERS.map((f) => {
                  const id = `check-${f}`;
                  return (
                    <li className="nav-item" role="presentation" key={f}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={id}
                          checked={selected.includes(f)}
                          onChange={() => onToggle(f)}
                        />
                        <label className="form-check-label" htmlFor={id}>
                          {f}
                        </label>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Cards grid */}
          <div className="col-md-9">
            <div className="service-item channel" id="tabChannel">
              <div className="row rowGap mx-0">
                {visibleCards.map((c) => (
                  <div
                    key={c.id}
                    className="col-xl-4 col-lg-6 col-md-6 col-12"
                    data-tags={c.tags.join(',')}
                  >
                    <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary newServicesCard text-light h-100 d-flex flex-column">
                      <Image width={40} height={40} src={c.icon} alt={c.title} />
                      <h3 className="mt-2 mb-6 text-2xl font-medium text-w-500">{c.title}</h3>
                      <p className="flex-grow-1">{c.desc}</p>
                      <a
                        href="javascript:void(0);"
                        className="w_fit buttonAnimation2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
                        data-modal-target="#welcomeModal"
                      >
                        Request Access
                        <Image width={25} height={25} src="/assets/img/icons/arrow-right.svg" alt="arrow" />
                      </a>
                    </div>
                  </div>
                ))}

                {/* Empty state */}
                {visibleCards.length === 0 && (
                  <div className="col-12">
                    <div className="p-5 text-center text-w-100 border rounded-lg border-b-600 bg-gd-tertiary">
                      No results for the selected filters.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AllChannelsCard;
