// types.ts
import type { MouseEventHandler } from "react";


export type PlatFarmsBannerProps = {
  tag?: string;
  title: string;
  description: string;

  /**
   * Optional bullet points to display under the main description.
   */
  descriptionPoints?: string[];

  button?: {
    text?: string;
    link?: string; // href
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    iconSrc?: string;
    modalTarget?: string;
  };

  image?: {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
  };

  bgImage?: string;
};


export type Card = {
  title: string;
  imageSrc?: string;    
  image?: string;        
  points: string[];   
  modalTargetId?: string; 
  colLg?: number;          
  imgHeight?: boolean;     
};

export interface WhatsappSectionDataProps {
  subtitle?: string;
  title?: string;
  description?: string;
  backgroundImage?: string;
  agentCards?: Card[];
  showButton?: boolean;
  buttonText?: string;
}

export type FaqItem = {
  q: string;
  a: string;
};

export interface FaqSectionData {
  tag?: string;
  heading?: string;
  description?: string;
  items: FaqItem[];
}
export interface MetaDataType {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string[];
  alternates?: {
    canonical?: string;
  };
  openGraph?: {
    title: string;
    description: string;
    url: string;
    type: string;
    images: { url: string; width: number; height: number; alt: string }[];
  };
  twitter?: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
  
}
export interface platfarmPageDataType {
  customerCardsSection?: {
    tag?: string;
    colSize?: string;
    heading?: string;
    description?: string;
    showButton?: boolean;
    buttonText?: string;
    benefits: Array<{
      id: number;
      icon: string;
      title: string;
      description: string;
    }>;
  };
  customerGrowthCardsSection?: {
    tag?: string;
    heading?: string;
    description?: string | string[];
    solutions: Array<{
      id: number;
      iconColor: string;
      title: string;
      description: string;
    }>;
    buttonText?: string;
    buttonLink?: string;
  };
  faqWithImageSection?: {
    tag?: string;
    heading?: string;
    description?: string;
    faqItems: Array<{
      id: number;
      q: string;
      a: string;
      image?: string;
    }>;
    rightImage?: string;
    rightImageAlt?: string;
  };
  processSection?: {
    tag?: string;
    heading?: string;
    description?: string;
    faqItems: Array<{
      id: number;
      q: string;
      a: string;
      image?: string;
    }>;
    rightImage?: string;
    rightImageAlt?: string;
  };
  clientTestimonialSection?: {
    tag?: string;
    heading?: string;
    description?: string;
    testimonials: Array<{
      id: number;
      quote: string;
      avatar: string;
      name: string;
      title: string;
      rating: number;
    }>;
    statistics?: Array<{
      id: number;
      icon: string;
      value: string;
      label: string;
    }>;
  };
  customerBenefitSection?: {
    buttonText?: string;
    leftColumn: {
      tag: string;
      title: string;
      subtitle: string;
      appStoreImage: string;
      googlePlayImage: string;
    };
    rightColumn: {
      appPreviewImage: string;
      qrCodeImage: string;
      qrCodeText: string;
    };
    backgroundImage?: string;
  };
  summary?: {
    tag?: string;
    text?: string;
  };
  banner: PlatFarmsBannerProps;
  whatsappImagesSection: WhatsappSectionDataProps;
  faq: FaqSectionData;
  counterSection?: {
    title?: string;
    counters: Array<{
      label: string;
      value: number;
      icon?: string;
      symbol?: string;
    }>;
  };
  metadata?: {
    metaTitle?: string;
    metaDescription?: string;
    slug?: string;
    primaryKeyword?: string;
    variations?: string[];
    lsi?: string[];
  };
}
export type AllPageDataType = Record<string, platfarmPageDataType>;