import React from "react";
import listicon from "../images/listicon.png";

const HomeCard = ({ profile, id, brandname, raised, type }) => {
  return (
    <>
      <div className="row main-items mx-3 mt-2">
        <div className="col-md-3 text-start ps-4 name">
          <p className="p-0">
            <span>
              <img
                className="me-3"
                src={profile}
                width={30}
                height={30}
                alt=""
              />
            </span>{" "}
            {id}
          </p>
        </div>
        <div className="col-md-2 text-start">
          <p>{raised}</p>
        </div>
        <div className="col-md-2">
          <p>{brandname}</p>
        </div>
        <div className="col-md-3 text-center ">
          <p>{type}</p>
        </div>
        <div
          className="col-md-2  justify-content-end action d-flex align-items-center "
          style={{ paddingRight: "35px" }}
        >
          <img src={listicon} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeCard;
