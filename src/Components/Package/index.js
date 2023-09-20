import React from "react";
import "./index.css";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";


const Package = () => {
    return (
        <>
            <section>
                <div className="package-heaing-container">
                    <h4 className="package-heading">Top  <span>packages</span></h4>
                    <div className="package-heading-img-container">
                        <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186465/design_cyfj1z.png" alt="design" className="package-heading-img" />
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="sub-para" >
                            <p>Explore our wide range of tests! We ensure that you don’t miss out on any chance to keep yourself healthy.</p>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 ">
                            <div className="card border-0 shadow mb-3">
                                <div className="card-body">
                                    <h5 class="card-title">Basic Full Body Checkup</h5>
                                    <ul className="list-unstyled d-flex flex-row justify-content-start align-items-center review-container ">
                                        <li className="rating" >4.3</li>
                                        <li className="star"><AiTwotoneStar size="20" /></li>
                                        <li className="rating-number" >(75 Reviews)</li>
                                    </ul>
                                    <h5 className="test-number" >Number of tests - 53</h5>
                                    <ul className="list-unstyled d-flex  align-items-center mrp-container">
                                        <li className="mrp">MRP: <del>₹ 10,000</del></li>
                                        <li className="price">₹ 8,490</li>
                                    </ul>
                                    <div className="card-btn">
                                        <button className="" >Book now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 ">
                            <div className="card border-0 shadow mb-3">
                                <div className="card-body">
                                    <h5 class="card-title">Advance Full Body Checkup</h5>
                                    <ul className="list-unstyled d-flex flex-row justify-content-start align-items-center review-container ">
                                        <li className="rating" >4.7</li>
                                        <li className="star"><AiTwotoneStar size="20" /></li>
                                        <li className="rating-number" >(100 Reviews)</li>
                                    </ul>
                                    <h5 className="test-number" >Number of tests - 70</h5>
                                    <ul className="list-unstyled d-flex  align-items-center mrp-container">
                                        <li className="mrp">MRP: <del>₹ 12,000</del></li>
                                        <li className="price">₹ 10,000</li>
                                    </ul>
                                    <div className="card-btn">
                                        <button className="" >Book now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 ">
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                    <h5 class="card-title">Liver Function Test (LFT)</h5>
                                    <ul className="list-unstyled d-flex flex-row justify-content-start align-items-center review-container ">
                                        <li className="rating" >4.3</li>
                                        <li className="star"><AiTwotoneStar size="20" /></li>
                                        <li className="rating-number" >(43 Reviews)</li>
                                    </ul>
                                    <h5 className="test-number" >Number of tests - 89</h5>
                                    <ul className="list-unstyled d-flex  align-items-center mrp-container">
                                        <li className="mrp">MRP: <del>₹ 13,299</del></li>
                                        <li className="price">₹ 11,299</li>
                                    </ul>
                                    <div className="card-btn">
                                        <button className="" >Book now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-end d-block d-lg-none mt-5">
                        <Link to="/" className="see-all" >See All</Link>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Package
