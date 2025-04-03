"use client";

import { Container, Section } from "@/components";
import SliderSwip from "@/components/SliderSwip";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

const AboutSection = () => {
  return (
    <Section className="lg:py-14 lg:-mt-60 lg:z-10 lg:relative">
      <Container className="bg-white">
        <div className="flex flex-col items-center justify-center gap-6 py-12">
          <h2 className="text-3xl font-normal font-p-d capitalize text-[#222] text-center">
            About Sparv Hotel
          </h2>
          <div className="w-full max-w-32 h-[1.5px] relative bg-zinc-300 my-3">
            <div className="absolute transform left-1/2  top-[-600%] -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-xl bg-zinc-300" />
          </div>
        </div>
        <div className="w-full max-w-5xl mx-auto">
          <SliderSwip
            data={image}
            classNameSwiperSlide="w-full"
            // autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={900}
            spaceBetween={0}
            slidesPerView={1}
            modules={[Autoplay, Navigation, EffectFade]}
            effect="fade"
            navigation
          >
            {(item) => (
              <div
                key={item}
                className="w-full relative aspect-[4/1.91] max-md:aspect-square overflow-hidden"
              >
                <Image
                  src={item}
                  alt="hotel"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </SliderSwip>
          <div className="text-justify">
            <p className="mt-4 text-base font-light text-neutral-800 max-md:max-w-full">
              In luxury’s lap at SPARV Aulakh Resort, Goa, witness the relaxing
              and laid-back life that is so characteristic of this sunny beach
              state. Located in Mandrem Rd, near the White Church on the North
              coast of Goa and overlooking the Arabian Sea, this resort in
              Mandrem, Goa will slow your time to a tranquil tempo. 17 Km and
              approximately 100 minutes from the city centre, SPARV beach resort
              in Goa expands over multiple acres of lush greenery, divided into
              the main hotel building with Standard, Deluxe and Premium category
              rooms. This accommodation in Mandrem coupled with a convenient
              location, and easy access to the city’s must-see destinations,
              makes for a perfect romantic or family holiday.
            </p>
            <p className="mt-4 text-base font-light text-neutral-800 max-md:max-w-full">
              <strong>Facilities:</strong>
            </p>
            <p className="mt-4 text-base font-light text-neutral-800 max-md:max-w-full">
              A bunch of different services are available at Sparv Aulakh Resort
              to ensure your time is nothing but great. You can cool off in our
              pool and soak up the Goan sun, which makes it the perfect place to
              relax. Our on-site restaurant&#39;s skilled chefs make a wide
              range of delicious food that will take your taste buds on a trip.
              At SPARV hospitality, our Infinity pool is the perfect place to
              relax by the poolside and unwind on a sunbed.
            </p>
            <p className="mt-4 text-base font-light text-neutral-800 max-md:max-w-full">
              Getting ready for a meeting or event? At SPARV resort in Mandrem,
              our fully-equipped conference rooms are the perfect place for
              meetings to go well. Our kids&apos; play area is safe and fun,
              which is great for families with kids. 
              {/* Take advantage of the ease
              of room service available 24 hours a day, seven days a week. */}
            </p>
            <p className="mt-4 text-base font-light text-neutral-800 max-md:max-w-full">
              Stay connected during your stay by using the free Wi-Fi
              that&apos;s offered all over the SPARV beach resort. Also, our
              helpful service team is always ready to help you plan your trip
              and find the best things to do in Goa so you can make the most of
              your time there. We want your stay at Sparv Aulakh Resort to be
              smooth and enjoyable, and we have many services to meet your
              needs.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;

const image = [
  "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated2/about+us/Hotel+Features.jpg",
  "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/DJI_0694.jpg",
  "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/updatedImage/About+us/3rd+pool+picture+change.jpg",
  "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated2/about+us/Hotel+Information.jpg",
  "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/Photos/lyamin.pro-34.jpg",
  "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/Photos/lyamin.pro-31.jpg",
  "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/Hotel/DSCF4137-HDR.jpg",
  "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/RUAN0030.jpg",
  "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/Photos/lyamin.pro-39.jpg",
  "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/RUAN9852.jpg",
  "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/PhotoshootPictures/Photos/lyamin.pro-12.jpg",
];
