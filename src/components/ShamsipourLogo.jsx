import React from "react";
import "../styles/components/shamsipour-logo.scss";
import logo from "../assets/images/shamsi-logo.svg";

const ShamsipourLogo = ({ width, firstFontSize, secondFontSize, login }) => {
  let loginWord = "";
  if (login === true) {
    loginWord = "ورود به";
  } else {
    loginWord = "";
  }
  return (
    <div className="logo-component-container">
      <div className="logo-wrapper">
        <img src={logo} alt="Shamsipour Logo" style={{ width: width + "px" }} />
      </div>
      <div className="title-wrapper">
        <h2 className="first-title" style={{ fontSize: firstFontSize + "px" }}>
          {loginWord} سیستم مدیریت یادگیری
        </h2>
        <h4
          className="second-title"
          style={{ fontSize: secondFontSize + "px" }}>
          دانشکده شهید شمسی پور
        </h4>
      </div>
    </div>
  );
};

export default ShamsipourLogo;
