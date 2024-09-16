import { Container, Section } from "@/components";
import Amenity from "@/components/Amenity";
import { title } from "process";

type AmenityItemProps = {
  data: { icon: string; name: string }[];
  data2: { title?: string; description?: string }[];
};

const RoomAmenities: React.FC<AmenityItemProps> = ({ data, data2 }) => {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl max-md:text-xl font-normal font-p-d uppercase text-[#222] text-center pe-2">
          Room Amenities
        </h2>
        <div className="flex items-center justify-between max-md:justify-center flex-wrap max-md:gap-16 max-w-4xl mx-auto w-full py-12">
          {data.map((item, index) => (
            <Amenity key={index} {...item} />
          ))}
        </div>
        <div className="mt-9 max-w-4xl mx-auto w-full pb-5">
          <div className="flex gap-3 flex-col">
            <h2 className="text-3xl font-medium text-center font-p-d text-[#222] mb-5">
              House rules
            </h2>
            {data2.map((item, index) => (
              <div className="flex flex-col max-md:gap-1 w-full lg:grid grid-cols-3" key={index}>
                <div className="col-span-1">
                  <p className="text-base text-[#222] font-medium">{item.title}</p>
                </div>
                <div className="col-span-2 text-gray-primary">
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default RoomAmenities;


