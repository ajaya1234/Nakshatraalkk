import React, { useEffect, useState } from "react";
// import Header1 from "./InHeader";
import Footer from "./Footer";
import Setting from "./Setting";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header1 from "./Header1";
import { Link } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    postId();
  }, []);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");
  const [tob, settop] = useState("");
  const [pob, setpob] = useState("");
  const [pin_code, setpin_code] = useState("");
  const [current_address, setcurrent_address] = useState("");
  const [userData, setUserData] = useState([]);

  let [_id, set_id] = useState(() => {
    let result = localStorage.getItem("_id");
    if (result != null) {
      return JSON.parse(result);
    } else {
      return [];
    }
  });

  let Savedata = () => {
    // console.log(_id)
    const item = {
      name: userData?.name,
      email: userData?.email,
      gender: userData?.gender,
      dob: userData?.dob,
      tob: userData?.tob,
      pob: userData?.pob,
      current_address: userData?.current_address,
      pin_code: userData?.pin_code,
    };

    axios
      .put(
        `http://103.104.74.215:3012/api/user/update_user_profile_data/${_id}`,
        item
      )
      .then(() => postId());

    // .then((res) => {
    // console.log(res.data.data._id);
    // console.log(res.data);
    // let data = res.data.data;
    // console.log(data);
    //  localStorage.setItem("userdata",JSON.stringify(data))
    // });
  };

  const postId = () => {
    const item = {
      _id: _id,
    };
    axios
      .post(`http://103.104.74.215:3012/api/user/get_user_profile/`, item)
      .then((res) => setUserData(res.data.data));
      
  };

  const [user_uppic, setuser_pic] = useState({
    _id: _id,
    user_pic: "",
  });

  let profileupload = (event) => {
    // console.log(event)
    setuser_pic({ ...user_uppic, [event.target.name]: event.target.files[0] });
  };

  const imageUpload = () => {
    let formData = new FormData();
    formData.append("user_pic", user_uppic.user_pic, user_uppic.user_pic.name);
    formData.append("_id", user_uppic._id);
    axios
      .patch(`http://103.104.74.215:3012/api/user/upload_image`, formData)
      .then(() => postId());
  };
  const [cover_pic, setCover_pic] = useState({
    _id: _id,
    cover_pic: "",
  });

  const coverUpload = (e) => {
    setCover_pic({ ...cover_pic, [e.target.name]: e.target.files[0] });
  };
  const coverImageUpload = () => {
    let formData = new FormData();
    formData.append("cover_pic", cover_pic.cover_pic, cover_pic.cover_pic.name);
    formData.append("_id", cover_pic._id);
    axios
      .patch(`http://103.104.74.215:3012/api/user/upload_cover_image`, formData)
      .then(() => postId());
  };

  useEffect(() => {
    getPlanss();
  }, []);

  const [getPlans, setGetPlans] = useState([]);

  
  const getPlanss = () => {
    axios
      .get("http://103.104.74.215:3012/api/user/recharge_plan_list")
      .then((res) => setGetPlans(res.data.data));
      
  };
  
  const postPlan = (amount) => {
    const item = {
      user_id: _id,
      ammount: amount,
    };

    axios
      .post("http://103.104.74.215:3012/api/user/recharge_plan", item)
      .then(() => {
        postRech();
      });
  };

  const [walletAmnt, setWalletAmnt] = useState([]);

  useEffect(() => {
    postRech();
  }, []);

  const postRech = () => {
    const item = {
      user_id: _id,
    };
    axios
      .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
      .then((res) => {
        setWalletAmnt(res.data.data);
      });
  };

  return (
    <>
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
                <h2>PROFILE</h2>

                {/*<nav>
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                      <a href="index-2.html">
                        <i class="fa-solid fa-house"></i>
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      PROFILE
                    </li>
                  </ol>
                </nav>*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="user-dashboard-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-xxl-3 col-lg-4">
              <div class="dashboard-left-sidebar">
                <div class="close-button d-flex d-lg-none">
                  <button class="close-sidebar">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div class="profile-box">
                  <div class="cover-image">
                    <img
                      src={
                        "http://103.104.74.215:3012/uploads/" +
                        userData?.cover_pic
                      }
                      class="img-fluid blur-up lazyload"
                      alt=""
                    />
                    {/*<i
                      style={{
                        zIndex: 10,
                      }}
                      class="fa fa-camera"
                      aria-hidden="true"
                    ></i>*/}
                  </div>

                  <div class="profile-contain">
                    <div class="profile-image">
                      <div class="position-relative">
                        <img
                          src={
                            "http://103.104.74.215:3012/uploads/" +
                            userData?.user_pic
                          }
                          class="blur-up lazyload update_img"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="profile-name">
                      <h3>{userData?.name}</h3>
                      <h6 class="text-content">{userData?.email}</h6>
                    </div>
                  </div>
                </div>

                <ul
                  class="nav nav-pills user-nav-pills"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <a
                      href="#pills-tabContent"
                      class="nav-link active"
                      id="pills-dashboard-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-dashboard"
                      role="tab"
                      aria-controls="pills-dashboard"
                      aria-selected="true"
                    >
                      <i data-feather="home"></i> DashBoard
                    </a>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-product-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-product"
                      type="button"
                      role="tab"
                      aria-controls="pills-product"
                      aria-selected="false"
                    >
                      <i data-feather="shopping-bag"></i>Buy MemberShip
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-order-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-order"
                      type="button"
                      role="tab"
                      aria-controls="pills-order"
                      aria-selected="false"
                    >
                      <i data-feather="shopping-bag"></i>Wallet
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-wallet-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-wallet"
                      type="button"
                      role="tab"
                      aria-controls="pills-wallet"
                      aria-selected="false"
                    >
                      <i data-feather="shopping-bag"></i>Order History
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      <i data-feather="user"></i> Profile
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-wallet-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-wallet"
                      type="button"
                      role="tab"
                      aria-controls="pills-wallet"
                      aria-selected="false"
                    >
                      <i data-feather="user"></i>Sign As Astrologer
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-security-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-security"
                      type="button"
                      role="tab"
                      aria-controls="pills-security"
                      aria-selected="false"
                    >
                      <i data-feather="settings"></i> Setting
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xxl-9 col-lg-8">
              <div class="dashboard-right-sidebar">
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-dashboard"
                    role="tabpanel"
                    aria-labelledby="pills-dashboard-tab"
                  >
                    <div class="dashboard-home">
                      <div class="title">
                        <h2>My Profile</h2>
                        <span class="title-leaf">
                          {/* <svg class="icon-width bg-gray">
                              <use xlink:href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
                            </svg> */}
                        </span>
                      </div>

                      <div class="dashboard-user-name">
                        <h6 class="text-content">
                          Hello, <b class="text-title">{userData?.name}</b>
                        </h6>
                        <p class="text-content">
                          From your My Account Dashboard you have the ability to
                          view a snapshot of your recent account activity and
                          update your account information. Select a link below
                          to view or edit information.
                        </p>
                      </div>

                      <div class="total-box">
                        <div class="row g-sm-4 g-3">
                          <div class="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                            <div style={{background:'transparent'}} class="totle-contain">
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/images/svg/order.svg"
                                class="img-1 blur-up lazyload"
                                alt=""
                              />
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/images/svg/order.svg"
                                class="blur-up lazyload"
                                alt=""
                              />
                              <div class="totle-detail">
                                <h5>Wallet</h5>
                                <h3>{walletAmnt?.ammount}</h3>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                            <div class="totle-contain">
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/images/svg/pending.svg"
                                class="img-1 blur-up lazyload"
                                alt=""
                              />
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/images/svg/pending.svg"
                                class="blur-up lazyload"
                                alt=""
                              />
                              <div class="totle-detail">
                                <h5>Chat</h5>
                                <h3>5</h3>
                              </div>
                            </div>
                          </div>

                          <div class="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                            <div class="totle-contain">
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/images/svg/wishlist.svg"
                                class="img-1 blur-up lazyload"
                                alt=""
                              />
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/images/svg/wishlist.svg"
                                class="blur-up lazyload"
                                alt=""
                              />
                              <div class="totle-detail">
                                <h5>Call</h5>
                                <h3>3</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-product"
                    role="tabpanel"
                    aria-labelledby="pills-product-tab"
                  >
                    <div class="product-tab">
                      <div class="title">
                        <h2>MemberShip Plan</h2>
                        {/* <span class="title-leaf">
                            <svg class="icon-width bg-gray">
                              <use xlink:href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
                            </svg>
                          </span> */}
                      </div>

                      <div class="table-responsive dashboard-bg-box">
                        <table class="table product-table">
                          <thead>
                            <tr>
                              <th scope="col">S.No.</th>

                              <th scope="col">Price</th>

                              {/* <th scope="col">Duration</th> */}
                              <th scope="col">Buy Now</th>
                            </tr>
                          </thead>
                          <tbody>
                            {getPlans.map((i, n) => (
                              <tr>
                                <td>{n + 1}</td>

                                <td>
                                  <h6 class="theme-color fw-bold">
                                    {i.ammount}
                                  </h6>
                                </td>

                                {/* <td>
                                  <h6>{i.plan_duration}</h6>
                                </td> */}
                                <td class="efit-delete">
                                <Link to='/payment'> <button
                                    onClick={() => {localStorage.setItem("packdetails",i.ammount);
                                    localStorage.setItem("idd",i._id)}}

                                    style={{ borderRadius: 5, border: "none" }}
                                    class=" theme-bg-color text-white"
                                  >
                                    Buy
                                  </button></Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-order"
                    role="tabpanel"
                    aria-labelledby="pills-order-tab"
                  >
                    <div class="dashboard-order">
                      <div class="title">
                        <h2>Transactions</h2>
                        {/* <span class="title-leaf title-leaf-gray">
                            <svg class="icon-width bg-gray">
                              <use xlink:href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
                            </svg>
                          </span> */}
                        <h3>
                          Available balance : ₹ {walletAmnt?.ammount}{" "}
                          <button>Recharge</button>
                        </h3>
                      </div>

                      <div class="order-tab dashboard-bg-box">
                        <div class="table-responsive">
                          <table class="table order-table">
                            <thead>
                              <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Invoice</th>
                                <th scope="col">Transaction Amount</th>
                                <th scope="col">Date Time</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="product-image">
                                  chat with astrologer
                                </td>
                                <td></td>

                                <td>
                                  <label class="success">0</label>
                                </td>
                                <td>
                                  <h6>Apr 05,2023,10:30 AM</h6>
                                </td>
                                <td class="efit-delete">
                                  <i data-feather="trash-2" class="delete"></i>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/*<nav class="custome-pagination">
                          <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                              <a
                                class="page-link"
                                href="javascript:void(0)"
                                tabindex="-1"
                              >
                                <i class="fa-solid fa-angles-left"></i>
                              </a>
                            </li>
                            <li class="page-item active">
                              <a class="page-link" href="javascript:void(0)">
                                1
                              </a>
                            </li>
                            <li class="page-item" aria-current="page">
                              <a class="page-link" href="javascript:void(0)">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="javascript:void(0)">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="javascript:void(0)">
                                <i class="fa-solid fa-angles-right"></i>
                              </a>
                            </li>
                          </ul>
                        </nav>*/}
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-wallet"
                    role="tabpanel"
                    aria-labelledby="pills-wallet-tab"
                  >
                    <div class="dashboard-order">
                      <div class="title">
                        <h2>Order History</h2>
                        {/* <span class="title-leaf title-leaf-gray">
                            <svg class="icon-width bg-gray">
                              <use xlink:href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
                            </svg>
                          </span> */}
                        <h3>Call History</h3>
                      </div>

                      <div class="order-tab dashboard-bg-box">
                        <div class="table-responsive">
                          <table class="table order-table">
                            <thead>
                              <tr>
                                <th scope="col">Order Id</th>
                                <th scope="col">Astrologer Name</th>

                                <th scope="col">Date Time</th>
                                <th scope="col">ChatType</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Deduction</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="product-image">#212525</td>
                                <td>Astrologer name</td>

                                <td>
                                  <label class="success">
                                    Apr 05,2023,10:30 AM
                                  </label>
                                </td>
                                <td>
                                  <h6>Call</h6>
                                </td>
                                <td>
                                  <label class="success">5 min</label>
                                </td>
                                <td>
                                  <label class="success">0</label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="title" style={{ padding: 20 }}>
                        <h3>Chat History</h3>
                      </div>
                      <div class="order-tab dashboard-bg-box">
                        <div class="table-responsive">
                          <table class="table order-table">
                            <thead>
                              <tr>
                                <th scope="col">Order Id</th>
                                <th scope="col">Astrologer Name</th>

                                <th scope="col">Date Time</th>
                                <th scope="col">ChatType</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Deduction</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="product-image">#212525</td>
                                <td>Astrologer name</td>

                                <td>
                                  <label class="success">
                                    Apr 05,2023,10:30 AM
                                  </label>
                                </td>
                                <td>
                                  <h6>Chat</h6>
                                </td>
                                <td>
                                  <label class="success">5 min</label>
                                </td>
                                <td>
                                  <label class="success">0</label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <nav class="custome-pagination">
                          <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                              <a
                                class="page-link"
                                href="javascript:void(0)"
                                tabindex="-1"
                              >
                                <i class="fa-solid fa-angles-left"></i>
                              </a>
                            </li>
                            <li class="page-item active">
                              <a class="page-link" href="javascript:void(0)">
                                1
                              </a>
                            </li>
                            <li class="page-item" aria-current="page">
                              <a class="page-link" href="javascript:void(0)">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="javascript:void(0)">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="javascript:void(0)">
                                <i class="fa-solid fa-angles-right"></i>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div class="dashboard-profile">
                      <div class="title">
                        <h2>My Profile</h2>
                        {/* <span class="title-leaf">
                            <svg class="icon-width bg-gray">
                              <use xlink:href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
                            </svg>
                          </span> */}
                      </div>

                      <div class="profile-tab dashboard-bg-box">
                        <div class="dashboard-title dashboard-flex">
                          <h3>Profile</h3>

                          <button
                            class="btn btn-sm theme-bg-color text-white"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-profile"
                          >
                            Edit Profile
                          </button>
                        </div>

                        <ul>
                          <li>
                            <h5>Name :</h5>
                            <h5>{userData?.name}</h5>
                          </li>
                          <li>
                            <h5>Email Address :</h5>
                            <h5>{userData?.email}</h5>
                          </li>
                          <li>
                            <h5>Mobile Number :</h5>
                            <h5>{userData?.mobile_no}</h5>
                          </li>

                          <li>
                            <h5>Current Address :</h5>
                            <h5>{userData?.current_address}</h5>
                          </li>
                          <li>
                            <h5>Gender :</h5>
                            <h5>{userData?.gender}</h5>
                          </li>
                          <li>
                            <h5>Date of birth :</h5>
                            <h5>{userData?.dob}</h5>
                          </li>
                          <li>
                            <h5>Time of birth :</h5>
                            <h5>{userData?.tob}</h5>
                          </li>
                          <li>
                            <h5>Place of birth :</h5>
                            <h5>{userData?.pob}</h5>
                          </li>
                          <li>
                            <h5>Zip :</h5>
                            <h5>{userData?.pin_code}</h5>
                          </li>
                          <li>
                            <form method="get">
                              <label
                                style={{
                                  cursor: "pointer",
                                  backgroundColor: "#d99f46",
                                  color: "#ffffff",
                                  padding: 10,
                                }}
                                for="upload"
                              >
                                Select Profile Picture
                              </label>
                              <input
                                onChange={profileupload}
                                style={{ display: "none" }}
                                type="file"
                                name="user_pic"
                                id="upload"
                              />
                            </form>
                            <i
                              className="asd"
                              onClick={imageUpload}
                              class="fa fa-cloud-upload fa-2x"
                              aria-hidden="true"
                            ></i>
                          </li>
                          <li>
                            <form method="get">
                              <label
                                style={{
                                  cursor: "pointer",
                                  backgroundColor: "#d99f46",
                                  color: "#ffffff",
                                  padding: 10,
                                }}
                                for="uploadd"
                              >
                                Select Cover Picture
                              </label>
                              <input
                                style={{ display: "none" }}
                                onChange={coverUpload}
                                type="file"
                                id="uploadd"
                                name="cover_pic"
                                required
                              />
                            </form>
                            <i
                              onClick={coverImageUpload}
                              class="fa fa-cloud-upload fa-2x"
                              aria-hidden="true"
                            ></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-security"
                    role="tabpanel"
                    aria-labelledby="pills-security-tab"
                  >
                    <div class="dashboard-privacy">
                      <div class="title">
                        <h2>My Setting</h2>
                        {/* <span class="title-leaf">
                            <svg class="icon-width bg-gray">
                              <use xlink:href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
                            </svg>
                          </span> */}
                      </div>

                      <div class="dashboard-bg-box">
                        <div class="dashboard-title mb-4">
                          <a href="term_condition.html">
                            <h3>Term & Condition</h3>
                          </a>
                        </div>
                        <div class="dashboard-title mb-4">
                          <a href="PrivacyPolicy">
                            {" "}
                            <h3>Privacy Policy</h3>
                          </a>
                        </div>
                        <div
                          class="dashboard-title mb-4"
                          onClick={() => {
                            localStorage.removeItem("_id");

                            navigate("/login");
                          }}
                        >
                          <Link to="#">
                            {" "}
                            <h3>Logout</h3>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        class="modal fade theme-modal deal-modal"
        id="deal-box"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <div>
                <h5 class="modal-title w-100" id="deal_today">
                  Deal Today
                </h5>
                <p class="mt-1 text-content">Recommended deals for you.</p>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="deal-offer-box">
                <ul class="deal-offer-list">
                  <li class="list-1">
                    <div class="deal-offer-contain">
                      <a href="shop-left-sidebar.html" class="deal-image">
                        <img
                          src="../assets/images/vegetable/product/10.png"
                          class="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" class="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>

                  <li class="list-2">
                    <div class="deal-offer-contain">
                      <a href="shop-left-sidebar.html" class="deal-image">
                        <img
                          src="../assets/images/vegetable/product/11.png"
                          class="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" class="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>

                  <li class="list-3">
                    <div class="deal-offer-contain">
                      <a href="shop-left-sidebar.html" class="deal-image">
                        <img
                          src="../assets/images/vegetable/product/12.png"
                          class="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" class="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>

                  <li class="list-1">
                    <div class="deal-offer-contain">
                      <a href="shop-left-sidebar.html" class="deal-image">
                        <img
                          src="../assets/images/vegetable/product/13.png"
                          class="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" class="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="theme-option">
        <div class="setting-box">
          <button class="btn setting-button">
            <i class="fa-solid fa-gear"></i>
          </button>

          <div class="theme-setting-2">
            <div class="theme-box">
              <ul>
                <li>
                  <div class="setting-name">
                    <h4>Color</h4>
                  </div>
                  <div class="theme-setting-button color-picker">
                    <form class="form-control">
                      <label for="colorPick" class="form-label mb-0">
                        Theme Color
                      </label>
                      <input
                        type="color"
                        class="form-control form-control-color"
                        id="colorPick"
                        value="#0da487"
                        title="Choose your color"
                      />
                    </form>
                  </div>
                </li>

                <li>
                  <div class="setting-name">
                    <h4>Dark</h4>
                  </div>
                  <div class="theme-setting-button">
                    <button class="btn btn-2 outline" id="darkButton">
                      Dark
                    </button>
                    <button class="btn btn-2 unline" id="lightButton">
                      Light
                    </button>
                  </div>
                </li>

                <li>
                  <div class="setting-name">
                    <h4>RTL</h4>
                  </div>
                  <div class="theme-setting-button rtl">
                    <button class="btn btn-2 rtl-unline">LTR</button>
                    <button class="btn btn-2 rtl-outline">RTL</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="back-to-top">
          <a id="back-to-top" href="#">
            <i class="fas fa-chevron-up"></i>
          </a>
        </div>
      </div>

      <div
        class="modal fade theme-modal"
        id="add-address"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add a new address
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-floating mb-4 theme-form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    placeholder="Enter First Name"
                  />
                  <label for="fname">First Name</label>
                </div>
              </form>

              <form>
                <div class="form-floating mb-4 theme-form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="lname"
                    placeholder="Enter Last Name"
                  />
                  <label for="lname">Last Name</label>
                </div>
              </form>

              <form>
                <div class="form-floating mb-4 theme-form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Email Address"
                  />
                  <label for="email">Email Address</label>
                </div>
              </form>

              <form>
                <div class="form-floating mb-4 theme-form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="address"
                    style={{ height: 100 }}
                  ></textarea>
                  <label for="address">Enter Address</label>
                </div>
              </form>

              <form>
                <div class="form-floating mb-4 theme-form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="pin"
                    placeholder="Enter Pin Code"
                  />
                  <label for="pin">Pin Code</label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary btn-md"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn theme-bg-color btn-md text-white"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal location-modal fade theme-modal"
        id="locationModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel1">
                Choose your Delivery Location
              </h5>
              <p class="mt-1 text-content">
                Enter your address and we will specify the offer for your area.
              </p>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="location-list">
                <div class="search-input">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search Your Area"
                  />
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div class="disabled-box">
                  <h6>Select a Location</h6>
                </div>

                <ul class="location-select custom-height">
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Alabama</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Arizona</h6>
                      <span>Min: $150</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>California</h6>
                      <span>Min: $110</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Colorado</h6>
                      <span>Min: $140</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Florida</h6>
                      <span>Min: $160</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Georgia</h6>
                      <span>Min: $120</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Kansas</h6>
                      <span>Min: $170</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Minnesota</h6>
                      <span>Min: $120</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>New York</h6>
                      <span>Min: $110</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <h6>Washington</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade theme-modal"
        id="editProfile"
        tabindex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel2">
                Edit Profile
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="row g-4">
                <div class="col-xxl-12">
                  <form>
                    <div class="form-floating theme-form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="pname"
                        value="Jack Jennas"
                      />
                      <label for="pname">Full Name</label>
                    </div>
                  </form>
                </div>

                <div class="col-xxl-6">
                  <form>
                    <div class="form-floating theme-form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="email1"
                        value="vicki.pope@gmail.com"
                      />
                      <label for="email1">Email address</label>
                    </div>
                  </form>
                </div>

                <div class="col-xxl-6">
                  <form>
                    <div class="form-floating theme-form-floating">
                      <input
                        class="form-control"
                        type="tel"
                        value="4567891234"
                        name="mobile"
                        id="mobile"
                        maxlength="10"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value =
                                            this.value.slice(0, this.maxLength);"
                      />
                      <label for="mobile">Email address</label>
                    </div>
                  </form>
                </div>

                <div class="col-12">
                  <form>
                    <div class="form-floating theme-form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="address1"
                        value="8424 James Lane South San Francisco"
                      />
                      <label for="address1">Add Address</label>
                    </div>
                  </form>
                </div>

                <div class="col-12">
                  <form>
                    <div class="form-floating theme-form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="address2"
                        value="CA 94080"
                      />
                      <label for="address2">Add Address 2</label>
                    </div>
                  </form>
                </div>

                <div class="col-xxl-4">
                  <form>
                    <div class="form-floating theme-form-floating">
                      <select
                        class="form-select"
                        id="floatingSelect1"
                        aria-label="Floating label select example"
                      >
                        <option selected>Choose Your Country</option>
                        <option value="kindom">United Kingdom</option>
                        <option value="states">United States</option>
                        <option value="fra">France</option>
                        <option value="china">China</option>
                        <option value="spain">Spain</option>
                        <option value="italy">Italy</option>
                        <option value="turkey">Turkey</option>
                        <option value="germany">Germany</option>
                        <option value="russian">Russian Federation</option>
                        <option value="malay">Malaysia</option>
                        <option value="mexico">Mexico</option>
                        <option value="austria">Austria</option>
                        <option value="hong">Hong Kong SAR, China</option>
                        <option value="ukraine">Ukraine</option>
                        <option value="thailand">Thailand</option>
                        <option value="saudi">Saudi Arabia</option>
                        <option value="canada">Canada</option>
                        <option value="singa">Singapore</option>
                      </select>
                      <label for="floatingSelect">Country</label>
                    </div>
                  </form>
                </div>

                <div class="col-xxl-4">
                  <form>
                    <div class="form-floating theme-form-floating">
                      <select class="form-select" id="floatingSelect">
                        <option selected>Choose Your City</option>
                        <option value="kindom">India</option>
                        <option value="states">Canada</option>
                        <option value="fra">Dubai</option>
                        <option value="china">Los Angeles</option>
                        <option value="spain">Thailand</option>
                      </select>
                      <label for="floatingSelect">City</label>
                    </div>
                  </form>
                </div>

                <div class="col-xxl-4">
                  <form>
                    <div class="form-floating theme-form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="address3"
                        value="94080"
                      />
                      <label for="address3">Pin Code</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-animation btn-md fw-bold"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                class="btn theme-bg-color btn-md fw-bold text-light"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade theme-modal"
        id="editCard"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel8">
                Edit Card
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="row g-4">
                <div class="col-xxl-6">
                  <form>
                    <div class="form-floating theme-form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="finame"
                        value="Mark"
                      />
                      <label for="finame">First Name</label>
                    </div>
                  </form>
                </div>

                <div class="col-xxl-6">
                  <form>
                    <div class="form-floating theme-form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="laname"
                        value="Jecno"
                      />
                      <label for="laname">Last Name</label>
                    </div>
                  </form>
                </div>

                <div class="col-xxl-4">
                  <form>
                    <div class="form-floating theme-form-floating">
                      <select
                        class="form-select"
                        id="floatingSelect12"
                        aria-label="Floating label select example"
                      >
                        <option selected>Card Type</option>
                        <option value="kindom">Visa Card</option>
                        <option value="states">MasterCard Card</option>
                        <option value="fra">RuPay Card</option>
                        <option value="china">Contactless Card</option>
                        <option value="spain">Maestro Card</option>
                      </select>
                      <label for="floatingSelect12">Card Type</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-animation btn-md fw-bold"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn theme-bg-color btn-md fw-bold text-light"
              >
                Update Card
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade theme-modal remove-profile"
        id="removeProfile"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header d-block text-center">
              <h5 class="modal-title w-100" id="exampleModalLabel22">
                Are You Sure ?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="remove-box">
                <p>
                  The permission for the use/group, preview is inherited from
                  the object, object will create a new permission for this
                  object
                </p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-animation btn-md fw-bold"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                class="btn theme-bg-color btn-md fw-bold text-light"
                data-bs-target="#removeAddress"
                data-bs-toggle="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade theme-modal remove-profile"
        id="removeAddress"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center" id="exampleModalLabel12">
                Done!
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="remove-box text-center">
                <h4 class="text-content">It's Removed.</h4>
              </div>
            </div>
            <div class="modal-footer pt-0">
              <button
                type="button"
                class="btn theme-bg-color btn-md fw-bold text-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade theme-modal"
        id="edit-profile"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel3">
                Edit Your Profile
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="companyName" class="form-label">
                    Name
                  </label>
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    type="text"
                    class="form-control"
                    value={name ? name : userData?.name}
                    id="companyName"
                  />
                </div>
                <div class="mb-3">
                  <label for="companyName" class="form-label">
                    Email
                  </label>
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    type="text"
                    class="form-control"
                    id="companyName"
                    value={email ? email : userData?.email}
                  />
                </div>
                <div class="mb-3">
                  <label for="companyName" class="form-label">
                    Gender
                  </label>
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, gender: e.target.value })
                    }
                    type="text"
                    class="form-control"
                    id="companyName"
                    value={gender ? gender : userData?.gender}
                  />
                </div>
                <div class="mb-3">
                  <label for="companyName" class="form-label">
                    Date of birth
                  </label>
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, dob: e.target.value })
                    }
                    type="text"
                    class="form-control"
                    id="companyName"
                    value={dob ? dob : userData?.dob}
                  />
                </div>
                <div class="mb-3">
                  <label for="companyName" class="form-label">
                    Time of birth
                  </label>
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, tob: e.target.value })
                    }
                    type="text"
                    class="form-control"
                    id="companyName"
                    value={tob ? tob : userData?.tob}
                  />
                </div>
                <div class="mb-3">
                  <label for="companyName" class="form-label">
                    Place of birth
                  </label>
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, pob: e.target.value })
                    }
                    type="text"
                    class="form-control"
                    id="companyName"
                    value={pob ? pob : userData?.pob}
                  />
                </div>
                <div class="mb-3">
                  <label for="companyName" class="form-label">
                    Current Address
                  </label>
                  <input
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        current_address: e.target.value,
                      })
                    }
                    type="text"
                    class="form-control"
                    id="companyName"
                    value={
                      current_address
                        ? current_address
                        : userData?.current_address
                    }
                  />
                </div>
                <div class="mb-3">
                  <label for="companyName" class="form-label">
                    PinCode
                  </label>
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, pin_code: e.target.value })
                    }
                    type="text"
                    class="form-control"
                    id="companyName"
                    value={pin_code ? pin_code : userData?.pin_code}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-animation btn-md fw-bold"
                data-bs-dismiss="modal"
              >
                Cancle
              </button>
              <button
                onClick={Savedata}
                type="button"
                class="btn theme-bg-color btn-md fw-bold text-light"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade theme-modal"
        id="edit-data"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel3">
                Edit Your Profile
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Setting />
    </>
  );
};

export default Profile;
