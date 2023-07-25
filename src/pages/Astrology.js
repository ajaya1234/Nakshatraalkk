import { Link } from "react-router-dom";
import React from "react";


const Astrology = () => {
  return (
    <>
      {/* <!-- Astro  --> */}

      <section>
        <div class="container-fluid-lg">
          <div class="title" style={{ padding: "5px" }}>
            <div style={{ textAlign: "center" }}>
              <h2>Astrology</h2>
              {/* <!-- <h3>Sunday - Saturday</h3> --> */}
            </div>
            <span class="title-leaf">
              <svg class="icon-width">
                <Link to="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></Link>
              </svg>
            </span>

            <p>
              Astrology is an ancient science which helps us improve our karma
              by telling us what our destiny is going to be. It is not that we
              are consigned to accept bad situations in life; Astrology is a
              kind of tool to help us correct and resurrect our Life through
              Good deeds. Astrology is the science of gaining proficiency over
              deed & time management which helps us manage our life in a better
              way.
            </p>
            <p>
              By analysing the horoscope and understanding the dharma, artha,
              kama and moksha, one can gains insight into the individual’s basic
              instincts. He would also be able to suggest a better lifestyle and
              spiritual sadhana. The three gunas—sattva, rajas and tamas coexist
              in a varying degree of influence that is also understood from the
              chart. The gunas suggest the nature of all ones thoughts, feelings
              and actions, so the sadhana is suggested accordingly. For example,
              Sativ, Rajasic, Tamasic persons are suggested yoga and meditation,
              devotion, Selfless service respectively.
            </p>
            <p>
              It is just the knowledge of karma which helps the individual take
              ownership for the circumstances in which he finds himself and let
              go of resentment at the misfortunes indicated in the chart which
              is a mere messenger of one’s karma or in other word an opportunity
              to correct one’s life.
            </p>
            <p>
              Vedic astrology is based on mathematical divisions of the zodiac
              and defined relationships between planetary locations. The zodiac
              is a fine band across the sky through which the sun, moon and
              planets travel, expressing various influences, both physical and
              subtle. The main zodiac division used is made of twelve signs, or
              rashis, of 30 degrees each.
            </p>
            <p>
              <b>Lagna</b>
            </p>
            <p>
              The Earth rotates at about one sign every two hours, causing the
              signs and planets in them to rise in the east and set in the west.
              The point of the sign rising in the east forms the cusp of the
              first house (bhava). This is the ascendant, rising sign or lagna,
              which determines the orientation of the chart as a whole.{" "}
            </p>
            <p>
              <b>Navagraha</b>
            </p>
            <p>
              Navagraha are nine heavenly bodies (as well as deities) that
              affects human life as per vedic astrology. The term is derived
              from nava ("nine") and Graha (planet).
              <p>The Navaraghas are:-</p>
              {/* <P>1. Surya: the Sun</P>
            <P>2. Chandra: the Moon</P>
            <P>3. Mangala: Mars</P>
            <P>4. Budha: Mercury</P>
            <P>5. Bṛhaspati: Jupiter</P>
            <P>6. Shukra: Venus</P>
            <P>7. Shani: Saturn</P>
            <P>8. Rahu: Shadow body</P>
            <P>9. Ketu: Shadow body</P>  */}
            </p>
          </div>
        </div>
      </section>

      {/* // <!-- End Astro  --> */}

      {/* // <!-- Product Section Start --> */}

      {/* <!-- Product Section End --> */}
    </>
  );
};

export default Astrology;
