"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import LazyLoadedMap from "../map/LazyLoadedMap";
import { Container } from "../sectionComponants";
import LinkButton from "../buttons/LinkButton";
import { whatsAppcta } from "@/app/landing-page/landingPageData";

const LandingFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full max_screen_width">
      <section className="bg-blue-primary">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:py-20 py-10 md:gap-10">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full max-w-[180px] relative md:aspect-[4/3.8] aspect-square max-md:mx-auto">
                <Image
                  src={footerLinks.src}
                  alt={"logo"}
                  fill
                  className="object-cover"
                />
              </div>
              <LinkButton
                href={whatsAppcta}
                target="_blank"
                rel="noreferrer"
                label="Book Now"
                className="bg-blue-primary self-start border-white px-11 md:px-[45px] w-fit "
              />
            </div>
            {footerLinks.data.map((link, index) => (
              <div key={index} className="w-full space-y-4">
                {link.title && (
                  <h3 className="text-white font-p-d md:text-[2rem]/[2.5rem] text-xl mb-2">
                    {link.title}
                  </h3>
                )}

                {!link.mapUrl ? (
                  <ul className="space-y-4 text-white">
                    {link.links?.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href} className="text-white">
                          {item.label}
                        </Link>
                        {item.href2 && <span className="mr-2">,</span>}
                        {item.label2 && (
                          <Link href={item.href2} className="text-white">
                            {item.label2}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div
                    key={index}
                    className="max-md:aspect-[4/1.6] w-full h-full bg-white"
                  >
                    <LazyLoadedMap src={link.mapUrl} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <div className="bg-dark">
        <Container>
          <div className="py-4 flex max-md:flex-col max-md:gap-3 items-center justify-center text-white relative">
            <div className="flex w-full md:w-fit justify-center items-center max-md:border-b-white max-md:border-b max-md:pb-2 ">
              <span className="md:px-6 px-4 text-nowrap"> © {year} SPARV</span>
              <span className="max-md:hidden text-xl">|</span>
              <span className="md:px-6 px-4 text-nowrap">
                All rights reserved
              </span>
            </div>
            <span className="max-md:hidden text-xl">|</span>
            <span className="px-6">
              Designed & Developed by{" "}
              <Link
                href={"https://www.eazotel.com/"}
                className="font-medium"
                target="_blank"
              >
                Eazotel
              </Link>
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default LandingFooter;

export const footerLinks = {
  src: "/logo.png",
  data: [
    {
      title: "Contact Us",
      links: [
        {
          label:
            "Aulakhs The Great Ocean View, Plot No. 451, Ashwem, Mandrem Rd, near White Church",
          href: "",
        },
        {
          label: "Call: +91 7410112890",
          href: "tel:+91 7410112890",
          label2: "+91 7410112895",
          href2: "tel:+91 7410112895",
        },

        {
          label: "Email: info@sparvhospitality.com",
          href: "mailto: info@sparvhospitality.com",
        },
      ],
    },
    {
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7303.3485676326245!2d73.7132378730648!3d15.657687065561632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfef7926e68ad1%3A0xfb486781d41acccb!2sSPARV%20Aulakhs%20Resort%20%7C%20Mandrem%2C%20Goa!5e1!3m2!1sen!2sin!4v1726205003398!5m2!1sen!2sin",
    },
  ],
};
