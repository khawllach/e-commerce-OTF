import React from "react";
import "./Topbar.css";
import SearchBox from "../SearchBox/SearchBox";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-links">
        <span className="links">Home</span>
        <span className="links">shopping</span>
        <span className="links">Contact</span>
      </div>
      <h3 className="logo">OTF</h3>
      <SearchBox />
    </div>
  );
};

export default Topbar;
