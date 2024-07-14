import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../components/RootLayout";
import OpenClaims from "../../components/OpenClaims";
import ApprovedClaims from "../../components/ApprovedClaims";
import RejectedClaims from "../../components/RejectedClaims";
import ClaimDetailsLayout from "../../components/ClaimDetailsLayout";
import {
  ClaimDetails,
  PaymentBreakdown,
  Documents,
} from "../../components/DetailInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
