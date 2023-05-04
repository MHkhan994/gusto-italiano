import React, { createContext } from 'react';
import Chefs from './Chefs/Chefs'
import Header from './Header/Header';


const Home = () => {
    return (
        <div>
            <div className=''>
                <Header></Header>
                <Chefs></Chefs>
            </div>
        </div>
    );
};

export default Home;