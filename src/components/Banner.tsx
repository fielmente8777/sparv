"use client";
import Image from "next/image";
import Container from "./Container";
import { BannerProps } from "@/types/type";
import SliderSwip from "./SliderSwip";
import { Autoplay } from "swiper/modules";

const Banner: React.FC<BannerProps> = ({
  src,
  title,
  description,
  data,
  imgSlider = false,
}) => {
  console.log(data);
  return (
    <section className="lg:pb-10 pb-5 font-p-d max-w-[1600px] mx-auto w-full">
      {imgSlider ? (
        <SliderSwip
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          // loop={true}
          slidesPerView={1}
          modules={[Autoplay]}
          data={data || []}
        >
          {(item) => (
            <div className="w-full lg:aspect-[4/1.91] aspect-[4/8] relative">
              <Image
                src={item.src}
                alt={item.title || "Banner"}
                fill
                className="object-cover"
              />

              {item.title && (
                <div className="absolute top-0 left-0 w-full h-full flex lg:justify-center lg:items-end bg-black/40 lg:px-[3.37rem] px-4 py-6">
                  <div className="w-full h-[70%] max-sm:h-full flex justify-center items-center">
                    <Container>
                      <h1 className="text-white tracking-wider lg:text-5xl fed-down text-2xl font-semibold text-center font-p-d">
                        {item.title}
                      </h1>
                      {item.description && (
                        <p className="text-white lg:text-lg text-base font-light text-center mt-8 fed-up">
                          {item.description}
                        </p>
                      )}
                    </Container>
                  </div>
                </div>
              )}
            </div>
          )}
        </SliderSwip>
      ) : (
        <div className="w-full lg:aspect-[4/1.4] aspect-[1/.6] relative">
          <Image
            src={src || "/images/Background.png"}
            alt={`${title || "Banner"}`}
            fill
            className="object-cover"
          />

          {title && (
            <div className="absolute top-0 left-0 w-full h-full flex lg:justify-center lg:items-end bg-black/40 lg:px-[3.37rem] px-4 py-6">
              <div className="w-full h-[70%] max-md:h-full flex justify-center lg:pt-12 max-md:items-end">
                <Container>
                  <h1 className="text-white tracking-wider lg:text-3xl text-2xl font-medium text-center font-p-d">
                    {title}
                  </h1>
                  {description && (
                    <p className="text-white lg:text-lg text-base font-light text-center mt-5">
                      {description}
                    </p>
                  )}
                </Container>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Banner;
