import { notFound } from 'next/navigation';
import Banner from '@/components/ai-whatsapp-agent/Banner';
import WhatsappImagesSection from '@/components/ai-whatsapp-agent/WhatsappImagesSection';
import { Data } from './data';
import { platfarmPageDataType } from '../../../../types';
import type { Metadata } from "next";
import Counter from '@/components/CustomerServiceAIAgents/Counter';
import BrandLogoSlider from '@/components/CustomerServiceAIAgents/BrandLogoSlider';
import CustomerCards from '@/components/CustomerServiceAIAgents/CustomerCards';
import CustomerGrowthCards from '@/components/CustomerServiceAIAgents/CustomerGrowthCards';
import FaqWithImage from '@/components/CustomerServiceAIAgents/FaqWithImage';
import ClientTestimonial from '@/components/CustomerServiceAIAgents/ClientTestimonial';
import CustomerBenefitSection from '@/components/CustomerServiceAIAgents/CustomerBenefitSection';
import FaqSection from '@/components/solutions/csr/FAQSection';
import BlogList from '@/components/blog/BlogList';
import Summary from '@/components/ai-whatsapp-agent/Summary';
type Params = { channelId: string };
interface PageProps {
  params: Promise<Params>;
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { channelId } = await params;
  const pageData = Data[channelId] as platfarmPageDataType | undefined;
  const title =
    pageData?.metadata?.metaTitle ??
    pageData?.banner?.title ??
    `${channelId} | Kogents`;
  const description =
    pageData?.metadata?.metaDescription ??
    "AI agents for WhatsApp, Instagram, Shopify, HubSpot, Zendesk & more.";
  const fullUrl = `https://kogents.ai/platforms/${channelId}`;
  const ogImage = "https://www.kogents.ai/assets/img/logo-new.svg";
  const isAiVoiceAgent = channelId === "ai-voice-agent";
  const isWhatsAppAIAgentV2 = channelId === "whatsapp-ai-agent-v2";
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
    robots: isAiVoiceAgent ? {
      index: false,
      follow: false,
    } : isWhatsAppAIAgentV2 ? {
      index: true,
      follow: true,
    } : undefined,
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
export function generateStaticParams(): Params[] {
  const channelIds = [
    'instagram-agent-ai', 'whatsapp-ai-agent','whatsapp-ai-agent-v2', 'shopify-ai-agent', 'hubspot-ai-integration', 'zendesk-ai-integration',
    'jira-ai-integration', 'calendly-ai-integration', 'openai', 'anthropic', 'groq', 'hugging-face',
    'slack-ai-agent', 'sunshine-conversation-ai-agent', 'intercom-ai-agent',
    'line-ai-agent', 'microsoft-teams-agents', 'viber-ai-agent',
    'ai-zendesk-agent', 'ai-telegram-agent','ai-voice-agent',
  ];
  return channelIds.map((channelId) => ({ channelId }));
}
const Page = async ({ params }: PageProps) => {
  const { channelId } = await params;
  const pageData = Data[channelId] as platfarmPageDataType | undefined;
  if (!pageData){
    notFound();
  }
  
  const breadcrumbItems = [
    { label: 'Platforms', href: '/platforms' },
    { label: pageData.banner?.tag || 'Platform', active: true }
  ];

  return (
    <>
      {pageData.banner && <Banner data={pageData.banner} breadcrumbItems={breadcrumbItems} />}
      {pageData.counterSection && (
        <Counter
          data={{
            responseTime: pageData.counterSection.counters[0]?.value ?? 0,
            supportTickets: pageData.counterSection.counters[1]?.value ?? 0,
            resolutionRate: pageData.counterSection.counters[2]?.value ?? 0,
            roi: pageData.counterSection.counters[3]?.value ?? 0,
          }}
          labels={{
            responseTime: pageData.counterSection.counters[0]?.label ?? "Response Time",
            supportTickets: pageData.counterSection.counters[1]?.label ?? "Support Tickets",
            resolutionRate: pageData.counterSection.counters[2]?.label ?? "Resolution Rate",
            roi: pageData.counterSection.counters[3]?.label ?? "ROI",
          }}
          units={{
            responseTime: pageData.counterSection.counters[0]?.symbol ?? '',
            supportTickets: pageData.counterSection.counters[1]?.symbol ?? '',
            resolutionRate: pageData.counterSection.counters[2]?.symbol ?? '',
            roi: pageData.counterSection.counters[3]?.symbol ?? '',
          }}
          title={pageData.counterSection.title || ""}
        />
      )}
      {pageData.customerCardsSection && (
        <CustomerCards
          tag={pageData.customerCardsSection.tag}
          colSize={pageData.customerCardsSection.colSize}
          heading={pageData.customerCardsSection.heading}
          description={pageData.customerCardsSection.description}
          showButton={pageData.customerCardsSection.showButton}
          buttonText={pageData.customerCardsSection.buttonText}
          benefits={pageData.customerCardsSection.benefits}
        />
      )}
      {pageData.customerGrowthCardsSection && (
        <CustomerGrowthCards
          tag={pageData.customerGrowthCardsSection.tag}
          heading={pageData.customerGrowthCardsSection.heading}
          description={pageData.customerGrowthCardsSection.description}
          solutions={pageData.customerGrowthCardsSection.solutions}
          buttonText={pageData.customerGrowthCardsSection.buttonText}
          buttonLink={pageData.customerGrowthCardsSection.buttonLink}
        />
      )}
      <BrandLogoSlider />
      {pageData.whatsappImagesSection && (
        <WhatsappImagesSection
          data={pageData.whatsappImagesSection}
          showButton={pageData.whatsappImagesSection.showButton}
          buttonText={pageData.whatsappImagesSection.buttonText}
        />
      )}

      {/* <HealthCareCaseStudySection /> */}

      {pageData.faqWithImageSection && (
        <FaqWithImage
          tag={pageData.faqWithImageSection.tag}
          heading={pageData.faqWithImageSection.heading}
          description={pageData.faqWithImageSection.description}
          faqItems={pageData.faqWithImageSection.faqItems}
          rightImage={pageData.faqWithImageSection.rightImage}
          rightImageAlt={pageData.faqWithImageSection.rightImageAlt}
        />
      )}
      {pageData.clientTestimonialSection && (
        <ClientTestimonial
          tag={pageData.clientTestimonialSection.tag}
          heading={pageData.clientTestimonialSection.heading}
          description={pageData.clientTestimonialSection.description}
          testimonials={pageData.clientTestimonialSection.testimonials}
          statistics={pageData.clientTestimonialSection.statistics}
        />
      )}
      {pageData.customerBenefitSection && (
        <div className='sectionPadding pt-0'>
          <CustomerBenefitSection
            buttonText={pageData.customerBenefitSection.buttonText}
            leftColumn={pageData.customerBenefitSection.leftColumn}
            rightColumn={pageData.customerBenefitSection.rightColumn}
            backgroundImage={pageData.customerBenefitSection.backgroundImage}
          />
        </div>
      )}
      {pageData.summary && <Summary data={pageData.summary} />}
      {pageData.faq && <FaqSection data={pageData.faq.items} showLoadMore={false} />}
      <BlogList />
    </>
  );
};
export default Page;
