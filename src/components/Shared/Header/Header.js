import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../Assets/Images/profile.png'
import { FaRegMoon , FaSignOutAlt} from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
const Header = () => {
    return (
        <div className='main-header'>
            <Navbar className='header' expand="lg">
                <Container>
                    <Navbar.Brand><Link to='/' className='text-center logo-custom text-white'><h3>Programmerz Cafe</h3></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        navbarScroll>
                            <div className="header-link d-flex justify-content-center">
                               <p className='mb-0'><Link to='/home'> Home </Link></p>
                                <p className='mb-0'><Link to='/courses'> Courses </Link></p>
                                <p className='mb-0'><Link to='/blog'> Blog </Link></p>
                                <p className='mb-0'> <Link to='/login'> Login </Link></p>
                                <p className='mb-0'><Link to='/register'> Register </Link></p>
                            </div>
                    </Nav>
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-2">
                            <div className='toggle-theme'>
                                    <p className='text-white dark-icon'><FaRegMoon/> </p>
                            </div>
                        </div>
                           <div className="col-lg-10">
                                <div className="profile">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-2">
                                            <img className='profile-img' src={profile} alt="" />
                                        </div>
                                        <div className="col-lg-10 py-2">
                                            <p className='mb-0 text-white'>Fahim Muntasir Orin</p>
                                            <div>
                                                <button className='log-out mt-2'>SignOut <FaSignOutAlt/></button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                           </div>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;