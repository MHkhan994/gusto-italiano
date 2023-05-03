import React, { createContext } from 'react';
import Navbar from './Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';

export const ChefsContext = createContext()

const Main = () => {

    const chefs = useLoaderData()

    return (
        <ChefsContext.Provider value={chefs}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </ChefsContext.Provider>
    );
};

export default Main;