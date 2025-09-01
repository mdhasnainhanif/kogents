'use client';

import React from 'react';

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
}

const CustomerCards: React.FC<CustomerCardsProps> = ({
  tag = "Benefits",
  heading = "Why Businesses Invest in Customer Service AI Agents",
  description = "Organizations face rising support demands with staffing shortages, heavy workloads, compliance pressure, and high customer expectations. Customer service AI agents address these challenges by streamlining workflows and improving customer interactions. Here's how they help:",
  benefits = [
    {
      id: 1,
      icon: "/assets/img/icons/13.svg",
      title: "Improved Customer Experience",
      description: "Using conversational AI and NLP, AI agents enable smooth omnichannel support across chat, email, and voice. With personalized responses, they reduce frustration and boost satisfaction."
    },
    {
      id: 2,
      icon: "/assets/img/icons/13.svg",
      title: "Increased Efficiency and Cost Savings",
      description: "Intelligent agents automate ticketing, CRM integration, and knowledge base retrieval, cutting workloads and operational costs while speeding resolutions. These efficiency gains help teams focus on high-value interactions while maintaining service quality."
    },
    {
      id: 3,
      icon: "/assets/img/icons/13.svg",
      title: "Data-Driven Insights",
      description: "Through sentiment analysis and intent recognition, AI turns interactions into data-driven insights. These insights help refine engagement strategies, improve decision-making, and optimize customer experiences over time."
    },
    {
      id: 4,
      icon: "/assets/img/icons/13.svg",
      title: "Consistency and Accuracy",
      description: "AI ensures accurate, consistent answers by using knowledge base integration, machine learning, and LLMs. This strengthens compliance, reliability, and service quality at scale."
    },
    {
      id: 5,
      icon: "/assets/img/icons/13.svg",
      title: "Human-AI Collaboration",
      description: "AI resolves routine queries instantly while escalating complex cases to humans. This hybrid support model balances efficiency with empathy, ensuring customers receive fast answers without losing the human touch where it matters most."
    },
    {
      id: 6,
      icon: "/assets/img/icons/13.svg",
      title: "Future-Ready Support",
      description: "Adopting AI in service builds efficiency today and prepares organizations for scalable and future-ready customer support."
    }
  ]
}) => {
  return (
    <div className="sectionPadding pb-0 bg-center bg-no-repeat bg-cover bg-[url('img/bc/FAQ-bg.png')] faq-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center justify-content-center ">
            <span className="buttonAnimation green inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
              {tag}
            </span>
            <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
              {heading}
            </h2>
            <p className="w-75 mb-16 text-center paraColor subHeading mx-auto mt-2">
              {description}
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="row justify-content-center row-gap-4 mt-12">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="col-lg-4 col-md-6 col-12">
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
                  <p className="benefit-description">{benefit.description}</p>
                </div>
                </div>
              ))}
      </div>
      </div>
    </div>
  );
};

export default CustomerCards;
