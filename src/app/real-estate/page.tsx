import Enquire from "./components/Enquire";
import HeroSection from "./components/HeroSection";
import { realEstatePageData } from "./components/pageData";
import PropertiesSection from "./components/PropertiesSection";

export default function RealEstate() {
  return (
    <>
      <HeroSection data={realEstatePageData.hero} />

      <PropertiesSection
        intro={realEstatePageData.propertiesIntro}
        properties={realEstatePageData.properties}
      />
      <Enquire data={realEstatePageData.enquire} />
    </>
  );
}
