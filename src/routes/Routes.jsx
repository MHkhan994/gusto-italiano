import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../layouts/Home";
import Blogs from "../layouts/Blogs";
import Recipes from "../layouts/Recipes/Recipes";
import Chefs from "../layouts/Chefs/Chefs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/')
            },
            {
                path: '/chefs',
                element: <Chefs></Chefs>
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