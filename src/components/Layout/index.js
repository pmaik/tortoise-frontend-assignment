import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "grommet";
import Header from "../Header";

const Layout = () => {
  return (
    <Box width="xlarge" background="#fff" round="6px">
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
