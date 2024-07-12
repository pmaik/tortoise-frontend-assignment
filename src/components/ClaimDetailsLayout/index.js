import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "grommet";
import ClaimsDetailsHeader from "../ClaimsDetailsHeader";

const ClaimDetailsLayout = () => {
  return (
    <Box round="6px">
      <ClaimsDetailsHeader />
      <Outlet />
    </Box>
  );
};

export default ClaimDetailsLayout;
