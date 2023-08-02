import React, { useEffect, useState } from "react";

import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header1 from "./Header1";
function AstrologersList() {
  const navigate = useNavigate();
  const [liveAstrologer, setliveAstrologer] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://103.104.74.215:3012/api/user/astrologer_live_list")
      .then((res) => {
        
        if (res.data.result) setliveAstrologer(res.data.data);
      });
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

                 {/* <div class="ms-auto d-flex align-items-center">
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

              <div class="row g-sm-4 g-3">
                {" "}
                {liveAstrologer?.map((i) => (
                  <div class="row g-sm-4 g-3" style={{ width: "50%" }}>
                    <div class="col-xl-6 col-sm-6" style={{}}>
                      <div
                        class="product-box-4"
                        style={{
                          background:
                            "linear-gradient(45deg, #8b6704, #493939)",
                        }}
                      >
                        <div class="grid-image">
                          <div class="image">
                            <img
                              src={
                                "http://103.104.74.215:3012/uploads/" +
                                i.astrologer_data.profile_pic
                              }
                              class="img-fluid"
                              alt=""
                              style={{
                                height: "55px",
                                width: "55px",
                                borderRadius: "100%",
                              }}
                            />
                          </div>

                          <div class="contain-name">
                            <div>
                              <h4 style={{ color: "white" }}>
                                {i.astrologer_data.name}{" "}
                              </h4>

                              <div class="since-number">
                                <h6 style={{ color: "white" }}>
                                  Spiritual Guidance
                                </h6>
                              </div>
                              <br />
                              <button
                                onclick="location.href = 'astro_live.html';"
                                class="nav-item"
                                style={{
                                  borderRadius: "15px",
                                  width: "60px",
                                  height: "30px",
                                  boxShadow: "1px",
                                  marginTop: "-30px",
                                }}
                              >
                                Live
                                <li>
                                  <i
                                    class="fa-solid fa-circle"
                                    style={{ width: "10px", color: "green" }}
                                  ></i>
                                </li>
                              </button>
                            </div>
                          </div>
                        </div>

                        <br />

                        <div class="grid-contain" style={{ width: "100%" }}>
                          <div class="seller-contact-details">
                            <div class="saller-contact" style={{}}>
                              <a href="product-4-image.html">
                                <img
                                  src="../assets/images/veg-3/category/calling.png"
                                  class="img-fluid"
                                  alt=""
                                  style={{ height: "25px" }}
                                />
                              </a>

                              <a href="product-4-image.html">
                                <img
                                  src="../assets/images/veg-3/category/chat.png"
                                  class="img-fluid"
                                  alt=""
                                  style={{ height: "25px", marginLeft: "10px" }}
                                />
                              </a>

                              <a href="product-4-image.html">
                                <img
                                  src="../assets/images/veg-3/category/chat.png"
                                  class="img-fluid"
                                  alt=""
                                  style={{
                                    height: " 25px",
                                    marginLeft: "10px",
                                  }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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

export default AstrologersList;
