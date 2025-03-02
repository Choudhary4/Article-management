import React from 'react'
import HighLightText from "../components/core/HomePage/HighlightText"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/AboutPage/StatsComponents'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from '../components/common/Footer'
import ReviewSlider from '../components/common/ReviewSlider'

const About = () => {
  return (
    <div>
        {/* section-1 */}
        <section className='bg-richblack-700'>
            <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
                <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
                    Revolutionizing Research Article Management for a 
                    <HighLightText text={"Connected Academic Future"} />
                    <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
    Our platform is dedicated to making research articles accessible, discoverable, 
    and easy to manage. By leveraging technology, we bridge the gap between researchers 
    and the broader academic community to drive collaboration and innovation.
</p>

                </header>
                <div className="sm:h-[70px] lg:h-[150px]"></div>
                <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
                    <img src={BannerImage1} alt="Article Banner 1" />
                    <img src={BannerImage2} alt="Article Banner 2" />
                    <img src={BannerImage3} alt="Article Banner 3" />
                </div>
            </div>
        </section>

        {/* section-2 */}
        <section className="border-b border-richblack-700">
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
                <div className="h-[100px]"></div>
                <Quote />
            </div>
        </section>

        {/* section-3 */}
        <section>
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
                {/* Founding Story */}
                <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                    <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                        <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                            Our Vision for Research
                        </h1>
                        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                            Our platform started with the idea of simplifying research article management. 
                            A dedicated team of academics and technologists came together to create a solution 
                            that empowers researchers, enhances collaboration, and promotes the dissemination 
                            of knowledge across disciplines.
                        </p>
                        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                            By addressing challenges like data silos, inaccessible archives, and fragmented 
                            systems, we aim to provide a centralized hub for academic resources. Our goal is to 
                            make research more impactful and accessible.
                        </p>
                    </div>
                    <div>
                        <img
                            src={FoundingStory}
                            alt="Founding Story"
                            className="shadow-[0_0_20px_0] shadow-[#FC6767]"
                        />
                    </div>
                </div>

                {/* Vision and Mission */}
                <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
                    <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                        <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                            Our Vision
                        </h1>
                        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                            To create a dynamic platform where research articles are more than just data points—they 
                            become a bridge for interdisciplinary learning, collaboration, and innovation.
                        </p>
                    </div>
                    <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                        <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%]">
                            Our Mission
                        </h1>
                        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                            Our mission is to empower researchers with cutting-edge tools for storing, discovering, 
                            and sharing research articles. We believe in fostering a collaborative academic community 
                            where knowledge flows freely, enabling impactful research.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* section-4 */}
        <StatsComponent />

        {/* section-5 */}
        <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
            <LearningGrid />
            <ContactFormSection />
        </section>

        {/* Reviews */}
        <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
            <h1 className="text-center text-4xl font-semibold mt-8">
                Reviews from Researchers
                <ReviewSlider />
            </h1>
        </div>

        <Footer />
    </div>
  )
}

export default About
