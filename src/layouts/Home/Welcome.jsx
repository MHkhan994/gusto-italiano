import React from 'react';

const Welcome = () => {
    return (
        <div className='container grid grid-cols-1 lg:grid-cols-2 pt-16'>
            <img className='shadow-lg' src="welcome.jpg" alt="" />
            <div className='h-full border shadow-lg justify-center flex flex-col py-5 px-6 gap-6 text-center'>
                <h1 className='font-serif text-5xl text-center'>Welcome to Gusto Italiano</h1>
                <p className='italic text-2xl'>"Mangia bene, ridi spesso, ama molto"-- Eat well, laugh often, love much</p>
            </div>
        </div>
    );
};

export default Welcome;