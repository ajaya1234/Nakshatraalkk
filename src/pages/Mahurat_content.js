
// import React from 'react'
// import Live from './Live'
// import { useState } from 'react';
// import axios from 'axios';
// import { useEffect } from 'react';

// const Mahurat_content = () => {
//     const [weatherData, setWeatherData] = useState({});

//     useEffect(() => {
      
//       const apiUrl = 'https://json.astrologyapi.com/v1/advanced_panchang';
//       const apiKey = 'ByVOIaODH57QRVi6CqswHXGlcpDvj7tZBRoorY'; 
//       const userId = '4545'; 
  
//       var data = {
//         day: 6,
//         month: 1,
//         year: 2000,
//         hour: 7,
//         min: 45,
//         lat: 19.132,
//         lon: 72.342,
//         tzone: 5.5,
//       };
//       axios.post(apiUrl, {
//         params: {
//           key: apiKey,
//           userId: userId,
//         },
//       })
//       .then((response) => {
        
//         setWeatherData(response.data);
//       })
//       .catch((error) => {
        
//         console.error('Error fetching weather data:', error);
//       });
//     }, []);


import Live from './Live'
    import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Mahurat_Content = () => {
    const [responseData, setResponseData] = useState(null);
  console.log("sadasd",responseData)
    useEffect(() => {
      const api = 'advanced_panchang';
      const userId = '623869'; 
      const apiKey = '46046d17a932151518470e3a08a1665a';
  
      const data = {
        day: 6,
        month: 1,
        year: 2000,
        hour: 7,
        min: 45,
        lat: 19.132,
        lon: 72.342,
        tzone: 5.5,
      };
  
      const auth = "Basic " + btoa(userId + ":" + apiKey);
  
      axios.post(`https://json.astrologyapi.com/v1/${api}`, data, {
        headers: {
          "authorization": auth,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResponseData(response.data); 
        console.log("asdresponseeessad",response.data)
      })

      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }, []);



  return (
    <>
   {/* <p>asdasdasdasdasd{responseData?.tithi.details.summary}</p> */}
{/* {responseData && (
        <div>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )} */}
    <section class="home-section pt-2">
        <div class="container-fluid-lg" style={{background: "linear-gradient(to bottom, #00cc00 0%, #ff99cc 100%)"}}>
         
        <img align ="right" src="../assets/images/logo/hs.png" width="100%"/ >
 

                
         
        </div>
    </section>



    <section>
        <div class="container-fluid-lg">
            <div class="title" style={{padding: "20px"}}>
                <h2 style={{textAlign: "center"}}>Shubh Muhurat 2023</h2>
                
                <p>It is highly important to perform any auspicious work during Shubh Muhurta. Hindus regard certain dates to be auspicious for starting any worthwhile endeavours. When undertaking an optimistic task during Shubh Muhurta, good outcomes are usually obtained. As a result, the custom of determining the auspicious moment and beginning fresh work has existed for millennia. Shubh Muhurta, according to Vedic astrology, is the exact moment when the solar system's location of the planets and onstellations is favourable for carrying out a certain activity. People, therefore, have the view that keeping this fortunate hour assists to obtain more beneficial and effective achievements without encountering any obstacles or issues.</p>
                <p>The importance of Shubh Muhurta (auspicious muhurat) is vast, following Sanatan Dharma. It claims that if labour begins at a fortunate moment, the individual can greatly profit from it. Additionally, completing a task at a fortunate moment enhances our achievement moving forward in life. Hence, the majority of Hindus still wait for an auspicious moment to act, even in today's generation.</p>
                
            </div>
          
        </div>
    </section>
   
    <section>
        <div class="container-fluid-lg">
             <div class="title" style={{padding:"5px"}}>
                <h2>Importance Of Shubh Muhurta 2023</h2>
     
                <p>Why is picking an opportune moment to begin any new task seen so important? Everybody wants to succeed in their endeavours, whether it be a profession, starting a business, getting married, or house events like naming ceremonies or annaprashan. As a result, the individual gave the assurance that doing the aforementioned activity at the fortunate moment would bring them success and riches. Therefore, we preferred to complete any tasks during Shubh Muhurta, which was determined based on the positions of the planets and constellations. Consequently, choosing an auspicious period is important. Since the beginning of time, people have observed fortunate periods. It holds that starting a project at a fortunate moment increases the likelihood of success and ensures that it will be completed smoothly and without incident. A "Shubh Muhurat" is a moment when it is considered auspicious to begin any endeavour when all of the planets and nakshatras are in favourable positions.</p>
                <p>To Chat With Astrologer: <a href="shop-top-filter1.html" target="_blank">Visit Here</a></p>
            </div>
            <div class="title" style={{padding:"5px"}}>
                <h2>Different Muhurat and its Characteristics</h2>
                
                <p>Hinduism has so far evaluated 30 Muhurtas for determining the auspicious hour. The first Muhurta, known as Rudra Muhurta, begins at six in the morning and is classified as an unlucky Muhurta. The second Muhurta then begins 48 minutes after the first Muhurta. Ahi Muhurta is the name of this muhurta, which belongs to the pessimistic muhurta genre. You may learn more about each lucky Muhurta and its features here. Additionally, you should be aware that this Muhurta takes a break for 48–48 minutes.</p>
   
   
   
                <div class="col-12 col-md-6 table-responsive">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                    <th>Muhurat</th>
                    <th>Auspicious or Inauspicious</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Rudra</td>
                    <td>Inauspicious</td>
                    </tr>
                    <tr>
                    <td>Asahi</td>
                    <td>Inauspicious</td>
                    </tr>
                    <tr>
                    <td>Mitra</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Pitra</td>
                    <td>Inauspicious</td>
                    </tr>
                    <tr>
                    <td>Vasu</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Varaaha</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Vishwadeva</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Vidhi</td>
                    <td>Auspicious (except on Mondays and Fridays)</td>
                    </tr>
                    <tr>
                    <td>Saptamukhi</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Puruhut</td>
                    <td>Inauspicious</td>
                    </tr>
                    <tr>
                    <td>Wahini</td>
                    <td>Inauspicious</td>
                    </tr>
                    <tr>
                    <td>Naktankara</td>
                    <td>Inauspicious</td>
                    </tr>
                    <tr>
                    <td>Varun</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Ayarma</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Bhag</td>
                    <td>Inauspicious</td>
                    </tr>
                    <tr>
                    <td>Girish</td>
                    <td>Inauspicious</td>
                    </tr>
                    <tr>
                    <td>Ajpaad</td>
                    <td>Inauspicious</td>
                    </tr>
                    <tr>
                    <td>Ahir-Budhiya</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Pushya</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Ashwini</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Yam</td>
                    <td>Inauspicious</td>
                    </tr>
                    <tr>
                    <td>Agni</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Vidharth</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Kand</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Aditi</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Jeev/ Amrit</td>
                    <td>Pretty auspicious</td>
                    </tr>
                    <tr>
                    <td>Vishnu</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Dyutiman</td>
                    <td>Auspicious</td>
                    </tr>
                    <tr>
                    <td>Brahma</td>
                    <td>Pretty auspicious</td>
                    </tr>
                    <tr>
                    <td>Samudram</td>
                    <td>Auspicious</td>
                    </tr>
                    </tbody>
             </table>
                    </div>
              
         
            <div class="title" style={{padding:"5px"}}>
                <h2>Panchang Tithi</h2>

                <p>{responseData?.tithi.details.tithi_name} - {responseData?.tithi.details.special} - {responseData?.tithi.details.summary}.</p>
            </div>
            <div class="title" style={{padding:"5px"}}>
                <h2>Shubh Muhurt 2023 must-know factors</h2>
               
                <p>As we mentioned earlier, some factors should be considered while calculating auspicious times, i.e., Tithi, Vaar, Nakshatra, Yoga, and Karana. Let's understand some crucial aspects related to them.</p>
                <p>To speak to an Astrologer: <a href="shop-top-filter1.html" target="_blank">Visit here</a></p>
            </div>



            <div class="title" style={{padding:"5px"}}>
                <h2>Name of pakshas</h2>
               <p><b>{responseData?.paksha} -</b>{responseData?.ritu} .</p>
               {/* <p><b>Shukla-Paksha Tithis -</b> Pratipada, Dwitiya, Tritiya, Chaturthi, Panchmi, Shashti, Saptami, Ashtami, Navmi, Dashmi, Ekadashi, Dwadashi, Trayodashi, Chaturdashi, Poornima</p> */}
                
            </div>
            <div class="title" style={{padding:"5px"}}>
                <h2>Day or Var</h2>
               
                <p>There are seven Vars each week according to the Hindu calendar: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday. Every planet in astrology has its features, therefore every day supports a few things. Muslims, for instance, see Friday as one of the most fortunate days. Similar to how some days are regarded as lucky for marriage and others for shaving your head, etc. According to astrology, the best days are Tuesday, Sunday, and Thursday.</p>
            </div>
            <div class="title" style={{padding:"5px"}}>
                <h2>Nakshatra</h2>
               
                <p>{responseData?.nakshatra.details.nak_name} - {responseData?.nakshatra.details.special} - {responseData?.nakshatra.details.summary}.</p>
            </div>
            <div class="title" style={{padding:"5px"}}>
                <h2>27 Nakshatras:</h2>
               
                <p>According to astrology, Ashwani, Bharani, Kritika, Rohini, Mrigashira, Ardra, Punarvasu, Pushya, Ashlesha, Magha, Poorvaphalguni, Uttaraphalguni, Hasta, Chitra, Swati, Visakha, Anuradha, Jyeshtha, Mool, Purvashadha, Uttarashada, Shravan, Dhanishta, Shatabhisha, Uttara Purva Bhadrapada Bhadrapada and Revathi are the constellations.</p>
            </div>


             


            <div class="title" style={{padding:"5px"}}>
                <h2>Nakshatra's Ruling Lord</h2>
               <ul>
                    <li><b>Ketu -</b> Ashwani, Magha, And Mool</li><br/><br/>
                    <li><b>Venus -</b> Bharani, Poorva Phalguni, and Poorvashadha.</li><br/><br/>
                    <li><b>Sun -</b> Kritika, Uttaraphalguni, and Uttarashada.</li><br/><br/>
                    <li><b>Moon -</b> Rohini, Hasta, and Shravan.</li><br/><br/>
                    <li><b>Mars -</b> Mrigashira, Chitra, and Dhanishta's lord.</li><br/><br/>
                    <li><b>Rahu -</b> Ardra, Swati, and Satabhisha.</li><br/><br/>
                    <li><b>Jupiter -</b> Punarvasu, Visakha, and Poorvabhadrapada.</li><br/><br/>
                    <li><b>Saturn -</b>  Pushya, Anuradha, and Uttarabhadrapada.</li><br/><br/>
                    <li><b>Mercury -</b> Ashlesha, Jyestha, and Revati.</li>
                    </ul>
            </div>
            <div class="title" style={{padding:"5px"}}>
                <h2>Yoga</h2>
               
                <p>{responseData?.yog.details.special} {responseData?.yog.details.meaning}.</p>
            </div>
            <div class="title" style={{padding:"5px"}}>
                <h2>Yoga's name as per astrology</h2>
                  <p><b>Shubh yoga in astrology -</b>{responseData?.yog.details.yog_name}.</p>
                  <p><b>Ashubha yoga in astrology -</b>Vishkumbh, Atigund, Shool, Gand, Vyaghat, Vajra, Vytipat, Parigha, and Vaidhriti</p>
              
            </div>
            <div class="title" style={{padding:"5px"}}>
                <h2>Important things to do at Shubh Muhurat 2023</h2>
               
                <p>What steps can you take to get good luck in the year 2023? Sanatan Dharma has an ancient history and an old tradition of working in auspicious times. It believes that starting a project during Shubh Muhurat 2023 will bring success, complete smoothly, and the person will get favourable results from that project for their whole life.</p>
            </div>

 

             <div class="col-12"><p style={{paddingTop:"10px"}}> <b>we will know in detail about Vivah Muhurat 2023, Naamkaran Muhurta 2023, Mundan Muhurat 2023, Shubh Muhurta to buy a car and bike in 2023, and an auspicious time to buy gold in 2023 etc.</b></p>
                <div style={{paddingTop:"10px"}}>
                <h4>Annanprashan Muhurat 2023</h4>
                <p style={{paddingTop:"5px"}}><a href="/annanprashan-muhurat-2023">Click here to get details about all Annanprashan Muhurat 2023</a></p>
             </div>
             <div style={{paddingTop:"10px"}}>
                <h4>NaamKaran Muhurat 2023</h4>
                <p style={{paddingTop:"5px"}}><a href="/naamKaran-muhurat-2023">Click here to get details about all NaamKaran Muhurat 2023</a></p>
             </div>
             <div style={{paddingTop:"10px"}}>
                <h4>Mudan Muhurat 2023</h4>
                <p style={{paddingTop:"5px"}}><a href="/mudan-muhurat-2023">Click here to get details about all Mudan Muhurat 2023</a></p>
             </div>
              <div style={{paddingTop:"10px"}}>
                <h4>Car/Bike Muhurat 2023</h4>
                <p style={{paddingTop:"5px"}}><a href="/car-bike-muhurat-2023">Click here to get details about all Car/Bike Muhurat 2023</a></p>
             </div>
             <div style={{paddingTop:"10px"}}>
                <h4>Marriage Muhurat 2023</h4>
                <p style={{paddingTop:"5px"}}><a href="/marriage-muhurat-2023">Click here to get details about all Marriage Muhurat 2023</a></p>
             </div>
             <div style={{paddingTop:"10px"}}>
                <h4>Gold Buying Muhurat 2023</h4>
                <p style={{paddingTop:"5px"}}><a href="/gold-buying-muhurat-2023">Click here to get details about all Gold Buying Muhurat 2023</a></p>
             </div>
             <div style={{paddingTop:"10px"}}>
                <h4>Bhoomi Pujan Muhurat 2023</h4>
                <p style={{paddingTop:"5px"}}><a href="/bhoomi-pujan-muhurat-2023">Click here to get details about all Bhoomi Pujan Muhurat 2023</a></p>
             </div>
             <div style={{paddingTop:"10px"}}>
                <h4>Griha Pravesh Muhurat 2023</h4>
                <p style={{paddingTop:"5px"}}><a href="/griha-pravesh-muhurat-2023">Click here to get details about all Griha Pravesh Muhurat 2023</a></p>
             </div>
                        
                </div>


     

            <div _ngcontent-serverapp-c87="" class="faq_about_aries_horoscope"><div _ngcontent-serverapp-c87="" class="container"><h2 _ngcontent-serverapp-c87="" class="heading_seo_content_headline_chinese_horoscope" style={{textAlign: "center"}}>FAQs</h2>
                <div _ngcontent-serverapp-c87="" class="" style={{paddingTop:"10px"}}>
                <p><strong>What is the meaning of Abhijit Muhurat?</strong></p>

                    <p>According to astrology, Abhijit Muhurta is the eighth and the most auspicious time out of all the fifteen Muhurtas from sunrise to sunset. This Muhurta is considered self-made and situated at the root of space.</p>

                    
                    <p><strong>Why is work done according to the auspicious time?</strong></p>

                    <p>Work done at an auspicious time helps to get optimal results and also end several pre existing problems. Additionally, the work done at an auspicious time leads the person towards success.</p>

                    <p><strong>What is the meaning of Brahma Muhurta?</strong></p>

                    <p>Brahma Muhurta is a period that begins 1 hour 36 minutes before sunrise and ends after 48 minutes.</p>

                   
                    </div> 
                   
                </div>
            
                </div> 
            </div>                
   </div>
   </section>
               
        
    {/* <!-- Offer Section Start -->  */}
      <Live/>
    {/* <!-- Offer Section End --> */}
    </>
  );
};

export default Mahurat_Content;











