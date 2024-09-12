import { CardProps } from "@/types/type";
import Image from "next/image";

const Card: React.FC<CardProps> = ({
  image,
  center = false,
  data,
  icon,
  border = true,
  centerTitle,
  aspect,
  setOpen,
  setData,
}) => {
  return (
    <div
      onClick={() => {
        if (setOpen && setData) {
          setOpen(true);
          setData({
            data,
            image,
            icon,
            centerTitle,
          });
        }
      }}
      className={`${border && "border"} cursor-pointer group group-[&:hover]:shadow-2xl transition duration-1000 ease-in-out rounded-lg overflow-hidden w-full`}
    >
      {image && (
        <div
          className={`${aspect ? `lg:aspect-[${aspect}]` : "lg:aspect-[4/2.5]"} w-full group-[&:hover]:shadow-xl aspect-[4/3] relative overflow-hidden`}
        >
          <Image
            src={image.src}
            alt={image.alt || "Banner"}
            fill
            className="object-cover group-hover:scale-110 transition duration-1000 ease-in-out"
          />
          {centerTitle && (
            <div className="">
              <h3 className="absolute bottom-0 left-0 right-0 text-center text-xl bg-black/30 group-[&:hover]:bg-black/70 transition duration-1000 ease-in-out py-3 z-50 text-white font-semibold">
                {centerTitle}
              </h3>
            </div>
          )}
        </div>
      )}
      {icon && (
        <div className="p-3 flex items-center justify-center">{icon}</div>
      )}
      {data && (
        <div className="flex flex-col gap-4 py-6 px-3">
          <h3
            className={`text-lg text-blue-primary font-semibold ${center ? "text-center" : "text-start"}`}
          >
            {data.title}
          </h3>
          {data.description && (
            <p
              className={`text-base text-gray-primary ${center ? "text-center" : "text-start"}`}
            >
              {data.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
