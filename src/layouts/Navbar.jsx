import React, { useCallback, useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaBars, FaMinus } from 'react-icons/fa';
import { BiX } from "react-icons/bi";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
                setIsOpen(false)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='py-7 bg-black relative'>
            <div className='container relative hidden lg:block'>
                <div className='flex justify-between text-white items-center'>
                    <Link to='/' className='text-xl lg:text-3xl font-semibold'>Gusto Italiano</Link>
                    <div className='flex justify-between gap-10 text-lg items-center'>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'border-b-4 border-[#0000]'} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'border-b-4 border-[#0000]'} to='/blogs'>Blogs</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'border-b-4 border-[#0000]'} to='/recipes'>Recipes</NavLink>
                    </div>
                    <div className='flex items-center gap-5'>
                        {
                            user?.photoURL ? <>
                                <img className='userImg h-7 w-7 rounded-full' src={user.photoURL}></img>
                                <p className='hide absolute -bottom-7 right-32 bg-white text-black rounded-sm px-3 py-1'>{user.displayName}</p>
                            </> :
                                ''
                        }
                        {
                            user ? <button onClick={handleLogOut} className='btn-primary'>Logout</button> :
                                <Link className='btn-primary' to='/login'>Login</Link>
                        }
                    </div>
                </div>
            </div>
            <div className='lg:hidden container'>
                <div className='flex justify-between'>
                    <Link to='/' className='text-2xl text-white font-semibold'>Gusto Italiano</Link>
                    <button className='inline'
                        onClick={() => setIsOpen(true)}
                    >
                        <FaBars className='w-8 h-8 text-white' />

                    </button>
                </div>
                {isOpen && (
                    <div className='w-full absolute top-0 left-0 z-20 bg-gray-100 shadow-lg'>
                        <div className='text-black container py-5 relative'>
                            <Link to='/' className='text-2xl font-semibold'>Gusto Italiano</Link>
                            <button className='absolute right-0'
                                onClick={() => setIsOpen(false)}
                            >
                                <BiX className='w-8 h-8 text-black text-2xl' />

                            </button>
                            <div className='py-4 flex flex-col gap-4 text-lg'>
                                <NavLink className={({ isActive }) => isActive ? 'active' : 'border-b-1 border-[#0000]'} onClick={() => setIsOpen(false)} to='/'>Home</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'active' : 'border-b-1 border-[#0000]'} onClick={() => setIsOpen(false)} to='/blogs'>Blogs</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'active' : 'border-b-1 border-[#0000]'} onClick={() => setIsOpen(false)} to='/recipes'>Recipes</NavLink>
                            </div>
                            <div className='flex items-center gap-5'>
                                {
                                    user?.photoURL ? <>
                                        <img className='userImg h-7 w-7 rounded-full' src={user.photoURL}></img>
                                        <p className='hide absolute -bottom-2 left-5 bg-white text-black rounded-sm px-3 py-1'>{user.displayName}</p>
                                    </> :
                                        ''
                                }
                                {
                                    user ? <button onClick={handleLogOut} className='btn-primary'>Logout</button> :
                                        <Link className='btn-primary' to='/login'>Login</Link>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;