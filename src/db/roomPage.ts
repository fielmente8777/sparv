import { AmenityItemProps, roomDataType } from "@/types/type";
import { bookNow } from "./homePage";

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


export const amenities: AmenityItemProps[] = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/18863263a4fc8ea9c6b68f220d762e9340902d9277fcabfed2d633318ab5ea68?placeholderIfAbsent=true&apiKey=bb675ef634244edd8d5e10cc739f7eb3", name: "Conference Hall" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/41ae461d848db2bb325538098fca4511f768453345a40fa0d53bedcd8c0631f1?placeholderIfAbsent=true&apiKey=bb675ef634244edd8d5e10cc739f7eb3", name: "Air Conditioner" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4628485da53ea61805c427b34abe4323d2af7597f1850f66a65f9e77f02574a5?placeholderIfAbsent=true&apiKey=bb675ef634244edd8d5e10cc739f7eb3", name: "24hr Security" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c867a5078930a000f162d6e249d91fb29962d667356a92b2083ccdde4b328b12?placeholderIfAbsent=true&apiKey=bb675ef634244edd8d5e10cc739f7eb3", name: "Laundry Service" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9ea6efcdbd5b7e1f6a3901fcf528f5d696b32a74e727526ec27d0aa8f21990a?placeholderIfAbsent=true&apiKey=bb675ef634244edd8d5e10cc739f7eb3", name: "24hr Room Service" }
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
        description: "Early check-in is subject to availability. For guaranteed early check-in, book from the previous night.",
    },
    {
        description: "Full breakfast is served from 7:00 AM to 10:00 AM.",
    },
    {
        description: "Smoking is prohibited in the rooms; please use designated outdoor areas.",
    },
    {
        description: "Prior approval is required for events, weddings, and commercial activities.",
    }
];