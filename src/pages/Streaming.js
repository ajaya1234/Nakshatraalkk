import React, { useState, useEffect } from "react";
import axios from "axios";
import AgoraRTC from "agora-rtc-sdk";
import { useNavigate } from "react-router-dom";

function Streaming() {
  const navigate = useNavigate();
  useEffect(() => {
    postData();
  }, []);
  const [allMsg, setAllMsg] = useState([]);
  const parse = localStorage.getItem("liveData");
  const parsed = JSON.parse(parse);
  const [dta] = useState(parsed);

  let [_id] = useState(() => {
    let result = localStorage.getItem("_id");
    if (result != null) {
      return JSON.parse(result);
    } else {
      return [];
    }
  });
  const postData = () => {
    const item = {
      user_id: _id,
      token: dta.token,
    };
    axios
      .post(`http://103.104.74.215:3012/api/user/add_live_user`, item)
      .then((res) => console.log(res));
  };
  var rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStreams: [],
    params: {},
  };

  // Options for joining a channel
  var option = {
    appID: dta.app_id,
    channel: dta.channel_name,
    uid: null,
    token: dta.token,
    // key: "",
    // secret: "",
  };

  function joinChannel(role) {
    // Create a client
    rtc.client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
    // Initialize the client
    rtc.client.init(
      option.appID,
      function () {
        console.log("init success");

        // Join a channel
        rtc.client.join(
          option.token ? option.token : null,
          option.channel,
          option.uid ? +option.uid : null,
          function (uid) {
            console.log(
              "join channel: " + option.channel + " success, uid: " + uid
            );
            rtc.params.uid = uid;

            rtc.client.on("connection-state-change", function (evt) {
              console.log("audience", evt);
            });

            rtc.client.on("stream-added", function (evt) {
              var remoteStream = evt.stream;
              var id = remoteStream.getId();
              if (id !== rtc.params.uid) {
                rtc.client.subscribe(remoteStream, function (err) {
                  console.log("stream subscribe failed", err);
                });
              }
              console.log("stream-added remote-uid: ", id);
            });

            rtc.client.on("stream-removed", function (evt) {
              var remoteStream = evt.stream;
              var id = remoteStream.getId();
              console.log("stream-removed remote-uid: ", id);
            });

            rtc.client.on("stream-subscribed", function (evt) {
              var remoteStream = evt.stream;
              var id = remoteStream.getId();
              remoteStream.play("remote_video_");
              console.log("stream-subscribed remote-uid: ", id);
            });

            rtc.client.on("stream-unsubscribed", function (evt) {
              var remoteStream = evt.stream;
              var id = remoteStream.getId();
              remoteStream.pause("remote_video_");
              console.log("stream-unsubscribed remote-uid: ", id);
            });
          },
          function (err) {
            console.error("client join failed", err);
          }
        );
      },
      (err) => {
        console.error(err);
      }
    );
  }

  function leaveEventAudience(params) {
    rtc.client.leave(
      function () {
        console.log("client leaves channel");
        //……
      },
      function (err) {
        console.log("client leave failed ", err);
        //error handling
      }
    );
  }
  useEffect(() => {
    joinChannel("audience");
  }, []);

  const [msg, setMsg] = useState("");

  const inputHandle = (e) => {
    setMsg(e.target.value);
  };

  const sendmsg = () => {
    postMsg();

    setMsg("");

  };

  useEffect(() => {
    getAllMsg();
  }, []);

  const postMsg = () => {
    const item = {
      user_id: _id,
      astrologer_id: dta._id,
      msg: msg,
    };
  
    axios
      .post("http://103.104.74.215:3012/api/user/add_live_comment", item)
      .then(() => {
        getAllMsg();
      
      });
  };

  

  const getAllMsg = () => {
    axios
      .get("http://103.104.74.215:3012/api/user/get_live_comment")
      .then((res) => {
        setAllMsg(res.data.data);
       
      });
  };
  const showTime = (x) => {
    const d = new Date(x);
    const dd = d.getDate();
    const mm = d.getMonth() + 1;
    const yy = d.getFullYear();
    const t = d.getHours();
    const nt = t > 12 ? t - 12 : t;
    const m = d.getMinutes();
    const ampm = t > 12 ? "PM" : "AM";
    const zeroMin = m < 10 ? 0 : "";
    const finaldate = dd + "/" + mm + "/" + yy;
    return `${finaldate}   ${nt}:${zeroMin}${m}${ampm}`;
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "75%",
          height: "90vh",
          backgroundColor: "white",
          borderRadius: 15,
          display: "flex",

          justifyContent: "center",
        }}
      >
        <button
      
          style={{
            width: 80,
            height: 40,
            backgroundColor: "black",
            alignSelf: "flex-start",
            color: "white",
            borderRadius: 10,
            marginTop: 25,
            marginRight: -85,
            zIndex: 20,
          }}
        >
          
          <i class="fa fa-eye" aria-hidden="true"></i>1
        </button>
        <div
          id="remote_video_"
          style={{
            width: "48%",
            height: "95%",
            borderRadius: 15,
            // backgroundColor: "red",
            backgroundRepeat: "no-repeat",
            marginRight: "1%",
            marginTop: "1.5%",
          }}
        >
         
        </div>
        <div style={{ width: "48%", height: "100%" }}>
          <div
            style={{
              width: "100%",
              height: "20%",
              backgroundColor: "rgba(0,0,0,0.03)",
            }}
          >
            <img
              style={{
                width: 70,
                height: 70,
                borderRadius: "100%",
                padding: 10,
              }}
              src={
                "http://103.104.74.215:3012/uploads/" +
                dta?.astrologer_data?.profile_pic
              }
            />
            <br />
            <h5 style={{ paddingLeft: 10, fontWeight: "bolder", fontSize: 20 }}>
              {dta.astrologer_data?.name}
            </h5>
            <br />
            <h5>
              {dta.astrologer_data?.role} {dta.astrologer_data?.experiance_year}
            </h5>
            <br />
          </div>
          <div
            style={{
              height: "60%",
              width: "100%",
              overflowY: "scroll",
              backgroundColor: "rgba(0,0,0,0.03)",
            }}
          >


            

            {allMsg?.map((i) => (
              <>
                <label
                  style={{
                    width: "100%",
                    height: 50,
                    paddingLeft: 5,
                  }}
                >
                  {i.msg} 
                  h3
                </label>
              </>
            ))} 
          </div>
          <div
            style={{
              height: "20%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              name="msg"
              value={msg}
              onChange={inputHandle}
              placeholder="say hi..."
              style={{ height: 50, width: "80%", border: "none" }}
            />
            <i
              onClick={sendmsg}
              style={{ fontSize: 25 }}
              class="fa fa-paper-plane"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>

      <i
        onClick={() => navigate("/")}
        style={{
          marginTop: "-58%",
          fontSize: 32,
          color: "white",
          cursor: "pointer",
        }}
        class="fa fa-times"
        aria-hidden="true"
      ></i>
    </div>
  );
}

