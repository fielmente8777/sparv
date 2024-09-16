"use client";
import Image from "next/image";
import SliderSwip from "./SliderSwip";
import Link from "next/link";
import { Autoplay } from "swiper/modules";

interface CardWithSliderProps {
  title?: string;
  description?: string;
  price?: number;
  currency?: string;
  time?: string;
  label?: string;
  data?: any;
  href?: string; // Add href as a prop
}

const CardWithSlider: React.FC<CardWithSliderProps> = ({
  data,
  title,
  description,
  price,
  time,
  label,
  currency,
  href, // Destructure href prop
}) => {
  return (
    <article className="group-hover:scale-[1.03] duration-500">
      <SliderSwip
        data={data}
        classNameSwiperSlide="w-full"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={900}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
      >
        {(src) => (
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={src}
              alt={title || "room image"}
              fill
              className="object-cover group-[&:hover]:scale-105 duration-500"
            />
          </div>
        )}
      </SliderSwip>
      <div className="w-full bg-[#EEEEEE] p-3">
        <div className="flex flex-col gap-1 p-5">
          <h3 className="text-2xl font-semibold font-p-d text-blue-primary">
            {title || "title"}
          </h3>
          <p className="text-base font-normal text-[#222] mt-3">
            {description || "description"}
          </p>
        </div>
        <div className="w-full flex justify-between items-center px-5 pb-5">
          <div className="flex flex-col">
            <h3 className="text-2xl font-normal uppercase text-gray-primary">
              {currency || "$"} {price || "100"}
            </h3>
            <p className="text-[#222]">{time || "per night"}</p>
          </div>
          <Link
            href={href || "#"}
            className="text-white px-5 py-4 font-normal uppercase font-p-d bg-blue-primary hover:bg-[#222] duration-500 rounded-sm"
          >
            {label || "Book Now"}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CardWithSlider;
