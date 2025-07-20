import React, {  useContext } from 'react';

import { Navigate } from 'react-router';
import { AuthContext } from './Context/AuthContext';
import Loading from './loading';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
   if(user && user?.email){
    return children
   }
   return <Navigate to={'/signIn'}></Navigate>
};

export default PrivateRoute;