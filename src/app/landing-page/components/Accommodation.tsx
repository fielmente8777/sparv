"use client";
import RoomsCard from "@/components/cards/RoomsCard";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { NextButton, PrevButton } from "@/icons/icons";
import { FC } from "react";
import { Navigation, Pagination } from "swiper/modules";

interface AccommodationProps {
  title: string;
  description: string;
  subTitle: string;
  cards: {
    name: string;
    description: string;
    listData: string[];
    img: string[];
    link: {
      label: string;
      href: string;
    };
  }[];
}
const Accommodation: FC<AccommodationProps> = ({
  title,
  subTitle,
  description,
  cards,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F8F7F0] accommodation">
      <div className="w-full space-y-14">
        <div className="space-y-4">
          <SectionHeading title={title} subTitle={subTitle} textCenter />
          <p className="md:text-lg text-center max-w-5xl mx-auto text-light">
            {description}
          </p>
        </div>
        <SwiperCarousel
          data={cards}
          slidesPerView={1}
          spaceBetween={24}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true, el: ".pagination_2" }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          loop={true}
          className="w-full"
          renderSlide={(card) => <RoomsCard {...card} />}
        />
        <div className="w-full flex items-center justify-center gap-10 common -mt-6">
          {/* button prev */}
          <button className="swiper-prev box-shadow rounded-full w-10 aspect-square flex items-center justify-center hover:bg-secondary">
            <PrevButton className="w-6 h-6" />
          </button>
          {/* pagination */}
          <div className="pagination_2 max-md:hidden !w-fit flex items-center justify-center gap-2" />
          {/* button next */}
          <button className="swiper-next bg-primary box-shadow rounded-full w-10 aspect-square flex items-center justify-center hover:bg-secondary">
            <NextButton className="w-6 h-6" />
          </button>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Accommodation;
