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
  const [responseData3, setResponseData3] = useState({});
  const [responseData4, setResponseData4] = useState({});
  const [responseData5, setResponseData5] = useState({});
  const [responseData6, setResponseData6] = useState({});

  const storedResponseData = localStorage.getItem("responseData");

  const parsedResponseData = JSON.parse(storedResponseData);

  const datagot = localStorage.getItem("responseDatadata");
  const parsedgotData = JSON.parse(datagot);

  useEffect(() => {
    const api = "ayanamsha";
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
        setResponseData5(response.data);
        console.log("asadasdsdresponseeessad", response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const api = "ghat_chakra";
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
        setResponseData6(response.data);
        console.log("asadasdsdresponseeessad", response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const api = "major_vdasha";
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
        setResponseData4(response.data);
        console.log("asadasdsdresponseeessad", response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const api = "planets";
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
        setResponseData3(response.data);
        console.log("asadasdsdresponseeessad", response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
                    <div class="title d-xxl-none d-block">
                      <h2>Basic Details</h2>

                      <table class="table table-bordered">
                        <tr style={{ background: "" }}>
                          <td>
                            <b>Name</b>
                          </td>
                          <td>
                            <b>{parsedResponseData?.name}</b>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>Date</b>
                          </td>
                          <td>
                            <b>
                              {parsedResponseData?.day}/
                              {parsedResponseData?.month}/
                              {parsedResponseData?.year}
                            </b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Time</b>
                          </td>
                          <td>
                            <b>
                              {parsedResponseData?.hour}:
                              {parsedResponseData?.minute}
                            </b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Place</b>
                          </td>
                          <td>
                            <b>{parsedgotData?.birthplace}</b>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>Latitude</b>
                          </td>
                          <td>
                            <b>{responseData?.latitude}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Longitude</b>
                          </td>
                          <td>
                            <b>{responseData?.longitude}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Timezone</b>
                          </td>
                          <td>
                            <b>GMT+{responseData?.timezone}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Sunrise</b>
                          </td>
                          <td>
                            <b>{responseData?.sunrise}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Sunset</b>
                          </td>
                          <td>
                            <b>{responseData?.sunset}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Ayanamsha</b>
                          </td>
                          <td>
                            <b>{responseData?.ayanamsha?.toFixed(2)}</b>
                          </td>
                        </tr>
                      </table>
                    </div>

                    <div class="title d-xxl-none d-block">
                      <h2>Panchang Details</h2>

                      <table class="table table-bordered">
                        <tr style={{ background: "" }}>
                          <td>
                            <b>Tithi</b>
                          </td>
                          <td>
                            <b>{responseData2?.tithi.details.tithi_name}</b>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>Karan</b>
                          </td>
                          <td>
                            <b>{responseData2?.karan.details.karan_name}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Yog</b>
                          </td>
                          <td>
                            <b>{responseData2?.yog.details.yog_name}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Nakshatra</b>
                          </td>
                          <td>
                            <b>{responseData2?.nakshatra.details.nak_name}</b>
                          </td>
                        </tr>
                      </table>
                    </div>

                    <div class="title d-xxl-none d-block">
                      <h2>Ayanamsha Details</h2>

                      <table class="table table-bordered">
                        <tr style={{ background: "" }}>
                          <td>
                            <b>Type</b>
                          </td>
                          <td>
                            <b>Degree</b>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>{responseData5[0]?.type}</b>
                          </td>
                          <td>
                            <b>{responseData5[0]?.degree?.toFixed(2)}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>{responseData5[1]?.type}</b>
                          </td>
                          <td>
                            <b>{responseData5[1]?.degree?.toFixed(2)}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>{responseData5[2]?.type}</b>
                          </td>
                          <td>
                            <b>{responseData5[2]?.degree?.toFixed(2)}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>{responseData5[3]?.type}</b>
                          </td>
                          <td>
                            <b>{responseData5[3]?.degree?.toFixed(2)}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>{responseData5[4]?.type}</b>
                          </td>
                          <td>
                            <b>{responseData5[4]?.degree?.toFixed(2)}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>{responseData5[5]?.type}</b>
                          </td>
                          <td>
                            <b>{responseData5[5]?.degree?.toFixed(2)}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>{responseData5[6]?.type}</b>
                          </td>
                          <td>
                            <b>{responseData5[6]?.degree?.toFixed(2)}</b>
                          </td>
                        </tr>
                      </table>
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

                      <table class="table table-bordered">
                        <tr style={{ background: "" }}>
                          <td>
                            <b>Varna</b>
                          </td>
                          <td>
                            <b>{responseData1?.Varna}</b>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>Vashya</b>
                          </td>
                          <td>
                            <b>{responseData1?.Vashya}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Yoni</b>
                          </td>
                          <td>
                            <b>{responseData1?.Yoni}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Gan</b>
                          </td>
                          <td>
                            <b>{responseData1?.Gan}</b>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>Nadi</b>
                          </td>
                          <td>
                            <b>{responseData1?.Nadi}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Sign</b>
                          </td>
                          <td>
                            <b>{responseData1?.sign}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Sign Lord</b>
                          </td>
                          <td>
                            <b>GMT+{responseData1?.SignLord}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Nakshatra-Charan</b>
                          </td>
                          <td>
                            <b>{responseData1?.Naksahtra}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Yog</b>
                          </td>
                          <td>
                            <b>{responseData1?.Yog}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Karan</b>
                          </td>
                          <td>
                            <b>{responseData1?.Karan}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Tithi</b>
                          </td>
                          <td>
                            <b>{responseData1?.Tithi}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Yunja</b>
                          </td>
                          <td>
                            <b>{responseData1?.yunja}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Tatva</b>
                          </td>
                          <td>
                            <b>{responseData1?.tatva}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Name Alphabet</b>
                          </td>
                          <td>
                            <b>{responseData1?.name_alphabet}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Paya</b>
                          </td>
                          <td>
                            <b>{responseData1?.paya}</b>
                          </td>
                        </tr>
                      </table>
                    </div>

                    <div class="title d-xxl-none d-block">
                      <h2>Ghat Chakra Details</h2>

                      <table class="table table-bordered">
                        <tr style={{ background: "" }}>
                          <td>
                            <b>Month</b>
                          </td>
                          <td>
                            <b>{responseData6?.month}</b>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>Tithi</b>
                          </td>
                          <td>
                            <b>{responseData6?.tithi}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Day</b>
                          </td>
                          <td>
                            <b>{responseData6?.day}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Nakshatra</b>
                          </td>
                          <td>
                            <b>{responseData6?.nakshatra}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Yog</b>
                          </td>
                          <td>
                            <b>{responseData6?.yog}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Karan</b>
                          </td>
                          <td>
                            <b>{responseData6?.karan}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Pahar</b>
                          </td>
                          <td>
                            <b>{responseData6?.pahar}</b>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <b>Moon</b>
                          </td>
                          <td>
                            <b>{responseData6?.moon}</b>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-section section-lg-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="col-lg-12">
                <h1>Poistion of Planets</h1>

                <table class="table table-bordered">
                  <tr style={{ background: "#dee2e6" }}>
                    <td>
                      <b>Planets</b>
                    </td>
                    <td>
                      <b>R</b>
                    </td>
                    <td>
                      <b>Sign</b>
                    </td>
                    <td>
                      <b>Sign Lord</b>
                    </td>
                    <td>
                      <b>Degree</b>
                    </td>
                    <td>
                      <b>Nakshatra</b>
                    </td>
                    <td>
                      <b>Nakshatra Lord </b>
                    </td>
                    <td>
                      <b>House </b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>{responseData3[0]?.name}</b>
                    </td>
                    <td>
                      <b>-</b>
                    </td>
                    <td>
                      <b>{responseData3[0]?.sign}</b>
                    </td>
                    <td>
                      <b>{responseData3[0]?.signLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[0]?.normDegree?.toFixed(2)}</b>
                    </td>
                    <td>
                      <b>{responseData3[0]?.nakshatra}</b>
                    </td>
                    <td>
                      <b>{responseData3[0]?.nakshatraLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[0]?.house} </b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData3[1]?.name}</b>
                    </td>
                    <td>
                      <b>-</b>
                    </td>
                    <td>
                      <b>{responseData3[1]?.sign}</b>
                    </td>
                    <td>
                      <b>{responseData3[1]?.signLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[1]?.normDegree?.toFixed(2)}</b>
                    </td>
                    <td>
                      <b>{responseData3[1]?.nakshatra}</b>
                    </td>
                    <td>
                      <b>{responseData3[1]?.nakshatraLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[1]?.house} </b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData3[2]?.name}</b>
                    </td>
                    <td>
                      <b>-</b>
                    </td>
                    <td>
                      <b>{responseData3[2]?.sign}</b>
                    </td>
                    <td>
                      <b>{responseData3[2]?.signLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[2]?.normDegree?.toFixed(2)}</b>
                    </td>
                    <td>
                      <b>{responseData3[2]?.nakshatra}</b>
                    </td>
                    <td>
                      <b>{responseData3[2]?.nakshatraLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[2]?.house} </b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData3[3]?.name}</b>
                    </td>
                    <td>
                      <b>-</b>
                    </td>
                    <td>
                      <b>{responseData3[3]?.sign}</b>
                    </td>
                    <td>
                      <b>{responseData3[3]?.signLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[3]?.normDegree?.toFixed(2)}</b>
                    </td>
                    <td>
                      <b>{responseData3[3]?.nakshatra}</b>
                    </td>
                    <td>
                      <b>{responseData3[3]?.nakshatraLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[3]?.house} </b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData3[4]?.name}</b>
                    </td>
                    <td>
                      <b>-</b>
                    </td>
                    <td>
                      <b>{responseData3[4]?.sign}</b>
                    </td>
                    <td>
                      <b>{responseData3[4]?.signLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[4]?.normDegree?.toFixed(2)}</b>
                    </td>
                    <td>
                      <b>{responseData3[4]?.nakshatra}</b>
                    </td>
                    <td>
                      <b>{responseData3[4]?.nakshatraLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[4]?.house} </b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData3[5]?.name}</b>
                    </td>
                    <td>
                      <b>-</b>
                    </td>
                    <td>
                      <b>{responseData3[5]?.sign}</b>
                    </td>
                    <td>
                      <b>{responseData3[5]?.signLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[5]?.normDegree?.toFixed(2)}</b>
                    </td>
                    <td>
                      <b>{responseData3[5]?.nakshatra}</b>
                    </td>
                    <td>
                      <b>{responseData3[5]?.nakshatraLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[5]?.house} </b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData3[6]?.name}</b>
                    </td>
                    <td>
                      <b>-</b>
                    </td>
                    <td>
                      <b>{responseData3[6]?.sign}</b>
                    </td>
                    <td>
                      <b>{responseData3[6]?.signLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[6]?.normDegree?.toFixed(2)}</b>
                    </td>
                    <td>
                      <b>{responseData3[6]?.nakshatra}</b>
                    </td>
                    <td>
                      <b>{responseData3[6]?.nakshatraLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[6]?.house} </b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData3[7]?.name}</b>
                    </td>
                    <td>
                      <b>-</b>
                    </td>
                    <td>
                      <b>{responseData3[7]?.sign}</b>
                    </td>
                    <td>
                      <b>{responseData3[7]?.signLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[7]?.normDegree?.toFixed(2)}</b>
                    </td>
                    <td>
                      <b>{responseData3[7]?.nakshatra}</b>
                    </td>
                    <td>
                      <b>{responseData3[7]?.nakshatraLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[7]?.house} </b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData3[8]?.name}</b>
                    </td>
                    <td>
                      <b>-</b>
                    </td>
                    <td>
                      <b>{responseData3[8]?.sign}</b>
                    </td>
                    <td>
                      <b>{responseData3[8]?.signLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[8]?.normDegree?.toFixed(2)}</b>
                    </td>
                    <td>
                      <b>{responseData3[8]?.nakshatra}</b>
                    </td>
                    <td>
                      <b>{responseData3[8]?.nakshatraLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[8]?.house} </b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData3[9]?.name}</b>
                    </td>
                    <td>
                      <b>-</b>
                    </td>
                    <td>
                      <b>{responseData3[9]?.sign}</b>
                    </td>
                    <td>
                      <b>{responseData3[9]?.signLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[9]?.normDegree?.toFixed(2)}</b>
                    </td>
                    <td>
                      <b>{responseData3[9]?.nakshatra}</b>
                    </td>
                    <td>
                      <b>{responseData3[9]?.nakshatraLord}</b>
                    </td>
                    <td>
                      <b>{responseData3[9]?.house} </b>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="col-lg-12">
                <h1>Vimshottari Dasha</h1>

                <table class="table table-bordered">
                  <tr style={{ background: "#dee2e6" }}>
                    <td>
                      <b>Planets</b>
                    </td>
                    <td>
                      <b>Start Date</b>
                    </td>
                    <td>
                      <b>End Date</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>{responseData4[0]?.planet}</b>
                    </td>

                    <td>
                      <b>{responseData4[0]?.start}</b>
                    </td>
                    <td>
                      <b>{responseData4[0]?.end}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData4[1]?.planet}</b>
                    </td>

                    <td>
                      <b>{responseData4[1]?.start}</b>
                    </td>
                    <td>
                      <b>{responseData4[1]?.end}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData4[2]?.planet}</b>
                    </td>

                    <td>
                      <b>{responseData4[2]?.start}</b>
                    </td>
                    <td>
                      <b>{responseData4[2]?.end}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData4[3]?.planet}</b>
                    </td>

                    <td>
                      <b>{responseData4[3]?.start}</b>
                    </td>
                    <td>
                      <b>{responseData4[3]?.end}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData4[4]?.planet}</b>
                    </td>

                    <td>
                      <b>{responseData4[4]?.start}</b>
                    </td>
                    <td>
                      <b>{responseData4[4]?.end}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData4[5]?.planet}</b>
                    </td>

                    <td>
                      <b>{responseData4[5]?.start}</b>
                    </td>
                    <td>
                      <b>{responseData4[5]?.end}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData4[6]?.planet}</b>
                    </td>

                    <td>
                      <b>{responseData4[6]?.start}</b>
                    </td>
                    <td>
                      <b>{responseData4[6]?.end}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData4[7]?.planet}</b>
                    </td>

                    <td>
                      <b>{responseData4[7]?.start}</b>
                    </td>
                    <td>
                      <b>{responseData4[7]?.end}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{responseData4[8]?.planet}</b>
                    </td>

                    <td>
                      <b>{responseData4[8]?.start}</b>
                    </td>
                    <td>
                      <b>{responseData4[8]?.end}</b>
                    </td>
                  </tr>
                </table>
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
