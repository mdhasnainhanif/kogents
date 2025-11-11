import React from 'react';
import styles from './BenefitsNewSection.module.css';
import { benefitsNewSectionData, type BenefitsNewSectionData as BenefitsData } from './benefitsNewSectionData';

interface BenefitsNewSectionProps {
  data?: BenefitsData;
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BenefitsNewSection: React.FC<BenefitsNewSectionProps> = ({ 
  data = benefitsNewSectionData 
}) => {
  return (
    <div className={styles.section} id="benefitsNewSection">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.tag}>
            {data.tag}
          </span>
          
          <h2 className={styles.title}>
            {data.title}
          </h2>
          
          <p className={styles.description}>
            {data.description}
          </p>
          
          <div className={styles.agentsGrid}>
            {data.agents.map((agent) => (
              <div key={agent.id} className={styles.agentCard}>
                <div className={styles.arrowIcon}>
                  <ArrowIcon />
                </div>
                
                <h3 className={styles.agentTitle}>
                  {agent.id}. {agent.title}
                </h3>
                
                <p className={styles.agentGoal}>
                  {agent.goal}
                </p>
                
                <div className={styles.statsContainer}>
                  {agent.stats.map((stat, index) => (
                    <div key={index} className={styles.statBox}>
                      <div className={styles.statValue}>
                        {stat.value}
                      </div>
                      <div className={styles.statLabel}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsNewSection;

