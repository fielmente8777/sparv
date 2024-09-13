import { roomDataType } from "@/types/type";


const bookNow = "Book Now";
export const roomsCardsData: roomDataType[] = [
    {
        id: 1,
        name: "Deluxe Rooms",
        description: "Private balcony, equipped with cosy seating.",
        price: 5000,
        currency: "inr",
        time: "per night",
        img: ["/images/room1.png", "/images/room2.png", "/images/room3.png"],
        href: bookNow,
    },
    {
        id: 2,
        name: "Premium Rooms",
        description: "Private Balconies with Sea View",
        price: 4500,
        currency: "inr",
        time: "per night",
        img: ["/images/room1.png", "/images/room2.png", "/images/room3.png"],
        href: bookNow,
    },
    {
        id: 3, // Changed id to 3 for uniqueness
        name: "Standard Rooms",
        description: "Balcony with Sea View",
        price: 4000,
        currency: "inr",
        time: "per night",
        img: ["/images/room1.png", "/images/room2.png", "/images/room3.png"],
        href: bookNow,
    },
];
