import React from 'react';
import './index.css';
import { IoCall } from 'react-icons/io5'
import { AiOutlineCopyright } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="laptop-footer ">
                <div className="container-fluid footer-container   p-5">
                    <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/logo_nfrku3.png" alt="logo" className="footer-img" />
                    <div className="row">
                        <div className="col-lg-4">
                            <p className="footer-para my-5">
                                Book doctor appointments online and get your ailments treated in no time with our expert medical support systems. Get rid of all your medical problem with our expert panel of doctors who guide you towards a healthier life.
                            </p>
                            <div className="footer-input-container">
                                <span className="icon-left">
                                    +91 |
                                </span>
                                <input type="tel" id="call" />
                                <span className="icon-right">
                                    <IoCall size="20" />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-4">
                                    <h4 className="footer-menu-heading mb-5" >Services</h4>
                                    <ul className="list-unstyled" >
                                        <li className="my-3">
                                            <Link to="/" className="footer-link" >Appointments</Link>
                                        </li>
                                        <li className="my-3">
                                            <Link to="/" className="footer-link">Lab tests</Link>
                                        </li>
                                        <li className="my-3">
                                            <Link to="/" className="footer-link">A-Z medicine</Link>
                                        </li>
                                        <li className="my-3">
                                            <Link to="/" className="footer-link">Doctor support</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h4 className="footer-menu-heading mb-5" >Legal</h4>
                                    <ul className="list-unstyled" >
                                        <li className="my-3">
                                            <Link to="/" className="footer-link" >General info</Link>
                                        </li>
                                        <li className="my-3">
                                            <Link to="/" className="footer-link">Privacy policy</Link>
                                        </li>
                                        <li className="my-3">
                                            <Link to="/" className="footer-link">Terms of services</Link>
                                        </li>
                                        <li className="my-3">
                                            <Link to="/" className="footer-link">Consultation</Link>
                                        </li>
                                        <li className="my-3">
                                            <Link to="/" className="footer-link">How it works</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h4 className="footer-menu-heading mb-5" >Talk to us</h4>
                                    <ul className="list-unstyled" >
                                        <li className="my-3">
                                            <Link to="/" className="footer-link" >support@notinline.com</Link>
                                        </li>
                                        <li className="my-3">
                                            <Link to="/" className="footer-link">appointment@notinline.com</Link>
                                        </li>
                                        <li className="my-3">
                                            <Link to="/" className="footer-link">+91 12345 67899</Link>
                                        </li>
                                        <li className="my-3">
                                            <Link to="/" className="footer-link">+91 97642 09752</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className="footer-hr-line" />
                    <div className="footer-copy-right">
                        <p> <span><AiOutlineCopyright size="20" /></span> 2021-2023 All Rights Reserved</p>
                    </div>
                </div>
            </footer>
            {/* responsive footer */}
            <footer className="mobile-footer">
                <div className="container-fluid mobile-footer-container p-5">
                    <div className="row">
                        <div className="col-12">
                            <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/logo_nfrku3.png" alt="logo" className="mobile-footer-img" />
                            <p className="mobile-footer-para my-5">
                                Book doctor appointments online and get your ailments treated in no time with our expert medical support systems. Get rid of all your medical problem with our expert panel of doctors who guide you towards a healthier life.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4">
                                    <h4 className="mobile-footer-menu-heading mb-3" >Services</h4>
                                    <ul className="list-unstyled" >
                                        <li>
                                            <Link to="/" className="mobile-footer-link" >Appointments</Link>
                                        </li>
                                        <li >
                                            <Link to="/" className="mobile-footer-link">Lab tests</Link>
                                        </li>
                                        <li >
                                            <Link to="/" className="mobile-footer-link">A-Z medicine</Link>
                                        </li>
                                        <li >
                                            <Link to="/" className="mobile-footer-link">Doctor support</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h4 className="mobile-footer-menu-heading mb-3" >Legal</h4>
                                    <ul className="list-unstyled" >
                                        <li >
                                            <Link to="/" className="mobile-footer-link" >General info</Link>
                                        </li>
                                        <li >
                                            <Link to="/" className="mobile-footer-link">Privacy policy</Link>
                                        </li>
                                        <li >
                                            <Link to="/" className="mobile-footer-link">Terms of services</Link>
                                        </li>
                                        <li >
                                            <Link to="/" className="mobile-footer-link">Consultation</Link>
                                        </li>
                                        <li >
                                            <Link to="/" className="mobile-footer-link">How it works</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h4 className="mobile-footer-menu-heading mb-3" >Talk to us</h4>
                                    <ul className="list-unstyled" >
                                        <li>
                                            <Link to="/" className="mobile-footer-link" >support@notinline.com</Link>
                                        </li>
                                        <li >
                                            <Link to="/" className="mobile-footer-link">appointment@notinline.com</Link>
                                        </li>
                                        <li >
                                            <Link to="/" className="mobile-footer-link">+91 12345 67899</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="mobile-footer-link">+91 97642 09752</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="col-12">
                            <hr className="mobile-footer-hr-line" />
                            <div className="mobile-footer-copy-right">
                                <p> <span><AiOutlineCopyright size="20" /></span> 2021-2023 All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer
