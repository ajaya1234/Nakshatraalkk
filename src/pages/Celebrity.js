import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Header1 from "./InHeader";
import Footer from "./Footer";
import Header1 from "./Header1";
import Live from "./Live";
const Celebrity = () => {
  useEffect(() => {
    getData();
  }, []);

  const [celebrity, setCelebrity] = useState([]);
  console.log("sadasdaaararararararararararararar",celebrity)
  const getData = () => {
    axios.get("http://103.104.74.215:3012/api/user/celebrity_list").then((res) => {
      
      setCelebrity(res.data.data);

      
    });
  };
  
  return (
    <>
      <Header1 />
      

      {/* <!-- Breadcrumb Section Start --> */}
      <section className="blog-section">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Celebrity Blog </h2>

            
          </div>

          <div
            className="slider-5 arrow-slider"
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {celebrity.map((i) => {
              return (
                <div style={{ width: "20%", marginLeft: 10 }}>
                  <div
                    className="blog-box "
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div className="blog-box-image">
                      <Link 
                      
                      onClick={() =>{
                        
                        localStorage.setItem("pujaDet", JSON.stringify(i))
                        }}
                        to="/Celebritylist"
                      >
                       
                       {/* <img
                          src={
                            "http://103.104.74.215:3012/uploads/1686290461558.mp4"
                          }
                          className="img-fluid bg-img"
                          alt=""
                        /> */}

<ReactPlayer
                          url={"http://103.104.74.215:3012/uploads/"+ i.video}
                          
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="blog-detail">
                      
                      
                      <div className="blog-list">
                        <span>{i?.current_date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      



    </>
  );
};

export default Celebrity;
