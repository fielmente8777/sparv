import { galleryData } from "@/db/gallery";

const encodedText = "Hi! I came across your resort on Google and wanted to know more about it"

export const whatsAppcta = "https://wa.me/+917410112895/?text=" + encodedText;
export const landingPageData = {
  bannerData: {
    title: "Welcome to Sparv Resort",
    description: "MANDREM’S BEST BEACH GETAWAY",
    images: [
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/DJI_0729.jpg",
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/lyamin.pro-3.jpg",
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
        img: [
          "/deluxe/IMG_4390.webp",
          "/deluxe/IMG_4393.webp",
          "/deluxe/IMG_4397.webp",
          "/deluxe/IMG_4399.webp",
        ],
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
        img: ["/images/room1.png", "/images/room2.png", "/images/room3.png"],
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
        img: [
          "/standard/_DSF0692_3_4.webp",
          "/standard/_DSF0707_8_9.webp",
          "/standard/_DSF0740_1_2.webp",
          "/standard/_DSF0749_50_51.webp",
          "/standard/_DSF0737_8_9.webp",
          "/standard/_DSF0758_59_60.webp",
        ],
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
        name: "Diwan Chand",
        desc:
          "A Serene Escape at Naturoville Wellness, Rishikesh. We’ve been regular visitors to Naturoville Wellness, and every single visit feels like a rejuvenating retreat. This place is not just about wellness—it’s about an experience of their F&b. A huge part of why we keep coming back is because of Vipin Rawat ji. He’s truly the heart of the property. His warmth, deep understanding of hospitality, and personal attention to every detail make all the difference. You can immediately tell that service excellence is not just a goal here—it’s a culture, and much of that credit goes to him. The staff are equally courteous and professional, always ensuring guests feel at ease and well cared for. The food here is another highlight—fresh, wholesome, and thoughtfully prepared, aligning beautifully with the wellness philosophy of the resort. Whether it’s the herbal teas, balanced meals, or nourishing snacks, everything reflects care and quality. And let’s not forget their drinks which they recently introduced. The swimming pool area is absolutely lovely calm, scenic, and perfect for relaxation. The overall property is beautifully maintained with tranquil surroundings, ideal for anyone looking to unwind and recharge. Highly recommend Naturoville Wellness to anyone looking for a holistic getaway, and don’t forget to meet Vipin Rawat ji—his presence alone makes the stay memorable.",
      },
      {
        name: "Jasleen Anand",
        desc:
          "I recently had the pleasure of dining at Naturoville Wellness, and it was truly a delightful experience. The serene ambiance surrounded by lush greenery creates a tranquil setting, making it a perfect escape from the hustle and bustle. The lunch menu offered a delectable array of dishes, showcasing a harmonious blend of flavors and fresh, locally sourced ingredients. The chefs at Naturoville Wellness have a commendable skill in crafting dishes that not only satisfy the taste buds but also align with a wellness-focused approach. The attentive and courteous staff added to the overall positive experience, ensuring our needs were met with a genuine warmth. The attention to detail, from presentation to service, was impressive. I would highly recommend Naturoville Wellness for a dining experience that goes beyond just a meal—it's a journey of culinary delight in a rejuvenating natural environment.",
      },
      {
        name: "Krishna Murthy",
        desc:
          "A few months ago I got diagnosed with Type 2 Diabetes. It took me some time to accept it. I finally opted for diabetes management program at Naturoville Wellness. On Diwali morning this year my Fasting Blood Glucose was 250! And HbA1c was over 11. Dr. Archana first explained to me the progression of the disease and how we are planning to tackle it using Ayurveda, healthy diet and exercise. With consistent efforts and continued guidance I managed to achieve fasting blood glucose of 97 and HbA1c of 7.4. So that's a reduction of almost 4 percent in a span of just two months! Besides this therapeutic yoga also helped me heal years of chronic lower back pain. PS - Added bonus of healthy weight loss was remarkable as well. I entered the new year down 10kgs from Diwali. Thank you to the entire team at Naturoville Wellness. Can't wait to be back soon☺️",
      },
    ],
  },
};
