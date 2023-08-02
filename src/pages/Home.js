import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import React from "react";
// import { baseUrl } from "./baseUrl";
import Footer from "./Footer";
import Header1 from "./Header1";
import Home_banner from "./Home_banner";
import Live from "./Live";
import Home_banner_second from "./Home_banner_second";
import OnlineAustrology from "./OnlineAustrology";
import Horoscopes from "./Horoscopes";
import Panchang from "./Panchang";
import NakshatraMart from "./NakshatraMart";
import NakshatraPooja from "./NakshatraPooja";
import LatestBlog from "./LastestBlog";
import Reviews from "./Reviews";
import Setting from "./Setting";
import Astrology from "./Astrology";
import New from "./New";
import Celebrity from "./Celebrity";
import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
const iss=localStorage.getItem("_id")
  const userId = iss;
  
  useEffect(()=>{
    postData();
  })
  const postData = () => {
    
    axios
      .get("http://103.104.74.215:3012/api/user/get_astrologer_list")
      .then((res) => {
        setList(res.data.data);
        
      });
  };

  useEffect(() => {
    getData(0);
 
  }, []);


  const [errorMessage, setErrorMessage] = useState('');
  const [list, setList] = useState([]);
  let [_id, set_id] = useState(() => {
    let result = localStorage.getItem("_id");
    if (result != null) {
      return JSON.parse(result);
    } else {
      return [];
    }
  });

  const [liveAstrologer, setLiveAstrologer] = useState([]);
  const getData = () => {
    axios
      .get("http://103.104.74.215:3012/api/user/astrologer_live_list")
      .then((res) => setLiveAstrologer(res.data.data));
  };




  return (
    <div> 
      <Header1 />
      <Home_banner />
      <Live />
      <Home_banner_second />
      {/* <OnlineAustrology /> */}


      {/* {userId ? (
        <OnlineAustrology /> 
      ) : (
        <div>No data</div>
      )} */}



<section class="order-detail">
        <div class="container-fluid-lg">
          <div class="row g-sm-4 g-3">
            {/* <!-- Live session start --> */}

            <div class="col-xxl-6 col-xl-6 col-lg-6">
              <div class="title title-flex">
                <div>
                  <h2>Online Astrologers </h2>
                  <h4> Astrologers are Online</h4>
                </div>
                {errorMessage && <p>{errorMessage}</p>}
                <div class="timing-box">
                  <Link to="/AstrologersList">
                    <img 
                      src="../assets/images/veg-3/category/live_right_arrow.png"
                      class="img-fluid"
                      alt=""
                      style={{
                        height: "40px",
                        width: "40px",
                        marginRight: "20px",
                      }}
                    />
                  </Link>
                </div>
              </div>

     
              <div class="row g-sm-4 g-3">
                {" "}
               {list?.map((i) => {
                  return (
                    <div

                    class="col-xl-6 col-sm-6"
                    style={{ display: "flex", flexDirection: "row" }}
                    >
                      <div class="seller-grid-box seller-grid-box-1">
                        <div class="grid-image">
                          <div class="image">
                            <img onClick={() => {
                              localStorage.setItem("AstroData", JSON.stringify(i));
                              Navigate("/AstrologerDetail");
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
                                <h5> ₹ {i.video_rate ? i.video_rate : "0"}/Min</h5>
                              </div>
                            </div>
                          </div>

                          <div
                            class="seller-contact-details"
                            style={{ width: "40%", float: "right" }}
                          >
                            <Link to='/AstrologersList'>
                            <div class="saller-contact">
                              {i.call_status === "1" ? (
                                <img
                                  
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
                                  style={{ height: "25px", background: '#d99f46', borderRadius: '50px' }}
                                />
                              )}

                             <Link to='/chatastrologer'>
                              <img
                               
                                src="../assets/images/veg-3/category/chat.png"
                                class="img-fluid"
                                alt=""
                                style={{ height: "25px", marginLeft: "10px" }}
                              />
                              </Link>
                            </div>
                            </Link>

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


            </div>

            {/* <!--   Live session end --> */}

            <div class="col-xxl-6 col-xl-6 col-lg-6">
              <div class="title title-flex">
                <div>
                  <h2>Live Sessions</h2>
                  <h4> Astrologers are live now</h4>
                </div>

                <div class="timing-box">
                  <Link to="/Astrolive">
                    <img
                      src="../assets/images/veg-3/category/live_right_arrow.png"
                      class="img-fluid"
                      alt=""
                      style={{ height: "40px", width: "40px" }}
                    />
                  </Link>
                </div>
              </div>

              <div class="row g-sm-4 g-3">
                {liveAstrologer?.slice(0, 4).map((i) => (
                  <div class="col-xl-6 col-sm-6" style={{}}>
                    <div
                      class="product-box-4"
                      style={{
                        background: "linear-gradient(45deg, #8b6704, #493939)",
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

              <br />
            </div>
          </div>
        </div>
      </section>











      <Horoscopes />
      <Panchang />
      <NakshatraMart />
      <NakshatraPooja />
      <LatestBlog />
      <Reviews />
      <Astrology />
      <Celebrity/>
      <New />
      <Footer />
      <Setting />
    </div>
  );
}

export default Home;
