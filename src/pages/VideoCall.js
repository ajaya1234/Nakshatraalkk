
import firebase from "./Firebase";
import "./chat.css";

import { Await, useNavigate } from "react-router-dom";
import ReverseTimer from "./ReverseTimer";


import React, { useEffect, useRef, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VideoCall = () => {
    const parse = localStorage.getItem("vcdata");
    console.log("sadasddasdasd",parse)
      const parsed = JSON.parse(parse);
      const [data, setData] = useState(parsed);
      let [_id] = useState(() => {
        let result = localStorage.getItem("_id");
        console.log("idasddasdasdads", result);
        if (result != null) {
          return JSON.parse(result);
        } else {
          return [];
        }
      });


    const [tkn, setTkn] = useState('');
    const client = useRef(null);
    const localAudioTrackk = useRef(null);
    const localAudioTrack = useRef(null);
    const localVideoTrack = useRef(null);


    const data3 = localStorage.getItem('data')
    const jvalue = JSON.parse(data3)
    const [data1, setData1]= useState(jvalue)

    const [walletAmnt, setWalletAmnt] = useState([]);
    
    useEffect(() => {
      postRech();
    }, []);
    const postRech = () => {
      const  item =  {
        user_id: _id,
      };
       axios
        .post("http://103.104.74.215:3012/api/user/get_wallet_user", item).then((res)=>setWalletAmnt(res.data.data))
        .then((res) => {
        
         setWalletAmnt(res.data.data);
         console.log('dasasfg', walletAmnt)
          
         
        });
    };
  


    const [count, setCount] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    
      return () => clearInterval(interval);
    }, []);
  
    const manualDisconnect = () => {
      disconnectCall();
    };








  
    
  
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    
    const [userData, setUserData] = useState([]);
  
    let [_idd, set_idd] = useState(() => {
      let result = localStorage.getItem("_id");
      if (result != null) {
        return JSON.parse(result);
      } else {
        return [];
      }
    });
  
    const chatt = localStorage.getItem("vcdata");
    const parsedd = JSON.parse(chatt);
    const [cData, setCData] = useState(parsedd);
  
   
  
   
  
    useEffect(() => {
      postId();
    }, []);
    const postId = () => {
      const item = {
        _id: _idd,
      };
      axios
        .post(`http://103.104.74.215:3012/api/user/get_user_profile/`, item)
        .then((res) => setUserData(res.data.data));
        
    };
  

  
  
  
    //const [amount, setAmount] = useState(walletAmnt?.ammount);
    //const [remainingTime, setRemainingTime] = useState(  Math.ceil((data1.ammount / cData?.video_rate)));
  
    
    const disconnectCall = () => {
      const tkn = localStorage.getItem('a_token');
      console.log(tkn);
      const removetoken = {
          token: tkn,
          final_time: Math.floor(count / 60),

      };


      axios.post(`http://103.104.74.215:3012/api/astrologer/remove_live_astrologer`, removetoken)
          .then((res) => {
              console.log("deleteeee",res);
          });
  };

  
    //const calculateRemainingTime = () => {
      //const chatDuration = Math.ceil((data.ammount / cData?.video_rate)*60 ); 
      //const chatStartTime = new Date(); 
      //const currentTime = new Date();
      //const elapsedTime = Math.floor((currentTime - chatStartTime) / 1000);
      //const remainingTime = chatDuration - elapsedTime;
      //setRemainingTime(remainingTime);
    //};
    //useEffect(() => {
     // calculateRemainingTime();
      //const timer = setInterval(() => {
      //  setRemainingTime((prevTime) => prevTime - 1);
     // }, 1000);
     // return () => {
        //clearInterval(timer);
     // };
   // }, []);












    const tokenGen = () => {
      
        const userdata = {
            user_id: _id,
      astrologer_id: data._id,
       channel_name: "test",
       final_time: "2",
       //final_time: Math.floor(count / 60),
        };
console.log("user dfatada",userdata)
        axios
            .post('http://103.104.74.215:3012/api/user/generate_agrora_token_calling', userdata)
            .then((res) => {
              console.log("sdasdasdtokeennnnn dataaa",res )
                if (res.data.result) {
                    localStorage.setItem('a_token', res.data.token);
                    setTkn(res.data.token);
                }
            });
    }

    useEffect(() => {
        const joinChannel = async () => {
            client.current = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
            await client.current.join('b13de305bceb4aa1a434b8a295f990dd', 'test', tkn, null);

            const [microphoneTrack, cameraTrack] = await Promise.all([
                AgoraRTC.createMicrophoneAudioTrack(),
                AgoraRTC.createCameraVideoTrack(),
            ]);

            localAudioTrack.current = microphoneTrack;
            localVideoTrack.current = cameraTrack;
            localVideoTrack.current.play("<LOCAL_VIDEO_ELEMENT_ID>");
            await client.current.publish([microphoneTrack, cameraTrack]);
        };

        if (tkn) {
            joinChannel();
        }

        return () => {
            client.current && client.current.leave();
        };
    }, [tkn]);

    useEffect(() => {

      
        if (!client.current) return;

        client.current.on('user-published', async (user, mediaType) => {
            await client.current.subscribe(user, mediaType);

            if (mediaType === 'video') {



                const remoteVideoTrack = user.videoTrack;
                if (remoteVideoTrack) {
                    return remoteVideoTrack.play("<REMOTE_VIDEO_ELEMENT_ID>");
                } else {
                    return remoteVideoTrack.current.play("<REMOTE_VIDEO_ELEMENT_ID>");
                }

            }
        });




    }, [tkn]);

    const deletelive = () => {
      const tkn = localStorage.getItem('a_token');
      console.log(tkn);
      const removetoken = {
          token: tkn,
          final_time: Math.floor(count / 60),

      };


      axios.post(`http://103.104.74.215:3012/api/astrologer/remove_live_astrologer`, removetoken)
          .then((res) => {
              console.log("deleteeee",res);
          });
  };


    return (
        <>
        {/* {remainingTime<0&& disconnectCall()} */}
        
          <>
          
         
           
            
           
            <div>
             <b>{count}</b>
            </div>
          </>
    
          {/* {amount < 0 && disconnectCall()} */}
          {/* <ReverseTimer
          minutes={remainingTime}
          seconds={60}
          style={{ fontSize: 10 }}
          onTimerEnd={disconnectCall}
        /> */}
            <button onClick={tokenGen} class=" btn-md bg-dark  text-white w-80">Call</button> 
            {/*<button onClick={deletelive} class=" btn-md bg-dark  text-white w-80">Disconnect</button>*/}
             <a href='/'><button onClick={deletelive} class=" btn-md bg-dark  text-white w-80">Disconnect</button></a>
            <div className='row'>
                <div className='col-sm-6' style={{ border: "1px solid black", height: "400px" }}>
                    <video id="<REMOTE_VIDEO_ELEMENT_ID>" autoPlay playsInline muted width={"100%"} height={"100%"} ></video>
                </div>

                <div className='col-sm-6' style={{ border: "1px solid black", height: "400px" }}>
                    <video id="<LOCAL_VIDEO_ELEMENT_ID>" autoPlay playsInline muted width={"100%"} height={"100%"}></video>
                </div>
            </div>
        </>
    );
};

