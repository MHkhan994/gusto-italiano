import React, { useState } from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Recipes = () => {
    const recipes = useLoaderData()
    const [show, setShow] = useState(false)

    return (
        <div className='container'>
            <h1 className='text-center text-4xl font-semibold lg:pt-16 pt-8'>Featured Recipes</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 lg:pt-10 pt-5'>
                {
                    show ? recipes.map(recipe => <RecipeCard key={recipe.recipe_name} recipe={recipe}></RecipeCard>) :
                        recipes.slice(0, 4).map(recipe => <RecipeCard key={recipe.recipe_name} recipe={recipe}></RecipeCard>)
                }
            </div>
            {
                !show && <div className='flex justify-center pt-5'><button onClick={() => setShow(true)} className='btn-primary'>Show All</button></div>
            }
            <ScrollRestoration />
        </div>
    );
};

export default Recipes;