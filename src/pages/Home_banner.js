import React from "react";

const Home_banner = () => {
  return (
    <>
      {/* <!-- Home Section Start --> */}
      <section className="home-section pt-2">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xl-12 ratio_30">
              <div className="home-contain h-100">
                <div className="h-100">
                  <img 
                    style={{ width: "100%", height: "40vh" }}
                    src="../assets/images/vegetable/banner/1.jpg"
                    className="bg-img blur-up lazyload img-fluid"
                    alt="home image"
                  />
                </div>
                <div
                  className="home-detail p-center-left w-60"
                  style={{ marginLeft: "27%" }}
                >
                  <div>
                    <h3 className="lh-base fw-bold text-white ">
                      <span>Problems in life ?</span>
                    </h3>

                    <h3 className="lh-base fw-bold text-white ">
                      Best Astrologer Available for you
                    </h3>

                    <br />

                    <h3 className="lh-base fw-bold text-white">
                      First 2 Calls FREE
                      <span className="daily">
                        <button
                       
                          onclick="location.href = '#';"
                          className="btn text-white btn-md mt-xxl-4 mt-2 home-button mend-auto  "
                          style={{ marginLeft: "15px",backgroundColor:"#d99f46" }}
                        >
                          Call Now
                        </button>{" "}
                      </span>
                    </h3>
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

export default Home_banner;
