import React, { useEffect, useState } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import {NavbarLinks} from '../../data/navbar-links'
import { Link, matchPath, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'
import { RiArrowDownWideLine } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { ImCross } from "react-icons/im"
import SmallScreenNavbar from './SmallScreenNavbar'
import { IoIosCreate } from "react-icons/io";




function Navbar() {
  const {user} = useSelector((state)=>state.profile)
  const {token} = useSelector((state)=>state.auth)
  
    const location = useLocation();
    const matchRoute = (route) =>{
        return route && matchPath({path:route},location.pathname)
    }

    // const [subLinks,setSubLinks] = useState()

    const [subLinks, setSubLinks] = useState([])
    const [loading, setLoading] = useState(false)

    const [isClose, setIsClose] = useState(false);
  
    useEffect(() => {
      ;(async () => {
        setLoading(true)
        try {
          const response = await apiConnector("GET", categories.CATEGORIES_API)
          console.log("printing result",response)
          setSubLinks(response.data.allCategories)
          console.log("printing subLinks",subLinks)

        
        } catch (error) {
          console.log("Could not fetch Categories.", error)
        }
        setLoading(false)
      })()
    }, [])

    // const fetchSubLinks = async()=>{
    //   try{
    //   const result = await apiConnector("GET", categories.CATEGORIES_API)
    //   console.log("printing result",result)
    //   setSubLinks(result.data.data)
    //   }catch(error){
    //     console.log("could not fetch data")
    //   }
      
    // }

    // useEffect(()=>{
    //   fetchSubLinks()
    // },[])

    useEffect(() => {
      console.log("Updated subLinks:", subLinks);
  }, [subLinks]);
  
  // const handleCrossButton = () => { 
  //   isClose = isClose ? setIsClose(false) : setIsClose(true);  
  //   // smallScreen = smallScreen ? setSmallScreen(false) : setSmallScreen(true);
  // }
  const handleCrossButton = () => {
    setIsClose((prevIsClose) => !prevIsClose); // Toggles the value of `isClose`
    
    // For `smallScreen`, if it's a state, use a similar approach:
    // setSmallScreen((prevSmallScreen) => !prevSmallScreen);
  };
  
  return (
    <div className={` flex sm:relative bg-richblack-900 w-screen relative z-50 h-14 items-center justify-center border-b-[1px] border-b-richblack-700 translate-y-  transition-all duration-500`}>
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>
       <nav className="hidden md:block">
        {/* section-1 */}
        <ul className="flex gap-x-6 text-richblack-25">
         {
            NavbarLinks.map((link,index)=>(
                <li key={index}>
                    {
                        link?.title === "Catalog" ? (<div className=' relative flex items-center group'>
                          <p>{link.title}</p>
                          <RiArrowDownWideLine />
                           <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                             <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                             {/* {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : (subLinks && subLinks.length > 0) ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )} */}
                        {loading ? (
                                 <p className="text-center">Loading...</p>
                               ) : subLinks && subLinks.length > 0 ? (
                                 <>
                                   {subLinks.map((subLink) => (
                                     <Link
                                       to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                                       className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                       key={subLink._id} // Use unique _id
                                     >
                                       <p>{subLink.name}</p>
                                     </Link>
                                   ))}
                                 </>
                               ) : (
                                 <p className="text-center">No Categories Found</p>
                               )}

                           </div>

                        </div>) : 
                        (
                            <Link to={link?.path}>
                            <p className={`${ matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`} >{link.title}</p>
                            </Link>
                            // <NavLink to={link?.path}>
                            //      <p>{link.title}</p>
                            // </NavLink>
                        )
                    }
                </li>
            ))
         }
        </ul>
       </nav>

    {/* Login/SignUp/Dashboard */}
       <div className='flex gap-x-4 items-center'>
       {
        user && user?.accountType != "Instructor" && (
          <Link to="/dashboard/create-journal"  className='relative'>
             <IoIosCreate className="text-2xl text-richblack-100" />
          
          </Link>
        )
       }
       {
        token === null && (
          <Link to="/login">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100">Login</button>
              </Link>

        )
       }
       {
        token === null && (
          <Link to="/signup">
          <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100">
            Sign Up
          </button>
        </Link>
        )
       }
      {token !== null && <ProfileDropDown />}
        {/* {!token ? (
            <>
              <Link to="/login">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100">Login</button>
              </Link>
              <Link to="/signup">
                <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <ProfileDropDown />
          )} */}
       </div>
       {
        isClose === false ? (
          <button className="mr-4 md:hidden"
            onClick={handleCrossButton}>
            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
          </button>
        ) :
        (
          <button className="mr-4 md:hidden"
          onClick={handleCrossButton}>
            <ImCross fontSize={24} fill="#AFB2BF" />
          </button>
        )
      }
      {
        isClose && <SmallScreenNavbar 
                      isClose={isClose}
                      // setIsClose={setIsClose}
                      handleCrossButton={handleCrossButton} />
      }
      </div>
    </div>
  )
}

export default Navbar
