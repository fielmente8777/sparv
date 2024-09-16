import { Banner } from "@/components";
import Form from "./components/Form";
const page = () => {
  const bannerData = {
    src: "/images/Background.png",
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
