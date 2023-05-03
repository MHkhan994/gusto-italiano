import React from 'react';
import Carosol from './Carosol';
import { useLoaderData } from 'react-router-dom';
import Chefs from './Chefs/Chefs';


const Home = () => {
    const chefs = useLoaderData()
    return (
        <div>
            <div className='bg-black'>
                <Carosol></Carosol>
                <Chefs key={chefs.chef_id} ></Chefs>
            </div>
        </div>
    );
};

export default Home;