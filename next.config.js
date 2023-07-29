// next.config.js

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // env: {
  //   customKey: 'my-value',
  // },
  reactStrictMode: true, // 严格模式
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.fedtop.com',
        port: '',
        pathname: '/picbed/**',
      },
    ],
  },
}

module.exports = nextConfig
