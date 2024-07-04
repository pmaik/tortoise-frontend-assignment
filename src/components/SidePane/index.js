import React from "react";
import { Box, Text } from "grommet";

const SidePane = () => {
  return (
    <Box
      width={{ min: "200px", max: "small" }}
      margin={{ top: "medium" }}
      pad={{ right: "medium" }}
    >
      <Box
        border={{ size: "2px", side: "bottom", color: "#FFFFFF" }}
        align="center"
        pad={{ bottom: "small" }}
      >
        <Text weight="bold" size="large" color="#B8AFA4">
          tortoise
        </Text>
      </Box>

      <Box
        background="#16AF8E"
        direction="row"
        justify="between"
        height="xsmall"
        align="center"
        border
        round="4px"
        pad="small"
        margin={{ top: "small" }}
      >
        <Text weight="bold" color="#fff">
          Claims
        </Text>
        <Text weight="bold" color="#fff">
          17
        </Text>
      </Box>

      <Box
        background="#f7e2bf"
        direction="row"
        justify="between"
        height="xsmall"
        align="center"
        round="4px"
        pad="small"
        margin={{ top: "small" }}
      >
        <Text weight="bold">Employees</Text>
        <Text weight="bold">3,456</Text>
      </Box>

      <Box
        background="#f7e2bf"
        direction="row"
        justify="between"
        height="xsmall"
        align="center"
        pad="small"
        margin={{ top: "small", bottom: "medium" }}
        round="4px"
      >
        <Text weight="bold">Devices</Text>
        <Text weight="bold">128</Text>
      </Box>

      <Box
        border={{ size: "2px", side: "top", color: "#FFFFFF" }}
        pad={{ top: "medium", horizontal: "small" }}
        margin={{ top: "medium", bottom: "xlarge" }}
        gap="medium"
      >
        <Text weight="bold">Rental schedules</Text>
        <Text weight="bold">Billings</Text>
        <Text weight="bold">Organization</Text>
        <Text weight="bold">Support</Text>
      </Box>

      <Box flex direction="row" justify="between" align="center">
        <Box background="#16AF8E" pad="xsmall" round="4px">
          <Text color="#fff" weight="bold">VK</Text>
        </Box>
        <Text>Vardhan Koshal</Text>
      </Box>
    </Box>
  );
};

export default SidePane;
