import React from "react";
import HighLightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/CTAButton";

const LearningGridArray = [
  {
    order: -1,
    heading: "Effortless Management for",
    highliteText: "Research Articles",
    description:
      "ArticleStorage provides a seamless platform to manage, organize, and access research articles from various fields, ensuring that valuable insights are always within reach.",
    BtnText: "Explore Now",
    BtnLink: "/articles",
  },
  {
    order: 1,
    heading: "Centralized Repository",
    description:
      "Store all your department's research articles in one secure, accessible location to streamline collaboration and knowledge sharing.",
  },
  {
    order: 2,
    heading: "Advanced Search Capabilities",
    description:
      "Easily find articles with powerful search features, including filters for author, publication date, keywords, and more.",
  },
  {
    order: 3,
    heading: "Secure and Reliable",
    description:
      "Ensure the safety of your research with top-notch security protocols and data backups.",
  },
  {
    order: 4,
    heading: `Collaborative Tools`,
    description:
      "Enable seamless collaboration among researchers with features like shared annotations and article discussions.",
  },
  {
    order: 5,
    heading: "Accessibility Anywhere",
    description:
      "Access your research articles anytime, anywhere with responsive design and cloud-based storage.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighLightText text={card.highliteText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
