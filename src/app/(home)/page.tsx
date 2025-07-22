import { Banner } from "@/components";
import {
  CommonSection,
  OurRoomSection,
  ResortFacilities,
  RoomAccommodation,
  VideoCompo,
} from "./component";
import {
  roomsCardsData,
  ResortFacilitiesData,
  galleryData,
  nearbyData,
  roomData,
} from "@/db/homePage";
import { bannerData } from "@/db/homePage";

const page = () => {
  const url =
    "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/Sparv+Aulakhs+Resort+Goa.mp4";

  return (
    <main>
      <Banner data={bannerData} imgSlider />

      <RoomAccommodation data={roomsCardsData} />
      <ResortFacilities data={ResortFacilitiesData} />
      <CommonSection data={galleryData} />
      <CommonSection data={nearbyData} />
      <OurRoomSection RoomData={roomData} />
      <VideoCompo
        url={url}
        youtubeUrl="https://youtu.be/ayDWUmw4X18"
        title="Sparv Aulakhs Resort"
        poster="/images/Background.png"
      />
    </main>
  );
};

export default page;
