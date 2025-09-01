// types.ts
import type { MouseEventHandler } from "react";

export type PlatFarmsBannerProps = {
  tag?: string;
  title: string;
  description: string;

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
  imageSrc?: string;       // For whatsappCards
  image?: string;          // For agentCards
  points: string[];
  buttonColor: string;
  buttonText?: string;     // Usually for whatsappCards
  modalTargetId?: string;  // Usually for whatsappCards
  colLg?: number;          // For agentCards
  imgHeight?: boolean;     // For agentCards
};

export interface WhatsappSectionDataProps {
  sectionTag?: string;
  subtitle?: string;
  heading?: string;
  title?: string;
  subheading?: string;
  description?: string;
  bgImage?: string;
  backgroundImage?: string;
  whatsappCards?: Card[];
  agentCards?: Card[];
}


export interface WhatsappCommunicationSectionData {
  heading: string;
  description: string;
  buttonText: string;
  buttonModalTarget?: string;
  image: string;
  backgroundImage: string;
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

// ✅ Combined page data type
export interface platfarmPageDataType {
  banner: PlatFarmsBannerProps;
  whatsappImagesSection: WhatsappSectionDataProps;
  whatsappCommunication: WhatsappCommunicationSectionData;
  faq: FaqSectionData;
  meta?: MetaDataType;  // <-- Add this optional meta field

}

// This is your multi-page structure
export type AllPageDataType = Record<string, platfarmPageDataType>;