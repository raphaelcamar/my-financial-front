import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAccessContext } from '@/user/presenters/contexts/access';

export const PrivateRoute: React.FC = ({ children }) => {
  const { verifyInCache } = useAccessContext();
  const location = useLocation();

  const verifyUser = () => {
    if (!verifyInCache()) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  };

  return <>{verifyUser()}</>;
};
