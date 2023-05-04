import React, { createContext } from 'react';
import Navbar from './Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Chefs/Footer';

export const ChefsContext = createContext()

const Main = () => {

    const chefs = useLoaderData()

    return (
        <ChefsContext.Provider value={chefs}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </ChefsContext.Provider>
    );
};

export default Main;