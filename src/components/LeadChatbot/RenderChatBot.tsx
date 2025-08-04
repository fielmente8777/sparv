"use client";
import React, { useEffect, useState } from "react";
import ChatbotWidget from "./ChatbotWidget";
import axios from "axios";
import { Option } from "./ChatWindow";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  [key: string]: string; // For additional dynamic fields
}

interface EazobotConfig {
  hid: string;
  ndid: string;
  interval?: number;
}

interface ChatbotDataFlow {
  domain: string;
  messagesFlow: {
    key: string;
    question: string;
    type?: string;
    options?: Option[];
  }[];
  welcomeMessage?: string;
  thankYouMessage?: string;
  title?: string;
  theme?: string;
  logo?: {
    url: string;
  };
  interval?: number;
}

const RenderChatBot = () => {
  const [eazbotConfig, setEazbotConfig] = useState<EazobotConfig | null>({
    hid: "56369483",
    ndid: "e50d8dc6-4cfc-4c87-b6c0-145ccdeb4121",
    interval: 40000,
  });

  const [chatbotData, setChatbotData] = useState<ChatbotDataFlow>({
    domain: "testmulti",
    welcomeMessage: "Welcome to Eazotel! How may we help you today?",
    thankYouMessage:
      "Thank you so much for filling up the details, one of our representative will speak to you as soon as possible!",
    messagesFlow: [
      {
        key: "name",
        question: "Please assist us with your name",
        type: "text",
      },
      { key: "email", question: "What's your Email ?", type: "email" },
      {
        key: "phone",
        question: "What's your Phone Number?",
        type: "number",
      },
      { key: "check-in", question: "Check-in date!", type: "date" },
      { key: "check-out", question: "Check-out date!", type: "date" },
      {
        key: "number of guest",
        question: "Number of guest!",
        type: "text",
      },
    ],
    title: "",
    theme: "",
    logo: {
      url: "/log2.png",
    },
    interval: 40000,
  });

  const [isOpen, setIsOpen] = useState(false);
  // const welcomeMessage =
  //   "Welcome to Minimalist Hotels! How can I help you today?";
  // const thankYouMessage = `Thank you so much for filling up the details, one of our representative will speak to you as soon as possible!`;

  // const messageFlows = [
  //   { key: "name", question: "What's your Name?", type: "text" },
  //   { key: "email", question: "What's your Email ?", type: "email" },
  //   { key: "phone", question: "What's your Phone Number?", type: "number" },
  //   { key: "check-in", question: "Check-in date!", type: "date" },
  //   { key: "check-out", question: "Check-out date!", type: "date" },
  //   { key: "number of guest", question: "Number of guest!", type: "text" },
  // ];

  const handleSumbit = async (formData: Record<string, string | string[]>) => {
    // Extract the known fields
    const { name, email, phone, ...otherFields } = formData;
    const description = Object.entries(otherFields)
      .map(([key, value]) => `${key}: ${value}`)
      .join(",");

    const checkInDate = formData["check-in"];
    const checkOutDate = formData["check-out"];
    const guest = formData["number of guest"];

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: chatbotData?.domain,
          Contact: `${phone}`,
          email: `${email}`,
          Description: description,
          Name: `${name}`,
          Remark: "",
          Subject: null,
          check_in: `${checkInDate}`,
          check_out: `${checkOutDate}`,
          numbers_of_guest: `${guest}`,
          created_from: "Eazobot",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBaseData = async () => {
    try {
      const ndid = eazbotConfig?.ndid;
      const hid = eazbotConfig?.hid;
      const { data } = await axios.get(
        `https://nexon.eazotel.com/booking/getenginedetails/${ndid}/${hid}`
      );

      console.log(data);

      setChatbotData({
        ...chatbotData,
        title: data?.Details?.HotelName,
        theme: data?.Details?.Colors?.BackgroundColor,
        domain: data?.Profile?.domain,
        welcomeMessage: `Welcome to ${data?.Details?.HotelName}! How may we help you today?`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (eazbotConfig?.hid && eazbotConfig?.ndid) {
      fetchBaseData();
    }
  }, [eazbotConfig]);

  useEffect(() => {
    const handleMessage = (event: any) => {
      if (event.data?.type === "CHATBOT_INIT") {
        setEazbotConfig(event.data.payload);
      }
    };
    window.parent.postMessage(
      {
        type: "CHATBOT_READY",
        payload: {
          chatbotOpen: isOpen,
        },
      },
      "*"
    );
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isOpen]);

  return (
    <>
      <ChatbotWidget
        onSubmit={handleSumbit}
        messages={chatbotData?.welcomeMessage || ""}
        finalMessage={chatbotData?.thankYouMessage || ""}
        messageFlows={chatbotData?.messagesFlow}
        title={chatbotData?.title}
        theme={chatbotData?.theme}
        openInterval={eazbotConfig?.interval}
        logo={chatbotData?.logo?.url}
        setIsOpenChatbot={setIsOpen}
      />
    </>
  );
};

export default RenderChatBot;
