// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LatestBlog = () => {

//   const navigate = useNavigate
//   const uid = Math.random().toString(36).slice(-4);

//   const [loader, setLoader] = useState(false);

//   return (
//     <>
//       {loader === true && (
//         <div class="fullpage-loader">
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       )}

//       <section class="blog-section section-b-space">
//         <div class="container-fluid-lg">
//           <div className="title">
//             <h2>LATEST FROM BLOG </h2>

//             <h4>Top Astrologers. 24 * 7 customer support. Happy to help</h4>
//           </div>
//           <div class="row">
//             <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-3">
//               <div class="row g-4 ratio_65">
//                 <div class="col-lg-4 col-sm-6">
//                   <div class="blog-box wow fadeInUp">
//                     <div class="blog-image">
//                       <a onClick={()=>{
//                       setLoader(true);                     
//                     }} 
//                       href="BlogDetail">
//                         <img
//                           style={{ width: "100%", objectFit: "contain" }}
//                           src="../assets/images/inner-page/blog/1.jpg"
//                           class="bg-img blur-up lazyload"
//                           alt=""
//                         />
//                       </a>
//                     </div>

//                     <div class="blog-contain">
//                       <div class="blog-label">
//                         <span class="time">
//                           <i data-feather="clock"></i> <span>28 Feg, 2023</span>
//                         </span>
//                         <span class="super">
//                           <i data-feather="user"></i>{" "}
//                           <span>JyotiRaj Singh</span>
//                         </span>
//                       </div>
//                       <a href="BlogDetail">
//                         <h3>Shri Ram Stuti by Shiv Ji</h3>
//                       </a>
//                       <a  href="BlogDetail">
//                       <button
//                      onClick={()=>{
//                       setLoader(true);                     
//                     }} 
//                         class="blog-button"
//                       >
//                         Read More
//                         <i class="fa-solid fa-right-long"></i>
//                       </button>
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="col-lg-4 col-sm-6">
//                   <div class="blog-box wow fadeInUp" data-wow-delay="0.05s">
//                     <div class="blog-image">
//                       <a 
//                       onClick={()=>{
//                         setLoader(true);                     
//                       }} 
//                       href="EclipsesBlogDetail">
//                         <img
//                           style={{ width: "100%", objectFit: "contain" }}
//                           src="../assets/images/inner-page/blog/2.jpg"
//                           class="bg-img"
//                           alt=""
//                         />
//                       </a>
//                     </div>

//                     <div class="blog-contain">
//                       <div class="blog-label">
//                         <span class="time">
//                           <i data-feather="clock"></i> <span>20 Feg, 2023</span>
//                         </span>
//                         <span class="super">
//                           <i data-feather="user"></i>{" "}
//                           <span>JyotiRaj Singh</span>
//                         </span>
//                       </div>
//                       <a href="EclipsesBlogDetail">
//                         <h3>Eclipses- change is constant.</h3>
//                       </a>
//                       <a href="EclipsesBlogDetail">
//                       <button  class="blog-button" onClick={()=>setLoader(true)}>
//                         Read More
//                         <i class="fa-solid fa-right-long"></i>
//                       </button>
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="col-lg-4 col-sm-6">
//                   <div class="blog-box wow fadeInUp" data-wow-delay="0.1s">
//                     <div class="blog-image">
//                       <a
//                       onClick={()=>{
//                         setLoader(true);                     
//                       }} 
//                       href="VedicBlog">
//                         <img
//                           style={{ width: "100%", objectFit: "contain" }}
//                           src="../assets/images/inner-page/blog/3.jpg"
//                           class="bg-img blur-up lazyload"
//                           alt=""
//                         />
//                       </a>
//                     </div>

