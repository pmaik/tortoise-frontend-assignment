import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import "./App.css";

function App() {
  const [rowCount, setRowCount] = useState(5);

  useEffect(() => {
    setRowCount(5);
  }, []);

  const updateRowCount = (e) => {
    // console.log(e.target.value);
    setRowCount(e.target.value);
  };

  return (
    <div className="App">
      <div className="content">
        <Header updateRowCount={updateRowCount} />
        <Table rowCount={rowCount} />
      </div>
    </div>
  );
}

export default App;
