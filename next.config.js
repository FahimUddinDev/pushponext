/** @type {import('next').NextConfig} */
const { hostname } = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`);
const nextConfig = {
  images: {
    domains: [`${hostname}`],
  },
};

module.exports = nextConfig;
