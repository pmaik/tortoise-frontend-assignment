import React from "react";
import { Box, Text } from "grommet";
import { CheckCircle, Smiley, UserCircleGear, XCircle } from "phosphor-react";
import { StyledButton } from "../../StyledComponents";

const ApproveClaim = () => {
  return (
    <Box pad={{ horizontal: "large", top: "medium" }}>
      {/* Approve claim header */}
      <Box direction="row" gap="small">
        <Box
          pad="xxsmall"
          background="#16AF8E"
          round="50%"
          direction="row"
          justify="center"
          align="center"
          height="40px"
          width="40px"
        >
          <UserCircleGear size={32} color="#fff" />
        </Box>
        <Box gap="xsmall">
          <Text weight={600}>Approve claim</Text>
          <Text weight={500} size="small">
            You're organisation has set up a multi-level claim approval process
          </Text>
        </Box>
      </Box>

      {/* First & Final approval */}
      <Box
        pad={{ horizontal: "large", vertical: "medium" }}
        border={{ side: "bottom", color: "#EEEEEE" }}
      >
        {/* First approval */}
        <Box direction="row" gap="small" align="center">
          <Box
            border={{ side: "all", color: "#AFAFAF", size: "2px" }}
            round="50%"
            width="40px"
            height="40px"
            direction="row"
            justify="center"
            align="center"
          >
            <Text weight="bold" color="#AFAFAF">
              1
            </Text>
          </Box>
          <Text>First approval</Text>
        </Box>

        {/* Jules Bianchi (You) */}
        <Box direction="row">
          <Box
            height="70px"
            weight="1px"
            pad="1px"
            margin={{ left: "20px", top: "10px" }}
            background="#AFAFAF"
          ></Box>
          <Box
            direction="row"
            border={{ side: "all", color: "#EEEEEE" }}
            round="6px"
            align="center"
            pad={{ horizontal: "small" }}
            margin={{ left: "30px" }}
            background="#FAFAFA"
            gap="small"
            height="xxsmall"
          >
            <Box background="#f26c8d" pad="xsmall" round="50%">
              <Smiley size={25} color="#fff" />
            </Box>
            <Text weight={600} style={{ opacity: "80%" }}>
              Jules Bianchi (You)
            </Text>
          </Box>
        </Box>

        {/* Final approval */}
        <Box
          direction="row"
          gap="small"
          align="center"
          margin={{ top: "small" }}
        >
          <Box
            border={{ side: "all", color: "#AFAFAF", size: "2px" }}
            round="50%"
            width="40px"
            height="40px"
            direction="row"
            justify="center"
            align="center"
          >
            <Text weight="bold" color="#AFAFAF">
              2
            </Text>
          </Box>
          <Text>Final approval</Text>
        </Box>

        {/* Surya Harsha */}
        <Box
          direction="row"
          border={{ side: "all", color: "#EEEEEE" }}
          round="6px"
          align="center"
          pad={{ horizontal: "small" }}
          margin={{ left: "50px" }}
          background="#FAFAFA"
          gap="small"
          height="xxsmall"
          width="small"
        >
          <Box background="#1ecee0" pad="xsmall" round="50%">
            <Smiley size={25} color="#fff" />
          </Box>
          <Text weight={600} style={{ opacity: "80%" }}>
            Surya Harsha
          </Text>
        </Box>
      </Box>

      {/* Reject & Approve footer */}
      <Box direction="row" align="center" pad={{ top: "medium" }} gap="large">
        <StyledButton
          label={
            <Text weight={500} style={{ opacity: "85%" }}>
              Reject
            </Text>
          }
          pad={{ horizontal: "small", vertical: "xsmall" }}
          style={{
            border: "2px solid #EEEEEE",
            borderRadius: "8px",
            background: "#fff",
            fontSize: "medium",
            width: "200px",
          }}
          icon={
            <Box background="#D57046" round="50%">
              <XCircle size={20} color="#fff" />
            </Box>
          }
        />
        <StyledButton
          label={
            <Text weight={500} color="#fff">
              Approve
            </Text>
          }
          pad={{ horizontal: "small", vertical: "xsmall" }}
          style={{
            border: "1px solid #167E62",
            borderRadius: "8px",
            background: "#2AC393",
            fontSize: "medium",
            width: "200px",
          }}
          icon={
            <Box background="#fff" round="50%">
              <CheckCircle size={20} />
            </Box>
          }
        />
      </Box>
    </Box>
  );
};

export default ApproveClaim;