export default VideoCall;

























// import React, { useEffect, useState } from "react";
// import AgoraRTC from "agora-rtc-sdk-ng";
// import Videoroom from "./VideoRoom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const VideoCall = () => {
//   const navigate = useNavigate();
//   const parse = localStorage.getItem("vcdata");
//   const parsed = JSON.parse(parse);
//   const [data, setData] = useState(parsed);
//   let [_id] = useState(() => {
//     let result = localStorage.getItem("_id");
//     console.log("idasddasdasdads", result);
//     if (result != null) {
//       return JSON.parse(result);
//     } else {
//       return [];
//     }
//   });

//   const [tkn, setTkn] = useState([]);

//   useEffect(() => {
   
//   }, []);

//   const channel = "test";

//   const tokenGen = () => {
//     const item = {
//       user_id: _id,
//       astrologer_id: data._id,
//       channel_name: channel,
//     };
//     console.log("item hai", item);
//     axios
//       .post(
//         "http://103.104.74.215:3012/api/user/generate_agrora_token_calling",
//         item
//       )
//       .then((res) => {
//         console.log(res.data);
//         setTkn(res.data);
//       });
//   };

//   const APP_ID = "b13de305bceb4aa1a434b8a295f990dd";
//   const CHANNEL = "test";

//   const client = AgoraRTC.createClient({
//     mode: "rtc",
//     codec: "vp8",
//   });

//   const [users, setUsers] = useState([]);
//   const [localTracks, setLocalTracks] = useState([]);
//   const [tracks, setTracks] = useState([]);

//   const handleUserJoined = async (user, mediaType) => {
//     await client.subscribe(user, mediaType);

//     if (mediaType === "video") {
//       setUsers((previousUsers) => [...previousUsers, user]);
//     }

//     if (mediaType === "audio") {
    
//     }
//   };

//   const handleUserLeft = (user) => {
//     setUsers((previousUsers) =>
//       previousUsers.filter((u) => u.uid !== user.uid)
//     );
//   };

//   useEffect(() => {
//     client.on("user-published", handleUserJoined);
//     client.on("user-left", handleUserLeft);

//     client
//       .join(APP_ID, CHANNEL, tkn.token, null)
//       .then((uid) =>
//         Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid])
//       )
//       .then(([newTracks, uid]) => {
//         const [audioTrack, videoTrack] = newTracks;
//         setLocalTracks(newTracks);
//         setUsers((previousUsers) => [
//           ...previousUsers,
//           {
//             uid,
//             videoTrack,
//             audioTrack,
//           },
//         ]);
//         client.publish(newTracks);
//         setTracks(newTracks); 
//       });

//     return () => {
//       for (let localTrack of localTracks) {
//         localTrack.stop();
//         localTrack.close();
//       }
//       client.off("user-published", handleUserJoined);
//       client.off("user-left", handleUserLeft);
//       if (tracks.length > 0) {
       
//         client.unpublish(tracks).then(() => client.leave());
//       }
//     };
//   }, []);

//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [count]);

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <button onClick={tokenGen}>Generate Token</button>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 200px)",
//         }}
//       >
//         {users.map((user) => (
//           <Videoroom key={user.uid} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoCall;

