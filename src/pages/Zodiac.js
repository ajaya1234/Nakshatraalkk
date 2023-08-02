


import { Link } from "react-router-dom";
import React from 'react'
import Header1 from './Header1'
import Footer from './Footer'
import Live from './Live'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Zodiac = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        flexDirection: "row",
      };

      const settings1 = {
        //dots: true,
        //autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        flexDirection: "row",
      };
  return (
    <>
     <Header1/>

     {/* <!-- Breadcrumb Section Start --> */}
    <section class="breadscrumb-section pt-0">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="breadscrumb-contain">
                        <h2>Zodiac Sign</h2>
                        {/* <nav>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <a href="index-2.html">
                                        <i class="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Zodiac Sign</li>
                            </ol>
                        </nav> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End -->

    <!-- Love section start--> */}
    <section class="fresh-vegetable-section section-lg-space">
        <div class="container-fluid-lg">
            <div class="title" style={{padding:" 5px"}}>
                <div class="row">
                    <div  class="col-lg-3">
                   
                <img class="img2" src="../assets/images/inner-page/zodiac.jpg" alt="aries" width="170" height="170"  style={{borderRadius: "100%"}}/></div>
                <div  class="col-lg-9">
                <h2>Zudiac Sign</h2>
                <p >
                    Astrology, focuses on a person’s astrological or zodiac sign, to a large extent. There are 12 Zodiac
                    Signs, which are believed to be star-constellations in the sky. Each sign has different mythological
                    stories connected to it, and each one represents a prime energy of consciousness.
                    </p>
            </div>
                </div>
            </div>

        </div>
    </section>

    {/* <!-- Love section End-->

    <!-- Category Section Start --> */}
    <section className="category-section-2">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>SELECT YOUR SIGN</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="category-slider arrow-slider">
                <Slider {...settings}>
                  <div className="shop-category-box border-0 wow fadeIn">
                    <Link to="#" className="circle-1">
                      <img
                        src="../assets/images/veg-3/category/1.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </Link>
                    <div className="category-name">
                      <h6>Aries</h6>
                      <h6 style={{ fontSize: "10px" }}>21/3-19/4</h6>
                    </div>
                  </div>
                  <div>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.05s"
                    >
                      <Link to="#" className="circle-2">
                        <img
                          src="../assets/images/veg-3/category/2.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Taurus</h6>
                        <h6 style={{ fontSize: "10px" }}>20/4-20/5</h6>
                      </div>
                    </div>
                  </div>

                  <div style={{ alignSelf: "center" }}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <Link to="#" className="circle-3">
                        <img
                          src="../assets/images/veg-3/category/3.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Gemini</h6>
                        <h6 style={{ fontSize: "10px" }}>21/5-20/6</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.15s"
                    >
                      <Link to="#" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/4.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Cancer</h6>
                        <h6 style={{ fontSize: "10px" }}>21/6-22/7</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <Link to="#" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/5.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Leo</h6>
                        <h6 style={{ fontSize: "10px" }}>23/7-22/8</h6>
                      </div>
                    </div>
                  </div>

                  <div
                    className="shop-category-box border-0 wow fadeIn"
                    data-wow-delay="0.25s"
                  >
                    <Link to="#" className="circle-1">
                      <img
                        src="../assets/images/veg-3/category/6.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </Link>
                    <div className="category-name">
                      <h6>Virgo</h6>
                      <h6 style={{ fontSize: "10px" }}>23/8-22/9</h6>
                    </div>
                  </div>
                  <div style={{ alignSelf: "center" }}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.3s"
                    >
                      <Link to="#" className="circle-2">
                        <img
                          src="../assets/images/veg-3/category/7.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Libra</h6>
                        <h6 style={{ fontSize: "10px" }}>23/9-22/10</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.35s"
                    >
                      <Link to="#" className="circle-3">
                        <img
                          src="../assets/images/veg-3/category/8.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Scorpio</h6>
                        <h6 style={{ fontSize: "10px" }}>23/10-21/11</h6>
                      </div>
                    </div>
                  </div>

                  <div style={{ alignSelf: "center" }}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.4s"
                    >
                      <Link to="#" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/9.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Sagittarius</h6>
                        <h6 style={{ fontSize: "10px" }}>22/11-21/12</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.45s"
                    >
                      <Link to="#" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/10.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Capricorn</h6>
                        <h6 style={{ fontSize: "10px" }}>22/12-19/1</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.5s"
                    >
                      <Link to="#" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/11.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Aquarius</h6>
                        <h6 style={{ fontSize: "10px" }}>20/1-18/2</h6>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "center" }}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.55s"
                    >
                      <Link to="#" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/12.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </Link>
                      <div className="category-name">
                        <h6>Pisces </h6>
                        <h6 style={{ fontSize: "10px" }}>19/2-20/3</h6>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* <!-- Category Section End --> */}
     

    {/* <!-- Blog Section Start --> */}




    <section class="blog-section">
        <div class="container-fluid-lg">
            <div class="title">
                <h2>YOU MAY ALSO LIKE</h2>

            </div>
            
            <div class="slider-3 arrow-slider">
            <Slider {...settings1}>
            <div>
                    <div class="blog-box ratio_50">
                        <div class="blog-box-image" style={{height:'206px'}}>
                            <Link to="#">
                                <img  width={'100%'} src="../assets/images/blog/number.jpg" class="img-fluid bg-img" alt=""/>
                            </Link>
                        </div>

                        <div class="blog-detail">
                            
                            <Link to="#">
                                <h2>Moola Nakshatra: Characteristics, Compatibility</h2>
                            </Link>
                            <div class="blog-list">
                                <span>March 9, 2021</span>
                                <div class="views_blog_box"><i class="fa fa-eye"></i><span>200</span></div>
                               
                            </div>
                             
                        </div>
                    </div>
                </div>

                <div>
                    <div class="blog-box ratio_50">
                        <div class="blog-box-image" style={{height:'206px'}}>
                            <Link to='#'>
                                <img  width={'100%'} src="../assets/images/blog/number.jpg" class="img-fluid bg-img" alt=""/>
                            </Link>
                        </div>

                        <div class="blog-detail">
                            
                            <Link to='#'>
                                <h2>Monthly Numerology Predictions For April 2023</h2>
                            </Link>
                            <div class="blog-list">
                                <span>March 9, 2021</span>
                                <div class="views_blog_box"><i class="fa fa-eye"></i><span>200</span></div>
                               
                            </div>
                             
                        </div>
                    </div>
                </div>

                 <div>
                    <div class="blog-box ratio_50">
                        <div class="blog-box-image" style={{height:'206px'}}>
                            <Link to="#">
                                <img  width={'100%'} src="../assets/images/blog/card.jpg" class="img-fluid bg-img" alt=""/>
                            </Link>
                        </div>

                        <div class="blog-detail">
                            
                            <Link to="#">
                                <h2>April Tarot Reading Horoscope 2023 for Each Zodiac Sign</h2>
                            </Link>
                            <div class="blog-list">
                                <span>March 23, 2023</span>
                                <div class="views_blog_box"><i class="fa fa-eye"></i><span>1000</span></div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div>
                    <div class="blog-box ratio_50">
                        <div class="blog-box-image" style={{height:'206px'}}>
                            <Link to="#">
                                <img width={'100%'} src="../assets/images/blog/vivah.jpg" class="img-fluid bg-img" alt=""/>
                            </Link>
                        </div>

                        <div class="blog-detail">
                            
                            <Link to="#">
                                <h2>Vivah Muhurat 2024: Auspicious Dates &amp; Time In 2024 To Get Married</h2>
                            </Link>
                            <div class="blog-list">
                                <span>March 23, 2023</span>
                              <div class="views_blog_box"><i class="fa fa-eye"></i><span>1000</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                </Slider>
            </div>
            
        </div>
        
    </section>


    {/* <!-- Blog Section End --> */}

     {/* <!-- Product Section Start --> */}
    <section>
        <div class="container-fluid-lg">
            <div class="title" style={{padding: "5px"}}>
                <div style={{textAlign:"center"}}>
                <h2>12 Zodiac Signs with Dates and Meaning</h2>
                
                </div>
             
                <p class="text-justify">
                    According to Western astrology, the zodiac signs are the twelve 30° sectors of the ecliptic, i.e. the
                    plane that the Sun follows. The approximate dates calculated for the Zodiac signs (starting from
                    Aries) are-
                    <br/>
                    <b>Aries</b> from March 21-April 19; <b>Taurus</b> from April 20-May 20;
                    <b>Gemini</b> from May 21-June 20;
                    <b>Cancer</b>from June 21-July 22;
                    <b>Leo</b> from July 23-August 22; <b>Virgo</b> from August 23-September 22;
                    <b>Libra</b> from September 23-October 22;
                    <b>Scorpio</b> from October 23-November 21; <b>Sagittarius</b> from
                    November 22-December 21, <b>Capricorn</b> is from December 22- January 19; <b>Aquarius</b>Aqurius is from
                    January 20 to February 18; and <b>Pisces</b> from February 19 to March 20.
                    <br/>
                    </p>

                    <p class="top17 text-justify font16 line27">
                        Each zodiac sign is represented by a special ‘symbol’- <b>Aries</b> is the Ram, <b>Taurus</b> is the Bull,
                        <b>Gemini</b> is represented by the Twins, <b>Cancer</b> is the Crab, <b>Leo</b> is the Lion, <b>Virgo</b> is the Virgin, <b>Libra</b>
                        is represented by the Scales,<b> Scorpio</b> is the Scorpion, <b>Sagittarius</b> is the Archer or the Centaur,
                        <b>Capricorn</b> is the Goat,<b> Aquarius</b> is the Water Bearer, and <b>Pisces</b> is represented by the (Two)
                        Fish.
                        </p>
                     <p>
                        The 4 elements and their influence on the signs have been briefly explained below-
                        </p> 
                        <p>
                        <b>Water Signs</b>- The Water signs tend to be exceptionally emotional and sensitive. They are highly
                        intuitive and they can be as mysterious. Water signs love profound conversations and intimacy. As
                        their element suggests, the water signs can be quite fragile and, so, constantly seek security in
                        relationships.<b> The Water Signs are: Cancer, Scorpio and Pisces.</b>
                        </p>  
                        <p>
                        <b>Fire Signs-</b> The Fire signs tend to be passionate and dynamic, yet temperamental. They get angry
                        just as quickly as fire catches on in a dry forest, but they also forgive easily. They are adventurous
                        and full of energy. They inspire others with their physical strength. Fire signs are intelligent, self-
                        aware, creative and idealistic people.<b> The Fire Signs are: Aries, Leo and Sagittarius.</b>
                        </p>
                        <p>
                        <b>Earth Signs-</b> As their element suggests, the Earth signs are ‘grounded’ and encourage people
                        around them to be ‘down to earth’ as well. They are mostly conservative and realistic, and can also
                        be quite emotional. They are loyal and stable, and they support their loved ones even when the
                        times get rough. While on one hand they can be quite practical, at times they often get
                        materialistic. <b>The Earth Signs are: Taurus, Virgo and Capricorn.</b>
                         </p>
                        
                        <p>
                            <b>Air Signs-</b> The Air signs are driven by rationality. They are social, friendly, and love conversing
                            with others. They are the thinkers in the zodiacal circle, being intellectual and analytical. They love
                            philosophical discussions, social gatherings and good books. Their main goal is to follow their own
                            creative and liberating ideas, and so, as the air around us, it can be hard for these signs to ‘fit-in’ in
                            their surroundings. <b>The Air Signs are: Gemini, Libra and Aquarius.</b>
                            </p>
            </div>
            
   
    
            </div>
    
    </section>
    {/* <!-- Product Section End --> */}
<Live/>
<br/>
<br/>
     <Footer/>
    </>
  )
}

export default Zodiac