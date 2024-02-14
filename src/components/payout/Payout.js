import React from 'react';
import profile from '../images/profile.png'
import HomePage from '../reusebale components/HomePage';

const Reports = () => {
  const data = {
    name: "Anderson",
    profile: profile,
    brandname: "03:00 am",
    date: "31 oct 2024",
    type: "$400",
    Category3:"Time",
    Category4:"Transaction",
    link:"/UserPayout",
  };
  return (
    <>
    <HomePage {...data} />
    </>
  );
}

export default Reports;
