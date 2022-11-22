import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemListContainer from "../containers/ItemListContainer"
import MovieDetails from "../components/ItemDetails";

const router = createBrowserRouter([
  
    {
        path: "/",
        element: <ItemListContainer />,
    },
    {
        path: "/category/:categoryId",
        element: <ItemListContainer />,
    },
    {
        path: "/detail/:id",
        element: <MovieDetails />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;

