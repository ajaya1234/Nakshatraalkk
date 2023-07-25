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

  const postData = () => {
    const item = {
      user_id: _id,
    };
    axios
      .post("http://103.104.74.215:3012/api/user/astrologer_list/", item)
      .then((res) => {
        setList(res.data.data);
      });
  };

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
                  


                  {/*<div class="ms-auto d-flex align-items-center">
                    <div class="category-dropdown me-md-3">
                      <h5 class="text-content">Sort By :</h5>

                      <div class="dropdown">
                        <button
                          class="dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                        >
                          <span>Country/City</span>{" "}
                          <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              class="dropdown-item"
                              id="pop"
                              href="javascript:void(0)"
                            >
                              Indore
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="low"
                              href="javascript:void(0)"
                            >
                              Delhi
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="high"
                              href="javascript:void(0)"
                            >
                              Mumbai
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="rating"
                              href="javascript:void(0)"
                            >
                              Banaras
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="aToz"
                              href="javascript:void(0)"
                            >
                              Ujjain
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="zToa"
                              href="javascript:void(0)"
                            >
                              Bhopal
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="off"
                              href="javascript:void(0)"
                            >
                              Jabalpur
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="dropdown">
                        <button
                          class="dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton2"
                          data-bs-toggle="dropdown"
                        >
                          <span>Category wise</span>{" "}
                          <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton2"
                        >
                          <li>
                            <a
                              class="dropdown-item"
                              id="pop"
                              href="javascript:void(0)"
                            >
                              Vadic
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="low"
                              href="javascript:void(0)"
                            >
                              Vastu
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="high"
                              href="javascript:void(0)"
                            >
                              Nadi
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="rating"
                              href="javascript:void(0)"
                            >
                              Vastu
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="dropdown">
                        <button
                          class="dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                        >
                          <span>Most Popular</span>{" "}
                          <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              class="dropdown-item"
                              id="pop"
                              href="javascript:void(0)"
                            >
                              Popularity
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="low"
                              href="javascript:void(0)"
                            >
                              Low - High Price
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="high"
                              href="javascript:void(0)"
                            >
                              High - Low Price
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="rating"
                              href="javascript:void(0)"
                            >
                              Average Rating
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="aToz"
                              href="javascript:void(0)"
                            >
                              A - Z Order
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="zToa"
                              href="javascript:void(0)"
                            >
                              Z - A Order
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              id="off"
                              href="javascript:void(0)"
                            >
                              % Off - Hight To Low
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>*/}
  </div>
              </div>
              <br/>
              <div class="row g-sm-4 g-3">
                {" "}
                {list?.map((i) => {
                  return (
                    <div
                      
                      class="col-xl-6 col-sm-6"
                      style={{ width: "25%" }}
                    >
                      <div class="seller-grid-box seller-grid-box-1">
                        <div class="grid-image">
                          <div class="image">
                            <img onClick={() => {
                              localStorage.setItem("AstroData", JSON.stringify(i));
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
                            {/* <!--   <label class="product-label">380 Products</label> --> */}
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
                                <h5> ₹ {i.chat_rate ? i.chat_rate : "0"}/Min</h5>
                              </div>
                            </div>
                          </div>

                          <div
                            class="seller-contact-details"
                            style={{ width: "40%", float: "right" }}
                          >
                          <div class="saller-contact">
                          {/*<Link to="/videoCall">*/}
                            {i.call_status === "1" ? (
                              <img
                              onClick={() => {
                                {
                                  walletAmnt > i.video_rate
                                    ? navigate("/videoCall")
                                    : alert(
                                        "You have Insufficient balance"
                                      );
                                }

                                  localStorage.setItem(
                                    "vcdata",
                                    JSON.stringify(i)
                                  );
                                   {/*navigate("/videoCall");*/}
                                }}
                                src="../assets/images/veg-3/category/phone.png"
                                class="img-fluid"
                                alt=""
                                style={{ height: "25px" }}
                              />
                            ) : (
                              <img
                                src="../assets/images/veg-3/category/calling.png"
                                class="img-fluid"
                                alt=""
                                style={{ height: "25px", background:'#d99f46', borderRadius:'50px' }}
                              />
                            )}
                          {/*</Link>*/}

                          {/*<Link to="/chatform">*/}
                            <img
                              onClick={() => {
                                {
                                  walletAmnt > i.chat_rate
                                    ? navigate("/ChatForm")
                                    : alert(
                                        "You have Insufficient balance"
                                      );
                                }

                                localStorage.setItem(
                                  "chatdata",
                                  JSON.stringify(i)
                                );
                                
                              }}
                              src="../assets/images/veg-3/category/chat.png"
                              class="img-fluid"
                              alt=""
                              style={{ height: "25px", marginLeft: "10px" }}
                            />
                          {/*</Link>*/}
                        </div>

                        <div class="saller-contact">
                        <div class="contact-detail">
                          {i.call_status === "1" ? (
                            <h6> Call</h6>
                          ) : (
                            <h6> Off</h6>
                          )}
                        </div>

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

              {/*<nav class="custome-pagination">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a
                      class="page-link"
                      href="javascript:void(0)"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      <i class="fa-solid fa-angles-left"></i>
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0)">
                      1
                    </a>
                  </li>
                  <li class="page-item" aria-current="page">
                    <a class="page-link" href="javascript:void(0)">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0)">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0)">
                      <i class="fa-solid fa-angles-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>*/}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Chatastrologer;
