// export const revalidate = 3600;
'use client';
import HeroSection from '../components/home/HeroSection';
import ProductSection from '../components/home/ProductSection';
import AIAgentSection from '../components/home/AIAgentSection';
import CaseStudySection from '../components/home/CaseStudySection';
import BenefitsSection from '../components/home/BenefitsSection';
import WorkflowsSection from '../components/home/WorkflowsSection';
import FAQSection from '../components/FAQSection';
// import RequestDemoModal from '../components/RequestDemoModal';
import AIAgentSlider from '@/components/home/AIAgentSlider';
import AgentOS from '@/components/home/AgentOS';
import KogentBenefits from '@/components/home/KogentBenefits';

export default function HomePage() {


  return (
    <>
      <HeroSection />
      <ProductSection />
      <AIAgentSection />
      <div
        className="bg-center bg-no-repeat bg-cover pb-0 newBgTheme"
        id="caseStudySection"
      >
        <CaseStudySection />
        <BenefitsSection />
      </div>
      <WorkflowsSection />
      <AIAgentSlider />
      <AgentOS />
      <KogentBenefits />
      <FAQSection />
      {/* <RequestDemoModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </>
  );
}
