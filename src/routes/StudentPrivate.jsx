import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import { Navigate } from 'react-router-dom';

const StudentPrivate = ({children}) => {
    const [isStudent] = useGetProducts();
    // console.log('from is student ', isStudent);

    if(!isStudent){
        return <Navigate to='/'></Navigate>
    }

    return children;
};

export default StudentPrivate;