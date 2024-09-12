import Image from "next/image";
import SliderSwip from "./SliderSwip";
import Link from "next/link";

interface CardWithSliderProps {
  title?: string;
  description?: string;
  price?: number;
  time?: string;
  label?: string;
  item?: any;
}
const CardWithSlider: React.FC<CardWithSliderProps> = ({
  item,
  title,
  description,
  price,
  time,
  label,
}) => {
  return (
    <article className="">
      <SliderSwip data={item}>
        {({ item }) => (
          <div className="relative aspect-square w-full">
            <Image src="src" alt="alt" fill className="object-cover" />
          </div>
        )}
      </SliderSwip>
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-normal font-p-d text-orange-primary">
          {title || "title"}
        </h3>
        <p className="text-lg font-medium font-p-d text-[#222] mt-3">
          {description || "description"}
        </p>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-normal uppercase font-p-d text-gray-primary">
            Inr{price || "100"}
          </h3>
          <p className="text-lg font-medium font-p-d text-[#222] mt-3">
            {time || "per night"}
          </p>
        </div>
        <Link href="href">{label}</Link>
      </div>
    </article>
  );
};
export default CardWithSlider;
