"use client";
import { Container } from "@/components";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { FC } from "react";
import { Autoplay, Pagination } from "swiper/modules";

interface BannerProps {
  title: string;
  description: string;
  images: string[];
}
const Banner: FC<BannerProps> = ({ title, description, images }) => {
  return (
    <Section
      defaultPadding={false}
      className="banner w-full relative pointer-events-auto"
    >
      <SwiperCarousel
        data={images || []}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={900}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full"
        swiperSlideClassName="w-full relative lg:aspect-[16/8] aspect-[4/5] overflow-hidden"
        renderSlide={(src) => (
          <Image
            src={src}
            alt={title || "Banner"}
            fill
            className="object-cover"
          />
        )}
      />
      <div className="absolute inset-0 w-full h-full flex items-end justify-center pb-36 z-10 bg-black/30 pointer-events-none">
        <Container className="w-full space-y-6">
          <h1 className="text-4xl md:text-[4.5rem] text-center font-bold font-pb text-white">
            {title}
          </h1>
          <div className="">
            <h2 className="text-[1.375rem] text-center font-m text-white">{description}</h2>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Banner;
