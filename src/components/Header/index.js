import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Text, Nav, Image } from "grommet";
import { NewspaperClipping } from "phosphor-react";
import { getNavListStyles } from "../StyledComponents";
import IPhone from '../../images/iphone.png'

const Header = () => {
  return (
    <Box>
      <Box
        border={{ side: "bottom", color: "#EEEEEE" }}
        pad="medium"
        direction="row"
        justify="between"
      >
        <Box flex direction="row" align="center" gap="xsmall">
          <NewspaperClipping size={32} color="#167E62" />
          <Text weight="bold">Claims</Text>
        </Box>
        <Nav direction="row" align="center">
          <NavLink
            to="/open"
            style={({ isActive }) => {
              return getNavListStyles(isActive);
            }}
          >
            Open
          </NavLink>
          <NavLink
            to="/approved"
            style={({ isActive }) => {
              return getNavListStyles(isActive);
            }}
          >
            Approved
          </NavLink>
          <NavLink
            to="/rejected"
            style={({ isActive }) => {
              return getNavListStyles(isActive);
            }}
          >
            Rejected
          </NavLink>
        </Nav>
      </Box>
      <Box
        direction="row"
        align="center"
        background="#FAFAFA"
        gap="medium"
        height="xsmall"
      >
        <Box>
          <Image
            fit="contain"
            src={IPhone}
            width="200px"
            margin={{ right: "-40px", left: "-52px", top: "90px" }}
            alt="IPhone Image"
          />
        </Box>
        <Box>
          <Text weight={500}>
            17 employees want to claim their device allowances
          </Text>
          <Text weight={300} size="small">
            Review their requests at the earliest to ensure a great benefit
            claim experience
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
