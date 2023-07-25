import React from "react";
import { BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/* <style >

.category-box-view img{{
     width:"120px",
      aspectRatio:"1/1",
      objectFit: "cover",
      borderRadius: '80%'

}}

.category-name {{
    textAlign: "center"
}}





.input_f{{

 display: "flex"
}}


</style> 



<body class="theme-color-1">

 <!-- Loader Start --> 
 <div class="fullpage-loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div> 
</body> */}
      {/* <!-- Loader End --> */}
      {/* <!-- Header Start --> */}
      <header className="pb-md-4 pb-0">
        <div className="top-nav top-header sticky-header">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="navbar-top">
                  <button
                    className="navbar-toggler d-xl-none d-inline navbar-menu-button"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#primaryMenu"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="fa-solid fa-bars"></i>
                    </span>
                  </button>
                  <Link to="/home" className="web-logo nav-logo">
                    <img
                      src="../assets/images/logo/222.png"
                      className="img-fluid blur-up lazyload"
                      alt=""
                    />
                  </Link>

                  <div className="middle-box">
                    <i
                      data-feather="phone-call"
                      style={{ marginRight: "10px" }}
                    ></i>
                    <div
                      className="delivery-detail"
                      style={{ marginRight: "15px" }}
                    >
                      <h6>Customer care</h6>
                      <h5>+91 888 104 2340</h5>
                    </div>

                    <button
                      onclick="location.href = '#';"
                      className="btn btn-md bg-dark cart-button text-white w-80"
                      style={{ height: "33px" }}
                    >
                      Download App
                    </button>
                  </div>

                  <div className="rightside-box">
                    <div className="search-full">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i data-feather="search" className="font-light"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control search-type"
                          placeholder="Search here.."
                        />
                        <span className="input-group-text close-search">
                          <i data-feather="x" className="font-light"></i>
                        </span>
                      </div>
                    </div>
                    <ul className="right-side-menu">
                      {/* <!-- <li className="right-side">
                                        <div className="delivery-login-box">
                                            <div className="delivery-icon">
                                                <div className="search-box">
                                                    <i data-feather="search"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </li> --> */}

                      <ul className="about-list right-nav-about">
                        <li className="right-nav-list">
                          <div className="dropdown theme-form-select">
                            <button
                              className="btn dropdown-toggle"
                              type="button"
                              id="select-dollar"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span>ENG</span>
                            </button>
                            <ul
                              className="dropdown-menu dropdown-menu-end sm-dropdown-menu"
                              aria-labelledby="select-dollar"
                            >
                              <li>
                                <a
                                  className="dropdown-item"
                                  id="aud"
                                  href="javascript:void(0)"
                                >
                                  ENG
                                </a>
                              </li>
                              <br />
                              <li>
                                <a
                                  className="dropdown-item"
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

                      <li className="right-side">
                        <div className="onhover-dropdown header-badge">
                          <button
                            type="button"
                            className="btn p-0 position-relative header-wishlist"
                          >
                            <BiBell size="2rem" />
                            <span className="position-absolute top-0 start-100 translate-middle badge">
                              2
                              <span className="visually-hidden">
                                unread messages
                              </span>
                            </span>
                          </button>
                        </div>
                      </li>
                      {/* <!-- <li className="right-side onhover-dropdown"> --> */}
                      {/* <!-- <div className="delivery-login-box">
                                            <div className="delivery-icon">
                                                <i data-feather="user"></i>
                                            </div>
                                            <div className="delivery-detail">
                                                <h6>Hello,</h6>
                                                <h5>My Account</h5>
                                            </div>
                                        </div> --> */}

                      {/* <!-- <div className="onhover-div onhover-div-login"> -->
                                          <!--   <ul className="user-box-name">
                                                <li className="product-box-contain">
                                                    <i></i>
                                                    <a href="otp.html">Log In</a>
                                                </li>

                                                <li className="product-box-contain">
                                                    <a href="otp.html">Register</a>
                                                </li>

                                                <li className="product-box-contain">
                                                    <i></i>
                                                    <a href="profile.html">Profile</a>
                                                </li>

                                              <li className="product-box-contain">
                                                    <a href="forgot.html">Forgot Password</a>
                                                </li> -->
                                        //     <!-- </ul> -->  */}
                      {/* //   <!--      <div className="middle-box">
  
                                        //         <button onclick="location.href = 'otp.html';"className="btn btn-md bg-dark cart-button text-white w-80" style="border-radius: 20px;">Login</button>
                         
  
                                        //         <button onclick="location.href = 'signup.html';"className="btn btn-md bg-dark cart-button text-white w-80" style="border-radius: 20px;">Sign up</button>
                                        //     </div> --> */}
                      <ul>
                        <li>
                          {
                            <div style={{ display: "flex" }}>
                              <button
                                onClick={"/login"}
                                className="btn btn-md bg-dark cart-button text-white w-80"
                                style={{ borderRadius: "20px", height: "33px" }}
                              >
                                Login
                              </button>
                              <button
                                onclick="location.href = 'signup.html';"
                                className="btn btn-md bg-dark cart-button text-white w-80"
                                style={{ borderRadius: "20px", height: "33px" }}
                              >
                                Sign up
                              </button>
                            </div>
                          }
                        </li>
                      </ul>
                      {/* 
                                        <!-- </div> -->
                                    <!-- </li>  --> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="header-nav">
                <div className="header-nav-middle">
                  <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                    <div
                      className="offcanvas offcanvas-collapse order-xl-2"
                      id="primaryMenu"
                    >
                      <div className="offcanvas-header navbar-shadow">
                        <h5>Menu</h5>
                        <button
                          className="btn-close lead"
                          type="button"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="offcanvas-body">
                        <ul className="navbar-nav">
                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link dropdown-toggle"
                              to="/home"
                            >
                              Home
                            </Link>
                          </li>
                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link dropdown-toggle"
                              to="/speaktoaustrology"
                            >
                              Speak to Astrologer
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="javascript:void(0)"
                              data-bs-toggle="dropdown"
                            >
                              Horoscope
                            </a>
                            <ul className="dropdown-menu">
                              {/* <!--<li>-->
                                                    <!--    <a className="dropdown-item" href="index-3.html">Horoscope 2023</a>-->
                                                    <!--</li>--> */}
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="todays-horoscope.html"
                                >
                                  Today's Horoscope
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="weekly_horoscope.html"
                                >
                                  Weekly Horoscope
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="montly_horoscope.html"
                                >
                                  Monthly Horoscope
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="index-3.html"
                                >
                                  Yearly Horoscope
                                </a>
                              </li>
                              {/* <!--<li>-->
                                                    <!--    <a className="dropdown-item" href="daily_horoscope.html">Daily Horoscope</a>-->
                                                    <!--</li>--> */}
                            </ul>
                          </li>

                          <li className="nav-item dropdown new-nav-item">
                            <label className="new-dropdown">New</label>
                            <Link
                              className="nav-link dropdown-toggle"
                              to="/spritual"
                            >
                              Spiritual Guide
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link dropdown-toggle"
                              to="/panchang"
                            >
                              Panchang
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link dropdown-toggle"
                              to="/kundali"
                            >
                              Kundali
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link dropdown-toggle"
                              to="/kundali_milan"
                            >
                              Kundali Milan
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link dropdown-toggle"
                              to="/muhurat"
                            >
                              Muhurat
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link dropdown-toggle"
                              to="/tarot"
                            >
                              Tarot
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link dropdown-toggle"
                              to="/nakshatra_mart"
                            >
                              Nakshatra Mart
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link dropdown-toggle"
                              to="/blog"
                            >
                              Blog
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="javascript:void(0)"
                              data-bs-toggle="dropdown"
                            >
                              Others
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to="/love">
                                  Love
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="/vastu">
                                  Vastu
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="/zodiac">
                                  Zodiac
                                </Link>
                              </li>

                              <li>
                                <Link className="dropdown-item" to="/pooja">
                                  Pooja
                                </Link>
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
      {/* <!-- Header End --> */}
    </>
  );
};
export default Header;
