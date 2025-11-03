"use client";

import { useModalStore } from "@/stores/useModalStore";
import React from "react";

interface BenefitCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface CustomerCardsProps {
  tag?: string;
  heading?: string;
  description?: string;
  benefits?: BenefitCard[];
  buttonText?: string;
  buttonAction?: () => void;
  showButton?: boolean;
  colSize?: string;
}

const CustomerCards: React.FC<CustomerCardsProps> = ({
  tag = "Benefits",
  heading = "Why Businesses Invest in Customer Service AI Agents",
  description = "Organizations face rising support demands with staffing shortages, heavy workloads, compliance pressure, and high customer expectations. Customer service AI agents address these challenges by streamlining workflows and improving customer interactions.",
  colSize = "col-lg-4 col-md-6 col-12",
  benefits = [
    {
      id: 1,
      icon: "/assets/img/customer-service-ai-agents/1.svg",
      title: "Improved Customer Experience",
      description:
        "Using conversational AI and NLP, AI agents enable smooth omnichannel support across chat, email, and voice. With personalized responses, they reduce frustration and boost satisfaction.",
    },
    {
      id: 2,
      icon: "/assets/img/customer-service-ai-agents/2.svg",
      title: "Increased Efficiency and Cost Savings",
      description:
        "Intelligent agents automate ticketing, CRM integration, and knowledge base retrieval, cutting workloads and operational costs while speeding resolutions. These efficiency gains help teams focus on high-value interactions while maintaining service quality.",
    },
    {
      id: 3,
      icon: "/assets/img/customer-service-ai-agents/3.svg",
      title: "Data-Driven Insights",
      description:
        "Through sentiment analysis and intent recognition, AI turns interactions into data-driven insights. These insights help refine engagement strategies, improve decision-making, and optimize customer experiences over time.",
    },
    {
      id: 4,
      icon: "/assets/img/customer-service-ai-agents/4.svg",
      title: "Consistency and Accuracy",
      description:
        "AI ensures accurate, consistent answers by using knowledge base integration, machine learning, and LLMs. This strengthens compliance, reliability, and service quality at scale.",
    },
    {
      id: 5,
      icon: "/assets/img/customer-service-ai-agents/5.svg",
      title: "Human-AI Collaboration",
      description:
        "AI resolves routine queries instantly while escalating complex cases to humans. This hybrid support model balances efficiency with empathy, ensuring customers receive fast answers without losing the human touch where it matters most.",
    },
    {
      id: 6,
      icon: "/assets/img/customer-service-ai-agents/6.svg",
      title: "Future-Ready Support",
      description:
        "Adopting AI in service builds efficiency today and prepares organizations for scalable and future-ready customer support.",
    },
  ],
  buttonText = "Learn More",
  buttonAction = () => { },
  showButton = false,
}) => {
  const openModal = useModalStore((state) => state.openModal);
  return (
    <div className="mobile-padding-top-0 sectionPadding pb-0 bg-center bg-no-repeat bg-cover bg-[url('img/bc/faq-bg.png')] faq-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12
           text-center justify-content-center ">
            <span className="buttonAnimation green inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
              {tag}
            </span>
            <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
              {heading}
            </h2>
            <div className="w-75 mb-16 text-center paraColor subHeading mx-auto mt-2">
              {description && description.includes('\n') ? (
                description.split('\n').map((line, index) => (
                  <p key={index} className={index > 0 ? "mt-4" : ""}>
                    {line.trim()}
                  </p>
                ))
              ) : (
                <p>{description}</p>
              )}
            </div>
          </div>
        </div>
        <div className="row row-gap-4 mt-12 justify-content-center">
          {benefits.map((benefit) => (
            <div key={benefit.id} className={colSize}>
              <div className="benefit-card border border-b-600 bg-gd-tertiary">
                <div className="benefit-icon">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <div className="benefit-description">
                  {benefit.description && benefit.description.includes('\n') ? (
                    benefit.description.split('\n').map((line, index) => (
                      <p key={index} className={index > 0 ? "mt-2" : ""}>
                        {line.trim()}
                      </p>
                    ))
                  ) : (
                    <p>{benefit.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {showButton && (
          <div className="text-center mb-12">
            <button
              onClick={openModal}
              className="buttonAnimation2 text-light mt-5 open-modal-btn">
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerCards;
