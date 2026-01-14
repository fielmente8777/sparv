import { Banner } from "@/components";
import Form from "./components/Form";
import { newImagesLink } from "@/db/constent";
const page = () => {
  const bannerData = {
    src: newImagesLink + "outer-and-other/_6__5770.webp",
    title: "Career",
  };
  return (
    <main>
      <Banner {...bannerData} />

      <Form />
    </main>
  );
};
export default page;
