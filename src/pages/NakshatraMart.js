import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NakshatraMart = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    flexDirection: "row",
  };

  return (
    <>
      {/* <!-- Nakshatra Mart Start --> */}
      <section class="product-section-3">
        <div class="container-fluid-lg">
          <div class="title">
            <h2>Nakshatra Mart</h2>
          </div>
          <div class="row">
            <div class="col-12">
              <div
                class="slider-7_1 arrow-slider img-slider"
                style={{ }}
              ><Slider {...settings}>
                <div style={{ width: "20%" }}>
                  <div class="product-box-4 wow fadeInUp">
                    <div class="product-image product-image-2">
                      <Link to="#">
                        <img
                          src="../assets/images/vegetable/EkMukhiRudraksha.png"
                          class="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div class="product-detail">
                      <Link to="#">
                        <h5 class="name text-title">Ek Mukhi Rudraksha</h5>
                      </Link>
                    </div>
                  </div>
                </div>

                <div style={{ width: "20%" }}>
                  <div
                    class="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                  >
                    <div class="product-image product-image-2">
                      <a href="product-left-thumbnail.html">
                        <img
                          src="../assets/images/vegetable/5MukhiRudraksh.png"
                          class="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h5 class="name text-title">5 Mukhi Rudraksh</h5>
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ width: "20%" }}>
                  <div class="product-box-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="product-image product-image-2">
                      <a href="product-left-thumbnail.html">
                        <img
                          src="../assets/images/vegetable/greenstone.png"
                          class="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h5 class="name text-title">5.25 ratti Emerald</h5>
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ width: "20%" }}>
                  <div
                    class="product-box-4 wow fadeInUp"
                    data-wow-delay="0.15s"
                  >
                    <div class="product-image product-image-2">
                      <a href="product-left-thumbnail.html">
                        <img
                          src="../assets/images/vegetable/redstone.png"
                          class="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h5 class="name text-title">Onion</h5>
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ width: "20%" }}>
                  <div class="product-box-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="product-image product-image-2">
                      <a href="product-left-thumbnail.html">
                        <img
                          src="../assets/images/vegetable/redstone.png"
                          class="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h5 class="name text-title">Baby Chili</h5>
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ width: "20%" }}>
                  <div
                    class="product-box-4 wow fadeInUp"
                    data-wow-delay="0.25s"
                  >
                    <div class="product-image product-image-2">
                      <a href="product-left-thumbnail.html">
                        <img
                          src="../assets/images/vegetable/redstone.png"
                          class="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h5 class="name text-title">Broccoli</h5>
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ width: "20%" }}>
                  <div class="product-box-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="product-image product-image-2">
                      <a href="product-left-thumbnail.html">
                        <img
                          src="../assets/images/vegetable/redstone.png"
                          class="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h5 class="name text-title">Apple</h5>
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ width: "20%" }}>
                  <div
                    class="product-box-4 wow fadeInUp"
                    data-wow-delay="0.35s"
                  >
                    <div class="product-image product-image-2">
                      <a href="product-left-thumbnail.html">
                        <img
                          src="../assets/images/vegetable/redstone.png"
                          class="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="product-detail">
                      <a href="product-left-thumbnail.html">
                        <h5 class="name text-title">Strawberry</h5>
                      </a>
                    </div>
                  </div>
                </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Nakshatra Mart Section End --> */}
    </>
  );
};

export default NakshatraMart;
