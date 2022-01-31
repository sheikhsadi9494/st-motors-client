import React from 'react';

const WhyUs = () => {
    return (
        <div className='d-lg-flex justify-content-evenly my-5 bg-info p-4'>
            <div className='p-4 bg-light my-3 rounded'>
                <h1 className='text-center'><i className="fas fa-award text-danger"></i></h1>
                <h3 className='my-4 text-center'>Wide range of brands</h3>
                <p className='text-center text-secondary'>We have 100++ world-class car brand</p>
            </div>
            <div className='bg-light p-4 my-3 rounded'>
                <h1 className='text-center text-success'><i className="far fa-handshake"></i></h1>
                <h3 className='my-4 text-center'>Trusted by our clients</h3>
                <p className='text-center text-secondary'>Our every each one clients is happy clients</p>
            </div>
            <div className='bg-light p-4 my-3 rounded'>
                <h1 className='text-center'><i className="fas fa-hand-holding-usd text-primary"></i></h1>
                <h3 className='my-4 text-center'>Fast & easy financing</h3>
                <p className='text-center text-secondary'>We can help with your financing plan</p>
            </div>
        </div>
    );
};

export default WhyUs;