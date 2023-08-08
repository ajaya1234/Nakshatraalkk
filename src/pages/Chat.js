// import React, { useEffect, useState } from "react";
// import firebase from "./Firebase";
// import "./chat.css";
// import axios from "axios";
// import { Await, useNavigate } from "react-router-dom";
// import ReverseTimer from "./ReverseTimer";

// const Chat = () => {
//   const data = localStorage.getItem("data");
//   const jvalue = JSON.parse(data);
//   const [data1, setData1] = useState(jvalue);
//   const [walletAmnt, setWalletAmnt] = useState();
//   let [total_time, settotal_time] = useState("");

//   let [finltime, setfinltime] = useState();
//   const rateofchaing = localStorage.getItem("chatrate");
//   //console.log("reseeseess",finltime)

//   // useEffect(() => {
//   //   let totalminute = walletAmnt / rateofchaing;
//   //   let finl_time = Math.floor(totalminute);

//   //   setfinltime(finl_time);
//   // }, [walletAmnt ,rateofchaing ]);

//   useEffect(() => {
//     let totalminute = walletAmnt / rateofchaing;
//     let finl_time = Math.floor(totalminute);
//     setfinltime(finl_time);
//   }, [walletAmnt, rateofchaing]);

//   useEffect(() => {
//     postRech();
//   }, [, walletAmnt, rateofchaing]);

//   const postRech = () => {
//     const item = {
//       user_id: _id,
//     };
//     axios
//       .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
//       .then((res) => setWalletAmnt(res.data.data.ammount));
//   };

//   let totalminute = localStorage.getItem("totalminute");

//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [count]);

//   // const manualDisconnect = () => {
//   //   disconnectChat();
//   // };

//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]);
//   const [currentMessage, setCurrentMessage] = useState("");

//   const [userData, setUserData] = useState([]);

//   let [_id, set_id] = useState(() => {
//     let result = localStorage.getItem("_id");
//     if (result != null) {
//       return JSON.parse(result);
//     } else {
//       return [];
//     }
//   });

//   const chatt = localStorage.getItem("chatdata");
//   const parse = JSON.parse(chatt);
//   const [cData, setCData] = useState(parse);

//   useEffect(() => {
//     const chatRef = firebase.database().ref("add");
//     chatRef.on("value", (snapshot) => {
//       const chatData = snapshot.val();
//       if (chatData) {
//         const chatMessages = Object.values(chatData);
//       }
//     });
//   }, []);

//   const sendMessage = () => {
//     const timeStamp = Date.now().toString();
//     if (currentMessage.trim() !== "") {
//       const username = timeStamp;
//       const chatRef = firebase.database().ref("add");
//       const newMessageRef = chatRef.child(username);
//       newMessageRef.set({
//         title: currentMessage,
//         sender_id: _id,
//         receiver_id: cData._id,
//         time: timeStamp,
//       });
//       setCurrentMessage("");
//     }
//   };

//   useEffect(() => {
//     postId();
//   }, []);
//   const postId = () => {
//     const item = {
//       _id: _id,
//     };
//     axios
//       .post(`http://103.104.74.215:3012/api/user/get_user_profile/`, item)
//       .then((res) => setUserData(res.data.data));
//   };

//   let sender_id = _id;
//   useEffect(() => {
//     const chatRef = firebase.database().ref("add");
//     chatRef.on("value", (snapshot) => {
//       const chatData = snapshot.val();
//       if (chatData) {
//         const chatMessages = Object.values(chatData);

//         let receiver_id = cData._id;
//         let sender_id = _id;

//         let newdata = chatMessages.filter((items) => {
//           if (items) {
//             return items.type === "receiver" || items.sender_id === sender_id;
//           }
//         });

//         setMessages(newdata);
//       }
//     });
//   }, []);

//   const [amount, setAmount] = useState(walletAmnt?.ammount);
//   const [remainingTime, setRemainingTime] = useState(
//     Math.ceil(data1.ammount / cData?.chat_rate)
//   );

//   const disconnectChat = () => {
//     settotal_time(minutes);
//     const item = {
//       user_id: _id,
//       astrologer_id: cData._id,
//       //final_time: "2",
//       final_time: minutes.toString(),
//     };
// console.log("sadasasddasa",item)
//     axios
//       .post("http://103.104.74.215:3012/api/user/disconnect_chat", item)
//       .then(() => navigate("/"));

//     };

//   const [elapsedTime, setElapsedTime] = useState(0);

//   useEffect(() => {
//     let timerInterval;

//     const startTime = new Date().getTime();

//     const updateTimer = () => {
//       const currentTime = new Date().getTime();
//       const elapsedTime = currentTime - startTime;
//       setElapsedTime(elapsedTime);
//     };

//     timerInterval = setInterval(updateTimer, 1000);

//     return () => clearInterval(timerInterval);
//   }, []);

//   // useEffect(() => {
//   //   if (finltime === t) {
//   //     disconnectChat();
//   //   }
//   // }, [finltime]);

//   const formatTime = (time) => {
//     const hours = Math.floor(time / 3600000);
//     const minutes = Math.floor((time % 3600000) / 60000);
//     const seconds = Math.floor((time % 60000) / 1000);

