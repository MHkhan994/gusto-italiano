import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../layouts/Home";
import Blogs from "../layouts/Blogs";
import Recipes from "../layouts/Recipes/Recipes";
import ChefsDetails from "../layouts/Chefs/ChefsDetails";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Login/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch('https://gusto-italiano-server-mhkhan994.vercel.app/'),
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/chefs/:id',
                element: <PrivateRoute><ChefsDetails></ChefsDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://gusto-italiano-server-mhkhan994.vercel.app/recipes/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/recipes',
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: () => fetch('https://gusto-italiano-server-mhkhan994.vercel.app/recipes')
            }
        ]
    }
])

export default router