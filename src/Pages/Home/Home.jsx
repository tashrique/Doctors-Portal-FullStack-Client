import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Hero from './Hero';
import AppointmentHome from './AppointmentHome';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Services></Services>
            <Hero></Hero>
            <AppointmentHome></AppointmentHome>
        </div>
    );
};

export default Home;