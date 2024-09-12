import { Container, Section } from "@/components";

const htmlForm = () => {
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
          <form className="bg-blue-primary rounded-md text-white px-7 py-5">
            <div className="py-4">
              <h2 className="text-3xl font-p-d">Fill the Form</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
              <div className="">
                <input
                  type="text"
                  name="name"
                  placeholder="your Full Name"
                  className="w-full py-3 px-2 rounded-md outline-none"
                  required
                />
              </div>
              <div className="input-div">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full py-3 px-2 rounded-md outline-none"
                  required
                />
              </div>
              <div className="input-div">
                <input type="email" name="email" className="w-full py-3 px-2 rounded-md outline-none" placeholder="Email" required />
              </div>
              <div className="input-div job-section bg-white text-gray-400 flex justify-between rounded-md overflow-hidden px-3">
                <select name="job title" id="job" required>
                  <option value="0" selected>
                    Job Title
                  </option>
                  <option value="1">one</option>
                  <option value="2">two</option>
                </select>

                <div className="svg" id="select-svg">
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
              <div className="input-div">
                <input
                  type="url"
                  name="Linkedin"
                  placeholder="Linkedin"
                  className="w-full py-3 px-2 rounded-md outline-none"
                  required
                />
              </div>
              <div className="file-upload-wrapper">
                <label
                  htmlFor="resume-upload"
                  className="upload-text cursor-pointer"
                >
                  Upload Resume*
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume-upload"
                  className="file-upload"
                />
                <label htmlFor="resume-upload" className="custom-file-upload">
                  Choose File
                </label>
              </div>
            </div>
            <div className="py-4 flex justify-center mt-3">
              <button type="submit" className="px-5 py-2 uppercase rounded-md lg:text-lg bg-orange-primary ">submit your resume</button>
            </div>
          </form>
        </Container>
      </Section>
    </>
  );
};

export default htmlForm;
