/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizePackageImports: ['@tabler/icons-react'] },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
}
module.exports = nextConfig
