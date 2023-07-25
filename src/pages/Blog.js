import React from "react";
import { useNavigate } from "react-router-dom";
import Live from "./Live";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Blog() {
  const navigate = useNavigate();
  const [gettop, setgettop] = useState([]);
  const [loader, setLoader] = useState(false);

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
    //dots: true,
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
    <div>
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
                <div >
                  <div  class="blog-box wow fadeInUp">
                  <div  class="blog-image">
                      <a onClick={()=>{
                     setLoader(true);                     
                    }} 
                       href="BlogDetail">
                        {/* style={{ width: "321px", height:'206px', objectFit: "contain" }} */}
                         <img 
                           style={{ width: "100%", height:'206px', objectFit: "" }}
                           src={
                            "http://103.104.74.215:3012/uploads/" +
                            list.image
                          }
                          class="bg-img blur-up lazyload bg-size background-size: cover; background-position: center center; background-repeat: no-repeat; display: block; img-fluid"
                          alt=""
                        />
                      </a>
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
                       <a href="BlogDetail">
                         <h3>{list.title}</h3>
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
                </div>
               
               );
              })}

                
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <Live/>
      <br/>
      <br/>
    </div>
  );
}

export default Blog;
