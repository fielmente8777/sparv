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
    // <section
    //   className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#29422C] bg-opacity-75 transition duration-1000 ease py-5"
    //   onClick={() => setShowModal(false)}
    // >
    //   <button
    //     onClick={() => setShowModal(false)}
    //     className="inline-flex items-center justify-center px-4 py-4 text-white bg-[#D5D5D5]/70 hover:bg-[#D5D5D5] rounded-lg mb-3"
    //   >
    //     <CloseIcon />
    //   </button>

    //   <div
    //     className="relative w-full max-w-3xl aspect-[4/3.5] image-container"
    //     onClick={(e) => e.stopPropagation()}
    //   >
    //     <Image
    //       src={src}
    //       alt="Full screen view"
    //       fill
    //       priority={true}

    //       className="object-resize cursor-pointer"
    //       onClick={toggleFullscreen}
    //     />
    //     {/* <div className="absolute top-0 left-0 w-full h-full">
    //       <div
    //         className="w-full h-full cursor-pointer show flex items-end justify-end"
    //         onClick={toggleFullscreen}
    //       >
    //         <div className="p-7 hover:bg-[#D1BA97] bg-[#D1BA97]/60 w-max rounded-br-[3rem]">
    //           {isFullscreen ? <ZoomOutIcon /> : <ZoomInIcon />}
    //         </div>
    //       </div>
    //     </div> */}
    //   </div>
    // </section>
    <section
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#D5D5D5] bg-opacity-75 transition duration-1000 ease py-5"
      onClick={() => setShowModal(false)}
    >
      <div className="max-w-7xl max-md:px-5 w-full flex justify-center relative">
        <button
          onClick={() => setShowModal(false)}
          className="text-[#002639] z-40 bg-[#D5D5D5]/70 hover:bg-[#D5D5D5] rounded-md p-2 absolute top-1 right-2"
        >
          <CloseIcon />
        </button>

        <div
          className="relative w-full max-w-6xl aspect-[4/2.2] image-container"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={src}
            alt="Full screen view"
            fill
            priority={true}
            className="object-resize cursor-pointer"
            onClick={toggleFullscreen}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
              className="w-full h-full cursor-pointer show flex items-end justify-end"
              onClick={toggleFullscreen}
            >
              <div className="p-7 bg-[#D5D5D5]/70 w-max rounded-md">
                {isFullscreen ? <ZoomOutIcon /> : <ZoomInIcon />}
              </div>
            </button>
          </div>
        </div>
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
        stroke="#002639"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#002639"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ZoomInIcon = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.36718 33.1667H10.4165C10.7242 33.1667 10.9813 33.2707 11.1878 33.4787C11.3944 33.6867 11.4984 33.9445 11.4998 34.2522C11.5013 34.5598 11.3973 34.8169 11.1878 35.0235C10.9784 35.2301 10.7213 35.3333 10.4165 35.3333H2.41718C1.92174 35.3333 1.50574 35.1658 1.16918 34.8307C0.832624 34.4956 0.665069 34.0796 0.666513 33.5827V25.5833C0.666513 25.2757 0.770513 25.0186 0.978513 24.812C1.18651 24.6054 1.44435 24.5014 1.75201 24.5C2.05968 24.4986 2.31679 24.6026 2.52335 24.812C2.7299 25.0214 2.83318 25.2786 2.83318 25.5833V31.6327L9.86618 24.5997C10.0684 24.3974 10.3168 24.2891 10.6115 24.2747C10.9062 24.2602 11.1691 24.3686 11.4002 24.5997C11.6313 24.8308 11.7468 25.0864 11.7468 25.3667C11.7468 25.6469 11.6313 25.9026 11.4002 26.1337L4.36718 33.1667ZM31.6325 33.1667L24.5995 26.1337C24.3973 25.9314 24.289 25.683 24.2745 25.3883C24.2601 25.0937 24.3684 24.8308 24.5995 24.5997C24.8306 24.3686 25.0863 24.253 25.3665 24.253C25.6467 24.253 25.9024 24.3686 26.1335 24.5997L33.1665 31.6327V25.5833C33.1665 25.2757 33.2705 25.0186 33.4785 24.812C33.6865 24.6054 33.9443 24.5014 34.252 24.5C34.5597 24.4986 34.8168 24.6026 35.0233 24.812C35.2299 25.0214 35.3332 25.2786 35.3332 25.5833V33.5827C35.3332 34.0796 35.1656 34.4956 34.8305 34.8307C34.4954 35.1658 34.0794 35.3333 33.5825 35.3333H25.5832C25.2755 35.3333 25.0184 35.2293 24.8118 35.0213C24.6053 34.8133 24.5013 34.5555 24.4998 34.2478C24.4984 33.9402 24.6024 33.6831 24.8118 33.4765C25.0213 33.2699 25.2784 33.1667 25.5832 33.1667H31.6325ZM2.83318 4.36733V10.4167C2.83318 10.7243 2.72918 10.9814 2.52118 11.188C2.31318 11.3946 2.05535 11.4986 1.74768 11.5C1.44001 11.5014 1.1829 11.3974 0.976347 11.188C0.769791 10.9786 0.666513 10.7214 0.666513 10.4167V2.41733C0.666513 1.92189 0.834068 1.50589 1.16918 1.16933C1.50429 0.832778 1.92029 0.665222 2.41718 0.666667H10.4165C10.7242 0.666667 10.9813 0.770667 11.1878 0.978667C11.3944 1.18667 11.4984 1.4445 11.4998 1.75217C11.5013 2.05983 11.3973 2.31694 11.1878 2.5235C10.9784 2.73006 10.7213 2.83333 10.4165 2.83333H4.36718L11.4002 9.86633C11.6024 10.0686 11.7107 10.317 11.7252 10.6117C11.7396 10.9063 11.6313 11.1692 11.4002 11.4003C11.1691 11.6314 10.9134 11.747 10.6332 11.747C10.353 11.747 10.0973 11.6314 9.86618 11.4003L2.83318 4.36733ZM33.1665 4.36733L26.1335 11.4003C25.9313 11.6026 25.6828 11.7109 25.3882 11.7253C25.0935 11.7398 24.8306 11.6314 24.5995 11.4003C24.3684 11.1692 24.2528 10.9136 24.2528 10.6333C24.2528 10.3531 24.3684 10.0974 24.5995 9.86633L31.6325 2.83333H25.5832C25.2755 2.83333 25.0184 2.72933 24.8118 2.52133C24.6053 2.31333 24.5013 2.0555 24.4998 1.74783C24.4984 1.44017 24.6024 1.18306 24.8118 0.9765C25.0213 0.769945 25.2784 0.666667 25.5832 0.666667H33.5825C34.0794 0.666667 34.4954 0.834222 34.8305 1.16933C35.1656 1.50444 35.3332 1.92044 35.3332 2.41733V10.4167C35.3332 10.7243 35.2292 10.9814 35.0212 11.188C34.8132 11.3946 34.5553 11.4986 34.2477 11.5C33.94 11.5014 33.6829 11.3974 33.4763 11.188C33.2698 10.9786 33.1665 10.7214 33.1665 10.4167V4.36733Z"
        fill="#002639"
      />
    </svg>
  );
};

