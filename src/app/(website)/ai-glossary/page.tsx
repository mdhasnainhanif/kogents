import type { Metadata } from "next";
import AIGlossaryPage from "../../../components/AIGlossaryPage/AIGlossaryPage"; // client component

export const metadata: Metadata = {
    title: "AI Glossary: Understand AI from A to Z",
    description:
        "Kogents AI explains core AI terms, technologies, and use cases shaping industries like HR, healthcare, and education.",
    keywords: [
        "",
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
        canonical: "https://kogents.ai/ai-glossary",
        languages: {
            "en-US": "https://kogents.ai/ai-glossary",
        },
    },
    openGraph: {
        title: "AI Glossary: Understand AI from A to Z",
        description:
            "Kogents AI explains core AI terms, technologies, and use cases shaping industries like HR, healthcare, and education.",
        url: "https://www.kogents.ai/ai-glossary",
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
