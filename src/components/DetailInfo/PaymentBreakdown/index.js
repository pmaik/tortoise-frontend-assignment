import React from "react";
import { Box, Text } from "grommet";
import { DeviceMobile, HouseLine, Money } from "phosphor-react";
import ApproveClaim from "../ApproveClaim";
import HorizontalLineWithText from "./HorizontalLineWithText";
import ForEmployee from "./ForEmployee";

const PaymentBreakdown = () => {
  return (
    <Box
      width="xlarge"
      background="#fff"
      round={{ size: "6px", corner: "bottom" }}
      pad={{ vertical: "medium" }}
    >
      <Box
        pad={{ horizontal: "large", bottom: "large" }}
        gap="large"
        border={{ size: "1px", side: "bottom", color: "#EEEEEE" }}
      >
        {/* For Employee  */}
        <ForEmployee
          headerText="For Employee"
          claimValueIcon={
            <Box
              direction="row"
              justify="center"
              background="#62E29F"
              width="30px"
              round="8px"
            >
              <DeviceMobile size={32} color="#fff" />
            </Box>
          }
          totalClaimText="Total claim value"
          totalClaimValue="₹80,498"
          mainText="Payments are split into monthly payment for 6 months"
          subText="It is deducted directly out of the employee's salary as part of a tax-free device allowance."
          horizontalLine1={
            <HorizontalLineWithText
              text="Salary deductions"
              color="#924790"
              width={170}
              minWidth={120}
            />
          }
          horizontalLine2={
            <HorizontalLineWithText
              text="Payments by employee"
              color="#775DB3"
              width={240}
              minWidth={120}
            />
          }
          rentalPaymentText="Monthly rental payment"
          rentalPaymentValue="₹13,416"
          instalmentsText="No. of instalments to be deducted"
          instalmentsCount={6}
          totalAmountPaidText="Total amount to be paid"
          totalAmountPaid="₹80,498"
          noteText={
            <Text color="#4B4B4B">
              If you approve this request today, you'll have to{" "}
              <strong>deduct ₹13,416</strong>
              from Aditya's salary from the next payroll cycle starting{" "}
              <strong>May 2024 till October 2024</strong>
            </Text>
          }
          advancePaidValue="₹ 1,000"
        />

        {/* For ABB */}
        <ForEmployee
          headerText="For ABB"
          claimValueIcon={
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
          }
          totalClaimText="Total claim value"
          totalClaimValue="18% over 6 months"
          sponsoredIcon={
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
          }
          sponsoredText="Sponsored amount"
          sponsoredValue="₹ 20,000"
          mainText="₹ 28,000 contributed to this purchase"
          subText="Your organisation has passed 18% GST input credit and additional sponsorship of ₹ 20,000 for this purchase."
          horizontalLine1={
            <HorizontalLineWithText
              text="Payments to Connect"
              color="#167E62"
              width={220}
              minWidth={120}
            />
          }
          rentalPaymentText="Monthly rental payment"
          rentalPaymentValue="₹ 18,416"
          instalmentsText="No. of instalments"
          instalmentsCount={6}
          totalAmountPaidText="Total amount to be paid"
          totalAmountPaid="₹ 1,04,498"
          noteText={
            <Text color="#4B4B4B">
              Monthly payments are subject to change based on the agreed payment
              cycle with Connect, without altering the final payable amount
            </Text>
          }
        />
      </Box>

      {/* Approve claim */}
      <ApproveClaim />
    </Box>
  );
};

export default PaymentBreakdown;
