import React from "react";
import { Box, Text } from "grommet";
import { CaretDown, DeviceMobile, HouseLine, Money } from "phosphor-react";

const PaymentBreakdown = () => {
  return (
    <Box width="xlarge" background="#fff">
      <Box pad={{ vertical: "medium", horizontal: "large" }} gap="medium">
        <Box
          pad={{ horizontal: "small", vertical: "medium" }}
          border={{ size: "1px", color: "#EEEEEE" }}
          round="8px"
          style={{ boxShadow: "0px 1px 0px 0px #EEEEEE" }}
        >
          <Box direction="row" align="center" justify="between">
            <Text weight={500}>For Employee </Text>
            <Box background="#AFAFAF" round="50%" pad="2px">
              <CaretDown size={15} color="#fff" />
            </Box>
          </Box>

          <Box pad={{ horizontal: "small", vertical: "medium" }}>
            <Box
              direction="row"
              justify="center"
              background="#62E29F"
              width="30px"
              round="8px"
            >
              <DeviceMobile size={32} color="#fff" />
            </Box>
            <Box>
              <Text weight={500} size="small" style={{ opacity: "60%" }}>
                Total claim value
              </Text>
              <Text weight={500}>₹80,498</Text>
            </Box>
          </Box>

          <Box gap="6px">
            <Text weight={500} size="16px" style={{ opacity: "95%" }}>
              Payments are split into monthly payment for 6 months
            </Text>
            <Text size="small">
              It is deducted directly out of the employee's salary as part of a
              tax-free device allowance.
            </Text>
          </Box>
        </Box>

        <Box
          pad={{ horizontal: "small", vertical: "medium" }}
          border={{ size: "1px", color: "#EEEEEE" }}
          round="8px"
          style={{ boxShadow: "0px 1px 0px 0px #EEEEEE" }}
        >
          <Box direction="row" align="center" justify="between">
            <Text weight={500}>For ABB </Text>
            <Box background="#AFAFAF" round="50%" pad="2px">
              <CaretDown size={15} color="#fff" />
            </Box>
          </Box>

          <Box direction="row" align="center" justify="between">
            <Box pad={{ horizontal: "small", vertical: "medium" }}>
              <Box
                direction="row"
                justify="center"
                align="center"
                background="#FF91EE"
                width="40px"
                height="40px"
                round="8px"
              >
                <HouseLine size={32} color="#fff" />
              </Box>
              <Box>
                <Text weight={500} size="small" style={{ opacity: "60%" }}>
                  Total claim value
                </Text>
                <Text weight={500}>18% over 6 months</Text>
              </Box>
            </Box>
            <Box pad={{ horizontal: "small", vertical: "medium" }}>
              <Box
                direction="row"
                justify="center"
                align="center"
                background="#FF91EE"
                width="40px"
                height="40px"
                round="8px"
              >
                <Money size={32} color="#fff" />
              </Box>
              <Box>
                <Text weight={500} size="small" style={{ opacity: "60%" }}>
                  Sponsored amount
                </Text>
                <Text weight={500}>₹ 20,000</Text>
              </Box>
            </Box>
          </Box>

          <Box gap="6px">
            <Text weight={500} size="16px" style={{ opacity: "95%" }}>
              ₹ 28,000 contributed to this purchase
            </Text>
            <Text size="small">
              Your organisation has passed 18% GST input credit and additional
              sponsorship of ₹ 20,000 for this purchase
            </Text>
          </Box>
        </Box>
      </Box>

      {/* 3 */}
      <Box></Box>
    </Box>
  );
};

export default PaymentBreakdown;
