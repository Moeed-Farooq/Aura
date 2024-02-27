import React from "react";
import "./smallscreen.css";
import logo from "../images/logo.png";
const SmallScreenMsg = () => {
  return (
    <>
      <div className="SmallScreenContainer container-fluid  ">
        <div>
          <img src={logo} alt="" />
          <p>Only Desktop devices are supported!</p>
        </div>
      </div>
    </>
  );
};

export default SmallScreenMsg;
