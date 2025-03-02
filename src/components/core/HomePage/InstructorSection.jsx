import React from 'react';
import CTAButton from '../HomePage/CTAButton';
import { FaArrowRight } from "react-icons/fa";
import ResearchImage from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-[50%]">
            <img
              src={ResearchImage}
              alt="Research"
              className="shadow-white shadow-[-20px_-20px_0_0]"
            />
          </div>
          <div className="lg:w-[50%] flex gap-10 flex-col">
            <h1 className="lg:w-[50%] text-4xl font-semibold ">
              Contribute to
              <HighlightText text={"Research Archives"} />
            </h1>

            <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
              Share your research and collaborate with peers. Our platform provides comprehensive tools to manage, upload, and access department research articles efficiently.
            </p>

            <div className="w-fit">
              <CTAButton active={true} linkto={"/submit-article"}>
                <div className="flex items-center gap-3">
                  Submit Your Article
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
    </div>
  );
};

export default InstructorSection;
