import React from "react";
import profile from "../images/profile.png";
import HomePage from "../reusebale components/HomePage";
import "./payout.css";

const Reports = () => {
  const data = {
    raised: "Anderson",
    profile: profile,
    brandname: "03:00 am",
    id: "56273",
    type: "$400",
    Category3: "Type",
    Category4: "Transaction",
    link: "/UserPayout",
  };
  return (
    <>
      <HomePage {...data} />
    </>
  );
};

export default Reports;
