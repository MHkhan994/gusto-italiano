import React, { createContext } from 'react';
import Chefs from '../Chefs/Chefs'
import Header from '../Header/Header';
import Reviews from './Reviews';
import { useLoaderData } from 'react-router-dom';
import Welcome from './Welcome';


const Home = () => {
    const reviews = useLoaderData()
    return (
        <div>
            <div className=''>
                <Header></Header>
                <Welcome></Welcome>
                <Chefs></Chefs>
                <Reviews reviews={reviews}></Reviews>
            </div>
        </div>
    );
};

export default Home;