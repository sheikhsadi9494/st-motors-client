import React from 'react';
import { Outlet } from 'react-router-dom';

const MakePayment = () => {
    return (
        <div className='bodyHeight'>
            <h1 className='text-center'>Payment method comming soon</h1>
            <Outlet />
        </div>
    );
};

export default MakePayment;