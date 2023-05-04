import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')


    const handleRegister = e => {
        e.preventDefault()
        setError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const name = form.name.value;

        if (!/(?=.*[0-9])/.test(password)) {
            setError('password should contain at least one number')
            return
        }
        else if (password.length < 8) {
            setError('password should be atleast 8 characters')
            return
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('password should contain at least one uppercase')
            return
        }
        createUser(email, password)
            .then(() => {
                toast.success('Registration successfull, go to Login', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <div className='container'>
                <div className='grid lg:grid-cols-2 pt-16'>
                    <div>
                        <img src="/public/register-banner.jpg" alt="" />
                    </div>
                    <div>
                        <form onSubmit={handleRegister} className='flex flex-col h-full justify-center gap-4 px-8'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Your Photo" className="input input-bordered" required />
                            </div>
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
                                <p className='text-red-500'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <button className='text-xl'>
                                <small>Already have an Account? <Link className='text-blue-600' to='/login'>Login</Link></small>
                            </button>

                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Register;