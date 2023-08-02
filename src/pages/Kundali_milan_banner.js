import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Kundali_milan_banner = () => {
  const [responseData, setResponseData] = useState();
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    min: "",
    am_pm: "",
    placeOfBirth: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateDayOptions = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    return days.map((day) => <option key={day}>{day}</option>);
  };

  const generateMonthOptions = () => {
    return Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
      <option key={month} value={month}>
        {new Date(0, month - 1).toLocaleString("default", { month: "long" })}
      </option>
    ));
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from(
      { length: currentYear - 1950 + 1 },
      (_, i) => currentYear - i
    );
    return years.map((year) => <option key={year}>{year}</option>);
  };

  const generateHourOptions = () => {
    const hours = Array.from({ length: 12 }, (_, i) => i + 1);
    return hours.map((hour) => <option key={hour}>{hour}</option>);
  };

  const generateMinuteOptions = () => {
    const minutes = Array.from({ length: 60 }, (_, i) => i);
    return minutes.map((minute) => (
      <option key={minute}>{minute.toString().padStart(2, "0")}</option>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const api = "match_birth_details";
    const userId = "623869";
    const apiKey = "46046d17a932151518470e3a08a1665a";
  
    if (!formData.day) {
      setError("Please Select a day.");
      return;
    }
  
    if (!formData.month) {
      setError("Please a Month .");
      return;
    }
  
    if (!formData.year) {
      setError("Please select a year.");
      return;
    }
    if (!formData.hour) {
      setError("Please select a Hour.");
      return;
    }
  
    if (!formData.min) {
      setError("Please a minute.");
      return;
    }
  
    if (!formData.name) {
      setError("Please Enter a Name.");
      return;
    }
    if (!formData.gender) {
      setError("Please select a Gender.");
      return;
    }
  
    
    const data = {
      m_day: Number(formData.m_day),
      m_month: Number(formData.m_month),
      m_year: Number(formData.m_year),
      m_hour: Number(formData.m_hour),
      m_min: Number(formData.m_min),
      m_lat: 19.132,
      m_lon: 72.342,
      m_tzone: 5.5, 
      f_day: Number(formData.f_day),
      f_month: Number(formData.f_month),
      f_year: Number(formData.f_year),
      f_hour: Number(formData.f_hour),
      f_min: Number(formData.f_min),
      f_lat: 19.132,
      f_lon: 72.342,
      f_tzone: 5.5, 
    };
  

    const auth = "Basic " + btoa(userId + ":" + apiKey);
  
    axios
      .post(`https://json.astrologyapi.com/v1/${api}`, data, {
        headers: {
          authorization: auth,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResponseData(response.data);
        localStorage.setItem("responseDataofbirth", JSON.stringify(response.data));
        
        navigate("/kundalireport");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  

  return (
    <>
      

      <section class="home-section pt-2">
        <div
          class="container-fluid-lg"
          style={{
            background: "linear-gradient(to bottom, #00cc00 0%, #ff99cc 100%)",
          }}
        >
          <img align="right" src="../assets/images/logo/hs.png" width="100%" />
        </div>
      </section>
      
      <section>
        <div class="container-fluid-lg">
          <div class="title" style={{ paddingTop: "20px" }}>
            <h2 style={{ textAlign: "center" }}>
              Free Match Making - Kundli Milan &amp; Gun Milan to Check
              Possibilities of Marriage
            </h2>

            <p>
              {" "}
              The success of a marriage depends on your own values, tolerance,
              and adjustment skills, such traits in a person are easily known by
              reading his or her horoscope. And they can be matched with another
              horoscope through Kundli Milan.
            </p>

            <p>
              Kundli Milan helps in understanding the issues a couple might face
              in their marital life. Kundli Milan work as a guiding force,
              giving you a overview of areas which are strong as a couple and
              where would you both need to work upon.
            </p>

            <p>
              Vedic astrology enthusiasts are usually familiar with the concept
              of Guna Milaan. In fact, Guna Milaan and Kundli matching for
              marriage are often seen as the same. This is not the case. Guna
              Milaan is just one part of it. While matching Janam Kundli of both
              bride and groom, several factors are assessed. The position of
              natal Moon is assessed in both the partner’s chart.{" "}
            </p>

            <p>
              For example, An expert astrologer would also assess both the chart
              for presence of Mangal Dosha. If it exists in both the chart, the
              effect nullifies but if it exists in one of the charts, some
              serious remedies are suggested to mitigate the harmful effects
              based on the severity of the Dosha. If your Moon occupies the 6th
              house and your partner’s Moon is placed 8th then it is considered
              inauspicious for a marriage. The strength of 7th house of partner
              and 7th lord is also taken into account when conducting horoscope
              matching.
            </p>
          </div>
        </div>
      </section>
      
      <section class="seller-grid-section">
        <div class="container-fluid-lg">
          <h2>Fill Up Partner's Detail</h2>
          <br />

          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="seller-grid-box">
                <div class="grid-contain">
                  <div class="col-lg-12">
                    {/* <div class="title d-xxl-none d-block">
                      <h2>Male</h2>
                    </div> */}
                    <div className="right-sidebar-box">
                      <font style={{ color: "blue" }}>
                        {error && <p>{error}</p>}
                      </font>
                      <form onSubmit={handleSubmit}>
  <div className="row">
    {/* Male Details */}
    <div className="col-lg-6 col-md-6">
      <div className="seller-grid-box">
        <div className="grid-contain">
          <div className="col-lg-12">
            <div className="title d-xxl-none d-block">
              <h2>Male</h2>
            </div>
            <div className="right-sidebar-box">
              <font style={{ color: "blue" }}>
                {error && <p>{error}</p>}
              </font>
              <div className="row">
                <div className="col-xxl-6 col-lg-6 col-sm-6">
                 
                  <div className="mb-md-4 mb-3 custom-form">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <div className="custom-input">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="m_name"
                        placeholder="Enter Your Name"
                        value={formData.m_name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-lg-6 col-sm-6">
                  {/* Male Gender */}
                  <div className="mb-md-4 mb-3 custom-form">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <div className="custom-input">
                      <input
                        type="text"
                        className="form-control"
                        id="gender"
                        name="m_gender"
                        placeholder="Select Gender"
                        value={formData.m_gender}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-lg-6 col-sm-6">
                  {/* Male Date of Birth */}
                  <div className="mb-md-4 mb-3 custom-form">
                    <label htmlFor="dob" className="form-label">
                      Date of Birth
                    </label>
                    <div className="custom-input">
                      <div style={{ width: "100%" }}>
                        <select
                          style={{ width: "32%", height: "45px" }}
                          name="m_day"
                          value={formData.m_day}
                          onChange={handleInputChange}
                        >
                          <option>Day</option>
                          {generateDayOptions()}
                        </select>
                        <select
                          style={{ width: "32%", height: "45px" }}
                          name="m_month"
                          value={formData.m_month}
                          onChange={handleInputChange}
                        >
                          <option>Month</option>
                          {generateMonthOptions()}
                        </select>
                        <select
                          style={{ width: "32%", height: "45px" }}
                          name="m_year"
                          value={formData.m_year}
                          onChange={handleInputChange}
                        >
                          <option>Year</option>
                          {generateYearOptions()}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-lg-6 col-sm-6">
                  {/* Male Birth Time */}
                  <div className="mb-md-4 mb-3 custom-form">
                    <label htmlFor="birthTime" className="form-label">
                      Birth Time
                    </label>
                    <div className="custom-input">
                      <div style={{ width: "100%" }}>
                        <select
                          style={{ width: "32%", height: "45px" }}
                          name="m_hour"
                          value={formData.m_hour}
                          onChange={handleInputChange}
                        >
                          <option>Hour</option>
                          {generateHourOptions()}
                        </select>
                        <select
                          style={{ width: "32%", height: "45px" }}
                          name="m_min"
                          value={formData.m_min}
                          onChange={handleInputChange}
                        >
                          <option>Minute</option>
                          {generateMinuteOptions()}
                        </select>
                        <select
                          style={{ width: "32%", height: "45px" }}
                          name="m_am_pm"
                          value={formData.m_am_pm}
                          onChange={handleInputChange}
                        >
                          <option>AM</option>
                          <option>PM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-12 col-lg-12 col-sm-12">
                 
                  <div className="mb-md-6 mb-3 custom-form">
                    <label htmlFor="name" className="form-label">
                      Birth Place
                    </label>
                    <div className="custom-input">
                      <input
                        type="text"
                        className="form-control"
                        id="place"
                        name="m_birthplace"
                        placeholder="Enter Your Birth-place"
                        value={formData.m_birthplace}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Female Details */}
    <div className="col-lg-6 col-md-6">
      <div className="seller-grid-box">
        <div className="grid-contain">
          <div className="col-lg-12">
            <div className="title d-xxl-none d-block">
              <h2>Female</h2>
            </div>
            <div className="right-sidebar-box">
              <font style={{ color: "blue" }}>
                {error && <p>{error}</p>}
              </font>
              <div className="row">
                <div className="col-xxl-6 col-lg-6 col-sm-6">
                  {/* Female Name */}
                  <div className="mb-md-4 mb-3 custom-form">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <div className="custom-input">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="f_name"
                        placeholder="Enter Your Name"
                        value={formData.f_name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-lg-6 col-sm-6">
                  {/* Female Gender */}
                  <div className="mb-md-4 mb-3 custom-form">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <div className="custom-input">
                      <input
                        type="text"
                        className="form-control"
                        id="gender"
                        name="f_gender"
                        placeholder="Select Gender"
                        value={formData.f_gender}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-lg-6 col-sm-6">
                  {/* Female Date of Birth */}
                  <div className="mb-md-4 mb-3 custom-form">
                    <label htmlFor="dob" className="form-label">
                      Date of Birth
                    </label>
                    <div className="custom-input">
                      <div style={{ width: "100%" }}>
                        <select
                          style={{ width: "32%", height: "45px" }}
                          name="f_day"
                          value={formData.f_day}
                          onChange={handleInputChange}
                        >
                          <option>Day</option>
                          {generateDayOptions()}
                        </select>
                        <select
                          style={{ width: "32%", height: "45px" }}
                          name="f_month"
                          value={formData.f_month}
                          onChange={handleInputChange}
                        >
                          <option>Month</option>
                          {generateMonthOptions()}
                        </select>
                        <select
                          style={{ width: "32%", height: "45px" }}
                          name="f_year"
                          value={formData.f_year}
                          onChange={handleInputChange}
                        >
                          <option>Year</option>
                          {generateYearOptions()}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-lg-6 col-sm-6">
                  {/* Female Birth Time */}
                  <div className="mb-md-4 mb-3 custom-form">
                    <label htmlFor="birthTime" className="form-label">
                      Birth Time
                    </label>
                    <div className="custom-input">
                      <div style={{ width: "100%" }}>
                        <select
                          style={{ width: "32%", height: "45px" }}
                          name="f_hour"
                          value={formData.f_hour}
                          onChange={handleInputChange}
                        >
                          <option>Hour</option>
                          {generateHourOptions()}
                        </select>
                        <select
                          style={{ width: "32%", height: "45px" }}
                          name="f_min"
                          value={formData.f_min}
                          onChange={handleInputChange}
                        >
                          <option>Minute</option>
                          {generateMinuteOptions()}
                        </select>
                        <select
                          style={{ width: "32%", height: "45px" }}
                          name="f_am_pm"
                          value={formData.f_am_pm}
                          onChange={handleInputChange}
                        >
                          <option>AM</option>
                          <option>PM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-12 col-lg-12 col-sm-12">
                 
                 <div className="mb-md-4 mb-3 custom-form">
                   <label htmlFor="name" className="form-label">
                     Birth Place
                   </label>
                   <div className="custom-input">
                     <input
                       type="text"
                       className="form-control"
                       id="place"
                       name="f_birthplace"
                       placeholder="Enter Your Bith-place"
                       value={formData.f_birthplace}
                       onChange={handleInputChange}
                     />
                   </div>
                 </div>
               </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Link to='/kundalireport'>
  <button
    type="submit"
    className="btn btn-animation btn-md fw-bold ms-auto"
    style={{ borderRadius: "20px" }}
  >
    Match Horoscope
  </button></Link>
</form>

                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
          
        </div>
      </section>
      
    </>
  );
};

export default Kundali_milan_banner;
