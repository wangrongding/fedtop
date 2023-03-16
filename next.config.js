// next.config.js

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // env: {
  //   customKey: 'my-value',
  // },
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
