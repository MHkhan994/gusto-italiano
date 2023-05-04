import React, { useCallback, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { logIn } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleLogin = e => {
        e.preventDefault()
        setError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => console.log(result.user))
    }

    return (
        <div className='container'>
            <div className='grid lg:grid-cols-2 pt-16'>
                <div>
                    <img src="/public/login-banner.jpg" alt="" />
                </div>
                <div>
                    <form onSubmit={handleLogin} className='flex flex-col h-full justify-center gap-4 px-8'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label pt-3">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <button className='text-xl'>
                            <small>New to Gusta Italiano? <Link className='text-blue-600' to='/register'>Register</Link></small>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;