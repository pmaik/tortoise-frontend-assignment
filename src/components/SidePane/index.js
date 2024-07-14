import React from "react";
import { Box, Image, Text } from "grommet";
import {
  NewspaperClipping,
  UsersThree,
  DeviceMobile,
  Calendar,
  Notepad,
  Buildings,
  Lifebuoy,
} from "phosphor-react";
import Tortoise from "../../images/tortoise.png";

const SidePane = () => {
  return (
    <Box
      width={{ min: "250px", max: "small" }}
      margin={{ top: "medium" }}
      pad={{ right: "medium" }}
      justify="between"
    >
      <Box>
        <Box
          border={{ size: "2px", side: "bottom", color: "#FFFFFF" }}
          align="center"
          pad={{ bottom: "small" }}
          direction="row"
          gap="small"
        >
          <Box>
            <Image src={Tortoise} width="35px" height="35px" />
          </Box>
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
            <UsersThree size={30} color="#114036" />
            <Text weight="bold" color="#114036">
              Employees
            </Text>
          </Box>
          <Text weight="bold" color="#114036">
            3,456
          </Text>
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
            <DeviceMobile size={30} color="#114036" />
            <Text weight="bold" color="#114036">
              Devices
            </Text>
          </Box>
          <Text weight="bold" color="#114036">
            128
          </Text>
        </Box>

        <Box
          border={{ size: "2px", side: "top", color: "#FFFFFF" }}
          pad={{ top: "medium", horizontal: "small" }}
          margin={{ top: "medium", bottom: "xlarge" }}
          gap="medium"
        >
          <Box direction="row" gap="small" align="center">
            <Calendar size={30} color="#114036" />
            <Text weight="bold" color="#114036">
              Rental schedules
            </Text>
          </Box>
          <Box direction="row" gap="small" align="center">
            <Notepad size={30} color="#114036" />
            <Text weight="bold" color="#114036">
              Billings
            </Text>
          </Box>
          <Box direction="row" gap="small" align="center">
            <Buildings size={30} color="#114036" />
            <Text weight="bold" color="#114036">
              Organization
            </Text>
          </Box>
          <Box direction="row" gap="small" align="center">
            <Lifebuoy size={30} color="#114036" />
            <Text weight="bold" color="#114036">
              Support
            </Text>
          </Box>
        </Box>
      </Box>

      <Box direction="row" align="center" gap="small">
        <Box background="#16AF8E" pad="xsmall" round="4px">
          <Text color="#fff" weight="bold">
            VK
          </Text>
        </Box>
        <Text weight="bold" color="#114036">
          Vardhan Koshal
        </Text>
      </Box>
    </Box>
  );
};

export default SidePane;
