import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const Panchang = () => {


  const [responseData, setResponseData] = useState(null);
  console.log("sadasd",responseData)
    useEffect(() => {
      const api = 'advanced_panchang';
      const userId = '623869'; 
      const apiKey = '46046d17a932151518470e3a08a1665a';
  
      const data = {
        day: 6,
        month: 1,
        year: 2000,
        hour: 7,
        min: 45,
        lat: 19.132,
        lon: 72.342,
        tzone: 5.5,
      };
  
      const auth = "Basic " + btoa(userId + ":" + apiKey);
  
      axios.post(`https://json.astrologyapi.com/v1/${api}`, data, {
        headers: {
          "authorization": auth,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResponseData(response.data); 
        console.log("asdresponseeessad",response.data)
      })

      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }, []);


  return (
    <>
      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row g-4">
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-2">
              <div class="row g-4 ratio_65">
                <div class="slider-3 arrow-slider"  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                  <div   style={{width:"30%",}}>
                    <div class="blog-box ratio_50">
                      <div class="blog-box-image" style={{ height: "300px" }}>
                        <Link to="/panchangg">
                          {/* <img
                            src="../assets/images/blog/pp.jpg"
                            class="img-fluid bg-img"
                            alt=""
                          /> */}

<img
                            src="../assets/images/blog/todaypan4.jpg"
                            class="img-fluid bg-img"
                            alt=""
                          />

                        </Link>
                      </div>

                      <div
                  class="blog-contain"
                  style={{
                    overflowY: "scroll",
                    position: "relative",
                    height: "350px",
                  }}
                >
                  <div>
                    <Link to="/panchangg">
                      <h3 style={{ fontSize : "30px" }}>Panchang</h3>
                      <h4>Delhi- {responseData?.day}, 05 April 2023</h4>
                    </Link>
                  </div>
                  <div style={{ position: "absolute" }}>
                    <Link to="/panchangg">
                      <ul>
                        <table class="home_table">
                          <tbody>
                            <tr>
                              <td scope="row">Date</td>
                              <td>{responseData?.day}, 05 April 2023</td>
                              <hr />
                            </tr>
                            <tr>
                              <td scope="row">Tithi</td>
                              <td>{responseData?.tithi.details.tithi_name}</td>
                            </tr>
                            <tr>
                              <td scope="row">Day</td>
                              <td>{responseData?.day}</td>
                            </tr>
                            <tr>
                              <td scope="row">Paksha</td>
                              <td> {responseData?.paksha}</td>
                            </tr>
                            <tr>
                              <td scope="row">Sunrise</td>
                              <td id="sunRise">{responseData?.sunrise}</td>
                            </tr>
                            <tr>
                              <td scope="row">Sunset</td>
                              <td id="sunSet">{responseData?.sunset}</td>
                            </tr>
                            <tr>
                              <td scope="row">Moonrise</td>
                              <td id="moonRise"> {responseData?.moonrise}</td>
                            </tr>
                            <tr>
                              <td scope="row">Nakshatra</td>
                              <td> {responseData?.nakshatra.details.nak_name}</td>
                            </tr>
                            <tr>
                              <td scope="row">Nakshtra Till</td>
                              <td id="nakshtra">{responseData?.nakshatra.end_time.hour}:{responseData?.nakshatra.end_time.minute}:{responseData?.nakshatra.end_time.second}</td>
                            </tr>
                            <tr>
                              <td scope="row">Yog</td>
                              <td>{responseData?.yog.details.yog_name}</td>
                            </tr>
                            <tr>
                              <td scope="row">Yog Till</td>
                              <td id="yog">{responseData?.yog.end_time.hour} : {responseData?.yog.end_time.minute} : {responseData?.yog.end_time.second}</td>
                            </tr>
                            <tr>
                              <td scope="row">Karan I</td>
                              <td>{responseData?.karan.details.karan_name}</td>
                            </tr>
                            <tr>
                              <td scope="row">Surya Rashi</td>
                              <td>Pisces</td>
                            </tr>
                            <tr>
                              <td scope="row">Chandra Rashi</td>
                              <td>Virgo</td>
                            </tr>
                            <tr>
                              <td scope="row">Rahu Kal</td>
                              <td id="rahuKal">{responseData?.rahukaal.start} to {responseData?.rahukaal.end}</td>
                            </tr>
                          </tbody>
                        </table>
                      </ul>
                      
                    </Link>
                    <Link to='/Panchangg'>
                    <button  class="blog-button">Read More
                                        <i class="fa-solid fa-right-long"></i></button> </Link>
                  </div>
                 
                </div>
                    </div>
                  </div>

                  <div style={{width:"30%"}}>
                    <div class="blog-box ratio_50">
                      <div class="blog-box-image" style={{ height: "300px" }}>
                        <Link to="/Numerology">
                          <img
                            src="../assets/images/blog/Numerology.png"
                            class="img-fluid bg-img"
                            alt=""
                          />
                        </Link>
                      </div>

                      <div
                        class="blog-contain"
                        style={{
                          overflowY: "scroll",
                          position: "relative",
                          height: "350px",
                        }}
                      >
                        <div>
                          <Link to="/BlogDetail">
                            <h3 style={{ fontSize : "30px" }}>NUMEROLOGY</h3>
                          </Link>
                        </div>
                        <div style={{ position: "absolute" }}>
                          <Link to="/Numerology">
                            <ul>
                              <li>
                                <Link to="#">Yoga</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Meditation</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Gems Stone</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Rudraskha</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Yantra</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Mantras & Chants</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Pooja Performance</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Spiritual Retreats</Link>{" "}
                              </li>
                              <hr />
                            </ul>
                          </Link>
                        </div>
                        {/* <!-- <button onclick="location.href = 'blog-detail.html';" class="blog-button">Read More
                                        <i class="fa-solid fa-right-long"></i></button> --> */}
                      </div>
                    </div>
                  </div>

                  <div style={{width:"30%"}}>
                    <div class="blog-box ratio_50">
                      <div class="blog-box-image" style={{ height: "300px" }}>
                        <Link to="/BlogDetail">
                          <img
                            src="../assets/images/blog/Festivals.png"
                            class="img-fluid bg-img"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div
                        class="blog-contain"
                        style={{
                          overflowY: "scroll",
                          position: "relative",
                          height: "350px",
                        }}
                      >
                        <div>
                          <Link to="/BlogDetail">
                            <h3 style={{ fontSize : "30px" }}>FESTIVAL</h3>
                          </Link>
                        </div>
                        <div style={{ position: "absolute" }}>
                          <Link to="/BlogDetail">
                            <ul>
                              <li>
                                <Link to="#">Holi 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Bhai Dooj 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Chaitra Navratri 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Gudi Padwa 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Ugadi 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Rama Navami 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Hanuman Jyanti 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Baisakhi 2023</Link>{" "}
                              </li>
                              <hr />
                              <li>
                                <Link to="#">Diwali 2023</Link>{" "}
                              </li>
                              <hr />
                            </ul>
                          </Link>
                        </div>
                        {/* <!-- <button onclick="location.href = 'blog-detail.html';" class="blog-button">Read More
                                        <i class="fa-solid fa-right-long"></i></button> --> */}
                      </div>
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

export default Panchang;
