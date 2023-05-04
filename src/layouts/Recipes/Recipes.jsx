import React from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Recipes = () => {
    const recipes = useLoaderData()

    return (
        <div>
            <h1 className='text-center text-4xl font-semibold pt-16'>Featured Recipes</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 container gap-5 pt-10'>
                {
                    recipes.map(recipe => <RecipeCard key={recipe.name} recipe={recipe}></RecipeCard>)
                }
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default Recipes;