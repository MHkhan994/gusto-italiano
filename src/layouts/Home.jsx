import React, { createContext } from 'react';
import Carosol from './Carosol';



const Home = () => {
    return (
        <div>
            <div className='bg-black'>
                <Carosol></Carosol>
                <Chefs></Chefs>
            </div>
        </div>
    );
};

export default Home;