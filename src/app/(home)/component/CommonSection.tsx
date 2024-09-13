import { Card, Container, Section, SectionHeading } from "@/components";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: {
    title: string;
    description: string;
    label: string;
    href: string;
    data: {
      id: number;
      img: string;
      label: string;
      href: string;
    }[];
  };
}

const CommonSection: React.FC<Props> = ({ data }) => {
  return (
    <Section>
      <Container>
        <SectionHeading {...data} />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-8">
          {data.data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CommonSection;
