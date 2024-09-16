import { Banner, Container, Section } from "@/components";
import { privacyPolicy } from "@/db/pagesdata";

const page = () => {
  const bannerData = {
    src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/Hotel/DSCF3292.jpg",
    title: "Privacy Policy",
    description: "THE PLACE, OUR SERVICES & OUR TEAM",
  };
  return (
    <main>
      <Banner {...bannerData} />
      <Section className="lg:py-14 -mt-60 z-10 relative">
        <Container className="bg-white">
          <div className="flex flex-col items-center justify-center gap-6 py-12">
            <h2 className="text-3xl font-normal font-p-d capitalize text-[#222] text-center">
              Privacy Policy
            </h2>
            <div className="w-full max-w-32 h-[1.5px] relative bg-zinc-300 my-3">
              <div className="absolute transform left-1/2  top-[-600%] -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-xl bg-zinc-300" />
            </div>
          </div>
          <div
            className="pagedata px-16 mb-4"
            dangerouslySetInnerHTML={{ __html: privacyPolicy }}
          />
        </Container>
      </Section>
    </main>
  );
};
export default page;
