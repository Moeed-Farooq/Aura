import React from "react";
import "./sidebar.css";
import reports from "../images/reports.png";
import verification from "../images/verification.png";
import payouts from "../images/payouts.png";
import addadmin from "../images/addadmin.png";
import influencer from "../images/influencer.png";
import business from "../images/business.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sideNavbar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active-link">
            <img src={business} alt="" /> Businesses
          </NavLink>
        </li>
        <li>
          <NavLink to="/influincer" activeClassName="active-link">
            <img src={influencer} alt="" /> Influencer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/verification"
            style={{ display: "flex", alignItems: "center" }}
            activeClassName="active-link"
          >
            <img src={verification} alt="" /> Verification
            <span className="verification-span">
              <p className="rounded-circle">15</p>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" activeClassName="active-link">
            <img src={reports} alt="" /> Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/addadmin" activeClassName="active-link">
            <img src={addadmin} alt="" /> Add Admin
          </NavLink>
        </li>
        <li>
          <NavLink to="/payouts" activeClassName="active-link">
            <img src={payouts} alt="" /> Payouts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
