import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import Category from './components/Category';
const router = createBrowserRouter([
    {
        path:"",
        element:<App />,
        children:[
            {path:"login",element:<Login />},
            {path:"register",element:<Register />},
            {path:"category",element:<Category />}

        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
