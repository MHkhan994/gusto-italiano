import React from 'react';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {
    const { name, picture, chef_id, likes, experience, recipes } = chef
    return (
        <div className='border border-gray-100 shadow-lg p-2'>
            <img src={picture} alt="" />
            <h2 className='text-2xl text-center pb-3 pt-3 italic'>{name}</h2>
            <p className='py-1 border-b mb-1'>Recipes: {recipes}</p>
            <p className='py-1 border-b mb-1'>Experience: {experience}</p>
            <p className='py-1 border-b mb-1'>Likes: {likes}</p>
            <button className='btn-primary mt-4'>
                <Link to={`/chefs/${chef_id}`}>Show Recipes</Link>
            </button>
        </div>
    );
};

export default ChefsCard;