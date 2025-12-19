const config = {
  plugins: [
    "@tailwindcss/postcss",
    // CSS minification is handled by Next.js automatically
    // PurgeCSS can be added here for production builds if needed
    // Note: Only purge CSS in public folder, not in src (handled by Next.js)
  ],
};

export default config;
