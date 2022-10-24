import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/home",
                element:<Home></Home>
            }
        ]
    }
])