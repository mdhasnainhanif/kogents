import { ChatbotWizard3 } from "@/components/wizard/ChatbotWizard3"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chatbot Brief v2 | Kogents AI",
  description: "Create your AI chatbot in minutes with our easy-to-use chatbot builder.",
  robots: {
    index: false,
    follow: false,
  },
  other: {
    'googlebot': 'noindex, nofollow',
    'bingbot': 'noindex, nofollow',
  },
}

export default function BriefChatbotPageV2() {
    return <ChatbotWizard3 />
}

