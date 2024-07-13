import React from "react";
import { Box, Text } from "grommet";
import {
  CaretDown,
  DeviceMobile,
  HouseLine,
  Money,
  CalendarBlank,
  Receipt,
  ArrowFatLinesRight,
  CheckCircle,
  XCircle,
  Smiley,
  UserCircleGear,
} from "phosphor-react";
import { StyledButton } from "../StyledComponents";

const PaymentBreakdown = () => {
  return (
    <Box width="xlarge" background="#fff" round={{size: '6px', corner: 'bottom'}}>
      <Box pad={{ vertical: "medium", horizontal: "large" }} gap="large">
        {/* 1st box */}
        <Box
          pad="medium"
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

          {/* Horizontal line with text at center */}
          <Box
            direction="row"
            align="center"
            justify="center"
            pad={{ vertical: "medium" }}
          >
            <Box
              border={{ size: "1px", color: "#924790", style: "dashed" }}
              width="medium"
            ></Box>
            <Box
              border={{ size: "1px", color: "#924790" }}
              round="60px"
              pad="small"
              direction="row"
              align="center"
              width={{ min: "120px" }}
            >
              <Text weight={500} color="#924790" style={{ width: "170px" }}>
                Salary deductions
              </Text>
            </Box>
            <Box
              border={{ size: "1px", color: "#924790", style: "dashed" }}
              width="medium"
            ></Box>
          </Box>

          <Box gap="medium">
            {/* 1st line */}
            <Box direction="row" align="center" justify="between">
              <Box direction="row" align="center" gap="small">
                <Box pad="0px" background="#FF91EE" round="6px">
                  <CalendarBlank size={32} color="#fff" />
                </Box>
                <Text weight={500}>Monthly rental payment</Text>
              </Box>
              <Text weight={500}>₹13,416</Text>
            </Box>

            {/* 2nd line */}
            <Box direction="row" align="center" justify="between">
              <Box direction="row" align="center" gap="small">
                <Box
                  pad={{ horizontal: "4px" }}
                  background="#FF91EE"
                  round="6px"
                >
                  <Money size={32} color="#fff" />
                </Box>
                <Text weight={500}>No. of instalments to be deducted</Text>
              </Box>
              <Text weight={500}>6</Text>
            </Box>

            {/* border bottom */}
            <Box
              border={{ size: "1px", style: "dashed", color: "#E1E1E1" }}
              width="full"
            ></Box>

            {/* 3rd line */}
            <Box direction="row" align="center" justify="between">
              <Box direction="row" align="center" gap="small">
                <Box
                  pad={{ horizontal: "4px" }}
                  background="#E1E1E1"
                  round="6px"
                >
                  <Receipt size={32} color="#fff" />
                </Box>
                <Text weight={500}>Total amount to be paid</Text>
              </Box>
              <Text weight={500}>₹80,498</Text>
            </Box>

            {/* 4th- The note box */}
            <Box round="12px" background="#EEEEEE" pad="medium">
              <Text color="#4B4B4B">
                If you approve this request today, you'll have to{" "}
                <strong>deduct ₹13,416</strong>
                from Aditya's salary from the next payroll cycle starting{" "}
                <strong>May 2024 till October 2024</strong>
              </Text>
            </Box>
          </Box>

          {/* Horizontal line with text at center */}
          <Box
            direction="row"
            align="center"
            justify="center"
            pad={{ vertical: "medium" }}
          >
            <Box
              border={{ size: "1px", color: "#775DB3", style: "dashed" }}
              width="medium"
            ></Box>
            <Box
              border={{ size: "1px", color: "#775DB3" }}
              round="60px"
              pad="small"
              direction="row"
              align="center"
              width={{ min: "120px" }}
            >
              <Text weight={500} color="#775DB3" style={{ width: "240px" }}>
                Payments by employee
              </Text>
            </Box>
            <Box
              border={{ size: "1px", color: "#775DB3", style: "dashed" }}
              width="medium"
            ></Box>
          </Box>

          {/* Advance paid line */}
          <Box direction="row" align="center" justify="between">
            <Box direction="row" align="center" gap="small">
              <Box pad={{ horizontal: "2px" }} background="#2AC393" round="6px">
                <ArrowFatLinesRight size={32} color="#fff" />
              </Box>
              <Text weight={500}>Monthly rental payment</Text>
            </Box>
            <Text weight={500}>₹13,416</Text>
          </Box>
        </Box>

        {/* 2nd box */}
        <Box
          pad="medium"
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

          <Box
            direction="row"
            align="center"
            justify="center"
            pad={{ vertical: "medium" }}
          >
            <Box
              border={{ size: "1px", color: "#167E62", style: "dashed" }}
              width="medium"
            ></Box>
            <Box
              border={{ size: "1px", color: "#167E62" }}
              round="60px"
              pad="small"
              direction="row"
              align="center"
              justify="center"
              width={{ min: "120px" }}
            >
              <Text weight={500} color="#167E62" style={{ width: "220px" }}>
                Payments to Connect
              </Text>
            </Box>
            <Box
              border={{ size: "1px", color: "#167E62", style: "dashed" }}
              width="medium"
            ></Box>
          </Box>

          <Box gap="medium">
            <Box direction="row" align="center" justify="between">
              <Box direction="row" align="center" gap="small">
                <Box pad="0px" background="#FF91EE" round="6px">
                  <CalendarBlank size={32} color="#fff" />
                </Box>
                <Text weight={500}>Monthly rental payment</Text>
              </Box>
              <Text weight={500}>₹ 18,416</Text>
            </Box>

            {/* 2nd line */}
            <Box direction="row" align="center" justify="between">
              <Box direction="row" align="center" gap="small">
                <Box
                  pad={{ horizontal: "4px" }}
                  background="#FF91EE"
                  round="6px"
                >
                  <Money size={32} color="#fff" />
                </Box>
                <Text weight={500}>No. of instalments</Text>
              </Box>
              <Text weight={500}>6</Text>
            </Box>

            {/* border bottom */}
            <Box
              border={{ size: "1px", style: "dashed", color: "#E1E1E1" }}
              width="full"
            ></Box>

            {/* 3rd line */}
            <Box direction="row" align="center" justify="between">
              <Box direction="row" align="center" gap="small">
                <Box
                  pad={{ horizontal: "4px" }}
                  background="#E1E1E1"
                  round="6px"
                >
                  <Receipt size={32} color="#fff" />
                </Box>
                <Text weight={500}>Total amount to be paid</Text>
              </Box>
              <Text weight={500}>₹ 1,04,498</Text>
            </Box>

            {/* 4th- The note box */}
            <Box round="12px" background="#EEEEEE" pad="medium">
              <Text color="#4B4B4B">
                Monthly payments are subject to change based on the agreed
                payment cycle with Connect, without altering the final payable
                amount
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 3rd one */}
      <Box pad={{ horizontal: "large", vertical: "medium" }}>
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

        <Box direction="row" align="center" pad={{ top: "medium" }} gap="large">
          <StyledButton
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
              <Box background="#D57046" round="50%">
                <XCircle size={20} color="#fff" />
              </Box>
            }
          />
          <StyledButton
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

export default PaymentBreakdown;
