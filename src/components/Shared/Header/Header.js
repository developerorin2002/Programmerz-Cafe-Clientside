import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    
                </div>
                <Link to='/home'> Home </Link>
                <Link to='/courses'> Courses </Link>
                <Link to='/blog'> Home </Link>
                <Link to='/'> Home </Link>
            </div>
        </div>
    );
};

export default Header;