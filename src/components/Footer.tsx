"use client";
import Image from "next/image";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import { OutLineCopyRight } from "@/icons/icons";
import Link from "next/link";
import { contactData, footerPageLink } from "@/db/data";
import { usePathname } from "next/navigation";
import Location from "./Location";
const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/Career/" && <Location />}
      <footer className="lg:py-10 py-9 pb-3 bg-blue-secondary">
        <Container>
          <div className="flex max-md:flex-col lg:justify-between max-md:gap-3 text-sm">
            {/* footer left */}
            <ul className="flex lg:items-center max-md:gap-3 lg:justify-center max-md:flex-col">
              {footerPageLink.slice(0, 3).map((item, index) => (
                <li
                  key={item.name}
                  className={`${index !== footerPageLink.slice(0, 3).length - 1 && "lg:border-e-2 border-[#ffffff]"}`}
                >
                  <Link href={item.link} className="text-white uppercase px-3">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* footer right */}
            <ul className="flex lg:items-center max-md:gap-3 lg:justify-center max-md:flex-col">
              {footerPageLink
                .slice(3, footerPageLink.length)
                .map((link, index) => (
                  <li
                    key={link.name}
                    className={`${index !== footerPageLink.slice(3, footerPageLink.length).length - 1 && "lg:border-e-2 border-[#ffffff]"}`}
                  >
                    <Link
                      href={link.link}
                      className="text-white uppercase px-3"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* footer bottom */}
          <div className="flex justify-center items-center py-11">
            <ul className="flex justify-center items-center">
              {contactData.map((data) => (
                <li key={data.label} className="px-4">
                  <Link
                    href={data.href || "#"}
                    className="text-white uppercase"
                  >
                    {data.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-4">
            <p className="text-white ">Copyright ©  |</p>
            <Link href="https://www.eazotel.com" className="text-white">
              eazotel
            </Link>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
