import type { Metadata } from "next";
import AIGlossaryPage from "../../../components/AIGlossaryPage/AIGlossaryPage"; // client component

export const metadata: Metadata = {
    title: "AI Automation Agency for Growth & Efficiency | Kogents AI",
    description:
        "Automate digital workflows, simplify daily tasks, and boost efficiency with personalized AI automation solutions from Kogents AI.",
    keywords: [
        "AI automation agency",
        "AI automation",
        "business automation",
        "workflow automation",
        "AI consulting services",
        "process automation",
        "AI integration",
    ],
    robots: {
        index: true,
        follow: true,
    },
    other: {
        'googlebot': 'noindex, nofollow',
        'bingbot': 'noindex, nofollow',
    },
    alternates: {
        canonical: "https://kogents.ai/solutions/ai-glossary",
        languages: {
            "en-US": "https://kogents.ai/solutions/ai-glossary",
        },
    },
    openGraph: {
        title: "AI Automation Agency for Growth & Efficiency | Kogents AI",
        description:
            "Automate digital workflows, simplify daily tasks, and boost efficiency with personalized AI automation solutions from Kogents AI.",
        url: "https://www.kogents.ai/solutions/ai-glossary",
        type: "website",
        images: [
            {
                url: "https://www.kogents.ai/assets/img/logo-new.svg",
                width: 1200,
                height: 630,
                alt: "AI Automation Agency - Kogents AI",
            },
        ],
        siteName: "Kogents AI",
        locale: "en_US",
    },
};

export default function Page() {
    return <AIGlossaryPage />;
}
