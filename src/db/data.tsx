// data

import {
  FillFaceBook,
  FillInstagram,
  FillLinkedin,
  FillTripadvisor,
} from "@/icons/icons";
import { ContactUsProps } from "@/types/type";

export const contactData: ContactUsProps[] = [
  {
    label: "facebook",
    href: "#",
    icon: <FillFaceBook />,
  },
  {
    label: "instagram",
    href: "#",
    icon: <FillInstagram />,
  },
  {
    label: "tripadvisor",
    href: "#",
    icon: <FillTripadvisor />,
  },
  {
    label: "linkedin",
    href: "#",
    icon: <FillLinkedin />,
  },
];

export const footerPageLink = [
  {
    name: "Terms & Conditions",
    link: "/",
  },
  {
    name: "privacy policy",
    link: "/",
  },
  {
    name: "Cancellation Policy",
    link: "/",
  },
  {
    name: "Gallery",
    link: "/",
  },
  {
    name: "career",
    link: "/",
  },
  {
    name: "rooms",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];
