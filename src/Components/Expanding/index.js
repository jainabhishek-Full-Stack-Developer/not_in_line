import React from "react";
import "./index.css";

const Expanding = () => {
    return (
        <>

            <section>
                <div className="container my-5">
                    <ul className="d-flex flex-lg-row flex-column justify-content-center align-items-center list-unstyled feature-container">
                        <li  className="mb-4 mb-lg-0">
                            <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186467/nabl_ellexj.png" alt="NABL Accredited Labs" />
                            <span>NABL Accredited Labs</span>
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186465/free_sample_gmnvml.png" alt="Free sample collection" />
                            <span>Free sample collection</span>
                        </li>
                    </ul>
                </div>
                <div className="expanding-heaing-container d-none d-lg-block ">
                    <h4 className="expanding-heading">We keep <span>expanding</span>!</h4>
                    <div className="expanding-heading-img-container">
                        <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695186465/design_cyfj1z.png" alt="design" className="expanding-heading-img" />
                    </div>
                </div>
                <div className="expanding-heaing-container d-lg-none">
                    <h4 className="expanding-heading">We keep <span>expanding</span>!</h4>
                    <div className="expanding-heading-img-container">
                        <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695314418/Vector_1_gwophd.png" alt="design" className="expanding-heading-img" />
                    </div>
                </div>
                <div className="container my-5">
                    <div className="d-flex flex-row justify-content-around flex-wrap">
                        <div className="expanding-feature px-lg-5">
                            <span>5+</span>
                            <br />
                            <span>Labs</span>
                        </div>
                        <div className="expanding-feature">
                            <span>100+</span>
                            <br />
                            <span>Collection centers</span>
                        </div>
                        <div className="expanding-feature">
                            <span>1000+</span>
                            <br />
                            <span>Monthly tests</span>
                        </div>
                        <div className="expanding-feature">
                            <span>2200</span>
                            <br />
                            <span>Test menu</span>
                        </div>
                        <div className="expanding-feature">
                            <span>5+</span>
                            <br />
                            <span>Cities present in</span>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Expanding
