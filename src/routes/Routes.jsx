import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../layouts/Blogs";
import Recipes from "../layouts/Recipes/Recipes";
import ChefsDetails from "../layouts/Chefs/ChefsDetails";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Login/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../layouts/Errorpage/ErrorPage";
import Home from "../layouts/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('https://gusto-italiano-server-mhkhan994.vercel.app/'),
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://gusto-italiano-server-mhkhan994.vercel.app/reviews')
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