import { roomDataType } from "@/types/type";

export const bannerData = [
  {
    // src: `https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/DJI_0729.jpg`,
    // src: `https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/DJI_0694.jpg`,
    src: "/images/room1.png",
    title: "Where Bliss Meets the Beach",
    description:
      "Relax by Goa's Pristine Coastline at the best Mandrem Retreat",
  },
  {
    src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/Photos/lyamin.pro-3.jpg",
    title: "From sunrises to sunset dips",
    description: "Enjoy endless poolside fun at SPARV Aulakh Resort",
  },
  {
    // src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated/Home+page+/beach-goa-india.jpg",
    src: `https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/Home+page/beach-goa-india.jpg`,
    title: "Reconnect with Nature",
    description: "Stroll through our garden paradise",
  },
];

export const bookNow =
  "https://engine.eazotel.com/?id=e50d8dc6-4cfc-4c87-b6c0-145ccdeb4121&hid=56369483";
export const roomsCardsData: roomDataType[] = [
  {
    id: 1,
    name: "Deluxe Rooms",
    description: "Private balcony, equipped with cosy seating.",
    price: 5000,
    currency: "inr",
    time: "per night",
    img: [
      "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated4/IMG_4390.jpg",
      "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated4/IMG_4395.jpg",
      "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/images/cf9af91f-fec9-44b7-91de-23d167e396de.jpg",
      "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/images/f900c97b-cd81-4143-aa53-46662295bd9f.jpg",
    ],
    href: bookNow,
  },
  {
    id: 2,
    name: "Premium Rooms",
    description: "Private Balconies with Sea View",
    price: 4500,
    currency: "inr",
    time: "per night",
    img: [
      "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/images/ca89eb8f-2e19-4eab-97d6-b165da01424c.jpg",
      "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated3/Screenshot+(61)+copy.jpg",
      "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/images/797dbaef-6d27-4f09-842e-ba0225e65218.jpg",
    ],
    href: bookNow,
  },
  {
    id: 3, // Changed id to 3 for uniqueness
    name: "Standard Rooms",
    description: "Balcony with Sea View",
    price: 4000,
    currency: "inr",
    time: "per night",
    img: [
      "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated3/RUAN9933+copy.jpg",
      "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/images/17b44d73-032c-4ee9-8546-44c037eed661.jpg",
      "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/images/adb8ecb4-aabb-45dc-b515-10fe14bc3964.jpg",
    ],
    href: bookNow,
  },
];

export const ResortFacilitiesData = {
  title: "Resort",
  span: "Facilities",
  description:
    "Relax in comfort and style at your mandrem retreat with our facilities by the pool.",
  label: "See More",
  href: "/Facilities/",
  imageData: [
    {
      title: "Best Stay Place",
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated/gallery/RUAN9822+(1).jpg",
      description: "Your dream holiday resort in Mandrem, Goa.",
    },
    {
      title: "Pool",
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/Photos/lyamin.pro-6.jpg",
      description: "Refreshment and Relaxation at Our Pool Paradise.",
    },
    {
      title: "Restaurant",
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated2/Home+page+/Resort+facilities/Restaurant.jpg",
      description:
        "Dine in to enjoy authentic Multi-cuisine with SPARV hospitality.",
    },
    {
      title: "Tea Point",
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated2/Home+page+/Resort+facilities/Tea+Point.jpg",
      description: "Refreshment Station",
    },
    {
      title: "Sea View",
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/Photos/lyamin.pro-32.jpg",
      description:
        "Experience the beauty of the ocean from your bedside at SPARV Beach Resort.",
    },
  ],
};

