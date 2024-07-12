import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout";
// import Home from "../../components/Home";
import OpenClaims from "../../components/OpenClaims";
// import ApprovedClaims from "../../components/ApprovedClaims";
// import RejectedClaims from "../../components/RejectedClaims";
import ClaimDetails from "../../components/ClaimDetails";
import ClaimDetailsLayout from "../../components/ClaimDetailsLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <OpenClaims />,
      },
      {
        path: "open",
        element: <OpenClaims />,
      },
      {
        path: "approved",
        element: <OpenClaims />,
      },
      {
        path: "rejected",
        element: <OpenClaims />,
      },
    ],
  },
  {
    path: "/",
    element: <ClaimDetailsLayout />,
    children: [
      {
        path: "details/:id",
        element: <ClaimDetails />,
      },
      {
        path: "payment/:id",
        element: <ClaimDetails />,
      },
      {
        path: "/documents/:id",
        element: <ClaimDetails />,
      },
    ],
  },
]);
