import Link from "next/link";
interface Props {
  title: string;
  span?: string;
  label?: string;
  href?: string;
  description?: string;
}
const SectionHeading: React.FC<Props> = ({
  title,
  span,
  label,
  href,
  description,
}) => {
  return (
    <article>
      <div className="flex lg:justify-between gap-2 lg:items-center">
        <h2 className="text-3xl max-md:text-xl font-normal font-p-d uppercase text-orange-primary pe-2">
          {title} <span className="text-black font-p-d">{span}</span>
        </h2>
        {label && (
          <div className="max-md:w-20 flex">
            <Link
              href={href || "/"}
              className="text-gray-primary max-md:text-sm px-3 max-md:px-1 py-1 border border-gray-primary font-normal h-max uppercase font-p-d hover:bg-gray-primary hover:text-white duration-500 rounded-sm"
            >
              {label || "View All"}
            </Link>
          </div>
        )}
      </div>
      {description && (
        <p className="text-lg max-md:text-base font-medium font-p-d text-[#222] mt-9">
          {description}
        </p>
      )}
    </article>
  );
};

export default SectionHeading;
