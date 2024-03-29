import React from "react";
import OrderCard from "../reusebale components/OrderCard";
import orderImg from "../images/orderImg.png";

const CancelOrder = () => {
  // Sample data for two completed orders
  const completedOrders = [
    {
      projectName: "Project Name",
      projectImg: orderImg,
      status: "Undelivered",
      result: "cancelled",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
    {
      projectName: "Project Name",
      projectImg: orderImg,
      status: "Undelivered",
      result: "cancelled",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
    {
      projectName: "Project Name",
      projectImg: orderImg,
      status: "Undelivered",
      result: "cancelled",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
    {
      projectName: "Project Name",
      projectImg: orderImg,
      status: "Undelivered",
      result: "cancelled",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
    {
      projectName: "Project Name",
      projectImg: orderImg,
      status: "Undelivered",
      result: "cancelled",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
    {
      projectName: "Project Name",
      projectImg: orderImg,
      status: "Undelivered",
      result: "cancelled",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
    {
      projectName: "Project Name",
      projectImg: orderImg,
      status: "Undelivered",
      result: "cancelled",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
  ];
  return (
    <>
      <div className="main-container">
        <div className="container-fluid m-0 p-0">
          <div className="row pt-2 px-4 d-flex">
            <p style={{ fontSize: "20px", fontWeight: "500", margin: "0px" }}>
              Cancel Orders
            </p>

            {/* Map over completedOrders array to render OrderCard components */}
            {completedOrders.map((order, index) => (
              <div className="col-md-3" key={index}>
                <OrderCard
                  ProjectName={order.projectName}
                  projectImg={order.projectImg}
                  projectDescription={order.projectDescription}
                  status={order.status}
                  result={order.result}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelOrder;
