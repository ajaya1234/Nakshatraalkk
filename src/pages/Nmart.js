import React from 'react'
import Header1 from './Header1'

function Nmart() {
  return (
    <>
    {/* <Header1/> */}
    <section className="coming-soon-section pt-0">
    <div className="bg-black" />
    <div className="container-fluid-lg w-100">
      <div className="row">
        <div className="col-lg-5" />
        <div className="col-xxl-5 col-xl-6 col-lg-7">
          <div className="coming-box">
            <div>
              <div className="coming-title">
                <h2 style={{color: 'white'}}>We are Coming Soon...</h2>
              </div>
              <p className="coming-text" style={{color: 'white'}}>We are currently working on an awesome new site. Stay tuned for
                more information. Subscribe to our newsletter to stay updated on our progress.</p>
              <div className="coming-timer" id="clockdiv-1" data-hours={1} data-minutes={2} data-seconds={3}>
                <ul className="d-flex justify-content-center">
                  <li>
                    <div className="counter">
                      <div className="days">14</div>
                      <p>Day</p>
                    </div>
                  </li>
                  <li>
                    <div className="counter">
                      <div className="hours">23</div>
                      <p>Hour</p>
                    </div>
                  </li>
                  <li>
                    <div className="counter">
                      <div className="minutes">59</div>
                      <p>Min</p>
                    </div>
                  </li>
                  <li>
                    <div className="counter">
                      <div className="seconds">19</div>
                      <p>Sec</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="coming-contain">
                <div className="coming-form input-group">
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email Address" />
                  <a href="otp.html">
                  </a><button className="coming-button"><a href="otp.html"> Sign Up</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Nmart
