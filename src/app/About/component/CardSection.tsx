import { Container, Section, TwoColGridCard } from "@/components";

const CardSection = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col max-md:gap-10">
          {data.map((item, index) => (
            <TwoColGridCard
              key={index}
              title={item.title}
              image={item.image}
              list={item.list}
              disc={item.disc}
              id={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CardSection;

const data = [
  {
    id: 1,
    title: "Hotel Information",
    image:
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/about+us/Hotel+Features.jpg",
    list: ["Check-in Time: 01:00PM", "Check-out Time: 11:00AM", "Information:"],
    disc: [
      "The minimum age for guests is 7 years.",
      "Early check-in is subject to availability. For guaranteed early check-in, book from the previous night.",
      "Full breakfast is served from 7:00 AM to 10:00 AM.",
      "Smoking is prohibited in the rooms; please use designated outdoor areas.",
      "Prior approval is required for events, weddings, and commercial activities.",
    ],
  },
  {
    id: 2,
    title: "Hotel Features",
    image:
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/sparv/Home+page/gallery/Hotel.jpg",
    list: [
      "Conference Hall",
      "Air Conditioner",
      "24hr Security",
      "Laundry Service",
      "Room Service",
      "Swimming Pool",
      "Daily Housekeeping",
      "Tea and Coffee Maker",
      "Mini Bar",
      "Restaurant",
    ],
  },
];
