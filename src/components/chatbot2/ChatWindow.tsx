"use client";
import "./chatbot.css";

// src/components/ChatWindow.jsx

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { FaBed, FaListUl, FaRupeeSign, FaUsers } from "react-icons/fa";
// import { IoIosSend } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";

export type Option = {
  label: string;
  value: string;
};

type MessageFlow = {
  question: string;
  key: string;
  type?: string;
  options?: Option[];
};

// type ChatMessage = {
//   sender: "bot" | "user";
//   text: string | string[];
//   options?: Option[];
//   key: string;
// };

type ChatWindowProps = {
  messages: string;
  messageFlows: MessageFlow[];
  onClose: () => void;
  onSubmit?: (answers: Record<string, string | string[]>) => void;
  title: string;
  logo?: string;
  theme?: string;
  finalMessage?: string;
};

type Message = {
  from: "bot" | "user";
  message: string;
  buttons?: { label: string; nextFlowKey: string; disabled?: boolean }[];
  location?: Record<
    string,
    {
      city: string;
      state: string;
      country: string;
      pinCode: string;
      local: string;
      disabled?: boolean;
    }
  >;
  disabled?: false;
  apiCall?: string;
  personalDetails?: Record<string, string>[];
  checkInOutDetails?: boolean;
  numberOfGuests?: boolean;
  roomsDetails?: Record<string, string>[];
  roomSummary?: Record<string, string>[];
};

const chatFlow = {
  Start: {
    personalDetails: [
      {
        lable: "Name",
        type: "text",
        key: "name",
        placeholder: "Enter your name",
        required: true,
      },
      {
        lable: "Email",
        type: "email",
        key: "email",
        placeholder: "Enter your email",
        required: true,
      },
      {
        lable: "Phone",
        type: "number",
        key: "phone",
        placeholder: "Enter your phone number",
        required: true,
      },
    ],

    // buttons: [
    //   {
    //     label: "🛌 About Us",
    //     nextFlowKey: "About Us",
    //   },
    //   {
    //     label: "📅 Book Now",
    //     nextFlowKey: "Explore Location",
    //   },
    //   {
    //     label: "🛀 Facilities",
    //     nextFlowKey: "Facilities",
    //   },
    //   {
    //     label: "📍 Explore Location",
    //     nextFlowKey: "Explore Location",
    //   },
    // ],
  },

  "After Start": {
    message: "Please choose 'Book Now' for direct booking with us!",
    buttons: [
      {
        label: "🛌 About Us",
        nextFlowKey: "About Us",
      },
      {
        label: "📅 Book Now",
        nextFlowKey: "Explore Location",
      },
      {
        label: "🛀 Facilities",
        nextFlowKey: "Facilities",
      },
      {
        label: "📍 Explore Location",
        nextFlowKey: "Explore Location",
      },
    ],
  },

  "About Us": {
    message:
      "We are a premium hotel offering cozy stays and exceptional service.",
    buttons: [
      {
        label: "📅 Book Now",
        nextFlowKey: "Explore Location",
      },
      {
        label: "Explore Location",
        nextFlowKey: "Explore Location",
      },
      {
        label: "🛀 Facilities",
        nextFlowKey: "Facilities",
      },
      { label: "Back to Start", nextFlowKey: "Start" },
    ],
  },
  "Explore Location": {
    apiCall: `https://nexon.eazotel.com/booking/getenginedetails/e50d8dc6-4cfc-4c87-b6c0-145ccdeb4121/56369483`,
    message: "We are located in the heart of the city. Here’s more info.",
    location: {},
  },
  "Book Now": {
    message: "Great! Here are our available rooms:",
    apiCall: "https://jsonplaceholder.typicode.com/todos", // optional dynamic data
    dynamicButtonsFrom: "rooms", // creates buttons from room names
    nextFlowKey: "Room Details",
  },
  "Fill Details": {
    message: "Please select check-in & check-out date!",
    // personalDetails: [
    //   {
    //     lable: "Name",
    //     type: "text",
    //     key: "name",
    //     placeholder: "Enter your name",
    //     required: true,
    //   },
    //   {
    //     lable: "Email",
    //     type: "email",
    //     key: "email",
    //     placeholder: "Enter your email",
    //     required: true,
    //   },
    //   {
    //     lable: "Phone",
    //     type: "number",
    //     key: "phone",
    //     placeholder: "Enter your phone number",
    //     required: true,
    //   },
    // ],
    checkInOutDetails: false,
    numberOfGuests: false,
    apiCall: `https://nexon.eazotel.com/room/engine/e50d8dc6-4cfc-4c87-b6c0-145ccdeb4121`,
  },
};

