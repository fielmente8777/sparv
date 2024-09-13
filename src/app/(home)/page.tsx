import { Banner } from "@/components";
import { RoomAccommodation } from "./component";
import { roomsCardsData } from "@/db/homePage";

const page = () => {
  return (
    <main>
      <Banner src={"/images/Background.png"} alt={"Banner-img"} />
      <RoomAccommodation data={roomsCardsData} />
    </main>
  );
};

export default page;
