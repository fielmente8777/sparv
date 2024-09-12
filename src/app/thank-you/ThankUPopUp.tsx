"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import src from "../../../public/images/Background.png";
import { useEffect } from "react";
const ThankUPopUp = () => {
  const router = useRouter();

  const redirectToHome = () => {
    router.push("/");
  };
  useEffect(() => {
    // Google Ads Conversion Tracking
    const script = document.createElement('script');
    script.innerHTML = `
      gtag('event', 'conversion', {'send_to': 'AW-16668758737/GIgUCNnV9swZENGlpIw-'});
    `;
    document.head.appendChild(script);
  }, []);
  return (
    <section>
      <div className="max-w-[1900px] mx-auto">
        <div className="relative w-full h-screen aspect-[16/9]">
          <Image
            src={src}
            alt="hospitality marketing"
            fill
            className="object-cover"
          />
          <div className="absolute flex flex-col lg:items-start px-5 md:p-24 lg:justify-start justify-center h-screen w-full bg-[rgba(0,0,0,0.5)]">
            <h1 className="text-5xl font-bold text-white mb-4">
              Thank You!
            </h1>
            <p className="text-[24px] text-white/80 mb-8 leading-12  text-start">
              Your submission has been received.
              <br className="hidden lg:block" />
              We will get back to you shortly.
            </p>
            <button
              className="bg-blue-dark border text-white py-3 px-6 text-2xl rounded-md hover:bg-blue-800 transition duration-200"
              onClick={redirectToHome}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankUPopUp;


