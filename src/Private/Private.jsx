import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components.jsx/Loading';

const Private = ({children}) => {
    const {loading,user} = useContext(AuthContext);
    const navigate = useNavigate();
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
    return (
        navigate('/login')
    );
};

export default Private;