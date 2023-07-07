import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Footer from '../shared/Footer';
import Banner4 from './Banner4';

const Home = () => {
    return (
        <section className="md:mx-20">
            <Banner/>
            {/* <Banner2/>
            <Banner3/>
            <Banner4/> */}
        </section>
    );
};

export default Home;