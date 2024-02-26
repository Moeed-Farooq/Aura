import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeCard from "../reusebale components/HomeCard";
import filter from "../images/filter.png";
import "./homepage.css";

const Homepage = ({
  Category3,
  Category4,
  name,
  profile,
  type,
  brandname,
  date,
  link,
}) => {
  const [showCount, setShowCount] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentDate, setCurrentDate] = useState("");

  const handleShowChange = (event) => {
    setShowCount(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handleDateChange = (e) => {
    setCurrentDate(e.target.value);
  };

  const handleResize = () => {
    // Adjust showCount based on the window width
    if (window.innerWidth < 1500) {
      setShowCount(6);
    } else if (window.innerWidth < 1800) {
      setShowCount(7);
    } else if (window.innerWidth < 2000) {
      setShowCount(9);
    }
  };

  const propsdata = {
    name: name,
    profile: profile,
    brandname: brandname,
    date: date,
    type: type,
  };

  const totalPages = Math.ceil(15 / showCount);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  useEffect(() => {
    handleResize(); // Initial adjustment on component mount

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    setCurrentDate(new Date().toISOString().split("T")[0]);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="container-fluid m-0 p-0 " style={{ height: "100%" }}>
          <div className="row pt-4 px-4 d-flex">
            <div className="col-md-6 ps-4" style={{ color: "#8B8B8B" }}>
              <label htmlFor="show">
                Select
                <span>
                  <select
                    name="show"
                    id="show"
                    className="FilterEntries  text-center"
                    onChange={handleShowChange}
                    value={showCount}
                  >
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                  </select>
                </span>
                Entries
              </label>
            </div>
            <div className="col-md-6 pe-4 text-end">
              <button className="FilterBtn">
                <span className="me-2">
                  <img src={filter} alt="" />
                </span>
                Filter
              </button>
              <input
                className="DateBtn"
                id="dateInput"
                value={currentDate}
                type="date"
                onChange={handleDateChange}
              />
            </div>
          </div>
          <hr />
          <div className="row main-labels mx-3">
            <div className="col-md-3 text-start ps-5 name">
              <p>Name</p>
            </div>
            <div className="col-md-2 text-start">
              <p>Date</p>
            </div>
            <div className="col-md-2">
              <p>{Category3}</p>
            </div>
            <div className="col-md-3 text-center">
              <p>{Category4}</p>
            </div>
            <div className="col-md-2 text-end pe-4 action">
              <p>Action</p>
            </div>
          </div>
          {/* users data importing from usercard.js */}
          {[...Array(showCount)].map((_, index) => (
            <Link className="Link" to={link} key={index}>
              {index + showCount * (currentPage - 1) < 15 && (
                <HomeCard {...propsdata} />
              )}
            </Link>
          ))}
          {/* main footer */}
          <div className="row px-5 d-flex mt-3">
            <div className="col-md-6 ps-3">
              <p>
                Showing {Math.min(showCount * currentPage, 15)} of 15 entries
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end pagination-buttons">
              <button
                className="pagination-button"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {totalPages > 1 && (
                <>
                  <button
                    onClick={() => setCurrentPage(1)}
                    className={`pagination-button ${
                      currentPage === 1 ? "active-page" : ""
                    }`}
                    disabled={currentPage === 1}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setCurrentPage(2)}
                    className={`pagination-button ${
                      currentPage === 2 ? "active-page" : ""
                    }`}
                    disabled={currentPage === 2}
                  >
                    2
                  </button>
                </>
              )}
              <button
                className="pagination-button"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
