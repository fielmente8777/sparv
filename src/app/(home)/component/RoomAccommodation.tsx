import { Container, Section } from "@/components";
import CardWithSlider from "@/components/CardWithSlider";
import Link from "next/link";

interface Props {
  data: {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    time: string;
    img: string[];
  }[];
}
const RoomAccommodation = ({ data }: Props) => {
  return (
    <Section>
      <Container>
        <div className="flex lg:justify-between gap-2 lg:items-center">
          <h2 className="text-3xl max-md:text-xl font-normal font-p-d uppercase text-orange-primary pe-2">
            Room <span className="text-black font-p-d">Accommodation</span>
          </h2>
          <Link
            href="/Rooms/"
            className="text-gray-primary max-md:text-sm px-3 max-md:px-1 py-1 border border-gray-primary font-normal uppercase font-p-d hover:bg-gray-primary hover:text-white duration-500 rounded-sm"
          >
            View All
          </Link>
        </div>
        <p className="text-lg max-md:text-base font-medium font-p-d text-[#222] mt-9">
          Utmost Luxury at Mandrem Retreat Beach Resort
        </p>
      </Container>
      <Container>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10">
          {data.map((item, index) => (
            <div
              className="shadow-2xl group group-hover:scale-105 duration-500"
              key={index}
            >
              <CardWithSlider
                title={item.name}
                data={item.img}
                label={"Book Now"}
                currency={item.currency}
                description={item.description}
                price={item.price}
                time={item.time}
              />
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-blue-primary py-56 -mt-80 "></div>
    </Section>
  );
};

export default RoomAccommodation;
