import { Box } from "grommet";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route";
import SidePane from "../components/SidePane";

const App = () => {
  return (
    <Box
      flex
      pad="medium"
      direction="row"
      justify="between"
      background="#FAF4EA"
      height={{ min: "100vh", max: "1000vh" }}
    >
      <SidePane />
      <RouterProvider router={router} />
    </Box>
  );
};

export default App;
