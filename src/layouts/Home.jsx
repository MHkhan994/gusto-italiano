import React, { createContext } from 'react';
import Carosol from './Carosol';
import Chefs from './Chefs/Chefs'


const Home = () => {
    return (
        <div>
            <div className=''>
                {/* <Carosol></Carosol> */}
                <Chefs></Chefs>
            </div>
        </div>
    );
};

export default Home;