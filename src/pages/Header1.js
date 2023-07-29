import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import { BiBell } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

const Header1 = () => {

  const navigate = useNavigate()


  const userId = localStorage.getItem("_id");
  const location = useLocation();
  const isProtectedPage = [
    
  ].includes(location.pathname);

  const removeToken = () => {
    localStorage.removeItem("_id");
    return <Navigate to="/login" />;
  };

  if (!userId && isProtectedPage) {
    return <Navigate to="/login" />;
  }

  return (
    <>

{userId ? ( <header class="pb-md-4 pb-0">
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
<img
                        src="../assets/LOGONEW1.png"
                        class="img-fluid blur-up lazyload"
                        alt=""
                      />
                      
                    </Link>

                    <div
                      class="middle-box"
                      style={{color: "gray",marginLeft: "14%"}}
                    >
                      <i
                        data-feather="phone-call"
                        style={{marginRight: "10px"}}
                      ></i>
                      <div class="delivery-detail" style={{marginRight: "15px"}}>
                        <h6>Customer care</h6>
                        <h6>+91 888 104 2340</h6>
                      </div>

                      <button
                        onclick="location.href = '#';"
                        style={{backgroundColor: "white", color: "gray", borderColor: "#ffb00d"}}
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
                          <div class="onhover-dropdown header-badge">
                           
                          </div>
                        </li>

                        <ul>
                          <li>
                            <div style={{display: "flex" }}>


                            {/* <Link
                  onClick={removeToken}
                  className="dropdown-item"
                  to="/login"
                  data-toggle="modal"
                  data-target="#logoutModal"
                ><Link */}

                <Link to='/profile'><div class="delivery-login-box">
                <div class="delivery-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                
            </div></Link>&nbsp;&nbsp;
                <Link  to="/" style={{display: "flex" , height:'28px'}}>            
                <button onClick={removeToken}
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
            <ul  class="flex-row navbar-light">
              <li  class="nav-item ">
                <Link style={{color:'black'}} class="nav-link" to="/">Home</Link>
              </li>&nbsp;&nbsp;
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/AstrologersList">Speak to Astrologer</Link>
              </li>&nbsp;&nbsp;
              <li class="nav-item dropdown">
                <a style={{color:'black'}} class="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">Horoscope</a>
                <ul class="dropdown-menu">
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/Horoscope_page">Today's Horoscope</Link>
                  </li>&nbsp;&nbsp;
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/Horoscope_monthly">Monthly Horoscope</Link>
                  </li>&nbsp;&nbsp;
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/Horoscope_yearly">Yearly Horoscope</Link>
                  </li>&nbsp;&nbsp;
                </ul>
              </li>&nbsp;&nbsp;
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/spritual">Spiritual Guide</Link>
              </li>&nbsp;&nbsp;
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/panchang">Panchang</Link>
              </li>&nbsp;&nbsp;
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/kundali">Kundli</Link>
              </li>
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/kundali_milan">Kundli Milan</Link>
              </li>
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/muhurat">Muhurat</Link>
              </li>
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/tarot">Tarot</Link>
              </li>
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/nmart">N-Mart</Link>
              </li>
              <li class="nav-item dropdown">
                <a style={{color:'black'}} class="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">Others</a>
                <ul class="dropdown-menu">
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/blog">Blog</Link>
                  </li>
                   <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/Numerology">Numerology</Link>
                  </li> 
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/nmart">Vastu</Link>
                  </li>
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/zodiac">Zodiac</Link>
                  </li>
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/pooja">Pooja</Link>
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
                        src="../assets/LOGONEW1.png"
                        class="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </Link>

                    <div
                      class="middle-box"
                      style={{color: "gray",marginLeft: "14%"}}
                    >
                      <i
                        data-feather="phone-call"
                        style={{marginRight: "10px"}}
                      ></i>
                      <div class="delivery-detail" style={{marginRight: "15px"}}>
                        <h6>Customer care</h6>
                        <h6>+91 888 104 2340</h6>
                      </div>

                      <button
                        onclick="location.href = '#';"
                        style={{backgroundColor: "white", color: "gray", borderColor: "#ffb00d"}}
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
                          <div class="onhover-dropdown header-badge">
                           
                          </div>
                        </li>

                        <ul>
                          <li>
                            <div style={{display: "flex" , height:'28px'}}>
                              <button
                                onClick={()=>navigate("/login")}
                                class="btn btn-md bg-dark cart-button text-white w-80"
                              >
                                Login
                              </button>
                               <button
                                onClick={()=>navigate("/SignUp")}
                                class="btn btn-md bg-dark cart-button text-white w-80"
                                style={{marginLeft: "10px"}}
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
            <ul  class="flex-row navbar-light">
              <li  class="nav-item ">
                <Link style={{color:'black'}} class="nav-link" to="/">Home</Link>
              </li>&nbsp;&nbsp;
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/AstrologersList">Speak to Astrologer</Link>
              </li>&nbsp;&nbsp;
              <li class="nav-item dropdown">
                <a style={{color:'black'}} class="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">Horoscope</a>
                <ul class="dropdown-menu">
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/Horoscope_page">Today's Horoscope</Link>
                  </li>&nbsp;&nbsp;
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/Horoscope_monthly">Monthly Horoscope</Link>
                  </li>&nbsp;&nbsp;
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/Horoscope_yearly">Yearly Horoscope</Link>
                  </li>&nbsp;&nbsp;
                </ul>
              </li>
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/spritual">Spiritual Guide</Link>
              </li>&nbsp;&nbsp;
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/panchang">Panchang</Link>
              </li>&nbsp;&nbsp;
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/kundali">Kundli</Link>
              </li>
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/kundali_milan">Kundli Milan</Link>
              </li>
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/muhurat">Muhurat</Link>
              </li>
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/tarot">Tarot</Link>
              </li>
              <li class="nav-item">
                <Link style={{color:'black'}} class="nav-link" to="/nmart">N-Mart</Link>
              </li>
              <li class="nav-item dropdown">
                <a style={{color:'black'}} class="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">Others</a>
                <ul class="dropdown-menu">
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/blog">Blog</Link>
                  </li>
                   <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/Numerology">Numerology</Link>
                  </li> 
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/nmart">Vastu</Link>
                  </li>
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/zodiac">Zodiac</Link>
                  </li>
                  <li>
                    <Link style={{color:'black'}} class="dropdown-item" to="/pooja">Pooja</Link>
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











// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { BiBell } from "react-icons/bi";
// import { FiUser } from "react-icons/fi";

// const Header1 = () => {
//   const navigate = useNavigate();

//   return (
//     <>
     

     
//       <header class="pb-md-4 pb-0">
//         <div class="top-nav top-header sticky-header">
//           <div class="container-fluid-lg">
//             <div class="row">
//               <div class="col-12">
//                 <div class="navbar-top">
//                   <button
//                     class="navbar-toggler d-xl-none d-inline navbar-menu-button"
//                     type="button"
//                     data-bs-toggle="offcanvas"
//                     data-bs-target="#primaryMenu"
//                   >
//                     <span class="navbar-toggler-icon">
//                       <i class="fa-solid fa-bars"></i>
//                     </span>
//                   </button>
//                   <a
//                     href="/"
//                     class="web-logo nav-logo"
//                     style={{ width: "25%" }}
//                   >
//                     <img
//                       style={{ width: "100%" }}
//                       src="../assets/images/logo/loogoo.png"
//                       class="img-fluid blur-up lazyload"
//                       alt=""
//                     />
//                   </a>

//                   <div
//                     class="middle-box"
//                     style={{ color: "gray", marginLeft: "14%" }}
//                   >
//                     <i
//                       class="fa fa-phone"
//                       aria-hidden="true"
//                       style={{ marginRight: "10px", fontSize: 20 }}
//                     ></i>
//                     <div
//                       class="delivery-detail"
//                       style={{ marginRight: "15px" }}
//                     >
//                       <h6>Customer care</h6>
//                       <h6>+91 888 104 2340</h6>
//                     </div>

//                     <button
//                       onclick="location.href = '#';"
//                       style={{
//                         backgroundColor: "white",
//                         color: "gray",
//                         borderColor: "#ffb00d",
//                       }}
//                       class=""
//                     >
//                       Download App
//                     </button>
//                   </div>

//                   <div class="rightside-box">
//                     <div class="search-full">
//                       <div class="input-group">
//                         <span class="input-group-text">
//                           <i data-feather="search" class="font-light"></i>
//                         </span>
//                         <input
//                           type="text"
//                           class="form-control search-type"
//                           placeholder="Search here.."
//                         />
//                         <span class="input-group-text close-search">
//                           <i data-feather="x" class="font-light"></i>
//                         </span>
//                       </div>
//                     </div>
//                     <ul class="right-side-menu">
//                       <li class="right-side">
//                         <div class="delivery-login-box">
//                           <div class="delivery-icon">
//                             <div class="search-box">
//                               <i data-feather="search"></i>
//                             </div>
//                           </div>
//                         </div>
//                       </li>

//                       <ul class="about-list right-nav-about">
//                         <li class="right-nav-list">
//                           <div class="dropdown theme-form-select">
//                             <button
//                               class="btn dropdown-toggle"
//                               type="button"
//                               id="select-dollar"
//                               data-bs-toggle="dropdown"
//                               aria-expanded="false"
//                             >
//                               <span>ENG</span>
//                             </button>
//                             <ul
//                               class="dropdown-menu dropdown-menu-end sm-dropdown-menu"
//                               aria-labelledby="select-dollar"
//                             >
//                               <li>
//                                 <a
//                                   class="dropdown-item"
//                                   id="aud"
//                                   href="javascript:void(0)"
//                                 >
//                                   ENG
//                                 </a>
//                               </li>
//                               <br />
//                               <li>
//                                 <a
//                                   class="dropdown-item"
//                                   id="eur"
//                                   href="javascript:void(0)"
//                                 >
//                                   HIN
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </li>
//                       </ul>

//                       <li class="right-side">
//                         <div class="onhover-dropdown header-badge">
                          
//                         </div>
//                       </li>

//                       <ul>
//                         <li>
//                           <div style={{ display: "flex" }}>
//                             <button
//                               onClick={() => navigate("/login")}
//                               style={{ height: 35 }}
//                               class="btn btn-md bg-dark cart-button text-white w-80"
//                             >
//                               Login
//                             </button>
//                             <button
//                               onClick={() => navigate("/signup")}
//                               class="btn btn-md bg-dark cart-button text-white w-80"
//                               style={{ marginLeft: "10px", height: 35 }}
//                             >
//                               Sign up
//                             </button>
//                           </div>
//                         </li>
//                       </ul>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="container-fluid-lg">
//           <div class="row">
//             <div class="col-12">
//               <div class="header-nav">
//                 <div class="header-nav-middle">
//                   <div class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
//                     <div
//                       class="offcanvas offcanvas-collapse order-xl-2"
//                       id="primaryMenu"
//                     >
//                       <div class="offcanvas-header navbar-shadow">
//                         <h5>Menu</h5>
//                         <button
//                           class="btn-close lead"
//                           type="button"
//                           data-bs-dismiss="offcanvas"
//                           aria-label="Close"
//                         ></button>
//                       </div>
//                       <div class="offcanvas-body">
//                         <ul class="navbar-nav">
//                           <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle ccdd" href="/">
//                               Home
//                             </a>
//                           </li>
//                           <li class="nav-item dropdown">
//                             <a
//                               class="nav-link dropdown-toggle"
//                               href="shop-top-filter1.html"
//                             >
//                               Speak to Astrologer
//                             </a>
//                           </li>

//                           <li class="nav-item dropdown">
//                             <a
//                               class="nav-link dropdown-toggle"
//                               href="javascript:void(0)"
//                               data-bs-toggle="dropdown"
//                             >
//                               Horoscope
//                             </a>
//                             <ul class="dropdown-menu">
//                               <li>
//                                 <a class="dropdown-item" href="Horoscope_page">
//                                   Today's Horoscope
//                                 </a>
//                               </li>

//                               <li>
//                                 <a
//                                   class="dropdown-item"
//                                   href="Horoscope_monthly  "
//                                 >
//                                   Monthly Horoscope
//                                 </a>
//                               </li>
//                               <li>
//                                 <a
//                                   class="dropdown-item"
//                                   href="Horoscope_yearly"
//                                 >
//                                   Yearly Horoscope
//                                 </a>
//                               </li>
//                             </ul>
//                           </li>

//                           <li class="nav-item dropdown new-nav-item">
//                             <label class="new-dropdown">New</label>
//                             <a
//                               class="nav-link dropdown-toggle"
//                               href="spiritual.html"
//                             >
//                               Spiritual Guide
//                             </a>
//                           </li>

//                           <li class="nav-item dropdown">
//                             <a
//                               class="nav-link dropdown-toggle"
//                               href="Panchang_page"
//                             >
//                               Panchang
//                             </a>
//                           </li>

//                           <li class="nav-item dropdown">
//                             <a
//                               class="nav-link dropdown-toggle"
//                               href="kundli.html"
//                             >
//                               Kundli
//                             </a>
//                           </li>

//                           <li class="nav-item dropdown">
//                             <a
//                               class="nav-link dropdown-toggle"
//                               href="kundli_milan.html"
//                             >
//                               Kundli Milan
//                             </a>
//                           </li>

//                           <li class="nav-item dropdown">
//                             <a
//                               class="nav-link dropdown-toggle"
//                               href="muhurat.html"
//                             >
//                               Muhurat
//                             </a>
//                           </li>

//                           <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle" href="Tarot">
//                               Tarot
//                             </a>
//                           </li>

//                           <li class="nav-item dropdown">
//                             <a
//                               class="nav-link dropdown-toggle"
//                               href="coming-soon.html"
//                             >
//                               N-Mart
//                             </a>
//                           </li>

//                           <li class="nav-item dropdown">
//                             <a
//                               class="nav-link dropdown-toggle"
//                               href="javascript:void(0)"
//                               data-bs-toggle="dropdown"
//                             >
//                               Others
//                             </a>
//                             <ul class="dropdown-menu">
//                               <li>
//                                 <a
//                                   class="dropdown-item"
//                                   href="


//                                                         "
//                                 >
//                                   Blog
//                                 </a>
//                               </li>

//                               <li>
//                                 <a class="dropdown-item" href="love.html">
//                                   Love
//                                 </a>
//                               </li>

//                               <li>
//                                 <a class="dropdown-item" href="vastu.html">
//                                   Vastu
//                                 </a>
//                               </li>
//                               <li>
//                                 <a
//                                   class="dropdown-item"
//                                   href="zodiac_signs.html"
//                                 >
//                                   Zodiac
//                                 </a>
//                               </li>

//                               <li>
//                                 <a class="dropdown-item" href="pooja">
//                                   Pooja
//                                 </a>
//                               </li>
//                             </ul>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header1;
