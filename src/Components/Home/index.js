import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Expanding from '../Expanding';
import Package from "../Package";
import Choose from '../Choose';
import Hero from '../Hero';
import PackageHeading from '../Packageheading';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Expanding />
            <PackageHeading />
            <div className="bg-container">
                <Package />
                <Choose />
            </div>
            <Footer />
        </>
    )
}

export default Home
