import React from "react";
// import Header1 from "./InHeader";
import Footer from "./Footer";
import Header1 from "./Header1";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Home_banner_second from "./Home_banner_second";
import { LocalVideoMute } from "agora-react-uikit";
import Live from './Live';


function BlogDetail() {
 const [ Details , setDetails ] = useState([])
 
  useEffect(() => {
    postRech();
  }, []);
  const postRech = () => {
    const blogid=localStorage.getItem("blogid")
    
    const  item =  {
      _id: blogid,
    };
     axios
      .post("http://103.104.74.215:3012/api/user/blog_list_details", item).then((res)=>setDetails(res.data.data))
      .then((res) => {
      

       
        
       
      });
  };




  return (
    <div>
      <Header1 />
      <section class="breadscrumb-section pt-0">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-12">
              <div class="breadscrumb-contain">
                <h2>Blog Details Page</h2>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row g-sm-4 g-3">
            <div class="col-xxl-12 col-xl-12 col-lg-12 ratio_50">
              <div class="blog-detail-image rounded-3 mb-4">
                <img
                  style={{ width: "100%" }}
                  src={
                    "http://103.104.74.215:3012/uploads/" +
                    Details?.image
                  }
                  class="bg-img blur-up lazyload"
                  alt=""
                />
                <div class="blog-image-contain">
                  <h2>{Details.title}</h2>
                  <ul class="contain-comment-list">
                    <li>
                      <div class="user-list">
                        <i data-feather="calendar"></i>
                        <span>{Details.current_date}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="blog-detail-contain">
              <p>{Details.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     <Home_banner_second/>
      <br/>
      <Live/>
      <br/>
      <Footer />{" "}
    </div>
  );
}

export default BlogDetail;
