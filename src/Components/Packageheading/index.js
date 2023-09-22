import React from 'react'
import "./index.css"

const index = () => {
    return (
        <>
            <section className="d-none d-lg-block ">
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
            <section className="d-lg-none d-md-block">
                <div className="mobile-package-heaing-container px-5">
                    <h4 className="mobile-package-heading">Top  <span>packages</span></h4>
                    <div className="mobile-package-heading-img-container">
                        <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1695314418/Vector_1_gwophd.png" alt="design" className="mobile-package-heading-img" />
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="mobile-sub-para" >
                            <p>Explore our wide range of tests! We ensure that you don’t miss out on any chance to keep yourself healthy.</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default index
