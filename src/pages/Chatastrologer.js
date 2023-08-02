import React, { useEffect, useState } from "react";

import Footer from "./Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header1 from "./Header1";

function Chatastrologer() {
  const navigate = useNavigate();
  useEffect(() => {
    postData();
  }, []);

  const [list, setList] = useState([]);

  let [_id, set_id] = useState(() => {
    let result = localStorage.getItem("_id");
    if (result != null) {
      return JSON.parse(result);
    } else {
      return [];
    }
  });

  // const parse = localStorage.getItem("vcdata");

  //  const parsed = JSON.parse(parse);
  //  const [data, setData] = useState(parsed);

  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const postData = () => {
    const iddofuser=localStorage.getItem("iddofuser")
    const item = {
      user_id: iddofuser,
    };
    axios
      .post("http://103.104.74.215:3012/api/user/astrologer_list/", item)
      .then((res) => {
        setList(res.data.data);
      });
  };

   const [walletAmnt, setWalletAmnt] = useState();
const rateofchaing= localStorage.getItem("chatrate")
  let [finltime, setfinltime] = useState();
  useEffect(() => {
    let totalminute = walletAmnt / rateofchaing;
    let finl_time = Math.floor(totalminute);

    setfinltime(finl_time);
  }, [walletAmnt]);

  useEffect(() => {
    postRech();
  }, [, walletAmnt, rateofchaing]);

  const postRech = () => {
    const iddofuser=localStorage.getItem("iddofuser")
    const item = {
      user_id: iddofuser,
    };
    axios
      .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
      .then((res) => setWalletAmnt(res.data.data.ammount));
  };

  

  return (
    <div>
      <Header1 />

      {/* <div class="fullpage-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div> */}

      <section class="section-b-space shop-section">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-12">
              <div class="show-button">
                <div class="top-filter-menu-2">
                  <div
                    class="sidebar-filter-menu"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                  >
                    <a href="shop-top-filter1.html">
                      <i class="fa-solid fa-house"></i> Chat With Astrologer
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <div class="row g-sm-4 g-3">
                {" "}
                {list?.map((i) => {
                  return (
                    <div class="col-xl-6 col-sm-6" style={{ width: "25%" }}>
                      <div class="seller-grid-box seller-grid-box-1">
                        <div class="grid-image">
                          <div class="image">
                            <img
                              onClick={() => {
                                localStorage.setItem(
                                  "AstroData",
                                  JSON.stringify(i)
                                );
                                navigate("/AstrologerDetail");
                              }}
                              src={
                                "http://103.104.74.215:3012/uploads/" +
                                i.profile_pic
                              }
                              class="img-fluid"
                              alt=""
                              style={{
                                height: "60px ",
                                width: "60px",
                                borderRadius: "100%",
                              }}
                            />

                            <button
                              onclick="location.href = 'product-4-image.html';"
                              class="nav-item"
                              style={{
                                borderRadius: "15px",
                                width: "60px",
                                height: "30px",
                                borderColor: "#f5b60a",
                                boxShadow: "5px",
                              }}
                            >
                              {i.review ? i.review : "0"}
                              <li>
                                <i
                                  style={{ fontWeight: "bolder" }}
                                  class="fa fa-star-o"
                                  aria-hidden="true"
                                ></i>
                              </li>
                            </button>
                          </div>

                          <div class="contain-name">
                            <div>
                              <h4>{i.name}</h4>

                              <div class="since-number">
                                <h6>{i.language}</h6>
                              </div>

                              <div class="since-number">
                                <h6>{i.role}</h6>
                              </div>
                            </div>
                          </div>
                        </div>

                        <br />

                        <div
                          class="grid-contain"
                          style={{ width: "100%", paddingBottom: "20px" }}
                        >
                          <div
                            class="seller-contact-details"
                            style={{ width: "60%", float: "left" }}
                          >
                            <div class="saller-contact">
                              <div class="seller-icon">
                                <i class="fa-solid fa-map-pin"></i>
                              </div>

                              <div class="contact-detail">
                                <h5>{i.experiance_year} </h5>
                              </div>
                            </div>

                            <div class="saller-contact">
                              <div class="seller-icon">
                                <i class="fa-solid fa-phone"></i>
                              </div>

                              <div class="contact-detail">
                                <h5>
                                  {" "}
                                  ₹ {i.chat_rate ? i.chat_rate : "0"}/Min
                                </h5>
                              </div>
                            </div>
                          </div>

                          <div
                            class="seller-contact-details"
                            style={{ width: "40%", float: "right" }}
                          >
                            <div class="saller-contact">
                              <img
                                onClick={() => {
                                  {
                                    walletAmnt > i.chat_rate
                                      ? navigate("/ChatForm")
                                      : alert("You have Insufficient balance");
                                  }
                                  localStorage.setItem(
                                    "chatdata",
                                    JSON.stringify(i)
                                  );
                                  localStorage.setItem("chatiddd", i._id); localStorage.setItem("chatrate", i.chat_rate);
                                  {
                                  }
                                }}
                                src="../assets/images/veg-3/category/chat.png"
                                class="img-fluid"
                                alt=""
                                style={{ height: "25px", marginLeft: "10px" }}
                              />
                            </div>

                            <div class="saller-contact">
                              <div
                                class="contact-detail"
                                style={{ marginLeft: "10px" }}
                              >
                                <h6> Chat</h6>
                              </div>
                            </div>
                          </div>
                        </div>

                        <br />
                        <br />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Chatastrologer;
