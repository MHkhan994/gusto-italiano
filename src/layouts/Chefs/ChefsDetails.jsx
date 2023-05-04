import React, { useContext } from 'react';
import { ScrollRestoration, useLoaderData, useParams } from 'react-router-dom';
import { ChefsContext } from '../Main';
import RecipeCard from '../Recipes/RecipeCard';

const ChefsDetails = () => {
    const { id } = useParams()
    const Allchefs = useContext(ChefsContext)
    const chef = Allchefs.find(c => c.name === id)
    const chefRecipes = useLoaderData()

    const { name, picture, recipes, likes, experience, bio } = chef

    return (
        <div className='pt-16'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-10'>
                    <img src={picture} alt="" />
                    <div className="flex flex-col justify-center h-full">
                        <h2 className='text-3xl italic font-semibold'>{name}</h2>
                        <p className='italic text-md pt-3'>{bio}</p>

                        <div className="relative overflow-x-auto border mt-5">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="text-lg px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Experience:
                                        </th>
                                        <td className="px-6 py-4">
                                            {experience}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="text-lg px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Recipes:
                                        </th>
                                        <td className="px-6 py-4">
                                            {recipes}
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="text-lg px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Likes:
                                        </th>
                                        <td className="px-6 py-4">
                                            {likes}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
                <h1 className='text-center text-4xl font-semibold pt-16'>Best of {name}</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 pt-10'>
                    {
                        chefRecipes.map(recipe => <RecipeCard key={recipe.name} recipe={recipe}></RecipeCard>)
                    }
                </div>
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default ChefsDetails;