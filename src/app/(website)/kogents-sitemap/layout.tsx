import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kogents AI – Sitemap of AI Agent Solutions',
  description: 'Explore the full sitemap of Kogents AI\'s platform: all solutions, integrations, resources and legal pages in one place.',
  alternates: {
    canonical: 'https://kogents.ai/kogents-sitemap/',
  },
}

export default function KogentsSitemapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

