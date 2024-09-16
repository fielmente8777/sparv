// data

import {
  FillFaceBook,
  FillInstagram,
  FillLinkedin,
  FillTripadvisor,
  OutLineCall,
  OutLineLocation,
} from "@/icons/icons";
import { ContactUsProps } from "@/types/type";
import { CiMail } from "react-icons/ci";

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
    link: "/Terms-And-Conditions/",
  },
  {
    name: "privacy policy",
    link: "/Privacy-Policy/",
  },
  {
    name: "Cancellation Policy",
    link: "/Cancellation-Policy/",
  },
];

export const contactPagedata1 = {
  title: "Send an email",
  description:
    "Got queries about your upcoming Mandrem, Goa getaway? Feel free to use this form to reach out, and we'll swiftly respond to assist you.",
  data: [
    {
      title: "Address",
      icon: <OutLineLocation />,
      description: [
        "Aulakhs The Great Ocean View, Plot No. 451, Ashwem, Mandrem Rd, near White Church",
      ],
    },
    {
      title: "Phone",
      icon: <OutLineCall />,
      description: ["+91 7410112890", "+91 7410112895"],
    },
    {
      title: "Email",
      icon: <CiMail />,
      description: ["info@sparvhospitality.com"],
    },
  ],
};
export const contactPagedata2 = {
  title: "Travel Partner",
  data: [
    {
      title: "Address",
      icon: <OutLineLocation />,
      description: [
        "DSK Holidays, 107, 1st Floor, Gera Imperium Star , Patto, Panaji, Goa- 403001",
      ],
    },
    {
      title: "Phone",
      icon: <OutLineCall />,
      description: ["+91 8010661681", "+91 9555644844"],
    },
    {
      title: "Email",
      icon: <CiMail />,
      description: ["amitesh@dskholidays.com"],
    },
  ],
};
