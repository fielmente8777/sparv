"use client";

import Image from "next/image";
import { Properties } from "./pageData";
import { LocationIcon } from "@/icons/icons";
import { Autoplay } from "swiper/modules";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";

interface PropertyCardProps {
  property: Properties;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="bg-[#F8F7F0] rounded-lg overflow-hidden">
      <div className="">
        <SwiperCarousel
          data={property.images}
          swiperSlideClassName="w-full"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={900}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          modules={[Autoplay]}
          renderSlide={(src: string, index) => (
            <div className="relative h-[350px] w-full overflow-hidden">
              <Image
                title="click to zoom"
                src={src}
                alt={"room image"}
                fill
                className="object-cover group-[&:hover]:scale-105 duration-500 cursor-pointer"
                //   onClick={() => openImagePopup(data, index, title)}
              />
            </div>
          )}
        />
        {/* <Image
          src={property.images}
          alt={property.title}
          fill
          className="w-full h-auto object-cover"
        /> */}
      </div>

      <div className="p-4 md:p-6">
        <div className="flex items-center gap-2 mb-6">
          <LocationIcon />

          <span className="text-[18px] uppercase text-[#B58E3E]">
            {property.location}
          </span>
        </div>

        <h3 className="font-p-d text-[#00486B] text-[32px] ">
          {property.title}
        </h3>

        <div className="flex flex-wrap gap-5 mt-5">
          {property.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#B58E3E] px-2 py-1 text-[14px] text-[#00486B] "
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-6 text-[16px] text-[#7D7D7D] ">
          {property.description}
        </p>

        <div className="flex items-center justify-between mt-6">
          <button className="border border-[#00486B] px-4 py-2 text-[18px] text-[#00486B]">
            ENQUIRE NOW
          </button>

          <button className="text-[18px] uppercase text-[#B58E3E]  border-b border-[#B58E3E]">
            VILLA FEATURES
          </button>
        </div>
      </div>
    </article>
  );
}
