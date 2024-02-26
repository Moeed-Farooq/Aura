import React, { useState } from "react";
import profile from "../images/profile.png";
import "./chat.css";
import back from "../images/back.png";

const Chat = ({ searchTerm }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatData, setChatData] = useState([
    {
      projectName: "sohail",
      orderId: "12345678",
      date: "12th-13th",
      month: "October",
      year: "2023",
    },
    {
      projectName: "khalil",
      orderId: "377627828",
      date: "12th-19th",
      month: "Feb",
      year: "2023",
    },
    {
      projectName: "Amir",
      orderId: "2376273627",
      date: "12th-19th",
      month: "Feb",
      year: "2023",
    },
    {
      projectName: "Hammad",
      orderId: "2312718",
      date: "12th-19th",
      month: "Feb",
      year: "2023",
    },
    {
      projectName: "Adnan",
      orderId: "2392827",
      date: "12th-19th",
      month: "Feb",
      year: "2023",
    },
    {
      projectName: "khalil",
      orderId: "377627828",
      date: "12th-19th",
      month: "Feb",
      year: "2023",
    },
    // Add more chat entries as needed
  ]);

  const filteredChatData = chatData.filter((chat) =>
    chat.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div
      className="Chat-Container  px-3"
      style={{ height: "83%", width: "100%", overflowY: "auto" }}
    >
      {selectedChat ? (
        <div className="row message">
          <div className="sticky-top bg-white py-1  d-flex justify-content-between align-items-center">
            <a href="">
              <img src={back} width={25} height={25} alt="" />
            </a>
            <p className="m-0 p-0" style={{ fontSize: "10px" }}>
              Order ID: {selectedChat.orderId}
            </p>
          </div>

          <p style={{ fontSize: "10px" }}>
            <div className="row chatContainer">
              <div className="user1">
                <div className="user1Data d-flex">
                  <img src={profile} width={25} height={25} alt="" />
                </div>

                <div className="w-100 ms-3 mt-1">
                  <p className="m-0 mb-1">Hazel</p>
                  <div className="user1Msg">
                    <p>
                      hello form hazel Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Suscipit, illo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="user2 ">
                <div className="mt-1 me-3 w-100 ">
                  <p className="m-0 mb-1">Influincer</p>
                  <div className="user2Msg ms-auto text-start">
                    <p>
                      hy from Lorem ipsum dolor laboriosam. influincer Lorem
                      ipsum dolor sit, amet consectetur adipisicing elit. Modi
                      delectus quae dolore in quam quaerat repellat dignissimos
                      facere error quasi.
                    </p>
                  </div>
                </div>
                <div>
                  <img src={profile} width={25} height={25} alt="" />
                </div>
              </div>
              <div className="user1">
                <div className="user1Data d-flex">
                  <img src={profile} width={25} height={25} alt="" />
                </div>

                <div className="w-100 ms-3 mt-1">
                  <p className="m-0 mb-1">Hazel</p>
                  <div className="user1Msg">
                    <p>
                      hello form hazel Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Suscipit, illo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </p>
        </div>
      ) : (
        filteredChatData.map((chat, index) => (
          <div
            key={index}
            className="row chat py-1 my-1"
            style={{
              backgroundColor: "#F6F6F6",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={() => handleChatClick(chat)}
          >
            <div className="col-md-8 d-flex align-items-center">
              <div>
                <img src={profile} width={25} height={25} alt="" />
              </div>
              <div className="ms-2">
                <p className="m-0 p-0">{chat.projectName}</p>
                <p className="m-0" style={{ fontSize: "10px" }}>
                  Order ID: {chat.orderId}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p className="m-0 p-0">{chat.date}</p>
                <p className="m-0" style={{ fontSize: "10px" }}>
                  {chat.month} {chat.year}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Chat;
