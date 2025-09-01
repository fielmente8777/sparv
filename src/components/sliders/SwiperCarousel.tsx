"use client";

import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperProps } from "swiper/react";

// @import swiperr css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

interface SwiperCaroselProps<T> extends SwiperProps {
  data: T[];
  className?: string;
  swiperSlideClassName?: string;
  renderSlide: (item: T, index?: number) => ReactNode;
}

const SwiperCarousel = <T,>({
  data,
  className,
  swiperSlideClassName,
  renderSlide,
  ...props
}: SwiperCaroselProps<T>) => {
  return (
    <Swiper className={className} {...props}>
      {data?.map((item, index) => (
        <SwiperSlide className={swiperSlideClassName} key={index}>
          {renderSlide(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
