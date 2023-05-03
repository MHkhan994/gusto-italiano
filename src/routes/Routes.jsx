import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../layouts/Home";
import Blogs from "../layouts/Blogs";
import Recipes from "../layouts/Recipes/Recipes";
import ChefsDetails from "../layouts/Chefs/ChefsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch('http://localhost:5000/'),
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chefs/:id',
                element: <ChefsDetails></ChefsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/recipes',
                element: <Recipes></Recipes>,
                loader: () => fetch('http://localhost:5000/recipes')
            }
        ]
    }
])

export default router