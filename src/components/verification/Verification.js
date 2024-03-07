import React from "react";
import profile from "../images/profile.png";
import HomePage from "../reusebale components/HomePage";
import "./verification.css";

const Verification = () => {
  const data = {
    raised: "Anderson",
    profile: profile,
    brandname: "name",
    id: "31273",
    type: "Fashion",
    Category3: "Type",
    Category4: "Status",
    link: "/UserVerification",
  };
  return (
    <>
      <HomePage {...data} />
    </>
  );
};

export default Verification;
