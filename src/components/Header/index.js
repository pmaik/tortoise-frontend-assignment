import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Text, Nav } from "grommet";
// import { Home, Notification, ChatOption } from "grommet-icons";
import { getHeaderListStyle } from "../Constants";

const Header = () => {
  return (
    <Box
      border={{ side: "bottom", color: "#EEEEEE" }}
      pad="medium"
      direction="row"
      justify="between"
    >
      <Box flex direction="row" align="center">
        <Text weight="bold">Claims</Text>
      </Box>
      <Nav direction="row" align="center">
        <NavLink
          to="/open"
          style={({ isActive }) => {
            return getHeaderListStyle(isActive);
          }}
        >
          Open
        </NavLink>
        <NavLink
          to="/approved"
          style={({ isActive }) => {
            return getHeaderListStyle(isActive);
          }}
        >
          Approved
        </NavLink>
        <NavLink
          to="/rejected"
          style={({ isActive }) => {
            return getHeaderListStyle(isActive);
          }}
        >
          Rejected
        </NavLink>
      </Nav>
    </Box>
  );
};

export default Header;
