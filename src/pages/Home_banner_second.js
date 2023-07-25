import React from "react";

const Home_banner_second = () => {
  return (
    <>
      

      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="banner-contain">
                <div
                  className="banner-contain hover-effect"
                  style={{ height: "150px" }}
                >
                  <img
                   src="../assets/images/vegetable/banner/banner1.jpg"
                    className="bg-img blur-up lazyload img-fluid"
                    alt="banner"
                    style={{ width: "100%", height: "27vh"  }}
                    // style={{ width: "100%", height: "15vh" ,objectFit:"cover" }}
                  />
                  <div className="banner-details p-center p-sm-4 p-3 text-white text-center">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Home_banner_second;
