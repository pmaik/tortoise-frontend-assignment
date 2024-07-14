import React from "react";
import { Box, Text } from "grommet";
import { NavLink } from "react-router-dom";
import { CheckCircle, CaretDown, CaretRight } from "phosphor-react";
import { CustomStatusButton } from "../StyledComponents";

const ClaimStatus = ({ id, text }) => {
  return (
    <Box direction="row" gap="small" align="center">
      <CustomStatusButton
        secondary
        label={
          <Box direction="row" align="center" gap="small">
            <CheckCircle
              size={20}
              color="white"
              style={{ background: "#16AF8E", borderRadius: "50%" }}
            />
            <Text weight={600} size="small" color="#656464">
              {text}
            </Text>
            <Text color="#EEEEEE">|</Text>
            <CaretDown size={18} color="#E1E1E1" />
          </Box>
        }
        pad={{ horizontal: "small", vertical: "xsmall" }}
      />
      <Box>
        <NavLink to={`/details/${id}`}>
          <CaretRight size={20} color="#CBCBCB" />
        </NavLink>
      </Box>
    </Box>
  );
};

export default ClaimStatus;
