import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Book from "../components/Book/Book";
import Rooms from "../components/Rooms/Rooms";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Rooms/>
            },
            {
                path:'/book',
                element:<PrivateRoute><Book/></PrivateRoute>
            }
        ]
    },
    {
        path:'/register',
        element:<Register/>,
    },
    {
        path:'/login',
        element:<Login/>,
    },
   
])

export default router