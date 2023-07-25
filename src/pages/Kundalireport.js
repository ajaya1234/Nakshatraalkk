import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import Header1 from "./Header1";
import Footer from "./Footer";
import Live from "./Live";

function Kundalireport() {
  const [responseData, setResponseData] = useState({});
  const [responseData1, setResponseData1] = useState(null);
  const storedResponseData = localStorage.getItem("responseDataofbirth");
 
     const parsedResponseData = JSON.parse(storedResponseData);
    



 
  
  useEffect(() => {
    const api = "match_ashtakoot_points";
    const userId = "623869";
    const apiKey = "46046d17a932151518470e3a08a1665a";

    const data = {
      m_day: 5,
      m_month: 1,
      m_year: 2000,
      m_hour: 7,
      m_min: 45,
      m_lat: 19.132,
      m_lon: 72.342,
      m_tzone: 5.5,
      f_day: 7,
      f_month: 1,
      f_year: 2000,
      f_hour: 7,
      f_min: 45,
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
        setResponseData1(response.data);
        console.log("Matchinggggaaa", response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, {}); 

  useEffect(() => {
    const api = "match_manglik_report?day=6&month=1&year=2000&hour=7&min=45&lat=19.132&lon=72.342&tzone=5.5";
    const userId = "623869";
    const apiKey = "46046d17a932151518470e3a08a1665a";

    const data = {
      m_day: 5,
      m_month: 1,
      m_year: 2000,
      m_hour: 7,
      m_min: 45,
      m_lat: 19.132,
      m_lon: 72.342,
      m_tzone: 5.5,
      f_day: 7,
      f_month: 1,
      f_year: 2000,
      f_hour: 7,
      f_min: 45,
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
        console.log("Matchingggg", response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, {});


  return (
    <div>
      <Header1 />
      <section class="seller-grid-section">
        <div class="container-fluid-lg">
          <h2>Kundli Matching Report</h2>
          <br />

          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="seller-grid-box">
                <div class="grid-contain">
                  <div class="col-lg-12">
                    <div class="title d-xxl-none d-block">
                      {/* <h2>Male</h2> */}
                    </div>
                    <div class="right-sidebar-box">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="custom-form">
                            <label
                              for="exampleFormControlInput"
                              class="form-label"
                            >
                              <h2>Name</h2>
                            </label>
                            <div class="custom-input">
                              <p class="form-control">Name</p>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Date of Birth</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="form-control">1|Apr|2018 |2:14 AM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Janm Rashi</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                              <p class="form-control">Virgo</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xxl-6 col-lg-12 col-sm-6">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput"
                              class="form-label"
                            >
                              <h2>Rashi Lord</h2>
                            </label>
                            <div class="custom-input">
                            <p class="form-control">Mercury</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="seller-grid-box">
                <div class="grid-contain">
                <div class="col-lg-12">
                    <div class="title d-xxl-none d-block">
                      {/* <h2>FeMale</h2> */}
                    </div>
                    <div class="right-sidebar-box">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="custom-form">
                            <label
                              for="exampleFormControlInput"
                              class="form-label"
                            >
                              <h2>Name</h2>
                            </label>
                            <div class="custom-input">
                              <p class="form-control">Name</p>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Date of Birth</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="form-control">1|Apr|2018 |2:14 AM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Janm Rashi</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                              <p class="form-control">Virgo</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xxl-6 col-lg-12 col-sm-6">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput"
                              class="form-label"
                            >
                              <h2>Rashi Lord</h2>
                            </label>
                            <div class="custom-input">
                            <p class="form-control">Mercury</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- <button class="btn btn-animation btn-md fw-bold ms-auto">Send Message</button> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>


<br/>


<section class="seller-grid-section">
        <div class="container-fluid-lg">
          <h2 >Lagan Chart</h2>
          <br />

          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="seller-grid-box">
                <div class="grid-contain">
                  <div class="col-lg-12">
                    <div class="title d-xxl-none d-block">
                      <h2>Male</h2>
                    </div>
                    <div class="right-sidebar-box">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="custom-form">
                            <label
                              for="exampleFormControlInput"
                              class="form-label"
                            >
                              <h2>Male Manglik Detail</h2>
                            </label>
                            <div class="custom-input">
                               <p class="form-control">{responseData.male?.percentage_manglik_present} % मांगलिक</p> 
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Based on house</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData.male?.manglik_present_rule.based_on_house}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Based on Aspects</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                              <p class="">{responseData.male?.manglik_present_rule.based_on_aspect}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xxl-6 col-lg-12 col-sm-6">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput"
                              class="form-label"
                            >
                              <h2>Manglik Effect</h2>
                            </label>
                            <div class="custom-input">
                            <p class="">मांगलिक दोष  {responseData.male?.manglik_status} है</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Manglik Analysis</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                              <p class="">{responseData.male?.manglik_report}</p>
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

            <div class="col-lg-6 col-md-6">
              <div class="seller-grid-box">
                <div class="grid-contain">
                <div class="col-lg-12">
                    <div class="title d-xxl-none d-block">
                      <h2>FeMale</h2>
                    </div>
                    <div class="right-sidebar-box">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="custom-form">
                            <label
                              for="exampleFormControlInput"
                              class="form-label"
                            >
                              <h2>Male Manglik Detail</h2>
                            </label>
                            <div class="custom-input">
                               <p class="form-control">{responseData.female?.percentage_manglik_present} % मांगलिक</p> 
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Based on house</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData.female?.manglik_present_rule.based_on_house}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Based on Aspects</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                              <p class="">{responseData.female?.manglik_present_rule.based_on_aspect}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xxl-6 col-lg-12 col-sm-6">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput"
                              class="form-label"
                            >
                              <h2>Manglik Effect</h2>
                            </label>
                            <div class="custom-input">
                            <p class="">मांगलिक दोष  {responseData.female?.manglik_status} है</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Manglik Analysis</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                              <p class="">{responseData.female?.manglik_report}</p>
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

            
          </div>
        </div>
      </section>

<br/>
<section className="client-section section-lg-space">
        <div className="container-fluid-lg">
          
          <div className="row">
            
            <div className="col-12">
            
              <div className="col-lg-12">
              <h1>Match Ashtakoot Points</h1>
              <br/>
                           <table class="table table-bordered">
                               


<tr style={{background:'#dee2e6'}} >
                                    <td><b>Atribute</b></td>
                                    <td><b>Male</b></td>
                                    <td><b>Female</b></td>
                                    <td><b>Out of</b></td>
                                    <td><b>Received</b></td>
                                    <td><b>Area Of Life</b></td>
                                </tr>
                                <tr >
                                    <td><b>Varna</b></td>
                                    <td><b>{responseData1?.varna.male_koot_attribute}</b></td>
                                    <td><b>{responseData1?.varna.female_koot_attribute}</b></td>
                                    <td><b>{responseData1?.varna.total_points}</b></td>
                                    <td><b>{responseData1?.varna.received_points}</b></td>
                                    <td><b>{responseData1?.varna.description}</b></td>
                                   
                                    
                                </tr>


                                <tr >
                                    <td><b>Vashya</b></td>
                                    <td><b>{responseData1?.vashya.male_koot_attribute}</b></td>
                                    <td><b>{responseData1?.vashya.female_koot_attribute}</b></td>
                                    <td><b>{responseData1?.vashya.total_points}</b></td>
                                    <td><b>{responseData1?.vashya.received_points}</b></td>
                                    <td><b>{responseData1?.vashya.description}</b></td>
                                    
                                </tr>

                                <tr >
                                    <td><b>Tara</b></td>
                                    <td><b>{responseData1?.tara.male_koot_attribute}</b></td>
                                    <td><b>{responseData1?.tara.female_koot_attribute}</b></td>
                                    <td><b>{responseData1?.tara.total_points}</b></td>
                                    <td><b>{responseData1?.tara.received_points}</b></td>
                                    <td><b>{responseData1?.tara.description}</b></td>
                                </tr>
                                <tr >
                                    <td><b>Yoni</b></td>
                                    <td><b>{responseData1?.yoni.male_koot_attribute}</b></td>
                                    <td><b>{responseData1?.yoni.female_koot_attribute}</b></td>
                                    <td><b>{responseData1?.yoni.total_points}</b></td>
                                    <td><b>{responseData1?.yoni.received_points}</b></td>
                                    <td><b>{responseData1?.yoni.description}</b></td>
                                    
                                </tr>
                                <tr >
                                    <td><b>Maitri</b></td>
                                    <td><b>{responseData1?.maitri.male_koot_attribute}</b></td>
                                    <td><b>{responseData1?.maitri.female_koot_attribute}</b></td>
                                    <td><b>{responseData1?.maitri.total_points}</b></td>
                                    <td><b>{responseData1?.maitri.received_points}</b></td>
                                    <td><b>{responseData1?.maitri.description}</b></td>
                                    
                                </tr>
                                <tr >
                                    <td><b>Gan</b></td>
                                    <td><b>{responseData1?.gan.male_koot_attribute}</b></td>
                                    <td><b>{responseData1?.gan.female_koot_attribute}</b></td>
                                    <td><b>{responseData1?.gan.total_points}</b></td>
                                    <td><b>{responseData1?.gan.received_points}</b></td>
                                    <td><b>{responseData1?.gan.description}</b></td>
                                </tr>


                                <tr >
                                    <td><b>Bhakut</b></td>
                                    <td><b>{responseData1?.bhakut.male_koot_attribute}</b></td>
                                    <td><b>{responseData1?.bhakut.female_koot_attribute}</b></td>
                                    <td><b>{responseData1?.bhakut.total_points}</b></td>
                                    <td><b>{responseData1?.bhakut.received_points}</b></td>
                                    <td><b>{responseData1?.bhakut.description}</b></td>
                                </tr>


                                <tr >
                                    <td><b>Nadi</b></td>
                                    <td><b>{responseData1?.nadi.male_koot_attribute}</b></td>
                                    <td><b>{responseData1?.nadi.female_koot_attribute}</b></td>
                                    <td><b>{responseData1?.nadi.total_points}</b></td>
                                    <td><b>{responseData1?.nadi.received_points}</b></td>
                                    <td><b>{responseData1?.nadi.description}</b></td>
                                    
                                </tr>


                                <tr >
                                    <td><b>Total</b></td>
                                    <td><b>-</b></td>
                                    <td><b>-</b></td>
                                    <td><b>{responseData1?.total.total_points}</b></td>
                                    <td><b>{responseData1?.total.received_points}</b></td>
                                    <td><b>-</b></td>
                                </tr>


                                
                            </table>
<h3>{responseData1?.conclusion.report}</h3>

              </div>
            </div>
          </div>
        </div>
      </section>
<br/>
<Live/>
<br/>
<br/>

<Footer/>


    </div>
  );
}

export default Kundalireport;
