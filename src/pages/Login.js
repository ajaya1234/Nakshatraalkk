import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";

function Login() {
  let navigate = useNavigate();
  const [ott, setOtt] = useState("");
  const [mobile_no, setMobile_No] = useState({
    mobile_no: "",
  });

  const [btn, setBtn] = useState(false);
  let inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMobile_No({ ...mobile_no, [name]: value });
  };

  let formHandel = async (event) => {
    event.preventDefault();
    let result = await axios.post(
      `http://103.104.74.215:3012/api/user/signup`,
      mobile_no
    );
    setBtn(true);
    console.log(result.data.data);
    if (result.data.data) {
      console.log(result.data.data[0].otp);
      console.log(result.data.data[0]._id);
      toast("otp sent successfully");
      toast(result.data.data[0].otp);
      let _id = result.data.data[0]._id;
      setVerifyOtp({ ...verifyOtp, _id });
      localStorage.setItem("_id", JSON.stringify(_id));
    }
  };

  const [verifyOtp, setVerifyOtp] = useState({
    _id: "",
    otp: "",
  });

  useEffect(() => {
    let otp = ott;

    setVerifyOtp({ ...verifyOtp, otp });
  }, [ott]);

  let submitOtpHandle = (event) => {
    event.preventDefault();

    console.log(verifyOtp);
    axios
      .post(`http://103.104.74.215:3012/api/user/verify_otp`, verifyOtp)
      .then((res) => {
        console.log(res);
        if (res.data.result) {
          console.log(verifyOtp);
          toast.success(res.data.msg);

          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          toast.error("invalid otp");
        }
      });
  };
  const resendOtp = () => {
    axios
      .patch(`http://103.104.74.215:3012/api/user/resend_otp/`, mobile_no)
      .then((res) => {
        console.log(res);

        if (res.data.result) {
          toast.success(res.data.msg);
          toast.success(res.data.data.otp);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const otpInputStyle = {
    width: "100px",
    height: "100px",
  };

  const inputStyle = {
    width: "100px",
    height: "50px",
    // Add any additional styles you want here
  };
  const inputProps = {
    type: "number",
  };
  return (
    <>
      <ToastContainer />
      {/* <!-- Breadcrumb Section Start --> */}
      <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain">
                <h2>Log In</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    {/* <li className="breadcrumb-item">
                      <a href="index-2.html">
                        <i className="fa-solid fa-house"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Log In</li> */}
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- log in section start --> */}
      <section className="log-in-section otp-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img
                  src="../assets/images/inner-page/otp.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="log-in-box">
                  <div className="log-in-title">
                    <h3>Welcome To Nakshatra Talk</h3>
                    {btn === true ? (
                      <div>
                        <div className="log-in-title">
                          <h5 className="text-content">
                            A code has been sent to <span>*******1211</span>
                          </h5>
                        </div>

                        <form action="" method="post">
                          <div
                            id="otp"
                            className="inputs d-flex flex-row justify-content-center"
                          >
                            <OtpInput
                              value={ott}
                              onChange={setOtt}
                              numInputs={4}
                              // renderSeparator={<span>-</span>}
                              inputStyle={inputStyle}
                              style={otpInputStyle}
                              renderInput={(props) => <input {...props} />}
                              inputProps={inputProps}
                            />
                          </div>

                          <div className="send-box pt-4" onClick={resendOtp}>
                            <h5>
                              Didn't get the code?{" "}
                              <a
                                href="javascript:void(0)"
                                className="theme-color fw-bold"
                              >
                                Resend It
                              </a>
                            </h5>
                          </div>
                          <a>
                            <button
                              className="btn  w-100 mt-3"
                              type="submit"
                              onClick={submitOtpHandle}
                              style={{
                                backgroundColor: "#d99f46",
                                fontWeight: "bold",
                                color: "white",
                              }}
                            >
                              verify otp
                            </button>
                          </a>
                        </form>
                      </div>
                    ) : (
                      <div>
                        <p>
                          Please enter your mobile number to Login/Sign Up on
                          Nakshatra Talk
                        </p>

                        <div className="col-12">
                          <form method="post" onSubmit={formHandel}>
                            <div className="form-floating theme-form-floating log-in-form">
                              <input
                                type="number"
                                className="form-control"
                                id="email"
                                placeholder="Mobile Number"
                                name="mobile_no"
                                onChange={inputHandle}
                                maxLength={10}
                              />
                              <label>Mobile Number</label>
                            </div>
                            <a>
                              <button
                                style={{
                                  backgroundColor: "#d99f46",
                                  fontWeight: "bold",
                                  color: "white",
                                }}
                                className="btn w-100 "
                                type="submit"
                              >
                                Generate otp
                              </button>
                            </a>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- log in section end --> */}
    </>
  );
}

export default Login;
