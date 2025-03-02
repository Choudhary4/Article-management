

import { toast } from "react-hot-toast"
import { useSelector } from "react-redux"


// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector"
import { articleEndpoints } from "../apis"

const {
  CREATE_ARTICLE_API,
  GET_ALL_ARTICLE_API,
  GET_ALL_DETAILS_API
  
} = articleEndpoints

export const getAllArticles = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET",  GET_ALL_ARTICLE_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Course Categories")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_ALL_COURSE_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const fetchArticleDetails = async (articleId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", GET_ALL_DETAILS_API, {
      articleId,
    })
    console.log("COURSE_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
  } catch (error) {
    console.log("COURSE_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

// // fetching the available course categories
// export const fetchCourseCategories = async () => {
//   let result = []
//   try {
//     const response = await apiConnector("GET", COURSE_CATEGORIES_API)
//     console.log("COURSE_CATEGORIES_API API RESPONSE............", response)
//     if (!response?.data?.success) {
//       throw new Error("Could Not Fetch Course Categories")
//     }
//     result = response?.data?.data
//   } catch (error) {
//     console.log("COURSE_CATEGORY_API API ERROR............", error)
//     toast.error(error.message)
//   }
//   return result
// }


// Function to add article details
export const addArticleDetails = async (
  title,
  authors,
  abstract,
  category,
  introduction,
  literatureReview,
  methodology,
  results,
  discussion,
  conclusion,
  acknowledgements,
  references,
  appendices,
  figuresAndTables,
  picture,
  token
) => {
  let result = null;
  const toastId = toast.loading("Loading...");

  try {
    // Create a FormData object for structured data and file upload
    const formData = new FormData();
    formData.append("title", title);
    formData.append("authors", JSON.stringify(authors)); // Serialize authors if needed
    formData.append("abstract", abstract);
    formData.append("category", category);
    formData.append("introduction", introduction);
    formData.append("literatureReview", literatureReview);
    formData.append("methodology", methodology);
    formData.append("results", results);
    formData.append("discussion", discussion);
    formData.append("conclusion", conclusion);
    formData.append("acknowledgements", acknowledgements);
    formData.append("references", references);
    formData.append("appendices", appendices);
    formData.append("figuresAndTables", figuresAndTables);

    // Append picture if provided (assume it's a FileList or array)
    if (picture) {
      Array.from(picture).forEach((file, index) => {
        formData.append(`picture_${index}`, file);
      });
    }

    // Make the API call with formData
    const response = await apiConnector("POST", CREATE_ARTICLE_API, formData, {
      Authorization: `Bearer ${token}`,
      // Don't set Content-Type header for FormData
    });

    console.log("CREATE ARTICLE API RESPONSE............", response);
    if (!response?.success) {
      throw new Error("Could Not Add Article Details");
    }

    toast.success("Article Details Added Successfully");
    result = response;
  } catch (error) {
    console.log("CREATE ARTICLE API ERROR............", error.response?.data || error);
    toast.error(error.response?.data?.message || error.message);
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};

















// // fetching all courses under a specific instructor
// export const fetchInstructorCourses = async (token) => {
//   let result = []
//   const toastId = toast.loading("Loading...")
//   try {
//     const response = await apiConnector(
//       "GET",
//       GET_ALL_INSTRUCTOR_COURSES_API,
//       null,
//       {
//         Authorization: `Bearer ${token}`,
//       }
//     )
//     console.log("INSTRUCTOR COURSES API RESPONSE............", response)
//     if (!response?.data?.success) {
//       throw new Error("Could Not Fetch Instructor Courses")
//     }
//     result = response?.data?.data
//   } catch (error) {
//     console.log("INSTRUCTOR COURSES API ERROR............", error)
//     toast.error(error.message)
//   }
//   toast.dismiss(toastId)
//   return result
// }




// // get full details of a course
// export const getFullDetailsOfCourse = async (courseId, token) => {
//   const toastId = toast.loading("Loading...")
//   //   dispatch(setLoading(true));
//   let result = null
//   try {
//     const response = await apiConnector(
//       "POST",
//       GET_FULL_COURSE_DETAILS_AUTHENTICATED,
//       {
//         courseId,
//       },
//       {
//         Authorization: `Bearer ${token}`,
//       }
//     )
//     console.log("COURSE_FULL_DETAILS_API API RESPONSE............", response)

//     if (!response.data.success) {
//       throw new Error(response.data.message)
//     }
//     result = response?.data?.data
//   } catch (error) {
//     console.log("COURSE_FULL_DETAILS_API API ERROR............", error)
//     result = error.response.data
//     // toast.error(error.response.data.message);
//   }
//   toast.dismiss(toastId)
//   //   dispatch(setLoading(false));
//   return result
// }



// // create a rating for course
// export const createRating = async (data, token) => {
//   const toastId = toast.loading("Loading...")
//   let success = false
//   try {
//     const response = await apiConnector("POST", CREATE_RATING_API, data, {
//       Authorization: `Bearer ${token}`,
//     })
//     console.log("CREATE RATING API RESPONSE............", response)
//     if (!response?.data?.success) {
//       throw new Error("Could Not Create Rating")
//     }
//     toast.success("Rating Created")
//     success = true
//   } catch (error) {
//     success = false
//     console.log("CREATE RATING API ERROR............", error)
//     toast.error(error.message)
//   }
//   toast.dismiss(toastId)
//   return success
// }