"use client"
import { ArrowRightIcon } from "@/icons";
import { useModalStore } from "@/stores/useModalStore";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";

export type Faq = { q: string; a: string };

const FAQ_ITEMS: Faq[] = [
  {
    q: "What are AI Agents?",
    a: "AI agents are automated tools that provide real-time assistance interact with customers and perform tasks such as data entry form filling and troubleshooting."
  },
  {
    q: "How do AI Agents work?",
    a: "AI agents respond dynamically to user input assisting with tasks such as form filling answering questions and processing requests based on the AIs understanding of the users intent."
  },
  {
    q: "What kind of tasks can AI Agents handle?",
    a: "AI Agents can perform tasks such as answering customer inquiries processing forms sending emails triggering workflows and validating data inputs."
  },
  {
    q: "How do AI Agents interact with users?",
    a: "AI Agents interact via chat voice or other interfaces providing real-time support through personalized conversational AI responses."
  },
  {
    q: "Can I customize my AI Agent?",
    a: "Yes you can customize your AI Agents behavior appearance and response style to align with your brand and operational needs."
  },
  {
    q: "How does an AI Agent integrate with forms?",
    a: "AI Agents can guide users through form-filling by providing real-time assistance answering questions and automatically formatting responses."
  },
  {
    q: "Can AI Agents be used in multiple languages?",
    a: "Yes AI Agents can communicate in multiple languages making them accessible to a global audience."
  },
  {
    q: "How secure do AI Agents handle the data?",
    a: "AI Agents follow industry-standard security protocols ensuring that all data collected is encrypted and protected."
  },
  {
    q: "How does the AI Agent ensure data accuracy?",
    a: "AI Agents validate user inputs in real time ensuring that responses match required formats and reducing the chance of errors."
  },
  {
    q: "How do AI Agents improve customer service?",
    a: "AI Agents provide instant 24/7 support offering quick answers to customer questions reducing wait times and enhancing satisfaction."
  },
  {
    q: "Can AI Agents scale with my business?",
    a: "Yes AI Agents are designed to scale handling increased workload and growing customer demands without compromising performance."
  },
  {
    q: "What kind of AI service do AI Agents use?",
    a: "AI Agents use advanced language models such as OpenAIs GPT-4 to provide intelligent human-like responses."
  },
  {
    q: "Are AI Agents compliant with GDPR/CCPA?",
    a: "Yes AI Agents are designed to comply with GDPR and CCPA regulations ensuring user data is handled transparently and securely."
  },
  {
    q: "How do I train my AI Agent?",
    a: "Training can be conducted by uploading documents providing text-based input or through interactive training methods including custom question-and-answer sessions."
  },
  {
    q: "How do AI Agents handle privacy concerns?",
    a: "AI Agents store minimal data temporarily during a session and personal data is not used for training or improvement unless explicitly agreed upon."
  },
  {
    q: "Can AI Agents integrate with existing systems?",
    a: "Yes AI Agents can integrate with your existing CRM marketing and support systems for streamlined operations."
  },
  {
    q: "How do AI Agents handle customer inquiries?",
    a: "AI Agents process customer queries using machine learning algorithms and provide real-time answers with the ability to escalate issues to human agents when needed."
  },
  {
    q: "Can AI Agents handle voice interactions?",
    a: "Yes AI Agents can be used for voice interactions providing smooth natural conversations through phone calls or virtual assistants."
  },
  {
    q: "How are AI Agents different from AI Chatbots?",
    a: "While both are used for conversational interaction AI Agents can perform more complex tasks such as automating workflows validating data and offering multi-channel support whereas chatbots are usually limited to text-based conversations."
  },
  {
    q: "Are AI Agents able to handle multiple tasks at once?",
    a: "Yes AI Agents are capable of managing multiple conversations or tasks simultaneously making them ideal for high-volume environments."
  },
  {
    q: "Can AI Agents be used in sales?",
    a: "Yes AI Agents can help with lead generation qualifying leads providing product recommendations and upselling opportunities."
  },
  {
    q: "What makes AI Agents different from virtual assistants?",
    a: "AI Agents focus on automating tasks and providing support across various channels while virtual assistants typically assist with personal or productivity-related tasks."
  },
  {
    q: "How can I monitor the performance of the AI Agent?",
    a: "You can track interactions review conversation data and monitor form submissions through the Agent Conversations dashboard."
  },
  {
    q: "How are AI Agents trained to understand different industries?",
    a: "AI Agents are trained using industry-specific data FAQs and workflows to ensure they meet the unique needs of your business sector."
  },
  {
    q: "What types of AI Agents are available?",
    a: "AI Agents can be deployed in various ways such as chat agents phone agents voice agents and multi-channel agents for platforms like WhatsApp Messenger and more."
  },
  {
    q: "Can I create custom AI Agent templates?",
    a: "Yes you can create AI Agents from scratch or choose from pre-designed templates to quickly get started."
  },
  {
    q: "What kind of data can AI Agents collect?",
    a: "AI Agents can collect data such as user inputs form submissions and interaction logs which can be used to optimize performance and enhance the user experience"
  },
  {
    q: "What security measures are in place for AI Agent data?",
    a: "AI Agent data is encrypted both in transit and at rest ensuring secure processing and storage in line with industry standards."
  },
  {
    q: "Can AI Agents be used for customer feedback?",
    a: "Yes AI Agents can collect and process customer feedback through surveys forms and direct interactions."
  },
  {
    q: "How do I manage and control my AI Agent?",
    a: "Through a user-friendly dashboard you can control the behavior performance and settings of your AI Agent."
  },
  {
    q: "Can AI Agents handle complex workflows?",
    a: "Yes AI Agents can automate and manage complex workflows such as data entry approvals and follow-up tasks."
  },
  {
    q: "How do AI Agents handle errors?",
    a: "AI Agents are designed to recognize when something goes wrong and either provide alternative solutions or escalate the issue to a human agent."
  },
  {
    q: "Are AI Agents customizable for different businesses?",
    a: "Absolutely AI Agents are fully customizable to match your business’s processes tone and brand identity."
  },
  {
    q: "How can AI Agents assist with e-commerce?",
    a: "AI Agents can manage product inquiries handle orders suggest upsells and offer personalized shopping experiences."
  },
  {
    q: "Can AI Agents automate form submissions?",
    a: "Yes AI Agents can submit forms automatically based on user inputs simplifying processes for both customers and businesses."
  },
  {
    q: "What kind of industries can benefit from AI Agents?",
    a: "AI Agents are beneficial for a wide range of industries including e-commerce healthcare finance education customer service and more."
  },
  {
    q: "What are the limits of AI Agents?",
    a: "While powerful AI Agents may have limits in handling highly complex or ambiguous tasks that require human intervention."
  },
  {
    q: "How do I ensure AI Agent compliance with regulations?",
    a: "AI Agents are designed with compliance in mind and can be configured to meet industry-specific regulations such as GDPR HIPAA and CCPA"
  },
  {
    q: "Can AI Agents handle sensitive customer data?",
    a: "Yes AI Agents are HIPAA-compliant when using certain models ensuring that sensitive health-related data is protected."
  },
  {
    q: "How do I integrate AI Agents with my website?",
    a: "AI Agents can be integrated into your website via embedded widgets API calls or third-party platform integrations."
  },
  {
    q: "What happens when AI Agents don’t understand a query?",
    a: "When an AI Agent cannot understand a query it can escalate the issue to a human agent or request clarification from the user"
  },
  {
    q: "Do AI Agents learn from past interactions?",
    a: "Yes AI Agents continuously improve by learning from previous interactions adapting to better serve users over time."
  },
  {
    q: "Can I set triggers for specific actions?",
    a: "Yes AI Agents can be programmed with triggers that activate specific actions like sending emails escalating tickets or executing workflows."
  },
  {
    q: "How do I update or modify my AI Agent?",
    a: "You can easily modify your AI Agents behavior responses and settings through the management dashboard."
  },
  {
    q: "Can AI Agents be used for internal communication?",
    a: "Yes AI Agents can be used internally to automate communication task assignment and information sharing within teams."
  },
  {
    q: "What’s the cost of using AI Agents?",
    a: "The cost of AI Agents depends on the features usage volume and scalability required for your business. Contact sales for specific pricing details."
  },
  {
    q: "Do I need technical knowledge to use AI Agents?",
    a: "No AI Agents are designed to be user-friendly and no technical expertise is required to create or manage them."
  },
  {
    q: "How fast can I deploy an AI Agent?",
    a: "Deployment time is typically quick often within minutes to a few hours depending on the level of customization and integration required."
  },
  {
    q: "Can AI Agents improve over time?",
    a: "Yes AI Agents improve with continuous use and feedback providing more accurate and efficient support as they learn."
  },
  {
    q: "What support is available for setting up AI Agents?",
    a: "We provide comprehensive guides video tutorials and customer support to help you set up and customize your AI Agents for success."
  }
];


