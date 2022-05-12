import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <img
        alt="Pokemon"
        src={require("../../../assets/images/pokemon-logo.png")}
        className="header-img"
      />
    </div>
  );
};

export default Header;
