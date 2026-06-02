import { SectionWithContainer } from "@/components/sectionComponants";
import { Properties, PropertiesIntro } from "./pageData";
import PropertyCard from "./PropertyCard";

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
      <div className="max_width">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="font-medium text-[18px] tracking-[0.2em] uppercase text-[#B58E3E]">
            {intro.subtitle}
          </p>

          <h2 className="font-p-d text-[57px] text-[#00486B] ">
            {intro.title}
          </h2>

          <p className="mt-8 text-[16px]  text-[#838383]">
            {intro.description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
}
