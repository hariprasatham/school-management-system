import { Navigate, Outlet } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const ProtectedRoute = ({ isAuthenticated }: { isAuthenticated: () => boolean }) => {
  if (
    // !isAuthenticated()
    false
  ) {
    return <Navigate to="/" replace />;
  }

  return <Layout />;
};

export default ProtectedRoute;
