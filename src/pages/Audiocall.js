// import firebase from "./Firebase";
// import "./chat.css";

// import { Await, useNavigate } from "react-router-dom";
// import ReverseTimer from "./ReverseTimer";

// import React, { useEffect, useRef, useState } from "react";
// import AgoraRTC from "agora-rtc-sdk-ng";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Audiocall = () => {
//   const [minutessss, setMinutess] = useState(0);
//   let [total_time, settotal_time] = useState("");

//   let [_id] = useState(() => {
//     let result = localStorage.getItem("_id");
//     console.log("idasddasdasdads", result);
//     if (result != null) {
//       return result;
//     } else {
//       return [];
//     }
//   });

//   const tkn = localStorage.getItem("videoatro_token");

//   const client = useRef(null);
//   const localAudioTrackk = useRef(null);
//   const localAudioTrack = useRef(null);
//   const localVideoTrack = useRef(null);

//   const data3 = localStorage.getItem("data");
//   const jvalue = JSON.parse(data3);
//   const [data1, setData1] = useState(jvalue);

//   const [walletAmnt, setWalletAmnt] = useState([]);

//   useEffect(() => {
//     postRech();
//   }, []);
//   const postRech = () => {
//     const idddd = localStorage.getItem("iddofuser");
//     const item = {
//       user_id: idddd,
//     };
//     axios
//       .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
//       .then((res) => setWalletAmnt(res.data.data))
//       .then((res) => {
//         setWalletAmnt(res.data.data);
//       });
//   };

//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [count]);

//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]);
//   const [currentMessage, setCurrentMessage] = useState("");

//   const [userData, setUserData] = useState([]);

//   let [_idd, set_idd] = useState(() => {
//     let result = localStorage.getItem("_id");
//     if (result != null) {
//       return JSON.parse(result);
//     } else {
//       return [];
//     }
//   });

//   useEffect(() => {
//     postId();
//   }, []);
//   const postId = () => {
//     const idddd = localStorage.getItem("iddofuser");
//     const item = {
//       _id: idddd,
//     };
//     axios
//       .post(`http://103.104.74.215:3012/api/user/get_user_profile/`, item)
//       .then((res) => setUserData(res.data.data));
//   };

//   useEffect(() => {
//     const joinChannel = async () => {
//       client.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
//       await client.current.join(
//         "b13de305bceb4aa1a434b8a295f990dd",
//         "test",
//         tkn,
//         null
//       );

//       const [microphoneTrack, cameraTrack] = await Promise.all([
//         AgoraRTC.createMicrophoneAudioTrack(),
//         AgoraRTC.createCameraVideoTrack(),
//       ]);

//       localAudioTrack.current = microphoneTrack;
//       localVideoTrack.current = cameraTrack;
//       localVideoTrack.current.play("<LOCAL_VIDEO_ELEMENT_ID>");
//       await client.current.publish([microphoneTrack, cameraTrack]);
//     };

//     if (tkn) {
//       joinChannel();
//     }

//     return () => {
//       client.current && client.current.leave();
//     };
//   }, [tkn]);

//   useEffect(() => {
//     if (!client.current) return;

//     client.current.on("user-published", async (user, mediaType) => {
//       await client.current.subscribe(user, mediaType);

//       if (mediaType === "video") {
//         const remoteVideoTrack = user.videoTrack;
//         if (remoteVideoTrack) {
//           return remoteVideoTrack.play("<REMOTE_VIDEO_ELEMENT_ID>");
//         } else {
//           return remoteVideoTrack.current.play("<REMOTE_VIDEO_ELEMENT_ID>");
//         }
//       }
//     });
//   }, [tkn]);

// //   const deletelive = () => {
// //     settotal_time(minutes);

// //     const tkn = localStorage.getItem("videoatro_token");
    
// //     const removetoken = {
// //       token: tkn,

// //       final_time: minutes.toString(),
// //     };
// // console.log("ssadalsassd",removetoken)
// //     axios
// //       .post(
// //         `http://103.104.74.215:3012/api/user/remove_audio_calling_user`,
// //         removetoken
// //       )
// //       .then(() => navigate("/Rating"));
// //   };


