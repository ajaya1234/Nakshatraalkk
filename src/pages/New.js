import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const New = () => {

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
      .get("http://103.104.74.215:3012/api/user/news_list", data, options)
      .then((res) => {
        setgettop(res.data.data);
      })
      .catch((err) => {});
  };


  // useEffect(() => {
  //   getNews();
  // }, []);
  // const [news, setNews] = useState([]);



  // const getNews = () => {
  //   axios
  //     .get(`http://103.104.74.215:3012/api/user/news_list`)
  //     .then((res) => setNews(res.data.data));
  // };
  


  const settings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
<section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div className="title">
            <h2>Nakshatra Talks IN NEWS </h2>
           
          </div>
          <div class="row" >
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-3" >
              <Slider {...settings}>
              {gettop?.map((i) => {
                  return (
                <div onClick={()=>{localStorage.setItem("newlistid",i._id)}}>
                  <div  class="blog-box wow fadeInUp">
                  <div  class="blog-image">
                      <Link                      
                     
                       to="/NewDetails">
                        {/* style={{ width: "321px", height:'206px', objectFit: "contain" }} */}
                         <img
                           style={{ width: "100%", height:'116px', objectFit: "" }}
                           src={
                            "http://103.104.74.215:3012/uploads/" + i.image
                          }
                          class="bg-img blur-up lazyload bg-size background-size: cover; background-position: center center; background-repeat: no-repeat; display: block;"
                          alt=""
                        />
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

export default New;
