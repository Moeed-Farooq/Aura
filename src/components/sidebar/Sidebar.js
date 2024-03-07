import React, { useEffect } from "react";
import "./sidebar.css";
import { NavLink, useLocation } from "react-router-dom";

import business from "../images/business.png";
import influencer from "../images/influencer.png";
import verification from "../images/verification.png";
import reports from "../images/reports.png";
import addadmin from "../images/addadmin.png";
import payouts from "../images/payouts.png";
import businessActive from "../images/BusinessActive.png";
import influencerActive from "../images/influincerActive.png";
import verificationActive from "../images/verificationActive.png";
import reportsActive from "../images/reportsActive.png";
import addadminActive from "../images/adminActive.png";
import payoutsActive from "../images/payoutActive.png";
// import notification from "../images/verificationNotification.png";

const Sidebar = () => {
  const location = useLocation();
  useEffect(() => {
    // Set the document title based on the current page
    if (
      location.pathname === "/BusinessUser" ||
      location.pathname === "/cancelOrder" ||
      location.pathname === "/completeOrder"
    ) {
      document.title = "Business";
    } else if (
      location.pathname === "/influincer" ||
      location.pathname === "/InfluincerUser" ||
      location.pathname === "/InfuilcerCompletedOrders" ||
      location.pathname === "/ActiveOrders"
    ) {
      document.title = "Influencer";
    } else if (
      location.pathname === "/verification" ||
      location.pathname === "/UserVerification"
    ) {
      document.title = "Verification";
    } else if (
      location.pathname === "/reports" ||
      location.pathname === "/UserStatusReport"
    ) {
      document.title = "Reports";
    } else if (
      location.pathname === "/addadmin" ||
      location.pathname === "/EditAdmin" ||
      location.pathname === "/CreateAdmin"
    ) {
      document.title = "Admin";
    } else if (
      location.pathname === "/payouts" ||
      location.pathname === "/UserPayout"
    ) {
      document.title = "Payouts";
    } else {
      document.title = "Aura";
    }
  }, [location.pathname]);

  return (
    <div className="sideNavbar">
      <ul>
        <li>
          <NavLink
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
            }}
            to="/"
            className={
              location.pathname === "/" ||
              location.pathname === "/BusinessUser" ||
              location.pathname === "/completeOrder" ||
              location.pathname === "/cancelOrder"
                ? "active-link"
                : ""
            }
          >
            <img
              className="png-image"
              src={
                location.pathname === "/" ||
                location.pathname === "/BusinessUser" ||
                location.pathname === "/completeOrder" ||
                location.pathname === "/cancelOrder"
                  ? businessActive
                  : business
              }
              alt=""
            />
            <p className="m-0 p-0">Businesses</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
            }}
            to="/influincer"
            className={
              location.pathname === "/influincer" ||
              location.pathname === "/InfluincerUser" ||
              location.pathname === "/InfuilcerCompletedOrders" ||
              location.pathname === "/ActiveOrders"
                ? "active-link"
                : ""
            }
          >
            <img
              className="png-image"
              src={
                location.pathname === "/influincer" ||
                location.pathname === "/InfluincerUser" ||
                location.pathname === "/InfuilcerCompletedOrders" ||
                location.pathname === "/ActiveOrders"
                  ? influencerActive
                  : influencer
              }
              alt=""
            />
            <p className="m-0 p-0">Influencer</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
            }}
            to="/verification"
            className={
              location.pathname === "/verification" ||
              location.pathname === "/UserVerification"
                ? "active-link"
                : ""
            }
          >
            <img
              className="png-image"
              src={
                location.pathname === "/verification" ||
                location.pathname === "/UserVerification"
                  ? verificationActive
                  : verification
              }
              alt=""
            />
            <p className="m-0 p-0">Verification</p>
            <div className="verification-notification">
              <p className="text-white">13</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
            }}
            to="/reports"
            className={
              location.pathname === "/reports" ||
              location.pathname === "/UserStatusReport"
                ? "active-link"
                : ""
            }
          >
            <img
              className="png-image"
              src={
                location.pathname === "/reports" ||
                location.pathname === "/UserStatusReport"
                  ? reportsActive
                  : reports
              }
              alt=""
            />
            <p className="m-0 p-0">Reports</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
            }}
            to="/addadmin"
            className={
              location.pathname === "/addadmin" ||
              location.pathname === "/EditAdmin" ||
              location.pathname === "/CreateAdmin"
                ? "active-link"
                : ""
            }
          >
            <img
              className="png-image"
              src={
                location.pathname === "/addadmin" ||
                location.pathname === "/EditAdmin" ||
                location.pathname === "/CreateAdmin"
                  ? addadminActive
                  : addadmin
              }
              alt=""
            />
            <p className="m-0 p-0">Add Admin</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
            }}
            to="/payouts"
            className={
              location.pathname === "/payouts" ||
              location.pathname === "/UserPayout"
                ? "active-link"
                : ""
            }
          >
            <img
              className="png-image"
              src={
                location.pathname === "/payouts" ||
                location.pathname === "/UserPayout"
                  ? payoutsActive
                  : payouts
              }
              alt=""
            />
            <p className="m-0 p-0">Payouts</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
