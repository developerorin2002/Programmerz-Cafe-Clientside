import React, { useContext, useRef } from 'react';
import './Checkout.css';
import checkout from '../../Assets/Images/checkout.svg'
import { useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { LearningAuthContext } from '../../AuthContext/AuthContext';
const Checkout = () => {
    const {user} = useContext(LearningAuthContext);
    const {image_url,id,course_fee,course_name} = useLoaderData();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:"Programmerz Cafe Course Bill"
    });
    

    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-5">
                        <img src={checkout} className="w-100 img-fluid py-4" alt="" />
                        <div className="text-center">
                        <button onClick={handlePrint} className='bill-btn'>Dowload Bill</button>
                    </div>
                    </div>
                    <div className="col-lg-7" ref={componentRef}>
                        <div className='pdf-border'>
                            
                            <div>
                                <h2 className='text-center mt-2 text-p'>Programmerz Cafe</h2>
                                <h4>BILLING DETAILS</h4>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className=' custom-border-pdf'>Name : {user.displayName}</h5>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className='custom-border-pdf'>Product ID : #45453435345</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5 className=' custom-border-pdf'>Product : {course_name}</h5>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className='custom-border-pdf'>Course Fee : {course_fee}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className='custom-border-pdf'>Course Id : {id}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className='custom-border-pdf'>Total : {course_fee}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h6 className='custom-border-pdf'>Email : {user.email}</h6>
                                    </div>
                                    <div className="col-lg-6">
                                        <h6 className='custom-border-pdf'>Email Status : {user.emailVerified ? <>verified</> : <>Not verified</>}</h6>
                                    </div>
                                    <div className="col-lg-12 d-flex align-items-center">
                                       <p className='custom-border-pdf'>Course Photo :</p> <img src={image_url} className="w-25" alt="" />
                                    </div>
                                    <div className="col-lg-12">
                                        <h6 className='custom-border-pdf'>Thanks To Purchase Our Course </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Checkout;