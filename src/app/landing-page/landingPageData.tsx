import { newImagesLink } from "@/db/constent";
import { galleryData } from "@/db/gallery";
import { roomsCardsData } from "@/db/roomPage";

const encodedText =
  "Hi! I came across your resort on Google and wanted to know more about it";

export const whatsAppcta = "https://wa.me/+917410112895/?text=" + encodedText;
export const landingPageData = {
  bannerData: {
    title: "Welcome to Sparv Resort",
    description: "MANDREM’S BEST BEACH GETAWAY",
    images: [
      // "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/DJI_0729.jpg",
      // "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/lyamin.pro-3.jpg",
      newImagesLink + "outer-and-other/DJI_0141.webp",
      newImagesLink + "outer-and-other/_6__5456.webp",
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/Home+page/beach-goa-india.jpg",
    ],
  },
  aboutUsData: {
    title: "ABOUT SPARV RESORT",
    subTitle: "Redefining Relaxation at Mandrem’s Coastal Haven",
    description:
      "In luxury’s lap at SPARV Aulakh Resort, Goa, witness the relaxing and laid-back life that is so characteristic of this sunny beach state. Located in Mandrem Rd, near the White Church on the North coast of Goa and overlooking the Arabian Sea, this resort in Mandrem, Goa will slow your time to a tranquil tempo. 17 Km and approximately 100 minutes from the city centre, SPARV beach resort in Goa expands over multiple acres of lush greenery, divided into the main hotel building with Standard, Deluxe and Premium category rooms. This accommodation in Mandrem coupled with a convenient location, and easy access to the city’s must-see destinations, makes for a perfect romantic or family holiday.",
  },
  accommodationData: {
    title: "EXPLORE OUR STAYS",
    subTitle: "Accommodation",
    description:
      "Blending Modern Comfort with Goan Charm to Redefine Your Beachside Getaway",
    cards: [
      {
        name: "Deluxe Rooms",
        description:
          "Luxuriate in our Deluxe Rooms at the best resort in Mandrem featuring a plush king-size bed, breathtaking sea views, and your private balcony. Designed for honeymooners and those seeking a romantic getaway.",
        listData: ["Air Conditioner", "Tea & Coffee Maker", "Free Wifi"],
        img: roomsCardsData[0].img,
        link: {
          label: "BOOK NOW",
          href: whatsAppcta,
        },
      },
      {
        name: "Premium Rooms",
        description:
          "Experience the beauty and comfort of our Premium Rooms with picturesque ocean views from your private balcony.Perfect for travelers and families looking for relaxing getaway",
        listData: ["Air Conditioner", "Tea & Coffee Maker", "Free Wifi"],
        img: roomsCardsData[1].img,
        link: {
          label: "BOOK NOW",
          href: whatsAppcta,
        },
      },
      {
        name: "Standard Rooms",
        description:
          "Our Standard Rooms at SPARV resort offer a peaceful retreat with stunning nature views. Step onto your private balcony to find yourself in the beauty of nature. Perfect for couples looking for a romantic escape.",
        listData: ["Air Conditioner", "Tea & Coffee Maker", "Free Wifi"],
        img: roomsCardsData[2].img,
        link: {
          label: "BOOK NOW",
          href: whatsAppcta,
        },
      },
    ],
  },
  galleryData: {
    title: "EXPLORE OUR GALLERY",
    subTitle: "A Window to SPARV’S Galley",
    images: galleryData
      .filter((item) => item.category.toLowerCase() !== "rooms")
      .map((item) => item.image),
    link: {
      label: "GET EXCLUSIVE OFFER",
      href: whatsAppcta,
    },
  },
  testimonialsData: {
    title: "TESTIMONIALS",
    subTitle: "Hearts Touched by SPARV Resort",
    src: "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/RUAN9844.jpg",
    cards: [
      // {
      //   name: "Lorem Ipsum",
      //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      // },
      {
        name: "Himanshu G",
        desc:
          "I recently stayed at SPARV Resort and had a fantastic time! The resort is beautiful, with stunning views and peaceful surroundings. My room was cozy and comfortable, perfect for relaxing after exploring. I loved the delicious food at the restaurant. I highly recommend SPARV Resort for a perfect getaway.",
      },
      {
        name: "Aditya R",
        desc:
          "Great Location we love this place as it is peace mind great wether in  really very very beautiful place  Thanks  Team who give a best Hospitality. Food was Also Fresh and tasty.",
      },
      {
        name: "Aditya Jain",
        desc:
          "I had an amazing stay at the property, we were greeted with welcome drinks, they had gym facilities, playground for the kids, cycling and also they have an extra property for adventure activities, cricket, badminton and the food was so tasty, very good for pure vegetarian people. Felt like home and such a sweet staff. 100% recommended for your trip in this area",
      },
    ],
  },
};
