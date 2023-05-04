import React, { useCallback, useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    const { logIn, logInGoogle, logInGithub } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state ? location.state.from : '/'

    // email pass login
    const handleLogin = e => {
        e.preventDefault()
        setError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(() => navigate(from))
            .catch(error => setError(error.message))
    }

    // google login
    const handleGoogleLogin = () => {
        logInGoogle()
            .then(() => navigate(from))
    }

    // github sign in
    const handleGitLogin = () => {
        logInGithub()
            .then(() => navigate(from))
    }

    return (
        <div className='container'>
            <div className='grid lg:grid-cols-2 pt-16'>
                <div>
                    <img src="/public/login-banner.jpg" alt="" />
                </div>
                <div>

                    <form onSubmit={handleLogin} className='flex flex-col p-8'>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered w-full" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered w-full" required />
                        </div>
                        <button className='btn-primary'>Login</button>
                    </form>

                    <div className='flex flex-col p-8'>
                        <button onClick={handleGoogleLogin} className="text-white  bg-blue-500 px-8 py-2 text-xl rounded-sm border border-transparent">Login With Google <FaGoogle className='inline' /></button>
                        <button onClick={handleGitLogin} className="text-white bg-gray-500 mt-3 px-8 py-2 text-xl rounded-sm border border-transparent">Login With Github <FaGithub className='inline' /></button>
                        <button className='text-xl'>
                            <small>New to Gusta Italiano? <Link className='text-blue-600' to='/register'>Register</Link></small>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;

{/* <input type="password" name='password' placeholder="password" className="input input-bordered" required /> */ }
{/* <input type="email" name='email' placeholder="email" className="input input-bordered" required /> */ }