// import React from 'react'
// import Header1 from './Header1'
// import { useState } from 'react';
// import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router-dom';

// function Rating() {

//     const [output, setOutput] = useState();
//   const [name, setName] = useState();
//  const Navigate =useNavigate();
//   const [phone, setPhone] = useState();
//   const [password, setPassword] = useState();
//   const [lists, setLists] = useState([]);
  
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const userid = localStorage.getItem("iddofuser");
//     const assadas = localStorage.getItem("vcidddata")
//     let userDetails = {
//       user_id: userid,
//       astrologer_id: assadas,
//     //   name: name,
//       review: password,
      
//     };


//     axios
//       .post("http://103.104.74.215:3012/api/user/add_review", userDetails)
//       .then((response) => {
//         setOutput(response.data.result);
//         Navigate('/')
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (
//     <div>
//       <Header1/>

//       <form onSubmit={handleSubmit}>
               

//                 <div class="form-group">
//                   <label for="mobile">Write Here:</label>
//                   <input
//                     type="text"
//                     className="account__login--input"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                   />
//                 </div>

//                 <div class="form-group">
//                   <label for="pwd">Rating:</label>
//                   <input
//                     type="number"
//                     className="account__login--input"
//                     value={password}
//                     min={1}
//                     max={5}
//                     onChange={(e) => {
//                       const rating = parseInt(e.target.value);
//                       if (rating >= 1 && rating <= 5) {
//                         setPassword(rating);
//                       }
//                     }}
//                   />
//                   <ul class="rating"><li><i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i></li><li><i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i></li><li><i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i></li><li><i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i></li><li><i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i></li></ul>
//                 </div>

//                 <button
//                   type="submit"
//                   class="account__login--btn primary__btn mb-10"
//                 >
//                   {" "}
//                   Submit Review
//                 </button>
//               </form>
//     </div>
//   )
// }

// export default Rating




















import React from 'react'
import Header1 from './Header1'
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Rating() {

    const [output, setOutput] = useState();
  const [name, setName] = useState();
 const Navigate =useNavigate();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [lists, setLists] = useState([]);
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const userid = localStorage.getItem("iddofuser");
    const assadas = localStorage.getItem("vcidddata")
    let userDetails = {
      user_id: userid,
      astrologer_id: assadas,
    //   name: name,
      review: password,
      
    };


    axios
      .post("http://103.104.74.215:3012/api/user/add_review", userDetails)
      .then((response) => {
        setOutput(response.data.result);
        Navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRatingClick = (rating) => {
    setPassword(rating);
  };
  
return (
  <div>
    <Header1 />
    <section class="blog-section section-b-space">
    <div class="container-fluid-lg">
      <div className="title">
        <h2>NakshatraTALKS REVIEWS </h2>
        <h4>Here about us from our Astrologer</h4>
      </div>
      <div class="row" >
        <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-3" >
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="mobile">Write Here:</label>
        <input
          type="text"
          className="account__login--input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div class="form-group">
        <label for="pwd">Give Rating:</label>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((rating) => (
            <span key={rating}>
              <i
                className={`fa ${
                  rating <= password ? 'fa-star' : 'fa-star-o'
                }`}
                aria-hidden="true"
                style={{ color: 'gold', cursor: 'pointer' }}
                onClick={() => handleRatingClick(rating)}
              ></i>
            </span>
          ))}
        </div>
      </div>

      <button type="submit" class="btn btn-md bg-dark cart-button text-white w-80">
        Submit Review
      </button>
    </form>
    </div>
      </div>
    </div>
  </section>    
  </div>
);
}

export default Rating;