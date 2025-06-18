"use client";
import axios from "axios";
import ChatbotWidget from "./ChatbotWidget";
export interface FormData {
  name: string;
  email: string;
  phone: string;
  [key: string]: string; // For additional dynamic fields
}

const RenderChatBot = () => {
  const welcomeMessage =
    "Welcome to Minimalist Hotels! How can I help you today?";
  const thankYouMessage = `Thank you so much for filling up the details, one of our representative will speak to you as soon as possible!`;

  const messageFlows = [
    { key: "name", question: "What's your Name?", type: "text" },
    { key: "email", question: "What's your Email ?", type: "email" },
    { key: "phone", question: "What's your Phone Number?", type: "number" },
    { key: "check-in", question: "Check-in date!", type: "text" },
    { key: "check-out", question: "Check-out date!", type: "text" },
    { key: "number of guest", question: "Number of guest!", type: "text" },
  ];

  const handleSumbit = async (formData: Record<string, string | string[]>) => {
    // Extract the known fields
    const { name, email, phone, ...otherFields } = formData;
    const description = Object.entries(otherFields)
      .map(([key, value]) => `${key}: ${value}`)
      .join(",");

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "minimalist",
          Contact: `${phone}`,
          email: `${email}`,
          Description: description,
          Name: `${name}`,
          Remark: "",
          Subject: null,
          created_from: "Chatbot",
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

  return (
    <div>
      <ChatbotWidget
        onSubmit={handleSumbit}
        messages={welcomeMessage}
        finalMessage={thankYouMessage}
        messageFlows={messageFlows}
        title="Minimalist"
        theme={"#7D684D"}
        openInterval={2000}
        logo={
          "https://s3.amazonaws.com/solvus-dev/files/asksuite-img/558a9fd5-395e-433d-bc39-2fea5dccc932.png"
        }
      />
    </div>
  );
};

export default RenderChatBot;
