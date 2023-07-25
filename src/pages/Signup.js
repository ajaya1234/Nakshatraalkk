import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "./baseUrl";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Header1 from "./Header1";

function Signup() {
  const navigate = useNavigate();
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [email, setEmail] = useState("");

  const [verifyDiv, setVerifyDiv] = useState(false);

  const [mobile_no, setMobile_No] = useState({
    mobile_no: "",
  });
  const [lastMobileNo, setLastMobileNo] = useState("");

  let inputHandel = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)

    const name = event.target.name;
    const value = event.target.value;
    setMobile_No({ ...mobile_no, [name]: value });
  };

  let FormHanel = async (event) => {
    event.preventDefault();
    // console.log(mobile_no);
    let result = await axios.post(
      `http://103.104.74.215:3012/api/user/signup`,
      mobile_no
    );
    console.log(result.data.data.otp);

    // console.log(result.data.result)

    setVerifyDiv(true);

    if (result.data.result) {
      console.log(result.data.data._id);
      console.log(result.data.data.otp);
      toast.success(result.data.data.otp);
      let _id = result.data.data._id;
      setVerifyOtp({ ...verifyOtp, _id });
    }
  };

  const [verifyOtp, setVerifyOtp] = useState({
    otp: "",
    _id: "",
  });

  const inputotpHandel = (event) => {
    setVerifyOtp({ ...verifyOtp, [event.target.name]: event.target.value });
  };

  let FormOtpHandel = (event) => {
    event.preventDefault();
    console.log(verifyOtp);
    axios
      .post(`http://103.104.74.215:3012/api/user/verify_otp`, verifyOtp)
      .then((res) => {
        console.log(res.data);
        if (res.data.result) {
          toast.success(res.data.msg);
          navigate("/");
        } else {
          toast.error("invalid otp");
        }
      });
  };

  const resendOtp = () => {
    axios.patch(`http://103.104.74.215:3012/api/user/resend_otp/` ,mobile_no)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <Header1/>
      <ToastContainer />
      {/* <!-- Breadcrumb Section Start --> */}
      <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain">
                <h2>Sign In</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index-2.html">
                        <i className="fa-solid fa-house"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Sign In</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- log in section start --> */}
      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img
                  src="../assets/images/inner-page/sign-up.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            {verifyDiv === true ? (
              <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                <div className="log-in-box">
                  <div className="log-in-title">
                    <h3>Welcome To NakshatraTalk</h3>
                    <h4>Create New Account</h4>
                  </div>

                  <div className="input-box">
                    <form
                      className="row g-4"
                      method="post"
                      onSubmit={FormOtpHandel}
                    >
                      <div className="log-in-title">
                        {/* <!-- <h3 className="text-title">Please enter the one time password to verify your account</h3> --> */}
                        <h5 className="text-content">
                          A code has been sent to <span>*******9897</span>
                        </h5>
                      </div>

                      <div
                        id="otp"
                        className="inputs d-flex flex-row justify-content-center"
                      >
                        <input
                          className="text-center form-control rounded"
                          type="text"
                          id="first"
                          name="otp"
                          onChange={inputotpHandel}
                          placeholder="0"
                        />
                      </div>

                      <div className="col-12">
                        {/* <Link to="/login"> */}
                        <button
                          className="btn btn-animation w-100 mt-3"
                          type="submit"
                        >
                          Verify OTP
                        </button>
                        {/* </Link> */}
                      </div>
                    </form>
                  </div>
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <label>Didn't recieve code?</label>
                    <b
                      style={{
                        color: "#DB4437",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={resendOtp}
                    >
                      Resend OTP
                    </b>
                  </div>
                  <div className="other-log-in">
                    <h6>or</h6>
                  </div>

                  <div className="log-in-button">
                    <ul>
                      <li>
                        <a
                          href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin"
                          className="btn google-button w-100"
                        >
                          <img
                            src="../assets/images/inner-page/google.png"
                            className="blur-up lazyload"
                            alt=""
                          />
                          Sign up with Google
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="btn google-button w-100"
                        >
                          <img
                            src="../assets/images/inner-page/facebook.png"
                            className="blur-up lazyload"
                            alt=""
                          />{" "}
                          Sign up with Facebook
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="other-log-in">
                    <h6></h6>
                  </div>

                  <div className="sign-up-box">
                    <h4>Already have an account?</h4>
                    <a href="otp.html">Log In</a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                <div className="log-in-box">
                  <div className="log-in-title">
                    <h3>Welcome To NakshatraTalk</h3>
                    <h4>Create New Account</h4>
                  </div>

                  <div className="input-box">
                    <form
                      className="row g-4"
                      method="post"
                      onSubmit={FormHanel}
                    >
                      {/* <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input  
                          type="text"
                          className="form-control"
                        //   value={fname}
                          onChange={(e) => setFname(e.target.value)}
                          id="fname"
                          placeholder="Full Name"
                        />
                        <label for="fullname">Full Name</label>
                      </div>
                    </div> */}

                      {/* <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="text"
                          className="form-control"
                          value={lname}
                          onChange={(e) => setLname(e.target.value)}
                          id="lname"
                          placeholder="Full Name"
                        />
                        <label for="fullname">Last Name</label>
                      </div>
                    </div> */}

                      {/* <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="text"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          placeholder="email Number"
                        />
                        <label for="email">Email</label>
                      </div>
                    </div> */}

                      <div className="col-12">
                        <div className="form-floating theme-form-floating">
                          <input
                            type="number"
                            name="mobile_no"
                            onChange={inputHandel}
                            className="form-control"
                            id="phone"
                            placeholder=" Number"
                          />
                          <label>Mobile</label>
                        </div>
                      </div>
                      {/* <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          id="password"
                          placeholder="Password"
                        />
                        <label for="password">Password</label>
                      </div>
                    </div> */}

                      <div className="col-12">
                        <div className="forgot-box">
                          <div className="form-check ps-0 m-0 remember-box">
                            <input
                              className="checkbox_animated check-box"
                              type="checkbox"
                              id="flexCheckDefault"
                            />
                            <label className="form-check-label">
                              I agree with
                              <span>Terms</span> and <span>Privacy</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        {/* <Link to="/login"> */}
                        <button
                          className="btn btn-animation w-100 mt-3"
                          type="submit"
                        >
                          Generate OTP
                        </button>
                        {/* </Link> */}
                      </div>
                    </form>
                  </div>

                  <div className="other-log-in">
                    <h6>or</h6>
                  </div>

                  <div className="log-in-button">
                    <ul>
                      <li>
                        <a
                          href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin"
                          className="btn google-button w-100"
                        >
                          <img
                            src="../assets/images/inner-page/google.png"
                            className="blur-up lazyload"
                            alt=""
                          />
                          Sign up with Google
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="btn google-button w-100"
                        >
                          <img
                            src="../assets/images/inner-page/facebook.png"
                            className="blur-up lazyload"
                            alt=""
                          />{" "}
                          Sign up with Facebook
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="other-log-in">
                    <h6></h6>
                  </div>

                  <div className="sign-up-box">
                    <h4>Already have an account?</h4>
                    <a href="otp.html">Log In</a>
                  </div>
                </div>
              </div>
            )}

            <div className="col-xxl-7 col-xl-6 col-lg-6"></div>
          </div>
        </div>
      </section>
      {/* <!-- log in section end --> */}
    </>
  );
}

export default Signup;
