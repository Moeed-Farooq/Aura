import React, { useState } from "react";
import profile from "../images/girlimg.png";
import Chat from "../reusebale components/Chat";
import searchicon from "../images/search.png";
import off from "../images/off.png";

const UserStatusReport = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchTerm(""); // Clear search term when opening the search input
    }
  };
  return (
    <>
      <div className="main-container">
        <div className="container-fluid m-0 p-0 d-flex flex-column ">
          <div
            className="row px-4  mt-3 d-flex justify-content-between"
            style={{ height: "45vh" }}
          >
            <div
              className="col-md-7 bg-white p-3"
              style={{ borderRadius: "20px", height: "100%" }}
            >
              <div className="row">
                <div className="col-md-3">
                  <div className="userreportimg">
                    <img src={profile} alt="" />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="userreportData">
                    <p className="mb-3 mt-1">
                      Name: <span>Hazel Finch</span>
                    </p>
                    <p className="mb-3">
                      Gender: <span>Female</span>
                    </p>
                    <p className="mb-3">
                      Category: <span>Food Blogger</span>
                    </p>
                    <p className="mb-3">
                      Email: <span>HazelFinch@gmail.com</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="reportstatus">
                <p>
                  Report Status: <br />{" "}
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste a reiciendis vitae est quis, dolores accusamus beatae
                    odio minima deleniti?
                  </span>
                </p>
              </div>
            </div>

            <div className="col-md-5 " style={{ height: "100%" }}>
              <div
                className=" bg-white px-3 align-items-center pt-2 pb-2"
                style={{
                  borderRadius: "30px",
                  position: "relative",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <div className="d-flex  justify-content-between align-items-center py-2">
                  <h4 className="ps-3 m-0">Orders Chats</h4>
                  <div style={{ position: "relative" }}>
                    {isSearchOpen ? (
                      <div className="position-relative">
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="searchInput"
                          placeholder="Search..."
                        />
                        <button
                          className="position-absolute  me-1 rounded-pill bg-white pt-0  end-0 translate-middle-y"
                          style={{
                            border: "none",
                            height: "15px",
                            marginTop: "9px",
                          }}
                          onClick={handleSearchClick}
                        >
                          <img
                            src={off}
                            style={{ width: "18px", height: "20px" }}
                            className=""
                            alt=""
                          />
                        </button>
                      </div>
                    ) : (
                      <img
                        src={searchicon}
                        className="searchImg bg-primary rounded-circle"
                        width={25}
                        height={25}
                        alt=""
                        onClick={handleSearchClick}
                      />
                    )}
                  </div>
                </div>
                <Chat searchTerm={searchTerm} />{" "}
                {/* Pass the search term to the Chat component */}
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="userReportBtn">
            <button className="">Reject</button>
            <button className="">Verify</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserStatusReport;
