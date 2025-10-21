import { ChatbotWizard2 } from "@/components/wizard/ChatbotWizard2"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chatbot Brief | Kogents AI",
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

export default function BriefChatbotPage() {
    return <ChatbotWizard2 />
}
