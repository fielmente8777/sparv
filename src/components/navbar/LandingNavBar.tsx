"use client";
import { contactData } from "@/db/data";
import { MobileIcon } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import WhatsAppBtn from "../buttons/WhatsAppBtn";
import Container from "../Container";

const LandingNavBar = () => {
  const [fixed, setFixed] = useState(false);
  // scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header className={!fixed ? "fixed top-0 left-0 right-0 z-50" : ""}>
      <nav className="max_screen_width bg-black/60 py-4">
        <Container>
          <div className="flex items-center justify-between relative">
            <ul className="flex items-center lg:gap-4 gap-2">
              {contactData.slice(0, 2).map((item, index) => (
                <li className="" key={index}>
                  <Link
                    href={item.href as string}
                    target="_blank"
                    className="lg:w-10 w-7 aspect-square flex items-center justify-center bg-blue-primary rounded-sm"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 duration-700 transition ease-out">
              <div className="relative aspect-[1/1] lg:w-[110px] w-[90px]">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  priority={true}
                  quality={100}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="tel:+91 74101 12890"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white"
              >
                <span>
                  <MobileIcon />
                </span>
                <span className="text-lg max-lg:hidden">+91 74101 12890</span>
              </Link>
              <WhatsAppBtn          
                label="Book Now"
                className="!text-blue-primary max-lg:hidden bg-white border-white px-14 w-fit "
              />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default LandingNavBar;
