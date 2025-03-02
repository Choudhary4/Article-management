import { ACCOUNT_TYPE } from "../utils/constant";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Journal Dashboard",
    path: "/journal-dashboard",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
 
  {
    id: 6,
    name: "Create Journal",
    path: "/dashboard/create-journal",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscAdd",
  },
];
