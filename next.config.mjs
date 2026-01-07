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
        hostname: "eazotel-clients-images.s3.ap-south-1.amazonaws.com",
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
        hostname: "im.whatshot.in",
      },
      {
        protocol: "https",
        hostname: "www.allgudthings.com",
      },
      {
        protocol: "https",
        hostname: "media-cdn.tripadvisor.com",
      },
      {
        protocol: "https",
        hostname: "travelentice.com",
      },
      {
        protocol: "https",
        hostname: "cdn.thegoavilla.com",
      },
      {
        protocol: "https",
        hostname: "goa-tourism.org.in",
      },
      {
        protocol: "https",
        hostname: "assets.cntraveller.in",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
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
