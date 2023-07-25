
import React from 'react'
import Header1 from './Header1'
import Footer from './Footer'
import Setting from './Setting'
import Live from './Live'

const Spritual = () => {
  return (
    <>
      <Header1/>
      {/* <!-- Home Section Start --> */}
    <section class="home-section pt-2">
        <div class="container-fluid-lg">
         
        <img align ="right" src="../assets/images/logo/sp.jpg" style={{height: "350px" ,width:"100%"}}/ > 
        </div>
    </section>
    {/* <!-- Home Section End --> */}

    <section>
        <div class="container-fluid-lg">
            <div class="title" style={{padding: "20px"}}>
                <h2 style={{textAlign: "center"}}>Spiritual Path Guidance</h2>
                 <div  class="col-lg-12">
                   
              
                
                <p>We intend to provide a Unique life transformation services based on Vedic scriptures, Bhagwat Gita and Astrology. Law of Karma is at core of our methodology.</p>
                <p>Today world is changing at fast pace leading to uncertainty in every walk of life. At some point of time, we all feel the need for divine intervention to solve all our problems & turn ourselves into Seeker.</p>
                <p><b>Questions like why am I going through all this pain? Have I done something wrong? Am I destined to do this small job?</b></p>
                <p>All the answers to these questions lie within us in our past & present deeds. Law of Karma can answer to all our problems. All you need a good Spiritual Guide /Astrologer who can decipher your charts, help you understand this law of Karma and suggest you best solution for solving problems in your life.</p>
                <p>All of us are bound to Law of Karma. This is a famous proverb “As you sow, so shall you reap”.</p>
                <p>Your deeds are carried over from one birth to another birth. Therefore, deeds done in past life will also affect present life in a good or bad way depending upon your deeds/misdeeds.</p>
                <p>But there are ways to repent and resurrect our present & future life. We help you find these ways to resurrect and live a life full of happiness, joy & contentment.</p>
                <p>We have designed our services to provide you continuous support in your journey for life correction and resurrection with spirituality. Our team will be available to help you with every step in this journey towards understanding the meaning & purpose of your life. It starts with analysing your charts in detail, sharing feedback & suggests spiritual path based on Law of Karma. </p>
                <p>Our panel of team for this service includes an Astrologer, Tarot Card Reader & Palmist. You would be able to freely discuss in person chat/call sessions with our team.</p>
                <p>We assure you best of our services. However if you are not happy with our services we assure 100% *refund (No questions asked).</p>
            </div>
            </div>
        </div>
    </section>
    
    {/* <!-- Product Section Start --> */}

<section class="seller-grid-section">
<div class="container-fluid-lg">
   <div class="row g-4">
       <div class="col-xxl-4 col-md-6">
           <div class="seller-grid-box">
               <div class="grid-contain">
                  
                <div class="title" style={{padding: "5px"}}>
       <h3>Annual Plan :- Multiple chat/call/video session with Spiritual Guide (Upto 100 Mins)</h3>
       
      
       <p>Validity         :- 1 year
            Price        :- Rs 1,500<br/>
           Buy our Spiritual Guidance plan <button type="button">Buy</button>
       </p>
   </div>
               </div>
           </div>
       </div>


   </div>

   <nav class="custome-pagination">
      
   </nav>
</div>
</section>
<section>
        <div class="container-fluid-lg">
            <div class="title" style={{padding: "20px"}}>
               
                 <div  class="col-lg-12">
                   
              
                <h5> <b> *Terms & Conditions:-</b></h5>
                <p>
                  1.  100% refund only if the written request is made within 2 weeks of subscription.
                </p>
            </div>
            </div>
        </div>
    </section>


{/* <!-- Product Section End --> */}
<Live/>

<br/>
<br/>

   
      <Footer/>
      <Setting/>
    </>
  )
}

export default Spritual