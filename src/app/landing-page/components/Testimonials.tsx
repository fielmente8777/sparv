"use client";
import TestimonialCard from "@/components/cards/TestimonalCard";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { FC } from "react";
import { Autoplay, Pagination } from "swiper/modules";

interface TestimonialsProps {
  title: string;
  subTitle: string;
  src: string;
  cards: {
    name: string;
    desc: string;
  }[];
}
const Testimonials: FC<TestimonialsProps> = ({
  title,
  subTitle,
  src,
  cards,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 max-md:gap-6 items-center">
        <div className="relative aspect-[4/3]  md:aspect-[4/5]">
          <Image
            src={src}
            alt={title}
            className="object-cover"
            fill
            sizes="100vw"
          />
        </div>
        <div className="max-w-lg md:ml-auto w-full space-y-7 common">
          <SectionHeading title={title} subTitle={subTitle} />
          <div className="relative aspect-square max-w-24 w-full ">
            <Image
              src={
                "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/la_mount_ladakh/icon.webp"
              }
              alt={title}
              className="object-contain rounded-lg"
              fill
              sizes="100vw"
            />
          </div>
          <SwiperCarousel
            data={cards}
            slidesPerView={1}
            spaceBetween={24}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true, el: ".pagination_3" }}
            renderSlide={(item, index) => (
              <TestimonialCard key={index} {...item} />
            )}
          />
          <div className="pagination_3 flex items-center justify-center "></div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;
