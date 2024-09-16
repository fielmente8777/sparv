import { Banner } from "@/components";
import { RoomAmenities, RoomsCards } from "./component";
import { amenities, data2, roomsCardsData } from "@/db/roomPage";

const page = () => {
  const bannerData = {
    src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated3/RUAN9935+copy.jpg",
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
