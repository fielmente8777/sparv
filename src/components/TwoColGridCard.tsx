import Image from "next/image";
import Container from "./Container";
import Section from "./Section";
import Link from "next/link";
import { TwoColCardprops } from "@/types/type";

const TwoColGridCard: React.FC<TwoColCardprops> = ({
  title,
  description,
  description2,
  image,
  linkText,
  href,
}) => {
  return (
    <Section>
      <Container>
        <div className="lg:grid grid-cols-2 flex flex-col gap-5">
          <div className="relative aspect-[4/2.5] img_hover rounded-lg overflow-hidden">
            <Image
              priority={true}
              src={image.src}
              alt={`${image.alt ? image.alt : "avatar"}`}
              fill
              className="object-cover img rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between gap-5">
            <h2 className="text-2xl tracking-wider lg:text-[2rem]/[2.5rem] font-semibold text-blue-primary">
              {title}
            </h2>
            <p className="max-md:text-sm text-gray-primary ">
              {description}
            </p>
            {description2 && (
              <p className="max-md:text-sm text-gray-primary">
                {description2}
              </p>
            )}
            <div className="flex items-center">
              <Link
                href={href}
                className="flex gap-2 px-6 capitalize bg-blue-primary hover:bg-white hover:text-blue-primary hover:scale-x-110 duration-700 transition rounded-lg py-3 font-medium border border-solid border-blue-primary bg-primary text-white"
              >
                {linkText}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TwoColGridCard;
