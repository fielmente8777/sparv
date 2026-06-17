import { AmenityItemProps, roomDataType } from "@/types/type";
import { bookNow } from "./homePage";
import { newImagesLink } from "./constent";

export const roomsCardsData: roomDataType[] = [
  {
    id: 1,
    name: "Deluxe Rooms",
    description:
      "Luxuriate in our Deluxe Rooms at the best resort in Mandrem featuring a plush king-size bed, breathtaking sea views, and your private balcony. Designed for honeymooners and those seeking a romantic getaway.",
    price: 5000,
    currency: "inr",
    time: "per night",
    img: [
      "/deluxe/_6__5565.jpg",
      "/deluxe/_6__5562.jpg",
      "/deluxe/_6__5569.jpg",
      "/deluxe/_6__5580.jpg",
      "/deluxe/_6__5597.jpg",
      "/deluxe/_6__5600.jpg",
      "/deluxe/_6__5618.jpg",
      "/deluxe/_6__5866.jpg",
      "/deluxe/_6__6281.jpg",
      "/deluxe/_6__5469.jpg",
      "/deluxe/_6__5546.jpg",
      "/deluxe/_6__5548.jpg",
      "/deluxe/_6__5551.jpg",
    ],
    // ["/images/room1.png", "/images/room2.png", "/images/room3.png"],
    href: bookNow,
  },
  {
    id: 2,
    name: "Premium Rooms",
    description:
      "Experience the beauty and comfort of our Premium Rooms with picturesque ocean views from your private balcony.Perfect for travelers and families looking for relaxing getaway",
    price: 4500,
    currency: "inr",
    time: "per night",
    img: [
      "/Premium/_6__5630.jpg",
      "/Premium/_6__5633.jpg",
      "/Premium/_6__5662.jpg",
      "/Premium/_6__5682.jpg",
      "/Premium/_6__5956.jpg",
      "/Premium/_6__6142.jpg",
      "/Premium/_6__5624.jpg",
    ],
    href: bookNow,
  },
  {
    id: 3, // Changed id to 3 for uniqueness
    name: "Standard Rooms",
    description:
      "Our Standard Rooms at SPARV resort offer a peaceful retreat with stunning nature views. Step onto your private balcony to find yourself in the beauty of nature. Perfect for couples looking for a romantic escape.",
    price: 4000,
    currency: "inr",
    time: "per night",
    img: [
       "/standard/_6__5705.jpg",
       "/standard/_6__5709.jpg",
        "/standard/_6__5720.jpg",
        "/standard/_6__5722.jpg",
        "/standard/_6__5724.jpg",
        "/standard/_6__5826.jpg",
        "/standard/_6__5694.jpg",
        "/standard/_6__5697.jpg",
        "/standard/_6__5699.jpg",
    ],
    href: bookNow,
  },
];

export const amenities: AmenityItemProps[] = [
  { icon: "/conference.webp", name: "Conference Hall" },
  { icon: "/conditioner.webp", name: "Air Conditioner" },
  { icon: "/security.webp", name: "24hr Security" },
  { icon: "/laundry.webp", name: "Laundry Service" },
  { icon: "/service.webp", name: "24hr Room Service" },
];

export const data2 = [
  {
    title: "Check-in",
    description: "2:00 PM",
  },
  {
    title: "Check-out",
    description: "12:00 PM",
  },
  {
    title: "Additional information",
    description: "The minimum age for guests is 7 years.",
  },
  {
    description:
      "Early check-in is subject to availability. For guaranteed early check-in, book from the previous night.",
  },
  {
    description: "Full breakfast is served from 7:00 AM to 10:00 AM.",
  },
  {
    description:
      "Smoking is prohibited in the rooms; please use designated outdoor areas.",
  },
  {
    description:
      "Prior approval is required for events, weddings, and commercial activities.",
  },
];
