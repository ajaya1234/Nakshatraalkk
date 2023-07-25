
// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// const K_team = () => {


//     const settings = {
//         autoplay:true,
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//           {
//             breakpoint: 992,
//             settings: {
//               slidesToShow: 1,
//             },
//           },
//           {
//             breakpoint: 576,
//             settings: {
//               slidesToShow: 1,
//             },
//           },
//         ],
//       };
//   return (
//     <>
       
//     <section class="team-section section-lg-space">
//         <div class="container-fluid-lg">
//             <div class="about-us-title text-center">
                
//             </div>
//             <div class="row">
//                 <div class="col-12">
//                 <Slider {...settings}>
//                     <div class="slider-user product-wrapper">
//                         <div>
//                             <div class="team-box">
//                                 <a href="#">
//                                 <div class="team-iamge">
//                                     <img src="../assets/images/astro/match.jpg" class="img-fluid blur-up lazyload"
//                                         alt=""/>
//                                 </div>

//                                 <div class="team-name">
//                                     <h3>Matchmaking</h3>
                                
//                                 </div></a>
//                             </div>
//                         </div>

//                         <div>
//                           <div class="team-box">
//                             <a href="#">
//                                 <div class="team-iamge">
//                                     <img src="../assets/images/astro/match.jpg" class="img-fluid blur-up lazyload"
//                                         alt=""/>
//                                 </div>

//                                 <div class="team-name">
//                                     <h3>Kundli Type</h3>
                                
//                                 </div></a>
//                             </div>
//                         </div>

//                         <div>
//                            <div class="team-box">
//                             <a href="#">
//                                 <div class="team-iamge">
//                                     <img src="../assets/images/astro/match.jpg" class="img-fluid blur-up lazyload"
//                                         alt=""/>
//                                 </div>

//                                 <div class="team-name">
//                                     <h3>Yog</h3>
                                
//                                 </div></a>
//                             </div>
//                         </div>

//                         <div>
//                           <div class="team-box">
//                             <a href="#">
//                                 <div class="team-iamge">
//                                     <img src="../assets/images/astro/match.jpg" class="img-fluid blur-up lazyload"
//                                         alt=""/>
//                                 </div>

//                                 <div class="team-name">
//                                     <h3>Dosh</h3>
                                
//                                 </div></a>
//                             </div>
//                         </div>

//                         <div>
//                           <div class="team-box">
//                             <a href="#">
//                                 <div class="team-iamge">
//                                     <img src="../assets/images/astro/match.jpg" class="img-fluid blur-up lazyload"
//                                         alt=""/>
//                                 </div>

//                                 <div class="team-name">
//                                     <h3>House</h3>
                                
//                                 </div></a>
//                             </div>
//                         </div>
//                          <div>
//                           <div class="team-box">
//                             <a href="#">
//                                 <div class="team-iamge">
//                                     <img src="../assets/images/astro/match.jpg" class="img-fluid blur-up lazyload"
//                                         alt=""/>
//                                 </div>

//                                 <div class="team-name">
//                                     <h3>Ascendant</h3>
                                
//                                 </div></a>
//                             </div>
//                         </div>
//                          <div>
//                           <div class="team-box">
//                             <a href="#">
//                                 <div class="team-iamge">
//                                     <img src="../assets/images/astro/match.jpg" class="img-fluid blur-up lazyload"
//                                         alt=""/>
//                                 </div>

//                                 <div class="team-name">
//                                     <h3>Dasha</h3>
                                
//                                 </div></a>
//                             </div>
//                         </div>
//                     </div>
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     </section>
    
//     </>
//   )
// }

// export default K_team








import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const K_team = () => {
    const settings = {
        dots: true,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        flexDirection: "row",
      };

  return (
    <>
      <section className="team-section section-lg-space">
        <div className="container-fluid-lg">
          <div className="about-us-title text-center"></div>
          <div className="row">
            <div className="col-12">
              
                <div className="slider-user product-wrapper">
                <Slider {...settings}>
                  <div className="team-box">
                    <a href="#">
                      
                      <div className="team-image">
                        <img
                          src="../assets/images/blog/Kundali.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </div>
                      <div className="team-name">
                        <h3>Matchmaking</h3>
                      </div>
                    </a>
                  </div>
                  <div className="team-box">
                    <a href="#">
                      
                      <div className="team-image">
                        <img
                        src="../assets/images/blog/Kundali.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </div>
                      <div className="team-name">
                        <h3>Matchmaking</h3>
                      </div>
                    </a>
                  </div>

                  <div className="team-box">
                    <a href="#">
                      
                      <div className="team-image">
                        <img
                        src="../assets/images/blog/Kundali.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </div>
                      <div className="team-name">
                        <h3>Matchmaking</h3>
                      </div>
                    </a>
                  </div>

                  <div className="team-box">
                    <a href="#">
                      
                      <div className="team-image">
                        <img
                        src="../assets/images/blog/Kundali.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </div>
                      <div className="team-name">
                        <h3>Matchmaking</h3>
                      </div>
                    </a>
                  </div>

                  <div className="team-box">
                    <a href="#">
                      
                      <div className="team-image">
                        <img
                        src="../assets/images/blog/Kundali.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </div>
                      <div className="team-name">
                        <h3>Matchmaking</h3>
                      </div>
                    </a>
                  </div>

                  <div className="team-box">
                    <a href="#">
                      <div className="team-image">
                        <img
                        src="../assets/images/blog/Kundali.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </div>
                      <div className="team-name">
                        <h3>Kundli Type</h3>
                      </div>
                    </a>
                    
                  </div>
                  </Slider>

                  {/* Add more slides here */}

                </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default K_team;


