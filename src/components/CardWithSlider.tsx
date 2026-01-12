"use client";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import SwiperCarousel from "./sliders/SwiperCarousel";

interface CardWithSliderProps {
  title?: string;
  description?: string;
  price?: number;
  currency?: string;
  time?: string;
  label?: string;
  data?: any;
  Starting?: boolean;
  min_height?: boolean;
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
  Starting = false,
  min_height = false,
  href, // Destructure href prop
}) => {
  const { openImagePopup } = useWebContext();
  return (
    <article className="group-hover:scale-[1.03] duration-500">

      <SwiperCarousel
        data={data}
        swiperSlideClassName="w-full"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={900}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        renderSlide={(src: string, index) => (
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              title="click to zoom"
              src={src}
              alt={title || "room image"}
              fill
              className="object-cover group-[&:hover]:scale-105 duration-500 cursor-pointer"
              onClick={() => openImagePopup(data, index, title)}
            />
          </div>
        )}
      />

      <div className="w-full bg-[#EEEEEE] p-3">
        <div className="flex flex-col gap-1 p-3">
          <h3 className="text-2xl font-semibold font-p-d text-blue-primary">
            {title || "title"}
          </h3>
          <p
            className={`text-base max-md:min-h-11 text-justify font-normal max-md:text-sm text-[#222] mt-3`}
          >
            {description || "description"}
          </p>
        </div>
        <div className="w-full flex justify-between items-center px-3 pb-5">
          <div className="flex flex-col">
            <h3 className="text-2xl max-md:text-md font-light text-gray-primary">
              {Starting && "Starting"}{" "}
              <span className="uppercase">{currency || "$"}</span>{" "}
              {price || "100"}
            </h3>
            <p className="text-[#222]">{time || "per night"}</p>
          </div>
          <div className="w-max max-md:w-32">
            <Link
              target="_blank"
              href={href || "#"}
              className="text-white lg:px-5 py-4 font-normal uppercase font-p-d bg-blue-primary hover:bg-[#222] duration-500 rounded-sm flex justify-center items-center max-md:text-sm"
            >
              {label || "Book Now"}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardWithSlider;
