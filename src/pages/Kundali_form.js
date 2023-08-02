import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Kundali_form = () => {
 

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

  const [error, setError] = useState('');







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
    const api = "birth_details";
    const userId = "623869";
    const apiKey = "46046d17a932151518470e3a08a1665a";


    if (!formData.day) {
      setError('Please Select a day.');
      return;
    }
    
    if (!formData.month) {
      setError('Please a Month .');
      return;
    }

    if (!formData.year) {
      setError('Please select a year.');
      return;
    }
    if (!formData.hour) {
      setError('Please select a Hour.');
      return;
    }

    
    if (!formData.min) {
      setError('Please a minute.');
      return;
    }

     if (!formData.name) {
      setError('Please Enter a Name.');
       return;
    }
     if (!formData.gender) {
       setError('Please select a Gender.');
      return;
    }

    

    if (!formData.birthplace) {
      setError('Please Enter Bithplace.');
     return;
   }


    const data = {
      day: Number(formData.day),
      month: Number(formData.month),
      year: Number(formData.year),
      hour: Number(formData.hour),
      min: Number(formData.min),
      lat: 19.132,
      lon: 72.342,
      tzone: 5.5,
      name:(formData.name),
      birthplace:(formData.birthplace),
      gender:(formData.gender),

    };
    localStorage.setItem("responseDatadata", JSON.stringify(data));
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
        localStorage.setItem("responseData", JSON.stringify(response.data));

navigate("/selfkundali");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });


      
  };

  return (
    <>
      <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain">
                <h2>Kundli</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fresh-vegetable-section section-lg-space">
        <div className="container-fluid-lg">
          <div className="title" style={{ padding: "5px" }}>
            <div className="row">
              <div className="col-lg-3">
                <img
                  className="img2"
                  src="../assets/images/logo/kun.jpg"
                  alt="aries"
                  width="170"
                  height="170"
                />
              </div>
              <div className="col-lg-9">
                <h2>Kundli</h2>
                <p>
                  Kundli is an astrological chart which shows the exact position
                  of heavenly bodies and planets at a particular time. Janam
                  Kundli or Horoscope is a similar astrological chart that is
                  constructed by Vedic astrologers on the basis of the exact
                  birthdate, birthplace and birth time of an individual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-section section-lg-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="about-us-title text-center">
                <h2 className="center">Get Your free Janam Kundli</h2>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="right-sidebar-box">
              <font style={{color:'blue'}}>{error && <p >{error}</p>}</font>
                <form onSubmit={handleSubmit}>
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
                            name="name"
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-6 col-lg-6 col-sm-6">
                      <div className="mb-md-4 mb-3 custom-form">
                        <label htmlFor="gender" className="form-label">
                          Gender
                        </label>
                        <div className="custom-input">
                          <input
                            type="text"
                            className="form-control"
                            id="gender"
                            name="gender"
                            placeholder="Select Gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-6 col-lg-6 col-sm-6">
                      <div className="mb-md-4 mb-3 custom-form">
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
                              {generateDayOptions()}
                            </select>
                            <select
                              style={{ width: "32%", height: "45px" }}
                              name="month"
                              value={formData.month}
                              onChange={handleInputChange}
                            >
                              <option>Month</option>
                              {generateMonthOptions()}
                            </select>
                            <select
                              style={{ width: "32%", height: "45px" }}
                              name="year"
                              value={formData.year}
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
                      <div className="mb-md-4 mb-3 custom-form">
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
                              {generateHourOptions()}
                            </select>
                            <select
                              style={{ width: "32%", height: "45px" }}
                              name="min"
                              value={formData.min}
                              onChange={handleInputChange}
                            >
                              <option>Minute</option>
                              {generateMinuteOptions()}
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
                    </div>

                    
                    <div className="col-xxl-6 col-lg-6 col-sm-6">
                      <div className="mb-md-4 mb-3 custom-form">
                        <label htmlFor="name" className="form-label">
                          Birth Place
                        </label>
                        <div className="custom-input">
                          <input
                            type="text"
                            className="form-control"
                            id="birthplace"
                            name="birthplace"
                            placeholder="Enter Your Bith Place"
                            value={formData.birthplace}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                      </div>
                      <div className="col-xxl-6 col-lg-3 col-sm-6">
                      <div className="mb-md-4 mb-3 custom-form">
                        <div className="custom-input">
                        <button
                            type="submit"
                            className="btn btn-animation btn-md fw-bold ms-auto"
                          >
                            Get Your Kundli
                          </button>
                        </div>
                      </div>
                    </div>
                    </div>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kundali_form;
