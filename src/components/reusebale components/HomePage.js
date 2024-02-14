import React, { useEffect,useState } from 'react';
// import HomeCard from '../../reusebale components/HomeCard';
import profile from '../images/profile.png';
import dropdown from '../images/dropdown.png';
import filter from '../images/filter.png';
import calender from '../images/calender.png';
import { Link } from 'react-router-dom';
import HomeCard from '../reusebale components/HomeCard';

const Homepage = ({Category3,Category4,name,profile,type,brandname,date,link}) => {
  const [showCount, setShowCount] = useState(3); // State to store the selected option

  const handleShowChange = (event) => {
    setShowCount(parseInt(event.target.value, 10));
  };

  const propsdata = {
    name: name,
    profile: profile,
    brandname: brandname,
    date: date,
    type: type
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
            <div className="col-md-6  ps-4" style={{ color: "#8B8B8B" }}>
              <label htmlFor="show">Show 
              <span>
              <select
                name="show"
                id="show"
                className='mx-2 rounded-1'
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
            
            <div className="col-md-6 pe-4 text-end">
              <button className='FilterBtn'><span className='me-2'><img src={filter} alt="" /></span>Filter</button>
              <button className='DateBtn'><span className='me-2'><img src={calender} alt="" /></span>Oct 10,2023 <span><img src={dropdown} alt="" /></span></button>
            </div>
          </div>
          <hr />
          <div className="row main-labels mx-3">
            <div className="col-md-3 text-start ps-5 name"><p>Name</p></div>
            <div className="col-md-2 text-start"><p>Date</p></div>
            <div className="col-md-2"><p>{Category3}</p></div>
            <div className="col-md-3 text-center"><p>{Category4}</p></div>
            <div className="col-md-2 text-end pe-4 action"><p>Action</p></div>
          </div>
          {/* users data importing from usercard.js */}
          {[...Array(showCount)].map((_, index) => (
            <Link className='Link' to={link} key={index}><HomeCard {...propsdata} /></Link>
          ))}
          {/* main footer */}
          <div className="row px-5 d-flex mt-3">
            <div className="col-md-6 ps-3"><p>Showing {showCount} of 15 entries</p></div>
            <div className="col-md-6 d-flex justify-content-end">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item me-1" ><a style={{borderRadius:"10px"}} className="page-link" href="#">Previous</a></li>
                  <li className="page-item me-1" ><a style={{borderRadius:"10px"}} className="page-link" href="#">1</a></li>
                  <li className="page-item me-1" ><a style={{borderRadius:"10px"}} className="page-link" href="#">2</a></li>
                  <li className="page-item " ><a style={{borderRadius:"10px"}} className="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;