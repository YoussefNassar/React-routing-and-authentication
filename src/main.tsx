import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import FirstPage from "./pages/FirstPage.tsx";
import Secondpage from "./pages/Secondpage.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
    {
        id: 'root',
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: () : Object => {
                    return {
                        name: "youssef"
                    }
                },
            },
            {
                path: "/firstpage",
                element: <FirstPage/>,
                // loader: homeLoader(queryClient),
            },
            {
                path: "/secondpage",
                element: <Secondpage/>,
                // loader: homeLoader(queryClient),
            },
            {
                path: "*",
                element: <NotFound/>,
                // loader: homeLoader(queryClient),
            }
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!)
.render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>,
)
