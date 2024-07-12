import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout";
// import Home from "../../components/Home";
import OpenClaims from "../../components/OpenClaims";
import ApprovedClaims from "../../components/ApprovedClaims";
import RejectedClaims from "../../components/RejectedClaims";
import ClaimDetailsLayout from "../../components/ClaimDetailsLayout";
import ClaimDetails from "../../components/ClaimDetails";
import PaymentBreakdown from "../../components/ PaymentBreakdown";
import Documents from "../../components/Documents";

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
        element: <ApprovedClaims />,
      },
      {
        path: "rejected",
        element: <RejectedClaims />,
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
        element: <PaymentBreakdown />,
      },
      {
        path: "/documents/:id",
        element: <Documents />,
      },
    ],
  },
]);
