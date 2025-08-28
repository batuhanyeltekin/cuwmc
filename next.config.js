/** @type {import('next').NextConfig} */
const nextConfig = {
  // Modern Next.js 14 configuration
  experimental: {
    // Remove deprecated appDir option as it's now stable in 14+
  },
  images: {
    // Enable modern image optimization
    formats: ['image/webp', 'image/avif'],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Enable SWC minification for faster builds
  swcMinify: true,
}

module.exports = nextConfig
