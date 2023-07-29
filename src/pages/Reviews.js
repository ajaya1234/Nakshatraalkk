import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
const Reviews = () => {
  useEffect(() => {
    getRev();
  }, []);
  const [rev, setRev] = useState([]);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   flexDirection: "row",
  //   autoplay:true,
    
  // };


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
  const getRev = () => {
    axios
      .get(`http://103.104.74.215:3012/api/user/client_testimonials_list`)
      .then((res) => setRev(res.data.data));
  };




return(
  <>
    
  
  <section class="blog-section section-b-space">
    <div class="container-fluid-lg">
      <div className="title">
        <h2>NakshatraTALKS REVIEWS </h2>
        <h4>Here about us from our customers</h4>
      </div>
      <div class="row" >
        <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-3" >
          <Slider {...settings}>
          {rev.map((i) => {
                    return (
            <div >
              <div  class="blog-box wow fadeInUp">
              <div  class="blog-image" style={{borderRadius:''}}>
                  <a 
                   href="BlogDetail">
                    
                     <img
                       style={{ width: "100%", height:'206px', objectFit: "" }}
                       src={
                        "http://103.104.74.215:3012/uploads/" +
                        i.image
                      }
                      class="bg-img blur-up lazyload img-fluid"
                      alt=""
                    />
                  </a>
                </div>

                <div  class="blog-contain " >
                  <div class="blog-label" >
                    <span class="time">
                      <i data-feather="clock"></i> <span>{i.user_name}</span>
                    </span>
                    <span class="super">
                      <i data-feather="user"></i>{" "}
                       <span>{i.city}</span>
                     </span>
                   </div>
                   {/* <a
                            href="shop-left-sidebar.html"
                            className="category-name"
                          > */}
                            {/* <b style={{ marginLeft: "30%" }}>{i.user_name}</b> */}
                            {/* <h6 style={{ marginLeft: "30%" }}>{i.city}</h6> */}
                          {/* </a> */}
                   {/* <a  href="BlogDetail">
                   <button
                  onClick={()=>{
                   setLoader(true);                     
                 }} 
                     class="blog-button"
                   >                         Read More
                    <i class="fa-solid fa-right-long"></i>
                  </button>
                  </a> */}
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

export default Reviews;














  
//   return (
//     <>
      
//       <section className="category-section-3">
//         <div className="container-fluid-lg">
//           <div className="title">
//             <h2>NakshatraTALKS REVIEWS</h2>
//             <h4>Here about us from our customers</h4>
//           </div>
//           <div className="row">
//             <div>
//               <div
//                 className="category-slider-1 arrow-slider wow fadeInUp"
//                 style={{ width: "100%" }}
//               >
//                 <Slider {...settings}>
//                   {rev.map((i) => {
//                     return (
//                       <div style={{ width: "15%", margin: 5 }}>
//                         <div className="category-box-list">
//                           <div className="category-box-view">
//                             <a href="">
//                               <img
//                                 style={{ borderRadius: "100%", height: 120 }}
//                                 src={
//                                   "http://103.104.74.215:3012/uploads/" +
//                                   i.image
//                                 }
//                                 className="img-fluid blur-up lazyload"
//                                 alt=""
//                               />
//                             </a>
//                           </div>
//                           <a
//                             href="shop-left-sidebar.html"
//                             className="category-name"
//                           >
//                             <b style={{ marginLeft: "30%" }}>{i.user_name}</b>
//                             <h6 style={{ marginLeft: "30%" }}>{i.city}</h6>
//                           </a>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </Slider>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//     </>
//   );
// };

// export default Reviews;
