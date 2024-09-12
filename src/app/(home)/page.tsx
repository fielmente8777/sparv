import { Banner } from "@/components";
import Form from "./components/Form";

export default function Home() {
  return (
    <main>
      {/* <PopupForm /> */}
      <Banner src={"/images/Background.png"} alt={"Banner-img"} />
      <Form />
    </main>
  );
}
