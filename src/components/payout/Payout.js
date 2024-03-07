import React from "react";
import profile from "../images/profile.png";
import HomePage from "../reusebale components/HomePage";
import "./payout.css";

const Reports = () => {
  const data = {
    id: "Anderson",
    profile: profile,
    brandname: "03:00 am",
    raised: "31 oct 2024",
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
