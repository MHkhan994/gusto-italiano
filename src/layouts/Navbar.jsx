import React, { useCallback, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => navigate('/'))
            .catch(error => console.log(error))
    }

    return (
        <div className='py-7 bg-black'>
            <div className='container relative'>
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
        </div>
    );
};

export default Navbar;