import React from "react";
import { Box, Text, TableHeader, TableRow, TableCell } from "grommet";
import { ArrowDown, HourglassSimpleMedium } from "phosphor-react";

const CustomHeader = ({ tableHeader }) => {
  return (
    <TableHeader>
      <TableRow>
        {tableHeader.map((header) => (
          <TableCell
            key={header.id}
            scope="col"
            border={{ side: "all", color: "#EEEEEE" }}
            direction="row"
            align="center"
            gap="small"
            background="#FAFAFA"
          >
            {!["amount", "claim_status"].includes(header.id) && (
              <Box direction="row" align="center">
                {header.id === "requested_on" ? (
                  <HourglassSimpleMedium size={15} />
                ) : (
                  <Text size="small">A</Text>
                )}
                <ArrowDown size={14} />
              </Box>
            )}
            <Text size="small" weight={500} color="#4B4B4B">
              {header.label}
            </Text>
          </TableCell>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default CustomHeader;
