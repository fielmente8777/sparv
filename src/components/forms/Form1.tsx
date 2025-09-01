"use client";

import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import { countries } from "@/db/countryCode";
import { CalenderIcon } from "@/icons/icons";
import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface formProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  gridView?: boolean;
  rounded?: boolean;
}

const Form1: React.FC<formProps> = ({
  setOpen,
  gridView = false,
  rounded = false,
}) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const { min } = getDateInputLimits({
    showPast: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
  });

   const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const [startDate, endDate] = dateRange;

  const [error, setError] = useState({
    checkIn: "",
    checkOut: "",
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error[name as keyof typeof error]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleDateChange = (update: [Date | null, Date | null]) => {
    setDateRange(update);

    const [start, end] = update;
    const checkInString = start ? start.toISOString().split("T")[0] : "";
    const checkOutString = end ? end.toISOString().split("T")[0] : "";

    setFormData((prev) => ({
      ...prev,
      checkIn: checkInString,
      checkOut: checkOutString,
    }));

    // Clear date errors when date is selected
    if (error.checkIn || error.checkOut) {
      setError((prev) => ({ ...prev, checkIn: "", checkOut: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      checkIn: "",
      checkOut: "",
      fullName: "",
      PhoneNumber: "",
      EmailId: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
      isValid = false;
    }

    if (!formData.EmailId.trim()) {
      newErrors.EmailId = "Please enter your email";
      isValid = false;
    } else if (!validateEmail(formData.EmailId)) {
      newErrors.EmailId = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.PhoneNumber)) {
      newErrors.PhoneNumber = "phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.checkIn.trim()) {
      newErrors.checkIn = "check-in date is required";
      isValid = false;
    }

    if (!formData.checkOut.trim()) {
      newErrors.checkOut = "check-out date is required";
      isValid = false;
    } else if (startDate && endDate && startDate > endDate) {
      newErrors.checkOut = "Check-out must be after check-in";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "sparvhospitality",
          email: formData?.EmailId,
          Name: formData?.fullName,
          Contact: formData?.PhoneNumber,
          Description: `Check-in ${formData?.checkIn}, Check-out: ${formData?.checkOut},`,
          "check_in": `${formData?.checkIn}`,
          "check_out": `${formData?.checkOut}`,
          created_from: "website",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.Status) {
       setFormData({
          checkIn: "",
          checkOut: "",
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
        });
        setDateRange([null, null]);
        setError({
          checkIn: "",
          checkOut: "",
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
        });
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);
        if (setOpen) {
          setOpen(false);
        }
        window.open("/thank-you", "_blank");
      } else {
        
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`grid ${!gridView ? "md:grid-cols-9 " : "gap-2 bg-transparent"} grid-cols-2 max-md:gap-2  divide-x divide-[#E0E0E0]`}
      ref={formRef}
    >
      {/* Full Name Field - unchanged */}
      <div
        className={`col-span-2 h-full flex flex-col items-center ${rounded && "lg:rounded-l-2xl"} bg-[#fff]  `}
      >
        <input
          type="text"
          name="fullName"
          aria-label="Full Name*"
          placeholder="Full Name*"
          onChange={handleInputChange}
          value={formData.fullName}
          className="outline-none border-none w-full h-full p-4 bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
        />
        {error.fullName && (
          <span className="text-red-500 text-[0.5rem] px-1 w-full">
            {error.fullName}
          </span>
        )}
      </div>

      {/* Phone Number Field - unchanged */}
      <div
        className={`col-span-2 w-full flex flex-col max-md:items-center bg-[#fff]`}
      >
        <div className="flex items-center py-4 ps-1 w-full h-full">
          <select
            aria-label="Country Code"
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={`text-[#343434] placeholder:text-[#343434] focus:outline-none w-full bg-transparent`}
            style={{ width: `${countryCode.length * 2}ch` }}
          >
            {countries.map((country, index) => (
              <option key={index+101} value={country.code} aria-label={country.name} className="bg-gray-100">
                {`${country.code}`}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="PhoneNumber"
            aria-label="Phone Number*"
            placeholder="Phone Number*"
            onChange={handleInputChange}
            value={formData.PhoneNumber}
            className=" ps-1 outline-none no-spinner appearance-auto border-none w-full h-full text-base text-[#343434] placeholder:text-[#343434] bg-transparent"
          />
        </div>
        {error.PhoneNumber && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.PhoneNumber}
          </span>
        )}
      </div>

      {/* Email Field - unchanged */}
      <div
        className={`col-span-2 h-full flex flex-col items-center bg-[#fff]`}
      >
        <input
          type="text"
          name="EmailId"
          aria-label="Email Id*"
          placeholder="Email Id*"
          onChange={handleInputChange}
          value={formData.EmailId}
          className="outline-none border-none w-full h-full p-4 bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
        />
        {error.EmailId && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.EmailId}
          </span>
        )}
      </div>

      {/* Check In Date Field - updated with icon */}
      <div
        className={`col-span-2 flex flex-col items-center bg-[#fff] relative`}
      >
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          selectsStart
          selectsRange
          startDate={startDate}
          endDate={endDate}
          minDate={new Date(min || Date.now())}
          placeholderText="Check in & Check out"
          className="outline-none border-none w-full h-full bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
          wrapperClassName="w-full h-full !flex !p-4 items-center"
        />
        <div className="absolute right-2 top-[13px] transform pointer-events-none">
          <CalenderIcon/>
        </div>
        {(error.checkIn || error.checkOut) && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.checkIn || error.checkOut}
          </span>
        )}
      </div>

      

      {/* Submit Button - unchanged */}
      <div
        className={`h-full col-span-1 max-md:col-span-2 ${rounded && "lg:rounded-r-2xl overflow-hidden"} ${gridView && "col-span-2"} flex items-center bg-[#fff]`}
      >
        <button
          type="submit"
          aria-label="Book Now"
          className="text-center bg-blue-primary py-4 w-full h-full text-white bg-primary duration-300 transition-all ease-in-out uppercase"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="border-t-2 border-white w-6 h-6 rounded-full animate-spin mx-auto block" />
          ) : submitSuccess ? (
            "Thank You!"
          ) : (
            "Book Now"
          )}
        </button>
      </div>
    </form>
  );
};

export default Form1;
