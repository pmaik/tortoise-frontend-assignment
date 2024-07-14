import React from "react";
import { Box, Text } from "grommet";

const HorizontalLineWithText = ({ text, color, width, minWidth }) => {
  return (
    <Box
      direction="row"
      align="center"
      justify="center"
      pad={{ vertical: "medium" }}
    >
      <Box
        border={{ size: "1px", color: color, style: "dashed" }}
        width="medium"
      ></Box>
      <Box
        border={{ size: "1px", color: color }}
        round="60px"
        pad="small"
        direction="row"
        align="center"
        width={{ min: `${minWidth}px` }}
      >
        <Text weight={500} color={color} style={{ width: `${width}px` }}>
          {text}
        </Text>
      </Box>
      <Box
        border={{ size: "1px", color: color, style: "dashed" }}
        width="medium"
      ></Box>
    </Box>
  );
};

export default HorizontalLineWithText;
