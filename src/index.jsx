import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import Linguist from "./Linguist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/linguist",
      element: <Linguist />
    }
]);
ReactDOM.render(
    //<h1>Hello, world!</h1>,
    <App />,
    
    document.getElementById('app'),
    <RouterProvider router={router} />
);