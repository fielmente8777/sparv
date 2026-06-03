"use client";

import { useWebContext } from "@/context-api/WebContext";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const AmenitiesPopup = () => {
  const { openAmenityModal, setOpenAmenityModal, amenityModalArray } =
    useWebContext();

  useEffect(() => {
    if (openAmenityModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openAmenityModal]);

  return (
    <section
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm ${openAmenityModal ? "visible opacity-100" : "invisible opacity-0"} `}
    >
      <div className="max-w-6xl w-full h-fit bg-white relative rounded-2xl">
        <button
          onClick={() => setOpenAmenityModal(false)}
          className="absolute top-4 right-4 text-2xl text-primary"
        >
          <MdClose />
        </button>
        <div className="max-md:overflow-y-scroll hide-scroll max-md:h-[90dvh]">
          {amenityModalArray.map((amenity, index) => (
            <div key={index} className="flex flex-col gap-5 p-5">
              <h2 className="text-2xl font-semibold">{amenity.amenityType}</h2>
              <ul className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  gap-2 ">
                {amenity.amenities.map((amenity, index) => (
                  <li key={index} className="text-lg flex md:items-center gap-2">
                    <FaStar /> {amenity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesPopup;
