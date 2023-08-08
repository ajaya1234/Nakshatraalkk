import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header1 from "./Header1";
function AstrologersList() {
  const navigate = useNavigate();
  const Navigate = useNavigate();
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
                    <Link to='#'>
                      <i class="fa-solid fa-house"></i> Join On Live With Astrologer
                    </Link>
                  </div>

                 
                </div>
              </div>

              <div class="row g-sm-4 g-3">
                {" "}
                {liveAstrologer?.map((i) => (
                  <div class="col-xl-6 col-sm-6" style={{ width: "25%" }}>
                  <div class="seller-grid-box seller-grid-box-1">
                    <div class="grid-image" onClick={() => {
                                

                                localStorage.setItem(
                                  "liveData",
                                  JSON.stringify(i)
                                );
                                Navigate("/Streaming");
                              }}>
                      <div class="image"  >
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
                            <h4 style={{ color: "black" }}>
                              {i.astrologer_data.name}{" "}
                            </h4>

                            <div class="since-number">
                              <h6 style={{ color: "black" }}>
                                Spiritual Guidance
                              </h6>
                            </div>
                            <br />
                            <button
                              onClick={() => {
                                

                                localStorage.setItem(
                                  "liveData",
                                  JSON.stringify(i)
                                );
                                Navigate("/Streaming");
                              }}
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
                            <Link to="#">
                              <img
                                src="../assets/images/veg-3/category/calling.png"
                                class="img-fluid"
                                alt=""
                                style={{ height: "25px" }}
                              />
                            </Link>

                            <Link to="#">
                              <img
                                src="../assets/images/veg-3/category/chat.png"
                                class="img-fluid"
                                alt=""
                                style={{ height: "25px", marginLeft: "10px" }}
                              />
                            </Link>

                            <Link to="#">
                              <img
                                src="../assets/images/veg-3/category/chat.png"
                                class="img-fluid"
                                alt=""
                                style={{ height: " 25px", marginLeft: "10px" }}
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                 
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


export default AstrologersList;