//     return `${hours < 10 ? "0" + hours : hours}:${
//       minutes < 10 ? "0" + minutes : minutes
//     }:${seconds < 10 ? "0" + seconds : seconds}`;
//   };

//   let t = formatTime(elapsedTime);

//   const timeStringToMinutes = (timeString) => {
//     const [hours, minutes] = timeString.split(":").map(Number);
//     const totalMinutes = hours * 60 + minutes;
//     return totalMinutes;
//   };

//   const minutes = timeStringToMinutes(t);

//   useEffect(() => {
//     settotal_time(minutes);
//   }, [total_time, minutes]);

//   return (
//     <>
//       <section style={{ backgroundColor: "#eee" }}>
//         <div className="container py-5">
//           <div className="row d-flex justify-content-center">
// <div className="col-lg-6">
//   <div className="card">
//     <div
//       className="card-header d-flex justify-content-between align-items-center p-3"
//       style={{ borderTop: "4px solid #ffa900" }}
//     >
//       <h5 className="mb-0">Chat messages</h5>
//       <h4>Time Now</h4>
//       <p id="timer">{formatTime(elapsedTime)}</p>

//       <div className="d-flex flex-row align-items-center">
//         <i
//           onClick={disconnectChat}
//           style={{
//             fontSize: 20,
//             fontWeight: "bolder",
//             cursor: "pointer",
//           }}
//           class="fa fa-times"
//           aria-hidden="true"
//         ></i>
//       </div>
//     </div>
//     <div
//       className="card-body"
//       data-mdb-perfect-scrollbar="true"
//       style={{
//         position: "relative",
//         height: "300px",
//         overflowY: "scroll",
//       }}
//     >
//       {messages.map((items) => {
//         return (
//           <>
//             {items.sender_id == sender_id ? (
//               <div className="direct-chat-msg">
//                 <div
//                   className="direct-chat-text"
//                   style={{ float: "right" }}
//                 >
//                   <p style={{ float: "right" }}>{items.title}</p>
//                 </div>
//               </div>
//             ) : (
//               <div className="direct-chat-msg">
//                 <div
//                   className=" direct-chat-text"
//                   style={{ width: "80%", marginLeft: "0px" }}
//                 >
//                   <p>{items.type == "receiver" && items.title}</p>
//                 </div>
//               </div>
//             )}
//           </>
//         );
//       })}

//       {/* {messages.map((items) => {
//         return (
//           <>
//             <div className="direct-chat-msg">

//               <img className="direct-chat-img"
//                 src={
//                   "http://103.104.74.215:3012/uploads/" +
//                   userData.user_pic
//                 }
//                 alt="message user image"
//               />
//               <div className="direct-chat-text">
//                 {items.type == "receiver" && items.title}
//               </div>
//             </div>

//             <div className="direct-chat-msg right">

//               <img className="direct-chat-img"
//                 src={
//                   "http://103.104.74.215:3012/uploads/" +
//                   userData.user_pic
//                 }
//                 alt="message user image"
//               />

//               <div className="direct-chat-text">
//                 {items.sender_id == sender_id && items.title}
//               </div>

//             </div>
//           </>
//         )
//       })} */}
//     </div>
//     <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
//       <div className="input-group mb-0">
//         <input
//           type="text"
//           value={currentMessage}
//           onChange={(e) => setCurrentMessage(e.target.value)}
//           className="form-control"
//           placeholder="Type message"
//           aria-label="Recipient's username"
//           aria-describedby="button-addon2"
//         />
//         <button
//           onClick={sendMessage}
//           className="btn btn-warning"
//           type="button"
//           id="button-addon2"
//           style={{ paddingTop: ".55rem" }}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Chat;

