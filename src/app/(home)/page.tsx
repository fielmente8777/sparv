import { Banner } from "@/components";
import { RoomAccommodation } from "./component";

const page = () => {
  return (
    <main>
      <Banner src={"/images/Background.png"} alt={"Banner-img"} />
      <RoomAccommodation />
    </main>
  );
};

export default page;
