import React, { useEffect, useState } from 'react';
import HomeCard from '../reusebale components/HomeCard';
import adminicon from '../images/adminicon.png';
import dropdown from '../images/dropdown.png';
import filter from '../images/filter.png';
import date from '../images/calender.png';
import { Link } from 'react-router-dom';
import AdminCard from './AdminCard';

const Business = () => {
  const [showCount, setShowCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowChange = (event) => {
    setShowCount(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to the first page when changing the show count
  };

  const propsdata = {
    AdminName: "Hazel Finch",
    profile: adminicon,
    role: "Super Admin",
    email: "HazelFinch@gmail.com",
  };

  useEffect(() => {
    // Set the default value of showCount to 7 when the component mounts
    setShowCount(7);
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="container-fluid m-0 p-0">
          <div className="row pt-4 px-4 d-flex">
            <div className="col-md-6 d-flex align-items-center " style={{ color: "#8B8B8B" }}>
              <label className='ms-4' htmlFor="show">Show 
                <span>
                  <select
                    name="show"
                    id="show"
                    className='FilterEntries'
                    onChange={handleShowChange}
                    value={showCount}
                  >
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="7">7</option>
                  </select>
                </span>
                Entries
              </label>
            </div>

            <div className="col-md-6 text-end">
              <Link to="/CreateAdmin"><button className='btn AddAdminBtn'>Add Admin</button></Link>
            </div>
          </div>
          <hr />
          <div className="row main-labels mx-3">
            <div className="col-md-3 text-start ps-5 name"><p>Name</p></div>
            <div className="col-md-3 text-start ps-5"><p>Email</p></div>
            <div className="col-md-3 text-end pe-5"><p>Role</p></div>
            <div className="col-md-3 text-end pe-4 action"><p>Action</p></div>
          </div>
          {/* users data importing from usercard.js */}
          {[...Array(showCount)].map((_, index) => (
            <Link className='Link' to="/EditAdmin" key={index}>
              {index + (showCount * (currentPage - 1)) < 15 && <AdminCard {...propsdata} />}
            </Link>
          ))}
          {/* main footer */}
          <div className="row px-5 d-flex mt-3">
            <div className="col-md-6 ps-3">
              <p>
                Showing {Math.min(showCount * currentPage, 15)} of 15 entries
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <button className='pagination-button' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(1)}
                className={`pagination-button ${currentPage === 1 ? 'active-page' : ''}`}
                disabled={currentPage === 1}
              >
                1
              </button>
              {showCount * currentPage < 15 && (
                <button
                  onClick={() => setCurrentPage(2)}
                  className={`pagination-button ${currentPage === 2 ? 'active-page' : ''}`}
                  disabled={currentPage === 2}
                >
                  2
                </button>
              )}
              <button className='pagination-button' onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(15 / showCount)}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
