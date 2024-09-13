import { Banner } from "@/components";
import { RoomsCards } from "./component";
import { roomsCardsData } from "@/db/roomPage";

const page = () => {
  return (
    <main>
      <Banner src={"/images/Background.png"} alt={"Banner-img"} />
      <RoomsCards data={roomsCardsData} />
    </main>
  );
};

export default page;
