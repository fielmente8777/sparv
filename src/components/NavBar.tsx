"use client";
import Image from "next/image";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLink } from "@/db/navLink";
import { useEffect, useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { contactData } from "@/db/data";
import { IoPricetagOutline } from "react-icons/io5";
import { OutlinePhoneIcon } from "@/icons/icons";
import Logo2 from "../../public/images/log2.png";

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changBg = () => setNavbar(window.scrollY >= 9);

    window.addEventListener("scroll", changBg);
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", changBg);
    };
  }, [open]);

  const connect = [
    {
      icon: <IoPricetagOutline />,
      name: "info@sparvhospitality.com",
      link: "mailto:info@sparvhospitality.com",
    },
    {
      icon: <OutlinePhoneIcon />,
      name: "7410112890",
      link: "tel:7410112890",
    },
  ];

  return (
    <>
      {pathname !== "/thank-you/" && (
        <header
          className={`py-4 ${navbar ? "bg-blue-primary " : "bg-transparent border-b "} duration-700 transition ease-out shadow-xl fixed top-0 w-full flex items-center justify-center z-50`}
        >
          <div className="w-full">
            <Container>
              {/* navbar top */}
              <nav
                className={`${navbar ? "hidden" : "flex justify-between items-center"} transition ease-out`}
              >
                {/* navbar left */}
                <ul className="flex items-center justify-center gap-3">
                  {contactData.map((item) => (
                    <li key={item.label} className="px-3">
                      <Link href={item.href || ""} target="_blank">
                        {item.icon}
                        <span className="sr-only">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* navbar right */}
                <ul className="flex items-center justify-center gap-1">
                  {connect.map((link) => (
                    <li key={link.name} className="p-3">
                      <Link
                        href={link.link}
                        className="text-white text-base flex hover:scale-105 duration-300 justify-center items-center gap-2"
                      >
                        <span className="sr-only">{link.name}</span>
                        {link.icon}
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* navbar bottom */}
              <nav className="flex justify-between items-center relative">
                {/* navbar left */}
                <ul className="hidden lg:flex items-center gap-2">
                  {navLink.slice(0, 3).map((link) => (
                    <li key={link.name} className="p-3">
                      <Link
                        href={link.link}
                        className={`${pathname === link.link ? "border-b border-white" : ""} hover:border-b hover:border-white hover:scale-50 duration-300 text-white uppercase`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* logo */}
                {navbar ? (
                  <div className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 duration-700 transition ease-out">
                    <div className="relative aspect-[1/1] lg:w-[110px] w-[55px]">
                      <Image
                        src={Logo}
                        alt="Logo"
                        priority={true}
                        quality={100}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-700 transition ease-out">
                    <div className="relative aspect-[1/1] lg:w-[150px] w-[55px]">
                      <Image
                        src={Logo2}
                        alt="Logo2"
                        priority={true}
                        quality={100}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                {/* navbar right */}
                <ul className="hidden lg:flex items-center gap-2">
                  {navLink.slice(3, navLink.length).map((link) => (
                    <li key={link.name} className="p-3">
                      <Link
                        href={link.link}
                        className={`${pathname === link.link ? "border-b border-white" : ""} hover:border-b hover:border-white hover:scale-75 duration-300 text-white uppercase text-sm`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* hamburger menu */}
                <div className="lg:hidden z-30" onClick={() => setOpen(!open)}>
                  <button
                    className="text-white"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                  >
                    {open ? (
                      <IoCloseSharp className="w-6 h-6 transition-transform duration-300 rotate-180" />
                    ) : (
                      <IoMenu className="w-6 h-6 transition-transform duration-300" />
                    )}
                  </button>
                </div>
              </nav>
            </Container>
          </div>

          {/* Mobile menu */}
          <div
            className={`w-full fixed top-10 left-0 h-screen lg:hidden bg-blue-primary z-10 transform ${
              open ? "translate-x-0 " : "-translate-x-full"
            } transition-transform duration-500 ease-in-out`}
          >
            <MobileNavBar />
          </div>
        </header>
      )}
    </>
  );
};

export default NavBar;

const MobileNavBar = () => {
  return (
    <Container>
      <nav className="w-full h-[50vh] bg-blue-primary">
        <ul className="flex flex-col mt-5 justify-center gap-1">
          {navLink.map((link) => (
            <li key={link.name} className="p-2">
              <Link href={link.link} className="text-white uppercase text-sm">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};
