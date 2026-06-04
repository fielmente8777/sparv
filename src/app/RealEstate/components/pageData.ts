import { Viaoda_Libre } from "next/font/google";

export interface HeroData {
  subtitle: string;
  title: string;
  bgImage: string;
}

export interface Properties {
  id: number;
  title: string;
  location: string;
  description: string;
  tags: string[];
  images: string[];
  villaFeaturesPopUp?: any;
}

export interface PropertiesIntro {
  subtitle: string;
  title: string;
  description: string;
}

export interface EnquireData {
  subtitle: string;
  title: string;
  description: string;
  phone: string;
}

export interface RealEstatePageData {
  hero: HeroData;
  propertiesIntro: PropertiesIntro;
  properties: Properties[];
  enquire: EnquireData;
}

export const realEstatePageData = {
  hero: {
    subtitle: "SPARV · Real Estate Portfolio",
    title: "Where Good Life Begins",
    bgImage: "/realEstate/hero.jpg",
  },
  propertiesIntro: {
    subtitle: "CURATED PROPERTIES",
    title: "Four Addresses. One Standard of Living.",
    description:
      "From private rooftop pools above the Arambol coastline to a G+25 IT park redefining Sector 73, each SPARV development is shaped by the same hospitality DNA, uncompromising detail, warm service, and a quiet sense of luxury.",
  },
  properties: [
    {
      id: 1,
      title: "SPARV Alora Villas",
      location: "ARAMBOL, NORTH GOA",
      description:
        "A curated collection of premium luxury villas designed for elegant living, modern comfort, and peaceful surroundings.",
      tags: ["LUXURY 3BHK", "PRIVATE POOL", "ROOFTOP BAR"],
      images: [
        "/realEstate/room1.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room3.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room4.jpg",
      ],
      villaFeaturesPopUp: [
        {
          description:
            "Where Good Life Begins. A curated collection of premium luxury villas designed for elegant living, modern comfort, and peaceful surroundings.",
        },
        // {
        //   villaFeatureType: "Property Gallery",
        //   images: [
        //     "/realEstate/room3.jpg",
        //     "/realEstate/room4.jpg",
        //     "/realEstate/room4.jpg",
        //     "/realEstate/room4.jpg",
        //   ],
        //   // villaFeatures:[]
        // },
        {
          villaFeatureType: "VILLA FEATURES",
          villaFeatures: [
            "Luxury 3-Bedroom Villa",
            "Fully Furnished Interiors",
            "Spacious Living & Dining Area",
            "Private Rooftop Pool",
            "Rooftop Café Bar & Lounge",
            "Modern Bathrooms & Fixtures",
            "Granite / Quartz Kitchen Countertops",
            "Concealed Copper Electrical Wiring",
          ],
        },
        {
          villaFeatureType: "CONSTRUCTION SPECS",
          villaFeatures: ["RCC Framed Structure & Vitrified Flooring"],
        },
      ],
    },
    {
      id: 2,
      title: "SPARV Solterra Luxury Villa",
      location: "CORJAO, NORTH GOA",
      description:
        "Own a premium villa in one of North Goa's emerging luxury destinations, ideal for personal use or high-yield holiday rentals.",
      tags: ["ASSURED RETURNS", "3BHK", "MANAGED RENTAL"],
      images: [
        "/realEstate/room2.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room3.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room4.jpg",
      ],
      villaFeaturesPopUp: [
        // {
        //   villaFeatureType: "Property Gallery",
        //   images: [
        //     "/realEstate/room3.jpg",
        //     "/realEstate/room4.jpg",
        //     "/realEstate/room4.jpg",
        //     "/realEstate/room4.jpg",
        //   ],
        //   villaFeatures: [],
        // },
        {
          villaFeatureType: "INVESTMENT HIGHLIGHTS",

          villaFeatures: [
            "Plot Size: 500 Sq. Mtr (5,380 sq ft)",
            "190 Sq. Mtr (2045 sq ft)",
            "3BHK Luxury Villa (Semi-Furnished)",
            "Assured Return: ₹1.5 Lakh/mo for 3 Years",
            "Proximity to Mandrem, Morjim & Ashwem Beaches",
            "Fully managed rental model (hassle-free)",
          ],
        },
        // {
        //   villaFeatureType: "Construction Specs",
        //   villaFeatures: [""],
        // },
      ],
    },
    {
      id: 3,
      title: "IThums Galleria",
      location: "GREATER NOIDA, OPP. DELTA-1 METRO",
      description: `"The Mall Which Has IT All." A premium multi-dimensional real estate development. It has officially received its Occupancy Certificate OC) from GNIDA`,
      tags: ["OC RECEIVED", "NOW OPEN", "HIGH FOOTFALL"],
      images: [
        "/realEstate/room3.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room4.jpg",
      ],
      villaFeaturesPopUp: [
        // {
        //   villaFeatureType: "Property Gallery",
        //   images: [
        //     "/realEstate/room3.jpg",
        //     "/realEstate/room4.jpg",
        //     "/realEstate/room4.jpg",
        //     "/realEstate/room4.jpg",
        //   ],
        //   villaFeatures: [],
        // },

        {
          villaFeatureType: "VILLA FEATURES",
          villaFeatures: [
            "Landmark commercial hub in Greater Noida",
            "High foot traffic (Near residential societies)",
            "Ultra-modern commercial property",
            "Retail, Dining & Entertainment spaces",
            "Meticulous design & exceptional features",
          ],
        },
        // {
        //   villaFeatureType: "Construction Specs",
        //   villaFeatures: [""],
        // },
      ],
    },
    {
      id: 4,
      title: "IThums 73",
      location: "SECTOR 73, NOIDA",
      description: `"The Next Generation IT Park.
" An architectural marvel integrating lifestyle, commerce,
and technology. Designed to enhance collaboration and comfort`,
      tags: ["IT PARK", "5.5 ACRES", "G + 25 FLOORS"],
      images: [
        "/realEstate/room4.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room3.jpg",
        // "/realEstate/room4.jpg",
        // "/realEstate/room4.jpg",
      ],
      villaFeaturesPopUp: [
        // {
        //   villaFeatureType: "Property Gallery",
        //   images: [
        //     "/realEstate/room3.jpg",
        //     "/realEstate/room4.jpg",
        //     "/realEstate/room4.jpg",
        //     "/realEstate/room4.jpg",
        //   ],
        //   villaFeatures: [],
        // },
        {
          villaFeatureType: "PROJECT HIGHLIGHTS",
          villaFeatures: [
            "Spread across 5.5 acres",
            "G25 Floors High-rise (Structure Completed)",
            "Green building sustainable development model",
            "Premium office, retail, and restaurant spaces",
            "Improved indoor air quality & natural lighting",
          ],
        },
        // {
        //   villaFeatureType: "Construction Specs",
        //   villaFeatures: [""],
        // },
      ],
    },
  ],
  enquire: {
    subtitle: "ENQUIRE",
    title: "Schedule a Private Walkthrough",
    description:
      "Speak with our investment desk for floor plans, pricing and site-visit arrangements across our Goa and NCR developments.",
    phone: "+917410112890",
  },
};
