import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout";
import Home from "../../components/Home";
import OpenClaims from "../../components/OpenClaims";
import ApprovedClaims from "../../components/ApprovedClaims";
import RejectedClaims from "../../components/RejectedClaims";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "open",
        element: <OpenClaims />,
      },
      {
        path: "approved",
        element: <ApprovedClaims />,
      },
      {
        path: "rejected",
        element: <RejectedClaims />,
      },
    ],
  },
]);
