"use client";
import { useState } from "react";


interface TestimonialCardProps {
    name: string;
    desc: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  desc,
  name: title,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full flex flex-col gap-4">
      

      <p className="text-light text-base md:leading-8">
        {readMore ? desc : `${desc.slice(0, 200)}...`}
        <span
          className="cursor-pointer text-dark font-semibold"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "...Read less" : "Read more"}
        </span>
      </p>
      <h3
        className="text-dark font-semibold text-base tracking-wide"
      >
        {title}
      </h3>
    </div>
  );
};

export default TestimonialCard;
