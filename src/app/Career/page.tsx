import { Banner } from "@/components";
import Form from "./components/Form";
const page = () => {
  return (
    <main>
      {/* <PopupForm /> */}
      <Banner src={"/images/Background.png"} alt={"Banner-img"} />
      <Form />
    </main>
  );
};
export default page;
