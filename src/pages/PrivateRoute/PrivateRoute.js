import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useContext';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, isLoading} = useAuth();
    if(isLoading){
       return <div className='text-center my-5'><Spinner animation="border" /></div> ;
    }
    return user.email ? children : <Navigate to="/login" state={{from: location}} />;
};

export default PrivateRoute;