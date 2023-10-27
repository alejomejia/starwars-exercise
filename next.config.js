/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'starwars-visualguide.com'
      }
    ]
  }
}

module.exports = nextConfig
