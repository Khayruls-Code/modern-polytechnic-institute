import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const TeacherRoute = ({ children }) => {
  const { user, isLoading, teacher } = useAuth()
  const location = useLocation()
  if (isLoading) {
    return <div>Nothing</div>
  } else if (!teacher) {
    return <div>Nothing</div>
  } else {
    return user.email && teacher ? children : <Navigate to="/login" replace state={{ from: location }} />;
  }
};

export default TeacherRoute;