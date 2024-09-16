"use client";
// import { ZoomInIcon, ZoomOutIcon } from "@/icons/icons";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

interface FullScreenImageViewPopUPProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  src: string | StaticImageData;
  showModal: boolean;
}

const FullScreenImageViewPopUP: React.FC<FullScreenImageViewPopUPProps> = ({
  setShowModal,
  src,
  showModal,
}) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, [handleKeydown]);

  const toggleFullscreen = useCallback(() => {
    const element = document.querySelector(".image-container");
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => console.error(err));
    } else {
      if (element) {
        element.requestFullscreen().catch((err) => console.error(err));
      }
    }
  }, []);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  return (
    <section
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#29422C] bg-opacity-75 transition duration-1000 ease py-5"
      onClick={() => setShowModal(false)}
    >
      <button
        onClick={() => setShowModal(false)}
        className="inline-flex items-center justify-center px-4 py-4 text-white bg-[#D5D5D5]/70 hover:bg-[#D5D5D5] rounded-lg mb-3"
      >
        <CloseIcon />
      </button>

      <div
        className="relative w-full max-w-3xl aspect-[4/3.5] image-container"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt="Full screen view"
          fill
          priority={true}
          
          className="object-contain cursor-pointer"
          onClick={toggleFullscreen}
        />
        {/* <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="w-full h-full cursor-pointer show flex items-end justify-end"
            onClick={toggleFullscreen}
          >
            <div className="p-7 hover:bg-[#D1BA97] bg-[#D1BA97]/60 w-max rounded-br-[3rem]">
              {isFullscreen ? <ZoomOutIcon /> : <ZoomInIcon />}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FullScreenImageViewPopUP;

export const CloseIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
