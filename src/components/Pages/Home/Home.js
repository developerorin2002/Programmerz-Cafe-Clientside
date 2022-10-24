import React from 'react';
import './Home.css'
import programmer from '../../Assets/Images/programmer.svg';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home-main'>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className='text-white py-3'>Master everything you need to become a Problem Solver</h1>
                       <div>
                        <button className='btn-course'><Link to='/courses' className='mx-2' style={{'text-decoration':'none' , 'color':'white'}}>Browse Courses</Link><FaArrowRight/></button>
                       </div>
                    </div>
                    <div className="col-lg-6">
                        <img className='w-100' src={programmer} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;