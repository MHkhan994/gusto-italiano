import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import { FaHeart } from 'react-icons/fa';

import '@smastrom/react-rating/style.css'


const RecipeCard = ({ recipe }) => {

    const { image, recipe_name, ingredients, cooking_method, chef_id, rating } = recipe
    console.log((recipe));

    return (
        <div className='border border-orange-500 p-4 rounded-md'>
            <img className='rounded-md' src={image} alt="" />
            <h2 className='text-2xl font-bold pt-4 text-rose-700 border-b pb-3'>{recipe_name}</h2>
            <p className='text-gray-600 text-lg pt-3 border-b pb-3'><span className='text-black font-semibold'>Ingredients:</span> {ingredients}</p>
            <p className='text-gray-600 text-lg pt-3'><span className='text-black font-semibold'>Ingredients:</span> {ingredients}</p>
            <p><span className='text-black font-semibold'>Cooking method:</span> {cooking_method}</p>
            <div className='pt-3 flex items-center gap-2'>
                <p>Rating: </p>
                <p >{rating}</p>
                <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                <FaHeart />
            </div>
            <button className="text-blue-600 pt-3">
                <Link to={`/chefs/${chef_id}`}>Chef: {chef_id}</Link>
            </button>
        </div>
    );
};

export default RecipeCard;