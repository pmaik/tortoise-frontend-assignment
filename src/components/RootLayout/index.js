import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "grommet";
import Header from "../Header";
import FiltersPanel from "../FiltersPanel";

const RootLayout = () => {
  return (
    <Box width="xlarge" background="#fff" round="6px">
      <Header />
      <FiltersPanel />
      <Outlet />
    </Box>
  );
};

export default RootLayout;
