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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    flexDirection: "row",
  };

  const getRev = () => {
    axios
      .get(`http://103.104.74.215:3012/api/user/client_testimonials_list`)
      .then((res) => setRev(res.data.data));
  };

  return (
    <>
      {/* <!-- Category Section Start --> */}
      <section className="category-section-3">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>NakshatraTALKS REVIEWS</h2>
            <h4>Here about us from our customers</h4>
          </div>
          <div className="row">
            <div>
              <div
                className="category-slider-1 arrow-slider wow fadeInUp"
                style={{ width: "40%" }}
              >
                <Slider {...settings}>
                  {rev.map((i) => {
                    return (
                      <div style={{ width: "15%", margin: 5 }}>
                        <div className="category-box-list">
                          <div className="category-box-view">
                            <a href="">
                              <img
                                style={{ borderRadius: "100%", height: 120 }}
                                src={
                                  "http://103.104.74.215:3012/uploads/" +
                                  i.image
                                }
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </a>
                          </div>
                          <a
                            href="shop-left-sidebar.html"
                            className="category-name"
                          >
                            <b style={{ marginLeft: "30%" }}>{i.user_name}</b>
                            <h6 style={{ marginLeft: "30%" }}>{i.city}</h6>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Category Section End --> */}
    </>
  );
};

export default Reviews;
