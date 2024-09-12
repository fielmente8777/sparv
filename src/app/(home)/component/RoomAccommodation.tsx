import { Container, Section } from "@/components";
import CardWithSlider from "@/components/CardWithSlider";
import Link from "next/link";

const RoomAccommodation = ({ data = [] }) => {
  return (
    <Section>
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-normal font-p-d uppercase text-orange-primary">
            Room <span className="text-black font-p-d">Accommodation</span>
          </h2>
          <Link
            href="/Rooms/"
            className="text-gray-primary px-3 py-1 border border-gray-primary font-normal uppercase font-p-d hover:bg-gray-primary hover:text-white duration-500 rounded-sm"
          >
            View All
          </Link>
        </div>
        <p className="text-lg font-medium font-p-d text-[#222] mt-9">
          Utmost Luxury at Mandrem Retreat Beach Resort
        </p>
      </Container>
      <Container>
        <div className="grid grid-cols-3 gap-5 mt-10">
          {data.map((item, index) => (
            <CardWithSlider key={index} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default RoomAccommodation;
