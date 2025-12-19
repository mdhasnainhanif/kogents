import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // swcMinify: true,

  // Comprehensive redirects as backup
  async redirects() {
    return [
      // --- WWW to Non-WWW redirect ---
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.kogents.ai', // only host here, no "key"
          },
        ],
        destination: 'https://kogents.ai/:path*',
        permanent: true,
      },
      
      // Main redirects
      { source: '/pricing', destination: '/', permanent: true },
      { source: '/pricing/', destination: '/', permanent: true },
      { source: '/imprint', destination: '/', permanent: true },
      { source: '/imprint/', destination: '/', permanent: true },
      // API routes should not be redirected
      // { source: '/api', destination: '/', permanent: true },
      // { source: '/api/', destination: '/', permanent: true },
      { source: '/status', destination: '/', permanent: true },
      { source: '/status/', destination: '/', permanent: true },
      { source: '/agentic-insights', destination: '/', permanent: true },
      { source: '/agentic-insights/', destination: '/', permanent: true },
      { source: '/documentation', destination: '/', permanent: true },
      { source: '/documentation/', destination: '/', permanent: true },
      { source: '/request-demo', destination: '/', permanent: true },
      { source: '/request-demo/', destination: '/', permanent: true },

      // Use cases redirects
      { source: '/use-cases', destination: '/case-studies/', permanent: true },
      { source: '/use-cases/', destination: '/case-studies/', permanent: true },

      // Platform typos
      { source: '/platfroms', destination: '/platforms/', permanent: true },
      { source: '/platfroms/', destination: '/platforms/', permanent: true },
      { source: '/platfroms/jira-ai-integration', destination: '/platforms/jira-ai-integration/', permanent: true },
      { source: '/platfroms/jira-ai-integration/', destination: '/platforms/jira-ai-integration/', permanent: true },
      { source: '/platfroms/zendesk-ai-integration', destination: '/platforms/zendesk-ai-integration/', permanent: true },
      { source: '/platfroms/zendesk-ai-integration/', destination: '/platforms/zendesk-ai-integration/', permanent: true },
      { source: '/platfroms/ai-agent-for-messenger', destination: '/platforms/ai-agent-for-messenger/', permanent: true },
      { source: '/platfroms/ai-agent-for-messenger/', destination: '/platforms/ai-agent-for-messenger/', permanent: true },
      { source: '/platforms/messenger-agent/', destination: '/platforms/ai-agent-for-messenger/', permanent: true },
      { source: '/platfroms/shopify-ai-agent', destination: '/platforms/shopify-ai-agent/', permanent: true },
      { source: '/platfroms/shopify-ai-agent/', destination: '/platforms/shopify-ai-agent/', permanent: true },
      { source: '/platfroms/slack-ai-agent', destination: '/platforms/slack-ai-agent/', permanent: true },
      { source: '/platfroms/slack-ai-agent/', destination: '/platforms/slack-ai-agent/', permanent: true },

      // Platform redirects
      { source: '/platforms/openai', destination: '/', permanent: true },
      { source: '/platforms/openai/', destination: '/', permanent: true },
      { source: '/platforms/anthropic', destination: '/', permanent: true },
      { source: '/platforms/anthropic/', destination: '/', permanent: true },
      { source: '/platforms/hugging-face', destination: '/', permanent: true },
      { source: '/platforms/hugging-face/', destination: '/', permanent: true },
      { source: '/platforms/whatsapp-agent', destination: '/platforms/whatsapp-ai-agent/', permanent: true },
      { source: '/platforms/whatsapp-agent/', destination: '/platforms/whatsapp-ai-agent/', permanent: true },
      { source: '/platforms/ai-line-agent', destination: '/platforms/line-ai-agent/', permanent: true },
      { source: '/platforms/ai-line-agent/', destination: '/platforms/line-ai-agent/', permanent: true },
      { source: '/platforms/ai-zendesk-agent', destination: '/platforms/zendesk-ai-integration/', permanent: true },
      { source: '/platforms/ai-zendesk-agent/', destination: '/platforms/zendesk-ai-integration/', permanent: true },
      { source: '/platforms/microsoft-teams-ai-agents', destination: '/platforms/microsoft-teams-agents/', permanent: true },
      { source: '/platforms/microsoft-teams-ai-agents/', destination: '/platforms/microsoft-teams-agents/', permanent: true },
      { source: '/platforms/ai-zendesk-agent/', destination: '/platforms/zendesk-ai-integration/', permanent: true },
      { source: '/platforms/calendly/', destination: '/platforms/calendly-ai-integration/', permanent: true },
      { source: '/platforms/ai-viber-agent/', destination: '/platforms/viber-ai-agent/', permanent: true },

      // Add these new lines:
      { source: '/platforms/instagram-agent-ai', destination: '/platforms/instagram-ai-agent/', permanent: true },
      { source: '/platforms/instagram-agent-ai/', destination: '/platforms/instagram-ai-agent/', permanent: true },

      // Solutions redirects

      // Solutions redirects
      { source: '/solutions/feedback-ai-agent', destination: '/solutions/', permanent: true },
      { source: '/solutions/feedback-ai-agent/', destination: '/solutions/', permanent: true },
      { source: '/solutions/application-ai-agent', destination: '/solutions/', permanent: true },
      { source: '/solutions/application-ai-agent/', destination: '/solutions/', permanent: true },

      // Policy redirects
      { source: '/refuned-policy', destination: '/refund-policy/', permanent: true },
      { source: '/refuned-policy/', destination: '/refund-policy/', permanent: true },

      // Common typos
      { source: '/platfrom', destination: '/platforms/', permanent: true },
      { source: '/platfrom/', destination: '/platforms/', permanent: true },
      { source: '/platform', destination: '/platforms/', permanent: true },
      { source: '/platform/', destination: '/platforms/', permanent: true },
      { source: '/solution', destination: '/solutions/', permanent: true },
      { source: '/solution/', destination: '/solutions/', permanent: true },
      { source: '/blog', destination: '/blogs/', permanent: true },
      { source: '/blog/', destination: '/blogs/', permanent: true },
      { source: '/blogs/how-much-does-it-cost-to-build-an-ai-system-2', destination: '/blogs/how-much-does-it-cost-to-build-an-ai-system', permanent: true },
      { source: '/case-study', destination: '/case-studies/', permanent: true },
      { source: '/case-study/', destination: '/case-studies/', permanent: true },
      { source: '/testimonial', destination: '/client-testimonials/', permanent: true },
      { source: '/testimonial/', destination: '/client-testimonials/', permanent: true },
      { source: '/about', destination: '/about-us/', permanent: true },
      { source: '/about/', destination: '/about-us/', permanent: true },
      { source: '/contact', destination: '/contact-us/', permanent: true },
      { source: '/contact/', destination: '/contact-us/', permanent: true },
    ];
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    unoptimized: true, // Keep unoptimized to avoid hydration mismatches with existing image usage
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portal.kogents.ai',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'kogents.ai',
        port: '',
        pathname: '/**',
      },
    ],

  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons', '@gsap/react', 'gsap'],
  },

  async headers() {
    return [
      {
        source: "/",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800" },
          { key: "Link", value: "</assets/css/bootstrap.css>; rel=preload; as=style" },
          { key: "Link", value: "</assets/css/styles.css>; rel=preload; as=style" },
          { key: "Link", value: "</assets/fonts/Satoshi-Variable.ttf>; rel=preload; as=font; type=font/ttf; crossorigin=anonymous" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
      {
        source: "/:all*(css|js|woff2|svg|png|jpg|jpeg|webp|avif|ttf|eot|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },

  // turbopack: {
  //   rules: {
  //     '*.svg': {
  //       loaders: ['@svgr/webpack'],
  //       as: '*.js',
  //     },
  //   },
  // },
};

export default nextConfig;