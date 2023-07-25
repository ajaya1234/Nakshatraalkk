import React from "react";
import Header from "./InHeader";
import Footer from "./Footer";
import Header1 from "./Header1";

function VedicBlog() {
  return (
    <div>
      <Header1 />
      {/* <div class="fullpage-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}

      <section class="breadscrumb-section pt-0">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-12">
              <div class="breadscrumb-contain">
                <h2>Blog Details Page</h2>
                <nav>
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                      <a href="index-2.html">
                        <i class="fa-solid fa-house"></i>
                      </a>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                      Blog
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Blog Details
                    </li>
                  </ol>
                </nav>
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
                  src="../assets/images/inner-page/blog/3.jpg"
                  class="bg-img blur-up lazyload"
                  alt=""
                />
                <div class="blog-image-contain">
                  <h2>Vedic Astrology</h2>
                  <ul class="contain-comment-list">
                    <li>
                      <div class="user-list">
                        <i data-feather="calendar"></i>
                        <span>20 FEG, 2023</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="blog-detail-contain">
                <p>
                  <span class="first">V</span>edic astrology is founded on the
                  idea that the stars and planets have a significant impact on
                  our life. Vedic astrology has its roots in the Vedas, an
                  ancient body of knowledge from India.
                </p>

                <p>
                  Hindu scriptures hold that the purpose of life is to advance
                  one's spirituality. This development is helped in part by the
                  idea of karma, which holds that every thought and deed has an
                  equal and opposite reaction.
                </p>

                <p>
                  Astrology is a way to comprehend one's karma by examining
                  planets placements, according to the Vedas, which claim that a
                  person's karma is directly tied to the location of the planets
                  and stars. Vedic astrology intends to offer direction to
                  people who are lost or bewildered.
                </p>

                <p>
                  In a family of signs they will keep occurring in pairs,
                  coinciding with new moons and full moons. Once a family of
                  sign is finished it will not be back for about seven or eight
                  years.
                </p>

                <p>
                  Astrology, sometimes known as the "science of fate," is used
                  to comprehend all facets of life, including the likelihood
                  that a specific endeavour—such as marriage, relocating to a
                  new home, or starting a business—will be successful in the
                  future. It was also utilised in the past to forecast the
                  results of wartime battles or a specific political choice.
                  Because of this, kings frequently hired astrologers to provide
                  them more insight into how they should administer their
                  countries.
                </p>

                <p>
                  Everyone and everything is governed by time, as stated in the
                  Vedas. Individuals are forced to pass through several stages
                  of existence under its influence before dying and being
                  propelled into the next life, the state of which is decided by
                  their total amount of karma.
                </p>

                <p>
                  Modern science holds that time and space are woven together to
                  form the space-time fabric that supports our existence.
                  Planets and other large objects have an impact on this fabric,
                  which affects everything nearby.
                </p>

                <p>Dharma:-</p>

                <b>
                  Lunar eclipses are particularly upsetting since they usher in
                  final conclusions.
                </b>

                <p>
                  It can be summed up as the behaviour that is most supportive
                  to spiritual development. A person's life has meaning,
                  purpose, and honour when they live up to their dharma.
                </p>

                <b>Kama:-</b>

                <p>
                  Kama, which is translated as "desire," alludes to the need for
                  both sensory and emotional contentment. Every being seeks
                  happiness in some way, and they should do so without hurting
                  themselves or others.
                </p>

                <b>Artha:-</b>

                <p>
                  Even while the word "artha" means "goal" or "purpose," it
                  actually refers more explicitly to acquiring riches or a sense
                  of security. A person has to have the required resources and
                  riches in order to achieve their goals and feel the happiness
                  that comes with doing so.
                </p>

                <b>Moksha:-</b>

                <p>
                  Moksha, which translates as "liberation," is the ultimate
                  objective and refers to a person's spiritual growth leading to
                  their eventual release from the cycle of birth and death.
                </p>

                <p>
                  Vedic astrology serves as our karma's road map. It enables us
                  to navigate our life in a way that satisfies these four
                  objectives by giving us a more clear understanding of our own
                  character and destiny. But ultimately, it's about assisting us
                  in achieving moksha, the ultimate objective of moksha, through
                  our spiritual growth. By examining our horoscopes, we can have
                  a greater understanding of the energies that are influencing
                  us and how to effectively react to them, frequently through
                  spiritual practises like chanting or ritual worship, which
                  will aid in our spiritual development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
      <div class="container-fluid-lg" style={{ paddingBottom: 20 }}>
          <div class="row">
            <div class="col-12">
              <div class="banner-contain hover-effect" style={{}}>
                <img
                  style={{ width: "100%", boxShadow: "0px 0px 10px" }}
                  src="../assets/images/cake/banner/4.jpg"
                  class="bg-img blur-up lazyload"
                  alt=""
                />
                <div
                  class="banner-details p-center p-sm-4 p-3 text-white text-center"
                  style={{ height: 90 }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <Footer />
    </div>
  );
}

export default VedicBlog;
