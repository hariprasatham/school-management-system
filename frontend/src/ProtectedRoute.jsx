// src/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from './components/Layout';

const ProtectedRoute = ({ isAuthenticated }) => {
  if (
    // !isAuthenticated
    false
  ) {
    return <Navigate to="/" replace />;
  }

  return <Layout />;
};

export default ProtectedRoute;