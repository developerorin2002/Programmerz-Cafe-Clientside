import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../../Layouts/CourseLayout/CourseLayout";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

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
            },
            {
                path:'/course/:id',
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`),
                element:<CourseDetails></CourseDetails>
            },
            {
                path:'checkout/:id',
                element:<Checkout></Checkout>,
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            }
            ,
            {
                path:'/register',
                element:<Register></Register>
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
            ,
            {
                path:'/courses/:name',
                element:<Courses></Courses>,
                loader:({params})=>fetch(`http://localhost:5000/courses/${params.name}`)
            }
            
        ]

    }
   
    
    
])