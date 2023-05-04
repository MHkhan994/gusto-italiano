import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes';
import AuthProvider from './Provider/AuthProvider';
import Main from './layouts/Main';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Main></Main>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
