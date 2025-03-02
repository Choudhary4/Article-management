import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import ArticleCard from "./CourseCard"; // Assuming this is the article card component
import HighlightText from "./HighlightText";

const tabsName = [
  "All Articles",
  "Newest Submissions",
  "Most Accessed",
  "Research Categories",
  "Department Contributions",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [articles, setArticles] = useState(HomePageExplore[0].articles);
  const [currentCard, setCurrentCard] = useState(HomePageExplore[0].articles[0].title);

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((article) => article.tag === value);
    setArticles(result[0].articles);
    setCurrentCard(result[0].articles[0].title);
  };

  return (
    <div>
      {/* Explore more section */}
      <div className="text-center my-10">
        <div className="text-4xl font-semibold">
          Discover and
          <HighlightText text={"Manage Research Articles"} />
        </div>
        <p className="text-richblack-300 text-lg font-semibold mt-1">
          Access and Contribute to Your Department's Research Collection
        </p>
      </div>

      {/* Tabs Section */}
      <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabsName.map((ele, index) => {
          return (
            <div
              key={index}
              className={`text-[16px] flex items-center gap-2 px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer ${
                currentTab === ele
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } hover:bg-richblack-900 hover:text-richblack-5`}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </div>
          );
        })}
      </div>

      {/* Space for large screens */}
      <div className="hidden lg:block lg:h-[200px]"></div>

      {/* Cards Group */}
      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {articles.map((ele, index) => {
          return (
            <ArticleCard
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
