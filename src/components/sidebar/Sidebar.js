import React from 'react'
import reports from '../images/reports.png'
import verification from '../images/verification.png'
import payouts from '../images/payouts.png'
import addadmin from '../images/addadmin.png'
import influencer from '../images/influencer.png'
import business from '../images/business.png'
import {Link} from   'react-router-dom';


const Sidebar = () => {
  return (
    <>
    
    <div className="sideNavbar">
        <ul>
            <li> <Link to="business"> <img src={business} alt="" />  Businesses</Link></li>
            <li> <Link to="influincer"> <img src={influencer} alt="" />Influencer</Link></li>
            <li> <Link to="verification"> <img src={verification} alt="" />Verification</Link></li>
            <li> <Link to="reports"> <img src={reports} alt="" />Reports</Link></li>
            <li> <Link to="addadmin"> <img src={addadmin} alt="" />Add Admin</Link></li>
            <li> <Link to="payouts"> <img src={payouts} alt="" />Payouts</Link></li>
            

        </ul>
    </div>
    </>
  )
}

export default Sidebar