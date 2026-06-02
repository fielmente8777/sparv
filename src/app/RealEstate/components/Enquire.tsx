import { SectionWithContainer } from "@/components/sectionComponants";
import { EnquireData } from "./pageData";
import { PhoneIcon } from "@/icons/icons";

interface EnquireProps {
  data: EnquireData;
}

export default function Enquire({
  data,
}: EnquireProps) {
  return (
    <SectionWithContainer sectionClassName="bg-[#181818]">
      <div>
        <div className="max-w-[760px] mx-auto text-center">
          <p className=" font-medium uppercase tracking-[0.2em] text-[22px] text-[#B58E3E] ">
            {data.subtitle}
          </p>

          <h2 className="font-p-d text-white text-[48px]">
            {data.title}
          </h2>

          <p className="text-white text-[18px] mt-6">
            {data.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="bg-[#B58E3E] text-white px-10 py-4 uppercase">
              Enquire Now
            </button>

            <button className="border border-white/40 text-white px-8 py-4 flex items-center gap-2">
              <PhoneIcon />
              <span>{data.phone}</span>
            </button>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}