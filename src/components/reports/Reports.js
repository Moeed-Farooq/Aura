import React from "react";
import profile from "../images/profile.png";
import HomePage from "../reusebale components/HomePage";
import "./report.css";

const Reports = () => {
  const data = {
    raised: "Anderson",
    profile: profile,
    brandname: "03:00 am",
    id: "31362",
    type: "James Walter",
    Category3: "Type",
    Category4: "Status",
    link: "/UserStatusReport",
  };
  return (
    <>
      <HomePage {...data} />
    </>
  );
};

export default Reports;
