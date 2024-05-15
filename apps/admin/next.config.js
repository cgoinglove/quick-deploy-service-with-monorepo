/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/react-kit"],
  experimental: {
    serverComponentsExternalPackages: ["typeorm"],
  },
};
