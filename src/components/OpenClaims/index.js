import React, { useEffect, useState } from "react";
import { Box, Text, Table, TableBody, TableRow, TableCell } from "grommet";
import { Person, DeviceMobile } from "phosphor-react";
import CustomHeader from "../TableHeader";
import CustomTableCell from "../CustomTableCell";
import { tableHeader, dummyData } from "../Constants";
import { formatData } from "../utills";

const OpenClaims = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const formatedData = formatData(dummyData);
      setData(formatedData);
      setIsLoading(false);
      console.log(dummyData, formatedData);
    }, 0);
  }, []);

  return (
    <Box background="#fff" pad={{ horizontal: "medium", bottom: "medium" }} round>
      {isLoading ? (
        <Box justify="center" align="center">
          <Text>Loading.....</Text>
        </Box>
      ) : (
        <Box>
          <Table>
            <CustomHeader tableHeader={tableHeader} />

            <TableBody>
              {tableData.map((rowData, ind) => (
                <TableRow key={JSON.stringify(rowData) + ind}>
                  {tableHeader.map((header, index) => (
                    <TableCell
                      key={JSON.stringify(rowData[header.id].text) + index}
                      scope="row"
                      border={{ side: "all", color: "#EEEEEE" }}
                    >
                      <CustomTableCell
                        text={rowData[header.id].text}
                        subtext={rowData[header.id].subtext}
                        icon={
                          header.id === "employee" ? (
                            <Person size={32} />
                          ) : header.id === "device" ? (
                            <DeviceMobile size={30} />
                          ) : null
                        }
                        circularBorder={header.id === "employee"}
                        isClaimStatus={header.id === "claim_status"}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default OpenClaims;
