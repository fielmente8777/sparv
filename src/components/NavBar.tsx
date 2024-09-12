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

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const connect = [
    {
      icon: <IoPricetagOutline />,
      name: "info@sparvhospitality.com",
      link: "mailto:info@sparvhospitality.com",
    },
    {
      name: "7410112890",
      link: "tel:7410112890",
    },
  ];

  return (
    <>
      {pathname !== "/thank-you/" && (
        <header className="py-5 bg-blue-primary ">
          <div className="">
            <Container>
              {/* navbar top */}
              <nav className="flex justify-between items-center py-7">
                {/* navbar left */}
                <ul className="flex items-center justify-center gap-3">
                  {contactData.map((item) => (
                    <li key={item.label} className="px-3">
                      <Link href={item.href || ""}>
                        {item.icon}
                        <span className="sr-only">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* navbar right */}
                <ul className="flex items-center justify-center gap-3">
                  {connect.map((link) => (
                    <li key={link.name} className="p-3">
                      <Link
                        href={link.link}
                        className="text-white text-sm flex justify-center items-center gap-2"
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* navbar bottom */}
              <nav className="flex justify-between items-center h-[3vh] relative z-40">
                {/* navbar left */}
                <ul className="hidden lg:flex items-center gap-2">
                  {navLink.slice(0, 3).map((link) => (
                    <li key={link.name} className="p-3">
                      <Link
                        href={link.link}
                        className="text-white uppercase text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* logo */}
                {/* logo */}
                <div className="absolute top-[190%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
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
                {/* navbar right */}
                <ul className="hidden lg:flex items-center gap-2">
                  {navLink.slice(3, navLink.length).map((link) => (
                    <li key={link.name} className="p-3">
                      <Link
                        href={link.link}
                        className="text-white uppercase text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* hamburger menu */}
                <div className="lg:hidden z-30" onClick={() => setOpen(!open)}>
                  <button className="text-white" aria-label="Toggle menu">
                    {!open ? (
                      <IoMenu
                        className={`w-6 h-6 transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    ) : (
                      <IoCloseSharp
                        className={`w-6 h-6 transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                </div>
              </nav>
            </Container>
          </div>

          {/* Mobile menu */}
          <div
            className={`fixed top-10 left-0 w-full h-screen lg:hidden bg-blue-primary z-10 transform ${
              open ? "translate-x-0" : "-translate-x-full"
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
