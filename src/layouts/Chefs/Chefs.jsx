import React, { useContext } from 'react';
import { ChefsContext } from '../Main';
import ChefsCard from './ChefsCard';

const Chefs = () => {
    const chefs = useContext(ChefsContext)
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold pt-16'>Our Amaizing Chefs</h1>
            <div className='pt-10 container grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center'>
                {
                    chefs.map(chef => <ChefsCard key={chef.name} chef={chef}></ChefsCard>)
                }
            </div>
        </div>
    );
};

export default Chefs;