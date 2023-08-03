import React from "react";
import Header1 from "./Header1";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Footer from "./Footer";
import Live from "./Live";

function Panchangg() {
  const [responseData, setResponseData] = useState(null);
  const dataaa=localStorage.getItem("userData")
  const dataa= JSON.parse(dataaa)
    const [data2 , setData2]=useState(dataa);

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
     useEffect(() => {
       const api = 'advanced_panchang';
       const userId = '623869'; 
       const apiKey = '46046d17a932151518470e3a08a1665a';
   
  const data = {
         day: day,
         month:month,
         year: year,
         hour: 10,
         min: 25,
         lat: 19.132,
         lon: 72.342,
         tzone: 5.5,
       };


  // useEffect(() => {
  //   const api = "advanced_panchang";
  //   const userId = "623869";
  //   const apiKey = "46046d17a932151518470e3a08a1665a";

  //   const data = {
  //     day: data2?.day,
  //       month: data2?.month,
  //       year: data2?.year,
  //       hour: data2?.hour,
  //       min: data2?.min,
  //       lat: 19.132,
  //       lon: 72.342,
  //       tzone: 5.5,
  //   };

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
    <>
      <Header1 />
      {/* <!-- Breadcrumb Section Start --> */}
      <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain">
                <h2>Panchang</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Fresh Vegetable Section Start --> */}
      <section className="fresh-vegetable-section section-lg-space">
        <div className="container-fluid-lg">
          <div className="title" style={{ padding: "5px" }}>
            <div className="row">
              <div className="col-lg-3">
                <img
                  className="img2 img-fluid"
                  src="../assets/images/blog/pp.jpg"
                  alt="aries"
                  width="230"
                  height="300"
                />

                
              </div>
              <div className="col-lg-9">
                <h2>Today Panchang</h2>
                
                <p>{responseData?.tithi.details.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Fresh Vegetable Section End --> */}

      {/* <!-- Client Section Start --> */}
      <section className="client-section section-lg-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="col-lg-8">
                
              {/* <img style={{width:'800px' , height:'100px'}} src="../assets/images/blog/pp.jpg" class="img-fluid " alt=""></img><h2> Sat,22 July 2023</h2>

<br/>

<br/> */}
                           <table class="table table-bordered">
                                {/* <tr style={{ background: '#fff3db' }}>
                                    <td style={{ fontSize: '14px' }}><img style={{ width: '600px', height: '90px' }} src="../assets/images/blog/pp.jpg" class="img-fluid " alt=""></img></td>

                                    <td></td>
                                </tr> */}


<tr >
                                    <td><b>Date</b></td>
                                    <td>{responseData?.day} - {month} - {year}</td>
                                </tr>
                                <tr >
                                    <td><b>Tithi</b></td>
                                    <td>{responseData?.tithi.details.tithi_name}</td>
                                </tr>
                                <tr>
                                <td><b>Nakshatra</b></td>
                                <td>{responseData?.nakshatra.details.nak_name}</td>
                                </tr>
                                <tr>
                                <td><b>Karana</b></td>
                                <td>{responseData?.karan.details.karan_name}</td>
                                </tr>
                                <tr>
                                <td><b>Paksha</b></td>
                                <td>{responseData?.paksha}</td>
                                </tr>

                                <tr>
                                <td><b>Yoga</b></td>

                                <td>
                                  {responseData?.yog.details.yog_name} till{" "}
                                  {responseData?.yog.end_time.hour} :{" "}
                                  {responseData?.yog.end_time.minute} :{" "}
                                  {responseData?.yog.end_time.second}{" "}
                                </td>
                                </tr>

                                <tr>
                                <td><b>Day</b></td>
                                <td>{responseData?.day}</td>
                                </tr>

                                <tr >
                                <td><b>Sunrise</b></td>
                                <td>{responseData?.sunrise}</td>
                                </tr>

                                <tr>
                                    <td><b>Sun Set</b></td>
                                    <td>18:17:1</td>
                                </tr>

                                <tr>
                                <td><b>Moonset</b></td>
                                <td>{responseData?.moonset}</td>
                                </tr>

                                <tr>
                                <td><b>moonrise</b></td>
                                <td>{responseData?.moonrise}</td>
                                </tr>

                                <tr>
                                    <td><b>Ritu</b></td>
                                    <td>Hemant</td>
                                </tr>

                                <tr style={{ background: "#dcdcdc" }}>
                                <td><b>Hindu Month & Year</b></td>
                                </tr>

                                <tr>
                                <td><b>Shaka Samvat</b></td>
                                <td>{responseData?.shaka_samvat}</td>
                                </tr>

                                <tr>
                                <td><b>Vikram Samvat</b></td>
                                <td>{responseData?.vikram_samvat}</td>
                                </tr>

                                <tr>
                                <td><b>Manth Amanta</b></td>
                                <td>{responseData?.hindu_maah.amanta}</td>
                                </tr>

                                <tr>
                                <td><b>Manth Padwaurnimanta</b></td>
                                <td>{responseData?.hindu_maah.purnimanta}</td>
                                </tr>

                                <tr style={{ background: "#dcdcdc" }} >
                                <td><b>Inauspicious Timings (Ashubha Muhurat)</b></td>
                                </tr>

                                <tr>
                                    <td style={{ fontSize: '16px' }}><b>Rahu Kal</b></td>
                                    <td>
                                    {responseData?.rahukaal.start} to{" "}
                                    {responseData?.rahukaal.end}
                                  </td>
                                </tr>

                                <tr >
                                    <td style={{ fontSize: '16px' }}><b>GuliKaal </b></td>

                                    <td>
                                    {responseData?.guliKaal.start} to{" "}
                                    {responseData?.guliKaal.end}
                                  </td>
                                </tr>

                                <tr>
                                    <td style={{ fontSize: '16px' }}><b>Yamghant_kaal </b></td>
                                    <td>
                                    {responseData?.yamghant_kaal.start} to{" "}
                                    {responseData?.yamghant_kaal.end}
                                  </td>
                                </tr>

                                <tr style={{ background: "#dcdcdc" }}>
                                <td style={{fontSize:'16px' }}><b>Auspicious Timings (Shubha Muhurat)</b></td>
                                </tr>

                                <tr>
                                    <td style={{ fontSize: '16px' }}><b>Abhijit</b></td>
                                    <td>
                                    {responseData?.abhijit_muhurta.start} to{" "}
                                    {responseData?.abhijit_muhurta.end}
                                  </td>
                                </tr>
                            </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/>
      <Live/>
     <br/>
      <Footer />
    </>
  );
}

export default Panchangg;
