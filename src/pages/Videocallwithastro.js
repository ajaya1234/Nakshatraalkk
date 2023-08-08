


  import React, { useEffect, useState } from "react";

  import Footer from "./Footer";
  import axios from "axios";
  import { Link, useNavigate } from "react-router-dom";
  import Header1 from "./Header1";
  
  function Videocallwithastro() {
    const [error, setError] = useState("");
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
  
    const [walletAmnt, setWalletAmnt] = useState();
  
    useEffect(() => {
      setWalletAmnt(walletAmnt)
    }, [ walletAmnt])
  
    const rateofvideo = localStorage.getItem("videorate")
  
  
    useEffect(() => {
      postRech();
    }, [, walletAmnt, rateofvideo]);
  
    const postRech = () => {
      const item = {
        user_id: _id,
      };
      axios
        .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
        .then((res) => setWalletAmnt(res.data.data.ammount));
    };
  
    const tokenGen = (videorate,Id) => {
      let totalminute = walletAmnt / videorate;
      let finltime = Math.floor(totalminute);
      localStorage.setItem("totalminute", finltime);
      const assadas = localStorage.getItem("vcidddata");
      console.log("id ofv aassatrtolwewer",assadas)
      const userdata = {
        user_id: _id,
        astrologer_id: Id,
        channel_name: "test",
        final_time: finltime.toString(),
        type: 'video',
      };
      console.log("asdascalling tokennn", userdata);
      axios
        .post('http://103.104.74.215:3012/api/user/generate_agrora_token_calling', userdata)
        .then((res) => {
          console.log(" dataaa", res);
          if (res.data.result) {
            localStorage.setItem('videoatro_token', res.data.token);
            setTimeout(() => {
              navigate(`/VideoCall`);
            }, 1000);
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            setError("Astrologer Busy on Another call");
          } else {
            setError("An error occurred. Please try again later.");
          }
        });
    };
    



  
    // const tokenGen = (videorate) => {
    //   let totalminute = walletAmnt / videorate
    //   let finltime = Math.floor(totalminute)
    //   localStorage.setItem("totalminute", finltime)
    //   const assadas = localStorage.getItem("vcidddata")
    //   const userdata = {
    //     user_id: _id,
    //     astrologer_id: assadas,
    //     channel_name: "test",
    //     final_time: finltime.toString(),
    //     type:'video',
    //   };
    //   console.log("asdascalling tokennn",userdata)
    //   axios
    //     .post('http://103.104.74.215:3012/api/user/generate_agrora_token_calling', userdata)
    //     .then((res) => {
  
    //       console.log(" dataaa", res)
    //       if (res.data.result) {
    //         localStorage.setItem('videoatro_token', res.data.token);
    //         setTimeout(() => {
    //           navigate(`/VideoCall`)
    //         }, 1000);
    //       }

    //       .catch((error) => {
    //         if (error.response && error.response.status === 400) {
    //           setError("Bad Request: Invalid data or parameters.");
    //         } else {
    //           setError("An error occurred. Please try again later.");
    //         }
    //       });


    //       else {
            

    //         setError("Astrologer Busy on Another call");
    //         return;
    //       }
    //     });
    // }
  
  
  
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
                      <a href="shop-top-filter1.html">
                        <i class="fa-solid fa-house"></i> Video Call With Astrologer

                      </a>
                       <font style={{ color: "blue" }}>
                        {error && <p>{error}</p>}
                      </font>
                    </div>
                   
  
                  </div>
                </div>
                <br />
  
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
                              <div class="saller-contact">
                                {i.call_status === "1" ? (
                                  <img
                                    onClick={() => { { walletAmnt >= i.video_rate ? (tokenGen(i.video_rate,i._id)) : alert("You have Insufficient balance"); } localStorage.setItem("vcidddata", i._id); localStorage.setItem("videorate", i.video_rate); {/*navigate("/videoCall");*/ } }}
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
  
                                {/*<Link to="/chatform">*/}
                                <img
                                  // onClick={() => {
                                  //   {
                                  //     walletAmnt > i.chat_rate
                                  //       ? navigate("/ChatForm")
                                  //       : alert(
                                  //         "You have Insufficient balance"
                                  //       );
                                  //   }
  
                                  //   localStorage.setItem(
                                  //     "chatdata",
                                  //     JSON.stringify(i)
                                  //   );
  
                                  // }}
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
  
                
              </div>
            </div>
          </div>
        </section>
  
        <Footer />
      </div>
    );
  }
  
  export default Videocallwithastro;
  