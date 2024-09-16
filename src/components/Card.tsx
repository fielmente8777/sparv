import { CardProps } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

const Card: React.FC<CardProps> = ({ img, label, href }) => {
  return (
    <div className="shadow-2xl group  duration-500">
      <div className="relative w-full aspect-[4/3.5] overflow-hidden">
        <Image
          src={img}
          alt={label}
          fill
          className="object-cover group-hover:scale-150 duration-1000 transition ease-in-out"
        />
        <div className="absolute bottom-0 left-0 w-full h-[25vh] duration-500 ease-in-out group-hover:h-full group-[&:hover]:bg-blue-primary/70 flex justify-center items-center">
          <Link
            href={href}
            className="text-white font-light text-sm uppercase border px-4 py-2 bg-transparent hover:bg-orange-secondary duration-500 rounded-sm hover:text-[#222] hover:bg-white"
          >
            {label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
