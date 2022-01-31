import React, { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useContext';

const AdminRoute = ({children}) => {
    const location = useLocation();
    const {user, isLoading, admin} = useAuth();

    if(isLoading){
       return  <div className='text-center my-5'><Spinner animation="border" /></div>;
    }

    return user.email && admin ? children : <Navigate to="/" state={{from: location}} />;
};

export default AdminRoute;