import React from "react";
// import { baseUrl } from "./baseUrl";
import Footer from "./Footer";
import Header1 from "./Header1";
import Home_banner from "./Home_banner";
import Live from "./Live";
import Home_banner_second from "./Home_banner_second";
import OnlineAustrology from "./OnlineAustrology";
import Horoscopes from "./Horoscopes";
import Panchang from "./Panchang";
import NakshatraMart from "./NakshatraMart";
import NakshatraPooja from "./NakshatraPooja";
import LatestBlog from "./LastestBlog";
import Reviews from "./Reviews";
import Setting from "./Setting";
import Astrology from "./Astrology";
import New from "./New";

function Home() {
  return (
    <div> 
      <Header1 />
      <Home_banner />
      <Live />
      <Home_banner_second />
      <OnlineAustrology />
      <Horoscopes />
      <Panchang />
      <NakshatraMart />
      <NakshatraPooja />
      <LatestBlog />
      <Reviews />
      <Astrology />
      <New />
      <Footer />
      <Setting />
    </div>
  );
}

export default Home;
