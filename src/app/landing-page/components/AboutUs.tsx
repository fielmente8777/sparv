import { SectionWithContainer } from "@/components/sectionComponants";
import { FC } from "react";

interface AboutUsProps {
  title: string;
  subTitle: string;
  description: string;
}
const AboutUs: FC<AboutUsProps> = ({ title, subTitle, description }) => {
  return (
    <SectionWithContainer>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-lg font-m text-orange-secondary">{title}</h2>
          <h3 className="text-3xl md:text-5xl font-p-d text-dark">{subTitle}</h3>
        </div>
        <p className="text-lg font-m text-light text-center ">{description}</p>
      </div>
    </SectionWithContainer>
  );
};

export default AboutUs;
