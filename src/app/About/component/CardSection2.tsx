import { Card, Container, Section } from "@/components";
const CardSection2 = () => {
  return (
    <Section className="lg:pt-0 lg:pb-16">
      <Container className="bg-white text-justify">
        <div className="flex flex-col items-center justify-center gap-6 py-6">
          <h2 className="text-3xl max-md:text-xl font-normal font-p-d capitalize text-[#222] text-center">
            How to find Sparv Aulakhs Resort Goa Mandrem
          </h2>
          <div className="w-full max-w-32 h-[1.5px] relative bg-zinc-300 my-5">
            <div className="absolute transform left-1/2  top-[-600%] -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-xl bg-zinc-300" />
          </div>
        </div>
        <div className="w-full max-w-5xl mx-auto">
          <div>
            <p className="mt-4 text-base font-light text-neutral-800 max-md:max-w-full">
              To reach SPARV Aulakh Resort, go to Mandrem, a lovely coastal
              town. Look for the White Church in Ashvem on Mandrem Road, and
              you&apos;ll spot Sparv Aulakhs Resort at Plot No. 451, Ashwem,
              Mandrem Rd.
            </p>
            <p className="mt-4 text-base font-light text-neutral-800 max-md:max-w-full">
              <strong>By Train:</strong> The closest railway station to your
              Mandrem retreat beach resort is Thivim Railway Station, just 20km
              from the accommodation.
            </p>
            <p className="mt-4 text-base font-light text-neutral-800 max-md:max-w-full">
              <strong>By Air:</strong> If you&apos;re arriving by air, Manohar International Airport is the nearest, located 12 kms away from the SPARV resort
              in Mandrem.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 py-6">
          <h2 className="text-3xl max-md:text-xl font-normal font-p-d capitalize text-[#222] text-center">
            Things to do in Mandrem
          </h2>
          <div className="w-full max-w-32 h-[1.5px] relative bg-zinc-300 my-5">
            <div className="absolute transform left-1/2  top-[-600%] -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-xl bg-zinc-300" />
          </div>
        </div>
        <div className="w-full max-w-5xl mx-auto">
          <div>
            <p className="mt-4 text-base font-light text-neutral-800 max-md:max-w-full">
              Mandrem, Goa, has a lot of interesting things to do. This charming
              coastal town is located between Ashvem and Arambol. It has quiet
              beaches, lots of greenery, and historical places just waiting to
              be discovered. Enjoy water sports like windsurfing and paragliding
              while taking in the peaceful atmosphere. Visit the lively Chapora
              Fortress, learn about the past at Terekol Fort, and enjoy
              delicious local food at cute restaurants. Nearby bird sanctuaries,
              spice farms, and exciting dolphin adventures make this Mandrem
              retreat the perfect place for travellers.
            </p>
            <div className="w-full h-[1.5px] bg-zinc-300 my-12" />
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              {data.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CardSection2;

const data = [
  {
    id: 1,
    img: "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/Things+to+do+in+Mandrem/Historical+Sites.jpg",
    label: "Historical Sites",
    href: "",
  },
  {
    id: 2,
    img: "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/Things+to+do+in+Mandrem/Nightlife.jpg",
    label: "Nightlife",
    href: "",
  },
  {
    id: 3,
    img: "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/Things+to+do+in+Mandrem/FoodDrink.jpg",
    label: "Food and Drink",
    href: "",
  },
  {
    id: 4,
    img: "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/Things+to+do+in+Mandrem/Water+Activities.jpg",
    label: "Water activities",
    href: "",
  },
  {
    id: 5,
    img: "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/Things+to+do+in+Mandrem/Explore+the+city.jpg",
    label: "Explore the City",
    href: "",
  },
  {
    id: 6,
    img: "https://im.whatshot.in/img/2021/Nov/h-cover-cropped-1637932060-1638172267.jpg",
    label: "Flea Market",
    href: "",
  },
];