export default Streaming;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import AgoraRTC from "agora-rtc-sdk";

// function Streaming() {
//   useEffect(() => {
//     postData();
//   }, []);
//   const parse = localStorage.getItem("liveData");
//   const parsed = JSON.parse(parse);
//   const [dta, setDta] = useState(parsed);

//   let [_id] = useState(() => {
//     let result = localStorage.getItem("_id");
//     if (result != null) {
//       return JSON.parse(result);
//     } else {
//       return [];
//     }
//   });
//   const postData = () => {
//     const item = {
//       user_id: _id,
//       token: dta.token,
//     };
//     axios
//       .post(`http://103.104.74.215:3012/api/user/add_live_user`, item)
//       .then((res) => console.log(res));
//   };
//   var rtc = {
//     client: null,
//     joined: false,
//     published: false,
//     localStream: null,
//     remoteStreams: [],
//     params: {},
//   };

//   // Options for joining a channel
//   var option = {
//     appID: dta.app_id,
//     channel: dta.channel_name,
//     uid: null,
//     token: dta.token,
//     // key: "",
//     // secret: "",
//   };

//   function joinChannel(role) {
//     // Create a client
//     rtc.client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
//     // Initialize the client
//     rtc.client.init(
//       option.appID,
//       function () {
//         console.log("init success");

//         // Join a channel
//         rtc.client.join(
//           option.token ? option.token : null,
//           option.channel,
//           option.uid ? +option.uid : null,
//           function (uid) {
//             console.log(
//               "join channel: " + option.channel + " success, uid: " + uid
//             );
//             rtc.params.uid = uid;

//             rtc.client.on("connection-state-change", function (evt) {
//               console.log("audience", evt);
//             });

//             rtc.client.on("stream-added", function (evt) {
//               var remoteStream = evt.stream;
//               var id = remoteStream.getId();
//               if (id !== rtc.params.uid) {
//                 rtc.client.subscribe(remoteStream, function (err) {
//                   console.log("stream subscribe failed", err);
//                 });
//               }
//               console.log("stream-added remote-uid: ", id);
//             });

//             rtc.client.on("stream-removed", function (evt) {
//               var remoteStream = evt.stream;
//               var id = remoteStream.getId();
//               console.log("stream-removed remote-uid: ", id);
//             });

//             rtc.client.on("stream-subscribed", function (evt) {
//               var remoteStream = evt.stream;
//               var id = remoteStream.getId();
//               remoteStream.play("remote_video_");
//               console.log("stream-subscribed remote-uid: ", id);
//             });

//             rtc.client.on("stream-unsubscribed", function (evt) {
//               var remoteStream = evt.stream;
//               var id = remoteStream.getId();
//               remoteStream.pause("remote_video_");
//               console.log("stream-unsubscribed remote-uid: ", id);
//             });
//           },
//           function (err) {
//             console.error("client join failed", err);
//           }
//         );
//       },
//       (err) => {
//         console.error(err);
//       }
//     );
//   }

//   function leaveEventAudience(params) {
//     rtc.client.leave(
//       function () {
//         console.log("client leaves channel");
//         //……
//       },
//       function (err) {
//         console.log("client leave failed ", err);
//         //error handling
//       }
//     );
//   }

//   return (
//     <div>
//       <button onClick={() => joinChannel("audience")}>
//         Join Channel as Audience
//       </button>
//       <button onClick={() => leaveEventAudience("audience")}>
//         Leave Event Audience
//       </button>

//       <div id="remote_video_" style={{ width: "400px", height: "400px" }} />
//     </div>
//   );
// }

// export default Streaming;
