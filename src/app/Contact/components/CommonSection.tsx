"use client";
import { Container, Section } from "@/components";
import { Form } from "@/components";
import { useState } from "react";

interface CommonSectionProps {
  title: string;
  description?: string;
  form: boolean;
  data: {
    title: string;
    description: string[];
    icon: React.ReactNode;
  }[];
}

const CommonSection: React.FC<CommonSectionProps> = ({
  title,
  description,
  form = true,
  data,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Section>
      <Container>
        <div className="w-full max-w-6xl mx-auto bg-fixed bg-center text-white bg-no-repeat bg-[url('/images/contact.png')] bg-blue-primary">
          <div className="flex flex-col items-center justify-center gap-6 py-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-normal font-p-d capitalize text-center">
              {title}
            </h2>
            {description && (
              <p className="text-base font-light text-center">{description}</p>
            )}
            {form && (
              <>
                <button
                  className="bg-transparent text-sm text-white px-5 py-2 font-normal uppercase hover:bg-white hover:text-[#222] duration-500 rounded-sm border"
                  onClick={handleOpen}
                >
                  {open ? "Close form" : "Contact Us via form"}
                </button>
                <div
                  className={`${open ? "h-max" : "h-0"} overflow-hidden max-md:w-4/5 transition-all duration-300 ease-linear w-full`}
                >
                  <Form />
                </div>
              </>
            )}
          </div>
          <div className="flex max-md:items-center max-md:flex-col px-8 bg-[#EEEEEE] justify-between max-md:justify-center max-md:gap-6 w-full lg:py-12 py-8">
            {data.map((item, index) => (
              <div
                key={index+1}
                className="flex flex-col items-center gap-1 w-full group"
              >
                <div className="text-5xl text-blue-primary font-bold group-[&:hover]:scale-110 group-[&:hover]:-translate-y-1 duration-300 transition ease-linear">
                  {item.icon}
                </div>
                <div className="">
                  <p className="text-base text-[#222] font-medium">
                    {item.title}
                  </p>
                </div>
                <div className="">
                  {item.description.map((desc) => (
                    <p
                      key={desc}
                      className="text-sm text-gray-primary font-light text-center"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CommonSection;
