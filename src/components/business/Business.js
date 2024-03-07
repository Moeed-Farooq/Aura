import React from "react";
import profile from "../images/profile.png";
import HomePage from "../reusebale components/HomePage";

const Business = () => {
  const data = {
    raised: "Anderson",
    profile: profile,
    brandname: "Influincer",
    id: "91728",
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
