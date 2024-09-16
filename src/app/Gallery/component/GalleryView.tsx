"use client";
import { Container, FullScreenImageViewPopUP, Section } from "@/components";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface GalleryViewProps {
  data: {
    image: string;
    category: string;
  }[];
}

const GalleryView: React.FC<GalleryViewProps> = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState("");

  const [currentCategory, setCurrentCategory] = useState("All");
  const categories = ["All", ...new Set(data.map((item) => item.category))];

  const filterData = useCallback(
    (category: string) => {
      if (category === "All") {
        return data;
      }
      return data.filter((item) => item.category === category);
    },
    [data]
  );

  const filteredData = filterData(currentCategory);

  return (
    <Section className="lg:pt-0 lg:pb-14">
      <Container>
        <ul className="w-full pb-6 flex items-center flex-wrap justify-center gap-5">
          {categories.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => setCurrentCategory(item)}
                className={`text-base font-light text-gray-primary capitalize px-5 flex items-center justify-center py-2 hover:text-white hover:bg-[#179cb3] ${
                  currentCategory === item ? "bg-[#179cb3] text-white" : ""
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center lg:grid-cols-4 gap-5 py-5">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="w-full relative aspect-square overflow-hidden group hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.category}
                fill
                className="w-full h-full cursor-pointer object-cover group-hover:scale-95 transition-all ease-in duration-300"
                onClick={() => {
                  setShowModal(true);
                  setSrc(item.image);
                }}
              />
            </div>
          ))}
        </div>
      </Container>
      {showModal && (
        <FullScreenImageViewPopUP
          src={src}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </Section>
  );
};

export default GalleryView;
