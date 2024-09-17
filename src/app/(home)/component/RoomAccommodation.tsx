"use client";
import { Container, Section } from "@/components";
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
const RoomAccommodation = ({ data }: Props) => {
  return (
    <Section>
      <Container>
        <div className="flex lg:justify-between gap-2 lg:items-center">
          <h2 className="text-3xl max-md:text-xl font-normal font-p-d uppercase text-orange-primary pe-2">
            Room <span className="text-black font-p-d">Accommodation</span>
          </h2>
          <div className="max-md:w-20 flex">
            <Link
              href="/Rooms/"
              className="text-gray-primary max-md:text-sm px-3 max-md:px-1 py-1 border border-gray-primary font-normal h-max uppercase font-p-d hover:bg-gray-primary hover:text-white duration-500 rounded-sm"
            >
              View All
            </Link>
          </div>
        </div>
        <p className="text-lg max-md:text-base font-medium font-p-d text-[#222] mt-9">
          Utmost Luxury at Mandrem Retreat Beach Resort
        </p>
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
