import React from 'react';
import HomePage from '../reusebale components/HomePage';
import profile from '../images/profile.png'

const Infulincer = () => {
  const data = {
    name: "Anderson",
    profile: profile,
    brandname: "Male",
    date: "31 oct 2024",
    type: "Fashion",
    Category3:"Gender",
    Category4:"Category",
      link:"/InfluincerUser",
  };
  return (
    <>
    <HomePage {...data} />
    </>
  );
}

export default Infulincer;
