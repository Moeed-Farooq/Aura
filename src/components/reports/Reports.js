import React from 'react';
import profile from '../images/profile.png'
import HomePage from '../reusebale components/HomePage';

const Reports = () => {
  const data = {
    name: "Anderson",
    profile: profile,
    brandname: "03:00 am",
    date: "31 oct 2024",
    type: "James Walter",
    Category3:"Time",
    Category4:"Report",
    link:"/UserStatusReport",
  };
  return (
    <>
    <HomePage {...data} />
    </>
  );
}

export default Reports;
