'use client';

import React from 'react';

interface DifferentiatorCard {
  id: number;
  icon: string;
  title: string;
  description: string | string[];
}

interface CustomerServiceCardProps {
  tag?: string;
  heading?: string;
  description?: string | string[];
  differentiators?: DifferentiatorCard[];
}

const CustomerServiceCard: React.FC<CustomerServiceCardProps> = ({
  tag = "Why Kogents",
  heading = "What Makes Kogents Customer Service AI Agents Different",
  description = [
    "Selecting the right partner for customer support transformation comes down to reliability, adaptability, and trust. Kogents combines proven technology with deep industry integration to deliver a solution that meets modern service demands."
  ],
  differentiators = [
    {
      id: 1,
      icon: "/assets/img/customer-service-ai-agents/7.svg",
      title: "Scalable Omnichannel AI",
      description: [
        "Our customer service AI agent delivers consistent omnichannel support across chat, voice, and social platforms. With conversational AI, customers move smoothly between channels without losing context."
      ]
    },
    {
      id: 2,
      icon: "/assets/img/customer-service-ai-agents/8.svg",
      title: "Context-Aware Responses",
      description: [
        "Using agentic AI and advanced large language models (LLMs), Kogents ensure every interaction is context-driven, accurate, and aligned with customer intent."
      ]
    },
    {
      id: 3,
      icon: "/assets/img/customer-service-ai-agents/9.svg",
      title: "Compliance and Data Security",
      description: [
        "Kogents prioritizes compliance and secure data handling, ensuring every interaction meets regulatory standards. Our AI agents are designed to safeguard sensitive information while maintaining accuracy and trust at scale."
      ]
    },
    {
      id: 4,
      icon: "/assets/img/customer-service-ai-agents/10.svg",
      title: "Human-in-the-Loop Oversight",
      description: [
        "Automation is paired with human review for high-stakes cases. This hybrid approach maintains efficiency while protecting service quality and customer trust."
      ]
    }
  ]
}) => {
  return (
    <div className="sectionPadding py-16 mobile-padding-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <span className="buttonAnimation green inline-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo">
              {tag}
            </span>
            <h2 className="mb125 text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize text-white mb125">
              {heading}
            </h2>
            <div className="text-center paraColor subHeading mx-auto text-white">
              {Array.isArray(description) ? (
                description.map((paragraph, index) => (
                  <p key={index} className="mb125">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>{description}</p>
              )}
            </div>
          </div>
        </div>

        {/* Differentiators Grid */}
        <div className="row">
          <div className="col-12">
            <div className="row justify-content-center">
              {differentiators.map((differentiator, index) => (
                <div key={differentiator.id} className="col-lg-6 col-md-6 mb-4">
                  <div className="differentiator-card border border-b-600 bg-gd-tertiary p-4 rounded-lg h-100 d-flex gap-6">
                    {/* Icon */}
                    <div className="d-flex mb-3">
                      <div className="differentiatorIcon bg-purple-400 rounded-circle d-flex align-items-center justify-content-center ">
                        <img 
                          src={differentiator.icon} 
                          alt={differentiator.title}
                          width={35}
                          height={35}
                          className="text-white"
                        />
                      </div>
                    </div>

                <div>
                    {/* Title */}
                    <h3 className="text-white font-semibold mb-3 heading1">
                      {differentiator.title}
                    </h3>
                    {/* Description */}
                    <div className="text-white paraColor mb-0">
                      {Array.isArray(differentiator.description) ? (
                        differentiator.description.map((paragraph, index) => (
                          <p key={index} className="mb-2 last:mb-0">
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p>{differentiator.description}</p>
                      )}
                    </div>
                </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServiceCard;
