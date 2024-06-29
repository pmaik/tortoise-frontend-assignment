import React, { useState, useEffect } from "react";
import "./styles.css";

const Table = ({ rowCount }) => {
  const [tabledata, setTabledata] = useState([
    "data1",
    "data2",
    "data3",
    "data1",
    "data2",
    "data3",
    "data1",
    "data2",
    "data3",
    "data1",
    "data2",
    "data3",
  ]);

  //   useEffect(() => {
  //     try {
  //       const data = fetch("https://restcountries.com/v3.1/all").then((res) => {
  //         console.log("res", res);
  //       });
  //       setTabledata(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []);

  return (
    <div className="table-section">
      <table>
        <thead>
          <tr>
            <th>Col1</th>
            <th>Col2</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.slice(0, rowCount).map((data) => (
            <tr>
              <td>data1</td>
              <td>data2</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