//                     <div class="blog-contain">
//                       <div class="blog-label">
//                         <span class="time">
//                           <i data-feather="clock"></i> <span>15 Feg, 2023</span>
//                         </span>
//                         <span class="super">
//                           <i data-feather="user"></i>{" "}
//                           <span>JyotiRaj Singh</span>
//                         </span>
//                       </div>
//                       <a href="VedicBlog">
//                         <h3>Vedic Astrology.</h3>
//                       </a>
//                       <a href="VedicBlog">
//                       <button 
//                        onClick={()=>{
//                         setLoader(true);                     
//                       }}
//                       class="blog-button">
//                         Read More
//                         <i class="fa-solid fa-right-long"></i>
//                       </button>
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="col-lg-4 col-sm-6">
//                   <div class="blog-box wow fadeInUp" data-wow-delay="0.15s">
//                     <div class="blog-image">
//                       <a
//                       onClick={()=>{
//                         setLoader(true);                     
//                       }} 
//                       href="NavagrahasBlog">
//                         <img
//                           style={{ width: "100%", objectFit: "contain" }}
//                           src="../assets/images/inner-page/blog/4.jpg"
//                           class="bg-img blur-up lazyload"
//                           alt=""
//                         />
//                       </a>
//                     </div>

//                     <div class="blog-contain">
//                       <div class="blog-label">
//                         <span class="time">
//                           <i data-feather="clock"></i> <span>26 Feg, 2023</span>
//                         </span>
//                         <span class="super">
//                           <i data-feather="user"></i>{" "}
//                           <span>JyotiRaj Singh</span>
//                         </span>
//                       </div>
//                       <a href="NavagrahasBlog">
//                         <h3>Navagrahas: The planets in Astrology</h3>
//                       </a>

//                       <a href="NavagrahasBlog">
//                       <button onClick={()=>{
//                         setLoader(true);                     
//                       }}   class="blog-button">
//                         Read More
//                         <i class="fa-solid fa-right-long"></i>
//                       </button>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//     </>
//   );
// };

// export default LatestBlog;


import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import axios from "axios";

