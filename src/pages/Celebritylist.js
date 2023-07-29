import React, { useState } from "react";

import Footer from "./Footer";
import ReactPlayer from "react-player";
import Header1 from "./Header1";
import Celebrity from "./Celebrity";
function Celebritylist() {
  const data = localStorage.getItem("pujaDet");

  console.log("sadasdvideodataa",data)
  const parse = JSON.parse(data);
  const [details, setDetails] = useState(parse);
  const [videoUrl, setVideoUrl] = useState(details);

  

  return (
    <div>
      <Header1 />
      <section class="breadscrumb-section pt-0">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-12">
              <div class="breadscrumb-contain">
                <div></div>
                <h2>Celebrity Video</h2>
               
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
                    url={"http://103.104.74.215:3012/uploads/" + parse?.video}
                    controls={true}
                    playing={true}
                    width="100%"
                    height="auto"
                  />
                ) : (
                  <p>Loading video...</p>
                )}

                
              </div>

             
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Celebritylist;
