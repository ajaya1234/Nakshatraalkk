import React, { useEffect, useState } from "react";
import firebase from "./Firebase";
import "./chat.css";
import axios from "axios";
import { Await, useNavigate } from "react-router-dom";
import ReverseTimer from "./ReverseTimer";

const Chat = () => {
  const data = localStorage.getItem("data");
  const jvalue = JSON.parse(data);
  const [data1, setData1] = useState(jvalue);
  const [walletAmnt, setWalletAmnt] = useState([]);
  useEffect(() => {
    postRech();
  }, []);
  const postRech = () => {
    const item = {
      user_id: _id,
    };
    axios
      .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
      .then((res) => setWalletAmnt(res.data.data))
      .then((res) => {
        console.log("chuuu", res.data.data);
        setWalletAmnt(res.data.data);
        console.log("dfg", walletAmnt);
      });
  };
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  const manualDisconnect = () => {
    disconnectChat();
  };

  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  console.log("sadasdcurrrentt", messages);
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
        // setMessages(chatMessages);
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
      .post(`http://103.104.74.215:3012/api/user/get_user_profile/`, item)
      .then((res) => setUserData(res.data.data));
  };

 


  // let sender_id = "646afc72df08fb679b2f5eb5";
  let sender_id = _id;
  useEffect(() => {
    const chatRef = firebase.database().ref("add");
    chatRef.on("value", (snapshot) => {
      const chatData = snapshot.val();
      if (chatData) {
        const chatMessages = Object.values(chatData);
        console.log(chatMessages);

        // let receiver_id = "64a3c1a66f5f02a76ffbbb61";
        // let sender_id = "646afc72df08fb679b2f5eb5";

        let receiver_id =cData._id;
        let sender_id =_id;

        let newdata = chatMessages.filter((items) => {
          if (items) {
            return items.type === "receiver" || items.sender_id === sender_id;
          }
        });

        //console.log("NEWDATA", newdata);
        setMessages(newdata);
      }
    });
  }, []);

  const [amount, setAmount] = useState(walletAmnt?.ammount);
  const [remainingTime, setRemainingTime] = useState(
    Math.ceil(data1.ammount / cData?.chat_rate)
  );

  const disconnectChat = () => {
    const item = {
      user_id: _id,
      astrologer_id: cData._id,
      final_time: Math.floor(count / 60),
    };
    console.log("item bawa", item);
    axios
      .post("http://103.104.74.215:3012/api/user/disconnect_chat", item)
      .then(() => navigate("/"));
  };
  const calculateRemainingTime = () => {
    const chatDuration = Math.ceil((data1.ammount / cData?.chat_rate) * 60); // Chat duration in seconds (5   minutes)
    const chatStartTime = new Date(); // Replace this with the actual start time
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - chatStartTime) / 1000);
    const remainingTime = chatDuration - elapsedTime;
    setRemainingTime(remainingTime);
  };
  useEffect(() => {
    calculateRemainingTime();
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
 
    return (
      <>
        {remainingTime < 0 && disconnectChat()}
  
        <>
          <div>
            <b>{count}</b>
          </div>
        </>
  
        {amount < 0 && disconnectChat()}
  
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
                    <ReverseTimer
                      minutes={remainingTime}
                      seconds={60}
                      style={{ fontSize: 10 }}
                      onTimerEnd={disconnectChat}
                    />
  
                    <div className="d-flex flex-row align-items-center">
                      <i
                        onClick={manualDisconnect}
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
                  
                      {messages.map((items)=>{
                        return(
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
                      })}

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

  // return (
  //   <>
  //     {remainingTime < 0 && disconnectChat()}

  //     <>
  //       <div>
  //         <b>{count}</b>
  //       </div>
  //     </>

  //     {amount < 0 && disconnectChat()}

  //     <section style={{ backgroundColor: "#eee" }}>
  //       <div className="container py-5">
  //         <div className="row d-flex justify-content-center">
  //           <div className="col-lg-12">
  //             <div className="card">
  //               <div
  //                 className="card-header d-flex justify-content-between align-items-center p-3"
  //                 style={{ borderTop: "4px solid #ffa900" }}
  //               >
  //                 <h5 className="mb-0">Chat messages</h5>
  //                 <ReverseTimer
  //                   minutes={remainingTime}
  //                   seconds={60}
  //                   style={{ fontSize: 10 }}
  //                   onTimerEnd={disconnectChat}
  //                 />

  //                 <div className="d-flex flex-row align-items-center">
  //                   <i
  //                     onClick={manualDisconnect}
  //                     style={{
  //                       fontSize: 20,
  //                       fontWeight: "bolder",
  //                       cursor: "pointer",
  //                     }}
  //                     class="fa fa-times"
  //                     aria-hidden="true"
  //                   ></i>
  //                 </div>
  //               </div>
  //               <div
  //                 className="card-body"
  //                 data-mdb-perfect-scrollbar="true"
  //                 style={{
  //                   position: "relative",
  //                   height: "300px",
  //                   overflowY: "scroll",
  //                 }}
  //               >
//                   {messages?.map((message, index) => (
//                     <>

//                       <div style={{
//                           float: "left",
//                         }} >
//                         <img
//                           style={{
//                             height: 25,
//                             width: 25,
//                             borderRadius: "100%",
//                             padding: 2,
//                           }}
//                           src={
//                             "http://103.104.74.215:3012/uploads/" +
//                             userData.user_pic
//                           }
//                           class="blur-up lazyload update_img"
//                           alt=""
//                         />

//                         <div key={index}>

//                         </div>
//                         <p>{message.type == "receiver" && message.title}</p>
//                       </div>
//                       <div
//                         style={{
//                           float: "right",
//                         }}
//                       >
//                         <img
//                           style={{
//                             height: 25,
//                             width: 25,
//                             borderRadius: "100%",
//                             padding: 2,
//                           }}
//                           src={
//                             "http://103.104.74.215:3012/uploads/" +
//                             userData.user_pic
//                           }
//                           class="blur-up lazyload update_img"
//                           alt=""
//                         />
//                         <div key={index}>
//                           <p>{message.sender_id == sender_id && message.title}</p>

//                         </div>

//                       </div>
//                     </>
//                   ))}
//                 </div>
//                 <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
//                   <div className="input-group mb-0">
//                     <input
//                       type="text"
//                       value={currentMessage}
//                       onChange={(e) => setCurrentMessage(e.target.value)}
//                       className="form-control"
//                       placeholder="Type message"
//                       aria-label="Recipient's username"
//                       aria-describedby="button-addon2"
//                     />
//                     <button
//                       onClick={sendMessage}
//                       className="btn btn-warning"
//                       type="button"
//                       id="button-addon2"
//                       style={{ paddingTop: ".55rem" }}
//                     >
//                       Send
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Chat;
