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
import CustomHeader from "../TableHeader";
import CustomTableCell from "../CustomTableCell";
import { tableHeader, dummyData } from "../Constants";
import { formatData } from "../utills";
import IPhone from "../../images/iphone_image.png";
import { peopleImages } from "../Constants";

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
        <Box overflow="auto">
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
                            >
                              <Image
                                height="40px"
                                width="40px"
                                fit="cover"
                                src={peopleImages[ind % 5]}
                                alt="People Image"
                                style={{
                                  background: "#EEEEEE",
                                  borderRadius: "50%",
                                }}
                              />
                            </Box>
                          ) : header.id === "device" ? (
                            <Box
                              direction="row"
                              align="center"
                              justify="center"
                            >
                              <Image
                                height="50px"
                                width="50px"
                                fit="cover"
                                src={IPhone}
                                alt="IPhone Image"
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
