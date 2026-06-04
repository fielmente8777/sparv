"use client";

import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";
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



  console.log(amenityModalArray, "amenityModalArray");

  return (
    <section
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm ${openAmenityModal ? "visible opacity-100" : "invisible opacity-0"} `}
    >
      <div className="max-w-6xl w-full h-fit bg-white relative rounded-2xl shadow-md">
        <button
          onClick={() => setOpenAmenityModal(false)}
          className="absolute top-4 right-4 text-2xl text-primary"
        >
          <MdClose />
        </button>
        <div className="max-md:overflow-y-auto hide-scroll ">
          {amenityModalArray?.map((amenity, index) => (
            <div key={index} className="flex flex-col gap-5 px-5 py-3">
              <h2 className="text-xl font-semibold">{amenity.villaFeatureType}</h2>
              {amenity?.villaFeatures && (
                <ul className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  gap-2 ">
                  {amenity?.villaFeatures?.map((feature, index) => (
                    <li key={index} className="text-md flex items-center gap-2">
                      {feature && <span className="text-primary h-2 w-2 -mt-1 rounded-full bg-orange-300  " />}{feature}
                    </li>
                  ))}
                </ul>
              )}
              {amenity.images && (
                <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
                  {amenity?.images?.slice(0, 3)?.map((src, index) => (
                    <div key={index} className="relative h-[200px]  w-full rounded-lg overflow-hidden">
                      <Image
                        src={src ?? null}
                        alt={`amenity image ${index + 1}`}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesPopup;
