import React from "react";
import { Box, Text, Image } from "grommet";
import { Money, Calendar, Note, DeviceMobile } from "phosphor-react";
import ApproveClaim from "../ApproveClaim";
import Person from "../../../images/people1.jpeg";
import IPhone from "../../../images/iphone_image.png";

const ClaimDetails = () => {
  return (
    <Box
      width="xlarge"
      background="#fff"
      round={{ size: "12px", corner: "bottom" }}
      pad={{ vertical: "medium" }}
    >
      {/* Request, Payment & Claimed containers */}
      <Box
        pad={{ horizontal: "large", bottom: "large" }}
        border={{ side: "bottom", color: "#EEEEEE" }}
      >
        {/* Request Details */}
        <Box margin={{ bottom: "medium" }}>
          <Text weight={500} margin={{ bottom: "xsmall" }}>
            Request Details
          </Text>
          <Box
            direction="row"
            align="center"
            justify="between"
            pad="medium"
            border={{ side: "all", color: "#EEEEEE" }}
            round="6px"
          >
            <Box direction="row" gap="small" align="center">
              <Box direction="row" align="center" justify="center">
                <Image
                  height="45px"
                  width="45px"
                  fit="cover"
                  src={Person}
                  alt="IPhone Image"
                  style={{
                    background: "#EEEEEE",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box>
                <Text weight={500} style={{ opacity: "85%" }}>
                  Aditya Garikapati
                </Text>
                <Text size="small" weight={500} style={{ opacity: "50%" }}>
                  Frontend Developer
                </Text>
              </Box>
            </Box>
            <Box>
              <Text size="small" weight={500}>
                Requested 5m ago
              </Text>
              <Text size="small" weight={500} style={{ opacity: "50%" }}>
                12th April 2024
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Payment Terms */}
        <Box margin={{ bottom: "medium" }}>
          <Text weight={500} margin={{ bottom: "xsmall" }}>
            Payment Terms
          </Text>
          <Box
            direction="row"
            align="center"
            justify="between"
            pad="medium"
            border={{ side: "all", color: "#EEEEEE" }}
            round="6px"
            margin={{ bottom: "small" }}
          >
            <Box gap="small">
              <Box
                background="#FF91EE"
                width="xxsmall"
                direction="row"
                justify="center"
                round
              >
                <Money size={32} color="#fff" />
              </Box>
              <Box>
                <Text size="small" weight={500} style={{ opacity: "50%" }}>
                  Deductible amount
                </Text>
                <Text weight={500} style={{ opacity: "85%" }}>
                  ₹13,416 / month
                </Text>
              </Box>
            </Box>

            <Box gap="small">
              <Box
                background="#B59CF7"
                width="xxsmall"
                direction="row"
                justify="center"
                round
              >
                <Calendar size={32} color="#fff" />
              </Box>
              <Box>
                <Text size="small" weight={500} style={{ opacity: "50%" }}>
                  Tenure
                </Text>
                <Text weight={500} style={{ opacity: "85%" }}>
                  12 months
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            background="#EEEEEE"
            border={{ side: "all", color: "#EEEEEE" }}
            round="6px"
            pad="small"
            direction="row"
            gap="small"
            align="center"
          >
            <Note size={20} />
            <Text size="small">
              <strong>₹ 13,416 to be deducted </strong> from Aditya's monthly
              salary under the non-taxable device allowance section{" "}
              <strong>over a period of 6 months</strong>
            </Text>
          </Box>
        </Box>

        {/* Claimed Items */}
        <Box margin={{ bottom: "medium" }}>
          <Text weight={500} margin={{ bottom: "xsmall" }}>
            Claimed Items
          </Text>
          <Box
            direction="row"
            align="center"
            justify="between"
            pad="small"
            border={{ side: "all", color: "#EEEEEE" }}
            round="6px"
          >
            <Box direction="row" gap="small" align="center">
              <Box direction="row" align="center" justify="center">
                <Image
                  height="60px"
                  width="60px"
                  fit="cover"
                  src={IPhone}
                  alt="IPhone Image"
                  style={{ background: "#EEEEEE" }}
                />
              </Box>
              <Box>
                <Text weight={500} style={{ opacity: "85%" }}>
                  iPhone 15
                </Text>
                <Text weight={500} size="small" style={{ opacity: "50%" }}>
                  128 GB • Black
                </Text>
              </Box>
            </Box>
            <Box>
              <Text weight={500} style={{ opacity: "75%" }}>
                ₹ 79,999
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Approve Claims */}
      <ApproveClaim />
    </Box>
  );
};

export default ClaimDetails;
