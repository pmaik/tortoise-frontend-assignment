import React from "react";
import { Box, Text } from "grommet";
import ClaimDetails from "../ClaimDetails";

const Documents = () => {
  return (
    <Box>
      <Text pad="large" level={3}>
        Documents
      </Text>
      <ClaimDetails />
    </Box>
  );
};

export default Documents;
