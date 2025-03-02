import React from "react";
import ResearchTimelineImage from   "../../../assets/Images/TimelineImage.png";
import Step1Logo from "../../../assets/TimeLineLogo/Logo1.svg";
import Step2Logo from "../../../assets/TimeLineLogo/Logo2.svg";
import Step3Logo from "../../../assets/TimeLineLogo/Logo3.svg";
import Step4Logo from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
    {
      Logo: Step1Logo,
      Heading: "Initiation",
      Description: "Defining research objectives and gathering initial resources.",
    },
    {
      Logo: Step2Logo,
      Heading: "Collaboration",
      Description: "Connecting with peers for resource sharing and discussion.",
    },
    {
      Logo: Step3Logo,
      Heading: "Analysis",
      Description: "Analyzing data and developing insights with advanced tools.",
    },
    {
      Logo: Step4Logo,
      Heading: "Publication",
      Description: "Publishing findings and archiving articles in the repository.",
    },
];

const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt={ele.Heading} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
            {/* Section 1 */}
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">10</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Years of research
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">500+</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Published articles
              </h1>
            </div>
            <div></div>
          </div>
          <img
            src={ResearchTimelineImage}
            alt="Research Timeline"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
