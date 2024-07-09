import React from "react";
import { Box, Button, Text } from "grommet";
import {
  CaretLeft,
  CaretRight,
  XCircle,
  Person,
  Money,
  Calendar,
  Note,
  DeviceMobile,
  UserCircleGear,
  Smiley,
  CheckCircle,
} from "phosphor-react";

const ClaimDetails = () => {
  console.log("ClaimDetails rendered");
  return (
    <Box width="xlarge" background="#fff" round="6px">
      <Box>
        <Box
          direction="row"
          justify="between"
          pad={{ vertical: "medium", horizontal: "large" }}
          align="center"
          border={{ side: "bottom", color: "#EEEEEE" }}
          background="#FAFAFA"
        >
          <Box direction="row">
            <Box
              border={[
                { side: "top", color: "#EEEEEE" },
                { side: "bottom", color: "#EEEEEE" },
                { side: "left", color: "#EEEEEE" },
              ]}
              round={{ size: "6px", corner: "left" }}
            >
              <CaretLeft color="#CBCBCB" size={25} />
            </Box>
            <Box
              border={{ side: "all", color: "#EEEEEE" }}
              round={{ size: "6px", corner: "right" }}
            >
              <CaretRight color="#CBCBCB" size={25} />
            </Box>
          </Box>
          <Text weight="bold">Aditya's Claim</Text>
          <Box
            border={{ side: "all", color: "#EEEEEE" }}
            round="8px"
            pad="xxsmall"
          >
            <XCircle color="#CBCBCB" size={20} />
          </Box>
        </Box>

        <Box
          pad={{ vertical: "medium", horizontal: "large" }}
          direction="row"
          align="center"
          justify="between"
          border={{ side: "bottom", color: "#EEEEEE" }}
          background="#FAFAFA"
        >
          <Button
            label="Claim Details"
            pad={{ horizontal: "small", vertical: "xsmall" }}
            style={{
              border: "1px solid #EEEEEE",
              borderRadius: "8px",
              background: "#fff",
              fontSize: "medium",
            }}
          />
          <Button
            label="Payment Breakdown"
            pad={{ horizontal: "small", vertical: "xsmall" }}
            style={{
              border: "1px solid #EEEEEE",
              borderRadius: "8px",
              background: "#fff",
              fontSize: "medium",
            }}
          />
          <Button
            label="Documents"
            pad={{ horizontal: "small", vertical: "xsmall" }}
            style={{
              border: "1px solid #EEEEEE",
              borderRadius: "8px",
              background: "#fff",
              fontSize: "medium",
            }}
          />
        </Box>
      </Box>

      <Box pad="large" border={{ side: "bottom", color: "#EEEEEE" }}>
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
            <Box direction="row" gap="small" align="centre">
              <Box
                border={{ side: "all", color: "#35dfb5" }}
                round="50%"
                pad="4px"
                background="#17b6e0"
              >
                <Person size={32} color="#fff" />
              </Box>
              <Box>
                <Text size="small" weight={500}>
                  Requested 5m ago
                </Text>
                <Text weight="lighter" size="xsmall">
                  12th April 2024
                </Text>
              </Box>
            </Box>
            <Box>
              <Text size="small" weight={500}>
                Requested 5m ago
              </Text>
              <Text weight="lighter" size="xsmall">
                12th April 2024
              </Text>
            </Box>
          </Box>
        </Box>

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
            <Box>
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
                <Text weight="lighter" size="xsmall">
                  Deductible amount
                </Text>
                <Text size="small" weight={500}>
                  ₹13,416 / month
                </Text>
              </Box>
            </Box>

            <Box>
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
                <Text weight="lighter" size="xsmall">
                  Tenure
                </Text>
                <Text size="small" weight={500}>
                  12 months
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            background="#49ffd0"
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

        <Box margin={{ bottom: "medium" }}>
          <Text weight={500} margin={{ bottom: "xsmall" }}>
            Claimed Items
          </Text>
          <Box
            direction="row"
            align="center"
            justify="between"
            pad="medium"
            border={{ side: "all", color: "#EEEEEE" }}
            round="6px"
          >
            <Box direction="row" gap="small" align="centre">
              <Box>
                <Box
                  border={{ side: "all", color: "#EEEEEE" }}
                  round="6px"
                  background="#ebebebf2"
                  pad="4px"
                >
                  <DeviceMobile size={30} />
                </Box>
              </Box>
              <Box>
                <Text size="small" weight={500}>
                  iPhone 15
                </Text>
                <Text weight="lighter" size="xsmall">
                  128 GB • Black
                </Text>
              </Box>
            </Box>
            <Box>
              <Text size="small" weight={500}>
                ₹ 79,999
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box pad="large">
        <Box direction="row" gap="small">
          <Box
            pad="xsmall"
            background="#16AF8E"
            round="50%"
            direction="row"
            justify="center"
            align="center"
          >
            <UserCircleGear size={32} color="#fff" />
          </Box>
          <Box>
            <Text weight={500}>Approve claim</Text>
            <Text size="small">
              You're organisation has set up a multi-level claim approval
              process
            </Text>
          </Box>
        </Box>

        <Box
          pad={{ horizontal: "large", vertical: "medium" }}
          border={{ side: "bottom", color: "#EEEEEE" }}
        >
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
              <Text weight={500}>Jules Bianchi (You)</Text>
            </Box>
          </Box>

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
            <Text weight={500}>Surya Harsha</Text>
          </Box>
        </Box>

        <Box
          direction="row"
          align="center"
          pad={{ top: "medium" }}
          gap="large"
        >
          <Button
            label={<Text>Reject</Text>}
            pad={{ horizontal: "small", vertical: "xsmall" }}
            style={{
              border: "2px solid #EEEEEE",
              borderRadius: "8px",
              background: "#fff",
              fontSize: "medium",
              width: "200px",
            }}
            icon={
              <Box background="#F02C2C" round="50%">
                <XCircle size={20} />
              </Box>
            }
          />
          <Button
            label={<Text color="#fff">Approve</Text>}
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
    </Box>
  );
};

export default ClaimDetails;
