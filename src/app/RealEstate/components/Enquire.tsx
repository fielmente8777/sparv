import { SectionWithContainer } from "@/components/sectionComponants";
import { EnquireData } from "./pageData";
import { PhoneIcon } from "@/icons/icons";

interface EnquireProps {
  data: EnquireData;
}

export default function Enquire({ data }: EnquireProps) {
  return (
    <SectionWithContainer sectionClassName="bg-[#181818]">
      <div>
        <div className="max-w-[760px] mx-auto text-center">
          <p className=" font-medium uppercase tracking-[0.2em] text-[16px] md:text-[22px] text-[#B58E3E] ">
            {data.subtitle}
          </p>

          <h2 className="font-p-d text-white text-[26px] md:text-[48px]">
            {data.title}
          </h2>

          <p className="text-white text-[20px] md:text-[18px] mt-6">
            {data.description}
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href={`#?text=${encodeURIComponent(
                "Hi, I'm interested in your property."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#B58E3E] text-white px-10 py-4 uppercase flex items-center justify-center"
            >
              Enquire Now
            </a>

            <a
              href={`tel:${data.phone}`}
              className="w-full md:w-auto border border-white/40 text-white px-8 py-4 flex items-center justify-center gap-2"
            >
              <PhoneIcon />
              <span>{data.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}
