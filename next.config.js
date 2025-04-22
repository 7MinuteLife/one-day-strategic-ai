/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Enable App Router properly
  experimental: {
    // No invalid options
  }
};

module.exports = nextConfig; 