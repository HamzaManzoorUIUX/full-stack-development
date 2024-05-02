import React from 'react';
import './assets/scss/main.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import { GlobalProvider } from './Context/GlobalContext';

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/aboutus",
            element: <Aboutus />,
        },
        {
            path: "*",
            element: <h1>404 page not found</h1>,
        },
    ])
    return (
        <GlobalProvider>
            <RouterProvider router={router} />
        </GlobalProvider>
    );
};

export default App;