import Live from "./Live";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header1 from "./Header1";
import Footer from "./Footer";

function Selfkundali() {
  const [responseData, setResponseData] = useState({});
  const [responseData1, setResponseData1] = useState({});
  const [responseData2, setResponseData2] = useState(null);

  const storedResponseData = localStorage.getItem("responseData");

  const parsedResponseData = JSON.parse(storedResponseData);

  const datagot = localStorage.getItem("responseDatadata");
  const parsedgotData = JSON.parse(datagot);

  console.log("sadas", datagot);

  useEffect(() => {
    const api = "advanced_panchang";
    const userId = "623869";
    const apiKey = "46046d17a932151518470e3a08a1665a";

    const data = {
      day: parsedResponseData.day,
      month: parsedResponseData.month,
      year: parsedResponseData.year,
      hour: parsedResponseData.hour,
      min: parsedResponseData.minute,
      lat: 19.132,
      lon: 72.342,
      tzone: 5.5,
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
        setResponseData2(response.data);
        console.log("asadasdsdresponseeessad", response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const api = "birth_details";
    const userId = "623869";
    const apiKey = "46046d17a932151518470e3a08a1665a";

    const data = {
      day: parsedResponseData.day,
      month: parsedResponseData.month,
      year: parsedResponseData.year,
      hour: parsedResponseData.hour,
      min: parsedResponseData.minute,
      lat: 19.132,
      lon: 72.342,
      tzone: 5.5,
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
        //console.log("asdresponseeessad", response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const api = "astro_details";
    const userId = "623869";
    const apiKey = "46046d17a932151518470e3a08a1665a";

    const data = {
      day: parsedResponseData.day,
      month: parsedResponseData.month,
      year: parsedResponseData.year,
      hour: parsedResponseData.hour,
      min: parsedResponseData.minute,
      lat: 19.132,
      lon: 72.342,
      tzone: 5.5,
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
        setResponseData1(response.data);
        //console.log("asdresponseeessad", response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Header1 />

      <section class="seller-grid-section">
        <div class="container-fluid-lg">
          <h2>Basic Details</h2>
          <br />

          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="seller-grid-box">
                <div class="grid-contain">
                  <div class="col-lg-12">
                    {/* <div class="title d-xxl-none d-block">
                      <h2>Male</h2>
                    </div> */}
                    <div class="right-sidebar-box">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Name</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="name-alignjs">
                                  {parsedResponseData?.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Date</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">
                                  {parsedResponseData?.day}/
                                  {parsedResponseData?.month}/
                                  {parsedResponseData?.year}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Time</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">
                                  {parsedResponseData?.hour}:
                                  {parsedResponseData?.minute} PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Place</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{parsedgotData?.birthplace}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="custom-form">
                            <label
                              for="exampleFormControlInput"
                              class="form-label"
                            >
                              <h2>Latitude</h2>
                            </label>
                            <div class="custom-input">
                              <p class="">{responseData?.latitude} </p>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Longitude</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData?.longitude}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Timezone</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class=""> GMT+{responseData?.timezone}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xxl-6 col-lg-12 col-sm-6">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput"
                              class="form-label"
                            >
                              <h2>Sunrise</h2>
                            </label>
                            <div class="custom-input">
                              <p class="">{responseData?.sunrise}</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Sunset</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData?.sunset}</p>
                              </div>
                            </div>
                          </div>

                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Ayanamsha</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData?.ayanamsha}</p>
                              </div>
                            </div>
                          </div>

                          <hr />
                          <hr />

                          <div class="mb-md-4 mb-3 custom-form" >
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Panchang Details</h2>
                            </label>
                          </div>

                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Tithi</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">
                                  {responseData2?.tithi.details.tithi_name}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Karan</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">
                                  {responseData2?.karan.details.karan_name}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Yog</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">
                                  {responseData2?.yog.details.yog_name}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Nakshatra</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">
                                  {responseData2?.nakshatra.details.nak_name}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="seller-grid-box">
                <div class="grid-contain">
                  <div class="col-lg-12">
                    <div class="title d-xxl-none d-block">
                      <h2>Avakhada Details</h2>
                    </div>
                    <div class="right-sidebar-box">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Varna</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="name-alignjs">
                                  {responseData1?.Varna}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Vashya</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData1?.Vashya}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Yoni</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData1?.Yoni} PM</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Gan</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData1?.Gan}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="custom-form">
                            <label
                              for="exampleFormControlInput"
                              class="form-label"
                            >
                              <h2>Nadi</h2>
                            </label>
                            <div class="custom-input">
                              <p class="">{responseData1?.Nadi} </p>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Sign</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData1?.sign}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Sign Lord</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class=""> GMT+{responseData1?.SignLord}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-xxl-6 col-lg-12 col-sm-6">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput"
                              class="form-label"
                            >
                              <h2>Nakshatra-Charan </h2>
                            </label>
                            <div class="custom-input">
                              <p class="">{responseData1?.Naksahtra}</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Yog</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData1?.Yog}</p>
                              </div>
                            </div>
                          </div>

                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Karan</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData1?.Karan}</p>
                              </div>
                            </div>
                          </div>

                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Tithi</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData1?.Tithi}</p>
                              </div>
                            </div>
                          </div>

                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Yunja</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData1?.yunja}</p>
                              </div>
                            </div>
                          </div>

                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Tatva</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData1?.tatva}</p>
                              </div>
                            </div>
                          </div>

                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Name alphabet </h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData1?.name_alphabet}</p>
                              </div>
                            </div>
                          </div>

                          <div class="mb-md-4 mb-3 custom-form">
                            <label
                              for="exampleFormControlInput2"
                              class="form-label"
                            >
                              <h2>Paya</h2>
                            </label>
                            <div class="custom-input">
                              <div style={{ width: "100%" }}>
                                <p class="">{responseData1?.tatva}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Selfkundali;
