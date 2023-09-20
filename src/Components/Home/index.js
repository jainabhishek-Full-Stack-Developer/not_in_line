import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Expanding from '../Expanding';
import Package from "../Package";
import Choose from '../Choose';
import Hero from '../Hero';

const Home = () => {
    return (
        <>
            <Header />
            <div className="bg-container">
                <Hero />
                <Expanding />
                <Package />
                <Choose />
            </div>
            <Footer />
        </>
    )
}

export default Home
