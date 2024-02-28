import React from "react";
import "./sidebar.css";
import reports from "../images/reports.png";
import verification from "../images/verification.png";
import payouts from "../images/payouts.png";
import addadmin from "../images/addadmin.png";
import influencer from "../images/influencer.png";
import businessActive from "../images/BusinessActive.png";
import influencerActive from "../images/influincerActive.png";
import verificationActive from "../images/verificationActive.png";
import reportsActive from "../images/reportsActive.png";
import addadminActive from "../images/adminActive.png";
import payoutsActive from "../images/payoutActive.png";

import business from "../images/business.png";
import { NavLink, useLocation } from "react-router-dom";

// ... (imports and other code)

const Sidebar = () => {
  const location = useLocation();

  // Define the list of links and their corresponding paths and images
  const links = [
    {
      to: "/",
      label: "Businesses",
      icon: business,
      activeIcon: businessActive,
    },
    {
      to: "/influincer",
      label: "Influencer",
      icon: influencer,
      activeIcon: influencerActive,
    },
    {
      to: "/verification",
      label: "Verification",
      icon: verification,
      activeIcon: verificationActive,
    },
    {
      to: "/reports",
      label: "Reports",
      icon: reports,
      activeIcon: reportsActive,
    },
    {
      to: "/addadmin",
      label: "Add Admin",
      icon: addadmin,
      activeIcon: addadminActive,
    },
    {
      to: "/payouts",
      label: "Payouts",
      icon: payouts,
      activeIcon: payoutsActive,
    },
  ];

  return (
    <div className="sideNavbar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "20px",
              }}
              to={link.to}
              className={location.pathname === link.to ? "active-link" : ""}
            >
              <img
                className="png-image"
                src={
                  location.pathname === link.to ? link.activeIcon : link.icon
                }
                alt=""
              />
              <p className="m-0 p-0">{link.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
