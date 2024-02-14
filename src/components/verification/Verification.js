import React from 'react';
import profile from '../images/profile.png'
import HomePage from '../reusebale components/HomePage';

const Verification = () => {
  const data = {
    name: "Anderson",
    profile: profile,
    brandname: "name",
    date: "31 oct 2024",
    type: "Fashion",
    Category3:" Brand Name",
    Category4:"Category",
    link:"/UserVerification",
  };
  return (
    <>
    <HomePage {...data} />
    </>
  );
}

export default Verification;
