import React from "react";
// import Header1 from "./InHeader";
import Footer from "./Footer";
import axios from "axios";
import Header1 from "./Header1";
import { useState,useEffect } from "react";


function PrivacyPolicy() {
  const [policyData, setPolicyData] = useState([]);
  useEffect(() => {
    getData();
  

  }, []);
  const getData = () => {
    axios.get("http://103.104.74.215:3012/api/user/privacy_policy").then((res) => setPolicyData(res.data.data));
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

      <section class="breadscrumb-section pt-0">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-12">
              <div class="breadscrumb-contain">
                <h2>Privacy Policy</h2>
                <nav>
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                      <a href="index.html">
                        <i class="fa-solid fa-house"></i>
                      </a>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                      Privacy Policy
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row g-sm-4 g-3">
          {policyData.map((i)=>
            <div class="col-xxl-12 col-xl-12 col-lg-12 ratio_50">
             
              <h2 style={{ textAlign: "center" }}>{i.title}</h2>
              <hr />

              <div class="blog-detail-contain" style={{ paddingTop: 10 }}>
                <p>
                {i.description}
                </p>

               
              </div>
            </div>)}
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
                        value="#0da487"
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

export default PrivacyPolicy;
