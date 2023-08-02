import { Link } from "react-router-dom";
import React from "react";
import Live from "./Live";
import OnlineAustology from "./OnlineAustrology";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Tarot_content = () => {
  const [responseData, setResponseData] = useState("");
  console.log("state sadasd", responseData);

  useEffect(() => {
    const api = "tarot_predictions";
    const userId = "623869";
    const apiKey = "46046d17a932151518470e3a08a1665a";

    const auth = "Basic " + btoa(userId + ":" + apiKey);
    const data = {
      love: 13,
      career: 2,
      finance: 54,
    };
    axios
      .post(`https://json.astrologyapi.com/v1/${api}`, data, {
        headers: {
          authorization: auth,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResponseData(response.data);
        console.log("Api responseasdresponseeessad", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  
  // useEffect(() => {
  //   getData(0);
  //   postData();
  // }, []);

  // const navigate = useNavigate();

  // const [list, setList] = useState([]);
  // let [_id, set_id] = useState(() => {
  //   let result = localStorage.getItem("_id");
  //   if (result != null) {
  //     return JSON.parse(result);
  //   } else {
  //     return [];
  //   }
  // });

  // const [liveAstrologer, setLiveAstrologer] = useState([]);
  // const getData = () => {
  //   axios
  //     .get("http://103.104.74.215:3012/api/user/astrologer_live_list")
  //     .then((res) => setLiveAstrologer(res.data.data));
  // };

  // const postData = () => {
  //   const item = {
  //     user_id: _id,
  //   };
  //   axios.
  //     get("http://103.104.74.215:3012/api/user/get_astrologer_list/")
      
  //     .then((res) => {
  //       setList(res.data.data);
  //     });
  // };
  // const [loader, setLoader] = useState(false);

  // const [walletAmnt, setWalletAmnt] = useState([]);
  // useEffect(() => {
  //   postRech();
  // }, []);
  // const postRech = () => {
  //   const item = {
  //     user_id: _id,
  //   };
  //   axios
  //     .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
  //     .then((res) => setWalletAmnt(res.data.data.ammount));
  // };


  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section class="home-section pt-2">
        <div class="container-fluid-lg">
          <div class="row g-4">
            <div class="col-xl-12 ratio_30">
              <div class="home-contain h-100">
                <div class="h-100">
                  <img
                    style={{ width: "100%", height: "40vh" }}
                    src="../assets/images/vegetable/banner/1.jpg"
                    class="bg-img blur-up lazyload"
                    alt=""
                  />
                </div>
                <div
                  class="home-detail p-center-left w-60"
                  style={{ marginLeft: "27%" }}
                >
                  <div>
                    <h3 class="lh-base fw-bold text-white ">
                      <span>Problems in life ?</span>
                    </h3>
                    <h3 class="lh-base fw-bold text-white ">
                      Best Astrologer Available for you
                    </h3>

                    <br />

                    <h3 class="lh-base fw-bold text-white">
                      <span class="daily">
                        <button
                          onclick="location.href = 'shop-top-filter1.html';"
                          class="btn text-white btn-md mt-xxl-4 mt-2 home-button mend-auto theme-bg-color"
                          style={{ marginLeft: "15px" }}
                        >
                          Consult Tarot Card Reader
                        </button>{" "}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Banner Section End --> */}

      {/* <!-- Blog Section Start --> */}
      <section class="blog-section">
        <div class="container-fluid-lg">
          <div class="title">
            <h2>TAROT</h2>

            <p>
              Tarot reading is a powerful form of divination that use an ancient
              deck of cards to help you find answers to your questions about
              your love, relationships, career, wellness and more.{" "}
            </p>
          </div>

          <div
            class="slider-3 arrow-slider"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <div class="blog-box ratio_50" style={{ margin: "5px" }}>
                <div class="blog-box-image text-center">
                  <Link to="/Onecard">
                    {/* <img style={{width:'100%'}}
                      src="../assets/images/blog/card.jpg"
                      class="img-fluid bg-img"
                      alt=""
                    /> */}

                    <img
                      style={{ width: "100%" , height:'360px' }}
                      src="../assets/images/inner-page/tarot6.jpeg"
                      class="img-fluid bg-img"
                      alt=""
                    />
                  </Link>
                </div>

                <div class="blog-contain">
                  <div>
                    <Link to="/Onecard">
                      <h3>One Card Tarot Reading</h3>
                    </Link>
                  </div>

                  <Link to="/Onecard">
                    <p>
                      Need answers or solutions to your problems in life as soon
                      as possible?....
                    </p>
                  </Link>
                  <button class="blog-button">
                    {" "}
                    <Link to="/Onecard">Read More</Link>
                    <i class="fa-solid fa-right-long"></i>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div class="blog-box ratio_50" style={{ margin: "5px" }}>
                <div class="blog-box-image text-center">
                  <Link to="/AstrologersList">
                    <img
                      style={{ width: "100%" , height:'360px'}}
                      src="../assets/images/blog/card.jpg"
                      class="img-fluid bg-img"
                      alt=""
                    />
                  </Link>
                </div>

                <div class="blog-contain">
                  <div>
                    <Link to="/AstrologersList">
                      <h3>Talk To Best Astrologer</h3>
                    </Link>
                  </div>

                  <Link to="/AstrologersList">
                    <p>
                      Need answers or solutions to your problems in life as soon
                      as possible?....
                    </p>
                  </Link>
                  <button class="blog-button">
                    <Link to="/AstrologersList">Read More</Link>
                    <i class="fa-solid fa-right-long"></i>
                  </button>
                </div>
              </div>
            </div>

            <div>
              {/* <div class="blog-box ratio_50" style={{margin:'5px'}}>
                <div class="blog-box-image text-center ">
                  <a href="#">
                    <img style={{width:'100%'}}
                      src="../assets/images/blog/card.jpg"
                      class="img-fluid bg-img"
                      alt=""
                    />
                  </a>
                </div>

                <div class="blog-contain">
                  <div>
                    <a href="#">
                      <h3>Three Card Tarot Reading</h3>
                    </a>
                  </div>

                  <a href="#">
                    <p>
                      Need answers or solutions to your problems in life as soon
                      as possible?....
                    </p>
                  </a>
                  <button
                    onclick="location.href = 'blog-detail.html';"
                    class="blog-button"
                  >
                    Read More
                    <i class="fa-solid fa-right-long"></i>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Blog Section End --> */}
      {/* <!-- Blog Section Start --> */}

      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row g-4">
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-2">
              <div class="row g-4 ratio_65">
                <div
                  class="slider-3 arrow-slider"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div style={{ width: "30%" }}>
                    <div class="blog-box ratio_50">
                      <div class="blog-box-image" style={{ height: "150px" }}>
                        <Link to="#">
                          <img
                            width={"100%"}
                            src="../assets/images/inner-page/lovehs.jpg"
                            class="bg-img"
                            alt=""
                          />
                        </Link>
                      </div>

                      <div
                        class="blog-contain"
                        style={{
                          overflowY: "scroll",
                          position: "relative",
                          height: "350px",
                        }}
                      >
                        <div>
                          <Link to="#">
                            <h3>LOVE</h3>
                          </Link>
                        </div>

                        <div style={{ position: "absolute" }}>
                          <Link to="#">
                            <ul>
                              <table class="home_table">
                                <tbody>
                                  <tr>
                                    <td style={{ textAlign: "justify" }}>
                                      {responseData?.love}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </ul>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "30%" }}>
                    <div class="blog-box ratio_50">
                      <div class="blog-box-image" style={{ height: "150px" }}>
                        <Link to="#">
                          <img
                            width={"100%"}
                            src="../assets/images/blog/lunar.jpg"
                            class="bg-img"
                            alt=""
                          />
                        </Link>
                      </div>

                      <div
                        class="blog-contain"
                        style={{
                          overflowY: "scroll",
                          position: "relative",
                          height: "350px",
                        }}
                      >
                        <div>
                          <Link to="#">
                            <h3>CAREER</h3>
                          </Link>
                        </div>
                        <div style={{ position: "absolute" }}>
                          <Link to="#">
                            <ul>
                              <table class="home_table">
                                <tbody>
                                  <tr>
                                    <td style={{ textAlign: "justify" }}>
                                      {responseData?.career}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </ul>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "30%" }}>
                    <div class="blog-box ratio_50">
                      <div class="blog-box-image" style={{ height: "150px" }}>
                        <Link to="#">
                          <img
                            src="../assets/images/blog/askay.jpg"
                            class="bg-img"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div
                        class="blog-contain"
                        style={{
                          overflowY: "scroll",
                          position: "relative",
                          height: "350px",
                        }}
                      >
                        <div>
                          <Link to="#">
                            <h3>FINANCE</h3>
                          </Link>
                        </div>
                        <div style={{ position: "absolute" }}>
                          <Link to="#">
                            <ul>
                              <table class="home_table">
                                <tbody>
                                  <tr>
                                    <td style={{ textAlign: "justify" }}>
                                      {responseData?.finance}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </ul>
                          </Link>
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

     










      



     
      {/* <!-- Category Section Start --> */}

      <section>
        <div class="container-fluid-lg">
          <div class="title">
            <div class="row">
              <div class="col-lg-8">
                <h2>TAROT CARD READING</h2>

                <p>
                  Tarot Cards is an ancient divinatory system in which tarot
                  cards are used for gaining insights and to find out what the
                  future indicates. All this is based on the interpretation of
                  tarot cards. The meanings of the cards that we know of today
                  are credited to Cartomancer Jean-Baptiste Alliette (also known
                  as Etteilla) and Mlle Marie-Anne Adelaide Lenormand
                  (1776-1843). A traditional tarot deck comprises seventy eight
                  cards. The deck is further divided into Major Arcana and the
                  Minor Arcana. The Major Arcana has 22 cards and each card has
                  an interpretation that only one with an understanding of the
                  cards can help you figure out. Tarot cards can be used to
                  uncover secrets about a future event and can also be used to
                  plan one`s future. Each Major Arcana card represents a scene
                  featuring a person or several people along with various
                  elements.{" "}
                </p>

                <p>
                  {" "}
                  56 suit cards comprise the Minor Arcana, also referred to as
                  the lesser arcana. There are four suits with 14 cards in each
                  suit. The suits are Wands, Cups, Swords and Pentacles. These
                  cards too, form an integral part of any tarot reading.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Category Section End --> */}
    </>
  );
};

export default Tarot_content;
