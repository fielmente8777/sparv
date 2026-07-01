"use client";
import { RightTickIcon } from "@/icons/icons";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import SwiperCarousel from "../sliders/SwiperCarousel";
import { useWebContext } from "@/context-api/WebContext";

interface RoomsCardProps {
  name: string;
  description: string;
  listData: string[];
  img: string[];
  link: {
    label: string;
    href: string;
  };
}

const RoomsCard: React.FC<RoomsCardProps> = ({
  name: title,
  img: images,
  description,
  listData: listOfServices,
  link,
}) => {
  const { WhatsAppClick } = useWebContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 w-full">
      <div className="md:col-span-5 w-full common2 relative">
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          spaceBetween={24}
          modules={[Navigation]}
          navigation={true}
          loop={true}
          className="w-full"
          renderSlide={(image) => (
            <div className="relative w-full md:aspect-[4/2.2] aspect-[4/3]">
              <Image
                src={image}
                alt={title}
                className="object-cover rounded-tl-lg md:rounded-bl-lg max-md:rounded-tr-lg"
                fill
              />
            </div>
          )}
        />
      </div>
      <div className="md:col-span-2 flex flex-col gap-4 md:py-9 md:px-8 px-4 py-6 bg-bg1 md:border-y max-md:border-x md:border-r max-md:border-b  border-[#131313] max-md:rounded-b-lg md:rounded-tr-lg md:rounded-br-lg">
        <div className="">
          <h3 className="text-primary capitalize md:text-[2.5rem] font-p-d text-[1.5rem]/[2rem]">
            {title}
          </h3>
        </div>

        {/* title & list */}
        <p className="text-light md:text-lg">{description}</p>
        {/* list of services */}
        {listOfServices && (
          <ul className="">
            {listOfServices.map((item, index) => (
              <li key={index} className="text-light flex items-center gap-2">
                <span className="text-secondary">
                  <RightTickIcon />
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
        )}
        <button
          // href={link.href}
          // target="_blank"
          // rel="noreferrer"
          onClick={WhatsAppClick}
          className="px-8 py-3 bg-blue-primary w-fit text-white flex items-center justify-center gap-2 hover:bg-white hover:text-blue-primary border border-blue-primary transition-all duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-lg"
        >
          {link.label}
        </button>
      </div>
    </div>
  );
};

export default RoomsCard;
