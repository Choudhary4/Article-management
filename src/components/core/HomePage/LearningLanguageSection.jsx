import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax'; // Import Parallax component
import HighlightText from './HighlightText';
import CTAButton from "../../../components/core/HomePage/CTAButton";
import ResearchProgress from "../../../assets/Images/Know_your_progress.png";
import CollaborateWithPeers from "../../../assets/Images/Compare_with_others.svg";
import OrganizeResearch from "../../../assets/Images/Plan_your_lessons.svg";

// AOS library import
import AOS from 'aos';
import 'aos/dist/aos.css';

const ResearchToolsSection = () => {
  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Animation will run once per scroll
    });
  }, []);

  return (
    <div>
      <div className="text-4xl font-semibold text-center my-10">
        Your essential toolkit for
        <HighlightText text={"research management"} />
        <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
          Streamline your research with tools for progress tracking, collaboration, 
          structured organization, and more, tailored for efficient article storage and management.
        </div>

        {/* Parallax Section for Images */}
        <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
          <Parallax
            className="object-contain"
            bgImage={ResearchProgress}
            bgImageAlt="Research Progress"
            strength={200} // Adjust this value to control the parallax intensity
            blur={{ min: -5, max: 5 }} // Optional: Adds blur effect to the background
            style={{
              height: '450px',  // Increased height for larger image
              width: '100%',
              objectFit: 'cover',  // Ensure the image covers the space without distortion
              backgroundPosition: 'center', // Center the image
            }}
            renderLayer={(percentage) => (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: `${percentage * 30}%`, // Horizontal movement based on scroll percentage
                  transform: 'translate(-50%, -50%)', // Keeps the image centered vertically
                  height: '100%',
                  width: '100%',
                }}
              />
            )}
          >
            <div className="h-full w-full" data-aos="zoom-in"></div>
          </Parallax>

          <Parallax
            className="object-contain"
            bgImage={CollaborateWithPeers}
            bgImageAlt="Collaborate with Peers"
            strength={150}
            blur={{ min: -5, max: 5 }}
            style={{
              height: '450px',  // Increased height for larger image
              width: '100%',
              objectFit: 'cover',  // Ensure the image covers the space without distortion
              backgroundPosition: 'center',
            }}
            renderLayer={(percentage) => (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: `${percentage * 25}%`, // Horizontal movement based on scroll percentage
                  transform: 'translate(-50%, -50%)', // Keeps the image centered vertically
                  height: '100%',
                  width: '100%',
                }}
              />
            )}
          >
            <div className="h-full w-full" data-aos="fade-up"></div> {/* Fade-in effect */}
          </Parallax>

          <Parallax
            className="object-contain"
            bgImage={OrganizeResearch}
            bgImageAlt="Organize Research"
            strength={100}
            blur={{ min: -5, max: 5 }}
            style={{
              height: '450px',  // Increased height for larger image
              width: '100%',
              objectFit: 'cover',  // Ensure the image covers the space without distortion
              backgroundPosition: 'center',
            }}
            renderLayer={(percentage) => (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: `${percentage * 15}%`, // Horizontal movement based on scroll percentage
                  transform: 'translate(-50%, -50%)', // Keeps the image centered vertically
                  height: '100%',
                  width: '100%',
                }}
              />
            )}
          >
            <div className="h-full w-full" data-aos="zoom-in" data-aos-delay="200"></div> {/* Zoom-in with delay */}
          </Parallax>
        </div>
      </div>

      <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
        <CTAButton active={true} linkto={"/get-started"}>
          <div className="">Get Started</div>
        </CTAButton>
      </div>
    </div>
  );
};

export default ResearchToolsSection;
