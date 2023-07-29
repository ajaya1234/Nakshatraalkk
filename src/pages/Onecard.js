import { Link, Navigate } from "react-router-dom";
import React from "react";
import Header1 from "./Header1";
import Live from "./Live";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Onecard() {
    const [error, setError] = useState('');
    const Navigate = useNavigate('')
    const [formData, setFormData] = useState({
        name: "",
    });
console.log("sadasd",formData)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name) {
            setError('Please Enter a Name.');
             return;
          }
      localStorage.setItem("nameofonetarot",JSON.stringify(formData))  
      Navigate("/Onecarreading")
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <div>
            <Header1 />

            <section class="blog-section section-b-space">
                <div class="container-fluid-lg">
                    <div class="row g-4">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-2">
                            <div class="row g-4 ratio_65">
                                <div class="col-xxl-4 col-sm-12">
                                    <div
                                        class="blog-box wow fadeInUp"
                                        data-wow-delay="0.05s"
                                        style={{ height: "332px" }}
                                    >
                                        <div class="blog-image" style={{}}>
                                            <a href="#">
                                                <img
                                                    width={"100%"}
                                                    src="../assets/images/inner-page/tarot2.jpeg"
                                                    class="bg-img"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2>ONE CARD TAROT READING</h2>
                                </div>
                                <div>
                                    <p>
                                        Need answers or solutions to your problems in life as soon
                                        as possible? One card reading will provide you with
                                        suggestions on all aspects of life like business, love,
                                        finance and relationships. You can explore any issue in your
                                        life by consulting the online tarot reading all by yourself
                                        right here. This tarot reading will provide you with
                                        suggestions on all aspects of life like business, love,
                                        finance and relationships. One card tarot prediction will
                                        help you decide better on what action needs to be taken and
                                        will also give you a glimpse of what is to come.
                                    </p>
                                </div>

                                <div
                                    class="col-xxl-4 col-sm-12"
                                    style={{
                                        border: "1px solid var(--theme-color)",
height:'100px'
                                    }}
                                >
                                    <br/>
                                    <font style={{color:'blue'}}>{error && <p >{error}</p>}</font>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">

                                            <div className="col-sm-6">
                                                <div className="custom-input">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter Your Name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                    />


                                                </div>
                                            </div>

                                            <div className="col-sm-4" >
                                                <button  style={{float:'left'}}
                                                    type="submit"
                                                    className="btn btn-animation btn-md fw-bold ms-auto"
                                                >
                                                    Submit
                                                </button>
                                               
                                            </div>

                                          


                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <Live />
            <br />
            <Footer />
        </div>
    );
}

export default Onecard;
