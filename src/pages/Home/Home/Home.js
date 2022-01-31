import React from 'react';
import { Navigate } from 'react-router-dom';
import Navigation from '../../Shered/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Products></Products>
            <Reviews></Reviews>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;