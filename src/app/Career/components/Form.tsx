"use client";
import { Container, Section } from "@/components";
import { useState } from "react";

const htmlForm = () => {
  // const [userName, setUserName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [userPhone, setUserPhone] = useState("");
  // const [jobTitle, setJobTitle] = useState("");
  // const [url, setUrl] = useState("");
  // const [resume, setResume] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // console.log(userName,userEmail,userPhone,jobTitle,url,resume);
    // setUserPhone("");
    // setUserEmail("");
    alert("Your details submitted successfully");
  };

  return (
    <>
      <Section>
        <Container>
          <article className="flex flex-col gap-4">
            <h2 className="text-center text-3xl max-md:text-xl text-orange-primary font-p-d">
              Want to Join <span className="text-gray-primary">Our Team?</span>
            </h2>
            <p className="text-center text-lg max-md:text-base max-w-4xl mx-auto w-full">
              Craft your career with purposeful steps and passionate pursuits,
              htmlForging a path that resonates with your aspirations and
              strengths.
            </p>
          </article>
        </Container>
      </Section>

      <Section className="lg:pt-0 lg:pb-12">
        <Container>
          <form
            className="bg-blue-primary rounded-md text-white lg:px-7 px-3 py-5"
            onSubmit={handleSubmit}
          >
            <div className="py-4">
              <h2 className="text-3xl font-p-d">Fill the Form</h2>
            </div>
            <div className="lg:grid flex flex-col grid-cols-2 gap-4 text-black">
              <div className="">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  className="w-full py-3 px-2 rounded-md outline-none"
                  required
                  // value={userName}
                  // onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="input-div">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full py-3 px-2 rounded-md outline-none"
                  required
                  // value={userPhone}
                  // onChange={(e) => setUserPhone(e.target.value)}
                />
              </div>
              <div className="input-div">
                <input
                  type="email"
                  name="email"
                  className="w-full py-3 px-2 rounded-md outline-none"
                  placeholder="Email"
                  required
                  // value={userEmail}
                  // onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div className="bg-white relative text-gray-400 flex justify-between rounded-md overflow-hidden">
                <select
                  name="job title"
                  id="job"
                  required
                  // value={jobTitle}
                  // onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full appearance-none px-3 py-3 outline-none"
                >
                  <option value="0">Job Title</option>
                  <option value="1">one</option>
                  <option value="2">two</option>
                </select>

                <div
                  className="absolute right-3 top-4 pointer-events-none"
                  id="select-svg"
                >
                  <svg
                    width="29"
                    height="18"
                    viewBox="0 0 29 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.7988 3.08891L26.4655 0.911133L14.7988 12.4222L3.13216 0.911132L0.798828 3.08891L14.7988 17.0889L28.7988 3.08891Z"
                      fill="#D0B376"
                    />
                  </svg>
                </div>
              </div>
              <div className="">
                <input
                  type="url"
                  name="Linkedin"
                  placeholder="Linkedin"
                  className="w-full py-3 px-2 rounded-md outline-none t"
                  required
                />
              </div>
              <div
                className="relative flex items-center justify-between w-full
                bg-white text-gray-400 cursor-pointer rounded-md overflow-hidden px-2 max-md:py-2"
              >
                <label
                  htmlFor="resume-upload"
                  className="upload-text text-[#727272] cursor-pointer"
                >
                  Upload Resume*
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume-upload"
                  className="absolute left-0 top-0 w-full h-full z-0 opacity-0 outline-none"
                />
                <label
                  htmlFor="resume-upload"
                  className="flex z-10 active:scale-90 bg-orange-primary px-3 py-2 rounded-md border border-orange-primary text-white max-md:text-xs max-md:w-full hover:bg-white hover:text-orange-primary"
                >
                  Choose File
                </label>
              </div>
            </div>
            <div className="py-4 flex justify-center mt-3">
              <button
                type="submit"
                className="px-5 py-2 uppercase rounded-md active:scale-90 lg:text-lg bg-orange-primary hover:bg-white hover:text-orange-primary text-white duration-500"
              >
                submit your resume
              </button>
            </div>
          </form>
        </Container>
      </Section>
    </>
  );
};

export default htmlForm;
