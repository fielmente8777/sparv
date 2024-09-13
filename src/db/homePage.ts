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
            description:
                "Your dream holiday resort in Mandrem, Goa.",
        },
        {
            title: "Pool",
            img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/Photos/lyamin.pro-6.jpg",
            description:
                "Refreshment and Relaxation at Our Pool Paradise.",
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
            description:
                "Refreshment Station",
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
            img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/Photos/lyamin.pro-32.jpg",
            label: "restaurant",
            href: "/Gallery/",
        },
        {
            id: 2,
            img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/Photos/lyamin.pro-6.jpg",
            label: "hotel",
            href: "/Gallery/",
        },
        {
            id: 3,
            img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated2/Home+page+/Resort+facilities/Tea+Point.jpg",
            label: "nearby",
            href: "/Gallery/",
        },
        {
            id: 4,
            img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated2/Home+page+/Resort+facilities/Restaurant.jpg",
            label: "view",
            href: "/Gallery/",
        },
        {
            id: 5,
            img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated/gallery/RUAN9822+(1).jpg",
            label: "rooms",
            href: "/Gallery/",
        },
        {
            id: 6,
            img: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated2/Home+page+/Resort+facilities/Tea+Point.jpg",
            label: "lobby",
            href: "/Gallery/",
        }
    ]
}