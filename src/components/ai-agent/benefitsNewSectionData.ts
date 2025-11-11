export interface AgentBenefit {
  id: number;
  title: string;
  goal: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export interface BenefitsNewSectionData {
  tag: string;
  title: string;
  description: string;
  agents: AgentBenefit[];
}

export const benefitsNewSectionData: BenefitsNewSectionData = {
  tag: "Benefits",
  title: "Kogents AI Agents Come With Tremendous Benefits",
  description: "Deploy AI agents to streamline operations and amplify your business's efficiency. These agents optimize processes, reduce delays, and enhance output, ensuring you gain a competitive edge with speed and precision.",
  agents: [
    {
      id: 1,
      title: "Customer Support AI Agent",
      goal: "Highlight efficiency, cost savings, and service quality improvements.",
      stats: [
        {
          value: "35%",
          label: "Reduces Support Costs"
        },
        {
          value: "60%",
          label: "Resolve Issues Faster"
        }
      ]
    },
    {
      id: 2,
      title: "Lead Capture AI Agent",
      goal: "Emphasize conversion, qualification speed, and lead pipeline growth.",
      stats: [
        {
          value: "52%",
          label: "increase lead conversions"
        },
        {
          value: "3x",
          label: "Faster Quality Leads"
        }
      ]
    },
    {
      id: 3,
      title: "Sales Ai Agent",
      goal: "Focus on revenue acceleration, efficiency, and buyer experience.",
      stats: [
        {
          value: "40%",
          label: "Increase Sales Productivity"
        },
        {
          value: "3.5x",
          label: "ROI Deliver Within a year"
        }
      ]
    }
  ]
};

