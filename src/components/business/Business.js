import React from "react";
import profile from "../images/profile.png";
import HomePage from "../reusebale components/HomePage";

const Business = () => {
  const data = {
    id: "Anderson",
    profile: profile,
    brandname: "Influincer",
    raised: "31 oct 2024",
    type: "Active",
    Category3: "Type",
    Category4: "Status",
    link: "/BusinessUser",
  };
  return (
    <>
      <HomePage {...data} />
    </>
  );
};

export default Business;
