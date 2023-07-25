import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Header1 from "./InHeader";
import Footer from "./Footer";
import Header1 from "./Header1";
import Live from "./Live";
const Pooja = () => {
  useEffect(() => {
    getData();
  }, []);

  const [getPooja, setGetPooja] = useState([]);

  const getData = () => {
    axios.get("http://103.104.74.215:3012/api/user/puja_list").then((res) => {
      // console.log(res.data.data)
      setGetPooja(res.data.data);
    });
  };
  const [loader, setLoader] = useState(false);
  return (
    <>
      <Header1 />
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

      {/* <!-- Breadcrumb Section Start --> */}
      <section className="blog-section">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Nakshatra Pooja</h2>

            {/* <h4>Top Astrologers. 24 * 7 customer support. Happy to help</h4> */}
          </div>

          <div
            className="slider-5 arrow-slider"
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {getPooja.map((i) => {
              return (
                <div style={{ width: "20%", marginLeft: 10 }}>
                  <div
                    className="blog-box "
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div className="blog-box-image">
                      <Link
                        
                        onClick={() =>{
                          setLoader(true)
                          localStorage.setItem("pujaDet", JSON.stringify(i))
                          }}
                          to="/PujaListDetail"
                      >
                        <img
                          src={
                            "http://103.104.74.215:3012/uploads/" + i.file[0]
                          }
                          className="img-fluid bg-img"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="blog-detail">
                      {/* <!-- <label>Conversion rate optimization</label> --> */}
                      <a href="">
                        <h2>{i?.title} <button class="btn btn-md bg-dark cart-button text-white w-80" style={{float:'right' , height:'29px' , width:'87px'}}>Book Now</button></h2>
                      </a>
                      <div className="blog-list">
                        <span>{i?.current_date.slice(0, 10)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-3">
              <div class="row g-4 ratio_65">
                {getPooja.map((i) => {
                  return (
                    <div class="col-lg-4 col-sm-6">
                      <div class="blog-box wow fadeInUp">
                        <Link
                          to="/PujaListDetail"

                          onClick={() =>{
                            setLoader(true)
                            localStorage.setItem("pujaDet", JSON.stringify(i))
                           } }
                        >
                          <img
                            src={
                              "http://103.104.74.215:3012/uploads/" + i.file[0]
                            }
                            class="img-fluid bg-img"
                            alt=""
                          />
                        </Link>
                      </div>

                      <div class="blog-contain">
                        <div class="blog-label">
                          <span class="super">
                            <span>
                              <h2>{i.title}</h2>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section> */}
<Live/>
<br/>
<br/>
      <Footer />
    </>
  );
};

export default Pooja;
