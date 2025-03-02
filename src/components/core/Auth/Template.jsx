import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"

import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative w-11/12 max-w-[450px]">
        <img src={frameImg} 
       
        alt="patter"
        width={558}
        height={504}
        loading="lazy"
        
        />

        <img src={image} 
         
         alt="patter"
         width={558}
         height={504}
         loading="lazy"
         className="absolute -top-4 right-4 "
        />
      </div>
        </div>
      )}
    </div>
  )
}

export default Template


// import React from 'react'
// import frameImage from '../assets/frame.png'
// import { FcGoogle } from "react-icons/fc";
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';

// export default function Template({ title, description1, description2, image, formType }) {
//   console.log(title,desc1,desc2)
//   return (
//     <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
//       <div className="w-11/12 max-w-[450px] mx-0 text-white">
//         <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
//         <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
//             <span className="text-richblack-100">{description1}</span>
//             <span className="text-blue-100 italic">{description2}</span>
//             </p>
       
//             {formType === "signup" ? <SignupForm /> : <LoginForm />}
//        <div className="flex w-full items-center my-4 gap-x-2">
//           <div className="h-[1px] w-full bg-richblack-700"></div>
//           <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
//           <div className="h-[1px] w-full bg-richblack-700"></div>
//         </div>
//         <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6">
//           <FcGoogle />
//           <p>Sign Up with Google</p>
//         </button>

//       </div>

//       <div className="relative w-11/12 max-w-[450px]">
//         <img src={frameImage} 
       
//         alt="patter"
//         width={558}
//         height={504}
//         loading="lazy"
        
//         />

//         <img src={image} 
         
//          alt="patter"
//          width={558}
//          height={504}
//          loading="lazy"
//          className="absolute -top-4 right-4 "
//         />
//       </div>

//     </div>
//   )
// }