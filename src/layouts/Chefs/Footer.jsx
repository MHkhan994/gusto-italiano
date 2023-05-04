import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#111]'>
            <div className='text-center lg:text-start mt-16 container grid lg:grid-cols-4 grid-cols-1 text-white py-10 gap-7'>
                <div>
                    <h2 className='text-2xl font-semibold'>Gusto Italiano</h2>
                    <p className='py-5'>Taste the Passion of Italy</p>
                    <div className='flex gap-3 text-xl justify-center lg:justify-start'>
                        <FaFacebook className='text-blue-500'></FaFacebook>
                        <FaInstagram className='text-rose-500'></FaInstagram>
                        <FaTwitter className='text-blue-400'></FaTwitter>
                        <FaYoutube className='text-red-700'></FaYoutube>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl pb-2'>Usefull Links</h3>
                    <p className='py-3'>Home</p>
                    <p className='py-3'>About Us</p>
                    <p className='py-3'>Services</p>
                    <p className='py-3'>Privacy policy</p>
                </div>

                <div className=''>
                    <h3 className='text-xl pb-4'>Foods</h3>
                    <p className='py-1'>Antipasti</p>
                    <p className='py-1'>Contorni</p>
                    <p className='py-1'>Insalate</p>
                    <p className='py-1'>Dolci</p>
                    <p className='py-1'>Panini</p>
                    <p className='py-1'>Pizze</p>
                </div>

                <div>
                    <h3 className='text-xl pb-2'>Our NewSetteler</h3>
                    <p className='py-3 pb-4'>Welcome to our restaurant! Where every dish is a delicious journey and every customer is a cherished guest.</p>
                    <button className='btn-primary'>
                        <Link to='/register'>Register</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;