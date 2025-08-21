import AIAgentSlider from "@/components/ai-agents/csr/AIAgentSlider"
import BenefitsSection from "@/components/ai-agents/csr/BenefitsSection"
import CaseStudySection from "@/components/ai-agents/csr/CaseStudySection"
import ProductSection from "@/components/ai-agents/csr/ProductSection"
import AgentOS from "@/components/ai-agents/ssr/AgentOS"
import AIAgentSection from "@/components/ai-agents/ssr/AIAgentSection"
import HeroSection from "@/components/ai-agents/ssr/HeroSection"
import KogentBenefits from "@/components/ai-agents/ssr/KogentBenefits"
import WorkflowsSection from "@/components/ai-agents/ssr/WorkflowsSection"
import FaqSection from "@/components/solutions/csr/FAQSection"

const AIAgents = () => {
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
                <FaqSection />
            </div>

            {/* <RequestDemoModal isOpen={isModalOpen} onClose={closeModal} /> */}
        </>
    )
}

export default AIAgents