import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../../Layouts/CourseLayout/CourseLayout";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import Courses from "../../Pages/Courses/Courses";
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
    },
    {
        path:'/courses',
        element:<CourseLayout></CourseLayout>,
        errorElement:<Error></Error>,
        loader:()=>fetch('http://localhost:5000/category'),
        children:[
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:()=>fetch('http://localhost:5000/')
            }
        ]
    }
])