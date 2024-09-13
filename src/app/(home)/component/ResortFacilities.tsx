import { Container, Section, SectionHeading } from "@/components";
import Image from "next/image";

interface Props {
  data: {
    title: string;
    span: string;
    description: string;
    label: string;
    href: string;
    imageData: {
      img: string;
      title: string;
      description: string;
    }[];
  };
}
const ResortFacilities: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <Section>
      <Container>
        <SectionHeading {...data} />
      </Container>
      <div className="mt-16">
        <div className="max-w-[1600px] mx-auto flex items-center justify-center">
          {data.imageData.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[5.25rem] lg:h-[31.25rem] overflow-hidden group hover:lg:w-[250rem] duration-500"
            >
              <Image
                src={item.img}
                alt={item.title || "facility"}
                fill
                className="object-cover"
              />
              <div className="absolute top-0 w-full h-full z-20 bg-blue-primary/70 opacity-100 group-hover:opacity-0 duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-normal font-p-d text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="absolute bottom-0 w-full bg-black/45 p-4 opacity-0 group-hover:opacity-100 translate-y-full z-[-1] group-hover:z-20 group-hover:-translate-y-0 duration-500">
                <div className="flex flex-col gap-2 justify-center">
                  <h3 className="text-lg font-normal font-p-d text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal font-p-d text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ResortFacilities;
