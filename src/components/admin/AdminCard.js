import React from "react";
import listicon from "../images/listicon.png";

const AdminCard = ({ profile, AdminName, email, role }) => {
  return (
    <>
      <div className="row main-items mx-3 mt-2">
        <div className="col-md-3 text-start ps-3 name">
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
            {AdminName}
          </p>
        </div>
        <div className="col-md-3 text-start">
          <p>{email}</p>
        </div>
        <div className="col-md-3 text-end">
          <p>{role}</p>
        </div>
        <div
          className="col-md-3 d-flex justify-content-end action"
          style={{ paddingRight: "35px" }}
        >
          <div class="dropdown p-0">
            <button
              class=" bg-white"
              style={{ border: "none" }}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={listicon} />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCard;
