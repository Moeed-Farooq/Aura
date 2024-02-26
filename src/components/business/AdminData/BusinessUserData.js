import React, { useState } from "react";
import profile from "../../images/profile.png";
import cancel from "../../images/cancelOrder.png";
import completed from "../../images/CompleteOrder.png";
import Chat from "../../reusebale components/Chat";
import Progress from "./Progress";
import Chart from "./Chart";
import searchicon from "../../images/search.png";
import off from "../../images/off.png";
import { Link } from "react-router-dom";

const BusinessUserData = () => {
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
        <div className="container-fluid m-0 p-0" style={{ height: "100%" }}>
          <div className="row pt-2 px-3" style={{ height: "20%" }}>
            <div className="col-md-4  ">
              <div
                className="bg-white d-flex justify-content-around align-items-center  p-2"
                style={{ borderRadius: "30px", height: "100%" }}
              >
                <div className="img p-0  me-2 mt-2">
                  <img src={profile} width={75} height={75} alt="" />
                </div>
                <div className="bio">
                  <h4 className="m-0 p-0 mb-1 ">Hazel Finch</h4>
                  <p
                    className="m-0 p-0 "
                    style={{ fontSize: "13px", fontWeight: "500" }}
                  >
                    Brand Name
                  </p>
                  <p
                    className="m-0 p-0 "
                    style={{ fontSize: "12px", fontWeight: "500" }}
                  >
                    Brand
                  </p>
                  <p style={{ fontSize: "12px" }} className="m-0 p-0">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div
                  className=""
                  style={{ fontSize: "12px", marginBottom: "60px" }}
                >
                  October12,2023
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Link to="/cancelOrder">
                <div
                  className="bg-white d-flex justify-content-around align-items-center py-2"
                  style={{ borderRadius: "30px", height: "100%" }}
                >
                  <div>
                    <h4 className="m-0 text-dark">Cancelled Orders</h4>
                    <h4 className="m-1 text-dark">27</h4>
                    <p className="m-0" style={{ color: "#8B8B8B" }}>
                      Order this month
                    </p>
                  </div>
                  <div>
                    <div className="orders">
                      <img src={cancel} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 ">
              <Link to="/completeOrder">
                <div
                  className="bg-white d-flex justify-content-around align-items-center py-2"
                  style={{ borderRadius: "30px", height: "100%" }}
                >
                  <div>
                    <h4 className="m-0 text-dark">Completed Orders</h4>
                    <h4 className="m-1 text-dark">27</h4>
                    <p className="m-0" style={{ color: "#8B8B8B" }}>
                      Order this month
                    </p>
                  </div>
                  <div>
                    <div className="orders">
                      <img src={completed} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* charts and chat code starts here */}
          <div className="row pt-2  ps-3 pe-4" style={{ height: "50%" }}>
            <div className="col-md-8 " style={{ height: "100%" }}>
              <div
                className="bg-white  py-2 pe-2 "
                style={{ borderRadius: "30px", height: "100%" }}
              >
                <Chart />
              </div>
            </div>

            <div
              className="col-md-4 bg-white  px-3 align-items-center py-2"
              style={{
                borderRadius: "30px",
                position: "relative",
                height: "100%",
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
                          height: "0px",
                          marginTop: "2px",
                        }}
                        onClick={handleSearchClick}
                      >
                        <img
                          src={off}
                          style={{ width: "20px", height: "20px" }}
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
          {/* progress code start here */}
          <div className="row py-2 px-4" style={{ height: "30%" }}>
            <div
              className="col-md-12 pt-2 pb-5 bg-white px-3 "
              style={{
                borderRadius: "30px",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <h4>Orders In Progress</h4>
              <div
                className="progress-container px-3 mt-2"
                style={{ height: "100%" }}
              >
                <Progress />
                <Progress />
                <Progress />
                <Progress />
                <Progress />
                <Progress />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessUserData;
