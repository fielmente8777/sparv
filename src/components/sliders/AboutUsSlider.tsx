"use client";
import { FC } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
import Image from "next/image";
import { NextButton, PrevButton } from "@/icons/icons";
// import { BtnNextIcon, BtnPrevIcon } from "@/utils/icons";

const AboutUsSlider: FC<{ images: string[] }> = ({ images }) => {
  return (
    <div>
      <SwiperCarousel
        data={images || []}
        modules={[EffectCoverflow, Navigation]}
        navigation={{
          nextEl: ".about-next",
          prevEl: ".about-prev",
        }}
        className="w-full"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0, // Keep flat
          stretch: 20, // Don't stretch
          depth: 300, // Controls scale & blur of side slides
          modifier: 2.5, // Makes the central slide more prominent
          slideShadows: true, // Shadow adds blur illusion
        }}
        speed={800}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        }}
        renderSlide={(src) => (
          <div className="w-full relative aspect-[4/2.5]">
            <Image src={src} alt="image" fill className="object-cover" />
          </div>
        )}
      />
      <div className="flex items-center justify-center gap-4 mt-8">
        <button className="about-prev w-10 aspect-square rounded-full flex items-center justify-center box-shadow">
          <PrevButton className="w-6 h-6" />
        </button>
        <button className="about-next w-10 aspect-square rounded-full flex items-center justify-center box-shadow">
          <NextButton className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AboutUsSlider;
