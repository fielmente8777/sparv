"use client";
import { usePathname } from "next/navigation";
import LandingFooter from "./LandingFooter";
import WebsiteFooter from "./WebsiteFooter";

const Footer = () => {
  const pathName = usePathname();
  if (pathName === "/landing-page/") {
    return <LandingFooter />;
  } else if (pathName === "/thank-you") {
    return null;
  }
  return <WebsiteFooter />;
};

export default Footer;
