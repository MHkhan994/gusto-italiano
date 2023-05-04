import React, { useContext } from 'react';
import { ScrollRestoration, useLoaderData, useParams } from 'react-router-dom';
import { ChefsContext } from '../Main';
import RecipeCard from '../Recipes/RecipeCard';

const ChefsDetails = () => {
    const { id } = useParams()
    const Allchefs = useContext(ChefsContext)
    const chef = Allchefs.find(c => c.name === id)
    const recipes = useLoaderData()

    const { name, picture, chef_id, likes, experience, bio } = chef

    console.log(recipes, chef);
    return (
        <div className='pt-16'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-10'>
                    <img src={picture} alt="" />
                    <div className="flex flex-col justify-center h-full">
                        <h2 className='text-3xl italic font-semibold'>{name}</h2>
                        <p className='italic text-md pt-3'>{bio}</p>
                        <div className="overflow-x-auto pt-3">
                            <table className="table w-full border">
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>Experience:</th>
                                        <td>{experience} years</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr >
                                        <th>Number of Recipes: </th>
                                        <td>{chef.recipes}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>Number of Likes: </th>
                                        <td>{likes}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <h1 className='text-center text-4xl font-semibold pt-16'>Best of {name}</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 pt-10'>
                    {
                        recipes.map(recipe => <RecipeCard key={recipe.name} recipe={recipe}></RecipeCard>)
                    }
                </div>
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default ChefsDetails;