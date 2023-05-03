import React from 'react';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {
    const { name, picture, chef_id, likes, experience } = chef
    return (
        <div className='border border-gray-100 shadow-lg p-2'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <button className='btn-primary'>
                <Link to={`/chefs/${chef_id}`}>Show Recipes</Link>
            </button>
        </div>
    );
};

export default ChefsCard;