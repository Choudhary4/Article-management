import React from 'react'
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/HomePage/HighlightText';
import Banner from '../assets/Images/banner.mp4'
import CTAButton from '../components/core/HomePage/CTAButton';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ReviewSlider from '../components/common/ReviewSlider';
import Footer from '../components/common/Footer';

export default function Home() {
  return (
    <div>
      {/* section-1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Upload Articles Button */}
        <Link to={"/submit"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Submit Research Article</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Organize and Access Your
          <HighlightText text={"Research Effortlessly"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          Our platform offers an efficient solution to store, access, and manage research articles for your department. Stay organized and up-to-date with the latest publications.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Get Started
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Learn More
          </CTAButton>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Simplify Your
                <HighlightText text={"Research Management"} /> with Our Platform
              </div>
            }
            subheading={
              "Designed with academics in mind, our solution makes it simple to upload, manage, and access research articles across departments, enhancing collaboration and productivity."
            }
            ctabtn1={{
              btnText: "Submit Your Article",
              link: "/submit",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/learn-more",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`Welcome to Department Research Storage, your dedicated space for managing research articles. Here, you can seamlessly submit your research work and share it with peers. The platform allows easy review and feedback to help refine your research. Access a library of articles from your department for inspiration and insights. Keep track of your submissions and their status at any time. Enhance collaboration and knowledge-sharing with fellow researchers. Make research management simple and efficient for your team. Explore, contribute, and navigate your research journey with ease today.`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />

          
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Begin Managing Your
                <HighlightText text={"Research Articles in Minutes"} /> 
              </div>
            }
            subheading={
              "Our intuitive interface and robust features mean you'll be storing and managing research articles efficiently from day one."
            }
            ctabtn1={{
              btnText: "Explore Features",
              link: "/features",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/learn-more",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`Welcome to our research article management platform. Here, you can easily store, organize, and access all of your department's research articles in one place. Whether you're submitting new research or reviewing existing articles, our platform offers a seamless experience. Keep track of important documents and collaborate with your colleagues with just a few clicks. The user-friendly interface ensures that managing your research collection is simple and efficient. With everything organized and accessible, you can focus more on the research itself. Start exploring the platform now  `}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />

          {/* Explore Section */}
          <ExploreMore />
        </div>
      </div>

      {/* section-2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Category Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/explore"}>
                <div className="flex items-center gap-2">
                  Browse Articles
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/about"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
          {/* Efficient Research Management */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%]">
              Efficient
              <HighlightText text={"Research Management"} />
              at Your Fingertips
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                Streamline your research workflow with a platform that understands the needs of academic departments and research professionals.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Get Started</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section */}
          <TimelineSection />

          {/* Learning Language Section */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* section-3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Article Upload & Review Section */}
        <InstructorSection />

        {/* Reviews from Users */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from Our Users
        </h1>
        <ReviewSlider />
      </div>

        {/* Floating Plus Button */}
        <div className="fixed bottom-5 right-5 z-50 flex items-center justify-center">
  <Link
    to="/dashboard/create-journal"
    className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-50 text-white shadow-lg hover:bg-yellow-600 transition duration-200"
  >
    <FaPlus className=" text-black h-6 w-6" />
  </Link>
</div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
