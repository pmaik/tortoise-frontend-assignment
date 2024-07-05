import React from "react";
import { Box, Text } from "grommet";
import { CheckCircle, CaretDown, CaretRight } from "phosphor-react";
import { CustomStatusButton } from "../StyledComponents";

const ClaimStatus = ({ text }) => {
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
      <CaretRight size={20} color="#CBCBCB" />
    </Box>
  );
};

export default ClaimStatus;
