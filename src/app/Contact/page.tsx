import { Banner } from "@/components";
import { CommonSection } from "./components";
import { contactPagedata1, contactPagedata2 } from "@/db/data";

const page = () => {
  const bannerData = {
    src: "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/RUAN9844.jpg",
    title: "Contact",
    description: "OUR PLACE, OUR SERVICES & OUR TEAMS",
  };
  return (
    <main>
      <Banner {...bannerData} />
      <CommonSection {...contactPagedata1} form />
{/*       <CommonSection {...contactPagedata2} form={false} /> */}
    </main>
  );
};

export default page;
