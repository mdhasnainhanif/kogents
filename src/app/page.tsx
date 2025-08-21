'use client';
import HeroSection from '../components/home/HeroSection';
import ProductSection from '../components/home/csr/ProductSection';
import AIAgentSection from '../components/home/AIAgentSection';
import CaseStudySection from '../components/home/csr/CaseStudySection';
import BenefitsSection from '../components/home/csr/BenefitsSection';
import WorkflowsSection from '../components/home/WorkflowsSection';
import FAQSection from '../components/FAQSection';
// import RequestDemoModal from '../components/RequestDemoModal';
import AIAgentSlider from '@/components/home/csr/AIAgentSlider';
import AgentOS from '@/components/home/AgentOS';
import KogentBenefits from '@/components/home/KogentBenefits';
import { useEffect } from 'react';
import Aos from 'aos';

export default function HomePage() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration (ms)
      easing: 'ease-in-out',
      once: false, // Animate every time you scroll
    });
  }, []);

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
        <WorkflowsSection />
        <AIAgentSlider />
        <AgentOS />
        <KogentBenefits />
        <FAQSection />
      </div>

      {/* <RequestDemoModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </>
  );
}
