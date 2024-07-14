import React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { Box, Nav, Text } from "grommet";
import { CaretLeft, CaretRight, X } from "phosphor-react";
import { getClaimDetailsNavListStyles } from "../../StyledComponents";
import { DETAILS, PAYMENT, DOCUMENTS } from "../../Constants";

const ClaimsDetailsHeader = () => {
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname.split("/")[1];

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
          pad="xsmall"
        >
          <Box background="#CBCBCB" round="50%" pad="2px">
            <X size={10} color="#fff" />
          </Box>
        </Box>
      </Box>

      <Nav
        direction="row"
        align="center"
        justify="between"
        pad={{ vertical: "small", horizontal: "large" }}
        border={{ side: "bottom", color: "#EEEEEE" }}
      >
        <Box style={{ position: "relative" }}>
          <NavLink
            to={`/details/${id}`}
            style={({ isActive }) => {
              return getClaimDetailsNavListStyles(isActive);
            }}
          >
            Claim Details
          </NavLink>
          {path === DETAILS && (
            <Box
              width="80px"
              height="2px"
              background="#16AF8E"
              margin={{ vertical: "small" }}
              style={{ position: "absolute", top: "36px", left: "18px" }}
            />
          )}
        </Box>

        <Box style={{ position: "relative" }}>
          <NavLink
            to={`/payment/${id}`}
            style={({ isActive }) => {
              return getClaimDetailsNavListStyles(isActive);
            }}
          >
            Payment Breakdown
          </NavLink>
          {path === PAYMENT && (
            <Box
              width="125px"
              height="2px"
              background="#16AF8E"
              margin={{ vertical: "small" }}
              style={{ position: "absolute", top: "36px", left: "23px" }}
            />
          )}
        </Box>

        <Box style={{ position: "relative" }}>
          <NavLink
            to={`/documents/${id}`}
            style={({ isActive }) => {
              return getClaimDetailsNavListStyles(isActive);
            }}
          >
            Documents
          </NavLink>
          {path === DOCUMENTS && (
            <Box
              width="75px"
              height="2px"
              background="#16AF8E"
              margin={{ vertical: "small" }}
              style={{ position: "absolute", top: "36px", left: "15px" }}
            />
          )}
        </Box>
      </Nav>
    </Box>
  );
};

export default ClaimsDetailsHeader;
