import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container grid lg:grid-cols-2'>
            <img src="/public/error copy.png" alt="" />
            <div className='flex flex-col h-full justify-center'>
                <h2 className='text-4xl'>Opps! Seems like you have lost the way</h2>
                <h3 className='text-2xl py-5'>Lets go back to: </h3>
                <Link className='btn-primary text-center' to='/'>Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;