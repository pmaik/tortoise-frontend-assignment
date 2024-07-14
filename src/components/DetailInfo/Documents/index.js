import React from "react";
import { Box, Text, Image } from "grommet";
import { FilePdf } from "phosphor-react";
import { StyledButton } from "../../StyledComponents";
import Signature from "../../../images/signature.png";
import ApproveClaim from "../ApproveClaim";

const Documents = () => {
  return (
    <Box
      width="xlarge"
      background="#fff"
      round={{ size: "12px", corner: "bottom" }}
      pad={{ vertical: "medium" }}
    >
      {/* Signed by Aditya*/}
      <Box pad={{ horizontal: "large", bottom: "large" }}>
        <Box pad={{ bottom: "small" }}>
          <Text weight={600}>Signed by Aditya</Text>
        </Box>
        <Box
          pad="medium"
          border={{ size: "1px", color: "#EEEEEE" }}
          round="6px"
        >
          <Box
            direction="row"
            align="center"
            gap="medium"
            pad={{ bottom: "medium" }}
            border={{ size: "1px", side: "bottom", color: "#EEEEEE" }}
          >
            <Box background="#fff">
              <FilePdf size={32} color="#E35951" />
            </Box>
            <Box gap="2px">
              <Text weight={500}>Device Usage Policy</Text>
              <Text weight="lighter" size="small">
                Between Ninjacart and Aditya
              </Text>
            </Box>
          </Box>

          {/* 2nd */}
          <Box
            direction="row"
            align="center"
            gap="medium"
            pad={{ top: "medium" }}
            justify="between"
          >
            <Box direction="row" align="center" gap="medium">
              <Box background="#fff">
                <Image
                  fit="cover"
                  src={Signature}
                  alt="Signature"
                  style={{ opacity: "30%" }}
                />
              </Box>
              <Box gap="2px">
                <Text weight={500} style={{ opacity: "50%" }}>
                  Signed on 12th April
                </Text>
              </Box>
            </Box>
            <Box>
              <StyledButton
                label="View document"
                pad={{ vertical: "xsmall", horizontal: "small" }}
                style={{
                  border: "1px solid #EEEEEE",
                  borderRadius: "8px",
                  boxShadow: "0px 1px 0px 0px #EEEEEE",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Yet to be signed by you */}
      <Box
        pad={{ horizontal: "large", bottom: "large" }}
        border={{ size: "1px", color: "#EEEEEE", side: "bottom" }}
      >
        <Box pad={{ bottom: "small" }} gap="xsmall">
          <Text weight={600}>Yet to be signed by you</Text>
          <Text size="small">
            Sign the documents only when you're sure about claim approval
          </Text>
        </Box>
        <Box
          pad="medium"
          border={{ size: "1px", color: "#EEEEEE" }}
          round="6px"
        >
          <Box
            direction="row"
            align="center"
            gap="medium"
            pad={{ bottom: "medium" }}
            border={{ size: "1px", side: "bottom", color: "#EEEEEE" }}
          >
            <Box background="#fff">
              <FilePdf size={32} color="#E35951" />
            </Box>
            <Box gap="2px">
              <Text weight={500}>Rental Schedule</Text>
              <Text weight="lighter" size="small">
                Between Ninjacart and Connect
              </Text>
            </Box>
          </Box>

          {/* 2nd */}
          <Box
            direction="row"
            align="center"
            gap="medium"
            pad={{ top: "medium" }}
            justify="between"
          >
            <Box direction="row" align="center" gap="medium">
              <Box background="#fff">
                <Image
                  fit="cover"
                  src={Signature}
                  alt="Signature"
                  style={{ opacity: "30%" }}
                />
              </Box>
              <Box gap="2px">
                <Text weight={500} style={{ opacity: "50%" }}>
                  Pending
                </Text>
              </Box>
            </Box>
            <Box>
              <StyledButton
                label="View and sign document"
                pad={{ vertical: "xsmall", horizontal: "small" }}
                style={{
                  border: "1px solid #EEEEEE",
                  borderRadius: "8px",
                  boxShadow: "0px 1px 0px 0px #EEEEEE",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Approve Claim */}
      <ApproveClaim />
    </Box>
  );
};

export default Documents;
