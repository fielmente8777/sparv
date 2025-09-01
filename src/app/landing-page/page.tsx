import { SectionWithContainer } from "@/components/sectionComponants";
import {
  AboutUs,
  Accommodation,
  Banner,
  Gallery,
  Testimonials,
} from "./components";
import { landingPageData } from "./landingPageData";
import Form1 from "@/components/forms/Form1";

export default function LandingPage() {
  return (
    <main>
      <Banner {...landingPageData.bannerData} />
        <SectionWithContainer sectionClassName="bg-[#1A1719] py-8" defaultPadding={false} >
        <Form1 />
      </SectionWithContainer>
      <AboutUs {...landingPageData.aboutUsData} />
      <Accommodation {...landingPageData.accommodationData} />
      <Gallery {...landingPageData.galleryData} />
      <Testimonials {...landingPageData.testimonialsData} />
    </main>
  );
}
