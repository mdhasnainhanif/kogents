'use client';
import HeroSection from '../components/home/ssr/HeroSection';
import ProductSection from '../components/home/csr/ProductSection';
import AIAgentSection from '../components/home/ssr/AIAgentSection';
import CaseStudySection from '../components/home/csr/CaseStudySection';
import BenefitsSection from '../components/home/csr/BenefitsSection';
import WorkflowsSection from '../components/home/ssr/WorkflowsSection';
import FAQSection from '../components/solutions/csr/FAQSection';
// import RequestDemoModal from '../components/RequestDemoModal';
import AIAgentSlider from '@/components/home/csr/AIAgentSlider';
import AgentOS from '@/components/home/ssr/AgentOS';
import KogentBenefits from '@/components/home/ssr/KogentBenefits';
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
