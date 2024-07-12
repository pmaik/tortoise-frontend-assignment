import React from "react";
import { Box, Nav, Text } from "grommet";
import { NavLink } from "react-router-dom";
import { CaretLeft, CaretRight, XCircle } from "phosphor-react";
import { getClaimDetailsNavListStyles } from "../StyledComponents";

const ClaimsDetailsHeader = ({ id = 0 }) => {
  return (
    <Box background="#FAFAFA" round={{ size: "6px", corner: "top" }}>
      <Box
        direction="row"
        justify="between"
        pad={{ vertical: "medium", horizontal: "large" }}
        align="center"
        border={{ side: "bottom", color: "#EEEEEE" }}
      >
        <Box direction="row">
          <Box
            border={[
              { side: "top", color: "#EEEEEE" },
              { side: "bottom", color: "#EEEEEE" },
              { side: "left", color: "#EEEEEE" },
            ]}
            round={{ size: "6px", corner: "left" }}
          >
            <NavLink to={`/open`}>
              <CaretLeft color="#CBCBCB" size={25} />
            </NavLink>
          </Box>
          <Box
            border={{ side: "all", color: "#EEEEEE" }}
            round={{ size: "6px", corner: "right" }}
          >
            <CaretRight color="#CBCBCB" size={25} />
          </Box>
        </Box>
        <Text weight="bold">Aditya's Claim</Text>
        <Box
          border={{ side: "all", color: "#EEEEEE" }}
          round="8px"
          pad="xxsmall"
        >
          <XCircle color="#CBCBCB" size={20} />
        </Box>
      </Box>

      <Nav
        direction="row"
        align="center"
        justify="between"
        pad={{ vertical: "small", horizontal: "large" }}
        border={{ side: "bottom", color: "#EEEEEE" }}
      >
        <NavLink
          to={`/details/${id}`}
          style={({ isActive }) => {
            return getClaimDetailsNavListStyles(isActive);
          }}
        >
          Claim Details
        </NavLink>
        <NavLink
          to={`/payment/${id}`}
          style={({ isActive }) => {
            return getClaimDetailsNavListStyles(isActive);
          }}
        >
          Payment Breakdown
        </NavLink>
        <NavLink
          to={`/documents/${id}`}
          style={({ isActive }) => {
            return getClaimDetailsNavListStyles(isActive);
          }}
        >
          Documents
        </NavLink>
      </Nav>
    </Box>
  );
};

export default ClaimsDetailsHeader;
