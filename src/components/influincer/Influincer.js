import React from "react";
import HomePage from "../reusebale components/HomePage";
import profile from "../images/profile.png";

const Infulincer = () => {
  const data = {
    raised: "Anderson",
    profile: profile,
    brandname: "Male",
    id: "23423",
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
