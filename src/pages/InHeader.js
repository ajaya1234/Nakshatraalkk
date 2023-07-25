import React from "react";

function InHeader() {
  return (
    <div>
      <header class="pb-md-4 pb-0">
        <div class="top-nav top-header sticky-header">
          <div class="container-fluid-lg">
            <div class="row">
              <div class="col-12">
                <div class="navbar-top">
                  <button
                    class="navbar-toggler d-xl-none d-inline navbar-menu-button"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#primaryMenu"
                  >
                    <span class="navbar-toggler-icon">
                      <i class="fa-solid fa-bars"></i>
                    </span>
                  </button>
                  <a
                    href="/"
                    class="web-logo nav-logo"
                    style={{ width: "25%" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="../assets/images/logo/loogoo.png"
                      class="img-fluid blur-up lazyload"
                      alt=""
                    />
                  </a>
                  <div class="middle-box">
                    <i
                      data-feather="phone-call"
                      style={{marginRight: 10}}
                    ></i>
                    <div class="delivery-detail" style={{marginRight: 15}}>
                      <h6>Customer care</h6>
                      <h5>+91 888 104 2340</h5>
                
                    </div>

                    <button
                      onclick="location.href = '#';"
                      class="btn btn-md bg-dark cart-button text-white w-80"
                    >
                      Download App
                    </button>
                  </div>

                  <div class="rightside-box">
                    <div class="search-full">
                      <div class="input-group">
                        <span class="input-group-text">
                          <i data-feather="search" class="font-light"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control search-type"
                          placeholder="Search here.."
                        />
                        <span class="input-group-text close-search">
                          <i data-feather="x" class="font-light"></i>
                        </span>
                      </div>
                    </div>
                    <ul class="right-side-menu">
                      <li class="right-side">
                        <div class="delivery-login-box">
                          <div class="delivery-icon">
                            <div class="search-box">
                              <i data-feather="search"></i>
                            </div>
                          </div>
                        </div>
                      </li>

                      <ul class="about-list right-nav-about">
                        <li class="right-nav-list">
                          <div class="dropdown theme-form-select">
                            <button
                              class="btn dropdown-toggle"
                              type="button"
                              id="select-dollar"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span>ENG</span>
                            </button>
                            <ul
                              class="dropdown-menu dropdown-menu-end sm-dropdown-menu"
                              aria-labelledby="select-dollar"
                            >
                              <li>
                                <a
                                  class="dropdown-item"
                                  id="aud"
                                  href="javascript:void(0)"
                                >
                                  ENG
                                </a>
                              </li>
                              <br />
                              <li>
                                <a
                                  class="dropdown-item"
                                  id="eur"
                                  href="javascript:void(0)"
                                >
                                  HIN
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>

                      <li class="right-side">
                        <div class="onhover-dropdown header-badge">
                          {/* <button
                            type="button"
                            class="btn p-0 position-relative header-wishlist"
                          >
                            <i style={{fontSize:20}} class="fa fa-bell-o" aria-hidden="true"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge">
                              2
                              <span class="visually-hidden">
                                unread messages
                              </span>
                            </span>
                          </button> */}

                          <div class="onhover-div">
                            <ul class="cart-list">
                              <li class="product-box-contain">
                                <div class="drop-cart">
                                  <a href="#" class="drop-image">
                                    <img
                                      src="../assets/images/vegetable/product/1.png"
                                      class="blur-up lazyload"
                                      alt=""
                                    />
                                  </a>

                                  <div class="drop-contain">
                                    <a href="#">
                                      <h5>notification</h5>
                                    </a>
                                    <h6>
                                      <span>1 x</span> $80.58
                                    </h6>
                                    <button class="close-button close_button">
                                      <i class="fa-solid fa-xmark"></i>
                                    </button>
                                  </div>
                                </div>
                              </li>

                              <li class="product-box-contain">
                                <div class="drop-cart">
                                  <a href="#" class="drop-image">
                                    <img
                                      src="../assets/images/vegetable/product/2.png"
                                      class="blur-up lazyload"
                                      alt=""
                                    />
                                  </a>

                                  <div class="drop-contain">
                                    <a href="#">
                                      <h5>notification</h5>
                                    </a>
                                    <h6>
                                      <span>1 x</span> $25.68
                                    </h6>
                                    <button class="close-button close_button">
                                      <i class="fa-solid fa-xmark"></i>
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>

                            <div class="price-box">
                              <h5>Total :</h5>
                              <h4 class="theme-color fw-bold">$106.58</h4>
                            </div>

                            <div class="button-group">
                              <a href="#" class="btn btn-sm cart-button">
                                View
                              </a>
                              <a
                                href="#"
                                class="btn btn-sm cart-button theme-bg-color
                                                   text-white"
                              >
                                Checkout
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="right-side onhover-dropdown">
                        <div class="delivery-login-box">
                          <div class="delivery-icon">
                          <i style={{fontSize:20}} class="fa fa-user-o" aria-hidden="true"></i>
                          </div>
                          <div class="delivery-detail">
                            <h6>Hello,</h6>
                            <h5>My Account</h5>
                          </div>
                        </div>

                        <div class="onhover-div onhover-div-login">
                                            <ul class="user-box-name">
                                                <li class="product-box-contain">
                                                    <i></i>
                                                    <a href="otp.html">Log In</a>
                                                </li>

                                                <li class="product-box-contain">
                                                    <a href="otp.html">Register</a>
                                                </li>

                                                <li class="product-box-contain">
                                                    <i></i>
                                                    <a href="Profile">Profile</a>
                                                </li>

                                           
                                            </ul>
                                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-12">
              <div class="header-nav">
                <div class="header-nav-middle">
                  <div class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                    <div
                      class="offcanvas offcanvas-collapse order-xl-2"
                      id="primaryMenu"
                    >
                      <div class="offcanvas-header navbar-shadow">
                        <h5>Menu</h5>
                        <button
                          class="btn-close lead"
                          type="button"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="offcanvas-body">
                        <ul class="navbar-nav">
                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="/"
                            >
                              Home
                            </a>
                          </li>
                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="shop-top-filter1.html"
                            >
                              Speak to Astrologer
                            </a>
                          </li>

                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="javascript:void(0)"
                              data-bs-toggle="dropdown"
                            >
                              Horoscope
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="todays-horoscope.html"
                                >
                                  Today's Horoscope
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="weekly_horoscope.html"
                                >
                                  Weekly Horoscope
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="montly_horoscope.html"
                                >
                                  Monthly Horoscope
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="index-3.html">
                                  Yearly Horoscope
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li class="nav-item dropdown new-nav-item">
                            <label class="new-dropdown">New</label>
                            <a
                              class="nav-link dropdown-toggle"
                              href="javascript:void(0)"
                              data-bs-toggle="dropdown"
                            >
                              Spiritual Guide
                            </a>
                          </li>

                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="panchang.html"
                            >
                              Panchang
                            </a>
                          </li>

                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="kundli.html"
                            >
                              Kundali
                            </a>
                          </li>

                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="kundli_milan.html"
                            >
                              Kundali Milan
                            </a>
                          </li>

                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="muhurat.html"
                            >
                              Muhurat
                            </a>
                          </li>

                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="tarot.html"
                            >
                              Tarot
                            </a>
                          </li>

                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="coming-soon.html"
                            >
                              Nakshatra Mart
                            </a>
                          </li>

                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="blog-grid.html"
                            >
                              Blog
                            </a>
                          </li>

                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="javascript:void(0)"
                              data-bs-toggle="dropdown"
                            >
                              Others
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a class="dropdown-item" href="love.html">
                                  Love
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="vastu.html">
                                  Vastu
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="zodiac_signs.html"
                                >
                                  Zodiac
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="pooja">
                                  Pooja
                                </a>
                              </li>
                            </ul>
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
      </header>
    </div>
  );
}

export default InHeader;