// const deletelive = () => {
//     settotal_time(minutes);
//     const tkn = localStorage.getItem("videoatro_token");
//     let total_time = 0;
  
//     if (client.current) {
//       // If the user is joined, calculate the total_time in seconds
//       const timeeofvideocall = localStorage.getItem("totalminute");
//       total_time = timeeofvideocall ? minutes.toString() : 0;
//     }
  
//     const removetoken = {
//       token: tkn,
//       final_time: total_time.toString(),
//     };
  
//     console.log("sadasdasdsadada", removetoken);
  
//     axios
//       .post("http://103.104.74.215:3012/api/user/remove_audio_calling_user", removetoken)
//       .then(() => navigate("/Rating"));
//   };
  

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

//   const rateee = localStorage.getItem("videorate");

//   useEffect(() => {
//     let totalminute = walletAmnt / rateee;
//     let total_time = Math.floor(totalminute);
//     settotal_time(total_time);
//   }, [walletAmnt, rateee]);

//   useEffect(() => {
//     const updateElapsedTime = () => {
//       setMinutess((prevMinutes) => prevMinutes + 1);
//     };

//     const timer = setInterval(updateElapsedTime, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const timeeofvideocall = localStorage.getItem("totalminute");
//   // let timeeee = (timeeofvideocall * 60)+20;
//   let timeeee = timeeofvideocall * 60 ;
//   useEffect(() => {
//     if (minutessss >= timeeee) {
//       deletelive();
//     }
//   }, [minutessss]);

//   return (
//     <>
//       <>
//         <div className="text-center">
//           <h4>Time Now</h4>
//           <p id="timer">{formatTime(elapsedTime)}</p>
//         </div>
//       </>

//       <button onClick={deletelive} class=" btn-md bg-dark  text-white w-80">
//         Disconnect
//       </button>
//       <div className="row">
//         <div
//           className="col-sm-6"
//           style={{ border: "1px solid black", height: "400px" }}
//         >
//           <video
//             id="<REMOTE_VIDEO_ELEMENT_ID>"
//             autoPlay
//             playsInline
//             muted
//             width={"100%"}
//             height={"100%"}
//           ></video>
//         </div>

//         <div
//           className="col-sm-6"
//           style={{ border: "1px solid black", height: "400px" }}
//         >
//           <video
//             id="<LOCAL_VIDEO_ELEMENT_ID>"
//             autoPlay
//             playsInline
//             muted
//             width={"100%"}
//             height={"100%"}
//           ></video>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Audiocall;







// import React, { useEffect, useRef, useState } from "react";
// import AgoraRTC from "agora-rtc-sdk-ng";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Audiocall = () => {
//   const [minutessss, setMinutess] = useState(0);
//   const [total_time, setTotal_time] = useState("");
//   const [walletAmnt, setWalletAmnt] = useState([]);
//   const [count, setCount] = useState(0);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [isMicMuted, setIsMicMuted] = useState(false);

//   const navigate = useNavigate();
//   const tkn = localStorage.getItem("videoatro_token");

//   const client = useRef(null);
//   const localAudioTrack = useRef(null);
//   const localVideoTrack = useRef(null);

//   useEffect(() => {
//     postRech();
//     const interval = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const postRech = () => {
//     const idddd = localStorage.getItem("iddofuser");
//     const item = {
//       user_id: idddd,
//     };
//     axios
//       .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
//       .then((res) => setWalletAmnt(res.data.data));
//   };

//   useEffect(() => {
//     const joinChannel = async () => {
//       client.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
//       await client.current.join(
//         "b13de305bceb4aa1a434b8a295f990dd",
//         "test",
//         tkn,
//         null
//       );

//       const [microphoneTrack, cameraTrack] = await Promise.all([
//         AgoraRTC.createMicrophoneAudioTrack(),
//         AgoraRTC.createCameraVideoTrack(),
//       ]);

