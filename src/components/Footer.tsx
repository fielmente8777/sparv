"use client";
import Container from "./Container";
import Link from "next/link";
import { contactData, footerPageLink } from "@/db/data";
import { usePathname } from "next/navigation";
import Location from "./Location";
import { navLink } from "@/db/navLink";
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
                  <Link
                    href={item.link}
                    className="text-white uppercase px-3"
                    aria-label={item.name}
                  >
                    {item.name}
                    <span className="sr-only">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {/* footer right */}
            <ul className="flex lg:items-center max-md:gap-3 lg:justify-center max-md:flex-col">
              {navLink.slice(3, navLink.length).map((link, index) => (
                <li
                  key={link.name}
                  className={`${index !== navLink.slice(3, navLink.length).length - 1 && "lg:border-e-2 border-[#ffffff]"}`}
                >
                  <Link
                    href={link.link}
                    className="text-white uppercase px-3"
                    aria-label={link.name}
                  >
                    {link.name}
                    <span className="sr-only">{link.name}</span>
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
                    target="_blank"
                    rel="noreferrer"
                    aria-label={data.label}
                    className="text-white uppercase"
                  >
                    <span className="sr-only">{data.label}</span>
                    {data.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-4">
            <p className="text-white ">Copyright ©  |</p>
            {/* <Link
              href="https://www.eazotel.com"
              className="text-white"
              target="_blank"
              rel="noreferrer"
              aria-label="eazotel"
            >
              eazotel
              <span className="sr-only">eazotel</span>
            </Link> */}
             <Link
               className="text-white"
                href="https://www.fielmente.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fielmente
              </Link>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
