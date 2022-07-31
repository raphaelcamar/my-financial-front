import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';

export const PrivateRoute: React.FC = ({ children }) => {
  const { verifyInCache } = useAccessAndAuthContext();
  const location = useLocation();

  const verifyUser = () => {
    if (!verifyInCache()) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  };

  return <>{verifyUser()}</>;
};
