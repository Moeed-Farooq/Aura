import React from "react";
import OrderCard from "../reusebale components/OrderCard";
import orderImg from "../images/orderImg.png";

const ActiveOrders = () => {
  // Sample data for two completed orders
  const completedOrders = [
    {
      projectName: "Order 1",
      projectImg: orderImg,
      status: "Delivery",
      result: "in process",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
    {
      projectName: "Order 1",
      projectImg: orderImg,
      status: "Delivery",
      result: "in process",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
    {
      projectName: "Order 1",
      projectImg: orderImg,
      status: "Delivery",
      result: "in process",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
    {
      projectName: "Order 1",
      projectImg: orderImg,
      status: "Delivery",
      result: "in process",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
    {
      projectName: "Order 1",
      projectImg: orderImg,
      status: "Delivery",
      result: "in process",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
    {
      projectName: "Order 1",
      projectImg: orderImg,
      status: "Delivery",
      result: "in process",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
    {
      projectName: "Order 1",
      projectImg: orderImg,
      status: "Delivery",
      result: "in process",
      projectDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis veritatis error quis vel ipsa dolor doloremque odio animi ea!",
    },
  ];
  return (
    <>
      <div className="main-container">
        <div className="container-fluid m-0 p-0">
          <div className="row pt-4 px-4 d-flex">
            <p style={{ fontSize: "20px", fontWeight: "500", margin: "0px" }}>
              Active Orders
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

export default ActiveOrders;
