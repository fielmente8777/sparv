import { Banner } from "@/components";
import { ResortFacilities, RoomAccommodation } from "./component";
import { roomsCardsData, ResortFacilitiesData } from "@/db/homePage";

const page = () => {
  return (
    <main>
      <Banner src={"/images/Background.png"} alt={"Banner-img"} />
      <RoomAccommodation data={roomsCardsData} />
      <ResortFacilities data={ResortFacilitiesData} />
    </main>
  );
};

export default page;
