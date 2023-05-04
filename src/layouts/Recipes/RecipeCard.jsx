import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@smastrom/react-rating/style.css'


const RecipeCard = ({ recipe }) => {

    const { image, recipe_name, ingredients, cooking_method, chef_id, rating } = recipe
    const [isDisabled, setIsDisabled] = useState(false)
    console.log(recipe);

    const handleFavourite = e => {
        toast.success('A favourite Recipe', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
        setIsDisabled(true)
    }

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
                <button disabled={isDisabled} onClick={handleFavourite} className='ms-auto text-xl'><FaHeart className={isDisabled ? 'text-red-700' : ''}></FaHeart></button>
            </div>
            <button className="text-blue-600 pt-3">
                <Link to={`/chefs/${chef_id}`}>Chef: {chef_id}</Link>
            </button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default RecipeCard;