import ConnectSmarter from '@/components/contact/ConnectSmarter'
import ContactBanner from '@/components/contact/ContactBanner'
import ContactSection from '@/components/contact/ContactSection'
import FaqSection from '@/components/FAQSection'

const page = () => {
    return (
        <>
            <ContactBanner />
            <ContactSection />
            <ConnectSmarter/>
            <FaqSection/>
        </>
    )
}

export default page