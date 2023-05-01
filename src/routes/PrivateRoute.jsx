import React, { useContext } from 'react';
import { AuthContexApi } from '../AuthContext/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

// eslint-disable-next-line no-unused-vars, react/prop-types
const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContexApi)
    if(loading){
        return <Loader/>
    }
    if(user){
        return children
    }
    return ( <Navigate state={{from:location}} to={'/login'} replace></Navigate>);
};

export default PrivateRoute;