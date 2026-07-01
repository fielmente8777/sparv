"use client";

import Image from "next/image";
import { Properties } from "./pageData";
import { LocationIcon } from "@/icons/icons";
import { Autoplay } from "swiper/modules";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { useWebContext } from "@/context-api/WebContext";
import AmenitiesPopup from "./AmenitiesPopup";
import Link from "next/link";
import "@/components/sliders/sliding.title.scss";
interface PropertyCardProps {
  property: Properties;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const {
    openAmenityModal,
    setOpenAmenityModal,
    amenityModalArray,
    setAmenityModalArray,
  } = useWebContext();

  const handleOpenFeaturePopup = (data: any) => {
    // console.log(data)
    // alert("villa features popup opened");
    setAmenityModalArray(data);
    setOpenAmenityModal(true);
  };

  console.log(property, "villa features popup data");

  return (
    <div className="bg-[#F8F7F0] rounded-lg overflow-hidden">
      <div className="">
        <SwiperCarousel
          data={property.images}
          swiperSlideClassName="w-full"
          autoplay={{ delay: 1000, disableOnInteraction: false }}
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
          //   src={property.images}
          //   alt={property.title}
          //   fill
          //   className="w-full h-auto object-cover"
          // /> */}
      </div>

      <div className="p-4 md:p-6">
        <div className="flex items-center gap-2 mb-6">
          <LocationIcon />

          <span className="text-[12px] md:text-[18px] uppercase text-[#B58E3E]">
            {property.location}
          </span>
        </div>

        <h3 className="font-p-d text-[#00486B] text-[26px] md:text-[32px] ">
          {property.title}
        </h3>

        <div className="md:flex flex-wrap gap-5 mt-5 hidden">
          {property.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#B58E3E] px-2 py-1 text-[14px] text-[#00486B] "
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={`relative md:hidden overflow-hidden py-4 `}>
          <div className="marquee-wrapper">
            <div className="marquee-track flex gap-5">
              {property.tags.map((tag) => (
                <span
                  key={tag}
                  className="whitespace-nowrap border border-[#B58E3E] px-2 py-1 text-[14px] text-[#00486B] "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-6 text-[16px] text-[#7D7D7D] ">
          {property.description}
        </p>

        <div className="flex items-center justify-between mt-6">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-[#00486B] px-2 md:px-8 py-2 text-[14px] md:text-[18px] text-[#00486B] cursor-pointer"
          >
            ENQUIRE NOW
          </Link>
          <button
            onClick={() => handleOpenFeaturePopup(property.villaFeaturesPopUp)}
            className="text-[14px] md:text-[18px] uppercase text-[#B58E3E]  border-b border-[#B58E3E]"
          >
            {index < 2 ? "VILLA FEATURES" : "FEATURES"}
          </button>
        </div>
      </div>
    </div>
  );
}
