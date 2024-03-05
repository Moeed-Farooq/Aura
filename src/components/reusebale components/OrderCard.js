import React from "react";
import "./ordercard.css";

const OrderCard = ({
  projectImg,
  projectDescription,
  ProjectName,
  status,
  result,
}) => {
  return (
    <>
      <div className="orderCard ">
        <div className="orderCardImg">
          <img src={projectImg} alt="" />
        </div>
        <p className="projectName">{ProjectName}</p>
        <p className="projectDescription">{projectDescription}</p>
        <hr className="my-1" />
        <div className="row orderdata">
          <div className="col-md-6 ">
            <p>Order ID</p>
          </div>
          <div className="col-md-6  text-end">
            <p>12345678</p>
          </div>
        </div>
        <div className="row orderdata">
          <div className="col-md-6 ">
            <p>platform</p>
          </div>
          <div className="col-md-6  text-end">
            <p>youtube</p>
          </div>
        </div>
        <div className="row orderdata">
          <div className="col-md-6  ">
            <p>Type</p>
          </div>
          <div className="col-md-6   text-end">
            <p>Short Videos</p>
          </div>
        </div>
        <div className="row orderdata  ">
          <div className="col-md-6 ">
            <p>{status}</p>
          </div>
          <div className="col-md-6  text-end">
            <p>{result}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
