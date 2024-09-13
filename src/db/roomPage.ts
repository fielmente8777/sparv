import { roomDataType } from "@/types/type";

const bookNow = "Book Now";
export const roomsCardsData: roomDataType[] = [
    {
        id: 1,
        name: "Deluxe Rooms",
        description: "Luxuriate in our Deluxe Rooms at the best resort in Mandrem featuring a plush king-size bed, breathtaking sea views, and your private balcony. Designed for honeymooners and those seeking a romantic getaway.",
        price: 5000,
        currency: "inr",
        time: "per night",
        img: ["/images/room1.png", "/images/room2.png", "/images/room3.png"],
        href: bookNow,
    },
    {
        id: 2,
        name: "Premium Rooms",
        description: "Experience the beauty and comfort of our Premium Rooms with picturesque ocean views from your private balcony.Perfect for travelers and families looking for relaxing getaway",
        price: 4500,
        currency: "inr",
        time: "per night",
        img: ["/images/room1.png", "/images/room2.png", "/images/room3.png"],
        href: bookNow,
    },
    {
        id: 3, // Changed id to 3 for uniqueness
        name: "Standard Rooms",
        description: "Our Standard Rooms at SPARV resort offer a peaceful retreat with stunning nature views. Step onto your private balcony to find yourself in the beauty of nature. Perfect for couples looking for a romantic escape.",
        price: 4000,
        currency: "inr",
        time: "per night",
        img: ["/images/room1.png", "/images/room2.png", "/images/room3.png"],
        href: bookNow,
    },
];