import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="intro">
        <p>Your Search Ends Here!</p>
        <h1>
          <span>Buy </span>and<span> Sell</span> Properties
        </h1>
        <p className="details">Find Better Places to Live, Work and Wonder</p>
        <a href="#" className="header-btn">
          Details
        </a>
      </div>
    </div>
  );
}

export default Header;
