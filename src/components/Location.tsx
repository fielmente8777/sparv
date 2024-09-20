"use client";
import { useState } from "react";
import Container from "./Container";
import LazyLoadedMap from "./LazyLoadedMap";
import Section from "./Section";

const Location = () => {
  const host = "https://eazotel.eazotel.com/api/dashboard/editnewsletter";

  const [email, setEmail] = useState("");

  const handleNewsletter = async () => {
    const data = {
      // Domain: "", // enter client domain
      Domain: "sparvhospitality", // test domain
      email: email,
    };
    try {
      const response = await fetch(host, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }

    setEmail("");
  };
  return (
    <Section className="lg:py-0 bg-blue-primary max-w-[1600px] w-full mx-auto">
      <Container>
        <div
          className="w-full grid lg:grid-cols-2 bg-fixed bg-center bg-no-repeat bg-[url('/images/contact.png')] grid-cols-1 gap-10 items-center justify-center"
          style={{ backgroundSize: "70%" }}
        >
          <div className="max-w-[400px] max-md:max-w-[250px] mx-auto w-full aspect-square -rotate-[45deg] flex items-center justify-center shadow-xl bg-blue-primary/50">
            <div className="flex flex-col gap-1 max-md:gap-2 items-center justify-center text-white rotate-[45deg]">
              <h2 className="text-3xl max-md:text-xl font-normal font-p-d uppercase max-md:-mt-8">
                Subscribe
              </h2>
              <p className="lg:text-lg text-sm font-medium">
                Get Exclusive Offers and Discounts
              </p>
              <div className="flex gap-3 bg-white py-1 px-2 rounded-sm lg:mt-9 max-w-sm w-full">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="email"
                  placeholder="Subscribe"
                  className="w-full outline-none max-md:text-sm"
                />
                <button
                  onClick={handleNewsletter}
                  aria-label="Subscribe"
                  className="bg-blue-primary max-md:text-sm text-white px-3 py-1.5 font-normal uppercase hover:bg-blue-secondary duration-500 rounded-sm"
                >
                  go
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center h-full py-8">
            <div className="relative aspect-[4/2.5] w-full">
              <LazyLoadedMap src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7303.3485676326245!2d73.7132378730648!3d15.657687065561632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfef7926e68ad1%3A0xfb486781d41acccb!2sSPARV%20Aulakhs%20Resort%20%7C%20Mandrem%2C%20Goa!5e1!3m2!1sen!2sin!4v1726205003398!5m2!1sen!2sin" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Location;
