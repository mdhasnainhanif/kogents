import FaqSection from "@/components/solutions/csr/FAQSection"
import AiAgentSection from "@/components/solutions/csr/AiAgentSection"
import AiBanner from "@/components/solutions/ssr/AiBanner"
import BenefitsSection from "@/components/solutions/ssr/BenefitsSection"

const page = () => {
    return (
        <>
            <AiBanner />
            <AiAgentSection />
            <BenefitsSection/>
            <FaqSection/>
        </>
    )
}
export default page
