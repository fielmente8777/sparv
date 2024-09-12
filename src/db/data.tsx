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
    href: "https://www.facebook.com/people/Sparv-Aulakhs-Resort-Goa/61551214832526/?mibextid=b06tZ0",
    icon: <FillFaceBook />,
  },
  {
    label: "instagram",
    href: "https://www.instagram.com/sparvaulakhsresortgoa/",
    icon: <FillInstagram />,
  },
  {
    label: "tripadvisor",
    href: "https://www.tripadvisor.com/Hotel_Review-g1010240-d26635488-Reviews-SPARV_Aulakhs_Resort-Mandrem_North_Goa_District_Goa.html",
    icon: <FillTripadvisor />,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/company/sparvgroup/",
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
