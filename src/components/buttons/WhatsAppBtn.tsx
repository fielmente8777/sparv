"use client";
import { useWebContext } from "@/context-api/WebContext";

interface WhatsAppBtnProps {
  label: string;
  className?: string;
  [key: string]: unknown;
}

const WhatsAppBtn: React.FC<WhatsAppBtnProps> = ({
  label,
  className,
  ...rest
}) => {
  const { WhatsAppClick } = useWebContext();

  return (
    <button
      onClick={WhatsAppClick}
      className={`transition-all max-md:w-full flex items-center justify-center  font-medium border duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-2xl px-6 py-3  ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default WhatsAppBtn;
