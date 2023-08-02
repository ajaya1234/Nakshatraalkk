import React, { useEffect, useState } from "react";
import Header1 from "./Header1";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AstrologerDetail() {
  const dataa = localStorage.getItem("AstroData");
  const parse = JSON.parse(dataa);

  const [details, setDetails] = useState(parse);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
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
      _id: details?._id,
    };
    axios
      .post(
        "http://103.104.74.215:3012/api/user/astrologer_list_details/",
        item
      )
      .then((res) => {
        setList(res.data.data);
      });
  };

  useEffect(() => {}, []);

  useEffect(() => {
    postData();
  }, []);

  const parseee = localStorage.getItem("vcdata");

  const parsed = JSON.parse(parseee);
  const [data, setData] = useState(parsed);

  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [walletAmnt, setWalletAmnt] = useState();

  let [finltime, setfinltime] = useState();
  useEffect(() => {
    let totalminute = walletAmnt / data?.video_rate;
    let finl_time = Math.floor(totalminute);

    setfinltime(finl_time);
  }, [walletAmnt]);

  useEffect(() => {
    postRech();
  }, [, walletAmnt, data?.video_rate]);

  const postRech = () => {
    const iddofuser=localStorage.getItem("iddofuser")
    const item = {
      // user_id: _id,

      user_id :iddofuser
    };
    axios
      .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
      .then((res) => setWalletAmnt(res.data.data.ammount));
  };


  const tokenGen = () => {
    const assadas = localStorage.getItem("vcidddata")
    
    const userdata = {
      user_id: _id,
      astrologer_id: assadas,
      //astrologer_id: data?._id,
      channel_name: "test",
      //final_time: "2",
      
      final_time: finltime.toString(),

    };
    console.log("userdayaaaaa",userdata)
    localStorage.setItem("totalminute", finltime)
    // console.log("user sdasdsdasdsd", userdata)
    axios
      .post('http://103.104.74.215:3012/api/user/generate_agrora_token_calling', userdata)
      .then((res) => {
        console.log(" dataaa", res)
        if (res.data.result) {
          localStorage.setItem('videoatro_token', res.data.token);
          setTimeout(() => {
            navigate(`/VideoCall`)
          }, 1000);
        }
      });
  }






  // const tokenGen = () => {
  //   const iddofuser=localStorage.getItem("iddofuser")
  //   const userdata = {
  //      user_id: _id,
  //     //user_id: iddofuser,
  //     astrologer_id: data._id,
  //     channel_name: "test",
  //     //final_time: "2",

  //     final_time: finltime.toString(),
  //   };
  //   localStorage.setItem("totalminute", finltime);

  //   axios
  //     .post(
  //       "http://103.104.74.215:3012/api/user/generate_agrora_token_calling",
  //       userdata
  //     )
  //     .then((res) => {
       
  //       if (res.data.result) {
  //         localStorage.setItem("videoatro_token", res.data.token);
  //         setTimeout(() => {
  //            navigate(`/VideoCall`);
  //         }, 1000);
  //       } else {
  //         setErrorMessage("Astrologer is already live");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error generating token:", error);
  //     });
  // };

  return (
    <div>
      <Header1 />

      

      <section class="breadscrumb-section pt-0">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-12">
              <div class="breadscrumb-contain">
                <h2>Talk with Astrologer</h2>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product-section">
        <div class="container-fluid-lg">
          <div class="row g-4">
            <div
              class="col-xl-4"
              style={{
                border: "1 solid #dfdfdf",
                borderRadius: 20,
                marginRight: "3%",
                background: "linear-gradient(45deg, #8b6704, #493939)",
              }}
            >
              <div class="product-left-box">
                <div class="row g-sm-6 g-2">
                  <div
                    class="product-box-4"
                    style={{
                      background: "linear-gradient(45deg, #8b6704, #493939)",
                      height: 400,
                    }}
                  >
                    <div class="grid-image">
                      <div class="image">
                        <img
                          src={
                            "http://103.104.74.215:3012/uploads/" +
                            details.profile_pic
                          }
                          class="img-fluid"
                          alt=""
                          style={{
                            borderRadius: "100%",
                            height: 180,
                            width: 180,
                          }}
                        />
                      </div>

                      <div class="contain-name">
                        <div>
                          <h4 style={{ color: "white" }}>{details?.name} </h4>

                          <div class="since-number">
                            <h6 style={{ color: "white" }}>{details?.role}</h6>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>

                    <br />

                    <div
                      style={{
                        width: "100%",
                        height: 50,
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div
                        onClick={() => { { walletAmnt >= list.video_rate ? (tokenGen()) : alert("You have Insufficient balance"); } localStorage.setItem("vcdata", JSON.stringify(list)); localStorage.setItem("vcidddata", list._id); localStorage.setItem("videorate", list.video_rate); {/*navigate("/videoCall");*/ } }}
                        style={{
                          width: "45%",
                          border: "1px solid #ffcc00",
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "row",
                          alignItems: "center",
                          borderRadius: 50,
                          padding: 5,
                        }}
                      >
                        <h4 style={{ color: "white" }}>Calling</h4>

                        <img
                          src="../assets/images/veg-3/category/calling.png"
                          class="img-fluid"
                          alt=""
                          style={{ height: 35 }}
                        />
                      </div>

                      <div
                        onClick={() => {
                          {
                            walletAmnt > list.chat_rate
                              ? navigate("/ChatForm")
                              : alert("You have Insufficient balance");
                          }
                          localStorage.setItem(
                            "chatdata",
                            JSON.stringify(list)
                          );
                          {
                          }
                        }}
                        style={{
                          width: "45%",
                          border: "1px solid #ffcc00",
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "row",
                          alignItems: "center",
                          borderRadius: 50,
                          padding: 5,
                        }}
                      >
                        <h4 style={{ color: "white" }}>Chat</h4>
                        <img
                          src="../assets/images/veg-3/category/chat.png"
                          class="img-fluid"
                          alt=""
                          style={{ height: 35, marginLeft: 10 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-xl-7"
              style={{
                padding: "3%",
                borderRadius: 20,
                border: "1 solid #dfdfdf",
              }}
            >
              <div class="right-box-contain p-sticky wow fadeInUp">
                <h2 class="name_of_astrologer">
                  {details.name}{" "}
                  <span class="famous_icon">
                    <img
                      alt="verified"
                      loading="lazy"
                      height="20"
                      width="20"
                      src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/astrologer_profile/verified.webp"
                    />
                  </span>
                </h2>

                <p class="name">{details.role}</p>
                <p class="name">{details.language}</p>
                <div class="experience_astrologer">
                  <i class="fa fa-graduation-cap"></i> Exp:{" "}
                  {details.experiance_year}{" "}
                </div>
                <br />
                <h3 class="theme-color price">
                  <img
                    src="../assets/images/veg-3/category/phone.png"
                    class="img-fluid"
                    alt=""
                    style={{ height: 25 }}
                  />
                  ₹ {details.video_rate}/Min
                </h3>
                <br />
                <div class="price-rating">
                  <div class="product-rating custom-rate">
                    <ul class="rating">
                      <li>
                        <i
                          style={{ color: "gold" }}
                          class="fa fa-star"
                          aria-hidden="true"
                        ></i>
                      </li>
                      <li>
                        <i
                          style={{ color: "gold" }}
                          class="fa fa-star"
                          aria-hidden="true"
                        ></i>
                      </li>
                      <li>
                        <i
                          style={{ color: "gold" }}
                          class="fa fa-star"
                          aria-hidden="true"
                        ></i>
                      </li>
                      <li>
                        <i
                          style={{ color: "gold" }}
                          class="fa fa-star"
                          aria-hidden="true"
                        ></i>
                      </li>
                      <li>
                        <i
                          style={{ color: "gold" }}
                          class="fa fa-star-o"
                          aria-hidden="true"
                        ></i>
                      </li>
                    </ul>
                    <span class="review">{details.review} Customer Review</span>
                  </div>
                </div>

                <div class="procuct-contain">
                  <p>{details.description}</p>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="product-section-box">
                <ul class="nav nav-tabs">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#review"
                      type="button"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                    >
                      Review
                    </button>
                  </li>
                </ul>

                <div class="tab-content custom-tab" id="myTabContent">
                  <div
                    class=""
                    id="review"
                    role="tabpanel"
                    aria-labelledby="review-tab"
                  >
                    <div class="review-box">
                      <div class="row g-4">
                        <div class="col-xl-6">
                          <div class="review-title">
                            <h4 class="fw-500">Customer reviews</h4>
                          </div>

                          <div class="d-flex">
                            <div class="product-rating">
                              <ul class="rating">
                                <li>
                                  <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                  <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                  <i data-feather="star" class="fill"></i>
                                </li>
                                <li>
                                  <i data-feather="star"></i>
                                </li>
                                <li>
                                  <i data-feather="star"></i>
                                </li>
                              </ul>
                            </div>
                            <h6 class="ms-3">{details.rating} Out Of 5</h6>
                          </div>

                          <div class="rating-box">
                            <ul>
                              <li>
                                <div class="rating-list">
                                  <h5>5 Star</h5>
                                  <div class="progress">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      style={{ width: "68%" }}
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    >
                                      68%
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div class="rating-list">
                                  <h5>4 Star</h5>
                                  <div class="progress">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      style={{ width: "67%" }}
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    >
                                      67%
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div class="rating-list">
                                  <h5>3 Star</h5>
                                  <div class="progress">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      style={{ width: "42%" }}
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    >
                                      42%
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div class="rating-list">
                                  <h5>2 Star</h5>
                                  <div class="progress">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      style={{ width: "30%" }}
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    >
                                      30%
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div class="rating-list">
                                  <h5>1 Star</h5>
                                  <div class="progress">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      style={{ width: "24%" }}
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    >
                                      24%
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="review-title">
                            <h4 class="fw-500">Customer questions & answers</h4>
                          </div>

                          <div class="review-people">
                            <ul class="review-list">
                              <li>
                                <div class="people-box">
                                  <div>
                                    <div class="people-image">
                                      <img
                                        src="../assets/images/review/1.jpg"
                                        class="img-fluid blur-up lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>

                                  <div class="people-comment">
                                    <a class="name" href="javascript:void(0)">
                                      Tracey
                                    </a>
                                    <div class="date-time">
                                      <h6 class="text-content">
                                        14 Jan, 2022 at 12.58 AM
                                      </h6>

                                      <div class="product-rating">
                                        <ul class="rating">
                                          <li>
                                            <i
                                              data-feather="star"
                                              class="fill"
                                            ></i>
                                          </li>
                                          <li>
                                            <i
                                              data-feather="star"
                                              class="fill"
                                            ></i>
                                          </li>
                                          <li>
                                            <i
                                              data-feather="star"
                                              class="fill"
                                            ></i>
                                          </li>
                                          <li>
                                            <i data-feather="star"></i>
                                          </li>
                                          <li>
                                            <i data-feather="star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>

                                    <div class="reply">
                                      <p>
                                        Icing cookie carrot cake chocolate cake
                                        sugar plum jelly-o danish. Dragée dragée
                                        shortbread tootsie roll croissant muffin
                                        cake I love gummi bears. Candy canes ice
                                        cream caramels tiramisu marshmallow cake
                                        shortbread candy canes cookie.
                                        <a href="javascript:void(0)">Reply</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div class="people-box">
                                  <div>
                                    <div class="people-image">
                                      <img
                                        src="../assets/images/review/2.jpg"
                                        class="img-fluid blur-up lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>

                                  <div class="people-comment">
                                    <a class="name" href="javascript:void(0)">
                                      Olivia
                                    </a>
                                    <div class="date-time">
                                      <h6 class="text-content">
                                        01 May, 2022 at 08.31 AM
                                      </h6>
                                      <div class="product-rating">
                                        <ul class="rating">
                                          <li>
                                            <i
                                              data-feather="star"
                                              class="fill"
                                            ></i>
                                          </li>
                                          <li>
                                            <i
                                              data-feather="star"
                                              class="fill"
                                            ></i>
                                          </li>
                                          <li>
                                            <i
                                              data-feather="star"
                                              class="fill"
                                            ></i>
                                          </li>
                                          <li>
                                            <i data-feather="star"></i>
                                          </li>
                                          <li>
                                            <i data-feather="star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>

                                    <div class="reply">
                                      <p>
                                        Tootsie roll cake danish halvah powder
                                        cake. Tootsie roll candy marshmallow
                                        cookie brownie apple pie pudding brownie
                                        chocolate bar. Jujubes gummi bears I
                                        love powder danish oat cake tart
                                        croissant.
                                        <a href="javascript:void(0)">Reply</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div class="people-box">
                                  <div>
                                    <div class="people-image">
                                      <img
                                        src="../assets/images/review/3.jpg"
                                        class="img-fluid blur-up lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>

                                  <div class="people-comment">
                                    <a class="name" href="javascript:void(0)">
                                      Gabrielle
                                    </a>
                                    <div class="date-time">
                                      <h6 class="text-content">
                                        21 May, 2022 at 05.52 PM
                                      </h6>

                                      <div class="product-rating">
                                        <ul class="rating">
                                          <li>
                                            <i
                                              data-feather="star"
                                              class="fill"
                                            ></i>
                                          </li>
                                          <li>
                                            <i
                                              data-feather="star"
                                              class="fill"
                                            ></i>
                                          </li>
                                          <li>
                                            <i
                                              data-feather="star"
                                              class="fill"
                                            ></i>
                                          </li>
                                          <li>
                                            <i data-feather="star"></i>
                                          </li>
                                          <li>
                                            <i data-feather="star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>

                                    <div class="reply">
                                      <p>
                                        Biscuit chupa chups gummies powder I
                                        love sweet pudding jelly beans. Lemon
                                        drops marzipan apple pie gingerbread
                                        macaroon croissant cotton candy pastry
                                        wafer. Carrot cake halvah I love tart
                                        caramels pudding icing chocolate gummi
                                        bears. Gummi bears danish cotton candy
                                        muffin marzipan caramels awesome feel.{" "}
                                        <a href="javascript:void(0)">Reply</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <div
        class="modal location-modal fade theme-modal"
        id="locationModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Choose your Delivery Location
              </h5>
              <p class="mt-1 text-content">
                Enter your address and we will specify the offer for your area.
              </p>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="location-list">
                <div class="search-input">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search Your Area"
                  />
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div class="disabled-box">
                  <h6>Select a Location</h6>
                </div>

                <ul class="location-select custom-height">
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Alabama</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Arizona</h6>
                      <span>Min: $150</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>California</h6>
                      <span>Min: $110</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Colorado</h6>
                      <span>Min: $140</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Florida</h6>
                      <span>Min: $160</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Georgia</h6>
                      <span>Min: $120</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Kansas</h6>
                      <span>Min: $170</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Minnesota</h6>
                      <span>Min: $120</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>New York</h6>
                      <span>Min: $110</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Washington</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade theme-modal view-modal"
        id="view"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header p-0">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="row g-sm-4 g-2">
                <div class="col-lg-6">
                  <div class="slider-image">
                    <img
                      src="../assets/images/product/category/1.jpg"
                      class="img-fluid blur-up lazyload"
                      alt=""
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="right-sidebar-modal">
                    <h4 class="title-name">
                      Peanut Butter Bite Premium Butter Cookies 600 g
                    </h4>
                    <h4 class="price">$36.99</h4>
                    <div class="product-rating">
                      <ul class="rating">
                        <li>
                          <i data-feather="star" class="fill"></i>
                        </li>
                        <li>
                          <i data-feather="star" class="fill"></i>
                        </li>
                        <li>
                          <i data-feather="star" class="fill"></i>
                        </li>
                        <li>
                          <i data-feather="star" class="fill"></i>
                        </li>
                        <li>
                          <i data-feather="star"></i>
                        </li>
                      </ul>
                      <span class="ms-2">8 Reviews</span>
                      <span class="ms-2 text-danger">
                        6 sold in last 16 hours
                      </span>
                    </div>

                    <div class="product-detail">
                      <h4>Product Details :</h4>
                      <p>
                        Candy canes sugar plum tart cotton candy chupa chups
                        sugar plum chocolate I love. Caramels marshmallow icing
                        dessert candy canes I love soufflé I love toffee.
                        Marshmallow pie sweet sweet roll sesame snaps tiramisu
                        jelly bear claw. Bonbon muffin I love carrot cake sugar
                        plum dessert bonbon.
                      </p>
                    </div>

                    <ul class="brand-list">
                      <li>
                        <div class="brand-box">
                          <h5>Brand Name:</h5>
                          <h6>Black Forest</h6>
                        </div>
                      </li>

                      <li>
                        <div class="brand-box">
                          <h5>Product Code:</h5>
                          <h6>W0690034</h6>
                        </div>
                      </li>

                      <li>
                        <div class="brand-box">
                          <h5>Product Type:</h5>
                          <h6>White Cream Cake</h6>
                        </div>
                      </li>
                    </ul>

                    <div class="select-size">
                      <h4>Cake Size :</h4>
                      <select class="form-select select-form-size">
                        <option selected>Select Size</option>
                        <option value="1.2">1/2 KG</option>
                        <option value="0">1 KG</option>
                        <option value="1.5">1/5 KG</option>
                        <option value="red">Red Roses</option>
                        <option value="pink">With Pink Roses</option>
                      </select>
                    </div>

                    <div class="modal-button">
                      <button
                        onclick="location.href = 'cart.html';"
                        class="btn btn-md add-cart-button icon"
                      >
                        Add To Cart
                      </button>
                      <button
                        onclick="location.href = 'product-left.html';"
                        class="btn theme-bg-color view-button icon text-white fw-bold btn-md"
                      >
                        View More Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade theme-modal deal-modal"
        id="deal-box"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <div>
                <h5 class="modal-title w-100" id="deal_today">
                  Deal Today
                </h5>
                <p class="mt-1 text-content">Recommended deals for you.</p>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="deal-offer-box">
                <ul class="deal-offer-list">
                  <li class="list-1">
                    <div class="deal-offer-contain">
                      <a href="shop-left-sidebar.html" class="deal-image">
                        <img
                          src="../assets/images/vegetable/product/10.png"
                          class="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" class="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>

                  <li class="list-2">
                    <div class="deal-offer-contain">
                      <a href="shop-left-sidebar.html" class="deal-image">
                        <img
                          src="../assets/images/vegetable/product/11.png"
                          class="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" class="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>

                  <li class="list-3">
                    <div class="deal-offer-contain">
                      <a href="shop-left-sidebar.html" class="deal-image">
                        <img
                          src="../assets/images/vegetable/product/12.png"
                          class="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" class="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>

                  <li class="list-1">
                    <div class="deal-offer-contain">
                      <a href="shop-left-sidebar.html" class="deal-image">
                        <img
                          src="../assets/images/vegetable/product/13.png"
                          class="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" class="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="add-cart-box">
        <div class="add-iamge">
          <img
            src="../assets/images/cake/pro/1.jpg"
            class="img-fluid blur-up lazyload"
            alt=""
          />
        </div>

        <div class="add-contain">
          <h6>Added to Cart</h6>
        </div>
      </div>

      <div class="theme-option">
        <div class="setting-box">
          <button class="btn setting-button">
            <i class="fa-solid fa-gear"></i>
          </button>

          <div class="theme-setting-2">
            <div class="theme-box">
              <ul>
                <li>
                  <div class="setting-name">
                    <h4>Color</h4>
                  </div>
                  <div class="theme-setting-button color-picker">
                    <form class="form-control">
                      <label for="colorPick" class="form-label mb-0">
                        Theme Color
                      </label>
                      <input
                        type="color"
                        class="form-control form-control-color"
                        id="colorPick"
                        value="#d99f46"
                        title="Choose your color"
                      />
                    </form>
                  </div>
                </li>

                <li>
                  <div class="setting-name">
                    <h4>Dark</h4>
                  </div>
                  <div class="theme-setting-button">
                    <button class="btn btn-2 outline" id="darkButton">
                      Dark
                    </button>
                    <button class="btn btn-2 unline" id="lightButton">
                      Light
                    </button>
                  </div>
                </li>

                <li>
                  <div class="setting-name">
                    <h4>RTL</h4>
                  </div>
                  <div class="theme-setting-button rtl">
                    <button class="btn btn-2 rtl-unline">LTR</button>
                    <button class="btn btn-2 rtl-outline">RTL</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="back-to-top">
          <a id="back-to-top" href="#">
            <i class="fas fa-chevron-up"></i>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AstrologerDetail;
