// app/(website)/platform/[channelId]/page.tsx
import Banner from '@/components/ai-whatsapp-agent/Banner';
import WhatsappCommunicationSection from '@/components/ai-whatsapp-agent/WhatsappCommunicationSection';
import WhatsappImagesSection from '@/components/ai-whatsapp-agent/WhatsappImagesSection';
import FaqSection from '@/components/ai-whatsapp-agent/FAQSection';
import { Data } from './data';
import { MetaDataType, platfarmPageDataType } from '../../../../types';
import { decode } from 'html-entities';
import type { Metadata } from "next";
import { headers } from "next/headers";

type Params = { channelId: string };

interface PageProps {
  params: Promise<Params>; // Next 15: must be awaited
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { channelId } = await params;
  const pageData = Data[channelId] as platfarmPageDataType | undefined;

  const title =
    pageData?.meta?.title ??
    pageData?.banner?.title ??
    `${channelId} | Kogents`;

  const description =
    pageData?.meta?.description ??
    "AI agents for WhatsApp, Instagram, Shopify, HubSpot, Zendesk & more.";

  // Use static URL instead of dynamic headers
  const fullUrl = `https://kogents.ai/platform/${channelId}`;
  const ogImage = "https://www.kogents.ai/assets/img/logo-new.svg";

  return {
    title,
    description,
    keywords: [
      "Kogents AI",
      "AI for business", 
      "Conversational AI",
      "WhatsApp agent",
      "Instagram agent",
      "Business Automation",
    ],
    alternates: {
      canonical: fullUrl,
      languages: {
        "en-US": fullUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: "website",
      siteName: "Kogents AI",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Team Kogents AI working together",
        },
      ],
    },
  };
}

// export const dynamic = 'force-dynamic';


export function generateStaticParams(): Params[] {
  const channelIds = [
    'instagram-agent', 'whatsapp-agent', 'shopify-agent', 'hubspot', 'zendesk',
    'jira', 'calendly', 'openai', 'anthropic', 'groq', 'hugging-face',
    'ai-slack-agent', 'sunshine-conversations-ai-agent', 'ai-intercom-agent',
    'ai-line-agent', 'microsoft-teams-ai-agents', 'ai-viber-agent',
    'ai-zendesk-agent', 'ai-telegram-agent',
  ];
  return channelIds.map((channelId) => ({ channelId }));
}

const Page = async ({ params }: PageProps) => {
  const { channelId } = await params;
  const pageData = Data[channelId] as platfarmPageDataType | undefined;

  // TEMP: log what you actually have at build time
  // console.log('Prerender channel', channelId, {
  //   hasBanner: !!pageData?.banner,
  //   hasWhatsappImagesSection: !!pageData?.whatsappImagesSection,
  //   hasWhatsappCommunication: !!pageData?.whatsappCommunication,
  //   hasFaq: !!pageData?.faq,
  // });

  if (!pageData) return <div>Channel data not found.</div>;

  // Guard each section if child components assume required props
  return (
    <>
      {pageData.banner && <Banner data={pageData.banner} />}
      {pageData.whatsappImagesSection && (
        <WhatsappImagesSection data={pageData.whatsappImagesSection} />
      )}
      {pageData.whatsappCommunication && (
        <WhatsappCommunicationSection data={pageData.whatsappCommunication} />
      )}
      {pageData.faq && <FaqSection data={pageData.faq} />}
    </>
  );
};

export default Page;
