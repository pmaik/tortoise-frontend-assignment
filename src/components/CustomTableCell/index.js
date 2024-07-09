import React from "react";
import { Box, Text } from "grommet";
import ClaimStatus from "./ClaimStatus";

const CustomTableCell = ({
  id,
  text,
  subtext,
  icon,
  circularBorder,
  isClaimStatus,
}) => {
  return (
    <Box direction="row" gap="small" align="center">
      {icon && (
        <Box
          border={circularBorder}
          round={circularBorder ? "50%" : "6px"}
          background={!circularBorder ? "#ebebebf2" : "none"}
          pad="4px"
        >
          {icon}
        </Box>
      )}
      <>
        {isClaimStatus ? (
          <ClaimStatus id={id} text={text} />
        ) : (
          <Box>
            <Text size="small" weight={500}>
              {text}
            </Text>
            <Text weight="lighter" size="xsmall">
              {subtext}
            </Text>
          </Box>
        )}
      </>
    </Box>
  );
};

export default CustomTableCell;
