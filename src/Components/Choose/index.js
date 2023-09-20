import React, { useState } from 'react';
import "./index.css";

import { AiFillCaretDown } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

const Choose = () => {
    const [openDropdown1, setOpenDropdown1] = useState(false);
    const [openDropdown2, setOpenDropdown2] = useState(false);
    const [openDropdown3, setOpenDropdown3] = useState(false);
    const [openDropdown4, setOpenDropdown4] = useState(false);

    const handleDropdown1 = () => {
        setOpenDropdown1(!openDropdown1);
    }

    const handleDropdown2 = () => {
        setOpenDropdown2(!openDropdown2);
    }

    const handleDropdown3 = () => {
        setOpenDropdown3(!openDropdown3);
    }

    const handleDropdown4 = () => {
        setOpenDropdown4(!openDropdown4);
    }


    return (
        <>
           
                <section className="vh-100 d-none d-lg-block" >
                    <div className="choose-heaing-container">
                        <h4 className="choose-heading">Why  <span>choose</span>us?</h4>
                        <div className="choose-heading-img-container">
                            <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186465/design_cyfj1z.png" alt="design" className="choose-heading-img" />
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <div className="sub-para" >
                                <p>We want you and your heart to be healthy so you can live a happy life!</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='d-none d-xl-block mb-5 pb-5'>
                    <div className="container mb-5 pb-5">
                        <div className="row">
                            <div className="col-6">
                                <div className="row" >
                                    <div className="col-6">
                                        <div className="choose-card shadow" style={{ width: "25rem" }}>

                                            <div className="choose-card-body d-flex flex-row justify-content-around">

                                                <p className="choose-card-title">NABL Accredited Labs</p>
                                                <div className="choose-img">
                                                    <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/ellipse_16_unn1ky.png" alt="NABL Accredited Labs" />
                                                </div>
                                            </div>
                                            <p className="choose-card-text p-3">
                                                Get accurate and safe results from our NABL-certified lab partners.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="choose-card shadow" style={{ width: "25rem", marginLeft: '420px', marginTop: '100px' }}>
                                            <div className="choose-card-body d-flex flex-row justify-content-around">
                                                <p className="choose-card-title">Value experience</p>
                                                <div className="choose-img">
                                                    <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/ellipse_14_tgjdwn.png" alt="Value experience" />
                                                </div>
                                            </div>
                                            <p className="choose-card-text p-3">
                                                Experience seamless care without the hassle of waiting in long lines for an appointment. Book with us for a healthier lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="choose-card shadow" style={{ width: "25rem", marginTop: '300px' }}>
                                            <div className="choose-card-body d-flex flex-row justify-content-around">
                                                <p className="choose-card-title">Timely collections</p>
                                                <div className="choose-img">
                                                    <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/ellipse_13_sthju4.png" alt="Timely collections" />
                                                </div>
                                            </div>
                                            <p className="choose-card-text p-3">
                                                We collect samples timely to prevent treatment delays and ensure your continued well-being.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="choose-card shadow" style={{ width: "25rem", marginLeft: '420px', marginTop: '400px' }}>
                                            <div className="choose-card-body d-flex flex-row justify-content-around">
                                                <p className="choose-card-title">Transparency</p>
                                                <div className="choose-img">
                                                    <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/ellipse_15_mmrpxx.png" alt="Transparency" />
                                                </div>
                                            </div>
                                            <p className="choose-card-text p-3">
                                                Enjoy hassle free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-6 p-5" style={{ marginTop: '-250px' }}>
                                <div style={{ marginLeft: 80 }}>
                                    <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695189348/expressive-young-woman-posing-studio-removebg-preview-transformed_1_is5x1y.png" alt="women" className=" vh-100 img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
          

            {/* responsive */}
            <section className="d-block d-lg-none" >
                <div className="choose-heaing-container">
                    <h4 className="choose-heading">Why  <span>choose</span>us?</h4>
                    <div className="choose-heading-img-container">
                        <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186465/design_cyfj1z.png" alt="design" className="choose-heading-img" />
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="sub-para" >
                            <p>We want you and your heart to be healthy so you can live a happy life!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="d-lg-none d-md-block">
                <div className="container">
                    <div className="text-center">
                        <div className="dropdown-card shadow p-3 my-4">
                            <ul className="d-flex flex-row justify-content-around align-items-center list-unstyled">
                                <li>
                                    <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/ellipse_16_unn1ky.png" alt="NABL Accredited Labs" />
                                </li>
                                <li>
                                    <span>NABL Accredited Labs</span>
                                </li>
                                <li>
                                    {
                                        openDropdown1 ? (<>
                                            <button className="btn border-0" type="button" onClick={handleDropdown1}>
                                                <RxCross1 size="25" />
                                            </button>
                                        </>) : (
                                            <>
                                                <button className="btn border-0" type="button" onClick={handleDropdown1}>
                                                    <AiFillCaretDown size="20" />
                                                </button>
                                            </>)
                                    }



                                </li>
                            </ul>

                            {openDropdown1 && (
                                <div className="text-center">
                                    <p>
                                        Enjoy hassle-free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="dropdown-card shadow p-3 my-4">
                            <ul className="d-flex flex-row justify-content-around align-items-center list-unstyled">
                                <li>
                                    <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/ellipse_13_sthju4.png" alt="Timely collections" />
                                </li>
                                <li>
                                    <span>Timely collections</span>
                                </li>
                                <li>
                                    {
                                        openDropdown2 ? (<>
                                            <button className="btn border-0" type="button" onClick={handleDropdown2}>
                                                <RxCross1 size="25" />
                                            </button>
                                        </>) : (
                                            <>
                                                <button className="btn border-0" type="button" onClick={handleDropdown2}>
                                                    <AiFillCaretDown size="20" />
                                                </button>
                                            </>)
                                    }
                                </li>
                            </ul>

                            {openDropdown2 && (
                                <div className="text-center">
                                    <p>
                                        Enjoy hassle-free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="dropdown-card shadow p-3 my-4">
                            <ul className="d-flex flex-row justify-content-around align-items-center list-unstyled">
                                <li>
                                    <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/ellipse_13_sthju4.png" alt="Value experience" />
                                </li>
                                <li>
                                    <span>Value experience</span>
                                </li>
                                <li>
                                    {
                                        openDropdown3 ? (<>
                                            <button className="btn border-0" type="button" onClick={handleDropdown3}>
                                                <RxCross1 size="25" />
                                            </button>
                                        </>) : (
                                            <>
                                                <button className="btn border-0" type="button" onClick={handleDropdown3}>
                                                    <AiFillCaretDown size="20" />
                                                </button>
                                            </>)
                                    }
                                </li>
                            </ul>

                            {openDropdown3 && (
                                <div className="text-center">
                                    <p>
                                        Enjoy hassle-free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="dropdown-card shadow p-3 my-4">
                            <ul className="d-flex flex-row justify-content-around align-items-center list-unstyled">
                                <li>
                                    <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186466/ellipse_15_mmrpxx.png" alt="Transparency" />
                                </li>
                                <li>
                                    <span>Transparency</span>
                                </li>
                                <li>
                                    {
                                        openDropdown4 ? (<>
                                            <button className="btn border-0" type="button" onClick={handleDropdown4}>
                                                <RxCross1 size="25" />
                                            </button>
                                        </>) : (
                                            <>
                                                <button className="btn border-0" type="button" onClick={handleDropdown4}>
                                                    <AiFillCaretDown size="20" />
                                                </button>
                                            </>)
                                    }
                                </li>
                            </ul>

                            {openDropdown4 && (
                                <div className="text-center">
                                    <p>
                                        Enjoy hassle-free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Choose
