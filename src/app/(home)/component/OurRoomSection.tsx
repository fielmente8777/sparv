import Image from "next/image";
import {
  Container,
  Section,
  SectionHeading,
  TwoColGridCard,
} from "@/components";

interface Props {
  RoomData: {
    title: string;
    description: string;
    label: string;
    href: string;
    data: {
      id: number;
      name: string;
      img: string;
      description: string;
      label: string;
      price: number;
      currency: string;
      time: string;
      href: string;
    }[];
  };
}
const OurRoomSection: React.FC<Props> = ({ RoomData }) => {
  return (
    <Section>
      <article className="lg:pt-24 lg:pb-52 pt-12 pb-24 bg-[#474747]">
        <Container>
          <SectionHeading textWhite {...RoomData} />
        </Container>
      </article>
      <div className="lg:-mt-36 -mt-16 pb-8">
        <Container>
          {RoomData.data.map((item, index) => (
            <div key={item.id} className="max-md:mb-7">
              <TwoColGridCard
                image={item.img}
                title={item.name}
                description={item.description}
                linkText={item.label}
                href={item.href || ""}
                id={index}
                price={item.price}
                currency={item.currency}
                time={item.time}
              />
            </div>
          ))}
        </Container>
      </div>
    </Section>
  );
};

export default OurRoomSection;
