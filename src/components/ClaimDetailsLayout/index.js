import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "grommet";
import ClaimsDetailsHeader from "../DetailInfo/ClaimsDetailsHeader";

const ClaimDetailsLayout = () => {
  return (
    <Box round="12px">
      <ClaimsDetailsHeader />
      <Outlet />
    </Box>
  );
};

export default ClaimDetailsLayout;
