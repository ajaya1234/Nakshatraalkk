import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Header1 from "./Header1";
import Footer from "./Footer";
import Setting from "./Setting";
import Live from "./Live";

const Panchang_page = () => {
  const [responseData, setResponseData] = useState(null);
  

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
   useEffect(() => {
     const api = 'advanced_panchang';
     const userId = '623869'; 
     const apiKey = '46046d17a932151518470e3a08a1665a';
 
const data = {
       day: day,
       month:month,
       year: year,
       hour: 10,
       min: 25,
       lat: 19.132,
       lon: 72.342,
       tzone: 5.5,
     };


    // useEffect(() => {
    //   const api = 'advanced_panchang';
    //   const userId = '623869'; 
    //   const apiKey = '46046d17a932151518470e3a08a1665a';
  
    //   const data = {
    //     day: 6,
    //     month: 1,
    //     year: 2000,
    //     hour: 7,
    //     min: 45,
    //     lat: 19.132,
    //     lon: 72.342,
    //     tzone: 5.5,
    //   };
  
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
      <Header1 />
      {/* <!-- Blog Section Start --> */}
      <section class="blog-section">
        <div class="container-fluid-lg">
          <div class="title">
            <h2>Panchang</h2>

            <p>
              A Panchang (Sanskrit: पञ्चाङ्गम्) is a Hindu calendar and almanac,
              which is used in Astrology. It follows traditional units of Hindu
              timekeeping, and presents important dates and their calculations
              in a tabulated form.{" "}
            </p>
            <p>
              The study of Panchang involves understanding Rasi phala, the
              impact of the signs of the zodiac on the individual. Astrologers
              consult the Panchang to understand present with movement of
              planets & its effect on individual, set auspicious date for
              occasions like engagement, weddings and other activities.
            </p>
          </div>

          <div
            class="slider-3 arrow-slider"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <div class="blog-box ratio_50">
                <div class="blog-box-image">
                  <Link to="/panchangg">
                    <img style={{width:'100%' , height:'180px'}}
                      src="../assets/images/blog/todaypan.jpg"
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
                      <h4>{responseData?.day}  {day}, {month} , {year}</h4>
                    </Link>
                  </div>
                  <div style={{ position: "absolute" }}>
                    <Link to="/panchangg">
                      <ul>
                        <table class="home_table">
                          <tbody>
                            <tr>
                              <td scope="row">Date</td>
                              <td>{responseData?.day}  {day}, {month} , {year}</td>
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

            <div>
              <div class="blog-box ratio_50">
                <div class="blog-box-image">
                  <Link to="#">
                    <img style={{width:'100%' , height:'180px'}}
                      src="../assets/images/blog/panchang.jpg"
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
                  <Link to="#">
                      <h3>Explore More</h3>
                    </Link>
                  </div>
                  <div style={{ position: "absolute" }}>
                    <Link to="#">
                      <ul>
                        <li>
                          <a href="#">Today's Tithi</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's vaar</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Shubh Muhurat</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Nakshatra</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Choghdiya</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Rahu Kaal</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Shubh Hora</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Yoga</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Karana</a>{" "}
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

            <div>
              <div class="blog-box ratio_50">
                <div class="blog-box-image">
                  <Link to="#">
                    <img style={{width:'100%' , height:'180px'}}
                      src="../assets/images/blog/festival.jpg"
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
                  <Link to="#">
                      <h3>Feast and Festival {year}</h3>
                    </Link>
                  </div>
                  <div style={{ position: "absolute" }}>
                  <Link to="#">
                      <ul>
                        <li>
                          <a href="#">Holi {year}</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Bhai Dooj {year}</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Chaitra Navratri {year}</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Gudi Padwa {year}</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Ugadi {year}</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Rama Navami {year}</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Hanuman Jyanti {year}</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Baisakhi {year}</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Diwali {year}</a>{" "}
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
      </section>

      {/* <!-- Blog Section End --> */}

      {/* <!-- Blog Section Start --> */}
      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row g-4">
            <h2>Panchang</h2>
            <p>
              Accuracy of attributes depending upon the Moon's motions were
              considered most crucial for the reliability of a Panchang, because
              the Moon is the fastest among all heavenly entities shown in
              traditional Panchang.{" "}
            </p>
            <p>
              Tithi, Nakshatra, Rasi, Yoga, and Karana depend upon Moon's
              motions, which are five in number. Panchang is a Sanskrit word it
              means " five limbs". If these five limbs which represents five
              attributes depending upon Moon, are accurate, an almanac is
              considered accurate, because it’s easy to calculate other elements
              due to their slow rates of change.
            </p>
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-2">
              <div class="row g-4 ratio_65">
              <div class="col-xxl-4 col-sm-3">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.05s">
                    <div class="blog-image" >
                      <Link to='/AstrologersList'>
                      <img style={{width:'100%'}}
                          src="../assets/images/blog/festival.jpg"
                          class="bg-img img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div class="blog-contain">
                      <div>
                      <Link to='/AstrologersList'>
                          <h3>Talk's Best Astrologer</h3>
                        </Link>
                      </div>

                      <Link to='/AstrologersList'>
                        <p>
                          A horoscope is an astrology chart that is well
                          prepared in order to examine the future....
                        </p>
                      </Link>
                      <Link to='/AstrologersList'>
                      <button
                        onclick="location.href = 'todays-horoscope.html';"
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-4 col-sm-3">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.05s">
                    <div class="blog-image" >
                      <Link to="/Horoscope_page">
                      <img style={{width:'100%'}}
                          src="../assets/images/blog/festival.jpg"
                          class="bg-img img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div class="blog-contain">
                      <div>
                        <Link to="/Horoscope_page">
                          <h3>Today's Horoscope</h3>
                        </Link>
                      </div>

                      <Link to="/Horoscope_page">
                        <p>
                          A horoscope is an astrology chart that is well
                          prepared in order to examine the future....
                        </p>
                      </Link><Link to="/Horoscope_page">
                      <button
                        onclick="location.href = 'todays-horoscope.html';"
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-4 col-sm-3">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.05s">
                    <div class="blog-image" >
                      <Link to="/blog">
                        <img style={{width:'100%'}}
                          src="../assets/images/blog/festival.jpg"
                          class="bg-img img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div class="blog-contain">
                      <div>
                      <Link to="/blog">
                          <h3>Festival</h3>
                        </Link>
                      </div>

                      <Link to="/blog">
                        <p>
                          Festivals are an important part of our lives; they
                          represent the beauty of our culture.....
                        </p>
                      </Link>
                      <Link to="/blog">
                      <button
                        onclick="location.href = 'blog-detail.html';"
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-4 col-sm-3">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.15s">
                    <div class="blog-image" >
                      <Link to="/zodiac">
                      <img style={{width:'100%'}}
                          src="../assets/images/blog/festival.jpg"
                          class="bg-img img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div class="blog-contain">
                      <div>
                      <Link to="/zodiac">
                          <h3>Zodiac Signs</h3>
                        </Link>
                      </div>

                      <Link to="/zodiac">
                        <p>
                          Astrology, focuses on a person’s astrological or
                          zodiac sign, to a large extent. There are 12
                          Zodiac....
                        </p>
                      </Link>
                      <Link to="/zodiac">
                      <button
                        onclick="location.href = 'zodiac_signs.html';"
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--  <nav class="custome-pagination">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <a class="page-link" href="javascript:void(0)" tabindex="-1">
                                    <i class="fa-solid fa-angles-left"></i>
                                </a>
                            </li>
                            <li class="page-item active">
                                <a class="page-link" href="javascript:void(0)">1</a>
                            </li>
                            <li class="page-item" aria-current="page">
                                <a class="page-link" href="javascript:void(0)">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0)">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0)">
                                    <i class="fa-solid fa-angles-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav> --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog Section End --> */}

      {/* <!-- Category Section Start --> */}
      <section class="category-section-3">
        <div class="container-fluid-lg">
          <div class="title">
            <h2>Sombreness of Panchang</h2>
            <p>
              Panchang consists of two words namely, 'Panch' and 'Ang', Panch
              means 'Five' and Ang means 'Limbs'. Panchang is created by taking
              into account five aspects of the tradition Hindu timekeeping limbs
              or ‘ang’: day of the week (vaar); tithi or lunar day;
              constellation or nakshatra; yoga; and karan. The study of Panchang
              is the fundamental understanding of Rashi Phala, the impact of
              each of the 12 zodiac signs on an individual and how their day to
              day lives change based on several movements of the planets. The
              casting of a Panchang requires elaborate mathematical work
              involving high level of spherical geometry and in depth
              understanding of astronomical phenomena. However, in practice the
              tabulation is done on the basis of short-cut formulations as
              propounded by ancient Vedic sages and scholars.
            </p>
            <p>
              Panchang is created for the fundamental use of providing
              information on how a day might look like, how people should
              optimize the ‘subh’ or positive span of time in order to lead a
              happy and prosperous life and what should they refrain from doing
              at negative hours of the day to avoid problems. Panchangs are
              optimally utilizing in the Hindu culture for planning important
              events and functions in a person’s life. Panchang matches the
              current planetary configurations with the position of the heavenly
              bodies in a person’s astrological chart, so that the auspicious
              days can be pin-pointed in their best interests.
            </p>
          </div>
          <div class="row"></div>
        </div>
      </section>
      {/* <!-- Category Section End --> */}

<Live/>

      <br/>
      <br/>
      <Footer />
      <Setting />
    </>
  );
};

export default Panchang_page;
