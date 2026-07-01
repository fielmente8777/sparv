"use client";
import { useWebContext } from "@/context-api/WebContext";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  const { WhatsAppClick } = useWebContext();
  return (
    <div className="fixed bottom-28 lg:left-3  left-4 z-20 cursor-pointer ">
      <button
        onClick={WhatsAppClick}
        // href={`https://wa.me/+917410112895?text=${encodeURIComponent(enCodedText)}`}
        // target="_blank"
        // rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all hover:shadow-2xl"
      >
        <FaWhatsapp size={29} color="white" />
        <span className="sr-only">what&apos;s app</span>
      </button>
    </div>
  );
}

export default Whatsapp;
