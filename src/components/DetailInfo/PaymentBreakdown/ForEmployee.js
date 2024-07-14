import React from "react";
import { Box, Text } from "grommet";
import {
  CaretDown,
  Money,
  CalendarBlank,
  Receipt,
  ArrowFatLinesRight,
} from "phosphor-react";

const ForEmployee = ({
  headerText,
  claimValueIcon,
  totalClaimText,
  totalClaimValue,
  sponsoredIcon,
  sponsoredText,
  sponsoredValue,
  mainText,
  subText,
  horizontalLine1,
  horizontalLine2,
  rentalPaymentText,
  rentalPaymentValue,
  instalmentsText,
  instalmentsCount,
  totalAmountPaidText,
  totalAmountPaid,
  noteText,
  advancePaidValue,
}) => {
  return (
    <Box
      pad="medium"
      border={{ size: "1px", color: "#EEEEEE" }}
      round="8px"
      style={{ boxShadow: "0px 1px 0px 0px #EEEEEE" }}
    >
      {/* Header */}
      <Box direction="row" align="center" justify="between">
        <Text weight={500}>{headerText}</Text>
        <Box background="#AFAFAF" round="50%" pad="2px">
          <CaretDown size={15} color="#fff" />
        </Box>
      </Box>

      {/* Total claim &/ sponsored  value */}
      <Box
        pad={{ horizontal: "small", vertical: "medium" }}
        direction="row"
        align="center"
        justify="between"
      >
        <Box>
          {claimValueIcon}
          <Box>
            <Text weight={500} size="small" style={{ opacity: "60%" }}>
              {totalClaimText}
            </Text>
            <Text weight={500}>{totalClaimValue}</Text>
          </Box>
        </Box>

        {sponsoredIcon && (
          <Box>
            {sponsoredIcon}
            <Box>
              <Text weight={500} size="small" style={{ opacity: "60%" }}>
                {sponsoredText}
              </Text>
              <Text weight={500}>{sponsoredValue}</Text>
            </Box>
          </Box>
        )}
      </Box>

      {/* Main & Sub text */}
      <Box gap="6px">
        <Text weight={500} size="16px" style={{ opacity: "95%" }}>
          {mainText}
        </Text>
        <Text size="small">{subText}</Text>
      </Box>

      {/* Horizontal line with text at center */}
      {horizontalLine1}

      {/* Rental , Instalments & Total amount paid with Note box */}
      <Box gap="medium">
        {/* Rental line */}
        <Box direction="row" align="center" justify="between">
          <Box direction="row" align="center" gap="small">
            <Box pad="0px" background="#FF91EE" round="6px">
              <CalendarBlank size={32} color="#fff" />
            </Box>
            <Text weight={500}>{rentalPaymentText}</Text>
          </Box>
          <Text weight={500}>{rentalPaymentValue}</Text>
        </Box>

        {/* Instalments line */}
        <Box direction="row" align="center" justify="between">
          <Box direction="row" align="center" gap="small">
            <Box pad={{ horizontal: "4px" }} background="#FF91EE" round="6px">
              <Money size={32} color="#fff" />
            </Box>
            <Text weight={500}>{instalmentsText}</Text>
          </Box>
          <Text weight={500}>{instalmentsCount}</Text>
        </Box>

        {/* border bottom */}
        <Box
          border={{ size: "1px", style: "dashed", color: "#E1E1E1" }}
          width="full"
        ></Box>

        {/* Total amount paid*/}
        <Box direction="row" align="center" justify="between">
          <Box direction="row" align="center" gap="small">
            <Box pad={{ horizontal: "4px" }} background="#E1E1E1" round="6px">
              <Receipt size={32} color="#fff" />
            </Box>
            <Text weight={500}>{totalAmountPaidText}</Text>
          </Box>
          <Text weight={500}>{totalAmountPaid}</Text>
        </Box>

        {/* The note box */}
        <Box round="12px" background="#EEEEEE" pad="medium">
          {noteText}
        </Box>
      </Box>

      {/* Horizontal line 2 with text at center */}
      {horizontalLine2}

      {/* Advance paid */}
      {advancePaidValue && (
        <Box direction="row" align="center" justify="between">
          <Box direction="row" align="center" gap="small">
            <Box pad={{ horizontal: "2px" }} background="#2AC393" round="6px">
              <ArrowFatLinesRight size={32} color="#fff" />
            </Box>
            <Text weight={500}>Advance paid</Text>
          </Box>
          <Text weight={500}>{advancePaidValue}</Text>
        </Box>
      )}
    </Box>
  );
};

export default ForEmployee;