import React, { useEffect, useState } from "react";
import firebase from "./Firebase";
import "./chat.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const data = localStorage.getItem("data");
  const jvalue = JSON.parse(data);
  const [data1, setData1] = useState(jvalue);
  const [walletAmnt, setWalletAmnt] = useState();
  const [minutessss, setMinutess] = useState(0);
  let [total_time, settotal_time] = useState("");
  let [finltime, setfinltime] = useState();
  // console.log("reseeseess",finltime)
  const rateofchaing = localStorage.getItem("chatrate");

  useEffect(() => {
    let totalminute = walletAmnt / rateofchaing;
    let finl_time = Math.floor(totalminute);
    setfinltime(finl_time);
  }, [walletAmnt, rateofchaing]);



  
  useEffect(() => {
    postRech();
  }, []);

  const postRech = () => {
    const item = {
      user_id: _id,
    };
    axios
      .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
      .then((res) => setWalletAmnt(res.data.data.ammount));
  };

  let totalminute = localStorage.getItem("totalminute");

  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [userData, setUserData] = useState([]);

  let [_id, set_id] = useState(() => {
    let result = localStorage.getItem("_id");
    if (result != null) {
      return JSON.parse(result);
    } else {
      return [];
    }
  });

  const chatt = localStorage.getItem("chatdata");
  const parse = JSON.parse(chatt);
  const [cData, setCData] = useState(parse);

  useEffect(() => {
    const chatRef = firebase.database().ref("add");
    chatRef.on("value", (snapshot) => {
      const chatData = snapshot.val();
      if (chatData) {
        const chatMessages = Object.values(chatData);
      }
    });
  }, []);

  const sendMessage = () => {
    const timeStamp = Date.now().toString();
    if (currentMessage.trim() !== "") {
      const username = timeStamp;
      const chatRef = firebase.database().ref("add");
      const newMessageRef = chatRef.child(username);
      newMessageRef.set({
        title: currentMessage,
        sender_id: _id,
        receiver_id: cData._id,
        time: timeStamp,
      });
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    postId();
  }, []);

  const postId = () => {
    const item = {
      _id: _id,
    };
    axios
      .post("http://103.104.74.215:3012/api/user/get_user_profile/", item)
      .then((res) => setUserData(res.data.data));
  };

  let sender_id = _id;

  useEffect(() => {
    const chatRef = firebase.database().ref("add");
    chatRef.on("value", (snapshot) => {
      const chatData = snapshot.val();
      if (chatData) {
        const chatMessages = Object.values(chatData);

        let receiver_id = cData._id;
        let sender_id = _id;

        let newdata = chatMessages.filter((items) => {
          if (items) {
            return items.type === "receiver" || items.sender_id === sender_id;
          }
        });

        setMessages(newdata);
      }
    });
  }, []);

  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timerInterval;

    const startTime = new Date().getTime();

    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;
      setElapsedTime(elapsedTime);
    };

    timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return `${hours}:${minutes}:${seconds}`;
  };

  let t = formatTime(elapsedTime);

  const timeStringToMinutes = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    return totalMinutes;
  };

  const minutes = timeStringToMinutes(t);

  // useEffect(() => {
  //   setWalletAmnt(walletAmnt);
  //   // Check if the time is complete and call disconnectChat if needed
  //   if (walletAmnt == 0) {
  //     disconnectChat();
  //   }
  // }, [finltime, minutes]);

  const disconnectChat = () => {
    const item = {
      user_id: _id,
      astrologer_id: cData._id,
      final_time: minutes.toString(),
    };
console.log("sadsadasdasdasd",item)
    axios
      .post("http://103.104.74.215:3012/api/user/disconnect_chat", item)
      .then(() => navigate("/"));
  };

  useEffect(() => {
    const updateElapsedTime = () => {
      setMinutess((prevMinutes) => prevMinutes + 1);
    };

    const timer = setInterval(updateElapsedTime, 1000);

    return () => clearInterval(timer);
  }, []);

  let timeeee = finltime * 60;
  useEffect(() => {
    if (minutessss >= timeeee) {
      disconnectChat();
    }
  }, [minutessss]);

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="card">
                <div
                  className="card-header d-flex justify-content-between align-items-center p-3"
                  style={{ borderTop: "4px solid #ffa900" }}
                >
                  <h5 className="mb-0">Chat messages</h5>
                  <h4>Time Now-{formatTime(elapsedTime)}</h4>
                  <p id="timer"></p>

                  <div className="d-flex flex-row align-items-center">
                    <i
                      onClick={disconnectChat}
                      style={{
                        fontSize: 20,
                        fontWeight: "bolder",
                        cursor: "pointer",
                      }}
                      class="fa fa-times"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div
                  className="card-body"
                  data-mdb-perfect-scrollbar="true"
                  style={{
                    position: "relative",
                    height: "300px",
                    overflowY: "scroll",
                  }}
                >
                  {messages.map((items) => {
                    return (
                      <>
                        {items.sender_id == sender_id ? (
                          <div className="direct-chat-msg">
                            <div
                              className="direct-chat-text"
                              style={{ float: "right" }}
                            >
                              <p style={{ float: "right" }}>{items.title}</p>
                            </div>
                          </div>
                        ) : (
                          <div className="direct-chat-msg">
                            <div
                              className=" direct-chat-text"
                              style={{ width: "80%", marginLeft: "0px" }}
                            >
                              <p>{items.type == "receiver" && items.title}</p>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}

                  {/* {messages.map((items) => {
                    return (
                      <>
                        <div className="direct-chat-msg">

                          <img className="direct-chat-img"
                            src={
                              "http://103.104.74.215:3012/uploads/" +
                              userData.user_pic
                            }
                            alt="message user image"
                          />
                          <div className="direct-chat-text">
                            {items.type == "receiver" && items.title}
                          </div>
                        </div>

                        <div className="direct-chat-msg right">

                          <img className="direct-chat-img"
                            src={
                              "http://103.104.74.215:3012/uploads/" +
                              userData.user_pic
                            }
                            alt="message user image"
                          />

                          <div className="direct-chat-text">
                            {items.sender_id == sender_id && items.title}
                          </div>

                        </div>
                      </>
                    )
                  })} */}
                </div>
                <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                  <div className="input-group mb-0">
                    <input
                      type="text"
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      className="form-control"
                      placeholder="Type message"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      onClick={sendMessage}
                      className="btn btn-warning"
                      type="button"
                      id="button-addon2"
                      style={{ paddingTop: ".55rem" }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;
