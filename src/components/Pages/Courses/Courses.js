import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2 className='text-center py-2 text-premium'>OUR PREMIUM COURSES</h2>
           <div className="row mt-4 mx-3 g-3 ">
                {
                    allCourses.map(course=><Course course={course} key={course.id}></Course>)
                }
           </div>
        </div>
    );
};

export default Courses;