const LatestBlog = () => {
  const navigate = useNavigate
  const uid = Math.random().toString(36).slice(-4);
  const [loader, setLoader] = useState(false);
  const [gettop, setgettop] = useState([]);
  
  useEffect(() => {
    gettopvideo();
  }, [0]);

  const gettopvideo = async () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = JSON.stringify({});

    await axios
      .get("http://103.104.74.215:3012/api/user/blog_list", data, options)
      .then((res) => {
        setgettop(res.data.data);
      })
      .catch((err) => {});
  };


  const settings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    
      {loader === true && (
         <div class="fullpage-loader">
          <span></span>
           <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div className="title">
            <h2>LATEST FROM BLOG </h2>
            <h4>Top Astrologers. 24 * 7 customer support. Happy to help</h4>
          </div>
          <div class="row" >
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-3" >
              <Slider {...settings}>
              {gettop.map((list) => {
        return (
                <div onClick={()=>{localStorage.setItem("blogid",list._id)}}>



                  <div  class="blog-box wow fadeInUp">
                  <div  class="blog-image">
                      <Link to
                       ="/BlogDetail">
                        
                         <img
                           style={{ width: "100%", height:'206px', objectFit: "" }}
                           src={
                            "http://103.104.74.215:3012/uploads/" +
                            list.image
                          }
                          class="bg-img blur-up lazyload img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div  class="blog-contain ">
                      <div class="blog-label">
                        <span class="time">
                          <i data-feather="clock"></i> <span>28 Feg, 2023</span>
                        </span>
                        <span class="super">
                          <i data-feather="user"></i>{" "}
                           <span>JyotiRaj Singh</span>
                         </span>
                       </div>
                       <Link to="/BlogDetail">
                         <h3>{list.title}</h3>
                         {/* {list._id} */}
                       </Link>
                       <Link  to="/BlogDetail">
                       <button
                      onClick={()=>{
                       setLoader(true);                     
                     }} 
                         class="blog-button"
                       >                         Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
               
               );
              })}

                
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestBlog;







 {/* <div>
                  <div class="blog-box wow fadeInUp">
                  <div class="blog-image">
                      <a onClick={()=>{
                     setLoader(true);                     
                    }} 
                       href="BlogDetail">
                         <img
                           style={{ width: "100%", objectFit: "contain" }}
                           src="../assets/images/inner-page/blog/2.jpg"
                          class="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="blog-contain">
                      <div class="blog-label">
                        <span class="time">
                          <i data-feather="clock"></i> <span>28 Feg, 2023</span>
                        </span>
                        <span class="super">
                          <i data-feather="user"></i>{" "}
                           <span>JyotiRaj Singh</span>
                         </span>
                       </div>
                       <a href="BlogDetail">
                         <h3>Shri Ram Stuti by Shiv Ji</h3>
                       </a>
                       <a  href="BlogDetail">
                       <button
                      onClick={()=>{
                       setLoader(true);                     
                     }} 
                         class="blog-button"
                       >                         Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* <div>
                  <div class="blog-box wow fadeInUp">
                  <div class="blog-image">
                      <a onClick={()=>{
                     setLoader(true);                     
                    }} 
                       href="BlogDetail">
                         <img
                           style={{ width: "100%", objectFit: "contain" }}
                           src="../assets/images/inner-page/blog/3.jpg"
                          class="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="blog-contain">
                      <div class="blog-label">
                        <span class="time">
                          <i data-feather="clock"></i> <span>28 Feg, 2023</span>
                        </span>
                        <span class="super">
                          <i data-feather="user"></i>{" "}
                           <span>JyotiRaj Singh</span>
                         </span>
                       </div>
                       <a href="BlogDetail">
                         <h3>Shri Ram Stuti by Shiv Ji</h3>
                       </a>
                       <a  href="BlogDetail">
                       <button
                      onClick={()=>{
                       setLoader(true);                     
                     }} 
                         class="blog-button"
                       >                         Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                      </a>
                    </div>
                  </div>
                </div> */}
             
             
                {/* <div>
                  <div class="blog-box wow fadeInUp">
                  <div class="blog-image">
                      <a onClick={()=>{
                     setLoader(true);                     
                    }} 
                       href="BlogDetail">
                         <img
                           style={{ width: "100%", objectFit: "contain" }}
                           src="../assets/images/inner-page/blog/4.jpg"
                          class="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="blog-contain">
                      <div class="blog-label">
                        <span class="time">
                          <i data-feather="clock"></i> <span>28 Feg, 2023</span>
                        </span>
                        <span class="super">
                          <i data-feather="user"></i>{" "}
                           <span>JyotiRaj Singh</span>
                         </span>
                       </div>
                       <a href="BlogDetail">
                         <h3>Shri Ram Stuti by Shiv Ji</h3>
                       </a>
                       <a  href="BlogDetail">
                       <button
                      onClick={()=>{
                       setLoader(true);                     
                     }} 
                         class="blog-button"
                       >                         Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                      </a>
                    </div>
                  </div>
                </div> */}



























// import { useNavigate  } from "react-router-dom";
// import { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// const LatestBlog = () => {
//   const navigate = useNavigate
//   const uid = Math.random().toString(36).slice(-4);
//   const [loader, setLoader] = useState(false);


//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       {loader === true && (
//         <div class="fullpage-loader">
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       )}
//       <section class="blog-section section-b-space">
//         <div class="container-fluid-lg">
//           <div className="title">
//             <h2>LATEST FROM BLOG </h2>
//             <h4>Top Astrologers. 24 * 7 customer support. Happy to help</h4>
//           </div>
//           <div class="row">
//             <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-3">
//               <Slider {...settings}>
//                 <div>
//                   <div class="blog-box wow fadeInUp">
//                     <div class="blog-image">
//                       <a
//                         onClick={() => {
//                           setLoader(true);
//                         }}
//                         href="BlogDetail"
//                       >
//                         <img
//                           style={{
//                             width: "400px",
//                             height: "400px",
//                             objectFit: "contain",
//                           }}
//                           src="../assets/images/inner-page/blog/1.jpg"
//                           class="bg-img blur-up lazyload"
//                           alt=""
//                         />
//                       </a>
//                     </div>