const ChatWindow = ({ logo, onClose }: ChatWindowProps) => {
  const [isBeforeCheckInOutSubmit, setIsBeforeCheckInOutSubmit] =
    useState(false);
  const [mymessages, setMyMessages] = useState<Message[] | []>([]);
  const [isTyping, setIsTyping] = useState(false); // questions shown
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [headingTitle, setHeadingTitle] = useState("");
  const [hotelPhone, setPhoneNumber] = useState("");
  const [roomSummary, setRoomSummary] = useState([]);

  type HotelDetailsType = {
    hotels?: Record<string, any>;
    [key: string]: any;
  };

  const [hotelDetails, setHotelDetails] = useState<HotelDetailsType>({});

  const [themeStyle, setThemeStyle] = useState({
    BackgroundColor: "#194161",
    BoardColor: "#0A3A75",
    ButtonColor: "#0A3A75",
    FontColor: "#0A3A75",
  });

  const [details, setDetails] = useState({
    AboutUs: "",
  });

  const [isRoomAdd, setIsRoomAdd] = useState(false);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfGuests: "",
  });

  const [error, setError] = useState(false);

  const [hid, setHid] = useState("28886842");
  // const [roomSummary, setRoomSummary] = useState([]);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const addUserMessage = (text: string) => {
    setMyMessages((prev) => [...prev, { from: "user", message: text }]);
  };

  const addBotMessage = (flow: Message) => {
    setMyMessages((prevMessages: any) => {
      // Disable buttons in all previous messages
      const updatedMessages = prevMessages.map((msg: any) => {
        if (msg.buttons) {
          const updatedButtons = msg.buttons.map((btn: any) => ({
            ...btn,
            disabled: true,
          }));
          return { ...msg, buttons: updatedButtons };
        } else if (msg?.location) {
          const updateLocation = Object.entries(msg.location).map(
            ([key, value]) => {
              return [
                key,
                typeof value === "object" && value !== null
                  ? { ...value, disabled: true }
                  : { value, disabled: true },
              ];
            }
          );

          return { ...msg, location: Object.fromEntries(updateLocation) };
        } else if (msg?.numberOfGuests) {
          console.log("aaya");
          return {
            ...msg,
            disabled: true,
          };
        } else if (msg?.roomsDetails?.length > 0) {
          return {
            ...msg,
            disabled: true,
          };
        } else if (msg?.roomSummary?.length > 0) {
          return {
            ...msg,
            disabled: true,
          };
        } else if (msg?.checkInOutDetails) {
          return {
            ...msg,
            disabled: true,
          };
        }
        return msg;
      });

      // Add the new bot message
      return [...updatedMessages, { ...flow, from: "bot" }];
    });

    // setMyMessages((prev) => [...prev, updatedFlow]);
  };

  const handleButtonClick = async ({
    nextFlowKey,
    label,
  }: {
    nextFlowKey: string;
    label: string;
  }) => {
    if (messagesEndRef?.current) {
      messagesEndRef?.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsTyping(true);

    setTimeout(async () => {
      setIsTyping(false);
      if (nextFlowKey === "Start")
        return setMyMessages([
          {
            from: "bot",
            ...(chatFlow["Start"] as any),
            message: `Welcome to ${headingTitle}, How can I help you today?`,
          },
        ]);

      const nextFlow = chatFlow[
        nextFlowKey as keyof typeof chatFlow
      ] as Message;

      if (!nextFlow) return;

      if (nextFlow && nextFlow?.apiCall) {
        const response = await fetch(nextFlow.apiCall);
        const responseData = await response?.json();

        // console.log(responseData)

        if (chatFlow[nextFlowKey as keyof typeof chatFlow]) {
          if (nextFlow?.location) {
            const hotels = responseData?.Profile?.hotels;
            nextFlow.location = hotels;
            addUserMessage(label);
            addBotMessage(nextFlow);
          }
        }

        return;
      }

      if (nextFlowKey === "About Us") {
        addUserMessage(label);
        addBotMessage({
          ...nextFlow,
          message: details?.AboutUs,
        });

        return;
      }

      // if(nextFlow && nextFlow)
      addUserMessage(label);
      addBotMessage(nextFlow);
      setIsTyping(false);
    }, 1000);
  };

  // const disabledPreviousButtons = () => {
  //   setMyMessages((prev) => {
  //     const clonePrevData = [...prev];

  //     const lastBotMessageIndex = [...prev]
  //       .reverse()
  //       .findIndex((msg) => msg.from === "bot" && msg.buttons);

  //     if (lastBotMessageIndex !== -1) {
  //       const indexToUpdate = lastBotMessageIndex;
  //       clonePrevData[indexToUpdate] = {
  //         ...clonePrevData[indexToUpdate],
  //         buttons: clonePrevData[indexToUpdate].buttons?.map((btn) => ({
  //           ...btn,
  //           disabled: true,
  //         })),
  //       };
  //     }
  //     console.log(clonePrevData);
  //     return clonePrevData;
  //   });
  // };

  const handleSelectLoaction = (
    key: string,
    value: {
      city: string;
      state: string;
      country: string;
      pinCode: string;
      local: string;
    }
  ) => {
    const nextFlow = chatFlow[
      "Fill Details" as keyof typeof chatFlow
    ] as Message;

    addUserMessage(value?.state);
    addBotMessage({
      ...nextFlow,
      checkInOutDetails: true,
      from: "bot",
    });
    setHid(key);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "numberOfGuests") {
      if (Number(value) > 3) {
        setError(true);
      } else {
        setError(false);
      }
    }
    setFormData((prev) => ({
      ...prev,
      [name]: name === "numberOfGuests" ? Number(value) : value,
    }));
  };

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    key: string,
    beforeSubmit = false
  ) => {
    e.preventDefault();

    const nextFlow = chatFlow[
      "Fill Details" as keyof typeof chatFlow
    ] as Message;

    if (key === "personalDetails") {
      // api call
      addUserMessage("Thanks, What are you looking for?");
      addBotMessage({
        ...chatFlow["After Start"],
        from: "bot",
      });
      // addBotMessage({
      //   message: "Please fill your check-in and check-out details",
      //   checkInOutDetails: true,
      //   from: "bot",
      // });
      return;
    }

    if (key === "checkInOutDetails") {
      addUserMessage("Thankyou");
      addBotMessage({
        message: beforeSubmit ? "Please select number of guest" : "",
        numberOfGuests: beforeSubmit,
        from: "bot",
      });

      if (!beforeSubmit && nextFlow?.apiCall) {
        const formDatas = {
          checkIn: startDate,
          checkOut: endDate,
          hId: hid,
        };
        const response = await fetch(nextFlow?.apiCall, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDatas),
        });
        const responseData = await response?.json();
        // setRateChange(responseData?.Price)

        // console.log(responseData)

        setMyMessages((prev) => [
          ...prev,
          { from: "bot", roomsDetails: responseData?.Details, message: "" },
        ]);

        // addBotMessage({
        //   message: "No rooms available",
        //   from: "bot",
        // });

        // addBotMessage({
        //   from: "bot",
        //   ...chatFlow["Explore Location"],
        // });
      }

      return;
    }

    if (key === "numberOfGuests") {
      // if (Number(formData.numberOfGuests) > 2) {
      //   setError(true)
      //   return;
      // }
      // setError(false)
      // console.log(formData.numberOfGuests)
      if (nextFlow?.apiCall) {
        const formDatas = {
          checkIn: startDate,
          checkOut: endDate,
          hId: hid,
        };
        const response = await fetch(nextFlow?.apiCall, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDatas),
        });
        const responseData = await response?.json();

        // console.log(responseData)

        // setMyMessages((prev) => [
        //   ...prev,
        //   { from: "bot", roomsDetails: responseData?.Details, message: "" },
        // ]);
        addBotMessage({
          from: "bot",
          roomsDetails: responseData?.Details,
          message: "",
        });

        // addBotMessage({
        //   message: "No rooms available",
        //   from: "bot",
        // });

        // addBotMessage({
        //   from: "bot",
        //   ...chatFlow["Explore Location"],
        // });
      }
    }
  };

  const makeRoomSummary = () => {
    const rooms = mymessages.filter((item) => item?.roomsDetails)[0];
    const roomSelected: any = rooms?.roomsDetails?.filter(
      (item) => item?.roomQuantity
    );

    setRoomSummary([...roomSelected] as any);

    addBotMessage({
      message: "Room Summary",
      from: "bot",
      roomSummary: [...roomSelected!],
    });
  };

  const confirmBooking = async () => {
    const checkInDate = new Date(startDate as any).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const checkOutDate = new Date(endDate as any).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    let roomDetails = "";
    let idx = 0;

    for (const item of roomSummary as any) {
      roomDetails += `Room ${idx + 1} -> Room Name: ${
        item?.roomName
      } Room Type: ${
        item?.roomTypeName
      } Price Per Night: ${item?.price?.toLocaleString()} Number Of Rooms: ${
        item?.roomQuantity
      } `;

      idx++;
    }

    const description = `check-in: ${checkInDate},check-out: ${checkOutDate},number of guest: ${formData?.numberOfGuests}`;

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "sparvhospitality",
          Contact: `${formData.phone}`,
          email: `${formData?.email}`,
          Description: description,
          Name: `${formData?.name}`,
          Remark: "",
          Subject: roomDetails,
          created_from: "Chatbot",
          check_in: checkInDate,
          check_out: checkOutDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        addBotMessage({
          from: "bot",
          message:
            "Your booking has been confirmed. Our representative will contact you soon.🎉",
        });
      }
    } catch (error) {
      console.log(error);
    }

    // GetPayLaterOrderId();
    // const res = await loadRazorpayScript(
    //   "https://checkout.razorpay.com/v1/checkout.js"
    // );
    // if (!res) {
    //   alert("Failed to load Razorpay SDK. Check your internet.");
    //   return;
    // }
    // // Replace with your actual Razorpay key
    // const options = {
    //   key: "rzp_test_yBZq6KOwkBaQBa", // 🔑 e.g. "rzp_test_xxxxxxx"
    //   amount: 50000, // amount in paise (₹500)
    //   currency: "INR",
    //   name: "Your Company",
    //   description: "Test Payment",
    //   image: "https://your-logo-url.com/logo.png",
    //   handler: function (response: any) {
    //     alert(
    //       `Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`
    //     );
    //     // TODO: Send response to your backend for verification
    //   },
    //   prefill: {
    //     name: "John Doe",
    //     email: "john@example.com",
    //     contact: "9876543210",
    //   },
    //   notes: {
    //     address: "Your business address",
    //   },
    //   theme: {
    //     color: "#3399cc",
    //   },
    // };
    // const paymentObject = new (window as any).Razorpay(options);
    // paymentObject.open();
  };
  // const [Delux, setDelux] = useState(0)
  // const [SuperDelux, setSuperDelux] = useState(0)
  // const [Suite, setSuite] = useState(0)
  // const [Premium, setPremium] = useState(0)
  // const [PremiereRetreat, setPremiereRetreat] = useState(0)
  // const [EliteSuite, setEliteSuite] = useState(0)
  // const [GrandDeluxe, setGrandDeluxe] = useState(0)
  // const [ImperialSuite, setImperialSuite] = useState(0)
  // const [SupremeRetreat, setSupremeRetreat] = useState(0)
  // const [RoyalDeluxe, setRoyalDeluxe] = useState(0)
  // const [PrestigeSuite, setPrestigeSuite] = useState(0)
  // const [ExclusiveRetreat, setExclusiveRetreat] = useState(0)

  // const [DeluxAdult, setDeluxAdult] = useState(0)
  // const [SuperDeluxAdult, setSuperDeluxAdult] = useState(0)
  // const [SuiteAdult, setSuiteAdult] = useState(0)
  // const [PremiumAdult, setPremiumAdult] = useState(0)
  // const [PremiereRetreatAdult, setPremiereRetreatAdult] = useState(0)
  // const [EliteSuiteAdult, setEliteSuiteAdult] = useState(0)
  // const [GrandDeluxeAdult, setGrandDeluxeAdult] = useState(0)
  // const [ImperialSuiteAdult, setImperialSuiteAdult] = useState(0)
  // const [SupremeRetreatAdult, setSupremeRetreatAdult] = useState(0)
  // const [RoyalDeluxeAdult, setRoyalDeluxeAdult] = useState(0)
  // const [PrestigeSuiteAdult, setPrestigeSuiteAdult] = useState(0)
  // const [ExclusiveRetreatAdult, setExclusiveRetreatAdult] = useState(0)
  // const [ratesChange, setRateChange] = useState({})

  // const [RoomCategoryCombination, setRoomCategoryCombination] = useState({
  //   "DELUX": "-",
  //   "SUPERDELUX": "-",
  //   "SUITE": "-",
  //   "PREMIUM": "-",
  //   "PremiereRetreat": "-",
  //   "EliteSuite": "-",
  //   "GrandDeluxe": "-",
  //   "ImperialSuite": "-",
  //   "SupremeRetreat": "-",
  //   "RoyalDeluxe": "-",
  //   "PrestigeSuite": "-",
  //   "ExclusiveRetreat": "-"

  // })
  // const [Night, setNights] = useState(0)
  // let [maxAdult, setmaxAdult] = useState(0)

  // const [Available, setAvailable] = useState({
  //   "DELUX": 0,
  //   "PREMIUM": 0,
  //   "SUITE": 0,
  //   "SUPERDELUX": 0,
  //   "PremiereRetreat": 0,
  //   "EliteSuite": 0,
  //   "GrandDeluxe": 0,
  //   "ImperialSuite": 0,
  //   "SupremeRetreat": 0,
  //   "RoyalDeluxe": 0,
  //   "PrestigeSuite": 0,
  //   "ExclusiveRetreat": 0
  // })

  // const totalCost = (currency: any, ratesChange: any) => {
  //   try {
  //     var deluxcost = Delux * Number(ratesChange["1"]["Price"]);
  //   } catch {
  //     deluxcost = 0;
  //   }
  //   try {
  //     var sdcost = SuperDelux * Number(ratesChange["2"]["Price"]);
  //   } catch {
  //     sdcost = 0;
  //   }
  //   try {
  //     var suitecost = Suite * Number(ratesChange["3"]["Price"]);
  //   } catch {
  //     suitecost = 0;
  //   }
  //   try {
  //     var premiumcost = Premium * Number(ratesChange["4"]["Price"]);
  //   } catch {
  //     premiumcost = 0;
  //   }
  //   try {
  //     var premiereretreatcost =
  //       PremiereRetreat * Number(ratesChange["5"]["Price"]);
  //   } catch {
  //     premiereretreatcost = 0;
  //   }
  //   try {
  //     var elitesuitecost =
  //       EliteSuite * Number(ratesChange["6"]["Price"]);
  //   } catch {
  //     elitesuitecost = 0;
  //   }
  //   try {
  //     var granddeluxecost =
  //       GrandDeluxe * Number(ratesChange["7"]["Price"]);
  //   } catch {
  //     granddeluxecost = 0;
  //   }
  //   try {
  //     var imperialsuitecost =
  //       ImperialSuite * Number(ratesChange["8"]["Price"]);
  //   } catch {
  //     imperialsuitecost = 0;
  //   }
  //   try {
  //     var supremeretreatcost =
  //       SupremeRetreat * Number(ratesChange["9"]["Price"]);
  //   } catch {
  //     supremeretreatcost = 0;
  //   }
  //   try {
  //     var royaldeluxecost =
  //       RoyalDeluxe * Number(ratesChange["10"]["Price"]);
  //   } catch {
  //     royaldeluxecost = 0;
  //   }
  //   try {
  //     var prestigesuitecost =
  //       PrestigeSuite * Number(ratesChange["11"]["Price"]);
  //   } catch {
  //     prestigesuitecost = 0;
  //   }
  //   try {
  //     var exclusiveretreatcost =
  //       ExclusiveRetreat * Number(ratesChange["12"]["Price"]);
  //   } catch {
  //     exclusiveretreatcost = 0;
  //   }

  //   let tax = 0;
  //   let cost =
  //     Number(deluxcost) +
  //     Number(sdcost) +
  //     Number(suitecost) +
  //     Number(premiumcost) +
  //     Number(premiereretreatcost) +
  //     Number(elitesuitecost) +
  //     Number(granddeluxecost) +
  //     Number(imperialsuitecost) +
  //     Number(supremeretreatcost) +
  //     Number(royaldeluxecost) +
  //     Number(prestigesuitecost) +
  //     Number(exclusiveretreatcost);
  //   // Number( Mealprice);
  //   if (currency == "INR") {
  //     //   if (addTax) {
  //     //     tax = 0.18 * Number(cost);
  //     //   }
  //     // } else {
  //     //   tax = 0;
  //     // }
  //     let totalcost = Number(cost) + Number(tax);
  //     return totalcost;
  //   }

  // }

  // interface GetRoomType {
  //   roomtype: string,
  //   Adult: number
  // }
  // const relatedToRoomPricing = ({ roomtype, Adult }: GetRoomType) => {
  //   if (roomtype === "1") { setDeluxAdult(Adult) }
  //   if (roomtype === "2") { setSuperDeluxAdult(Adult) }
  //   if (roomtype === "3") { setSuiteAdult(Adult) }
  //   if (roomtype === "4") { setPremiumAdult(Adult) }
  //   if (roomtype === "5") { setPremiereRetreatAdult(Adult) }
  //   if (roomtype === "6") { setEliteSuiteAdult(Adult) }
  //   if (roomtype === "7") { setGrandDeluxeAdult(Adult) }
  //   if (roomtype === "8") { setImperialSuiteAdult(Adult) }
  //   if (roomtype === "9") { setSupremeRetreatAdult(Adult) }
  //   if (roomtype === "10") { setRoyalDeluxeAdult(Adult) }
  //   if (roomtype === "11") { setPrestigeSuiteAdult(Adult) }
  //   if (roomtype === "12") { setExclusiveRetreatAdult(Adult) }
  // }

  const handleAddRoom = (room: any) => {
    // console.log(room)
    const updatedMessages = mymessages.map((msg) => {
      if (msg.roomsDetails && msg?.roomsDetails?.length > 0) {
        const updatedRooms = msg.roomsDetails.map((roomItem) => {
          if (roomItem._id?.[`$oid` as any] === room._id?.$oid) {
            // Add or update the field only for the clicked room
            if (roomItem.roomQuantity) {
              if (roomItem?.roomQuantity < roomItem?.noOfRooms) {
                return {
                  ...roomItem,
                  roomQuantity: roomItem.roomQuantity + 1,
                };
              }
            } else {
              // setIsRoomAdd(true);
              return {
                ...roomItem,
                roomQuantity: 1,
              };
            }
          }

          return roomItem; // leave other rooms unchanged
        });

        return {
          ...msg,
          roomsDetails: updatedRooms,
        };
      }
      return {
        ...msg,
      };
    });

    setMyMessages([...updatedMessages] as any);
  };

  const handleRemoveRoom = (room: any) => {
    // const testData = mymessages.filter((msg) => {
    //   if (msg?.roomsDetails && msg?.roomsDetails?.length > 0) return msg;
    // })[0];

    const updatedMessages = mymessages.map((msg) => {
      if (msg.roomsDetails && msg?.roomsDetails?.length > 0) {
        const updatedRooms = msg.roomsDetails.map((roomItem) => {
          if (roomItem._id?.["$oid" as any] === room._id?.$oid) {
            // Add or update the field only for the clicked room
            if (Number(roomItem?.roomQuantity) === 1) {
              setIsRoomAdd(false);
            }
            return {
              ...roomItem,
              roomQuantity: Number(roomItem.roomQuantity) - 1,
            };
          }
          return roomItem; // leave other rooms unchanged
        });

        return {
          ...msg,
          roomsDetails: updatedRooms,
        };
      }

      return msg;
    });

    setMyMessages([...updatedMessages] as any);
  };
  // const DelCount = (id: String) => {
  //   // setIsOpen(false)
  //   let number = Number(document.getElementById(id).innerHTML);
  //   if (number > 0) {
  //     number -= 1;
  //     if (id === "DELUX") {
  //       setDelux(number)
  //     }
  //     if (id === "SUPER DELUX") {
  //       setSuperDelux(number)
  //     }
  //     if (id === "SUITE") {
  //       setSuite(number)
  //     }
  //     if (id === "PREMIUM") {
  //       setPremium(number)
  //     }
  //     if (id === "Premiere Retreat") {
  //       setPremiereRetreat(number)
  //     }
  //     if (id === "Elite Suite") {
  //       setEliteSuite(number)
  //     }
  //     if (id === "Grand Deluxe") {
  //       setGrandDeluxe(number)
  //     }
  //     if (id === "Imperial Suite") {
  //       setImperialSuite(number)
  //     }
  //     if (id === "Supreme Retreat") {
  //       setSupremeRetreat(number)
  //     }
  //     if (id === "Royal Deluxe") {
  //       setRoyalDeluxe(number)
  //     }
  //     if (id === "Prestige Suite") {
  //       setPrestigeSuite(number)
  //     }
  //     if (id === "Exclusive Retreat") {
  //       setExclusiveRetreat(number)
  //     }
  //     let price = number * Number(Original_Price)
  //     setPrice(price)
  //     setRooms(number)
  //   }
  // }

  // const AddCount = (id: String) => {
  //   // setIsOpen(false)
  //   let number = 0;
  //   if (number < Available_rooms) {
  //     number += 1;
  //     if (id === "DELUX") {
  //       setDelux(number)
  //       setRoomCategoryCombination((prevRoomcatname) => ({
  //         ...prevRoomcatname,
  //         ["DELUX"]: name,
  //       }));
  //     }
  //     if (id === "SUPER DELUX") {
  //       setSuperDelux(number)
  //       setRoomCategoryCombination((prevRoomcatname) => ({
  //         ...prevRoomcatname,
  //         ["SUPERDELUX"]: name,
  //       }));
  //     }
  //     if (id === "SUITE") {
  //       setSuite(number)
  //       setRoomCategoryCombination((prevRoomcatname) => ({
  //         ...prevRoomcatname,
  //         ["SUITE"]: name,
  //       }));
  //     }
  //     if (id === "PREMIUM") {
  //       setPremium(number)
  //       setRoomCategoryCombination((prevRoomcatname) => ({
  //         ...prevRoomcatname,
  //         ["PREMIUM"]: name,
  //       }));
  //     }
  //     if (id === "Premiere Retreat") {
  //       setPremiereRetreat(number)
  //       setRoomCategoryCombination((prevRoomcatname) => ({
  //         ...prevRoomcatname,
  //         ["PremiereRetreat"]: name,
  //       }));
  //     }
  //     if (id === "Elite Suite") {
  //       setEliteSuite(number)
  //       setRoomCategoryCombination((prevRoomcatname) => ({
  //         ...prevRoomcatname,
  //         ["EliteSuite"]: name,
  //       }));
  //     }
  //     if (id === "Grand Deluxe") {
  //       setGrandDeluxe(number)
  //       setRoomCategoryCombination((prevRoomcatname) => ({
  //         ...prevRoomcatname,
  //         ["GrandDeluxe"]: name,
  //       }));
  //     }
  //     if (id === "Imperial Suite") {
  //       setImperialSuite(number)
  //       setRoomCategoryCombination((prevRoomcatname) => ({
  //         ...prevRoomcatname,
  //         ["ImperialSuite"]: name,
  //       }));
  //     }
  //     if (id === "Supreme Retreat") {
  //       setSupremeRetreat(number)
  //       setRoomCategoryCombination((prevRoomcatname) => ({
  //         ...prevRoomcatname,
  //         ["SupremeRetreat"]: name,
  //       }));
  //     }
  //     if (id === "Royal Deluxe") {
  //       setRoyalDeluxe(number)
  //       setRoomCategoryCombination((prevRoomcatname) => ({
  //         ...prevRoomcatname,
  //         ["RoyalDeluxe"]: name,
  //       }));
  //     }
  //     if (id === "Prestige Suite") {
  //       setPrestigeSuite(number)
  //       setRoomCategoryCombination((prevRoomcatname) => ({
  //         ...prevRoomcatname,
  //         ["PrestigeSuite"]: name,
  //       }));
  //     }
  //     if (id === "Exclusive Retreat") {
  //       setExclusiveRetreat(number)
  //       setRoomCategoryCombination((prevRoomcatname) => ({
  //         ...prevRoomcatname,
  //         ["ExclusiveRetreat"]: name,
  //       }));
  //     }
  //     let price = number * Number(Original_Price)
  //     setPrice(price)
  //     setRooms(number)
  //   }

  // }
  // const GetPayLaterOrderId = async () => {
  //   // setispaymentProcessing(true);
  //   const totoalcost = 2000;
  //   const currency = "INR";
  //   const Name = "test";
  //   const Email = "test@gmail.com";
  //   const Phone = "1234567890";
  //   const City = "city";
  //   const Country = "country";
  //   const cost = 1500;
  //   const tax = 18;

  //   const response = await fetch(
  //     `https://nexon.eazotel.com/payment/create_order`,
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json, text/plain, /",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         roomNumbers: [],
  //         hId: "56369483",
  //         ndid: "e50d8dc6-4cfc-4c87-b6c0-145ccdeb4121",
  //         amount: totoalcost,
  //         currency: currency,
  //         guestInfo: {
  //           guestName: Name,
  //           EmailId: Email,
  //           Phone: Phone,
  //           City: City,
  //           Country: Country,
  //           address: City,
  //         },
  //         Adults: 3,
  //         Kids: 0,
  //         Bookings: [
  //           // { RoomType: "1", Qty:  Delux },
  //           // { RoomType: "2", Qty:  SuperDelux },
  //           // { RoomType: "3", Qty:  Suite },
  //           // { RoomType: "4", Qty:  Premium },
  //           // { RoomType: "5", Qty:  PremiereRetreat },
  //           // { RoomType: "6", Qty:  EliteSuite },
  //           // { RoomType: "7", Qty:  GrandDeluxe },
  //           // { RoomType: "8", Qty:  ImperialSuite },
  //           // { RoomType: "9", Qty:  SupremeRetreat },
  //           // { RoomType: "10", Qty:  RoyalDeluxe },
  //           // { RoomType: "11", Qty:  PrestigeSuite },
  //           // { RoomType: "12", Qty:  ExclusiveRetreat },
  //         ],
  //         payment: {
  //           Status: "PENDING",
  //           RefNo: "",
  //           PaymentProvider: "RazorPay",
  //           Mode: "Online",
  //         },
  //         mealPlan: {
  //           // PackageId:  mealplanId,
  //           // PackageName:  selectedMealPlan,
  //           // PackagePrice:  Mealprice,
  //           // PackageperRoom:  isperRoom,
  //         },
  //         promocode: {
  //           PromoId: "NA",
  //           Code: "NA",
  //           Discount: "NA",
  //         },
  //         packages: {
  //           packageId: "NA",
  //           packageName: "NA",
  //           packagePrice: "NA",
  //           specialRequest: "NA",
  //         },
  //         checkIn: "2025-04-12",
  //         checkOut: "2025-04-12",
  //         price: {
  //           AmountPay: 0,
  //           Principal: cost,
  //           Tax: tax,
  //           Total: totoalcost,
  //         },
  //         isCheckedIn: false,
  //         isCheckedOut: false,
  //       }),
  //     }
  //   );

  //   const json = await response.json();
  //   console.log(json);

  //   if (json.Status === true) {
  //     console.log(json);
  //     //  setPayment({
  //     //   Status: true,
  //     //   Logo:  HotelLogo,
  //     //   HotelName:  HotelName,
  //     //   Order: json.order_id, // Order ID from the payment gateway
  //     //   Name: Name,
  //     //   Phone: Phone,
  //     //   Email: Email,
  //     //   City: City,
  //     //   Country: Country.label,
  //     //   Delux:  Delux,
  //     //   Sd:  SuperDelux,
  //     //   Suite:  Suite,
  //     //   Premium:  Premium,
  //     //   PremiereRetreat:  PremiereRetreat,
  //     //   EliteSuite:  EliteSuite,
  //     //   GrandDeluxe:  GrandDeluxe,
  //     //   ImperialSuite:  ImperialSuite,
  //     //   SupremeRetreat:  SupremeRetreat,
  //     //   RoyalDeluxe:  RoyalDeluxe,
  //     //   PrestigeSuite:  PrestigeSuite,
  //     //   ExclusiveRetreat:  ExclusiveRetreat,
  //     //   Checkin: localStorage.getItem("Checkin"),
  //     //   Checkout: localStorage.getItem("Checkout"),
  //     //   Adult: localStorage.getItem("Adult"),
  //     //   Kid: localStorage.getItem("Kid"),
  //     //   Tax: tax,
  //     //   Amount: totoalcost,
  //     //   PayStatus: "Pay At Hotel",
  //     //   MealPlan:  selectedMealPlan,
  //     //   Mealprice:  selectedMealPlanPrice,
  //     //   Rooms:  RoomCategoryCombination,
  //     // });
  //   } else {
  //     // document.getElementById("No_rooms").style.display = "block";
  //   }
  // };

  const cancelBooking = () => {
    // addUserMessage("Booking cancelled successfully");
    addBotMessage({
      message: "Booking cancelled successfully",
      buttons: [
        {
          label: "Start Again",
          nextFlowKey: "Start",
        },
        {
          label: "Book Now",
          nextFlowKey: "Explore Location",
        },
      ],
      from: "bot",
    });
  };

  const addMoreRooms = () => {
    const rooms = mymessages?.filter((item) => item?.roomsDetails)[0];

    addBotMessage({
      roomsDetails: [...(rooms?.roomsDetails as any)],
      from: "bot",
      message: "",
    });
  };

  const ChangeCheckinoutData = () => {
    addBotMessage({
      message: "Please fill your check-in and check-out details",
      checkInOutDetails: true,
      from: "bot",
    });

    setIsBeforeCheckInOutSubmit(true);
  };

  // useEffect for scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isTyping]);

  useEffect(() => {
    const rooms = mymessages?.filter((item) => item?.roomsDetails)[0];
    if (rooms?.roomsDetails && rooms?.roomsDetails?.length > 0) {
      const isAdded = rooms?.roomsDetails?.some(
        (item) => Number(item?.roomQuantity) > 0
      );
      if (isAdded) setIsRoomAdd(true);
    }
  }, [mymessages]);

  const fetchBaseData = async () => {
    try {
      const { data } = await axios.get(
        "https://nexon.eazotel.com/booking/getenginedetails/e50d8dc6-4cfc-4c87-b6c0-145ccdeb4121/56369483"
      );

      setHeadingTitle(data?.Profile?.hotelName);
      setPhoneNumber(data?.Profile?.hotelPhone);
      setHotelDetails(data?.Profile);

      setThemeStyle({
        ...data?.Details?.Colors,
      });

      setMyMessages(() => [
        {
          from: "bot",
          ...(chatFlow["Start"] as any),
          message: `Welcome to ${data?.Profile?.hotelName}, How can I help you today?`,
        },
      ]);

      setDetails({
        AboutUs: data?.Details?.AboutUs,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBaseData();
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mymessages]);

  // interface ToTalPriceType {
  //   room: number,
  //   price: number,
  // }

  // const totalPrice = (summary: any, operation: "add" | "subtract") => {
  //   const total = summary?.reduce((acc: number, item: any) => {
  //     return acc + (item.price * item.roomQuantity);
  //   }, 0);

  //   if (operation === "add") {
  //     setTotalBookingPrice((prev: number) => prev + total);
  //   } else {
  //     setTotalBookingPrice((prev: number) => prev - total);
  //   }

  //   return total;
  // };

  // useEffect(() => {
  //   // 1. Find the message with roomSummary
  //   const summaryObj = mymessages.find(msg => msg?.roomSummary);

  //   if (!summaryObj?.roomSummary || !Array.isArray(summaryObj.roomSummary)) return;

  //   // 2. Calculate room total (price * roomQuantity)
  //   const roomTotal = summaryObj.roomSummary.reduce((acc, item: any) => {
  //     return acc + (item.price * item.roomQuantity);
  //   }, 0);

  //   let nights = 1; // Default to 1 night if no dates found

  //   // 4. Calculate final total price
  //   const totalPrice = roomTotal * nights;

  // }, [mymessages]);

  // console.log(hotelDetails)

  console.log(mymessages);
  return (
    <div className="bg-black/60 w-full h-full">
      <div className="fixed right-0 bottom-0">
        <div className=" bg-white pb-5 rounded-t-xl shadow-2xl overflow-hidden  h-[100dvh] sm:h-[85dvh]  flex flex-col scroll w-full md:w-[390px] overflow-x-hidden mx-auto relative">
          {/* Header */}
          <div
            className={` ${
              mymessages.length <= 1 ? "h-[168px] p-4" : "h-[50px]"
            } relative duration-300 justify-between items-center transition-all rounded-t-xl flex w-full overflow-hidden`}
            style={{
              background: themeStyle?.BackgroundColor,
              color: "white",
            }}
          >
            {mymessages.length <= 1 ? (
              <div className="flex flex-col gap-4 w-full justify-center items-center">
                <Image
                  width={80}
                  height={80}
                  src={logo || ""}
                  alt="Hotel logo"
                  className="h-18 w-18 border-4 border-orange-300 mr-2 object-contain rounded-full"
                />

                {/* )} */}
                <h1 className="font-medium text-md">{headingTitle}</h1>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center w-full px-5">
                <p>{headingTitle}</p>
              </div>
            )}

            <Link
              className="absolute right-4 top-4"
              href={`tel:+91${hotelPhone}`}
            >
              <FaPhone className="rotate-90" />
            </Link>

            <div
              className="absolute left-3 top-3 font-bold cursor-pointer"
              onClick={onClose}
            >
              X
            </div>

            {/* <div className="flex space-x-2"> */}
            {/* <button
            onClick={onReset}
            className="p-1 rounded hover:bg-opacity-20 hover:rotate-45 duration-500"
            aria-label="Start new conversation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-.75-.75H11.77a.75.75 0 000 1.5h2.43l-.31.31a7 7 0 00-11.712 3.138.75.75 0 001.45.389a5.5 5.5 0 019.2-2.466l.312.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                clipRule="evenodd"
              />
            </svg>
          </button> */}

            {/* <button
              onClick={onClose}
              className="p-1 rounded hover:bg-opacity-20 hover:rotate-180 duration-500"
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button> */}
            {/* </div> */}
          </div>

          {/* Messages area */}
          <div className="max-w-md mx-auto overflow-hidden rounded space-y-4 flex-1 overflow-y-auto w-full scroll-hidden">
            <div
              className={`${
                mymessages.length <= 1 ? "mt-14" : ""
              } p-4 space-y-4`}
            >
              {mymessages.map((msg, i) => {
                return (
                  <div key={i} className="space-y-5 ">
                    {msg?.message && (
                      <div
                        key={i}
                        className={`text-md flex ${
                          msg.from === "bot"
                            ? "justify-start text-black"
                            : "text-start justify-end"
                        }`}
                      >
                        <p
                          style={{
                            backgroundColor:
                              msg?.from === "bot"
                                ? "#f5f7fa"
                                : themeStyle?.BackgroundColor || "#2e3b61",
                          }}
                          className={`px-4 py-1.5 inline-block ${
                            msg.from === "bot"
                              ? "bg-gray-100 text-[#616e7c] text-md rounded-br-2xl rounded-bl-2xl rounded-tr-2xl"
                              : "bg-[#2e3b61] text-white rounded-br-2xl rounded-bl-2xl rounded-tl-2xl"
                          }`}
                        >
                          {/* bg-[#f5f7fa] */}
                          {msg.message}
                        </p>
                      </div>
                    )}

                    {msg?.buttons && msg?.buttons?.length > 0 && (
                      <div className="flex flex-wrap justify-end gap-3">
                        {msg?.buttons?.map((btn, i) => (
                          <button
                            disabled={btn?.disabled}
                            key={i}
                            onClick={() => handleButtonClick(btn)}
                            style={{
                              border: themeStyle?.BackgroundColor
                                ? `1px solid ${themeStyle?.BackgroundColor}`
                                : `1px solid black`,
                              color: themeStyle?.BackgroundColor
                                ? themeStyle?.BackgroundColor
                                : "black",
                            }}
                            className={`px-3 py-1.5 text-md rounded-full ${
                              btn?.disabled ? "opacity-50" : "cursor-pointer"
                            }`}
                          >
                            {btn?.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {msg?.location && Object.keys(msg?.location).length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {Object.entries(msg?.location).map(
                          ([key, value], i) => (
                            <button
                              disabled={value?.disabled as boolean}
                              key={i}
                              onClick={() => handleSelectLoaction(key, value)}
                              className={` border-1 border-[#2e3b61] text-[#2e3b61] px-3 py-1.5 text-md rounded-full
                              ${
                                value?.disabled
                                  ? "opacity-50 cursor-not-allowed"
                                  : "cursor-pointer"
                              }`}
                              style={{
                                color: themeStyle?.BackgroundColor
                                  ? themeStyle?.BackgroundColor
                                  : "#2e3b61",
                                border: themeStyle?.BackgroundColor
                                  ? `1px solid ${themeStyle?.BackgroundColor}`
                                  : "1px solid #2e3b61",
                              }}
                            >
                              {value?.state}
                            </button>
                          )
                        )}
                      </div>
                    )}

                    {msg?.personalDetails &&
                      msg?.personalDetails?.length > 0 && (
                        <form
                          onSubmit={(e) =>
                            handleFormSubmit(e, "personalDetails")
                          }
                        >
                          <div className="flex flex-col gap-3 shadow px-3 py-3 !w-70 rounded-md">
                            {msg?.personalDetails?.map((val, i) => (
                              <div className="flex flex-col gap-1" key={i}>
                                <label
                                  htmlFor=""
                                  className="capitalize text-gray-500 text-sm"
                                >
                                  {val?.key}
                                </label>
                                <input
                                  type={val?.type}
                                  key={i}
                                  name={val?.key}
                                  onChange={handleInputChange}
                                  placeholder={val?.placeholder}
                                  required
                                  className={`${
                                    i == 2 ? "w-full" : "w-full"
                                  } bg-white border border-gray-300 text-black px-3 py-2 text-sm rounded-md outline-none`}
                                />
                              </div>
                            ))}
                            <div className="flex w-full justify-center  items-center">
                              <button
                                className=" text-white py-1.5 px-6 text-sm tracking-wide rounded-full cursor-pointer"
                                style={{
                                  background: themeStyle?.BackgroundColor
                                    ? themeStyle?.BackgroundColor
                                    : "#2e3b61",
                                }}
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </form>
                      )}

                    {msg?.checkInOutDetails && (
                      <form
                        onSubmit={(e) =>
                          handleFormSubmit(
                            e,
                            "checkInOutDetails",
                            !isBeforeCheckInOutSubmit
                          )
                        }
                        className="w-66 bg-gray-100 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl overflow-hidden"
                      >
                        <div className="flex flex-col gap-5 shadow px-3 py-3 rounded-md date-picker-container">
                          <DatePicker
                            maxDate={msg?.disabled ? new Date() : undefined}
                            inline
                            selectsRange
                            startDate={startDate}
                            endDate={endDate}
                            required
                            onChange={(update: [Date | null, Date | null]) => {
                              setDateRange(update);
                            }}
                            isClearable
                            minDate={new Date()}
                          />

                          <div className="flex w-full justify-center  items-center">
                            <button
                              disabled={msg?.disabled}
                              className={`text-white bg- py-1.5 px-6 text-sm tracking-wide rounded-full cursor-pointer ${msg?.disabled && "opacity-30"}`}
                              style={{
                                background: themeStyle?.BackgroundColor
                                  ? themeStyle?.BackgroundColor
                                  : "#2e3b61",
                              }}
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </form>
                    )}

                    {msg?.numberOfGuests && (
                      <form
                        onSubmit={(e) => handleFormSubmit(e, "numberOfGuests")}
                      >
                        <div className="w-70 flex flex-col gap-3">
                          <div className="w-full max-w-sm">
                            <label className=" text-sm text-gray-500 mb-2">
                              How many guests will be staying?
                            </label>
                            <select
                              // value={selectedOption}
                              name="numberOfGuests"
                              onChange={handleInputChange}
                              className="w-full border border-gray-300 rounded-md px-2 py-2 text-sm outline-none"
                            >
                              <option value="" className="text-gray-500">
                                Number Of Guests
                              </option>
                              {[1, 2, 3, 4, 5].map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>

                            <p className="text-red-600 text-xs mt-1">
                              {error && "Adults should be less then 3"}
                            </p>
                          </div>

                          {/* <input
                            type="number"
                            name="numberOfGuests"
                            // required
                            placeholder="Adults and children ( less then 12 years)"
                            className="bg-white border w-full border-gray-300 text-black px-3 py-2 text-sm rounded-md outline-none"
                          // onChange={handleInputChange}
                          /> */}
                          <div className="flex w-full justify-end  items-center">
                            <button
                              disabled={msg?.disabled}
                              className={`text-white bg- py-1.5 px-6 text-sm tracking-wide rounded-full ${msg?.disabled ? "opacity-40" : "cursor-pointer"}`}
                              style={{
                                background: themeStyle?.BackgroundColor
                                  ? themeStyle?.BackgroundColor
                                  : "#2e3b61",
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    )}

                    {msg?.roomsDetails && (
                      <div className="w-[340px]">
                        {msg?.roomsDetails?.length > 0 ? (
                          <div className="w-full">
                            <div className="flex overflow-x-auto w-full gap-5 scroll-hidden">
                              {msg?.roomsDetails?.map((room, index) => (
                                <div
                                  key={index}
                                  className="w-full overflow-hidden rounded-br-3xl rounded-bl-3xl rounded-tr-3xl flex-shrink-0"
                                  // style={{ border: `1px solid ${themeStyle.BackgroundColor}` }}
                                >
                                  <div className=" relative w-full h-60">
                                    <Image
                                      src={
                                        room?.roomImage[0] !== "No Image"
                                          ? room?.roomImage[0]
                                          : ""
                                      }
                                      alt=""
                                      width={300}
                                      height={400}
                                      // fill
                                      className="w-full h-full object-cover"
                                    />
                                  </div>

                                  <div className=" flex flex-col items-center gap-2 p-2">
                                    <h2 className="text-lg font-semibold text-gray-600">
                                      {room?.roomName} ₹{room?.price}/Night
                                    </h2>

                                    <p className="text-md text-center text-gray-500">
                                      {room?.roomDescription}
                                    </p>
                                    <div className="w-full flex justify-center">
                                      {!room?.roomQuantity ? (
                                        <button
                                          className="text-sm text-white rounded-full px-3 py-2 w-full"
                                          onClick={() => handleAddRoom(room)}
                                          style={{
                                            background:
                                              themeStyle.BackgroundColor
                                                ? themeStyle.BackgroundColor
                                                : "#2e3b61",
                                          }}
                                        >
                                          Add Room
                                        </button>
                                      ) : (
                                        <div className="flex items-center gap-2">
                                          <span
                                            className="size-6  text-white rounded-sm flex items-center justify-center cursor-pointer"
                                            style={{
                                              background:
                                                themeStyle.BackgroundColor
                                                  ? themeStyle.BackgroundColor
                                                  : "#2e3b61",
                                            }}
                                            onClick={() =>
                                              handleRemoveRoom(room)
                                            }
                                          >
                                            -
                                          </span>
                                          <p className="font-medium text-xs">
                                            {room?.roomQuantity}
                                          </p>
                                          <span
                                            className="size-6 text-white rounded-sm flex items-center justify-center cursor-pointer"
                                            style={{
                                              background:
                                                themeStyle.BackgroundColor
                                                  ? themeStyle.BackgroundColor
                                                  : "#2e3b61",
                                            }}
                                            onClick={() => handleAddRoom(room)}
                                          >
                                            +
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                    {/* <p className="py-2 px-5 text-white w-full text-center rounded-full text-sm font-medium" style={{ background: themeStyle.BackgroundColor ? themeStyle.BackgroundColor : "#2e3b61" }}>
                                      RS {room?.price} / Night
                                    </p> */}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {isRoomAdd && (
                              <form className="flex items-center gap-4 mt-3 ">
                                <button
                                  disabled={msg?.disabled}
                                  className={`border border-[#2e3b61] bg-white px-3 py-1.5 text-[#2e3b61] rounded-full ${msg?.disabled && "opacity-30"}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    makeRoomSummary();
                                  }}
                                >
                                  Book Now
                                </button>
                                <button
                                  disabled={msg?.disabled}
                                  type="button"
                                  className={`border border-[#2e3b61] bg-white px-3 py-1.5 text-[#2e3b61] rounded-full ${msg?.disabled && "opacity-30"}`}
                                  onClick={() => addMoreRooms()}
                                >
                                  Add More Rooms
                                </button>
                              </form>
                            )}
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <p className="bg-gray-100 text-gray-500 w-fit px-3 py-1.5 rounded-bl-2xl rounded-br-2xl rounded-tr-2xl">
                              No Rooms Available!
                            </p>

                            <div className="flex flex-wrap gap-4">
                              <button
                                className="  px-3 py-2 text-sm rounded-full cursor-pointer"
                                style={{
                                  color: themeStyle.BackgroundColor
                                    ? themeStyle.BackgroundColor
                                    : "#2e3b61",
                                  border: `1px solid ${
                                    themeStyle.BackgroundColor
                                      ? themeStyle.BackgroundColor
                                      : "#2e3b61"
                                  }`,
                                }}
                                onClick={() => {
                                  handleButtonClick({
                                    label: "Explore Other Loacations",
                                    nextFlowKey: "Explore Location",
                                  });
                                }}
                              >
                                Explore Other Loacations
                              </button>

                              <button
                                className="  px-3 py-2 text-sm  rounded-full cursor-pointer"
                                style={{
                                  color: themeStyle.BackgroundColor
                                    ? themeStyle.BackgroundColor
                                    : "#2e3b61",
                                  border: `1px solid ${
                                    themeStyle.BackgroundColor
                                      ? themeStyle.BackgroundColor
                                      : "#2e3b61"
                                  }`,
                                }}
                                onClick={() => {
                                  ChangeCheckinoutData();
                                }}
                              >
                                Change Check-in-out Date
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {msg?.roomSummary && (
                      <div className=" flex flex-col gap-10">
                        <div className="flex flex-col gap-3 ">
                          <div className=" flex flex-col gap-5 text-md bg-gray-100 text-gray-600 w-[90%] p-5 rounded-br-3xl rounded-bl-3xl rounded-tr-3xl">
                            {/* <h2 className="">Room Summary</h2> */}
                            <h1 className=" text-lg">
                              Hotel Name: {headingTitle}
                            </h1>

                            <div>
                              <p>Name: {formData.name}</p>
                              <p>Phone: {formData.phone}</p>
                              <p>Email: {formData.email}</p>
                              <p>Check-in Date: {formatDate(startDate)}</p>
                              <p>Check-out Date: {formatDate(endDate)}</p>
                              <p>Number of Guest: {formData.numberOfGuests}</p>
                              <p>
                                Number Of Nights:{" "}
                                {startDate && endDate
                                  ? Math.max(
                                      1,
                                      Math.ceil(
                                        (endDate.getTime() -
                                          startDate.getTime()) /
                                          (1000 * 60 * 60 * 24)
                                      )
                                    )
                                  : "-"}
                              </p>
                            </div>

                            <div>
                              <p className="capitalize">
                                Address:{" "}
                                {hotelDetails.hotels &&
                                  hotelDetails?.hotels["56369483"].local}
                              </p>
                              <p>
                                City:{" "}
                                {hotelDetails.hotels &&
                                  hotelDetails?.hotels[hid].city}
                              </p>
                              <p>
                                State:{" "}
                                {hotelDetails.hotels &&
                                  hotelDetails?.hotels[hid].state}
                              </p>
                              <p>
                                Pincode:{" "}
                                {hotelDetails.hotels &&
                                  hotelDetails?.hotels[hid].city}
                              </p>
                              <p>
                                Country:{" "}
                                {hotelDetails.hotels &&
                                  hotelDetails?.hotels[hid].country}
                              </p>
                            </div>

                            <h1 className="font-medium">Room details :</h1>

                            {msg?.roomSummary?.map((item, index) => (
                              <div key={index} className="">
                                <section className="max-w-4xl mx-auto ">
                                  <h2 className="mb-2 font-semibold text-gray-600">
                                    {item?.roomTypeName}
                                  </h2>
                                  <p>Room Name: {item?.roomName} </p>
                                  {/* <p>Room Type: {item?.roomTypeName} </p> */}
                                  <p>
                                    Price Per Night: ₹
                                    {item?.price?.toLocaleString()}{" "}
                                  </p>
                                  <p>Number Of Rooms: {item?.roomQuantity} </p>
                                  <p>
                                    Total Price: ₹{" "}
                                    {Number(item?.price) *
                                      Number(item?.roomQuantity)}
                                  </p>

                                  {/* <div className="space-y-4 text-gray-800 text-base leading-relaxed">
                                <div className="flex gap-2 items-center">
                                  <FaBed className="text-indigo-600" />
                                  <span>
                                    <strong>Room Name:</strong> {item?.roomName}
                                  </span>
                                </div>

                                <div className="flex gap-2 items-center">
                                  <FaListUl className="text-indigo-600" />
                                  <span>
                                    <strong>Room Type:</strong>{" "}
                                    {item?.roomTypeName}
                                  </span>
                                </div>

                                <div className="flex gap-2 items-center">
                                  <FaRupeeSign className="text-indigo-600" />
                                  <span>
                                    <strong>Price per Night:</strong> ₹
                                    {item?.price?.toLocaleString()}
                                  </span>
                                </div>

                                <div className="flex gap-2 items-center">
                                  <FaListUl className="text-indigo-600" />
                                  <span>
                                    <strong>No. of Rooms:</strong>{" "}
                                    {item?.roomQuantity}
                                  </span>
                                </div>

                                <div className="flex gap-2 items-center">
                                  <FaListUl className="text-indigo-600" />
                                  <span>
                                    <strong>No. of Nights:</strong>{" "}
                                    {item?.numberOfNights}
                                  </span>
                                </div>

                                <div className="flex gap-2 items-center">
                                  <FaUsers className="text-indigo-600" />
                                  <span>
                                    <strong>Guests per Room:</strong>{" "}
                                    {item?.guestsPerRoom}
                                  </span>
                                </div>
                              </div> */}
                                </section>
                              </div>
                            ))}

                            <p>
                              <span className="font-medium">
                                {" "}
                                Total Price: ₹{" "}
                              </span>

                              <span className="font-bold">
                                {msg?.roomSummary?.reduce(
                                  (total, item) =>
                                    total +
                                    Number(item?.price) *
                                      Number(item?.roomQuantity),
                                  0
                                )}
                              </span>
                            </p>
                          </div>

                          <div className="flex flex-col gap-5 text-md bg-gray-100 w-[90%] px-5 py-1.5 text-gray-600 rounded-br-3xl rounded-bl-3xl rounded-tr-3xl">
                            Looks good? Let&#39;s proceed with your booking.
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <button
                            disabled={msg?.disabled}
                            className={`rounded-full px-4 py-2 cursor-pointer ${msg?.disabled && "opacity-30"}`}
                            style={{
                              color: themeStyle?.BackgroundColor
                                ? themeStyle?.BackgroundColor
                                : "#2e3b61",
                              border: themeStyle?.BackgroundColor
                                ? `1px solid ${themeStyle?.BackgroundColor}`
                                : "1px solid #2e3b61",
                            }}
                            onClick={() => confirmBooking()}
                          >
                            Confirm Booking
                          </button>

                          {/* <button
                            disabled={msg?.disabled}
                            className={`rounded-full px-4 py-2 cursor-pointer ${msg?.disabled && "opacity-30"}`}
                            style={{
                              color: themeStyle?.BackgroundColor
                                ? themeStyle?.BackgroundColor
                                : "#2e3b61",
                              border: themeStyle?.BackgroundColor
                                ? `1px solid ${themeStyle?.BackgroundColor}`
                                : "1px solid #2e3b61",
                            }}
                            onClick={cancelBooking}
                          >
                            Cancel Booking
                          </button> */}

                          <button
                            disabled={msg?.disabled}
                            className={`rounded-full px-4 py-2 cursor-pointer ${msg?.disabled && "opacity-30"}`}
                            style={{
                              color: themeStyle?.BackgroundColor
                                ? themeStyle?.BackgroundColor
                                : "#2e3b61",
                              border: themeStyle?.BackgroundColor
                                ? `1px solid ${themeStyle?.BackgroundColor}`
                                : "1px solid #2e3b61",
                            }}
                            onClick={addMoreRooms}
                          >
                            Add More Rooms
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {isTyping && (
                <div className="max-w-[80%] w-fit">
                  <div>
                    <p className="text-sm rounded-lg mt-1 text-[#474747]"></p>
                  </div>

                  <div className="w-fit">
                    <div className="flex bg-gray-200 py-3 gap-2 px-4 rounded-lg text-sm">
                      <div className="h-[10px] animate-pulse w-[10px] rounded-full bg-gray-400" />
                      <div className="h-[10px] animate-pulse w-[10px] rounded-full bg-gray-400" />
                      <div className="h-[10px] animate-pulse w-[10px] rounded-full bg-gray-400" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;

/* <div className="flex-1 flex-grow bg-gray-50 flex flex-col p-4 gap-2 overflow-auto scroll-hidden">
  <p className="text-sm rounded-lg text-[#474747]">{title}</p>

  <div
    className={`max-w-[80%] px-3 py-2 rounded-lg text-sm self-start bg-gray-200 text-gray-800`}
  >
    {messages}
  </div>

  {chat.map((msg, index) => (
    <>
      {msg.sender === "bot" && index !== 0 && (
        <p className="text-sm rounded-lg text-[#474747]">{title}</p>
      )}

      <div
        key={index}
        style={{
          background: `${msg?.sender === "user" ? (!Array.isArray(msg.text) ? theme : "") : "#EEEEEE"}`,
        }}
        className={`max-w-[85%] break-words whitespace-wrap px-3 py-2 rounded-lg text-sm ${
          msg.sender === "user"
            ? "self-end bg-gray-100 text-white"
            : "self-start bg-gray-200 text-gray-800"
        }`}
      >
        {Array.isArray(msg.text) ? (
          <div className="flex flex-wrap gap-2 justify-end border-t-[2px] py-2">
            {msg.text.map((opt, index) => (
              <div
                key={index}
                style={{
                  background: theme,
                }}
                className="text-white rounded-full px-3 py-1"
              >
                {opt}
              </div>
            ))}
          </div>
        ) : (
          msg.text
        )}
      </div>

      {msg?.options && (
        <div>
          <div className="flex flex-wrap gap-2 mt-2">
            {msg.options.map((opt, idx: number) => (
              <button
                key={idx}
                style={{
                  background: `${
                    selectedOptions[msg.key]?.value.includes(opt?.label)
                      ? theme
                      : "#eae6e6"
                  }`,

                  color: `${
                    selectedOptions[msg.key]?.value.includes(opt.label)
                      ? "#ffffff"
                      : "#393838"
                  }`,
                }}
                onClick={() =>
                  handleOptionSelect(opt, msg?.options as Option[], msg?.key)
                }
                className={`px-3 py-1 text-sm rounded-full border text-white`}
                disabled={selectedOptions[msg.key]?.isSelected}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {selectedOptions[msg.key] &&
            selectedOptions[msg.key].value.length > 0 &&
            !selectedOptions[msg.key]?.isSelected && (
              <div>
                <button
                  className="mx-0 bg-slate-900 text-white rounded-full text-sm px-6 mt-2 py-1"
                  onClick={() => handleConfirm()}
                >
                  Confirm
                </button>
              </div>
            )}
        </div>
      )}
    </>
  ))}

  {showFinalMessage && (
    <div className="max-w-full px-3 py-2 rounded-lg text-sm self-start bg-gray-200 text-gray-800">
      {`🎉 ${finalMessage}` || "🎉 Thank you for your responses!"}
    </div>
  )}

  {isTyping && (
    <div className="max-w-[80%] w-fit">
      <div>
        <p className="text-sm rounded-lg mt-1 text-[#474747]">{title}</p>
      </div>

      <div className="mt-1 w-fit">
        <div className="flex bg-gray-200 py-3 gap-2 px-4 rounded-lg text-sm">
          <div className="h-[10px] animate-pulse w-[10px] rounded-full bg-gray-400" />
          <div className="h-[10px] animate-pulse w-[10px] rounded-full bg-gray-400" />
          <div className="h-[10px] animate-pulse w-[10px] rounded-full bg-gray-400" />
        </div>
      </div>
    </div>
  )}

  <div ref={chatEndRef} />
</div>; */

// handleReset
// const onReset = () => {
//   setChat([
//     {
//       sender: "bot",
//       text: messageFlows[0].question,
//       key: messageFlows[0].key as string,
//     },
//   ]);
//   setCurrentIndex(0);
//   setAnswers({});
//   setShowFinalMessage(false);
//   setSelectedOptions({});
// };
