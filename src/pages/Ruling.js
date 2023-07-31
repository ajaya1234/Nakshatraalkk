import React from "react";
import Header1 from "./Header1";
import Live from "./Live";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Ruling() {
  const [responseData, setResponseData] = useState(null);
  const data = localStorage.getItem("nameofonetarot");
  const parse = JSON.parse(data);
  const [details, setDetails] = useState(parse);

  useEffect(() => {
    const api = "numero_prediction/daily";
    const userId = "623869";
    const apiKey = "46046d17a932151518470e3a08a1665a";
    const tarotiid = localStorage.getItem("tarotid");

    const data = {
      day: details?.day,
      month: details?.month,
      year: details?.year,
    };

    const auth = "Basic " + btoa(userId + ":" + apiKey);

    axios
      .post(`https://json.astrologyapi.com/v1/${api}`, data, {
        headers: {
          authorization: auth,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResponseData(response.data);
        console.log("preididcationasdresponseeessad", response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <Header1 />

      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row g-4">
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-2">
              <div class="row g-4 ratio_65">
                <div class="col-xxl-4 col-sm-12">
                <div>
                  <h1
                    style={{
                      color: "#20c997",
                      fontSize: "32px",
                      fontWeight: "700",
                    }}
                    className="text-center font_yellow text-uppercase"
                  >
                     Ruling Number  {responseData?.lucky_number}
                  </h1>
                </div>
                  <div
                    class="blog-box wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{ height: "100%" }}
                  >
                    <div class="blog-image" style={{}}>
                      <a href="#">
                        <img
                          width={"100%"}
                          src="../assets/images/inner-page/numerology1.jpg"
                          class="bg-img"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="col-xxl-4 col-sm-12"
                  style={{
                    border: "0px solid var(--theme-color)",
                    height: "100px",
                  }}
                >
                  <div>
                    <h2> Ruling Number {responseData?.lucky_number}</h2>
                    <br />

                    <h2> Ruling Color - {responseData?.lucky_color}</h2>
                  </div>
                  <br />
                  <div>
                    <p style={{ textAlign: "center", fontSize: "17px" }}>
                      {responseData?.prediction}
                    </p>
                    
                  </div>
                  
                </div>



                {/* <div
                  class="col-xxl-4 col-sm-6"
                  style={{
                    border: "0px solid var(--theme-color)",
                    height: "100px",
                  }}
                >
                
                  
                  <div>
                  <img
                          width={"100%"} height={'180px'}
                          src="../assets/images/inner-page/numerology.jpg"
                          class="bg-img"
                          alt=""
                        />


                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <br />
                    <br />
                    <br />
                    <br /><br />
                    <br />
      <Live />
      <br />
      <Footer />
    </div>
  );
}

export default Ruling;
