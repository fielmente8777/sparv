"use client";
import TestimonialCard from "@/components/cards/TestimonalCard";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { LazyLoadedVideo } from "@/components/Video";
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
  const url =
    "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/Sparv+Aulakhs+Resort+Goa.mp4";

  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-6 grid-cols-1 gap-6 items-center">
        <div className="relative md:aspect-[4/2.4]  aspect-video w-full md:col-span-4">
          {/* <Image
            src={src}
            alt={title}
            className="object-cover"
            fill
            sizes="100vw"
          /> */}
          <LazyLoadedVideo
            src={url}
            poster="/images/Background.png"
            muted
            loop
            autoPlay
            controls={false}
          />
        </div>
        <div className="max-w-lg md:ml-auto w-full space-y-7 common md:col-span-2">
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
