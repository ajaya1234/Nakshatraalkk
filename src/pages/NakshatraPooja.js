import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const NakshatraPooja = () => {
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

  const showTime = (x) => {
    const d = new Date(x);
    const dd = d.getDate();
    const mm = d.getMonth() + 1;
    const yy = d.getFullYear();
    const t = d.getHours();
    const nt = t > 12 ? t - 12 : t;
    const m = d.getMinutes();
    const ampm = t > 12 ? "PM" : "AM";
    const zeroMin = m < 10 ? 0 : "";
    const finaldate = dd + "/" + mm + "/" + yy;
    return `${finaldate}  ${nt}:${zeroMin}${m}${ampm}`;
  };
  const [loader, setLoader] = useState(false);

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
      {/* <!-- Nakshatra Pooja Start --> */}
      <section className="blog-section">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Nakshatra Pooja</h2>

            <h4>Top Astrologers. 24 * 7 customer support. Happy to help</h4>
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
                        <h2>{i?.title}</h2>
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

      {/* <!-- Nakshatra Pooja Section End --> */}
    </>
  );
};

export default NakshatraPooja;