export const ZoomOutIcon = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.3331 28.2007L2.3001 35.2337C2.09788 35.4359 1.84943 35.5442 1.55477 35.5587C1.2601 35.5731 0.997212 35.4648 0.7661 35.2337C0.534989 35.0026 0.419434 34.7469 0.419434 34.4667C0.419434 34.1864 0.534989 33.9308 0.7661 33.6997L7.7991 26.6667H1.74977C1.4421 26.6667 1.18499 26.5627 0.978434 26.3547C0.771878 26.1467 0.667878 25.8888 0.666434 25.5812C0.664989 25.2735 0.768989 25.0164 0.978434 24.8098C1.18788 24.6033 1.44499 24.5 1.74977 24.5H9.7491C10.2445 24.5 10.6605 24.6676 10.9971 25.0027C11.3337 25.3378 11.5012 25.7538 11.4998 26.2507V34.25C11.4998 34.5577 11.3958 34.8148 11.1878 35.0213C10.9798 35.2279 10.7219 35.3319 10.4143 35.3333C10.1066 35.3348 9.84949 35.2308 9.64293 35.0213C9.43638 34.8119 9.3331 34.5548 9.3331 34.25V28.2007ZM26.6664 28.2007V34.25C26.6664 34.5577 26.5624 34.8148 26.3544 35.0213C26.1464 35.2279 25.8886 35.3319 25.5809 35.3333C25.2733 35.3348 25.0162 35.2308 24.8096 35.0213C24.603 34.8119 24.4998 34.5548 24.4998 34.25V26.2507C24.4998 25.7538 24.6673 25.3378 25.0024 25.0027C25.3375 24.6676 25.7535 24.5 26.2504 24.5H34.2498C34.5574 24.5 34.8145 24.604 35.0211 24.812C35.2277 25.02 35.3317 25.2778 35.3331 25.5855C35.3345 25.8932 35.2305 26.1503 35.0211 26.3568C34.8117 26.5634 34.5545 26.6667 34.2498 26.6667H28.2004L35.2334 33.6997C35.4357 33.9019 35.544 34.1511 35.5584 34.4472C35.5729 34.7404 35.4645 35.0026 35.2334 35.2337C35.0023 35.4648 34.7467 35.5803 34.4664 35.5803C34.1862 35.5803 33.9305 35.4648 33.6994 35.2337L26.6664 28.2007ZM7.7991 9.33333L0.7661 2.30033C0.563878 2.09811 0.455545 1.84967 0.4411 1.555C0.426656 1.26033 0.534989 0.997444 0.7661 0.766333C0.997212 0.535222 1.25288 0.419666 1.5331 0.419666C1.81332 0.419666 2.06899 0.535222 2.3001 0.766333L9.3331 7.79933V1.75C9.3331 1.44233 9.4371 1.18522 9.6451 0.978667C9.8531 0.772111 10.1109 0.668111 10.4186 0.666666C10.7263 0.665222 10.9834 0.769222 11.1899 0.978667C11.3965 1.18811 11.4998 1.44522 11.4998 1.75V9.74934C11.4998 10.2448 11.3322 10.6608 10.9971 10.9973C10.662 11.3339 10.246 11.5014 9.7491 11.5H1.74977C1.4421 11.5 1.18499 11.396 0.978434 11.188C0.771878 10.98 0.667878 10.7222 0.666434 10.4145C0.664989 10.1068 0.768989 9.84972 0.978434 9.64317C1.18788 9.43661 1.44499 9.33333 1.74977 9.33333H7.7991ZM28.2004 9.33333H34.2498C34.5574 9.33333 34.8145 9.43733 35.0211 9.64533C35.2277 9.85333 35.3317 10.1112 35.3331 10.4188C35.3345 10.7265 35.2305 10.9836 35.0211 11.1902C34.8117 11.3967 34.5545 11.5 34.2498 11.5H26.2504C25.7535 11.5 25.3375 11.3324 25.0024 10.9973C24.6673 10.6622 24.4998 10.2462 24.4998 9.74934V1.75C24.4998 1.44233 24.6038 1.18522 24.8118 0.978667C25.0198 0.772111 25.2776 0.668111 25.5853 0.666666C25.8929 0.665222 26.15 0.769222 26.3566 0.978667C26.5632 1.18811 26.6664 1.44522 26.6664 1.75V7.79933L33.6994 0.766333C33.9017 0.564111 34.1508 0.455777 34.4469 0.441333C34.7402 0.426888 35.0023 0.535222 35.2334 0.766333C35.4645 0.997444 35.5801 1.25311 35.5801 1.53333C35.5801 1.81356 35.4645 2.06922 35.2334 2.30033L28.2004 9.33333Z"
        fill="#002639"
      />
    </svg>
  );
};