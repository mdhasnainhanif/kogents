import Banner from '@/components/ai-whatsapp-agent/Banner';
import WhatsappCommunicationSection from '@/components/ai-whatsapp-agent/WhatsappCommunicationSection';
import WhatsappImagesSection from '@/components/ai-whatsapp-agent/WhatsappImagesSection';
import FaqSection from '@/components/FAQSection';
import React from 'react'

const page = () => {
  return (
    <>
        <Banner />
        <WhatsappImagesSection />
        <WhatsappCommunicationSection />
        <FaqSection/>
    </>
  )
}

export default page;