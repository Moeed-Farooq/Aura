import React from "react";
import profile from "../../images/profile.png";

const Progress = () => {
  return (
    <>
      <div
        className="row my-1 OrderProgress  py-2"
        style={{ backgroundColor: "#F6F6F6", borderRadius: "20px" }}
      >
        <div className="col-md-3 d-flex  align-items-center ">
          <img src={profile} width={25} height={25} alt="" />

          <p className="ms-2 m-0" style={{ fontSize: "15px" }}>
            Project Name
          </p>
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <p className="m-0 " style={{ fontSize: "15px" }}>
            Oct 13,2023-Oct 20,2023
          </p>
        </div>
        <div className="col-md-2 d-flex align-items-center">
          <p className="m-0" style={{ fontSize: "15px" }}>
            Youtube
          </p>
        </div>
        <div className="col-md-2 d-flex align-items-center">
          <p className="m-0" style={{ fontSize: "15px" }}>
            1234567
          </p>
        </div>
        <div className="col-md-1 d-flex align-items-center">
          <p className="m-0" style={{ fontSize: "15px" }}>
            Active
          </p>
        </div>
        <div className="col-md-1 d-flex align-items-center">
          <p className="m-0 text-warning" style={{ fontSize: "12px" }}>
            In Process
          </p>
        </div>
      </div>
    </>
  );
};

export default Progress;
