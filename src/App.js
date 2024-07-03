import React from "react";
import { Box } from "grommet";
import SidePane from "./components/SidePane";
import Claims from "./components/Claims";

function App() {
  return (
    <Box
      pad="medium"
      flex
      direction="row"
      justify="between"
      background="#FAF4EA"
      height="100vh"
      gap="small"
    >
      <SidePane />
      <Claims />
    </Box>
  );
}

export default App;