export const galleryData = {
  title: "Gallery",
  description: "Explore our world captured through lenses.",
  label: "view all",
  href: "/Gallery/",
  data: [
    {
      id: 1,
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated2/Home+page+/gallery/Restaurant.jpg",
      label: "restaurant",
      href: "/Gallery/",
    },
    {
      id: 2,
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated2/Home+page+/gallery/Hotel.jpg",
      label: "hotel",
      href: "/Gallery/",
    },
    {
      id: 3,
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated2/Home+page+/gallery/Nearby.jpg",
      label: "nearby",
      href: "/Gallery/",
    },
    {
      id: 4,
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/Hotel/DSCF7575-HDR.jpg",
      label: "view",
      href: "/Gallery/",
    },
    {
      id: 5,
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/images/6a48eb56-882a-420f-a49c-d2c8b1977e83.jpg",
      label: "rooms",
      href: "/Gallery/",
    },
    {
      id: 6,
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/Hotel/DSCF4137-HDR.jpg",
      label: "lobby",
      href: "/Gallery/",
    },
  ],
};

export const nearbyData = {
  title: "Nearby",
  span: "Places",
  description:
    "Explore Wonders of food, fashion, and forts, just steps away from your accommodation in Mandrem.",
  label: "view all",
  href: "/Gallery/",
  data: [
    {
      id: 1,
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/LocalAttractions/Arambol+Beach.jpg",
      label: "Arambol Beach",
      href: "",
    },
    {
      id: 2,
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/LocalAttractions/Ashvem+Beach.jpg",
      label: "Ashwem Beach",
      href: "",
    },
    {
      id: 3,
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/LocalAttractions/Mandrem+Beach.jpg",
      label: "Mandrem Beach",
      href: "",
    },
    {
      id: 4,
      img: "https://www.tourmyindia.com/states/goa/image/fort-aguada-goa.webp",
      label: "Aguada Fort",
      href: "",
    },
    {
      id: 5,
      img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/LocalAttractions/Shopping+and+Dining/5c18f1ca6b2e5c3f8eb3cd63_1545138634233.jpg",
      label: "Shopping & Dining",
      href: "",
    },
    {
      id: 6,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/27/06/b7/view.jpg?w=1200&h=1200&s=1",
      label: "Morjim Beach",
      href: "",
    },
  ],
};

export const roomData = {
  title: "Our",
  span: "Rooms",
  description:
    "Comfortable Retreats for Every Traveller at SPARV resort in Mandrem.",
  label: "view all",
  href: "/Rooms/",
  data: [
    {
      id: 1,
      name: "Deluxe Rooms",
      description:
        "Luxuriate in our Deluxe Rooms at the best resort in Mandrem featuring a plush king-size bed, breathtaking sea views, and your private balcony. Designed for honeymooners and those seeking a romantic getaway.",
      price: 5000,
      currency: "inr",
      time: "per night",
      img: "/images/room1.png",
      href: bookNow,
      label: "book",
    },
    {
      id: 2,
      name: "Premium Rooms",
      description:
        "Experience the beauty and comfort of our Premium Rooms with picturesque ocean views from your private balcony.Perfect for travelers and families looking for relaxing getaway.",
      price: 4500,
      currency: "inr",
      time: "per night",
      img: "/images/room2.png",
      href: bookNow,
      label: "book",
    },
    {
      id: 3, // Changed id to 3 for uniqueness
      name: "Standard Rooms",
      description:
        "Our Standard Rooms at SPARV resort offer a peaceful retreat with stunning nature views. Step onto your private balcony to find yourself in the beauty of nature. Perfect for couples looking for a romantic escape.",
      price: 4000,
      currency: "inr",
      time: "per night",
      img: "/images/room3.png",
      href: bookNow,
      label: "book",
    },
  ],
};

export const facilityData = [
  {
    id: 1,
    img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/updatedImage/restaurants_images/IMG_7659.JPG",
    label: "Breakfast",
    href: "#",
  },
  {
    id: 2,
    img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/updatedImage/restaurants_images/IMG_7656.JPG",
    label: "Lunch",
    href: "#",
  },
  {
    id: 3,
    img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated2/Gallery/All.jpg",
    label: "Bar",
    href: "#",
  },
  {
    id: 4,
    img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/Hotel/DSCF7095.JPG",
    label: "Dinner",
    href: "#",
  },
];
