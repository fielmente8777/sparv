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
  nearbyData,
} from "@/db/homePage";

const page = () => {
  return (
    <main>
      <Banner src={"/images/Background.png"} alt={"Banner-img"} />
      <RoomAccommodation data={roomsCardsData} />
      <ResortFacilities data={ResortFacilitiesData} />
      <CommonSection data={galleryData} />
      <CommonSection data={nearbyData} />
    </main>
  );
};

export default page;