//       localAudioTrack.current = microphoneTrack;
//       localVideoTrack.current = cameraTrack;
//       localVideoTrack.current.play("<LOCAL_VIDEO_ELEMENT_ID>");
//       await client.current.publish([microphoneTrack, cameraTrack]);
//     };

//     if (tkn) {
//       joinChannel();
//     }

//     return () => {
//       client.current && client.current.leave();
//     };
//   }, [tkn]);

//   useEffect(() => {
//     if (!client.current) return;

//     client.current.on("user-published", async (user, mediaType) => {
//       await client.current.subscribe(user, mediaType);

//       if (mediaType === "video") {
//         const remoteVideoTrack = user.videoTrack;
//         if (remoteVideoTrack) {
//           return remoteVideoTrack.play("<REMOTE_VIDEO_ELEMENT_ID>");
//         } else {
//           return remoteVideoTrack.current.play("<REMOTE_VIDEO_ELEMENT_ID>");
//         }
//       }
//     });
//   }, [tkn]);

//   const deletelive = () => {
//     setTotal_time(minutes);

//     const tkn = localStorage.getItem("videoatro_token");
//     let total_time = 0;

//     if (client.current) {
//       // If the user is joined, calculate the total_time in seconds
//       const timeeofvideocall = localStorage.getItem("totalminute");
//       total_time = timeeofvideocall ? minutes.toString() : 0;
//     }

//     const removetoken = {
//       token: tkn,
//       final_time: total_time.toString(),
//     };

//     console.log("sadasdasdsadada", removetoken);

//     axios
//       .post(
//         "http://103.104.74.215:3012/api/user/remove_audio_calling_user",
//         removetoken
//       )
//       .then(() => navigate("/Rating"));
//   };

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

//   const formatTime = (time) => {
//     const hours = Math.floor(time / 3600000);
//     const minutes = Math.floor((time % 3600000) / 60000);
//     const seconds = Math.floor((time % 60000) / 1000);

//     return `${hours < 10 ? "0" + hours : hours}:${
//       minutes < 10 ? "0" + minutes : minutes
//     }:${seconds < 10 ? "0" + seconds : seconds}`;
//   };

//   const t = formatTime(elapsedTime);
//   const timeeofvideocall = localStorage.getItem("totalminute");
//   let timeeee = timeeofvideocall * 60;

//   useEffect(() => {
//     if (minutessss >= timeeee) {
//       deletelive();
//     }
//   }, [minutessss]);

//   const minutes = Math.floor(elapsedTime / 60000);

//   useEffect(() => {
//     setTotal_time(minutes);
//   }, [total_time, minutes]);

//   const rateee = localStorage.getItem("videorate");

//   useEffect(() => {
//     const totalminute = walletAmnt / rateee;
//     const total_time = Math.floor(totalminute);
//     setTotal_time(total_time);
//   }, [walletAmnt, rateee]);

//   const toggleMic = () => {
//     if (localAudioTrack.current) {
//       setIsMicMuted(!isMicMuted);
//       localAudioTrack.current.setEnabled(!isMicMuted);
//     }
//   };

//   return (
//     <>
//       <div className="text-center">
//         <h4>Time Now</h4>
//         <p id="timer">{formatTime(elapsedTime)}</p>

//         <button
//           onClick={toggleMic}
//           className={`btn-md bg-${isMicMuted ? "danger" : "primary"} text-white`}
//         >
//           {isMicMuted ? "Unmute Mic" : "Mute Mic"}
//         </button>
//       </div>

//       <button
//         onClick={deletelive}
//         className="btn-md bg-dark text-white w-80"
//       >
//         Disconnect
//       </button>
//       <div className="row">
//         <div
//           className="col-sm-6"
//           style={{ border: "1px solid black", height: "400px" }}
//         >
//           <video
//             id="<REMOTE_VIDEO_ELEMENT_ID>"
//             autoPlay
//             playsInline
//             muted
//             width={"100%"}
//             height={"100%"}
//           ></video>
//         </div>

