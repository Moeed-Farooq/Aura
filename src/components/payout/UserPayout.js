import React, { useState } from "react";
import profile from "../images/girlimg.png";
import PayoutHistoryCard from "./PayoutHistoryCard";
import PaymentMethod from "./PaymentMethod";
import Chart from "../business/AdminData/Chart";
import InfluencerChart from "../influincer/InfluincerChart";
import PayoutChart from "./PayoutChart";

const UserPayout = () => {
  const [selectedComponent, setSelectedComponent] = useState("payoutChart");

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };
  return (
    <>
      <div className="main-container">
        <div
          className="container-fluid d-flex m-0 p-0 "
          style={{ height: "100%" }}
        >
          <div className="UserPayout-sectoion1">
            <div
              className="col-md-12 bg-white p-3 "
              style={{
                borderRadius: "20px",
                height: "50%",
                overflow: "hidden",
              }}
            >
              <div className="row">
                <div className="col-md-2 ms-3">
                  <div className="userreportimg ">
                    <img src={profile} alt="" />
                  </div>
                </div>
                <div className="col-md-9 ms-3">
                  <div className="userreportData ">
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
                  Bio: <br />{" "}
                  <span>
                    Lorem Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Vero, dolores! ipsum dolor sit amet consectetur
                    adipisicing elit. Iste a reiciendis vitae est quis, dolores
                    accusamus beatae odio minima deleniti?
                  </span>
                </p>
              </div>
            </div>
            {selectedComponent === "PayoutpaymentMethod" && (
              <div className="PayoutpaymentMethod">
                <PaymentMethod />
              </div>
            )}
            {selectedComponent === "payoutChart" && (
              <div className="payoutChart">
                <PayoutChart />
              </div>
            )}
          </div>
          <div className="UserPayout-sectoion2 ">
            <div className="payoutHistory bg-white">
              <p>Hazel Finch</p>
              <p>Payout History</p>
              <div className="PayoutScroll">
                <PayoutHistoryCard onComponentChange={handleComponentChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPayout;
