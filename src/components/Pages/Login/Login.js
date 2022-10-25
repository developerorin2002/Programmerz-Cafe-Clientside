import React from 'react';
import loginImg2 from '../../Assets/Images/loginImg2.svg';
import { FaUser } from 'react-icons/fa';
import googleImg from '../../Assets/icons/google.png';
import githubImg from '../../Assets/icons/github.png'
import './Login.css'
const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 justify-content-center py-4">
                        <img src={loginImg2} className="w-50" alt="" />
                    </div>
                    <div className="col-lg-4 py-4">
                        <div className='login-form px-2'>
                            <h3 className='text-center pt-3'>SIGN IN</h3>
                            <span className='user-profile'><FaUser/></span>
                            <form>
                               <div>
                                <input type="email" name='email' className='email w-100 mt-2 mb-2' placeholder='Your Email'/>
                               </div>
                               <div>
                                <input type="password" name='password' className='password w-100 mt-2 mb-2' placeholder='Your Password' />
                               </div>
                               <button type='submit' className='login-btn '>LogIn</button>
                            </form>
                            <div className='mt-2'>
                                <p className='icon-border'> <img src={googleImg} className="google-icon" alt="" /> continue with google</p>
                            </div>
                            <div className='mt-2'>
                                <p className='icon-border'> <img src={githubImg} className="google-icon" alt="" /> continue with github</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;