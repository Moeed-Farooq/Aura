import React from 'react';
import profile from '../images/profile.png'
import HomePage from '../reusebale components/HomePage';

const Business = () => {
  const data = {
    name: "Anderson",
    profile: profile,
    brandname: "name",
    date: "31 oct 2024",
    type: "Fashion",
    Category3:" Brand Name",
    Category4:"Category",
    link:"/BusinessUser",
  };
  return (
    <>
    <HomePage {...data} />
    </>
  );
}

export default Business;
