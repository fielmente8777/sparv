"use client";

import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { countries } from "@/db/countryCode";

const Form = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    if (userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "abhijeet", // Replace with your actual domain value
          // Domain: "sparvhospitality", 
          email: userEmail,
          Name: userName,
          Contact: `${countryCode}${userPhone}`, // Combine country code and phone number
          Description: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data)
      if (data.Status) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        setCountryCode("+91"); // Reset country code
        setFormRes(false);
        router.push("/thank-you/");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-md:mt-6 text-base w-full text-[#222]"
      id="contact"
    >
      <div className="flex flex-col gap-4">
        <div className="flex max-md:flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full border border-blue-primary h-max p-2 rounded-sm outline-none"
          />
          <div className="w-full">
            <input
              type="text"
              placeholder="Email"
              value={userEmail}
              onChange={handleEmailChange}
              className="w-full border border-blue-primary p-2 rounded-sm outline-none"
            />
            {emailErrorMessage && (
              <p className="text-red-500">{emailErrorMessage}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white border border-blue-primary">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="text-sm text-[#222] outline-none p-2 rounded-sm"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Phone"
            value={userPhone}
            onChange={handlePhoneChange}
            className="w-full  p-2 rounded-sm outline-none"
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <input
          type="text"
          placeholder="Subject"
          className="w-full border border-blue-primary p-2 rounded-sm outline-none"
        />
        <textarea
          placeholder="Message"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          rows={5}
          className="w-full border border-blue-primary p-2 rounded-sm resize-none outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-transparent w-max mx-auto text-sm text-white px-5 py-2 font-normal uppercase hover:bg-white hover:text-[#222] duration-500 rounded-sm border"
      >
        {formRes ? "Loading...." : "Send message"}
      </button>
    </form>
  );
};

export default Form;
