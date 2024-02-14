import React, { useEffect,useState } from 'react';
import HomeCard from '../reusebale components/HomeCard';
import adminicon from '../images/adminicon.png';
import dropdown from '../images/dropdown.png';
import filter from '../images/filter.png';
import date from '../images/calender.png';
import { Link } from 'react-router-dom';
import AdminCard from './AdminCard';

const Business = () => {
  const [showCount, setShowCount] = useState(3); // State to store the selected option

  const handleShowChange = (event) => {
    setShowCount(parseInt(event.target.value, 10));
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
        <div className="container-fluid m-0 p-0 ">
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
              Entries</label>
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
            <Link className='Link' to="/EditAdmin" key={index}><AdminCard {...propsdata} /></Link>
          ))}
          {/* main footer */}
          <div className="row px-5 d-flex mt-3">
            <div className="col-md-6 ps-3"><p>Showing {showCount} of 15 entries</p></div>
            <div className="col-md-6 d-flex justify-content-end">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
