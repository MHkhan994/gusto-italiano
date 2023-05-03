import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ChefsContext } from '../Main';

const ChefsDetails = () => {
    const { id } = useParams()
    const Allchefs = useContext(ChefsContext)
    const chef = Allchefs.find(c => c.name === id)
    const recipes = useLoaderData()


    console.log(recipes, chef);
    return (
        <div>

        </div>
    );
};

export default ChefsDetails;