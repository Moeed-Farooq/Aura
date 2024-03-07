import React from "react";
import HomePage from "../reusebale components/HomePage";
import profile from "../images/profile.png";

const Infulincer = () => {
  const data = {
    id: "Anderson",
    profile: profile,
    brandname: "Male",
    raised: "31 oct 2024",
    type: "Fashion",
    Category3: "Gender",
    Category4: "Category",
    link: "/InfluincerUser",
  };
  return (
    <>
      <HomePage {...data} />
    </>
  );
};

export default Infulincer;
