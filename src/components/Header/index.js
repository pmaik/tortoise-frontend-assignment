import React from "react";
import "./styles.css";

const Header = ({ updateRowCount }) => {
  return (
    <div className="header-section">
      <div className="show-entries">
        <span>Show</span>
        <select onChange={updateRowCount}>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
        <span>entries</span>
      </div>
      <div className="search">
        <span>Search: </span>
        <input type="text" />
      </div>
    </div>
  );
};

export default Header;
