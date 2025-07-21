import { Banner } from "@/components";
import { RoomAmenities, RoomsCards } from "./component";
import { amenities, data2, roomsCardsData } from "@/db/roomPage";

const page = () => {
  const bannerData = {
    src: "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/RUAN9935.jpg",
    title: "ROOMS & SUITES",
    description: "WHERE COMFORT MEETS CONVENIENCE",
  };
  return (
    <main>
      <Banner {...bannerData} />
      <RoomsCards data={roomsCardsData} />
      <RoomAmenities data={amenities} data2={data2}/>
    </main>
  );
};

export default page;
