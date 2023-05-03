import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {

    const { image, recipe_name, ingredients, cooking_method, chef_id } = recipe
    console.log((recipe));

    return (
        <div className='border border-orange-500 p-4 rounded-md'>
            <img className='rounded-md' src={image} alt="" />
            <h2 className='text-2xl font-bold pt-4 text-rose-700 border-b pb-3'>{recipe_name}</h2>
            <p className='text-gray-600 text-lg pt-3 border-b pb-3'><span className='text-black font-semibold'>Ingredients:</span> {ingredients}</p>
            <p className='text-gray-600 text-lg pt-3'><span className='text-black font-semibold'>Ingredients:</span> {ingredients}</p>
            <p><span className='text-black font-semibold'>Cooking method:</span> {cooking_method}</p>
            <button className="text-blue-600 pt-3">
                <Link to={'/chefs'}>Chef: {chef_id}</Link>
            </button>
        </div>
    );
};

export default RecipeCard;