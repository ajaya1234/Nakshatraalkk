import React, { useState, useEffect, lazy, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Header1 from "./Header1";
import { useNavigate } from "react-router-dom";

const Footer = lazy(() => import('./Footer'));

function Signup() {
  const [responseData, setResponseData] = useState({});
  const navigate = useNavigate();
  const idddd = localStorage.getItem("_id");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
    hour: "",
    min: "",
    am_pm: "AM", 
  });

 
  const generateOptions = (from, to) => {
    return Array.from({ length: to - from + 1 }, (_, i) => i + from).map((value) => (
      <option key={value}>{value}</option>
    ));
  };

  useEffect(() => {
    setFormData({
      day: 6,
      month: 1,
      year: 2000,
      hour: 7,
      min: 45,
      am_pm: "AM",
    });
  }, []);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.day ||
      !formData.month ||
      !formData.year ||
      !formData.hour ||
      !formData.min ||
      !formData.am_pm
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    React.startTransition(() => {
      localStorage.setItem("userData", JSON.stringify(formData));
      console.log("User data:", formData);

      navigate("/");
    });
  };

  return (
   
    


      


      <>
    <Header1/>
      <ToastContainer />

      <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain">
                <h2>Sign In</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

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

            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Welcome To NakshatraTalkS</h3>
                  <h4>Please Submit The Details</h4>
                </div>

                <div className="input-box">
                <form className="row g-4" method="post" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <div className="custom-input">
            <div style={{ width: "100%" }}>
              <select
                style={{ width: "32%", height: "45px" }}
                name="day"
                value={formData.day}
                onChange={handleInputChange}
              >
                <option>Day</option>
                {generateOptions(1, 31)}
              </select>
              <select
                style={{ width: "32%", height: "45px" }}
                name="month"
                value={formData.month}
                onChange={handleInputChange}
              >
                <option>Month</option>
                {generateOptions(1, 12)}
              </select>
              <select
                style={{ width: "32%", height: "45px" }}
                name="year"
                value={formData.year}
                onChange={handleInputChange}
              >
                <option>Year</option>
                {generateOptions(1950, new Date().getFullYear())}
              </select>
            </div>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="birthTime" className="form-label">
            Birth Time
          </label>
          <div className="custom-input">
            <div style={{ width: "100%" }}>
              <select
                style={{ width: "32%", height: "45px" }}
                name="hour"
                value={formData.hour}
                onChange={handleInputChange}
              >
                <option>Hour</option>
                {generateOptions(1, 12)}
              </select>
              <select
                style={{ width: "32%", height: "45px" }}
                name="min"
                value={formData.min}
                onChange={handleInputChange}
              >
                <option>Minute</option>
                {generateOptions(0, 59)}
              </select>
              <select
                style={{ width: "32%", height: "45px" }}
                name="am_pm"
                value={formData.am_pm}
                onChange={handleInputChange}
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-12">
          <button type="submit"  class="btn btn-md bg-dark cart-button text-white w-80" className="btn btn-solid">
            Submit
          </button>
        </div>
      </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

       <Footer/> 
    </>
    );
    }

    export default Signup