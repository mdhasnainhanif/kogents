import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kogents.ai',
        port: '',
        pathname: '/wordpress-blog/wp-content/uploads/**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Disable all caching for fresh data
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },
  // Enable compression for static assets
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
      // Note: jQuery ProvidePlugin removed - not needed for CDN approach
    }
    return config;
  },
};

export default nextConfig;
