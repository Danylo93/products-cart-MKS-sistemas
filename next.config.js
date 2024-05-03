/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "products-cart-mks-sistemas.vercel.app",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};
