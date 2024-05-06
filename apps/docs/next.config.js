/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@repo/react-kit', '@repo/database-service'],
  experimental: {
    serverComponentsExternalPackages: ['typeorm'],
  },
};
