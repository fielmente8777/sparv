import { Banner } from "@/components";
import {
  CommonSection,
  ResortFacilities,
  RoomAccommodation,
} from "./component";
import {
  roomsCardsData,
  ResortFacilitiesData,
  galleryData,
} from "@/db/homePage";

const page = () => {
  return (
    <main>
      <Banner src={"/images/Background.png"} alt={"Banner-img"} />
      <RoomAccommodation data={roomsCardsData} />
      <ResortFacilities data={ResortFacilitiesData} />
      <CommonSection data={galleryData} />
    </main>
  );
};

export default page;
