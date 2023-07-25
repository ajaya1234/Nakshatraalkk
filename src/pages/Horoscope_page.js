
import React from 'react'
// import Header1 from "./InHeader"
import Header1 from './Header1'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Horoscope_page = () => {


  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    // Define the API endpoint and parameters
    const apiUrl = 'https://api.example.com/weather';
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const city = 'New York'; // Replace with the desired city

    // Make the API request using axios
    axios.get(apiUrl, {
      params: {
        key: apiKey,
        city: city,
      },
    })
    .then((response) => {
      // Handle the API response and update the state
      setWeatherData(response.data);
    })
    .catch((error) => {
      // Handle API request errors
      console.error('Error fetching weather data:', error);
    });
  }, []);

  
  return (
    <>
     <Header1/>

     <section class="home-section pt-2">
        <div class="container-fluid-lg" >
             <img align ="right" src="../assets/images/logo/hs.png" width="100%"/>
            <div class="row g-4" >
                 
                
            </div>
        </div>
    </section>
    {/* <!-- Category Section Start --> */}
    <section>
        <div class="container-fluid-lg">
            <div class="title" >
                <h2 style={{textAlign:"center"}}>Today's Horoscope</h2>
                <h4 style={{textAlign:"center"}}>Know Your Today's Horoscope </h4>
                
                <p>Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more. However, it’s predominantly the movement of planets from one house of the Kundli to another that influences the life of the native and thus his Daily horoscope. As planets are in motion, their position in the chart of the native on a daily basis virtually decides the course of his life and fortune.</p>
                mm 
                <p>Of all the ancient Vedic practices that we are aware of, horoscope reading is one of the most accepted and popular. Horoscope reading transgresses boundaries and is a tea-time read for not just the astrology-loving Indians but also people residing in western countries. In fact, these days there are numerous mediums to bring you your today's horoscope, such as TV, newspapers, magazines, and much more. Whatever the medium, the purpose of the Daily horoscope remains the same, which is to prepare you for life and make you aware of all the upcoming events, so you don’t go blank into life as most people do.</p>
            </div>
           
        </div>
    </section>
    {/* <!-- Grid Section Start --> */}
    <section class="seller-grid-section">
        <div class="container-fluid-lg">
            <div class="row g-4">
                <div class="col-xxl-4 col-md-6">
                    <a href="aries.html" class="seller-grid-box">
                        <div class="grid-contain">
                           
                          <div class="title" style={{padding: "5px"}}>
                <h3>Aries Today's Horoscope</h3>
                
                <img class="img2" src="../assets/images/astro/are.png" alt="aries" width="170" height="170"/>
                <p>Personal: Today is an excellent one for striking up promising new romantic liaisons that could lead to romance. In marriages, it is up to the Taurus to shake up the boring routines and introduce ideas to spice up the love life and reintroduce a sense of fun.</p>
            </div>
                        </div>
                    </a>
                </div>

                <div class="col-xxl-4 col-md-6">
                    <a href="aries.html" class="seller-grid-box">
                        <div class="grid-contain">
                           
                          <div class="title" style={{padding: "5px"}}>
                <h3>Taurus Today's Horoscope</h3>
                
                <img class="img2" src="../assets/images/astro/tau.png" alt="aries" width="170" height="170"/>
                <p>Personal: Today is an excellent one for striking up promising new romantic liaisons that could lead to romance. In marriages, it is up to the Taurus to shake up the boring routines and introduce ideas to spice up the love life and reintroduce a sense of fun.</p>
            </div>
                        </div>
                    </a>
                </div>

              <div class="col-xxl-4 col-md-6">
                    <a href="aries.html" class="seller-grid-box">
                        <div class="grid-contain">
                           
                          <div class="title" style={{padding: "5px"}}>
                <h3>Gemini Today's Horoscope</h3>
                
                <img class="img2" src="../assets/images/astro/gem.png" alt="aries" width="170" height="170"/>
                <p>Personal: Today is an excellent one for striking up promising new romantic liaisons that could lead to romance. In marriages, it is up to the Taurus to shake up the boring routines and introduce ideas to spice up the love life and reintroduce a sense of fun.</p>
            </div>
                        </div>
                    </a>
                </div>

                <div class="col-xxl-4 col-md-6">
                    <a href="aries.html" class="seller-grid-box">
                        <div class="grid-contain">
                           
                          <div class="title" style={{padding: "5px"}}>
                <h3>Cancer Today's Horoscope</h3>
                
                <img class="img2" src="../assets/images/astro/cn.png" alt="aries" width="170" height="170"/>
                <p>Personal: Today is an excellent one for striking up promising new romantic liaisons that could lead to romance. In marriages, it is up to the Taurus to shake up the boring routines and introduce ideas to spice up the love life and reintroduce a sense of fun.</p>
            </div>
                        </div>
                    </a>
                </div>

                 <div class="col-xxl-4 col-md-6">
                    <a href="aries.html" class="seller-grid-box">
                        <div class="grid-contain">
                           
                          <div class="title" style={{padding: "5px"}}>
                <h3>Leo Today's Horoscope</h3>
                
                <img class="img2" src="../assets/images/astro/leo.png" alt="aries" width="170" height="170"/>
                <p>Personal: Today is an excellent one for striking up promising new romantic liaisons that could lead to romance. In marriages, it is up to the Taurus to shake up the boring routines and introduce ideas to spice up the love life and reintroduce a sense of fun.</p>
            </div>
                        </div>
                    </a>
                </div>

                <div class="col-xxl-4 col-md-6">
                    <a href="aries.html" class="seller-grid-box">
                        <div class="grid-contain">
                           
                          <div class="title" style={{padding: "5px"}}>
                <h3>Virgo Today's Horoscope</h3>
               
                <img class="img2" src="../assets/images/astro/li.png" alt="aries" width="170" height="170"/>
                <p>Personal: Today is an excellent one for striking up promising new romantic liaisons that could lead to romance. In marriages, it is up to the Taurus to shake up the boring routines and introduce ideas to spice up the love life and reintroduce a sense of fun.</p>
            </div>
                        </div>
                    </a>
                </div>

                <div class="col-xxl-4 col-md-6">
                    <a href="aries.html" class="seller-grid-box">
                        <div class="grid-contain">
                           
                          <div class="title" style={{padding: "5px"}}>
                <h3>Libra Today's Horoscope</h3>
               
                <img class="img2" src="../assets/images/astro/sc.png" alt="aries" width="170" height="170"/>
                <p>Personal: Today is an excellent one for striking up promising new romantic liaisons that could lead to romance. In marriages, it is up to the Taurus to shake up the boring routines and introduce ideas to spice up the love life and reintroduce a sense of fun.</p>
            </div>
                        </div>
                    </a>
                </div>

               <div class="col-xxl-4 col-md-6">
                    <a href="aries.html" class="seller-grid-box">
                        <div class="grid-contain">
                           
                          <div class="title" style={{padding: "5px"}}>
                <h3>Scorpio Today's Horoscope</h3>
               
                <img class="img2" src="../assets/images/astro/sag.png" alt="aries" width="170" height="170"/>
                <p>Personal: Today is an excellent one for striking up promising new romantic liaisons that could lead to romance. In marriages, it is up to the Taurus to shake up the boring routines and introduce ideas to spice up the love life and reintroduce a sense of fun.</p>
            </div>
                        </div>
                    </a>
                </div>

             <div class="col-xxl-4 col-md-6">
                    <a href="aries.html" class="seller-grid-box">
                        <div class="grid-contain">
                           
                          <div class="title" style={{padding: "5px"}}>
                <h3>Sagittarius Today's Horoscope</h3>
               
                <img class="img2" src="../assets/images/astro/ca.png" alt="aries" width="170" height="170"/>
                <p>Personal: Today is an excellent one for striking up promising new romantic liaisons that could lead to romance. In marriages, it is up to the Taurus to shake up the boring routines and introduce ideas to spice up the love life and reintroduce a sense of fun.</p>
            </div>
                        </div>
                    </a>
                </div>

                <div class="col-xxl-4 col-md-6">
                    <a href="aries.html" class="seller-grid-box">
                        <div class="grid-contain">
                           
                          <div class="title" style={{padding: "5px"}}>
                <h3>Capricorn Today's Horoscope</h3>
               
                <img class="img2" src="../assets/images/astro/ca.png" alt="aries" width="170" height="170"/>
                <p>Personal: Today is an excellent one for striking up promising new romantic liaisons that could lead to romance. In marriages, it is up to the Taurus to shake up the boring routines and introduce ideas to spice up the love life and reintroduce a sense of fun.</p>
            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xxl-4 col-md-6">
                    <a href="aries.html" class="seller-grid-box">
                        <div class="grid-contain">
                           
                          <div class="title" style={{padding: "5px"}}>
                <h3>Aquarius Today's Horoscope</h3>
               
                <img class="img2" src="../assets/images/astro/aq.png" alt="aries" width="170" height="170"/>
                <p>Personal: Today is an excellent one for striking up promising new romantic liaisons that could lead to romance. In marriages, it is up to the Taurus to shake up the boring routines and introduce ideas to spice up the love life and reintroduce a sense of fun.</p>
            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xxl-4 col-md-6">
                    <a href="aries.html" class="seller-grid-box">
                        <div class="grid-contain">
                           
                          <div class="title" style={{padding: "5px"}}>
                <h3>Pisces Today's Horoscope</h3>
               
                <img class="img2" src="../assets/images/astro/pi.png" alt="aries" width="170" height="170"/>
                <p>Personal: Today is an excellent one for striking up promising new romantic liaisons that could lead to romance. In marriages, it is up to the Taurus to shake up the boring routines and introduce ideas to spice up the love life and reintroduce a sense of fun.</p>
            </div>
                        </div>
                    </a>
                </div>
              
            </div>

            <nav class="custome-pagination">
               
            </nav>
        </div>
    </section>
    <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="banner-contain">
                <div
                  className="banner-contain hover-effect"
                  style={{ height: "150px" }}
                >
                  <img
                   src="../assets/images/vegetable/banner/banner1.jpg"
                    className="bg-img blur-up lazyload img-fluid"
                    alt="banner"
                    style={{ width: "100%", height: "27vh" ,objectFit:"cover" }}
                  />
                  <div className="banner-details p-center p-sm-4 p-3 text-white text-center">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    {/* <!-- Grid Section End --> */}
    {/* <!-- Discount Section Start --> */}
    {/* <section>
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="banner-contain">
                        <div class="banner-contain hover-effect" style={{height: "100px"}}>
                            <img style={{width:"100%"}} src="../assets/images/cake/banner/4.jpg" class="bg-img blur-up lazyload" alt=""/>
                            <div class="banner-details p-center p-sm-4 p-3 text-white text-center">
                                <div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!-- Discount Section End --> */}
    {/* <!-- Product Section Start --> */}
    <section>
        <div class="container-fluid-lg">
            <div class="title" style={{padding:" 5px"}}>
                <h2>Understanding Today horoscope</h2>
                <span class="title-leaf">
                    <svg class="icon-width">
                        <Link to="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></Link>
                    </svg>
                </span>
                
                <p>If you are a follower of astrology, you would know that each zodiac sign in astrology is ruled by a planet. For example, the Moon is the ruler of Cancer, and Mars is the ruler of both Aries and Scorpio zodiac signs. Similarly, Gemini is ruled by Mercury and so on. It’s the negative and positive state of these planets that affects your zodiac sign and thus your future. </p>
                <p>For example, Taurus is ruled by the planet Venus. In astrology, Mars, Jupiter, and Ketu are the enemy of the planet Venus. Hence, if Venus is placed in any house of your Kundli with Mars, Jupiter or Ketu, then the characteristics of that house may turn negative for you and reflect on your Horoscope today. </p>
            </div>
            <div class="title" style={{padding:" 5px"}}>
                <h2>How can Today's horoscope help you?</h2>
                <span class="title-leaf">
                    <svg class="icon-width">
                    <Link to="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></Link>
                    </svg>
                </span>
                
                <p>We have been talking a lot about Today’s horoscope, how it is prepared, and all the technicality or science that goes into predicting your future through horoscopes. And what we have gathered from the discussion is that the Daily horoscope is an insightful medium to analyse the sense of the energy of any given day. Horoscope allows us a roadmap, showing us what we might experience in the day, week or month ahead of us. Having said that, here are some more benefits that one can derive from reading their horoscope on a regular basis. </p>


           
    
            </div>
        </div>
    </section>

    {/* <!-- Product Section End --> */}

<section class="product-list-section section-b-space">
    <div class="container-fluid-lg">
        <div class="title">
            <h2>Also Check</h2>
            <span class="title-leaf">
                <svg class="icon-width">
                <Link to="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></Link>
                </svg>
            </span>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="slider-6_1 product-wrapper" style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                    <div>
                        <div class="product-box-3 wow fadeInUp">
                            <div class="product-header">
                                <div class="product-image">
                                    <a href="daily_horoscope.html">
                                        <img src="../assets/images/inner-page/dh.png"
                                            class="img-fluid blur-up lazyload" alt=""/>
                                    </a>

                                </div>
                            </div>

                            <div class="product-footer">
                                <div class="product-detail">
                                   
                                    <a href="daily_horoscope.html">
                                        <h5 class="name">Daily Horoscope</h5>
                                    </a>
                 
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div class="product-box-3 wow fadeInUp">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="weekly_horoscope.html">
                                            <img src="../assets/images/inner-page/dh.png"class="img-fluid blur-up lazyload" alt=""/>
                                        </a>

                                    </div>
                                </div>

                                <div class="product-footer">
                                    <div class="product-detail">
                                       
                                        <a href="weekly_horoscope.html">
                                            <h5 class="name">weekly Horoscope</h5>
                                        </a>
                     
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box-3 wow fadeInUp">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="montly_horoscope.html">
                                            <img src="../assets/images/inner-page/dh.png"class="img-fluid blur-up lazyload" alt=""/>
                                        </a>

                                    </div>
                                </div>

                                <div class="product-footer">
                                    <div class="product-detail">
                                       
                                        <a href="montly_horoscope.html">
                                            <h5 class="name">Montlhy Horoscope</h5>
                                        </a>
                     
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box-3 wow fadeInUp">
                                <div class="product-header">
                                    <div class="product-image">
                                        <a href="index-3.html">
                                            <img src="../assets/images/inner-page/dh.png"class="img-fluid blur-up lazyload" alt=""/>
                                        </a>

                                    </div>
                                </div>

                                <div class="product-footer">
                                    <div class="product-detail">
                                       
                                        <a href="index-3.html">
                                            <h5 class="name"> Horoscope 2023</h5>
                                        </a>
                     
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                      
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Offer Section Start --> */}
    <section>
    <div className="container-fluid-lg">
      <div className="row">
        <div className="col-12">
          <div
            className="tab-content"
            id="myTabContent"
            style={{ marginTop: "-30px" }}
          >
            <div
              className="tab-pane fade show active"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              <div className="row g-8">
                <div className="col-xxl-2 col-lg-3 col-md-6 col-6 wow fadeInUp">
                  <div className="product-box-4">
                    <div className="product-image">
                      <Link to="/Chatastrologer">
                        <img
                          src="../assets/images/veg-3/cate1/chat.png"
                          className="img-fluid"
                          alt=""
                          style={{ height: "60px" }}
                        />
                      </Link>
                    </div>

                    <div className="product-detail">
                      <Link to="/Chatastrologer">
                        <h5 className="name">Chat with Astrologer</h5>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xxl-2 col-lg-3 col-md-6 col-6 wow fadeInUp"
                  data-wow-delay="0.05s"
                >
                  <div className="product-box-4">
                    <div className="product-image">
                      <Link to="/AstrologersList">
                        <img
                          src="../assets/images/veg-3/cate1/phone.png"
                          className="img-fluid"
                          alt=""
                          style={{ height: "60px" }}
                        />
                      </Link>
                    </div>

                    <div className="product-detail">
                      <Link to="/AstrologersList">
                        <h5 className="name">Talk to Astrologer</h5>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xxl-2 col-lg-3 col-md-6 col-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="product-box-4">
                    <div className="product-image">
                      <Link to="/Astrolive">
                        <img
                          src="../assets/images/veg-3/cate1/livechat.png"
                          className="img-fluid"
                          alt=""
                          style={{ height: "60px" }}
                        />
                      </Link>
                    </div>

                    <div className="product-detail">
                      <Link to="/Astrolive">
                        <h5 className="name">Live Astrologers</h5>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xxl-2 col-lg-3 col-md-6 col-6 wow fadeInUp"
                  data-wow-delay="0.55s"
                >
                  <div className="product-box-4">
                    <div className="product-image">
                      <Link to="/AstrologersList">
                        <img
                          src="../assets/images/veg-3/cate1/videocamera.png"
                          className="img-fluid"
                          alt=""
                          style={{ height: "60px" }}
                        />
                      </Link>
                    </div>

                    <div className="product-detail">
                      <Link to="/AstrologersList">
                        <h5 className="name">
                          Video Call With Astrologers
                        </h5>
                      </Link>
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
    <section>
      
      </section>
      <section>
      
    </section>
     <Footer />
    </>
  )
}

export default Horoscope_page