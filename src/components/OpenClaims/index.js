import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Image,
} from "grommet";
import { Person } from "phosphor-react";
import CustomHeader from "../TableHeader";
import CustomTableCell from "../CustomTableCell";
import { tableHeader, dummyData } from "../Constants";
import { formatData } from "../utills";
import IPhone from "./iphone_image.png";

const OpenClaims = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const formatedData = formatData(dummyData);
      setData(formatedData);
      setIsLoading(false);
    }, 0);
  }, []);

  return (
    <Box
      background="#fff"
      pad={{ horizontal: "medium", bottom: "medium" }}
      round
    >
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
                        id={rowData.id}
                        text={rowData[header.id].text}
                        subtext={rowData[header.id].subtext}
                        icon={
                          header.id === "employee" ? (
                            <Box
                              direction="row"
                              align="center"
                              justify="center"
                              border
                              round="50%"
                              pad="4px"
                              height="40px"
                              width="40px"
                            >
                              <Person size={32} />
                            </Box>
                          ) : header.id === "device" ? (
                            <Box
                              direction="row"
                              align="center"
                              justify="center"
                              height="50px"
                              width="50px"
                              background="#EEEEEE"
                              round
                            >
                              <Image
                                height="40px"
                                width="40px"
                                fit="cover"
                                src={IPhone}
                                alt="IPhone"
                                style={{ background: "#EEEEEE" }}
                              />
                            </Box>
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
