import Image from "next/image";
import Container from "./Container";
import { BannerProps } from "@/types/type";


const Banner: React.FC<BannerProps> = ({ src, alt }) => {
  return (
    <section className="lg:pb-10 pb-5 font-p-d">
      <div className="w-full lg:aspect-[4/1.57] aspect-[1/1] relative">
        <Image
          src={src}
          alt={`${alt ? alt : "Banner"}`}
          fill
          className="object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full flex lg:justify-center lg:items-center bg-black/40 lg:px-[3.37rem] px-4 py-6">
          <Container>
            <h1 className="text-white lg:text-5xl text-3xl font-bold text-center font-p-d">CAREERS</h1>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Banner;
