import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()


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
            .then((result) => {
                result.user && updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                toast.success('Registration successfull', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate('/login')
                }, 1000);
            })
            .catch(error => setError(error.message))
    }


    return (
        <div>
            <div className='container'>
                <div className='grid lg:grid-cols-2 pt-16'>
                    <div>
                        <img src="/public/register-banner.jpg" alt="" />
                    </div>
                    <div>
                        <form onSubmit={handleRegister} className='flex flex-col p-8'>
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="text" name='photo' placeholder="Your Photo" className="input input-bordered w-full" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered w-full" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered w-full" required />
                            </div>
                            <button className='btn-primary'>Register</button>
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

{/* <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required /> */ }
{/* <input type="text" name='photo' placeholder="Your Photo" className="input input-bordered" required /> */ }