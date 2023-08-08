import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div>
        <footer class="section-t-space footer-section-2 footer-color-3">
          <div class="container-fluid-lg">
            <div class="main-footer">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-6">
                  <a href="index-2.html" class="foot-logo theme-logo">
                    {/* <img
                      src="../assets/images/logo/222.png"
                      class="img-fluid blur-up lazyload"
                      alt=""
                    /> */}


<img src="assets/121.png" class="img-fluid blur-up lazyloaded" alt=""/>
                  </a>

                  <ul class="social-icon">
                    <li class="light-bg">
                      <a
                        href="https://www.facebook.com/"
                        class="footer-link-color"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="light-bg">
                      <a
                        href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin"
                        class="footer-link-color"
                      >
                        <i class="fab fa-google"></i>
                      </a>
                    </li>
                    <li class="light-bg">
                      <a
                        href="https://twitter.com/i/flow/login"
                        class="footer-link-color"
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="light-bg">
                      <a
                        href="https://www.instagram.com/"
                        class="footer-link-color"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li class="light-bg">
                      <a
                        href="https://in.pinterest.com/"
                        class="footer-link-color"
                      >
                        <i class="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>

                  <div class="footer-title">
                    <h4 class="text-white">Contact Us</h4>
                  </div>
                  <ul class="footer-address footer-contact">
                    <li>
                      <a href="javascript:void(0)" class="light-text">
                        <div class="inform-box flex-start-box">
                          <i data-feather="mail"></i>
                          <p>Email : Contact@Nakshatratalk.com</p>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="javascript:void(0)" class="light-text">
                        <div class="inform-box">
                          <i data-feather="phone"></i>
                          <p>Call us: </p>
                        </div>
                      </a>
                    </li>

                    {/* <!-- <li>
                                <a href="javascript:void(0)" class="light-text">
                                    <div class="inform-box">
                                        <i data-feather="mail"></i>
                                        <p>Email Us: Support@Fastkart.com</p>
                                    </div>
                                </a>
                           
                                <a href="javascript:void(0)" class="light-text">
                                    <div class="inform-box">
                                        <i data-feather="printer"></i>
                                        <p>Fax: 123456</p>
                                    </div>
                                </a>
                            </li> --> */}
                  </ul>

                  <div class="footer-title" style={{ paddingTop: "20px" }}>
                    <h4 class="text-white">Corporate Policy</h4>
                  </div>
                  <ul class="footer-list footer-contact footer-list-light">
                    <li>
                      <Link to="/PrivacyPolicy" class="light-text">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to='/PrivacyPolicy' class="light-text">
                        Terms Of Use
                      </Link>
                    </li>
                    <li>
                      <Link to='#' class="light-text">
                        Refund & Cancellation
                      </Link>
                    </li>
                    <li>
                    <Link to='#' class="light-text">
                        Disclaimer
                      </Link>
                    </li>
                    <li>
                    <Link to='#' class="light-text">
                        Cookies Policy
                      </Link>
                    </li>
                  </ul>
                  <div class="footer-title" style={{ paddingTop: "20px" }}>
                    <h4 class="text-white">Secure</h4>
                  </div>
                  <ul class="footer-list footer-list-light footer-contact">
                    <li>
                    <Link to='/AstrologersList' class="light-text">
                        Verified Best Astrologers
                      </Link>
                    </li>
                    <li>
                    <Link to='#' class="light-text">
                        Secure Payments
                      </Link>
                    </li>
                    <li>
                    <Link to='/PrivacyPolicy' class="light-text">
                        Privacy & Confidentiality
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* <!-- <div class="col-lg-3 col-md-4 col-6">
                        
                    </div> --> */}

                <div class="col-lg-3 col-md-4 col-6">
                  <div class="footer-title">
                    <h4 class="text-white">Auspicious Muhurat</h4>
                  </div>
                  <ul class="footer-list footer-contact footer-list-light">
                    <li>
                      <Link to="#" class="light-text">
                        Marriage{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to='/muhurat' class="light-text">
                        Bhoomi Pujan
                      </Link>
                    </li>
                    <li>
                    <Link to='/muhurat' class="light-text">
                        Griha Pravesh
                      </Link>
                    </li>
                    <li>
                    <Link to='/muhurat' class="light-text">
                        Gold Purchase
                      </Link>
                    </li>
                    <li>
                    <Link to='/muhurat' class="light-text">
                        Mundan
                      </Link>
                    </li>
                    <li>
                    <Link to='/muhurat' class="light-text">
                        Naamkaran
                      </Link>
                    </li>
                    <li>
                    <Link to='/muhurat' class="light-text">
                        Vehicle Purchase
                      </Link>
                    </li>
                  </ul>

                  <div class="footer-title" style={{ paddingTop: "20px" }}>
                    <h4 class="text-white">Shopping</h4>
                  </div>
                  <ul class="footer-list footer-contact footer-list-light">
                    <li>
                    <Link to='/pooja' class="light-text">
                        Nakshatra Pooja{" "}
                      </Link>
                    </li>
                    <li>
                    <Link to='#' class="light-text">
                        Nakshatra Mart
                      </Link>
                    </li>
                  </ul>

                  {/*                         
                        <!-- <div class="col-lg-3 col-md-4 col-6"> -->
                            
                        <!-- </div> --> */}
                </div>

                <div class="col-lg-3 col-md-4 col-6">
                  <div class="footer-title">
                    <h4 class="text-white">Important Links</h4>
                  </div>
                  <ul class="footer-list footer-list-light footer-contact">
                    <li>
                    <Link to='/kundali' class="light-text">
                        Kundli
                      </Link>
                    </li>
                    <li>
                    <Link to='/kundali_milan' class="light-text">
                        Kundli Matching
                      </Link>
                    </li>
                    <li>
                    <Link to='/kundali_milan' class="light-text">
                        Doshas in Kundli
                      </Link>
                    </li>
                    <li>
                    <Link to='/panchang' class="light-text">
                        Panchang
                      </Link>
                    </li>
                    <li>
                      <Link to='/AstrologersList' class="light-text">
                        Call Astrologer
                      </Link>
                    </li>
                    <li>
                      <Link to='/chatastrologer' class="light-text">
                        Chat Astrologer
                      </Link>
                    </li>
                    <li>
                      <Link to='/tarot' class="light-text">
                        Tarot
                      </Link>
                    </li>
                    <li>
                      <Link to="#" class="light-text">
                        Palmistry
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog' class="light-text">
                        Nakshatra Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/Reviews" class="light-text">
                        Nakshatra Reviews
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-4 col-6">
                  <div class="footer-title">
                    <h4 class="text-white">Festivals</h4>
                  </div>
                  <ul class="footer-list footer-list-light footer-contact">
                    <li>
                      <Link to="#" class="light-text">
                        Holi
                      </Link>
                    </li>
                    <li>
                      <Link to="#" class="light-text">
                        Chaitra Navratri
                      </Link>
                    </li>
                    <li>
                    <Link to="#" class="light-text">
                        Raksha Bandhan
                      </Link>
                    </li>
                    <li>
                    <Link to="#" class="light-text">
                        Sharadiya Navratri
                      </Link>
                    </li>
                    <li>
                    <Link to="#" class="light-text">
                        Dussehra
                      </Link>
                    </li>
                    <li>
                    <Link to="#" class="light-text">
                        Diwali
                      </Link>
                    </li>
                  </ul>

                  <div class="footer-title" style={{ paddingTop: "20px" }}>
                    <h4 class="text-white">For Astrologer</h4>
                  </div>
                  <ul class="footer-list footer-list-light footer-contact">
                    <li>
                      <a
                        href="C:/Users/Dell/Desktop/Nakshatratalk-astro/pages/examples/sign-in.html"
                        class="light-text"
                      >
                        Astrologer Login
                      </a>
                    </li>
                    <li>
                      <a
                        href="C:/Users/Dell/Desktop/Nakshatratalk-astro/pages/examples/sign-up.html"
                        class="light-text"
                      >
                        Astrologer Registration
                      </a>
                    </li>
                  </ul>

                  <div class="footer-title" style={{ paddingTop: "20px" }}>
                    <h4 class="text-white">Download Our App</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          src="../assets/images/app/android.png"
                          style={{ height: " 70px", width: "200px" }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="../assets/images/app/ios.png"
                          style={{ height: " 70px", width: "200px" }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-6"></div>
            </div>
          </div>

          <div class="sub-footer sub-footer-lite  section-t-space">
            <div class="left-footer">
              <p class="light-text">2022 Copyright By NakshatraTalk</p>
            </div>

            <ul class="payment-box">
              <li>
                <img
                  src="../assets/images/icon/paymant/visa.png"
                  class="blur-up lazyload"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="../assets/images/icon/paymant/discover.png"
                  alt=""
                  class="blur-up lazyload"
                />
              </li>
              <li>
                <img
                  src="../assets/images/icon/paymant/american.png"
                  alt=""
                  class="blur-up lazyload"
                />
              </li>
              <li>
                <img
                  src="../assets/images/icon/paymant/master-card.png"
                  alt=""
                  class="blur-up lazyload"
                />
              </li>
              <li>
                <img
                  src="../assets/images/icon/paymant/giro-pay.png"
                  alt=""
                  class="blur-up lazyload"
                />
              </li>
            </ul>
          </div>
        </footer>

        {/* <!-- Footer Section End --> */}
      </div>
    </>
  );
};
export default Footer;
