import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='shadow-md rounded-t-2xl bg-base-200'>
            <footer className="footer lg:footer-horizontal text-base-content px-5 pt-40 pb-40 mx-auto max-w-7xl" >

                <nav>
                    <div className='flex items-center'>
                    <img src="vite.svg" alt="logo" />
                    <p className="text-3xl font-bold ml-2"> <span className='text-pink-500'>Next</span> Bento</p>
                    </div>

                    <p className='my-3'>Sign up for a free account and you'll have immediate access to our AI prompt library. <br /> Start creating content right away with our pre-built templates.</p>
                   
                    <div className='flex items-center gap-2'>
                    <div className='p-3 bg-blue-100 rounded-lg'><IoIosCall className='text-black'/> </div>
                    <p>+88 000 1111 2233 </p>
                    </div>

                    <div className='flex items-center gap-2 mt-3'>
                    <div className='p-3 bg-blue-100 rounded-lg'><MdEmail className='text-black'/></div>
                    <p>nextBento@contact.com</p>
                    </div>

                    <div className='flex items-center gap-2 mt-3'>
                    <div className='p-3 bg-blue-100 rounded-lg'><FaLocationDot className='text-black'/></div>
                    <p>1216/1/A, Street No - 98, Gulshan <br />
                    Dhaka, Bangladesh</p>
                    </div>

                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                        <p to='/'>Home</p>
                        <p to='/community'>Community</p>
                        <p to='/aboutUs'>About us</p>
                        <p to='/allTrips'>Trips</p>
                </nav>
                <nav>
                    <h6 className="footer-title">General</h6>
                    <p to='/aboutUs'>Our Team</p> 
                    <p to='/Conditions' className="link link-hover">Terms & conditions</p>
                    <p to='/aboutUs'>Contact Us</p> 
                    
                    
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join mt-2">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn bg-blue-500 text-white join-item">Join</button>
                        </div>
                    </fieldset>

                    <h6 className="footer-title">Follow us: </h6>
                    <div className='flex gap-3'>
                        
                        <a href="https://www.facebook.com/masum.musfique.2025" target='_blank'><FaFacebook size={20}/></a>
                        <a href="https://www.linkedin.com/in/musfique-77-masum/" target='_blank'><FaLinkedinIn size={20}/></a>
                        <a href="https://www.x.com/" target='_blank'><FaTwitter size={20}/></a>
                    </div>
                </form>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center text-base-content py-8 px-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by nextBento Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;