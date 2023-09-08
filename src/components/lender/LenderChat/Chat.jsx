import React, { useState, useEffect } from "react";
// import '../Chat/chat.css'
import { RxHamburgerMenu } from "react-icons/rx";

import { IoMdClose } from "react-icons/io";
import search_icon from "../../assets/imgs/icosn/chat-search.svg";
import user1 from "../../assets/imgs/icosn/user1.png";
import user2 from "../../assets/imgs/icosn/user2.png";
import send from "../../assets/imgs/icosn/send-msg.svg";
import attachment from "../../assets/imgs/icosn/attachment.svg";
import LenderDashboardMain from "../../lender/LenderDashboardMain";
import chatstart from "../../assets/imgs/icosn/chat.gif";
// import BackBtn from "../../admin/BackBtn";
import socket from "../../Socket";
// import { useReceiverId } from "../../ChatContext";

const Chat = () => {
  const [isActive, setIsActive] = useState(false); // State to track the class

  const toggleClass = () => {
    setIsActive(!isActive); // Toggle the state value
  };
  // CHAT SECTION START

  function formatDate(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleString("en-US", options);
  }
  function formatTime(dateString) {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleTimeString("en-US", options);
  }

  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [LenderId, setLenderId] = useState("");
  const [user, setUser] = useState();
  const [admindata, setAdminData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // console.log(LenderId, 'lender')

  // ...

  const sendMessage = (contentType, content) => {
    if (
      (contentType === 1 && content.trim() !== "") ||
      (contentType === 2 && content)
    ) {
      const newMessage = {
        content: content,
        contentType: contentType,
        senderId: LenderId,
        receiverId: admindata?._id,
      };
      socket.emit("createMessage", newMessage);
      setCurrentMessage("");
      setSelectedImage(null);
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };
  const handleSendButtonClick = () => {
    if (selectedImage) {
      // Sending an image message
      const imageContent = URL.createObjectURL(selectedImage);
      sendMessage(2, imageContent);
    } else if (currentMessage.trim() !== "") {
      // Sending a text message
      sendMessage(1, currentMessage);
    }
  };

  // ...

  const admin = (admin) => {
    setMessages([]);
    // setAdminData(admin);
    console.log(admin)
    const room = {
      roomId: admin?._id,
    };
    
    if(admin.participants[0]?._id== LenderId){
      setAdminData(admin.participants[1]);
    }
     else if(admin.participants[1]?._id== LenderId){
      setAdminData(admin.participants[0]);
    }
    
    socket.emit("getMessages", room);
  };

 

  useEffect(() => {
    let lenderId = localStorage.getItem("lenderuserid");
    if (lenderId) {
      setLenderId(lenderId);
    }
    const LenderUserId = {
      userId: localStorage.getItem("lenderuserid"),
    };
  
    socket.emit("getChatRooms", LenderUserId);
    socket.on("listOfRooms", (userList) => {
      setUser(userList.data);
      // console.log(userList);
    });

    socket.on("getMessagesOfRoom", (ALLMessage) => {
      setMessages(ALLMessage?.data);
      // console.log(ALLMessage)
      let data = [];
      data.push(ALLMessage?.data);
      // console.log(data)
    });
  }, []);

  return (
    <LenderDashboardMain>
      <section className="side_content_main_box">
        <div className="page_heading_div">
          <div className="back_btn_filter_main">
            <div className="back_btn_filter_inner">
              {/* <BackBtn /> */}
              <h2>Messages</h2>
            </div>
          </div>
        </div>

        <section className="dashboard_boxes_main_section">
          <div className="">
            <div className="">
              <div className="">
                <section className="chat_main_section_main">
                  <div className="chat_main_section">
                    <div
                      className={`chat_side_list_div custom_scroll ${
                        isActive ? "small_box" : ""
                      }`}
                    >
                      <div className="">
                        <div className="chat_box_search">
                          <img
                            src={search_icon}
                            alt="img"
                            className="img-fluid"
                          />
                          <input type="search" placeholder="Search ..." />
                        </div>
                        {user &&
                          user.map((item) => {
                            return (
                              item &&
                              item.participants &&
                              item.participants.map((data) => {
                                if (data?.userType === 1) {
                                  return (
                                    <div
                                      className="user_single_chat_list"
                                      onClick={() => {
                                        admin(item);
                                      }}
                                      key={data._id}
                                    >
                                      <div className="user_single_chat_list_inner">
                                        <img
                                          src={user1}
                                          alt="img"
                                          className="img-fluid"
                                        />
                                        <div>
                                          <h3>{data.name}</h3>

                                          <h4>Last seen</h4>
                                        </div>
                                      </div>
                                      <h4 className="msg_number">
                                        {formatTime(data.createdAt)}
                                      </h4>
                                    </div>
                                  );
                                }
                                return null;
                              })
                            );
                          })}
                      </div>
                    </div>
                    <div
                      className={`chat_msg_side ${isActive ? "big_box" : ""}`}
                    >
                      {admindata != null ? (
                        <div className="chat_msg_side_main ">
                          <div className="chat_container_top_bar">
                            <div className="d-flex">
                              {!isActive ? (
                                <button onClick={toggleClass}>
                                  <RxHamburgerMenu className="icon" />
                                </button>
                              ) : (
                                <button onClick={toggleClass}>
                                  <IoMdClose className="icon" />
                                </button>
                              )}

                              <div className="chat_side_container_main_user">
                                <div className="user_single_chat_list_inner">
                                  <img
                                    src={user1}
                                    alt="img"
                                    className="img-fluid"
                                  />
                                  <div>
                                    <h3>
                                      {admindata?.name}
                                      {`(${
                                        admindata?.userType == 1
                                          ? "admin"
                                          : admindata?.userType == 2
                                          ? "lender"
                                          : "borrower"
                                      })`}
                                    </h3>
                                    <h4 className="active">Active</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat_msg_main_div custom_scroll">
                            {messages.map((item) => {
                              const isUserMessage = item.senderId === LenderId;
                              return (
                                <div
                                  className={`chat_msg ${
                                    isUserMessage
                                      ? "left_side_msg"
                                      : "right_side_msg"
                                  }`}
                                  key={item.id}
                                >
                                  <p>{item.content}</p>
                                  <span className="msg_time_date">
                                    {formatDate(item.createdAt)}
                                  </span>
                                </div>
                              );
                            })}

                            {/* <div className="chat_msg left_side_msg">
                            <img
                              src="https://cdn.pixabay.com/photo/2023/07/30/00/12/cat-8157889_640.png"
                              className="img-fluid"
                            />
                            <span className="msg_time_date">
                              Fri, Aug 4, 2023 5:12 PM
                            </span>
                          </div> */}
                          </div>

                          <div className="msg_container_footer">
                            <div className="msg_container_footer_inner">
                            <div className="msg_type_input_box">
                                <input
                                  onChange={(e) =>
                                    setCurrentMessage(e.target.value)
                                  }
                                  value={currentMessage}
                                  type="text"
                                  placeholder="Type message here..."
                                />
                                <div className="attachment_file_btn">
                                  <label htmlFor="fileInput">
                                    <img
                                      src={attachment}
                                      alt="send"
                                      className="img-fluid"
                                    />
                                  </label>
                                  <input
                                    type="file"
                                    id="fileInput"
                                    accept="image/*,.pdf"
                                    onChange={handleImageChange}
                                    style={{ display: "none" }}
                                  />
                                </div>
                              </div>
                              <div className="send_btn">
                                <button onClick={handleSendButtonClick}>
                                  <img
                                    src={send}
                                    alt="send"
                                    className="img-fluid"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="char_starting_screen">
                          <img
                            src={chatstart}
                            className="img-fluid"
                            alt="chat"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </section>
    </LenderDashboardMain>
  );
};

export default Chat;
