"use client";

import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";
import { useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const ImagePopUp = () => {
  const {
    isOpenImagePopup,
    setIsOpenImagePopup,
    images,
    activeImageIndex,
    setActiveImageIndex,
    roomName,
  } = useWebContext();

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // if (!isOpenImagePopup) return null;

  const closePopup = () => setIsOpenImagePopup(false);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // --- SWIPE HANDLERS ---
  const minSwipeDistance = 50;

  const onTouchStartHandler = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      // swipe left → next
      nextImage();
    }

    if (distance < -minSwipeDistance) {
      // swipe right → prev
      prevImage();
    }
  };

  const onTouchMoveHandler = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  //   useEffect(() => {
  //     const handleKeyDown = (e: KeyboardEvent) => {
  //       if (e.key === "Escape") {
  //         closePopup();
  //       }
  //     };
  //     document.addEventListener("keydown", handleKeyDown);
  //     return () => document.removeEventListener("keydown", handleKeyDown);
  //   }, []);

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center duration-300 transition-all ease-in-out ${isOpenImagePopup ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
    >
      <div className="relative p-4 w-full max-w-7xl">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute z-40 right-4 -top-4 bg-blue-primary text-white w-8 h-8 rounded-full"
        >
          ✕
        </button>

        {/* Image (with swipe events) */}
        <div
          className="relative w-full aspect-[4/3] max-w-3xl mx-auto"
          onTouchStart={onTouchStartHandler}
          onTouchMove={onTouchMoveHandler}
          onTouchEnd={onTouchEndHandler}
        >
          <Image
            src={images[activeImageIndex]}
            alt="popup"
            className="object-contain"
            fill
          />
        </div>
        <h2 className="text-white text-xl font-semibold text-center mb-3">
          {roomName}
        </h2>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <div className="flex lg:justify-between gap-4 absolute lg:left-1/2 left-4 lg:-translate-x-1/2 lg:top-1/2 top-0 -translate-y-1/2 w-full">
            <button
              onClick={prevImage}
              className="rounded-full bg-white text-primary aspect-square w-10 text-4xl flex items-center justify-center"
            >
              <MdArrowLeft />
            </button>
            <button
              onClick={nextImage}
              className="rounded-full bg-white text-primary aspect-square w-10 text-4xl flex items-center justify-center"
            >
              <MdArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePopUp;
