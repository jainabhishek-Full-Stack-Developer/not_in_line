import React from 'react';
import "./index.css";

const Hero = () => {
    return (
        <>
            <div className="hero-bg">
                <section>
                    <div className="d-flex flex-column justify-content-center align-items-center d-lg-none ">
                        <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186465/Hero_header_lead1y.png" alt="best in class" className=" img-fluid w-75 " />
                        <p className="body-check">Get Full Body Check up <b>Now</b> at</p>
                        <p className="offer"><span>₹ 5,999</span> <span>999</span> <span>70% OFF</span> </p>

                    </div>
                </section>
                <section>
                    <div className="container-fluid py-3">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 p-5">
                                <div className="custom-card shadow">
                                    <div className="custom-card-body p-4">
                                        <h4>Fill in the details to get a call!</h4>
                                        <form >
                                            <div className="my-3 d-flex flex-row ">
                                                <label><img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186467/person_m2xf9c.png" alt="user" /></label>
                                                <input type="text" placeholder="Full Name" className="form-input" />
                                            </div>
                                            <div className="my-3 d-flex flex-row">
                                                <label><img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186465/call_qpawr3.png" alt="phone" /></label>
                                                <input type="tel" placeholder="Phone number" className="form-input" />
                                            </div>
                                            <div className="my-3 d-flex flex-row">
                                                <label><img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/distance_lwbcmr.png" alt="location" /></label>
                                                <input type="text" placeholder="Location" className="form-input" />
                                            </div>
                                            <div className="d-flex flex-row justify-content-start align-items-center      input-checkbox">
                                                <input type="checkbox" placeholder="Location" checked />
                                                <label>By continuing, you agree to our <span>T&C</span> and <span>privacy policy</span></label>
                                            </div>
                                            <div className="input-btn">
                                                <button className="btn">Proceed</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="d-lg-block d-none">
                                    <div className="hero-offer mt-4 ">
                                        <p className="left">Get a Full Body Checkup <b>Now</b> at <del className="mrp">₹ 5,999</del><span className="price">₹ 999</span></p>
                                        <p className="right">70% OFF</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6 col-md-12 d-none d-lg-block">
                                <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/hero_img_ya08hy.png" alt="hero-img" className="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Hero
