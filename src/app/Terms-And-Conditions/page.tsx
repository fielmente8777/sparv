import { Banner, Container, Section } from "@/components";
import { TermsAndConditions } from "@/db/pagesdata";

const page = () => {
  const bannerData = {
    src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/Hotel/DSCF7482-HDR.jpg",
    title: "Terms & Conditions",
    description: "THE PLACE, OUR SERVICES & OUR TEAM",
  };
  return (
    <main>
      <Banner {...bannerData} />
      <Section className="lg:py-14 -mt-60 z-10 relative">
        <Container className="bg-white">
          <div className="lg:py-14">
          <h2 className="text-center text-3xl font-light font-p-d">
            Terms & Conditions
          </h2>
          </div>
          <div
            className="pagedata px-16"
            dangerouslySetInnerHTML={{ __html: TermsAndConditions }}
          />
        </Container>
      </Section>
    </main>
  );
};
export default page;
