import FullLayout from "../components/layouts/fullLayout";
import { Navigate } from "react-router-dom";
import JobList from "@/pages/business/businessList";

const Routes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      {
        path: "/",
        element: <JobList />,
      },
      {
        path: "jobs",
        element: <JobList />,
      },
      { path: "*", element: <Navigate to="/jobs" /> },
    ],
  },
];

export default Routes;
