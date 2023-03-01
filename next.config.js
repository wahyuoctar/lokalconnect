/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  env: {
    APPNAME: process.env.APPNAME,
    APPKEY: process.env.APPKEY,
  },
};

module.exports = nextConfig;
