'use client';

import React from 'react';

interface SolutionCard {
  id: number;
  iconColor: string;
  title: string;
  description: string;
}

interface CustomerGrowthCardsProps {
  tag?: string;
  heading?: string;
  description?: string;
  solutions?: SolutionCard[];
  buttonText?: string;
  buttonLink?: string;
}

const CustomerGrowthCards: React.FC<CustomerGrowthCardsProps> = ({
  tag = "Solutions",
  heading = "Our Customer Service AI Agent Solutions That Drive Growth",
  description = "Delivering exceptional support requires solutions that reduce workload, improve accuracy, and adapt to customer needs. Our range of customer service AI agent offerings is designed to address these priorities with advanced automation and personalized assistance.",
  solutions = [
    {
      id: 1,
      iconColor: "bg-pink-500",
      title: "AI-Powered Customer Support",
      description: "Deploy virtual customer service AI agents built on conversational AI and NLP. They efficiently handle FAQs, ticketing, and complex queries, ensuring customers receive timely and accurate responses across every channel."
    },
    {
      id: 2,
      iconColor: "bg-purple-500",
      title: "Workflow Automation",
      description: "Reduce manual tasks with intelligent customer support agents that automate ticket creation, CRM integration, and customer sentiment analysis. This allows teams to focus on critical issues while maintaining consistency in daily operations."
    },
    {
      id: 3,
      iconColor: "bg-teal-500",
      title: "Personalized Support",
      description: "Deliver context-aware recommendations and tailor every interaction with personalization features. When needed, queries are escalated to human agents, creating a balanced hybrid AI + human service model that builds trust and satisfaction."
    },
    {
      id: 4,
      iconColor: "bg-yellow-500",
      title: "Advanced Integrations",
      description: "Our solutions integrate with leading CRM platforms, ensuring every interaction is backed by customer history and data-driven insights."
    }
  ],
  buttonText = "Deploy AI Support",
  buttonLink = "#"
}) => {
  return (
    <div className="sectionPadding py-16">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
        
            <span className="buttonAnimation green inline-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mb-6">
              {tag}
            </span>

            <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize text-white mb-6">
              {heading}
            </h2>

            <p className="w-75 mb-16 text-center paraColor subHeading mx-auto mt-2 text-white">
              {description}
            </p>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="row mt-12">
          <div className="col-12">
            <div className="row">
              {solutions.map((solution) => (
                <div key={solution.id} className="col-lg-6 col-md-6 mb-4">
                  <div className="solutionCard border border-b-600 bg-gd-tertiary p-4 rounded-lg h-100">
                    
                    <div className="d-flex justify-content-between flexReverse">
                    <div className="d-flex justify-content-end mb-3">
                      <div className={`${solution.iconColor} arrowIcon rounded-circle d-flex align-items-center justify-content-center`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-white mb-4 paraColor">
                      {solution.description}
                    </p>
                    </div>
                    

                    {/* Title at bottom */}
                    <h3 className="text-white font-semibold mb-0 heading1">
                      {solution.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <a 
              href={buttonLink}
              className="buttonAnimation2 mx-auto flex justify-center green items-center gap-2 mt-4 px-6 py-[.875rem] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900 width_fit"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerGrowthCards;
