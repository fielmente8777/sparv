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
        bgImage:"/realEstate/hero.jpg",
    },
    propertiesIntro: {
        subtitle: "CURATED PROPERTIES",
        title: "Four Addresses. One Standard of Living.",
        description: "From private rooftop pools above the Arambol coastline to a G+25 IT park redefining Sector 73, each SPARV development is shaped by the same hospitality DNA, uncompromising detail, warm service, and a quiet sense of luxury.",
    },
    properties: [
       {
            id: 1,
            title: "SPARV Alora Villas",
            location: "ARAMBOL, NORTH GOA",
            description: "A curated collection of premium luxury villas designed for elegant living, modern comfort, and peaceful surroundings.",
            tags: ["LUXURY 3BHK", "PRIVATE POOL", "ROOFTOP BAR"],
            images: ["/realEstate/room1.jpg"],
        },
        {
            id: 2,
            title: "SPARV Solterra Luxury Villa",
            location: "CORJAO, NORTH GOA",
            description: "Own a premium villa in one of North Goa's emerging luxury destinations, ideal for personal use or high-yield holiday rentals.",
            tags: ["ASSURED RETURNS", "3BHK", "MANAGED RENTAL"],
            images: ["/realEstate/room2.jpg"],
        },
        {
            id: 3,
            title: "IThums Galleria",
            location: "GREATER NOIDA, OPP. DELTA-1 METRO",
            description: "A premium multi-dimensional commercial development, officially OC-approved by GNIDA, a landmark hub for retail, dining and entertainment.",
            tags: ["OC RECEIVED", "NOW OPEN", "HIGH FOOTFALL"],
            images: ["/realEstate/room3.jpg"],
        },
        {
            id: 4,
            title: "IThums 73",
            location: "SECTOR 73, NOIDA",
            description: "An architectural marvel integrating lifestyle, commerce and technology — designed to enhance collaboration and comfort.",
            tags: ["IT PARK", "5.5 ACRES", "G + 25 FLOORS"],
            images: ["/realEstate/room4.jpg"],
        },
    ],
    enquire: {
        subtitle: "ENQUIRE",
        title: "Schedule a Private Walkthrough",
        description: "Speak with our investment desk for floor plans, pricing and site-visit arrangements across our Goa and NCR developments.",
        phone: "+91 74101 12890"
    }
};