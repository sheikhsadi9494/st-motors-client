import React from 'react';

const Footer = () => {
    return (
     <div className=' bg-dark text-white '>
            <div className='d-lg-flex justify-content-evenly py-5 mx-5'>
            <div>
                <h2 className='text-warning'>St Motors</h2>
            </div>
            <div>
                <ul>
                    <li>Listings</li>
                    <li>FQA</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Blog</li>
                    <li>Our team</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <p>Award-winning, family owned dealership <br /> of new and pre-owned vehicles <br /> with several locations across the city. <br /> Lowest prices and the best customer <br /> service guaranteed.</p>
            </div>
            <div>
                <h3>(123) <span className='text-danger'>345-42134</span></h3>
                <p>support@vehica.com</p>
                <p>West 12th Street <br />
                 New York, NY, USA</p>
                 <i className="fab fa-facebook fs-3"></i>
                 <i className="fab fa-whatsapp-square fs-3 mx-3"></i>
                 <i className="fab fa-twitter-square fs-3"></i>
            </div>
        </div>
        <p className='border-top border-2 w-75 mx-auto'></p>
        <div className='py-4'>
           <p className='text-center mx-5'>Copyright © 2021. All rights reserved. Privacy Policy</p>
        </div>
     </div>
    );
};

export default Footer;