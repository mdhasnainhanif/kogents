import React from 'react';
import styles from './BenefitsNewSection.module.css';
import { benefitsNewSectionData, type BenefitsNewSectionData as BenefitsData } from './benefitsNewSectionData';

interface BenefitsNewSectionProps {
  data?: BenefitsData;
}

const BenefitsNewSection: React.FC<BenefitsNewSectionProps> = ({ 
  data = benefitsNewSectionData 
}) => {
  return (
    <div className={styles.section} id="benefitsNewSection">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <span className="buttonAnimation yellow mx-auto width_fit d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo aos-init aos-animate">
            {data.tag}
          </span>
          
          <h2 className={`text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize maxWidth39 mx-auto`}>
            {data.title}
          </h2>
          
          <p className={`maxWidth39 mb-16 text-center paraColor subHeading w-100 mx-auto mt125`}>
            {data.description}
          </p>
          </div>
          
          <div className={`${styles.agentsGrid} mt-5`}>
            {data.agents.map((agent) => (
              <div key={agent.id} className={styles.agentCard}>
                
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

