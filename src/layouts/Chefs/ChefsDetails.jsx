import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ChefsContext } from '../Main';
import RecipeCard from '../Recipes/RecipeCard';

const ChefsDetails = () => {
    const { id } = useParams()
    const Allchefs = useContext(ChefsContext)
    const chef = Allchefs.find(c => c.name === id)
    const recipes = useLoaderData()

    const { name, picture, chef_id, likes, experience } = chef

    console.log(recipes, chef);
    return (
        <div className='pt-16'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-10'>
                    <img src={picture} alt="" />
                    <div className="flex flex-col justify-center h-full">
                        <h2 className='text-3xl italic font-semibold'>{name}</h2>
                    </div>
                </div>
                <h1 className='text-center text-4xl font-semibold pt-16'>Recipes of {name}</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 pt-10'>
                    {
                        recipes.map(recipe => <RecipeCard key={recipe.name} recipe={recipe}></RecipeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefsDetails;