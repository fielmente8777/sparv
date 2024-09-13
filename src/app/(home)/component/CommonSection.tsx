import { Container, Section, SectionHeading } from "@/components";
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
            <div className="shadow-2xl group  duration-500" key={index}>
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-150 duration-1000 transition ease-in-out"
                />
                <div className="absolute bottom-0 left-0 w-full h-[25vh] duration-500 ease-in-out group-hover:h-full group-[&:hover]:bg-blue-primary/70 flex justify-center items-center">
                  <Link
                    href={item.href}
                    className="text-white uppercase border px-4 py-2 font-p-d text-lg bg-transparent hover:bg-orange-secondary duration-500 rounded-sm"
                  >
                    {item.label}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CommonSection;
