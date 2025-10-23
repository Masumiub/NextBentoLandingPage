import React, { use, useEffect, useState } from 'react';

import { Link, NavLink, useNavigate } from 'react-router';
import { CgDarkMode } from "react-icons/cg";


const Navbar = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };



    return (
        
        <div className='mx-auto flex justify-center w-full' >
            
                <div className="navbar px-3 mt-3 w-full md:max-w-7xl fixed top-0 z-50 bg-base-100 shadow-2xl rounded-2xl">

                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li> Home </li>
                                <li> Features </li>
                                <li> Pricing </li>
                                <li> FAQs </li>
                                <li> Portfolio </li>

                            </ul>
                        </div>

                        <p to='/' className="text-3xl font-bold ml-2 md:block"> <span className='text-pink-500'>Next</span> Bento</p>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5">
                            <li> Home </li>
                            <li> Features </li>
                            <li> Pricing </li>
                            <li> FAQs </li>
                            <li> Portfolio </li>

                        </ul>
                    </div>
                    <div className="navbar-end gap-3">

                        <div className="form-control mt-1">
                            <label className="label cursor-pointer">
                                <CgDarkMode size={25} />
                                <input type="checkbox" className="toggle theme-controller" onChange={toggleTheme} checked={theme === 'dark'} />
                            </label>
                        </div>


                    </div>

                </div>
            
        </div>
        
    );
};

export default Navbar;