"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import React, { ReactNode } from "react";

interface Props {
  children: (item: any) => ReactNode;
  classNameSwiper?: string;
  classNameSwiperSlide?: string;
  data: any[];
  [key: string]: any; // for any additional props
}

const SliderSwip: React.FC<Props> = ({
  children,
  classNameSwiper = "",
  classNameSwiperSlide = "",
  data,
  ...props
}) => {
  return (
    <Swiper  {...props} className={`${classNameSwiper} mySwiper`}>
      {data.map((item, index) => (
        <SwiperSlide key={index} className={`${classNameSwiperSlide}`}>
          {children(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderSwip;
