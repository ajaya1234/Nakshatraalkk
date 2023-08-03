import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import { BiBell } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

const Header1 = () => {
  const navigate = useNavigate();

  const userId = localStorage.getItem("iddofuser");

  const location = useLocation();
  const isProtectedPage = [
    "/Astrolive",
    "/AstrologerDetail",
    "/AstrologersList",
    "/profile",
    "/speaktoaustrology",
    "/checkout",
    "/Astrolive",
    "/profile",
    "/PujaListDetail", 
    "/VideoCall",
    "/Chat",
    "/ChatForm",
    "/payment",
    "/Streaming",
    "/Chatastrologer",

  ].includes(location.pathname);

  const removeToken = () => {
    localStorage.removeItem("iddofuser");
    localStorage.removeItem("_id");
    localStorage.removeItem("totalminute");
    localStorage.removeItem("vcdata");
    localStorage.removeItem("AstroData");
    localStorage.removeItem("data");
    localStorage.removeItem("videoatro_token");
    localStorage.removeItem("userData");
    localStorage.removeItem("chatdata");
    localStorage.removeItem("videoatro_token");
    localStorage.removeItem("videoatro_token");
    localStorage.removeItem("vcidddata");
    localStorage.removeItem("data");
    localStorage.removeItem("videoatro_token");
    localStorage.removeItem("data");
    localStorage.removeItem("chatiddd");
    localStorage.removeItem("videorate");
    localStorage.removeItem("chatrate");

    return <Navigate to="/login" />;
  };

  if (!userId && isProtectedPage) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {userId ? (
        <header class="pb-md-4 pb-0">
          <div class="top-nav top-header sticky-header">
            <div class="container-fluid-lg">
              <div class="row">
                <div class="col-12">
                  <div class="navbar-top">
                    <Link to="/" class="web-logo nav-logo">
                      {/* <img
                        src="../assets/images/logo/222.png"
                        class="img-fluid blur-up lazyload"
                        alt=""
                      /> */}
                      {/* <img
                        src="../assets/LOGONEW1.png"
                        class="img-fluid blur-up lazyload"
                        alt=""
                      /> */}

                      <img
                        src="../assets/images/logo/2222.png"
                        class="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </Link>

                    <div
                      class="middle-box"
                      style={{ color: "gray", marginLeft: "14%" }}
                    >
                      <i
                        data-feather="phone-call"
                        style={{ marginRight: "10px" }}
                      ></i>
                      <div
                        class="delivery-detail"
                        style={{ marginRight: "15px" }}
                      >
                        <h6>Customer care</h6>
                        <h6>+91 888 104 2340</h6>
                      </div>

                      <button
                        onclick="location.href = '#';"
                        style={{
                          backgroundColor: "white",
                          color: "gray",
                          borderColor: "#ffb00d",
                        }}
                        class=""
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
                          <div class="onhover-dropdown header-badge"></div>
                        </li>

                        <ul>
                          <li>
                            <div style={{ display: "flex" }}>
                              {/* <Link
                  onClick={removeToken}
                  className="dropdown-item"
                  to="/login"
                  data-toggle="modal"
                  data-target="#logoutModal"
                ><Link */}
                              <Link to="/profile">
                                <div class="delivery-login-box">
                                  <div class="delivery-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="feather feather-user"
                                    >
                                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                      <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                  </div>
                                </div>
                              </Link>

                              <Link
                                to="/"
                                style={{ display: "flex", height: "28px" }}
                              >
                                <button
                                  onClick={removeToken}
                                  class="btn btn-md bg-dark cart-button text-white w-80"
                                >
                                  LogOut
                                </button>
                              </Link>
                              {/* <button
                                onClick={()=>navigate("/SignUp")}
                                class="btn btn-md bg-dark cart-button text-white w-80"
                                style={{marginLeft: "10px"}}
                              >
                                Sign up
                              </button> */}
                            </div>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                  <div class="container-fluid-lg main-nav navbar navbar-expand-xl navbar-light navbar-sticky  ">
                    <ul class="flex-row navbar-light">
                      <li class="nav-item ">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/AstrologersList"
                        >
                          Speak to Astrologer
                        </Link>
                      </li>
                     
                      <li class="nav-item dropdown">
                        <a
                          style={{ color: "black" }}
                          class="nav-link dropdown-toggle"
                          href="javascript:void(0)"
                          data-bs-toggle="dropdown"
                        >
                          Horoscope
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/Horoscope_page"
                            >
                              Today's Horoscope
                            </Link>
                          </li>
                          
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/Horoscope_monthly"
                            >
                              Monthly Horoscope
                            </Link>
                          </li>
                          
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/Horoscope_yearly"
                            >
                              Yearly Horoscope
                            </Link>
                          </li>
                         
                        </ul>
                      </li>
                      
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/spritual"
                        >
                          Spiritual Guide
                        </Link>
                      </li>
                     
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/panchang"
                        >
                          Panchang
                        </Link>
                      </li>
                     
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/kundali"
                        >
                          Kundli
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/kundali_milan"
                        >
                          Kundli Milan
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/muhurat"
                        >
                          Muhurat
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/tarot"
                        >
                          Tarot
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/nmart"
                        >
                          N-Mart
                        </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          style={{ color: "black" }}
                          class="nav-link dropdown-toggle"
                          href="javascript:void(0)"
                          data-bs-toggle="dropdown"
                        >
                          Others
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/blog"
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/Numerology"
                            >
                              Numerology
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/nmart"
                            >
                              Vastu
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/zodiac"
                            >
                              Zodiac
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/pooja"
                            >
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
        </header>
      ) : (
        <header class="pb-md-4 pb-0">
          <div class="top-nav top-header sticky-header">
            <div class="container-fluid-lg">
              <div class="row">
                <div class="col-12">
                  <div class="navbar-top">
                    <Link to="/" class="web-logo nav-logo">
                      {/* <img
                        src="assets/images/logo/222.png"
                        class="img-fluid blur-up lazyload"
                        alt=""
                      /> */}

                      <img
                        src="../assets/images/logo/2222.png"
                        class="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </Link>

                    <div
                      class="middle-box"
                      style={{ color: "gray", marginLeft: "14%" }}
                    >
                      <i
                        data-feather="phone-call"
                        style={{ marginRight: "10px" }}
                      ></i>
                      <div
                        class="delivery-detail"
                        style={{ marginRight: "15px" }}
                      >
                        <h6>Customer care</h6>
                        <h6>+91 888 104 2340</h6>
                      </div>

                      <button
                        onclick="location.href = '#';"
                        style={{
                          backgroundColor: "white",
                          color: "gray",
                          borderColor: "#ffb00d",
                        }}
                        class=""
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
                          <div class="onhover-dropdown header-badge"></div>
                        </li>

                        <ul>
                          <li>
                            <div style={{ display: "flex", height: "28px" }}>
                              <button
                                onClick={() => navigate("/login")}
                                class="btn btn-md bg-dark cart-button text-white w-80"
                              >
                                Login
                              </button>
                              <button
                                onClick={() => navigate("/SignUp")}
                                class="btn btn-md bg-dark cart-button text-white w-80"
                                style={{ marginLeft: "10px" }}
                              >
                                Sign up
                              </button>
                            </div>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                  <div class="container-fluid-lg main-nav navbar navbar-expand-xl navbar-light navbar-sticky  ">
                    <ul class="flex-row navbar-light">
                      <li class="nav-item ">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/AstrologersList"
                        >
                          Speak to Astrologer
                        </Link>
                      </li>
                     
                      <li class="nav-item dropdown">
                        <a
                          style={{ color: "black" }}
                          class="nav-link dropdown-toggle"
                          href="javascript:void(0)"
                          data-bs-toggle="dropdown"
                        >
                          Horoscope
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/Horoscope_page"
                            >
                              Today's Horoscope
                            </Link>
                          </li>
                          
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/Horoscope_monthly"
                            >
                              Monthly Horoscope
                            </Link>
                          </li>
                          
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/Horoscope_yearly"
                            >
                              Yearly Horoscope
                            </Link>
                          </li>
                          
                        </ul>
                      </li>
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/spritual"
                        >
                          Spiritual Guide
                        </Link>
                      </li>
                      
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/panchang"
                        >
                          Panchang
                        </Link>
                      </li>
                     
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/kundali"
                        >
                          Kundli
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/kundali_milan"
                        >
                          Kundli Milan
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/muhurat"
                        >
                          Muhurat
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/tarot"
                        >
                          Tarot
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          style={{ color: "black" }}
                          class="nav-link"
                          to="/nmart"
                        >
                          N-Mart
                        </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          style={{ color: "black" }}
                          class="nav-link dropdown-toggle"
                          href="javascript:void(0)"
                          data-bs-toggle="dropdown"
                        >
                          Others
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/blog"
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/Numerology"
                            >
                              Numerology
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/nmart"
                            >
                              Vastu
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/zodiac"
                            >
                              Zodiac
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ color: "black" }}
                              class="dropdown-item"
                              to="/pooja"
                            >
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
        </header>
      )}
    </>
  );
};

export default Header1;



