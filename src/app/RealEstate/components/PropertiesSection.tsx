"use client";

import { SectionWithContainer } from "@/components/sectionComponants";
import { Properties, PropertiesIntro } from "./pageData";
import PropertyCard from "./PropertyCard";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";
import AmenitiesPopup from "./AmenitiesPopup";

interface PropertiesSectionProps {
  intro: PropertiesIntro;
  properties: Properties[];
}

export default function PropertiesSection({
  intro,
  properties,
}: PropertiesSectionProps) {
  return (
    <SectionWithContainer>
      <div className="max_screen_width">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="font-medium text-[16px] md:text-[18px] tracking-[0.2em] uppercase text-[#B58E3E] mt-4">
            {intro.subtitle}
          </p>

          <h2 className="font-p-d text-[24px] md:text-[57px] text-[#00486B] ">
            {intro.title}
          </h2>

          <p className="mt-8 text-[16px] md:text-[16px]  text-[#838383]">
            {intro.description}
          </p>
        </div>
        {/* Mobile Slider */}
        <div className="mt-16 lg:hidden space-y-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} index={index} />
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 mt-16">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
      <AmenitiesPopup />
    </SectionWithContainer>
  );
}
