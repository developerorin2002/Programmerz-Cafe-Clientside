import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const allCourses = useLoaderData();
    console.log(allCourses)
    return (
        <div>
           <div className="row mt-4 mx-2 g-3">
                {
                    allCourses.map(course=><Course course={course} key={course.id}></Course>)
                }
           </div>
        </div>
    );
};

export default Courses;