import React from "react";
import profile from "../images/profile.png";
import HomePage from "../reusebale components/HomePage";
import "./report.css";

const Reports = () => {
  const data = {
    id: "Anderson",
    profile: profile,
    brandname: "03:00 am",
    raised: "31 oct 2024",
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
