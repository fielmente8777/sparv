import { Banner } from "@/components";
import GalleryView from "./component/GalleryView";
import { galleryData } from "@/db/gallery";

const page = () => {
  const bannerData = {
    src: "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/Gallery/Gallery+Banner.jpg",
    title: "GALLERY",
    description: "WHERE OPEN SKIES BECOME YOUR HORIZON",
  };
  return (
    <main>
      <Banner {...bannerData} />
      <GalleryView data={galleryData} />
    </main>
  );
};

export default page;
