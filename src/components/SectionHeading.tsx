import Link from "next/link";
interface Props {
  title: string;
  span?: string;
  label?: string;
  href?: string;
  description?: string;
  textWhite?: boolean;
}
const SectionHeading: React.FC<Props> = ({
  title,
  span,
  label,
  href,
  description,
  textWhite,
}) => {
  return (
    <article>
      <div className="flex justify-between gap-2 lg:items-center">
        <h2 className="text-3xl max-md:text-xl font-normal font-p-d uppercase text-orange-primary pe-2">
          {title}{" "}
          <span
            className={` font-p-d ${textWhite ? "text-white" : "text-black"}`}
          >
            {span}
          </span>
        </h2>
        {label && (
          <div className="max-md:w-max flex">
            <Link
              href={href || "/"}
              className={`text-sm px-3 max-md:px-1 py-1 border ${textWhite ? "border-white" : "border-gray-primary"} font-normal h-max uppercase ${textWhite ? "hover:bg-white hover:text-[#222]" : "hover:bg-gray-primary hover:text-white"}  duration-500 rounded-sm ${textWhite ? "text-white" : "text-gray-primary"}`}
            >
              {label || "View All"}
            </Link>
          </div>
        )}
      </div>
      {description && (
        <p
          className={`text-lg max-md:text-base font-normal mt-9 ${textWhite ? "text-white" : "text-[#222]"}`}
        >
          {description}
        </p>
      )}
    </article>
  );
};

export default SectionHeading;
