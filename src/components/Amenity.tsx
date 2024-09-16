import { AmenityItemProps } from "@/types/type";
import Image from "next/image";

const Amenity: React.FC<AmenityItemProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col group hover:scale-110 transition-all duration-300">
      <div className="relative aspect-square w-[50px] self-center">
        <Image
          src={icon}
          alt={`${name} icon`}
          fill
          className="object-contain group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300"
        />
      </div>
      <p className="text-center text-base max-md:text-sm">{name}</p>
    </div>
  );
};

export default Amenity;
