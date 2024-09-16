import { Container, Section } from "@/components";
import CardWithSlider from "@/components/CardWithSlider";

interface Props {
  data: {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    time: string;
    img: string[];
  }[];
}

const RoomsCards: React.FC<Props> = ({ data }) => {
  return (
    <Section className="lg:pt-0 lg:pb-10">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10">
          {data.map((item, index) => (
            <div
              className="shadow-2xl group group-hover:scale-105 duration-500"
              key={index}
            >
              <CardWithSlider
                title={item.name}
                data={item.img}
                label={"Book Now"}
                currency={item.currency}
                description={item.description}
                price={item.price}
                time={item.time}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default RoomsCards;
