/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  compress: true,

  poweredByHeader: false,

  reactStrictMode: true,
  
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],

    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    minimumCacheTTL: 2678400,

    dangerouslyAllowSVG: true,

    contentDispositionType: "attachment",
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
   experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "swiper"],

    optimizeCss: true,

    scrollRestoration: true,
  },
};

export default nextConfig;
