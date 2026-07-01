"use client";
import { createContext, useContext, useState } from "react";

interface OpenAmenityModalArray {
  villaFeatureType: string;
  villaFeatures: string[];
  images?: string[];
}
interface IWebContextProps {
  isOpenPopup: boolean;
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;

  isOpenImagePopup: boolean;
  setIsOpenImagePopup: React.Dispatch<React.SetStateAction<boolean>>;

  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;

  activeImageIndex: number;
  setActiveImageIndex: React.Dispatch<React.SetStateAction<number>>;
  roomName?: string;
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
  amenityModalArray: OpenAmenityModalArray[];
  openAmenityModal: boolean;
  setAmenityModalArray: React.Dispatch<
    React.SetStateAction<OpenAmenityModalArray[]>
  >;
  setOpenAmenityModal: React.Dispatch<React.SetStateAction<boolean>>;
  openImagePopup: (imgs: string[], index?: number, roomName?: string) => void;
  WhatsAppClick: () => Promise<void>;
}

const WebContext = createContext<IWebContextProps | undefined>({
  isOpenPopup: false,
  setIsOpenPopup: () => {},
  isMobile: false,
  setIsMobile: () => {},
  isOpenImagePopup: false,
  setIsOpenImagePopup: () => {},
  images: [],
  setImages: () => {},
  activeImageIndex: 0,
  setActiveImageIndex: () => {},
  roomName: "",
  setRoomName: () => {},
  amenityModalArray: [],
  openAmenityModal: false,
  setAmenityModalArray: () => {},
  setOpenAmenityModal: () => {},
  openImagePopup: () => {},
  WhatsAppClick: () => Promise.resolve(),
});

export const WebProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenImagePopup, setIsOpenImagePopup] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [roomName, setRoomName] = useState("");
  const [openAmenityModal, setOpenAmenityModal] = useState(false);
  const [amenityModalArray, setAmenityModalArray] = useState<
    OpenAmenityModalArray[]
  >([]);

  const openImagePopup = (
    imgs: string[],
    index: number = 0,
    roomName?: string
  ) => {
    setImages(imgs);
    setActiveImageIndex(index);
    if (roomName) setRoomName(roomName);
    setIsOpenImagePopup(true);
  };

  const WhatsAppClick = async () => {
    const enCodedText =
    "hi! i came across your resort on google and wanted to know more about it. can you please provide me with more information?";
    try {
      const payload = {
        widget: "whatsapp",
        ndid: "e50d8dc6-4cfc-4c87-b6c0-145ccdeb4121",
        hid: "56369483",
        pageUrl: window.location.href,
        websiteName: window.location.hostname,
        phoneNumber: "+917410112893",
        message: enCodedText,
      };

      const response = await fetch(
        "https://gian-1eve.onrender.com/api/v1/widget/click",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      const whatsappUrl = data?.result?.doc?.whatsappUrl;

      if (whatsappUrl) {
        window.open(whatsappUrl, "_blank");
      }
    } catch (error) {
      console.error("WhatsApp Click Error:", error);
    }
  };

  return (
    <WebContext.Provider
      value={{
        isOpenPopup,
        setIsOpenPopup,
        isMobile,
        setIsMobile,
        images,
        setImages,
        activeImageIndex,
        setActiveImageIndex,
        isOpenImagePopup,
        setIsOpenImagePopup,
        openImagePopup,
        roomName,
        setRoomName,
        openAmenityModal,
        setOpenAmenityModal,
        WhatsAppClick,

        amenityModalArray,
        setAmenityModalArray,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

// ✅ Custom hook (recommended)
export const useWebContext = () => {
  const context = useContext(WebContext);
  if (!context)
    throw new Error("useWebContext must be used within WebProvider");
  return context;
};
