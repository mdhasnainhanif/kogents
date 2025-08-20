import FaqSection from "@/components/FAQSection"
import AiAgentSection from "@/components/solutions/AiAgentSection"
import AiBanner from "@/components/solutions/AiBanner"
import BenefitsSection from "@/components/solutions/BenefitsSection"

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
