import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';


const Header = () => {
    const [openmenu, subOpenMenu] = useState(false);

    const handlemenu = () => {
        subOpenMenu(!openmenu);

    }

    return (
        <>
            <header className="laptop-navbar">
                <div className="container">
                    <div className="row d-flex flex-row justify-content-between align-items-center ">
                        <div className="col-3">
                            <Link to="/">
                                <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/logo_nfrku3.png" alt="logo icon" className=" img-fluid w-25" />
                                <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/logo_name_gqhl6z.png" alt="logo name" className=" img-fluid w-50" />
                            </Link>
                        </div>
                        <div className=" col-9 d-flex flex-row justify-content-between align-items-center mt-4">
                            <div>
                                <ul className="d-flex flex-row list-unstyled justify-content-start align-items-center">
                                    <li>
                                        <Link to="/" className="custom-link">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="custom-link">Health conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="custom-link active-nav">Lab tests</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="custom-link">Medicines</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="d-flex flex-row list-unstyled" >
                                    <li>
                                        <Link to="/" className="custom-btn">
                                            For patients
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="custom-btn">
                                            For hospitals
                                        </Link>
                                    </li>
                                    <li>
                                    <Link to="/" className="custom-play" ><span><BiLogoPlayStore size="25" /></span> Play store</Link>
                                    </li>
                                </ul>
                            </div>
                           

                        </div>
                    </div>
                </div>
            </header>
            {/* responsive navbar */}
            <header className="mobile-navbar">
                <div className="container">
                    <ul className="d-flex flex-row list-unstyled justify-content-between align-items-center ">
                        <li>
                            <Link to="/">
                                <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/logo_nfrku3.png" alt="logo icon" className=" img-fluid w-25" />
                                <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/logo_name_gqhl6z.png" alt="logo name" className=" img-fluid w-50" />
                            </Link>
                        </li>
                        <li>
                            <button className="btn border-0" onClick={handlemenu} ><FaBars size="25" /></button>
                        </li>
                    </ul>
                </div>
            </header>
            {
                openmenu && (
                    <>
                        <section className="mobile-menu-list">
                            <div className="container">
                                <ul className="d-flex flex-column list-unstyled justify-content-start">
                                    <li>
                                        <Link to="/" className="custom-link">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="custom-link">Health conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="custom-link active-nav">Lab tests</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="custom-link">Medicines</Link>
                                    </li>
                                    <li className="my-4">
                                        <Link to="/" className="custom-btn">
                                            For patients
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="custom-btn">
                                            For hospitals
                                        </Link>
                                    </li>
                                    <li className="my-4">
                                        <Link to="/" className="custom-play" ><span><BiLogoPlayStore size="20" /></span> Play store</Link>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </>
                )
            }

        </>
    )
}

export default Header
