"use client";

import { usePathname } from "next/navigation";
import LandingNavBar from "./LandingNavBar";
import WebsiteNavbar from "./WebsiteNavbar";

const Navbar = () => {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  } else if (pathName === "/landing-page/") {
    return <LandingNavBar />;
  } else {
    return <WebsiteNavbar />;
  }
};

export default Navbar;
