import { Link, Navigate } from "react-router-dom";
import React from "react";
import Header1 from "./Header1";
import Live from "./Live";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Numerology() {
  const [error, setError] = useState("");
  const Navigate = useNavigate("");
  const [formData, setFormData] = useState({
    name: "",

    day: "",
    month: "",
    year: "",

    placeOfBirth: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

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


    localStorage.setItem("nameofonetarot", JSON.stringify(formData));
    Navigate("/Ruling");
  };

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

  return (
    <div>
      <Header1 />

      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row g-4">
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-2">
              <div class="row g-4 ratio_65">
                

                <div>
                  <h2
                    style={{
                      color: "#fc0",
                      fontSize: "32px",
                      fontWeight: "700",
                    }}
                    className="text-center font_yellow text-uppercase"
                  >
                    Numerology
                  </h2>
                </div>

                <div>
                  <p class="text-justify-mobile" style={{ fontSize: "16px" }}>
                    Most of the Numerology Predictions are based on your ruling
                    number and it plays a key role in deciding your destiny.
                    Your ruling number helps you decide what's best for you.
                    Make career choices based on your ruling number.
                  </p>

                  <p class="text-justify-mobile" style={{ fontSize: "16px" }}>
                    {" "}
                    This will surely help you overcome obstacles on the way and
                    achieve success in life. Numerology can also help you find
                    the perfect match for you. You can get accurate numerology
                    readings by finding out what your ruling number is. Your
                    ruling number is calculated by adding the numbers of your
                    birth date. The numbers are added till a single digit is
                    obtained, which becomes the numerology or ruling number.
                    Your numerology number consists of the blueprint to your
                    life, and the various aspects in it.
                  </p>
                </div>

                <div
                  class="col-xxl-4 col-sm-12"
                  style={{
                    border: "1px solid var(--theme-color)",
                    height: "127px",background:'#333'
                  }}
                >
                  <br />
                  
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-6">
                        
                      <div className="mb-md-4 mb-3 custom-form">
                      <div style={{ color: "#fff" , fontSize:'20px' , marginBottom:'10px' }}>Get Ruling Number Predictions</div>
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
                            <font style={{color: "#ffcc00" }}>
                    {error && <p>{error}</p>}
                  </font>
                          <br/>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                    
                      </div>

                       <div className="col-sm-6" >
                        <button
                          style={{ float: "left" , marginTop:'40px' }}
                          type="submit"
                          className="btn btn-animation btn-md fw-bold ms-auto"
                        >
                          Submit
                        </button>
                      </div> 
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <Live />
      <br />
      <Footer />
    </div>
  );
}

export default Numerology;
