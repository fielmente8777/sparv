import Image from "next/image";
import Link from "next/link";
import { TwoColCardprops } from "@/types/type";
import {
  OutLineBed,
  OutLineDish,
  OutLinePerson,
  OutLineService,
  OutLineSquareFt,
  OutlineTv,
} from "@/icons/icons";

const TwoColGridCard: React.FC<TwoColCardprops> = ({
  title,
  description,
  image,
  linkText,
  href,
  id,
  price,
  currency,
  time,
  list,
  disc,
}) => {
  console.log("image", image);
  return (
    <div
      className={`lg:grid grid-cols-2 flex ${id % 2 === 0 ? "flex-col-reverse" : "flex-col"} bg-[#EEEEEE] group`}
    >
      <div
        className={`relative aspect-[4/2.9] img_hover overflow-hidden ${id % 2 === 0 ? "order-2" : "order-1"}`}
      >
        <Image
          priority={true}
          src={image}
          alt={`${title ? title : "avatar"}`}
          fill
          className="object-cover group-[&:hover]:scale-105 duration-500"
        />
      </div>
      <div
        className={`flex flex-col justify-center gap-4 p-12 max-md:p-8 ${id % 2 === 0 ? "order-1" : "order-2"}`}
      >
        <h2 className="text-2xl lg:text-[2rem]/[2.5rem] font-normal font-p-d text-blue-secondary">
          {title}
        </h2>
        {description && (
          <p className="max-md:text-sm text-gray-primary text-justify">
            {description}
          </p>
        )}
        {!list && (
          <>
            <div className="flex max-sm:hidden items-center justify-center gap-3 border-t py-3 border-b border-[#222222]">
              {service.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <span className="">{item.icon}</span>
                  <p className="text-[.85rem] font-light text-[#222]">
                    {index === 0 && title === "Standard Rooms"
                      ? "2 adult, 2 kids"
                      : item.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="hidden max-sm:flex items-center justify-center gap-3 border-t py-3 border-b border-[#222222]">
              {service.slice(0, 4).map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <span className="">{item.icon}</span>
                  <p className="text-[.6rem] font-normal text-center text-[#222]">
                    {index === 0 && title === "Standard Rooms"
                      ? "2 adult, 2 kids"
                      : item.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Link
                  href={href ? href : "/"}
                  className="flex gap-2 px-8 py-[1.1rem] text-lg items-center justify-center capitalize bg-orange-primary/90 hover:bg-orange-primary  hover:scale-x-110 duration-700 transition font-light border border-solid border-orange-primary bg-primary text-white"
                >
                  {linkText}
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-3xl max-md:text-2xl font-light text-[#222]">
                  <span className="uppercase">{currency || "$"}</span>{" "}
                  {price || "100"}
                </p>
                <p className="text-[#222]">{time || "per night"}</p>
              </div>
            </div>
          </>
        )}

        {list && (
          <>
            <ul className="flex flex-col gap-2 list-disc ps-5 text-[#222]">
              {list.map((item, index) => (
                <li
                  key={index}
                  className="text-[.9rem] font-light text-[#222] max-md:text-[.8rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 ps-5">
              {disc?.map((item, index) => (
                <p
                  key={index}
                  className="text-[.9rem] font-light text-gray-primary max-md:text-[.8rem]"
                >
                  {item}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TwoColGridCard;

export const service = [
  {
    icon: <OutLinePerson />,
    title: "2 adults, 1 kids",
  },
  {
    icon: <OutLineService />,
    title: "Rooms service",
  },
  {
    icon: <OutLineBed />,
    title: "King size bed",
  },
  {
    icon: <OutLineDish />,
    title: "All inclusive",
  },
  {
    icon: <OutLineSquareFt />,
    title: "460 sqft room",
  },
  {
    icon: <OutlineTv />,
    title: "TV",
  },
];
