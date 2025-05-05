/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // output: "export",
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eazotel-client-images.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "www.tourmyindia.com",
      },
      {
        protocol: "https",
        hostname: "dynamic-media-cdn.tripadvisor.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