const AccordionItem: React.FC<{
  item: Faq;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className={`p-6 border rounded-lg according border-b-600 bg-gd-tertiary content1 ${isOpen ? "active" : ""
        }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex items-start gap-2 text-xl font-medium cursor-pointer according-header text-w-500 w-full text-left"
      >
        <Image width={28} height={28} src="/assets/img/faq-icon.svg" alt="icon" />
        {item.q}
      </button>
      <div
        className="according-content pl-[2.5rem]"
        style={{ maxHeight: isOpen ? "12.5rem" : undefined }}
      >
        <p className="pt-4 text-base text-w-100">{item.a}</p>
      </div>
    </div>
  );
};


interface FaqSectionProps {
  data?: Faq[];
  showLoadMore?: boolean;
}

const FaqSection: React.FC<FaqSectionProps> = ({ data, showLoadMore = false }) => {
  // All items closed by default
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const openModal = useModalStore((state) => state.openModal);

  // Load More logic (show N, then add chunks)
  const INITIAL_COUNT = 10;
  const CHUNK = 4;
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);

  // Use provided data if available, otherwise fallback to static FAQ_ITEMS
  const faqs = data && data.length > 0 ? data : FAQ_ITEMS;

  const visibleFaqs = useMemo(
    () => showLoadMore ? faqs.slice(0, visibleCount) : faqs,
    [faqs, visibleCount, showLoadMore]
  );

  const hasMore = showLoadMore && visibleCount < faqs.length;

  return (
    <div
      className="sectionPadding bg-center bg-no-repeat bg-cover bg-[url('img/bc/faq-bg.png')] faq-bg"
      id="faqSection"
    >
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col items-center justify-center">
          <span
            className="buttonAnimation purple inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo"
          >
            FAQs
          </span>
          <h2
            className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize mb125"
          >
            Frequently Asked Questions
          </h2>
          <div className="row mt-5">
            {visibleFaqs.map((item, idx) => {
              const absoluteIndex = idx; // within current slice, 0-based
              const isOpen = openIndex === absoluteIndex;
              return (
                <div key={item.q} className="col-md-6 mb-4">
                  <AccordionItem
                    item={item}
                    isOpen={isOpen}
                    onToggle={() =>
                      setOpenIndex((prev) =>
                        prev === absoluteIndex ? -1 : absoluteIndex
                      )
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        {showLoadMore ? (
          <div className="row py-4">
            <div className="load-button d-flex  justify-center flex-wrap align-items-center gap-3">
              {hasMore ? (
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleCount((c) => Math.min(c + CHUNK, faqs.length))
                    }
                    className="loadMoreBtn buttonAnimation2 flex justify-center items-center gap-2 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit"
                  >
                    Load More
                    <ArrowRightIcon />
                  </button>
                </div>
              ) : (
                <div>
                  <span className="buttonAnimation2 flex justify-center items-center gap-2 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit opacity-50 cursor-default">
                    No More FAQs
                  </span>
                </div>
              )}

              <p className="m-0 text-light">or</p>

              <button
                className="buttonAnimation2 newOrBtn flex justify-center items-center gap-2 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit open-modal-btn"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
              >
                Connect With AI Agent
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        ) : (
          <div className="row py-4">
            <div className="load-button d-flex  justify-center flex-wrap align-items-center gap-3">
              <Link href="/chatbot/briefv2">
                <button
                className="buttonAnimation2 newOrBtn flex justify-center items-center gap-2 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit open-modal-btn"
                onClick={openModal}
                type="button"
              >
                Connect With AI Agent
                <ArrowRightIcon />
              </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqSection;
