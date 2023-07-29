import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import Header1 from "./Header1";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Horoscopes from "./Horoscopes";

const Horoscope_page = () => {
  const [responseData, setResponseData] = useState(null);
  const [zodiac, setZodiac] = useState("Aries");

  useEffect(() => {
    fetchData(zodiac);
  }, [zodiac]);

  const fetchData = (zodiacName) => {
    const api = `sun_sign_prediction/daily/${zodiacName}`;
    const userId = "623869";
    const apiKey = "46046d17a932151518470e3a08a1665a";

    const auth = "Basic " + btoa(userId + ":" + apiKey);

    axios
      .post(
        `https://json.astrologyapi.com/v1/${api}`,
        {},
        {
          headers: {
            authorization: auth,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleZodiacClick = (zodiacName) => {
    setZodiac(zodiacName);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    flexDirection: "row",
  };
  return (
    <>
      <Header1 />

      <section class="home-section pt-2">
        <div class="container-fluid-lg">
          <img align="right" src="../assets/images/logo/hs.png" width="100%" />
          <div class="row g-4"></div>
        </div>
      </section>
      {/* <!-- Category Section Start --> */}
      <section>
        <div class="container-fluid-lg">
          <div class="title">
            <h2 style={{ textAlign: "center" }}>Today's Horoscope</h2>
            {/* <h4 style={{textAlign:"center"}}>Know Your Today's Horoscope </h4> */}
            <p>
              Reading your Today’s horoscope is one of the best ways to predict
              your future. The foretelling of the future through the Daily
              horoscope is an ancient practice and finds relevance even today.
              The horoscope prediction is about predicting the individual's
              future based on various astrological aspects such as the position
              of the planets, Nakshatras, Tithi, and much more. However, it’s
              predominantly the movement of planets from one house of the Kundli
              to another that influences the life of the native and thus his
              Daily horoscope. As planets are in motion, their position in the
              chart of the native on a daily basis virtually decides the course
              of his life and fortune.
            </p>
            mm
            <p>
              Of all the ancient Vedic practices that we are aware of, horoscope
              reading is one of the most accepted and popular. Horoscope reading
              transgresses boundaries and is a tea-time read for not just the
              astrology-loving Indians but also people residing in western
              countries. In fact, these days there are numerous mediums to bring
              you your today's horoscope, such as TV, newspapers, magazines, and
              much more. Whatever the medium, the purpose of the Daily horoscope
              remains the same, which is to prepare you for life and make you
              aware of all the upcoming events, so you don’t go blank into life
              as most people do.
            </p>
          </div>
        </div>
      </section>

      <section className="category-section-2">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Daily Horoscopes</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="category-slider arrow-slider">
                <Slider {...settings}>
                  <div
                    onClick={() => handleZodiacClick("aries")}
                    className="shop-category-box border-0 wow fadeIn"
                  >
                    <Link to="#" className="circle-1">
                      <img
                        src="../assets/images/veg-3/category/1.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </Link>
                    <div className="category-name">
                      <h6>Aries</h6>
                      <h6 style={{ fontSize: "10px" }}>21/3-19/4</h6>
                    </div>
                  </div>
                  <div>
                    <div
                      onClick={() => handleZodiacClick("taurus")}
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.05s"
                    >
                      <Link to="#" className="circle-2">
                        <img
                          src="../assets/images/veg-3/category/2.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Taurus</h6>
                        <h6 style={{ fontSize: "10px" }}>20/4-20/5</h6>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => handleZodiacClick("gemini")}
                    style={{ alignSelf: "center" }}
                  >
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <Link to="#" className="circle-3">
                        <img
                          src="../assets/images/veg-3/category/3.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Gemini</h6>
                        <h6 style={{ fontSize: "10px" }}>21/5-20/6</h6>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => handleZodiacClick("cancer")}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.15s"
                    >
                      <Link to="#" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/4.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Cancer</h6>
                        <h6 style={{ fontSize: "10px" }}>21/6-22/7</h6>
                      </div>
                    </div>
                  </div>

                  <div onClick={() => handleZodiacClick("leo")}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <Link to="#" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/5.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Leo</h6>
                        <h6 style={{ fontSize: "10px" }}>23/7-22/8</h6>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => handleZodiacClick("virgo")}
                    className="shop-category-box border-0 wow fadeIn"
                    data-wow-delay="0.25s"
                  >
                    <Link to="#" className="circle-1">
                      <img
                        src="../assets/images/veg-3/category/6.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </Link>
                    <div className="category-name">
                      <h6>Virgo</h6>
                      <h6 style={{ fontSize: "10px" }}>23/8-22/9</h6>
                    </div>
                  </div>
                  <div
                    onClick={() => handleZodiacClick("libra")}
                    style={{ alignSelf: "center" }}
                  >
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.3s"
                    >
                      <Link to="#" className="circle-2">
                        <img
                          src="../assets/images/veg-3/category/7.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Libra</h6>
                        <h6 style={{ fontSize: "10px" }}>23/9-22/10</h6>
                      </div>
                    </div>
                  </div>

                  <div onClick={() => handleZodiacClick("scorpio")}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.35s"
                    >
                      <Link to="#" className="circle-3">
                        <img
                          src="../assets/images/veg-3/category/8.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Scorpio</h6>
                        <h6 style={{ fontSize: "10px" }}>23/10-21/11</h6>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => handleZodiacClick("sagittarius")}
                    style={{ alignSelf: "center" }}
                  >
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.4s"
                    >
                      <Link to="#" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/9.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Sagittarius</h6>
                        <h6 style={{ fontSize: "10px" }}>22/11-21/12</h6>
                      </div>
                    </div>
                  </div>

                  <div onClick={() => handleZodiacClick("capricorn")}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.45s"
                    >
                      <Link to="#" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/10.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Capricorn</h6>
                        <h6 style={{ fontSize: "10px" }}>22/12-19/1</h6>
                      </div>
                    </div>
                  </div>

                  <div onClick={() => handleZodiacClick("aquarius")}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.5s"
                    >
                      <Link to="#" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/11.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Aquarius</h6>
                        <h6 style={{ fontSize: "10px" }}>20/1-18/2</h6>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleZodiacClick("pisces")}
                    style={{ alignSelf: "center" }}
                  >
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.55s"
                    >
                      <Link to="#" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/12.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Pisces </h6>
                        <h6 style={{ fontSize: "10px" }}>19/2-20/3</h6>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="seller-grid-section">
        <div class="container-fluid-lg">
          <div class="row g-4">
            <div class="col-xxl-4 col-md-6">
              <Link to="#" class="seller-grid-box">
                <div class="grid-contain">
                  <div class="title" style={{ padding: "5px" }}>
                    <h3>Personal Life</h3>

                    <img
                      class="img2"
                      src="../assets/images/astro/are.png"
                      alt="aries"
                      width="170"
                      height="170"
                    />
                    <p>{responseData?.prediction.personal_life}</p>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-xxl-4 col-md-6">
              <a href="aries.html" class="seller-grid-box">
                <div class="grid-contain">
                  <div class="title" style={{ padding: "5px" }}>
                    <h3>Profession</h3>

                    <img
                      class="img2"
                      src="../assets/images/astro/tau.png"
                      alt="aries"
                      width="170"
                      height="170"
                    />
                    <p>{responseData?.prediction.profession}</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-xxl-4 col-md-6">
              <a href="aries.html" class="seller-grid-box">
                <div class="grid-contain">
                  <div class="title" style={{ padding: "5px" }}>
                    <h3>Health</h3>

                    <img
                      class="img2"
                      src="../assets/images/astro/gem.png"
                      alt="aries"
                      width="170"
                      height="170"
                    />
                    <p>{responseData?.prediction.health}</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-xxl-4 col-md-6">
              <a href="aries.html" class="seller-grid-box">
                <div class="grid-contain">
                  <div class="title" style={{ padding: "5px" }}>
                    <h3>Travel</h3>

                    <img
                      class="img2"
                      src="../assets/images/astro/cn.png"
                      alt="aries"
                      width="170"
                      height="170"
                    />
                    <p>{responseData?.prediction.travel}</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-xxl-4 col-md-6">
              <a href="aries.html" class="seller-grid-box">
                <div class="grid-contain">
                  <div class="title" style={{ padding: "5px" }}>
                    <h3>Luck</h3>

                    <img
                      class="img2"
                      src="../assets/images/astro/leo.png"
                      alt="aries"
                      width="170"
                      height="170"
                    />
                    <p>{responseData?.prediction.luck}</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-xxl-4 col-md-6">
              <a href="aries.html" class="seller-grid-box">
                <div class="grid-contain">
                  <div class="title" style={{ padding: "5px" }}>
                    <h3>Emotions</h3>

                    <img
                      class="img2"
                      src="../assets/images/astro/li.png"
                      alt="aries"
                      width="170"
                      height="170"
                    />
                    <p>{responseData?.prediction.emotions}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <nav class="custome-pagination"></nav>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="banner-contain">
                <div
                  className="banner-contain hover-effect"
                  style={{ height: "150px" }}
                >
                  <img
                    src="../assets/images/vegetable/banner/banner1.jpg"
                    className="bg-img blur-up lazyload img-fluid"
                    alt="banner"
                    style={{
                      width: "100%",
                      height: "27vh",
                      objectFit: "cover",
                    }}
                  />
                  <div className="banner-details p-center p-sm-4 p-3 text-white text-center">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container-fluid-lg">
          <div class="title" style={{ padding: " 5px" }}>
            <h2>Understanding Today horoscope</h2>
            <span class="title-leaf">
              <svg class="icon-width">
                <Link to="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></Link>
              </svg>
            </span>

            <p>
              If you are a follower of astrology, you would know that each
              zodiac sign in astrology is ruled by a planet. For example, the
              Moon is the ruler of Cancer, and Mars is the ruler of both Aries
              and Scorpio zodiac signs. Similarly, Gemini is ruled by Mercury
              and so on. It’s the negative and positive state of these planets
              that affects your zodiac sign and thus your future.{" "}
            </p>
            <p>
              For example, Taurus is ruled by the planet Venus. In astrology,
              Mars, Jupiter, and Ketu are the enemy of the planet Venus. Hence,
              if Venus is placed in any house of your Kundli with Mars, Jupiter
              or Ketu, then the characteristics of that house may turn negative
              for you and reflect on your Horoscope today.{" "}
            </p>
          </div>
          <div class="title" style={{ padding: " 5px" }}>
            <h2>How can Today's horoscope help you?</h2>
            <span class="title-leaf">
              <svg class="icon-width">
                <Link to="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></Link>
              </svg>
            </span>

            <p>
              We have been talking a lot about Today’s horoscope, how it is
              prepared, and all the technicality or science that goes into
              predicting your future through horoscopes. And what we have
              gathered from the discussion is that the Daily horoscope is an
              insightful medium to analyse the sense of the energy of any given
              day. Horoscope allows us a roadmap, showing us what we might
              experience in the day, week or month ahead of us. Having said
              that, here are some more benefits that one can derive from reading
              their horoscope on a regular basis.{" "}
            </p>
          </div>
        </div>
      </section>

      <section class="product-list-section section-b-space">
        <div class="container-fluid-lg">
          <div class="title">
            <h2>Also Check</h2>
            <span class="title-leaf">
              <svg class="icon-width">
                <Link to="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></Link>
              </svg>
            </span>
          </div>
          <div class="row g-4">
            <div class="col-xxl-4 col-md-4">
              <div class="product-box-4 wow fadeInUp">
                <div class="product-header">
                  <div class="product-image">
                    <Link to='/Horoscope_page'>
                      <img
                        src="../assets/images/inner-page/dh.png"
                        class="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>

                <div class="product-footer">
                  <div class="product-detail">
                  <Link to='/Horoscope_page'>
                      <h5 class="name">Daily Horoscope</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xxl-4 col-md-4">
              <div class="product-box-4 wow fadeInUp">
                <div class="product-header">
                  <div class="product-image">
                    <Link to="/Horoscope_monthly">
                      <img
                        src="../assets/images/inner-page/dh.png"
                        class="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>

                <div class="product-footer">
                  <div class="product-detail">
                  <Link to="/Horoscope_monthly">
                      <h5 class="name">Montlhy Horoscope</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xxl-4 col-md-4">
              <div class="product-box-4 wow fadeInUp">
                <div class="product-header">
                  <div class="product-image">
                    <Link to='/Horoscope_yearly'>
                      <img
                        src="../assets/images/inner-page/dh.png"
                        class="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>

                <div class="product-footer">
                  <div class="product-detail">
                  <Link to='/Horoscope_yearly'>
                      <h5 class="name"> Horoscope 2023</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Offer Section Start --> */}
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div
                className="tab-content"
                id="myTabContent"
                style={{ marginTop: "-30px" }}
              >
                <div
                  className="tab-pane fade show active"
                  id="all"
                  role="tabpanel"
                  aria-labelledby="all-tab"
                >
                  <div className="row g-8">
                    <div className="col-xxl-2 col-lg-3 col-md-6 col-6 wow fadeInUp">
                      <div className="product-box-4">
                        <div className="product-image">
                          <Link to="/Chatastrologer">
                            <img
                              src="../assets/images/veg-3/cate1/chat.png"
                              className="img-fluid"
                              alt=""
                              style={{ height: "60px" }}
                            />
                          </Link>
                        </div>

                        <div className="product-detail">
                          <Link to="/Chatastrologer">
                            <h5 className="name">Chat with Astrologer</h5>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-xxl-2 col-lg-3 col-md-6 col-6 wow fadeInUp"
                      data-wow-delay="0.05s"
                    >
                      <div className="product-box-4">
                        <div className="product-image">
                          <Link to="/AstrologersList">
                            <img
                              src="../assets/images/veg-3/cate1/phone.png"
                              className="img-fluid"
                              alt=""
                              style={{ height: "60px" }}
                            />
                          </Link>
                        </div>

                        <div className="product-detail">
                          <Link to="/AstrologersList">
                            <h5 className="name">Talk to Astrologer</h5>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-xxl-2 col-lg-3 col-md-6 col-6 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="product-box-4">
                        <div className="product-image">
                          <Link to="/Astrolive">
                            <img
                              src="../assets/images/veg-3/cate1/livechat.png"
                              className="img-fluid"
                              alt=""
                              style={{ height: "60px" }}
                            />
                          </Link>
                        </div>

                        <div className="product-detail">
                          <Link to="/Astrolive">
                            <h5 className="name">Live Astrologers</h5>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-xxl-2 col-lg-3 col-md-6 col-6 wow fadeInUp"
                      data-wow-delay="0.55s"
                    >
                      <div className="product-box-4">
                        <div className="product-image">
                          <Link to="/AstrologersList">
                            <img
                              src="../assets/images/veg-3/cate1/videocamera.png"
                              className="img-fluid"
                              alt=""
                              style={{ height: "60px" }}
                            />
                          </Link>
                        </div>

                        <div className="product-detail">
                          <Link to="/AstrologersList">
                            <h5 className="name">
                              Video Call With Astrologers
                            </h5>
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
      <section></section>
      <section></section>
      <Footer />
    </>
  );
};

export default Horoscope_page;
