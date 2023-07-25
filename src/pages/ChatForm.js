import React, { useEffect, useState } from "react";
// import Header1 from "./InHeader";
import Footer from "./Footer";
import Header1 from "./Header1";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ChatForm() {
  const navigate = useNavigate();

  const [info, setInfo] = useState("");

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

  const postinfo = (e) => {
    e.preventDefault();
    const data = {
      sender_id: _id,
      receiver_id: cData._id,
      full_name: info.full_name,
      gender: info.gender,
      date_of_birth: info.date_of_birth,
      time_of_birth: info.time_of_birth,
      place_of_birth: info.place_of_birth,
    };

    axios
      .post("http://103.104.74.215:3012/api/user/add_chat", data)
      .then((res) => {
        setLoader(true);
        navigate("/chat");
      });
  };

  const [loader, setLoader] = useState(false);

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
      .then((res) =>
        localStorage.setItem("data", JSON.stringify(res.data.data))
      );
  };

  return (
    <>
      {loader === true && (
        <div class="fullpage-loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <Header1 />
      <div
        class="profile-tab "
        style={{
          marginLeft: "35%",
        }}
      >
        <ul>
          <li>
            <h5>Name :</h5>
            <input
              onChange={(e) => setInfo({ ...info, full_name: e.target.value })}
              type="text"
              class="form-control"
              id="companyName"
              style={{ width: "30%" }}
            />
          </li>
          <li>
            <h5>Gender :</h5>
            <select
              onChange={(e) => setInfo({ ...info, gender: e.target.value })}
              class="form-control"
              id="companyName"
              style={{ height: 43, width: "30%" }}
            >
              <option selected disabled>
                --select gender--
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </li>
          <li>
            <h5>Date of birth :</h5>
            <input
              style={{ width: "30%" }}
              onChange={(e) =>
                setInfo({ ...info, date_of_birth: e.target.value })
              }
              type="date"
              class="form-control"
              id="companyName"
            />
          </li>

          <li>
            <h5>Time of birth :</h5>
            <input
              onChange={(e) =>
                setInfo({ ...info, time_of_birth: e.target.value })
              }
              type="time"
              class="form-control"
              id="companyName"
              style={{ width: "30%" }}
            />
          </li>
          <li>
            <h5>Place of birth :</h5>
            <input
              onChange={(e) =>
                setInfo({ ...info, place_of_birth: e.target.value })
              }
              type="text"
              class="form-control"
              id="companyName"
              style={{ width: "30%" }}
            />
          </li>
          <li>
            <h5>Message :</h5>
            <input
              style={{ width: "30%" }}
              type="text"
              class="form-control"
              id="companyName"
            />
          </li>

          <li></li>
        </ul>
        <button
          style={{ marginLeft: "20%" }}
          class="btn btn-sm theme-bg-color text-white"
          onClick={postinfo}
        >
          submit
        </button>
      </div>
      <Footer />
    </>
  );
}

export default ChatForm;
