import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <>
            <div className="max-w-[1440px] mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </>

    );
};

export default Main;