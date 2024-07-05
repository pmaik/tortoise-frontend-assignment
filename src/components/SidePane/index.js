import React from "react";
import { Box, Text } from "grommet";
import {
  LineSegments,
  NewspaperClipping,
  UsersThree,
  DeviceMobile,
  Calendar,
  Notepad,
  Buildings,
  Lifebuoy,
} from "phosphor-react";

const SidePane = () => {
  return (
    <Box
      width={{ min: "250px", max: "small" }}
      margin={{ top: "medium" }}
      pad={{ right: "medium" }}
    >
      <Box
        border={{ size: "2px", side: "bottom", color: "#FFFFFF" }}
        align="center"
        pad={{ bottom: "small" }}
        direction="row"
        gap="small"
      >
        <LineSegments size={32} color="#B8AFA4" />
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
        <Box>
          <NewspaperClipping size={30} color="#fff" />
          <Text weight="bold" color="#fff">
            Claims
          </Text>
        </Box>
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
        <Box>
          <UsersThree size={30} />
          <Text weight="bold">Employees</Text>
        </Box>
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
        <Box>
          <DeviceMobile size={30} />
          <Text weight="bold">Devices</Text>
        </Box>
        <Text weight="bold">128</Text>
      </Box>

      <Box
        border={{ size: "2px", side: "top", color: "#FFFFFF" }}
        pad={{ top: "medium", horizontal: "small" }}
        margin={{ top: "medium", bottom: "xlarge" }}
        gap="medium"
      >
        <Box direction="row" gap="small" align="center">
          <Calendar size={30} />
          <Text weight="bold">Rental schedules</Text>
        </Box>
        <Box direction="row" gap="small" align="center">
          <Notepad size={30} />
          <Text weight="bold">Billings</Text>
        </Box>
        <Box direction="row" gap="small" align="center">
          <Buildings size={30} />
          <Text weight="bold">Organization</Text>
        </Box>
        <Box direction="row" gap="small" align="center">
          <Lifebuoy size={30} />
          <Text weight="bold">Support</Text>
        </Box>
      </Box>

      <Box flex direction="row" justify="between" align="center">
        <Box background="#16AF8E" pad="xsmall" round="4px">
          <Text color="#fff" weight="bold">
            VK
          </Text>
        </Box>
        <Text>Vardhan Koshal</Text>
      </Box>
    </Box>
  );
};

export default SidePane;
