import { Banner } from "@/components";
import { AboutSection, CardSection, CardSection2 } from "./component";

const page = () => {
  const bannerData = {
    src: "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/About+us/3rd+pool+picture+change.jpg",
    title: "THE HOTEL",
    description: "OUR PLACE, OUR SERVICES & OUR TEAM",
  };
  return (
    <main>
      <Banner {...bannerData} />
      <AboutSection />
      <CardSection />
      <CardSection2 />
    </main>
  );
};
export default page;
