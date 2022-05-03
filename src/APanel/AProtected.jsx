import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AProtected = () => {
    const auth = useAuth()
  return auth ? <Navigate to="/admin" />:<Outlet />
}

export default AProtected