import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-7 bg-black'>
            <div className='container'>
                <div className='flex justify-between text-white items-center'>
                    <Link to='/' className='text-xl lg:text-3xl font-semibold'>Gusto Italiano</Link>
                    <div className='flex justify-between gap-10 text-lg items-center'>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'border-b-4 border-[#0000]'} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'border-b-4 border-[#0000]'} to='/blogs'>Blogs</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'border-b-4 border-[#0000]'} to='/recipes'>Recipes</NavLink>
                    </div>
                    <div>
                        <Link className='btn-primary' to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;