import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "grommet";
import Header from "../Header";
import FiltersPanel from "../FiltersPanel";

const Layout = () => {
  return (
    <Box width="xlarge" background="#fff" round="6px">
      <Header />
      <FiltersPanel />
      <Outlet />
    </Box>
  );
};

export default Layout;
