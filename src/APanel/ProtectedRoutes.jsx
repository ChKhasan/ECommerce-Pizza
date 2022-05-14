import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useAdminToken from '../hooks/useAdminToken';

const ProtectedRoutes = () => {
    const adminToken = useAdminToken()
  return adminToken ? <Outlet />:<Navigate to="/login" />
}

export default ProtectedRoutes