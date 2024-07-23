import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./layout/Layout.tsx";

const router = createBrowserRouter([
    {
        id: 'root',
        path: '/',
        element: <Layout />,
        children: [
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!)
.render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>,
)
