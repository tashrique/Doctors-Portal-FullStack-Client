import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


    const menuItems = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'btn-primary' : ''}>Home</NavLink></li>
        <li><NavLink to='/appointment' className={({ isActive }) => isActive ? 'btn-primary' : ''}>Appointment</NavLink></li>
        <li><NavLink to='/about' className={({ isActive }) => isActive ? 'btn-primary' : ''}>About</NavLink></li>
        <li><NavLink to='/reviews' className={({ isActive }) => isActive ? 'btn-primary' : ''}>Reviews</NavLink></li>
        <li><NavLink to='/login' className={({ isActive }) => isActive ? 'btn-primary' : ''}>Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <NavLink to="/" className={`btn text-xl font-extrabold ${({ isActive }) => isActive ? 'btn-primary' : ''}`} >Doctor&apos;s Portal</NavLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;