//         <div
//           className="col-sm-6"
//           style={{ border: "1px solid black", height: "400px" }}
//         >
//           <video
//             id="<LOCAL_VIDEO_ELEMENT_ID>"
//             autoPlay
//             playsInline
//             muted
//             width={"100%"}
//             height={"100%"}
//           ></video>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Audiocall;








import React, { useEffect, useRef, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Audiocall = () => {
  const [minutessss, setMinutess] = useState(0);
  const [total_time, setTotal_time] = useState("");
  const [walletAmnt, setWalletAmnt] = useState([]);
  const [count, setCount] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isMicMuted, setIsMicMuted] = useState(false);

  const navigate = useNavigate();
  const tkn = localStorage.getItem("videoatro_token");

  const client = useRef(null);
  const localAudioTrack = useRef(null);

  useEffect(() => {
    postRech();
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const postRech = () => {
    const idddd = localStorage.getItem("iddofuser");
    const item = {
      user_id: idddd,
    };
    axios
      .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
      .then((res) => setWalletAmnt(res.data.data));
  };

  useEffect(() => {
    const joinChannel = async () => {
      client.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      await client.current.join(
        "b13de305bceb4aa1a434b8a295f990dd",
        "test",
        tkn,
        null
      );

      const microphoneTrack = await AgoraRTC.createMicrophoneAudioTrack();

      localAudioTrack.current = microphoneTrack;
      await client.current.publish([microphoneTrack]);
    };

    if (tkn) {
      joinChannel();
    }

    return () => {
      client.current && client.current.leave();
    };
  }, [tkn]);

  const deletelive = () => {
    setTotal_time(minutes);

    const tkn = localStorage.getItem("videoatro_token");
    let total_time = 0;

    if (client.current) {
      // If the user is joined, calculate the total_time in seconds
      const timeeofvideocall = localStorage.getItem("totalminute");
      total_time = timeeofvideocall ? minutes.toString() : 0;
    }

    const removetoken = {
      token: tkn,
      final_time: total_time.toString(),
    };

    console.log("sadasdasdsadada", removetoken);

    axios
      .post(
        "http://103.104.74.215:3012/api/user/remove_audio_calling_user",
        removetoken
      )
      .then(() => navigate("/Rating"));
  };

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

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const t = formatTime(elapsedTime);
//   const timeeofvideocall = localStorage.getItem("totalminute");
//   let timeeee = timeeofvideocall * 60;
// console.log("asasdminutessssminutessss",minutessss)
//   useEffect(() => {
//     if (minutessss >= timeeee) {
//       deletelive();
//     }
//   }, [minutessss]);

  const minutes = Math.floor(elapsedTime / 60000);

  useEffect(() => {
    setTotal_time(minutes);
  }, [total_time, minutes]);

  const rateee = localStorage.getItem("videorate"); 

  useEffect(() => {
    const totalminute = walletAmnt / rateee;
    const total_time = Math.floor(totalminute);
    setTotal_time(total_time);
  }, [walletAmnt, rateee]);






  useEffect(() => {
    const updateElapsedTime = () => {

      setMinutess((prevMinutes) => prevMinutes + 1);
    };

    const timer = setInterval(updateElapsedTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeeofvideocall=localStorage.getItem("totalminute")
 
  let timeeee = timeeofvideocall * 60;
  useEffect(() => {
    if (minutessss >= timeeee) {
      deletelive();
    }
  }, [minutessss]);







  const toggleMic = () => {
    if (localAudioTrack.current) {
      setIsMicMuted(!isMicMuted);
      localAudioTrack.current.setEnabled(!isMicMuted);
    }
  };

  return (
    <>
      <div className="text-center">
        <h4>Time Now</h4>
        <p id="timer">{formatTime(elapsedTime)}</p>

        <button
          onClick={toggleMic}
          className={`btn-md bg-${isMicMuted ? "danger" : "primary"} text-white`}
        >
          {isMicMuted ? "Unmute Mic" : "Mute Mic"}
        </button>
      </div>

      <button
        onClick={deletelive}
        className="btn-md bg-dark text-white w-80"
      >
        Disconnect
      </button>
    </>
  );
};

export default Audiocall;
