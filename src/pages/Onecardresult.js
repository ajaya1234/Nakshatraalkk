
import React from "react";
import Header1 from "./Header1";
import Live from "./Live";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function Onecardresult() {
     
    const [responseData, setResponseData] = useState(null);
  const data = localStorage.getItem("nameofonetarot");
  const parse = JSON.parse(data);
  const [details, setDetails] = useState(parse);

  useEffect(() => {
    const api = "yes_no_tarot";
    const userId = "623869";
    const apiKey = "46046d17a932151518470e3a08a1665a";
const tarotiid=localStorage.getItem("tarotid")

    const data = {
    tarot_id: tarotiid,
      
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
        console.log("asdresponseeessad", response.data);
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
                                <div class="col-xxl-4 col-sm-6">
                                    <div
                                        class="blog-box wow fadeInUp"
                                        data-wow-delay="0.05s"
                                        style={{ height: "332px" }}
                                    >
                                        <div class="blog-image" style={{}}>
                                            <a href="#">
                                                <img
                                                    width={"100%"}
                                                    src="../assets/images/inner-page/tarot2.jpeg"
                                                    class="bg-img"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                

                                <div
                                    class="col-xxl-4 col-sm-6"
                                    style={{
                                        border: "0px solid var(--theme-color)",
height:'100px'
                                    }}
                                >
                                  <div>
                                    <h2>ONE CARD TAROT READING RESULT</h2>
                                </div>
                                <br/>
                                <div>
                                    
                                    <p style={{textAlign:'justify', fontSize:'18px'}}> {responseData?.name} The card is upright</p>
                                    <p style={{textAlign:'justify', fontSize:'18px'}}>Hi {details?.name} </p>
                                    <p style={{textAlign:'justify', fontSize:'17px'}}>
                                    {responseData?.description}
                                    </p>
                                </div> 
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <Live />
            <br />
            <Footer />
        </div>
    );
}

export default Onecardresult;
