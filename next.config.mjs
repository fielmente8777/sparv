/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // output: "export",

  images: {
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
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  trailingSlash: true,
};

export default nextConfig;
