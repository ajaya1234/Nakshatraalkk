import React, { useState } from "react";
// import Header1 from "./InHeader";
import Footer from "./Footer";
import ReactPlayer from "react-player";
import Header1 from "./Header1";
function PujaListDetail() {
  const data = localStorage.getItem("pujaDet");
  const parse = JSON.parse(data);
  const [details, setDetails] = useState(parse);
  const [videoUrl, setVideoUrl] = useState(details.file[1]);

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
    return `${finaldate}       ${nt}:${zeroMin}${m}${ampm}`;
  };

  return (
    <div>
      <Header1 />
      <section class="breadscrumb-section pt-0">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-12">
              <div class="breadscrumb-contain">
                <div></div>
                <h2>Puja Details Page</h2>
                {/* <nav>
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                      <a href="index-2.html">
                        <i class="fa-solid fa-house"></i>
                      </a>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                      Blog
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Blog Details
                    </li>
                  </ol>
                </nav> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row g-sm-4 g-3">
            <div class="col-xxl-12 col-xl-12 col-lg-12 ratio_50">
              <div
                class="blog-detail-image rounded-3 mb-4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {videoUrl ? (
                  <ReactPlayer
                    volume={1}
                    url={"http://103.104.74.215:3012/uploads/" + videoUrl}
                    controls={true}
                    playing={true}
                    width="100%"
                    height="auto"
                  />
                ) : (
                  <p>Loading video...</p>
                )}

                <div class="blog-image-contain">
                  <h2>{details.title}</h2>
                  <ul class="contain-comment-list">
                    <li>
                      <div class="user-list">
                        <i data-feather="calendar"></i>
                        <span>{showTime(details.current_date)}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="blog-detail-contain">
                <p>
                  {/* <span class="first">L</span> */}
                  {details.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div class="container-fluid-lg" style={{ paddingBottom: 20 }}>
          <div class="row">
            <div class="col-12">
              <div class="banner-contain hover-effect" style={{}}>
                <img
                  style={{ width: "100%", boxShadow: "0px 0px 10px" }}
                  src="../assets/images/cake/banner/4.jpg"
                  class="bg-img blur-up lazyload"
                  alt=""
                />
                <div
                  class="banner-details p-center p-sm-4 p-3 text-white text-center"
                  style={{ height: 90 }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}

export default PujaListDetail;
