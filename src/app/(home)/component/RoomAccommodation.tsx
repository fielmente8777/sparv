"use client";
import { Container, Section, SectionHeading } from "@/components";
import CardWithSlider from "@/components/CardWithSlider";
import SliderSwip from "@/components/SliderSwip";
import Link from "next/link";
import { Autoplay } from "swiper/modules";

interface Props {
  data: {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    time: string;
    href: string;
    img: string[];
  }[];
}

const headingData = {
  title: "Rooms",
  span: "Accommodation",
  description: "Utmost Luxury at Mandrem Retreat Beach Resort",
  label: "view all",
  href: "/Rooms/",
};
const RoomAccommodation = ({ data }: Props) => {
  return (
    <Section>
      <Container>
        <SectionHeading {...headingData} />
      </Container>
      <Container>
        <div className="grid lg:grid-cols-3 max-md:hidden gap-6 mt-10">
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
                href={item.href}
              />
            </div>
          ))}
        </div>
        <div className="block lg:hidden mt-9">
          <SliderSwip
            data={data}
            modules={[Autoplay]}
            // autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={1000}
            loop
            slidesPerView={1}
            spaceBetween={10}
            classNameSwiper="shadow-2xl group group-hover:scale-105 duration-500"
          >
            {(item) => (
              <CardWithSlider
                title={item.name}
                data={item.img}
                label={"Book Now"}
                currency={item.currency}
                description={item.description}
                price={item.price}
                time={item.time}
                href={item.href}
                min_height
              />
            )}
          </SliderSwip>
        </div>
      </Container>
      <div className="bg-blue-primary py-56 max-md:py-48 -mt-80  "></div>
    </Section>
  );
};

export default RoomAccommodation;
