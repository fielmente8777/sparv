import Image from "next/image";
import { HeroData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
      <div className="relative aspect-[6/3] max_screen_width">
        <Image
          src={data.bgImage}
          alt={data.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/40 py-4">
          <div className="text-center text-white">
            <p className="font-medium font-m text-[18px]  tracking-[0.2em]">
              {data.subtitle}
            </p>

            <h1 className="font-p-d  text-[48px] ">
              {data.title}
            </h1>
          </div>
        </div>
      </div>
  );
}
