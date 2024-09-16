import { Banner, Container, Section } from "@/components";
import { roomDataType } from "../../types/type";
import {
  CommonSection,
  OurRoomSection,
  ResortFacilities,
  RoomAccommodation,
} from "./component";
import {
  roomsCardsData,
  ResortFacilitiesData,
  galleryData,
  nearbyData,
  roomData,
} from "@/db/homePage";
import SEOVideo from "@/components/SEOVideo";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { bannerData } from "@/db/homePage";

const page = () => {
  const url =
    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/Sparv+Aulakhs+Resort+Goa.mp4";
  
  return (
    <main>
      <Banner data={bannerData} imgSlider />

      <RoomAccommodation data={roomsCardsData} />
      <ResortFacilities data={ResortFacilitiesData} />
      <CommonSection data={galleryData} />
      <CommonSection data={nearbyData} />
      <OurRoomSection RoomData={roomData} />
      <section className="pb-16 pt-0">
        <Container>
          <div className="w-full max-w-6xl group mx-auto aspect-[16/7] relative rounded-md overflow-hidden">
            <SEOVideo
              src={url}
              title={"Sparv Aulakhs Resort Goa"}
              // autoPlay
              loop
              // preload="auto"
              poster="/images/Background.png"
            />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center">
              <Link
                href="href"
                className="absolute top-5 opacity-0 cursor-pointer group-hover:opacity-100 right-5 px-4 py-3 bg-orange-secondary rounded-sm border group-hover:bg-blue-primary duration-500 ease-in text-white text-lg max-md:text-sm uppercase font-bold"
              >
                Watch on Youtube
              </Link>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 aspect-square flex items-center justify-center opacity-0 cursor-pointer group-hover:opacity-100 bg-orange-secondary border group-hover:bg-blue-primary duration-500 ease-in text-white text-lg max-md:text-sm uppercase font-bold rounded-full">
                <FaPlay />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default page;
