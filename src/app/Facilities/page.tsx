import { Banner, Card, Container, Section } from "@/components";
import { OutLineDishWhite } from "@/icons/icons";
import { facilityData } from "@/db/homePage";
import { TfiAlarmClock } from "react-icons/tfi";

const page = () => {
  const bannerData = {
    src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/sparvhospitality/image/newUpdated2/Facilties/Facilities+Banner.jpg",
    title: "FACILITIES",
    description: "ELEVATING YOUR EXPERIENCE",
  };
  const data = facilityData;
  return (
    <main>
      <Banner {...bannerData} />
      <Section className="lg:py-14 lg:-mt-32 lg:z-10 lg:relative">
        <Container>
          <div className="lg:grid lg:grid-cols-4 grid-cols-1">
            <div className="col-span-1 lg:-ms-20 flex flex-col items-center justify-center gap-12 max-md:hidden">
              <div className="w-[120px] aspect-square bg-blue-primary -rotate-45">
                <div className="w-full h-full flex flex-col text-white items-center justify-center rotate-45">
                  <span>
                    <OutLineDishWhite />
                  </span>
                  <span className="text-xl font-light">Dining</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TfiAlarmClock className="text-5xl font-light text-blue-primary" />
                <span className="text-xl font-light uppercase">Event</span>
              </div>
            </div>
            <div className="col-span-3 grid lg:grid-cols-2 grid-cols-1 gap-7 max-md:gap-4 bg-white lg:-ms-16 lg:p-12 max-md:pt-0 max-md:pb-8">
              <div>
                <h2 className="text-2xl max-md:text-xl font-normal font-p-d uppercase text-[#222] pe-2">
                  Restaurant
                </h2>
                <p className="text-base font-light text-gray-primary text-justify lg:mt-9 mt-4">
                  Dining at SPARV Aulakh Resort is a delightful experience. Our
                  restaurant is open throughout the day, serving breakfast,
                  lunch, dinner, and snacks. Whether you prefer a healthy
                  breakfast, a delicious lunch, an intimate dinner, or a quick
                  snack, our restaurant at SPARV beach resort covers you. Enjoy
                  your meals with picturesque views, making your dining
                  experience even more special. At SPARV resort in Mandrem, Goa,
                  we take pride in offering diverse and delicious cuisine to
                  make your stay memorable
                </p>
              </div>
              <div>
                <h2 className="text-2xl max-md:text-xl font-normal font-p-d uppercase text-[#222] pe-2">
                  In-room dining
                </h2>
                <p className="text-base font-light text-gray-primary text-justify lg:mt-9 mt-4">
                  Our in-room dining service at SPARV resort is the perfect
                  choice for those who cherish private dining. Whether it&apso;s
                  breakfast, lunch, dinner, or a quick snack, we offer a range
                  of gourmet meals delivered right to your door. Witness a
                  luxurious dining experience within the cosy confines of your
                  accommodation in Mandrem. Our high-quality cuisine ensures
                  that every bite is a delight. Whether you seek solitude or a
                  romantic meal, our in-room dining service caters to your
                  preferences, making your stay exceptional.
                </p>
              </div>
              <div className="flex lg:hidden items-center justify-center gap-12 py-6">
                <div className="w-[100px] aspect-square bg-blue-primary -rotate-45">
                  <div className="w-full h-full flex flex-col text-white items-center justify-center rotate-45">
                    <span className="">
                      <OutLineDishWhite />
                    </span>
                    <span className="text-base font-light">Dining</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TfiAlarmClock className="text-5xl font-light text-blue-primary" />
                </div>
              </div>
              {data.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default page;
