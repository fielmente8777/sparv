import { Banner, Container, Section } from "@/components";
import { CancellationPolicy } from "@/db/pagesdata";

const page = () => {
  const bannerData = {
    src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/Hotel/DSCF7575-HDR.jpg",
    title: "Cancellation Policy",
    description: "THE PLACE, OUR SERVICES & OUR TEAM",
  };
  return (
    <main>
      <Banner {...bannerData} />
      <Section className="lg:py-14 -mt-60 z-10 relative">
        <Container className="bg-white">
          <div className="lg:py-14">
            <h2 className="text-center text-3xl font-light font-p-d">
              Cancellation Policy
            </h2>
          </div>
          <div
            className="pagedata px-16"
            dangerouslySetInnerHTML={{ __html: CancellationPolicy }}
          />
        </Container>
      </Section>
    </main>
  );
};
export default page;