//                     <div class="blog-contain">
//                       <div class="blog-label">
//                         <span class="time">
//                           <i data-feather="clock"></i>{" "}
//                           <span>28 Feg, 2023</span>
//                         </span>
//                         <span class="super">
//                           <i data-feather="user"></i>{" "}
//                           <span>JyotiRaj Singh</span>
//                         </span>
//                       </div>
//                       <a href="BlogDetail">
//                         <h3>Shri Ram Stuti by Shiv Ji</h3>
//                       </a>
//                       <a href="BlogDetail">
//                         <button
//                           onClick={() => {
//                             setLoader(true);
//                           }}
//                           class="blog-button"
//                         >
//                           Read More
//                           <i class="fa-solid fa-right-long"></i>
//                         </button>
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="col-lg-4 col-sm-6">
//                   <div class="blog-box wow fadeInUp" data-wow-delay="0.05s">
//                     <div class="blog-image">
//                       <a
//                         onClick={() => {
//                           setLoader(true);
//                         }}
//                         href="EclipsesBlogDetail"
//                       >
//                         <img
//                           style={{
//                             width: "400px",
//                             height: "400px",
//                             objectFit: "contain",
//                           }}
//                           src="../assets/images/inner-page/blog/2.jpg"
//                           class="bg-img"
//                           alt=""
//                         />
//                       </a>
//                     </div>

//                     <div class="blog-contain">
//                       <div class="blog-label">
//                         <span class="time">
//                           <i data-feather="clock"></i>{" "}
//                           <span>20 Feg, 2023</span>
//                         </span>
//                         <span class="super">
//                           <i data-feather="user"></i>{" "}
//                           <span>JyotiRaj Singh</span>
//                         </span>
//                       </div>
//                       <a href="EclipsesBlogDetail">
//                         <h3>Eclipses- change is constant.</h3>
//                       </a>
//                       <a href="EclipsesBlogDetail">
//                         <button
//                           class="blog-button"
//                           onClick={() => setLoader(true)}
//                         >
//                           Read More
//                           <i class="fa-solid fa-right-long"></i>
//                         </button>
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="col-lg-4 col-sm-6">
//                    <div class="blog-box wow fadeInUp" data-wow-delay="0.1s">
//                      <div class="blog-image">
//                        <a
//                        onClick={()=>{
//                          setLoader(true);                     
//                        }} 
//                        href="VedicBlog">
//                          <img
//                            style={{ width: "100%", objectFit: "contain" }}
//                           src="../assets/images/inner-page/blog/3.jpg"
//                           class="bg-img blur-up lazyload"
//                           alt=""
//                         />
//                       </a>
//                     </div>

//                    <div class="blog-contain">
//                        <div class="blog-label">
//                          <span class="time">
//                            <i data-feather="clock"></i> <span>15 Feg, 2023</span>
//                          </span>
//                          <span class="super">
//                            <i data-feather="user"></i>{" "}
//                            <span>JyotiRaj Singh</span>
//                          </span>
//                        </div>
//                        <a href="VedicBlog">
//                          <h3>Vedic Astrology.</h3>
//                        </a>
//                       <a href="VedicBlog">
//                        <button 
//                        onClick={()=>{
//                         setLoader(true);                     
//                       }}
//                       class="blog-button">
//                         Read More
//                         <i class="fa-solid fa-right-long"></i>
//                       </button>
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="col-lg-4 col-sm-6">
//                   <div class="blog-box wow fadeInUp" data-wow-delay="0.15s">
//                     <div class="blog-image">
//                       <a
//                       onClick={()=>{
//                         setLoader(true);                     
//                       }} 
//                       href="NavagrahasBlog">
//                         <img
//                           style={{ width: "100%", objectFit: "contain" }}
//                           src="../assets/images/inner-page/blog/4.jpg"
//                           class="bg-img blur-up lazyload"
//                           alt=""
//                         />
//                       </a>
//                     </div>

//                     <div class="blog-contain">
//                       <div class="blog-label">
//                         <span class="time">
//                           <i data-feather="clock"></i> <span>26 Feg, 2023</span>
//                         </span>
//                         <span class="super">
//                           <i data-feather="user"></i>{" "}
//                           <span>JyotiRaj Singh</span>
//                         </span>
//                       </div>
//                       <a href="NavagrahasBlog">
//                         <h3>Navagrahas: The planets in Astrology</h3>
//                       </a>

//                       <a href="NavagrahasBlog">
//                       <button onClick={()=>{
//                         setLoader(true);                     
//                       }}   class="blog-button">
//                         Read More
//                         <i class="fa-solid fa-right-long"></i>
//                       </button>
//                       </a>
//                     </div>
//                   </div>
                
//               </div>
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default LatestBlog;
